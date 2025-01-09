---
title: Testverktyg
layout: article
---

## Testfall

Testfall i FKUI implementeras med två verktyg:

- Jest för enhetstester
- Cypress för komponenttester och E2E-tester

Som en tumregel använder vi enhetstester för att testa logik, komponenttester för att testa interaktion och i undantagsfall E2E-tester för att testa integration.

Samtliga tester körs från CI-miljö vid branch-byggen.
PR-byggen kör inte komponenttester eller E2E-tester.

Läs mer om {@link testing att skriva automatiska testfall}.

### Jest

Paket utan ramverksspecifika komponenter samt logik för Vue-komponenter testas med Jest.
Vi testar inte interaktion med komponenter med Jest.

Enhetstester placeras i samma katalog som filen som ska testas och använder `${filename}.spec.ts` som filnamn.

För Jest finns två förinställda konfigurationer:

- [`@forsakringskassan/jest-config`][jest-config]: för paket som är skriva i ren typescript, ej ramverksspecifikt.
- [`@forsakringskassan/jest-config-vue`][jest-config-vue]: för paket med Vue-komponenter.

Båda konfigurationer genererar coverage och testresultat i maskinläsbart format i `coverage` samt `test-results` katalogerna.
CI-miljö läser in samtliga filer.

Jest anropas från respektive paket via `test`-scriptet.
`test`-scriptet i root anropar i sin tur `test` i respektive paket.

Extra hjälpfunktioner finns i ett stödpaket {@link @fkui/test-utils} och kan nyttjas både av en applikationsutvecklare och den som bidrar till FKUI.

[jest-config]: https://github.com/Forsakringskassan/jest-config/tree/main/packages/jest-config
[jest-config-vue]: https://github.com/Forsakringskassan/jest-config/tree/main/packages/jest-config-vue

### Komponenttester (Cypress)

För paket med Vue-komponenter testar vi interaktion och utseende av komponenten med Cypress Komponenttest.

Komponenttester placeras i samma katalog som komponenten för komponenten och använder `${component}.cy.ts` som filnamn.

Varje komponent bör ha minst ett komponenttest som testar det visuella utseendet i form av ett screenshot sk "screenshottester"
Vi använder oss av `@forsakringskassan/cypress-visual-regression` för att skriva tester med skärmdumpar: visuell regressionstest.

Läs mer om [screenshottester][testning].

Cypress är konfigurerat i rootens `cypress.config.ts` och anropas direkt från root med `npm exec cypress open` (headed) alternativt `npm exec cypress run` (headless).

Cypress är konfigurerat med följande plugins:

- `@forsakringskassan/cypress-axe` för tillgänglighetstester med Axe.
- `@forsakringskassan/cypress-visual-regression` för screenshottester (visuel regression).
- `cypress-html-validate` för HTML validering.

Konfigurationen genererar testresultat i maskinläsbart format i `test-results` katalogen.
CI-miljö läser in filen.

`tsconfig.json` i respektive paket med Cypress komponenttester pekar ut en separat `tsconfig.cypress.json` med specifik typescript-konfiguration för Cypress:

```json
{
    "extends": "../../cypress/tsconfig.json",
    "compilerOptions": {
        "composite": true
    },
    "include": [
        "src/@types/cypress.d.ts",
        "src/**/*.ts",
        "src/**/*.vue",
        "src/**/*.cy.ts"
    ],
    "exclude": ["src/**/*.spec.ts"]
}
```

Läs mer om [tsconfig.json](#tsconfig-json).

### E2E (Cypress)

I undantagsfall kan du använda E2E-tester om ett större sammanhang ska testas.
E2E-tester kör mot den genererade dokumentationen och kräver att den byggts och startats som en separat process.

För att bygga och starta dokumentation:

```bash
npm run build
npm run build:docs
npm start
```

Därefter kan du starta E2E-tester i en annan terminal:

```bash
npm exec cypress open
```

E2E-tester ska endast användas som en sista utväg.

För konfiguration se [komponenttester](#komponenttester_cypress).

## Statisk kodanalys och lintning

FKUI använder flera verktyg för statisk kodanalys och lintning:

- Prettier för att formatera kod.
- ESLint för lintning av javascript-, typescript- och Vue-filer.
- HTML-Validate för validering och analys av HTML i komponenter och exempel.
- Stylelint för lintning av css- och sass-filer.

Samtliga verktyg körs och är konfigurerade från root men i undantagsfall konfigureras verktygen om i respektive paket.
Flera verktyg använder färdiga mallar för sin konfiguration, se respektive konfigurationsfil och dokumentation för detaljer.

Vid commit anropas både Prettier och ESLint via husky (konfigurerat i `.husky/pre-commit`).

### ESLint

::: warning
Ej migrerat till Eslint v9 och flat config!
:::

ESLint körs på alla källkodsfiler i repository.

Använder [`@forsakringskassan/eslint-config`][eslint-config] och tillhörande paket.
Konfiguration hittas i `.eslintrc.cjs` samt `.eslintignore`.

Utöver standardkonfigurationen så är exempel och testfall konfigurerade med en snällare konfiguration.

::: warning
I undantagsfall finns `.eslintrc.*` filer i underkataloger.
Det är kodskuld som bör migreras.
:::

[eslint-config]: https://github.com/Forsakringskassan/eslint-config

### Prettier

Prettier körs på alla filer i repository.

Använder [`@forsakringskassan/prettier-config`][prettier-config].
Konfiguration hittas i `package.json` samt `.prettierignore`.

[prettier-config]: https://github.com/Forsakringskassan/prettier-config

### HTML-Validate

Körs på alla källkodsfiler och exempel i repository, vid Cypress komponenttester och E2E samt på den genererade dokumentationen i `public` katalogen.

Konfigurerat i:

- `.htmlvalidate.json` för källkodsfiler och exempel.
- `.htmlvalidate-public.js` för genererad dokumentation.
- `cypress.config.ts` för Cypress.

Använder följande plugins:

- [`html-validate-vue`][html-validate-vue] för `*.vue`.
- [`html-validate-markdown`][html-validate-markdown] för `*.md`.
- `@fkui/vue/htmlvalidate` för FKUI-specifika regler och konfigurationer.

Utöver konfiguration så levererar `@fkui/vue` en rekommenderad html-validate plugin.

::: warning
Teknisk skuld: html-validate konfiguration från `@fkui/vue/htmlvalidate` är odokumenterad!
:::

[html-validate-vue]: https://gitlab.com/html-validate/html-validate-vue
[html-validate-markdown]: https://github.com/OlofFredriksson/html-validate-markdown

### Stylelint

Använder [`@forsakringskassan/stylelint-config`][stylelint-config].
Konfiguration hittas i `package.json`.

Utöver standardkonfiguration så levererar `@fkui/design` en rekommenderad stylelint-konfiguration.

::: warning
Teknisk skuld: stylelint konfiguration från `@fkui/design/stylelint` är odokumenterad!
:::

[stylelint-config]: https://github.com/Forsakringskassan/stylelint-config

### pnr-scanner

Från CI miljö anropas `pnr-scanner` som söker igenom repository efter personnummer.
Endast personnummer från återfinns i [Skatteverkets resurs för Testpersonnummer][testpersoner] tillåts.

[testpersoner]: https://www7.skatteverket.se/portal/apier-och-oppna-data/utvecklarportalen/oppetdata/Test%C2%AD%C2%ADpersonnummer
