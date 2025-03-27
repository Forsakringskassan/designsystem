---
title: Filpresentatör
status: Produktionsklar
layout: component
component: FFileItem
---

Filpresentatör används för att presentera fil, till exempel när användaren valt fil med filväljaren.

```import test-id=default
FFileItemDefault.vue
```

## Filpresentatör med knapp och progress

```import test-id=button-progress
FFileItemButtonProgress.vue
```

## Ikoner

Filikonen till vänster bestäms av mimetype:

- Bilder använder `f-icon-pic`
- PDF använder `f-icon-pdf`
- Word-dokument använder `f-icon-doc`
- Övriga filer använder `f-icon-file`

```import test-id=icons
FFileItemIcons.vue
```

## API

:::api
vue:FFileItem
:::

## Relaterat

- {@link FFileItemPageObject FFileItemPageObject}
