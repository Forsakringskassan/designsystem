---
title: Validator - anpassad
layout: pattern
---

Om ingen av de fördefinerade validatorerna passar dina behov så går det bra att skapa en egen validator i din applikation.

Låt oss utgå från att du vill ha en validator som verifierar att texten i ett input-fält börjar med ett konfigurerbart värde.
Du vill även att validatorn ska ha ett fördefinierad felmeddelande som visas när valideringen inte är rätt.

## Validatorn

En validator implementeras genom att skapa ett objekt som uppfyller interfacet `Validator`:

```ts
import { type ValidatableHTMLElement } from "@fkui/logic";

/* --- cut above --- */

interface Validator<TConfig> {
    name: string;
    validation(
        value: string,
        element: ValidatableHTMLElement,
        config: TConfig,
    ): boolean;
}
```

där:

- `value` är det inmatade värdet som ska valideras
- `element` är HTML elementet vars värde valideras
- `config` är konsumentens konfiguration (dvs det som skickats in till v-validation="{ ... }")

Observera att värdet i `value` är en `string` och att det är vy-värdet innan parsning och formatering.
Värdet kan därmed behöva hantering och verifiering innan den faktiska valideringen sker.
Det är först efter en lyckad validering som eventuell parsning och formatering sker.
Se mer om parsning och formatering här: {@link custom-formatter-parser Gör din egen formaterare och parser}.

Resultatet av valideringen returneras i form av en `boolean` där:

- `true` innebär att det inmatade värdet är giltigt
- `false` innebär att det inmatade värdet är ogiltigt och ett felmeddelande presenteras

Börja med att skapa en enklare validering där du kontrollerar om `value` börjar med den fasta strängen "demo".
Om din validator används på frivilliga fält, så är även ett tomt värde giltigt.
Den kontrollen görs enklast tidigt i din validator-logik med hjälp av metoden `isEmpty`.
Validatorns `name` är det som sedan används för att aktivera validatorn på ett input-fält.

```ts
import { type Validator, isEmpty } from "@fkui/logic";

export const startsWithValidator: Validator = {
    name: "startsWith",
    validation(value) {
        if (isEmpty(value)) {
            return true;
        }
        return value.startsWith("demo");
    },
};
```

Glöm inte att skriva tester som verifierar att validatorn fungerar som tänkt.
Förslagsvis genom att bryta ut logiken till en egen funktion, då blir den enkel att testa med Jest.

```diff
+function startsWithPattern(input: string, pattern: string): boolean {
+   return input.startsWith(pattern);
+}

export const startsWithValidator: Validator = {
    name: "startsWith",
    validation(value) {
        if (isEmpty(value)) {
            return true;
        }
-        return value.startsWith("demo");
+        return startsWithPattern(value, "demo");
    },
};
```

## Konfiguration

För att få en mer flexibel validator kan du göra det möjligt att välja start-sträng.
Det gör du genom att ge den stöd för att ta emot en konfiguration från konsumenten.
Om konsumenten inte förser validatorn med konfiguration så sätter du även ett standardvärde "demo".

```diff
function startsWithPattern(input: string, pattern: string): boolean {
    return input.startsWith(pattern);
}

+interface StartsWithConfig {
+    startString?: string;
+}

+const defaultConfig = {
+    startString: "demo",
+};

-export const startsWithValidator: Validator = {
+export const startsWithValidator: Validator<StartsWithConfig> = {
    name: "startsWith",
-    validation(value) {
+    validation(value, element, userConfig) {
        if (isEmpty(value)) {
            return true;
        }
+       const config = { ...defaultConfig, ...userConfig };
-       return startsWithPattern(value, "demo");
+       return startsWithPattern(value, config.startString);
    },
};
```

Om det finns möjlighet till felaktig konfiguration eller om standardvärden inte används måste du införa felhantering:

```ts
import { type Validator, isEmpty, isSet } from "@fkui/logic";

interface StartsWithConfig {
    startString?: string;
}

/* --- cut above --- */

export const startsWithValidator: Validator<StartsWithConfig> = {
    name: "startsWith",
    validation(value, element, configuration) {
        const { startString } = configuration;
        if (!isSet(startString)) {
            throw new Error(
                "startsWithValidator: configuration.startString is missing!",
            );
        }
        if (isEmpty(value)) {
            return true;
        }
        return value.startsWith(startString);
    },
};
```

## Registrering

För att göra validatorn tillgänglig för användning i din applikation så behöver den registreras.
Tänk på att bara registrera validatorn en gång, förslagsvis görs det globalt tillsammans med registrering av plugins m.m. i t.ex. `main.ts`. Gör det inte i en komponents lifecycle-hooks så som `created`, `mounted` m.fl.

```diff
+ ValidationService.registerValidator(customStartValidator);
```

Nu när validatorn är klar så passar det bra att skriva komponenttester för att verifiera att validatorn är rätt registrerad och att den går att använda tillsammans med sin konfiguration.

## Användning

Aktivera validatorn på ditt inputfält genom att lägga till direktivet `v-validation.startsWith` och förse den med en konfiguration.
I exemplet nedan så anger du värdet `test` till konfigurationens attribut `startString`. Nu kommer validatorn validera att input-fältets värde börjar med "test".

```diff
<f-text-field
    v-model="model"
+    v-validation.startsWith="{
+        startsWith: { startString: 'test' },
+    }"
>
    Detta fält accepterar bara strängar som börjar med 'test'
</f-text-field>
```

## Felmeddelanden

Om input-fältets värde inte börjar med "test", kommer fältet att markeras som felaktigt och felmeddelandet "STARTSWITH" kommer att visas vid ettiketten.
För att få ett mer förklarande felmeddelande så uppdaterar du exemplet med en bättre text.
Här finns det två vägar att gå.
Antigen sätter man en global standardtext (rekomenderat) eller så sätter man en specifik text för varje input-fält som använder validatorn.

Börja med att sätta ett specifikt felmeddelande till just detta input-fält.
Det gör du genom att lägga till attributet `errorMessage` till validatorns konfiguration, med en tillhörande text.

```diff
<f-text-field
    v-model="model"
    v-validation.startsWith="{
        startsWith: {
            startString: 'test',
+            errorMessage: 'Fältet börjar med fel värde.' },
    }"
>
    Detta fält accepterar bara strängar som börjar med 'test'
</f-text-field>

```

Ett bättre sätt är att registrera felmeddelandet globalt.
:::alt custom-validator-global-error-message

:::

I detta lite enklare exempel så nöjer vi oss med att registrera felmeddelandet direkt i applikationen.
Då behöver `errorMessage` användas och felmeddelande blir samma på alla ställen i applikationen där validatorn används.

```diff
  ValidationService.registerValidator(customStartValidator);
+ ValidationService.addValidationErrorMessages(
+    ValidationErrorMessageBuilder.create()
+        .map("startsWith", "Fältet börjar med fel värde.")
+        .build(),
);

```

## Exempel

Här nedan visas ett komplett exempel med tre input-fält.

```import
CustomValidatorExample.vue
```

## Relaterat

{@link validation Validering och felhantering}

{@link validators Validatorer}

{@link ValidationPlugin ValidationPlugin}

{@link textfield-specialized Specialiserade inmatningsfält}
