# @fkui/tsconfig

Shared `tsconfig.json` presets for libraries and applications based on FKUI

## Recommended

The recommended `tsconfig.json` for general use.

Add to your `tsconfig.json`:

```
"extends": ["@fkui/tsconfig/recommended"]
```

## Cypress

Recommended configuration for Cypress, optionally combined with `recommended`:

Add to your `tsconfig.json`:

```
"extends": ["@fkui/tsconfig/recommended", "@fkui/tsconfig/cypress"]
```

## Vue

Recommended configuration for Vue, optionally combined with `recommended`:

Add to your `tsconfig.json`:

```
"extends": ["@fkui/tsconfig/recommended", "@fkui/tsconfig/vue"]
```
