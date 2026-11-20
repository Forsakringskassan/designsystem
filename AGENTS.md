# Repository instructions

## Environment setup

- Run commands from the repository root unless a command explicitly targets a workspace.

## Build

- `npm run build` builds the full project.
- `npm run build:docs` builds documentation.
- To build one workspace, use `npm --workspace <workspace-path> run build`, for example `npm --workspace packages/vue run build`.
- To run a specific workspace build step, use `npm --workspace <workspace-path> run <script>`, such as `build:lib`, `build:dts`, or `build:api` where available.

## Lint

- `npm run lint` runs the full lint suite: Prettier check, ESLint, Stylelint, HTML-Validate, and Markdownlint.
- For changed files, run the relevant tool directly and pass only the paths you need to check: `npx prettier --check <paths>`, `npx eslint <paths>`, `npx stylelint <paths>`, `npx html-validate <paths>`, or `npx markdownlint-cli2 <paths>`.
- `npm run lint:fix` applies the configured automatic fixes.
- Review changes from `npm run lint:fix` before keeping them.

## Tests

`npm test` runs the lint suite first, then Vitest, then test scripts defined by workspaces.
Cypress component tests are run separately.

### Unit tests (Vitest)

- Run unit tests with `npx vitest run`.
- To focus Vitest, add a test path: `npx vitest run <path-to-test>`.
- Use Vitest for isolated logic and component behavior.

### Component tests (Cypress)

- Run component tests headlessly with `npx cypress run --component --headless`.
- To target a component spec, add `--spec <path-to-spec>`.
- Use component tests for browser interactions with an individual component.
