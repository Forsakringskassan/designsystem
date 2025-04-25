---
name: ValidationErrorMessageBuilder.mapCombined
title: "ValidationErrorMessageBuilder: mapCombined() method"
short-title: mapCombined()
layout: api.method
---

Sätter en feltext på en kombination av validatorer.
Samma som {@link ValidationErrorMessageBuilder.map `map()`} fast begränsar felet till förekomst av andra validatorer.

Exempelvis kan man sätta felet för `required` validatorn när `date` validatorn också förekommer (oavsett om `date` ger ett fel eller ej).

## Syntax

```ts nocompile nolint
mapCombined(validatorName, dependentValidatorName, message, elementType);
```

### Parametrar

`validatorName: string`
: Namn på validator.

`dependentValidatorName: string`
: Namn på ytterligare en validator som kombineras med första validatorn.

`message: string`
: Feltext som ska visas när validator ger ett fel.

`elementType: "text" | "radio" | "checkbox" | "select" | "textarea"` {@optional}
: Begränsa feltexten till en specifik typ av inmatningsfält.

## Exempel

Mappar en feltext till `required` validatorn där `"Fyll i text"` visas som standard och där både `required` och `date` validatorerna används visas istället `"Fyll i ett datum""`.

```ts
import { ValidationErrorMessageBuilder, ValidationService } from "@fkui/logic";

/* --- cut above --- */

const messages = ValidationErrorMessageBuilder.create()
    .map("required", "Fyll i text")
    .mapCombined("required", "date", "Fyll i ett datum")
    .build();

ValidationService.addValidationErrorMessages(messages);
```
