---
name: components
description: Creates or changes FKUI Vue components in packages/vue together with their styles in packages/design, html-validate metadata, selectors, pageobjects, tests, documentation and API reports. Use when adding a component or changing an existing component's props, events, slots, text keys, markup or styling.
title: components
---

## Purpose

A component in FKUI consists of design, documentation and code, and all three must be done before it is released (`CONTRIBUTING.md`).
This skill covers the code and where it connects to the documentation.
Use the `documentation` skill for the Swedish documentation text and `AGENTS.md` for commands.

A new component needs an agreed design and a go-ahead from the FKDS team before work starts.
Ask the user if either is unclear.

## Scope

Keep each change to the task at hand.
Do not fix technical debt you come across in the same change.
Suggest it to the user as a separate branch and pull request instead.
This applies in particular to:

- converting an Options API component to `<script setup>`
- converting runtime-declared props to type-based props
- moving an existing pageobject onto a selector object.

## Files for a new component

The table uses `FFoo` as the component and `foo` as its CSS block.

| Part                           | Path                                                                                                            |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| Component                      | `packages/vue/src/components/FFoo/FFoo.vue`                                                                     |
| Helpers                        | `packages/vue/src/components/FFoo/*.ts` in kebab-case, each with a `*.spec.ts`                                  |
| Exports                        | `FFoo/index.ts`, re-exported from `packages/vue/src/components/index.ts`                                        |
| Styles                         | `packages/design/src/components/foo/`, registered in `packages/design/src/components/_index.scss`               |
| html-validate metadata         | `packages/vue/htmlvalidate/elements/components.mjs`                                                             |
| Unit tests                     | `FFoo/FFoo.spec.ts`                                                                                             |
| Component and screenshot tests | `FFoo/FFoo.cy.ts`, with baselines in `FFoo/__screenshots__/`                                                    |
| Examples                       | `FFoo/examples/*.vue`                                                                                           |
| Selectors                      | `packages/vue/src/selectors/FFoo.selectors.ts` and `FFoo.selectors.spec.ts`, exported from `selectors/index.ts` |
| Pageobject                     | `packages/vue/src/cypress/FFoo.pageobject.ts`, exported from `cypress/index.ts`                                 |
| Docs page                      | `docs/components/<category>/FFoo.md`                                                                            |
| Pageobject docs                | `docs/functions/cypress/pageobjects/FFooPageObject.md` and `FFooPageObject/`                                    |
| API reports (generated)        | `etc/vue.api.md`, `etc/vue-cypress.api.md`, `etc/vue-selectors.api.md`                                          |
| Docs manifest (generated)      | `etc/docs-manifest.md`                                                                                          |

Two recent, complete additions to compare with: `git show --stat ce1daffa4c8` (FPaginator) and `git show --stat 056ff4d49db` (FDefinitionList).
The metadata file was named `components.js` back then and is now `components.mjs`.

Internal building blocks are prefixed `I`.
Shared ones such as `IPopup` live in `packages/vue/src/internal-components/` with metadata in `internal-components.mjs`, while those used by a single component stay in its folder, like `ITableAnchor.vue` in `FTable/`.
Experimental components are prefixed `X`, live in `packages/vue-labs/` and are documented in `docs/functions/labs/` with `status: Experimentell`.

## Vue component

ESLint enforces most of these rules through `@forsakringskassan/eslint-config-vue` and `eslint.config.mjs`.

- Use `<script setup lang="ts">`.
  The Options API is blocked by `vue/component-api-style`.
  Existing Options API components carry an `eslint-disable` comment marked as technical debt, and converting them is out of scope (see "Scope").
- Do not add a `<style>` block (`vue/no-restricted-block`).
  All styling belongs in `@fkui/design`.
  Style blocks are allowed only in examples, `*.ce.vue` files, `docs/`, `examples/` and `internal/`.
- Put the `<script>` block before `<template>`.
- Declare props type-based and set defaults by destructuring:

    ```ts
    const { size = "medium", label } = defineProps<{
        /**
         * Size of the component.
         */
        size?: "small" | "medium";
        /**
         * Visible label.
         */
        label: string;
    }>();
    ```

    Runtime declarations, as in `FBadge.vue`, are technical debt and out of scope (see "Scope").

- Declare events type-based, for example `defineEmits<{ close: [] }>()`, with a JSDoc comment on each event.
- Call the macros in the order `defineModel`, `defineProps`, `defineEmits`, `defineSlots`, `defineOptions`, `defineExpose`, and do not import them from `vue`.
- Do not give boolean props a default (`vue/no-boolean-default`).
  They are `false` when omitted, so name them as opt-ins such as `inverted` or `disabled`.
- Unused props and unused declared events are lint errors.
- Use `useTemplateRef()` for template refs.
- Use same-name shorthand bindings: `:components` instead of `:components="components"`.
- Put logic in separate kebab-case modules such as `compute-pages.ts`, each with its own unit tests.
  Logic that does not depend on Vue belongs in `@fkui/logic`.
- Give every `eslint-disable` comment a reason after `--`.

### API documentation

The API tables on the docs page are generated from the `.vue` file by `vue-docgen-api`.

- Write a JSDoc comment for every prop and every event.
- Document each slot with an `<!-- @slot Description. -->` comment directly before the `<slot>` element.
  Describe the bindings of a scoped slot with `@binding`.
- The docs generator does not read `defineModel()` yet.
  `FPaginateDataset.vue` also declares `modelValue` in `defineProps`, with a disable comment, so that it shows up in the docs.
- To deprecate a component, add a separate `<script lang="ts">` block that exports `{}` and has a `@deprecated` JSDoc comment (see `FTableButton.vue`).
  Also mark it as `deprecated` in the html-validate metadata.

### Text and translation

Do not hard-code text that users see or that assistive technology reads, such as `aria-label`.

- Use `const $t = useTranslate();` from `../../plugins`, then `$t("fkui.foo.key", "Svensk standardtext", { param })`.
- Name keys `fkui.<component>.<key>`, where the component name is in kebab case without the `f-` prefix, for example `fkui.paginator.next`.
- Put a JSDoc comment directly before every `$t()` call and before every interpolation parameter.
  The docs generator collects them into the text key table on the docs page (see "Documentation page").
- Only `{{ param }}` interpolation is supported, not i18next plurals or context.
- When the text needs markup or consumers often change it, add a prop or slot that overrides the key, like `navigatorLabel` in `FPaginator.vue`.

### Accessibility

FKUI targets WCAG 2.2 AA and EN 301 549 (`README.md`).

- Prefer native elements such as `<button type="button">`, `<nav>` and `<dl>`.
- Hide text visually but keep it for screen readers with the `sr-only` class.
- Axe and html-validate run automatically after every Cypress test.

## Styling in @fkui/design

Create `packages/design/src/components/foo/` with three files.

`_variables.scss` holds overridable variables whose values are theme custom properties:

```scss
$foo-color-text: var(--fkds-color-text-primary) !default;
$foo-color-background: var(
    --fkds-color-feedback-background-neutral-strong
) !default;
```

`_foo.scss` holds the rules:

```scss
@use "../../core";
@use "../../core/size";
@use "variables" as *;

.foo {
    color: $foo-color-text;
    background-color: $foo-color-background;
    padding: 0 size.$padding-050;
    line-height: core.densify(var(--f-line-height-large));

    &__title {
        font-weight: var(--f-font-weight-medium);
    }

    &--inverted {
        border-color: $foo-color-background;
    }
}
```

`_index.scss` contains only `@use "foo";`.

Register the component in `packages/design/src/components/_index.scss` in alphabetical order, both as `@forward "foo/variables";` and as `@use "foo";`.

- Name classes with BEM (`.foo`, `.foo__element`, `.foo--modifier`) and use the same names in the Vue template.
- Do not add global classes.
  Helper classes start with `.h-`.
- Take colors from the `--fkds-color-*` tokens and other values from the `--f-*` custom properties in `@fkui/theme-default`, which switch between light and dark themes.
  Never hard-code colors.
  The Stylelint rule `fkui/deprecated-variable` reports deprecated custom properties.
- Use `rem` for sizes and the spacing variables from `core/size` such as `size.$padding-050` and `size.$margin-100`.
- Wrap heights, line heights and vertical spacing that should shrink in dense mode in `core.densify()`.
- Use the `focus-indicator` mixin from `core` for focus styles.
- Handle forced colors (Windows high contrast) with the mixins in `core/mixins/forcedcolors`.
- Use `core.breakpoint-up()` and the related mixins, or a container query as in `_paginator.scss`, for responsive layout.
- Do not write vendor prefixes, because consumers run autoprefixer.

## html-validate metadata

Add an entry for each public element to `packages/vue/htmlvalidate/elements/components.mjs`, keyed by its kebab-case tag (`"f-foo"`).

- Describe the content model with `flow`, `phrasing` and `permittedContent`, and list the `slots`.
- List `attributes` in kebab case, with `enum` for allowed values and `boolean: true` for boolean props.
- Add `requiredAttributes` and `deprecated` where they apply.

Consumers validate their markup against this metadata through `@fkui/vue/htmlvalidate`.
Test the rules in `FFoo.spec.ts` under `describe("html-validate")` with `toBeValid()` and `toMatchInlineCodeframe()`, as in `FBadge.spec.ts`.

## Tests

Follow `TESTING.md`; this is a summary.

- `FFoo.spec.ts` (Vitest) covers props, events, v-model and html-validate rules.
    - Group the cases under `describe("props")`, `describe("events")`, `describe("v-model")` and `describe("html-validate")`.
    - Write each case as Given-When-Then.
    - Prefer `shallowMount`, `.get()` over `.find()` and `vi.spyOn` over `vi.fn()`.
    - Import the component last, directly from the `.vue` file.
- `FFoo.cy.ts` (Cypress) covers interaction through the pageobject and visual tests.
    - Take screenshots at more than one viewport, as `FBadge.cy.ts` does with a normal and a narrow one.
    - Add a density screenshot with `DensityWrapper` from `@fkui/test-utils/vue`.
    - Use `cy.prefersColorScheme()` and `cy.forcedColors()` for dark mode and forced colors.
    - Vue warnings and uncaught exceptions fail the test (`cypress/support/component.ts`).
- Run Cypress with `FKDS_DISABLE_VISUAL_REGRESSION=1`.
- Do not create or commit screenshot baselines.
  The team generates them in a fixed environment, because font rendering differs between operating systems.
  Write the screenshot tests, and tell the user which tests are new or changed so that they can get baselines.
- `cypress/e2e/live-example.cy.ts` loads every docs example on the built site, so examples need no e2e test of their own.
  Add a component test next to an example that has behavior, like `FPaginatorDatasetExample.cy.ts`.

## Selectors and pageobject

A framework-neutral selector object describes the component's DOM, and the Cypress pageobject is built on it.
Every new component needs a selector object.
Many older pageobjects do not use one yet, and moving them over is out of scope (see "Scope").

- `FFoo.selectors.ts` exports `function FFooSelectors(selector: string = ".foo")`, which returns `Object.freeze({ ... })` with a `selector` getter and one method per part.
    - Give every member TSDoc with `@public`, `@since` and `@example` blocks for Cypress and Playwright, as in `FTooltip.selectors.ts`.
    - Set `@since` to the version the change will be released in, usually the next minor version for a `feat` commit.
- `FFoo.selectors.spec.ts` tests the default selector and an explicit selector set with `v-test` and with `data-test`.
- `FFoo.pageobject.ts` exports `class FFooPageObject implements BasePageObject`, with `selector`, `el()` and methods built from the selectors.
    - Use plain class methods, not arrow functions assigned to properties.
    - Compose selectors with template literals instead of chaining `cy.get(...).find(...)`.
    - Use relative imports only (`packages/vue/src/cypress/README.md`).
- Document the pageobject in `docs/functions/cypress/pageobjects/` following `FPaginatorPageObject.md`.
  It is one page with `layout: api.class`, a shared `.vue` example and one `.cy.ts` example per method.
  Older pageobjects such as `FBadgePageObject/` use one page per method instead.

## Documentation page

The page is in Swedish and follows the `documentation` skill.

- Frontmatter has a Swedish `title`, `status: Produktionsklar` (or `Experimentell` or `Deprekerad`), `layout: component` and `component: FFoo`, or a list for several components.
- Put the page in the category folder under `docs/components/` that the menu should show it in.
- Example files are looked up by file name in all example folders, and the build fails when a name matches more than one file.
  Give every example a unique name, usually prefixed with the component name, like `FFooLiveExample.vue`.
- Write examples with `<script setup lang="ts">` and import components from `@fkui/vue`.
- When you move or rename a page, add `redirect_from` so that existing links keep working.

The page embeds examples, the text key table (only if the component uses `$t`) and the API tables like this:

````md
```import live-example
FFooLiveExample.vue
```

## Textnycklar

:::api
translation:FFoo
:::

## API

:::api
vue:FFoo
:::
````

End the page with a link to the pageobject, as `FBadge.md` does.

## Generated files

- Regenerate the API reports with `npm --workspace packages/vue run build`.
  It runs `build:dts` and then `build:api`, which updates `etc/*.api.md` locally and fails in CI when a report is out of date.
  Commit the updated reports.
- `npm run build:docs` updates `etc/docs-manifest.md`, which CI also verifies.
- Never edit these files by hand.

## Changing an existing component

- Read the component's `.vue` file, spec, `.cy.ts`, selectors, pageobject, metadata entry, SCSS and docs page before you change anything.
- A new or changed prop, event or slot needs a JSDoc comment, an updated html-validate metadata entry, a unit test, regenerated API reports and an updated docs page.
- A change to markup or class names needs updated selectors and pageobject methods, so consumer tests keep working.
- A visual change needs new screenshot baselines from the team's fixed environment, so tell the user which screenshot tests are affected.
- Removing or renaming a prop, event, slot, class or pageobject method is a breaking change.
  Deprecate it first (`@deprecated` and html-validate `deprecated`), and remove it only in a major release.
- Commit with Conventional Commits.
  Use `feat` for new API (minor release) and `fix` for corrections (patch release), and mark breaking changes with `!` or a `BREAKING CHANGE:` footer.

## Checks before handing over

Run the checks on the changed files, from the repository root:

```bash
npx prettier --check <paths>
npx eslint <paths>
npx stylelint <paths>
npx html-validate <paths>
npx markdownlint-cli2 <paths>
npx vitest run <spec-paths>
FKDS_DISABLE_VISUAL_REGRESSION=1 npx cypress run --component --headless --spec <cy-paths>
npm --workspace packages/vue run build
```

Run `npm run build:docs` when the docs page or examples changed.
