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
        - textnycklar
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

## Strikt typning av textnycklar

Som standard accepterar `$t()`-funktionen och `useTranslate()` vilken textsträng som helst som nyckel.
För att få en bättre utvecklarupplevelse med autokomplettering i din IDE (IntelliSense) och för att fånga upp felstavade eller saknade textnycklar redan vid kompilering, kan du registrera dina textnycklar globalt i biblioteket.

### TypeScript-konfiguration (`tsconfig.json`)

För att din globala typ-fil (`.d.ts`) ska registreras och för att TypeScript ska kunna läsa in dina JSON-filer som underlag för nycklarna, krävs specifika inställningar i din `tsconfig.json`.

#### Inkludera din definitionsfil

Kontrollera att mappen där du skapat din `translations.d.ts` ingår i projektets källfiler. Om du har en strikt `include`-lista måste du lägga till din types-mapp:

```jsonc
{
    "include": [
        "src/types/**/*.d.ts", // Säkerställ att denna rad finns
    ],
}
```

#### Tillåt import av JSON

Eftersom `RepoSchema` bygger på `typeof data`, där `data` är en importerad `.json`-fil, måste TypeScript tillåtas att läsa JSON-moduler som en del av typsystemet:

```jsonc
{
    "compilerOptions": {
        "resolveJsonModule": true, // Krävs för att importera .json-filer som typ-underlag
        "esModuleInterop": true, // Krävs ofta för att hantera default imports från JSON
    },
}
```

### Implementering

Skapa en global definitionsfil, förslagsvis `src/types/translations.d.ts`, i ditt projekt. Det är viktigt att du importerar din faktiska JSON-fil och använder hjälptypen `NestedKeys` för att skapa en union av alla möjliga nycklar.

```ts nocompile nolint
// src/types/translations.d.ts

// 1. Importera biblioteket (krävs för att module augmentation ska fungera)
import { type NestedKeys } from "@fkui/logic";

// 2. Importera din källa för textnycklar (t.ex. en språkfil)
import data from "data.json";

// 3. Definiera schemat
type RepoSchema = typeof data;

// 4. Utöka bibliotekets interna interface
declare module "@fkui/logic" {
    export interface CustomTranslationRegistry {
        Keys: NestedKeys<RepoSchema>;
    }
}
```

Givet att `data.json` har följande format:

```json
{
    "awesome-component": {
        "label": "Awesome label",
        "screenreader": "Text for screenreader"
    }
}
```

### Undantag: Dynamiska nycklar och råa strängar

Ibland räcker inte den strikta typningen till.
Ett vanligt scenario är när du bygger en textnyckel dynamiskt baserat på data från ett API (t.ex. en status eller en förmånstyp), eller när du skickar vidare `$t` som en prop till en hjälpfunktion.

Eftersom TypeScript inte kan veta vid kompilering exakt vad ett API-svar kommer att innehålla, kommer den strikta typningen att varna för att en vanlig `string` inte matchar dina kända nycklar.

#### Hantering med Generic `TranslateFunction<string>`

För att lösa detta kan du explicit typa om funktionen till `TranslateFunction<string>`. Detta "låser upp" funktionen så att den återigen accepterar vilken sträng som helst.

**Exempel i en hjälpfunktion:**
När du skapar en funktion som tar emot översättningsfunktionen som argument, deklarera den som `TranslateFunction<string>`.

```ts nocompile nolint
function formateraText(t: TranslateFunction<string>): string {
    // 'value' är en sträng från ett API som byggs ihop till en nyckel.
    // TypeScript tillåter detta eftersom vi använder TranslateFunction<string>.
    const value = props.value;
    return t(`data.${value}`);
}
```

#### Användning i template

Om du har aktiverat den strikta typningen globalt (via `CustomTranslationRegistry`) kommer den lokala `$t`-funktionen i dina komponenter att förvänta sig kända nycklar.

När du behöver skicka `$t` till en hjälpfunktion som hanterar dynamiska strängar (som i exemplet med `formateraText`), måste du casta om den med `as TranslateFunction<string>` för att undvika typfel.

**Kodexempel:**

```tsx nocompile nolint
<p>
    {{
       formateraText($t as TranslateFunction<string>),
    }}
</p>
```
