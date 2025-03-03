---
title: "@fkui/tsconfig"
short-title: TSConfig
layout: article
---

Rekommenderad konfiguration för TypeScript (`tsconfig.json`).

## Användning

Lägg till i din `tsconfig.json`:

```json name=base-config hidden
{
    "compilerOptions": {
        /* ... */
    }
}
```

```json name=recommended compare=base-config context=5
{
    "extends": ["@fkui/tsconfig/recommended"],
    "compilerOptions": {
        /* ... */
    }
}
```

## Cypress

Utöver den rekommenderade konfigurationen använd konfigurationen för Cypress:

```json compare=recommended context=5
{
    "extends": ["@fkui/tsconfig/recommended", "@fkui/tsconfig/cypress"],
    "compilerOptions": {
        /* ... */
    }
}
```

## Vue

Utöver den rekommenderade konfigurationen använd konfigurationen för Vue:

```json compare=recommended context=5
{
    "extends": ["@fkui/tsconfig/recommended", "@fkui/tsconfig/vue"],
    "compilerOptions": {
        /* ... */
    }
}
```
