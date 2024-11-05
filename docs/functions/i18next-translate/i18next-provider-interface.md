---
title: I18nextProvider
name: I18nextProvider
layout: pattern
---

Provider till `TranslationService` som använder [`i18next`][i18next] för översättningar.

[i18next]: https://www.i18next.com/

## Konstruktor

{@link i18nextProvider}
: Skapar en ny `I18nextProvider` instans.

## Properties

`currentLanguage: string`
: Hämtar valt språk.

## Metoder

`changeLanguage(language: string): Promise<void>`
: Ändrar valt språk.

`translate(key: string): string`
: Översätter given nyckel. Om översättning saknas returneras nyckel.

`translate(key: string, defaultValue: string): string`
: Översätter given nyckel. Om översättning saknas returneras default-värde.

`translate(key: string, args: Record<string, unknown>): string`
: Översätter given nyckel med interpolering. Om översättning saknas returneras nyckel.

`translate(key: string, args: Record<string, unknown>, defaultValue: string): string`
: Översätter given nyckel med interpolering. Om översättning saknas returneras default-värde.

`addFormatter(name: string, fn: (value: unknown, lang: string | undefined, options: unknown) => string): void`
: Lägger in en ny anpassad formatterare. Läs mer om [anpassade formatterare](https://www.i18next.com/translation-function/formatting#adding-custom-format-function).
