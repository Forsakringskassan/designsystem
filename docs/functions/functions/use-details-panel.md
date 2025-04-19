---
title: useDetailsPanel() composable
short-title: useDetailsPanel()
name: useDetailsPanel
layout: api.composable
---

Composable för att interagera med {@link FDetailsPanel detaljpanel}.

## Syntax

```ts nocompile nolint
function useDetailsPanel(name);
```

### Parametrar

`name: string`
: Namn på detaljpanel

### Returvärde

Ett objekt som innehåller:

`open(item, options)`
: Öppnar detaljpanelen med givet objekt

    `item: T`
    : Objekt som detaljpanelen ska visa.

    `options` {@optional}
    : Inställningar

        `onClose(item, reason)` {@optional}
        : En callback som anropas när detaljpanelen stängs.

            `item` är det objekt detaljpanelen öppnats med och `reason` är en konsument-angiven sträng med orsaken till att den stängdes (exempelvis `"spara"`, `"avbryt"` osv).

## Exempel

TDB

## Relaterat

- {@link FDetailsPanel}
