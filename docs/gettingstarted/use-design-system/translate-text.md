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
Designsystemet levererar {@link i18next stöd för i18next} men man kan själv implementera [TranslationProvider][TranslationProvider].
Den här guiden förutsätter att i18next används.

Vissa komponenter använder också slots eller props när formaterat eller komplext innehåll ska visas.
Läs mer under respektive komponent om hur man anpassar och översätter texter.

## Konfiguration

För att kunna översätta text måste din applikation måste sätta upp en TranslationProvider som tillhandhåller texter.

Texterna kan hämtas med REST-anrop, importeras statiskt och bundlas med i javascript eller hårdkodas direkt in i filen:

```ts
import { TranslationService } from "@fkui/logic";
import { i18nextProvider } from "@fkui/i18next-translate";

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

Läs mer om {@link i18next hur man använder i18nextProvider}.

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

Textnycklar som saknas kommer visa standardtexter från designsystemet, dvs du behöver inte översätta alla texter utan räcker med de du vill anpassa.

## Validering

Standard feltexter som visas vid validering hämtas från [ValidationService][ValidationService] och mappas med namnet på validatorn som ger felet:

```ts
import { ValidationService, ValidationErrorMessageBuilder } from "@fkui/logic";

const messages = ValidationErrorMessageBuilder.create()
    .map("required", "Fyll i text")
    .map("date", "Felaktigt datum")
    .mapCombined("required", "date", "Fyll i ett datum")
    .build();

ValidationService.addValidationErrorMessages(messages);
```

Läs mer om {@link ValidationErrorMessageBuilder.create `ValidationErrorMessageBuilder`}.

::: danger Tänk på att

`addValidationErrorMessages()` mergar med föregende mappningar inkl de standardtexter som designsystemet levererar.
Det innebär tyvärr att du måste mappa upp samtliga kombinationer själv och ha stenkoll på nya mappningar vid uppdatering av version då minsta förändring kräver att du matchar exakt hur designsystemets mappning ser ut.

Ett tips är att skapa ett snapshot test i eran kodbas som hämtar ut standardtexterna med [`getErrorMessages`][getErrorMessages] och vid uppdatering verifierar om snapshot ändrats.

:::

Du kan använda textnycklar för översättning genom att kombinera `TranslationService` och `ValidationErrorMessageBuilder`:

```ts
import {
    TranslationService,
    ValidationService,
    ValidationErrorMessageBuilder,
} from "@fkui/logic";

const $t = TranslationService.provider.translate;

const messages = ValidationErrorMessageBuilder.create()
    .map("required", $t("validation.error.required.default"))
    .map("date", $t("validation.error.date.format"))
    .mapCombined("required", "date", $t("validation.error.required.date"))
    .build();

ValidationService.addValidationErrorMessages(messages);
```

::: warning Tänk på att

Om du använder textnycklar måste texterna ha hämtats ner innan valideringsfelen skapas så de slås upp direkt.

:::

[getErrorMessages]: ../../logic/functions/getErrorMessages.html
[TranslationService]: ../../logic/variables/TranslationService.html
[TranslationProvider]: ../../logic/interfaces/TranslationProviderInterface.html
[ValidationService]: ../../logic/variables/ValidationService.html
