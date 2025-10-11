---
title: Anpassa och översätt text
layout: article
sortorder: 100
search:
    terms:
        - translate
        - translation
        - översättning
        - översätta
        - i18n
---

Alla komponenter från designsystemet har stöd för att anpassa och översätta texter.
Designsystemet levererar text på svenska.

I huvudsak används [TranslationService][TranslationService] för att översätta text med hjälp av textnycklar.
Designsystemet levererar {@link i18next stöd för i18next} men du kan själv implementera [TranslationProvider][TranslationProvider].
Den här guiden förutsätter att i18next används.

Vissa komponenter använder också slots eller props när formaterat eller komplext innehåll ska visas.
Läs mer under respektive komponent om hur du anpassar och översätter texter.

## Konfiguration

För att kunna översätta text måste din applikation sätta upp en TranslationProvider som tillhandhåller texter.

Texterna kan hämtas med REST-anrop, importeras statiskt och bundlas med i javascript eller hårdkodas direkt in i filen:

```ts
import { i18nextProvider } from "@fkui/i18next-translate";
import { TranslationService } from "@fkui/logic";

/* create a new 18next translation provider */
const provider = await i18nextProvider({
    defaultLanguage: "sv",
    loadLanguage() {
        return {
            "fkui.foo.bar": "Översatt text",
        };
    },
});

/* use provider for TranslationService translations */
TranslationService.changeProvider(provider);
```

Läs mer om {@link i18next hur du använder i18nextProvider}.

Om du använder Vue för att skriva din applikation måste du också aktivera {@link TranslationPlugin}:

```ts
import { createApp, defineComponent } from "vue";

const App = defineComponent({});

/* --- cut above --- */

import { TranslationPlugin } from "@fkui/vue";

const app = createApp(App);
app.use(TranslationPlugin);
```

## Textnycklar

Översättningar kan antingen ligga som ett platt eller nästlat objekt:

```json
{
    "fkui.foo.bar": "Översatt text"
}
```

```json
{
    "fkui": {
        "foo": {
            "bar": "Översatt text"
        }
    }
}
```

Båda är ekvivalenta och motsvarar textnyckel `fkui.foo.bar`.

Översättningar kan innehålla interpolering med parametrar:

```json
{
    "fkui.hello-world": "Hello {{ namn }}!"
}
```

Vilka textnycklar och parametrar som finns tillgängliga visas i dokumentationen för respektive komponent.

::: warning Tänk på att

i18next har många funktioner som designsystemet inte stödjer så som pluralisering eller context.
Vi använder endast interpolering med parametrar.

:::

Textnycklar som saknas kommer visa standardtexter från designsystemet, vilket innebär att du behöver inte översätta alla texter utan det räcker med de du vill anpassa.

## Validering

Standard-feltexter som visas vid validering hämtas från [ValidationService][ValidationService] och mappas med namnet på validatorn som ger felet:

```ts
import { ValidationErrorMessageBuilder, ValidationService } from "@fkui/logic";

const messages = ValidationErrorMessageBuilder.create()
    .map("required", "Fyll i text")
    .map("date", "Felaktigt datum")
    .mapCombined("required", "date", "Fyll i ett datum")
    .build();

ValidationService.setErrorMessages(messages);
```

Läs mer om {@link ValidationErrorMessageBuilder.create `ValidationErrorMessageBuilder`}.

::: info Tänk på att

`setErrorMessages()` slår ihop med föregående mappningar inklusive de standardtexter som designsystemet levererar (som innehåller en del specifika kombinationer).

Du kan använda `clearErrorMessages()` eller `clear` flaggan till `setErrorMessages()` för att rensa tidigare texter men du måste då själv mappa upp kombinationer så som `required.radio`, `required.checkbox` osv.

Se gärna källkoden för [designsystemets standardtexter](https://github.com/Forsakringskassan/designsystem/blob/main/packages/logic/src/services/ValidationService/ValidationTranslations/get-error-messages.ts).

:::

Du kan använda textnycklar för översättning genom att kombinera `TranslationService` och `ValidationErrorMessageBuilder`:

```ts
import {
    TranslationService,
    ValidationErrorMessageBuilder,
    ValidationService,
} from "@fkui/logic";

const $t = TranslationService.provider.translate;

const messages = ValidationErrorMessageBuilder.create()
    .map("required", $t("validation.error.required.default"))
    .map("date", $t("validation.error.date.format"))
    .mapCombined("required", "date", $t("validation.error.required.date"))
    .build();

ValidationService.setErrorMessages(messages);
```

::: warning Tänk på att

Om du använder textnycklar måste texterna ha hämtats ner innan valideringsfelen skapas då de slås upp direkt.

:::

[getErrorMessages]: ../../logic/functions/getErrorMessages.html
[TranslationService]: ../../logic/variables/TranslationService.html
[TranslationProvider]: ../../logic/interfaces/TranslationProviderInterface.html
[ValidationService]: ../../logic/variables/ValidationService.html
