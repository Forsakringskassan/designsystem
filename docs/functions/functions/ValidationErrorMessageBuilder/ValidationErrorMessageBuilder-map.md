---
name: ValidationErrorMessageBuilder.map
title: "ValidationErrorMessageBuilder: map() method"
short-title: map()
layout: api.method
---

Sätter en feltext på en validator.
Felet baseras i först hand på den validator som felet kommer från men kan också ta hänsyn till vilken typ av inmatningsfält som använts.

Om fel mappas både med och utan `elementType` används i första hand feltexten för det inmatningsfältet och i andra hand den som inte är specifikt för inmatningsfältet.
Ordningen på anropen till `map()` spelar ingen roll.

## Syntax

```ts nocompile nolint
map(validatorName, message, elementType);
```

### Parametrar

`validatorName: string`
: Namn på validator.

`message: string`
: Feltext som ska visas när validator ger ett fel.

`elementType: "text" | "radio" | "checkbox" | "select" | "textarea"` {@optional}
: Begränsa feltexten till en specifik typ av inmatningsfält.

## Exempel

Mappar en feltext till `required` validatorn där `"Fyll i text"` visas som standard och för radioknappar med `required` validatorn visas `"Välj ett av alternativen"`.

```ts
import { ValidationErrorMessageBuilder, ValidationService } from "@fkui/logic";

/* --- cut above --- */

const messages = ValidationErrorMessageBuilder.create()
    .map("required", "Fyll i text")
    .map("required", "Välj ett av alternativen", "radio")
    .build();

ValidationService.addValidationErrorMessages(messages);
```
