---
title: Felmeddelande - anpassat
layout: content-with-menu
---

Samtliga inmatningskomponenter har en slot `error-message` med två bindings:

-   `hasError` som talar om huruvida det finns ett valideringsfel eller ej
-   `validationMessage` innehåller felmeddelanden kopplat till valideringsfelet.

Detta kan användas för att - som konsument av komponenterna - själv ansvara för presentationen av felmeddelandet (`validationMessage`).

Exempel:

```diff
  <f-text-field>
 +    <template #error-message="{ hasError, validationMessage }">
 +        <template v-if="hasError">
 +            Detta fältet har ett fel: {{ validationMessage }}.
 +        </template>
 +    </template>
  </f-text-field
```

Har man använt `ValidationErrorMessageBuilder` så innehåller `validationMessage` det felmeddelande man mappat upp.

## Relaterat

{@link validation Validering och felhantering}

{@link validators Validatorer}

{@link ValidationPlugin ValidationPlugin}
