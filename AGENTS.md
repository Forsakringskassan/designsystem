# Repository instructions

## Environment setup

Run commands from the repository root unless a command explicitly targets a workspace.

## Build

- `npm run build` builds the full project.
- `npm run build:docs` builds full documentation.
- Build one workspace with `npm --workspace <workspace-path> run build`, for example `npm --workspace packages/vue run build`.
- Run a specific workspace build step with `npm --workspace <workspace-path> run <script>`, such as `build:lib`, `build:dts`, or `build:api` where available.

For a quicker incremental documentation build, run `node generate-docs.mts` directly.
It only regenerates HTML files and skips typechecking and linting, so run the full `npm run build:docs` afterward to verify the results.

## Lint

- `npm run lint` runs the full suite: Prettier, ESLint, Stylelint, HTML-Validate, and Markdownlint.
- For changed files, run the relevant tool with only the paths to check: `npx prettier --check <paths>`, `npx eslint <paths>`, `npx stylelint <paths>`, `npx html-validate <paths>`, or `npx markdownlint-cli2 <paths>`.
- `npm run lint:fix` applies configured automatic fixes; review its changes before keeping them.

## Tests

`npm test` runs the lint suite first, then Vitest and workspace test scripts.
Cypress component tests run separately.
During development, prefer individual tools; run `npm test` only for full verification or when requested.

### Unit tests (Vitest)

Write tests for isolated logic and component behavior with Vitest, and run them with `npx vitest run`.

- To focus one or more files, add a test path: `npx vitest run <path-to-test>`.
- To focus a project, add its package name: `npx vitest run --project <project>`.

### Component tests (Cypress)

Write Cypress component tests for browser interactions with an individual component, and run them with `npx cypress run --component --headless`.

- Visual regression (screenshot) tests are enabled by default and inherently flaky; disable them unless explicitly requested by setting `env FKDS_DISABLE_VISUAL_REGRESSION=1` before running tests.
  Only disable if one or more suites uses `toMatchScreenshot()` assertions.
- Target a component spec with `--spec <path-to-spec>`.
  Multiple paths are joined with comma.
- Update screenshot reference-image baselines with `--env type=base` (with both `CI` and `FKDS_DISABLE_VISUAL_REGRESSION` unset).
