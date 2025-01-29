---
title: Version 6 migreringsguide
name: migrating-to-v6
layout: article
---

## Summering

Följande deprekerade komponenter har tagits bort:

- `FCheckboxGroup`
- `FCheckboxGroupField`
- `FRadioGroup`
- `FRadioGroupField`

För Cypress pageobjekt:

- `trimmedText()` metoden är borttagen från samtliga pageobjekt (ej att förväxla med tredjeparts kommando/assertion med samma namn).

## `FCheckboxGroup` och `FCheckboxGroupField`

Den deprekerade komponenten `FCheckboxGroup` har tagits bort och är ersatt med `FFieldset`, se separat {@link migrating-to-fieldset migreringsguide för fieldset}.

Det deprekerade aliaset `FCheckboxGroupField` har tagits bort och är ersatt med `FCheckboxField`.

## `FRadioGroup` och `FRadioGroupField`

Den deprekerade komponenten `FRadioGroup` har tagits bort och är ersatt med `FFieldset`, se separat {@link migrating-to-fieldset migreringsguide för fieldset}.

Det deprekerade aliaset `FRadioGroupField` har tagits bort och är ersatt med `FRadioField`.

## Pageobjects

### `trimmedText()` metoden

Den deprekerade `trimmedText()` metoden är borttagen från samtliga pageobjekt.
Ej att förväxla med tredjeparts kommando/assertion med samma namn som med fördel kan användas som ersättare.

Som förslag till ersättare kan någon av följande tekniker användas:

- `cy.get(..).should("have.text", "...")` - givet att det inte finns inledande eller efterföljande whitespace kan native `have.text` användas.
- `cy.get(..).should("contain.text", "...")` - givet att du testar hela textens innehåll kan native `contain.text` användas.
- `cy.get(..).should("trimmedText", "...")` - tredjeparts assertion som tillhandhåller motsvarande (och buggfri) lösning kan användas.

Specifikt, för varje pageobjekt kan `.trimmedText().should(..)` ersättas med:

- För `FBadgePageObject` ersätt med `.el().should(..)`.-
- För `FCheckboxFieldPageObject` ersätt med `.label().should(..)`.
- För `FLabelPageObject` ersätt med `.el().should(..)`
- För `FRadioFieldPageObject` ersätt med `.label().should(..)`.
- För `FSelectFieldPageObject` ersätt med `.selectedOption().should(..)`.
