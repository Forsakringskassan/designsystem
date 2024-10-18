---
title: i18nextProvider
name: i18nextProvider
layout: pattern
sortorder: 2
---

Skapar en ny {@link I18nextProvider} för användning med `TranslationService`.

## Syntax

```ts
i18nextProvider(options);
```

### Parametrar

`options`
: Inställningar för provider.

    `debug: boolean` {@optional}
    : Aktivera debug-läge i i18next. Läs mer om [debug loggning](https://www.i18next.com/overview/configuration-options#logging)

    `defaultLanguage: string`
    : Initialt språk att läsa in.
    Skickas in som `lang` till `loadLanguage` när initialt språk laddas in.

    `loadLanguage(lang: string): NestedStringRecord | Promise<NestedStringRecord>`
    : Callback för att hämta texter för givet språk.

### Returvärde

Returnerar en {@link I18nextProvider}.

## Exempel

```ts
const provider = i18nextProvider({
    defaultLanguage: "sv",
    async loadLanguage(lang) {
        const response = await fetch(`/texts/${lang}.json`);
        return await response.json();
    },
});
```
