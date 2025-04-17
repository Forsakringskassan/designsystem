---
title: Validation Plugin
layout: content-with-menu
---

`ValidationPlugin` möjliggör validering av inmatningsfält genom att lägga till direktivet `v-validation`.
Internt används `ValidationService` ifrån `@fkui/logic`.

`ValidationPlugin` initialiseras på nedan sätt (bör göras så tidigt i applikationen som möjligt, t.ex. main.ts )

```ts
import { defineComponent } from "vue";

const App = defineComponent({});

/* --- cut above ---*/

import { createApp } from "vue";
import { ValidationPlugin } from "@fkui/vue";

const app = createApp(App);
app.use(ValidationPlugin);
app.mount("#app");
```

Via `ValidationService.addValidationErrorMessages` kan man specificera översättningar av validator fel.
I nedan exempel anges ett objekt med validatornamnet som nyckel och översättning som värde (om översättning saknas så kommer validatornamnet istället användas).

```ts
import { ValidationService } from "@fkui/logic";

ValidationService.addValidationErrorMessages({
    required: "Fältet krävs",
    personnummerFormat: "Felaktigt format på personnummer",
});
```

För att få _autocompletion_ av validatornamn så rekommenderas att använda `ValidationErrorMessageBuilder`:

```ts
import { ValidationService, ValidationErrorMessageBuilder } from "@fkui/logic";

const messages = ValidationErrorMessageBuilder.create()
    .map("required", "The field is required")
    .map("personnummerFormat", "Bad formatted social security number")
    .mapCombined(
        "required",
        "personnummerFormat",
        "You must enter a social security number",
    )
    .build();

ValidationService.addValidationErrorMessages(messages);
```

## Användning

Flera validatorer kan läggas till fältet genom att separera dem med punkter. Vissa validatorer kräver en konfiguration vilket görs genom att ange konfigurationen i direktivsvärdet.

**Observera** Ordningen definierar prioriteten för varje validator, ju längre till vänster desto högre prioritet.
Till exempel i `v-validation.required.maxLength.minLength` kommer den `required` validatorn att köras först och endast om den validatorn är giltig kommer nästa validator att köras och så vidare.

```import
ValidationPluginExample.vue
```

Valideringsdirektivet är även reaktivt vilket betyder att man kan binda variabler i konfigurationen och när variablerna uppdateras i runtime så kommer valideringen hantera detta.

```import
ValidationPluginVariables.vue
```

`v-validation`-direktivet skickar `ValidityEvents` under inmatning och när fokus tappas.
`ValidityEvent` innehåller information om valideringens status.

```import
ValidationPluginValidityEvent.vue
```

## Utökade komponenter med default-validering

Om man behöver utveckla en egen komponent med inbyggd validering som standard-beteende så måste man lägga till validatorn i komponentens mounted()-metod via metoden `ValidationService.addValidatorsToElement()` och med tredje parametern `isBaseConfigs` satt till `true`:

```ts
import { useTemplateRef } from "vue";
import { ValidationService, type ValidatorConfigs } from "@fkui/logic";

const validatorConfigs: ValidatorConfigs = {
    email: { errorMessage: "E-posten är inte korrekt ifylld" },
};

const element = document.querySelector<HTMLInputElement>("#my-element");
if (element) {
    ValidationService.addValidatorsToElement(element, validatorConfigs, true);
}
```

Se implementationen av komponenten FEmailTextField på sidan {@link textfield-specialized Inmatningsfält specialiserade} för konkret exempel.

## Applikationsspecifikt felmeddelande

Alla validatorers konfiguration tar attributet `errorMessage` som ersätter felmeddelandet som definieras med `ValidatorService.addValidationErrorMessages` funktionen.

```import
ValidationPluginErrorMessage.vue
```

## Prefix för att urskilja fel med samma etiketter

I de fall då flera fält har samma etikett kan det bli svårt att urskilja dem i fellistan.
Vue-direktivet `v-validation-prefix` plockar ut `errorMessage` från alla `component-validity` event som kommer underifrån i DOM hierarkin och lägger på den angivna texten som prefix innan det bubblar vidare till formuläret.
Det innebär att man kan lägga direktivet på flera platser för att kontinuerligt lägga på fler prefix.

```import
ValidationPluginFormValidation.vue
```

## Inaktivera validering

Om du dynamiskt behöver aktivera / inaktivera en validering, kan du passa in `enabled` som option på samtliga validatorer.
Ett use-case för detta är tex om ett fält längre ned skall vara required baserat på val som tidigare har gjorts.

```html static
<label class="label" for="required-input"> Villkorsstyrd validering </label>
<input
    id="required-input"
    type="text"
    v-validation.required="{ required: { enabled: myCondition } } "
    maxlength="100"
/>
```

```import
ValidationPluginToggleEnabled.vue
```

## ValidationService

`ValidationService` används när man vill tvinga revalidering av fält, t.ex. vid `submit`.
Den erbjuder även funktioner för att sätta fel ifrån servern.

## Revalidera fält

Exempel på revalidering av all fält på denna sida.

```import
ValidationPluginRevalidate.vue
```

## Server-fel

Exempel på att sätta serverfel på all fält på denna sida.

```import
ValidationPluginValidateAll.vue
```

## Inaktiva fält

Vid validering tolkas inaktiva fält (inmatningsfält med `disabled` attributet satt) som giltiga oavsett resultatet från validering.
Detta eftersom användaren inte har möjlighet att interagera med inaktiva fält och därför inte kan rätta felet.

Om du dynamiskt växlar `disabled` krävs det att du manuellt validerar om elementet när fältet blir inaktivt för att tömma eventuella existerande fel.
Det rekommenderade sättet är att använda sig av event listeners för `change`, `click` osv och validera om därifrån.

```import
ValidationPluginToggleDisable.vue
```

## Relaterat

{@link validation Validering och felhantering}

{@link custom-validator Validator - anpassad}

{@link cross-validation Korsvalidering}

{@link length-validation Längdvalidering}

{@link textfield-specialized Specialiserade inmatningsfält}
