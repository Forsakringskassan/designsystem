---
title: Testverktyg
layout: content-with-menu
---

## Testfall

Testfall i FKUI implementeras med två verktyg:

-   Jest för enhetstester
-   Cypress för komponenttester och E2E-tester

Som en tumregel använder vi enhetstester för att testa logik, komponenttester för att testa interaktion och i undantagsfall E2E-tester för att testa integration.

Samtliga tester körs från CI-miljö vid branch-byggen.
PR-byggen kör inte komponenttester eller E2E-tester.

Läs mer om [testning](testning).

### Jest

Paket utan ramverksspecifika komponenter samt logik för Vue-komponenter testas med Jest.
Förrutom i undantagsfall testar vi inte interaktion med komponenter med Jest om än JSDOM och `@vue/test-utils` hanterar det.

Enhetstester placeras i samma katalog som filen som ska testas och använder `${filename}.spec.ts` som filnamn.

För Jest finns två färdiga presets:

-   `@forsakringskassan/jest-config`: för paket som är skriva i ren typescript, ej ramverksspecifikt.
-   `@forsakringskassan/jest-config-vue`: för paket med Vue-komponenter.

Båda konfigurationer genererar både coverage och test resultat i maskinläsbart format i `coverage` samt `test-results` katalogerna.
CI-miljö läser in samtliga filer.

Jest anropas från respektive paket via `test` scriptet.
`test` scriptet i root anropar i sin tur `test` i respektive paket.

Läs mer om [@fkui/test-utils](test-utils).

### Komponenttester (Cypress)

Paket med Vue-komponenter testar vi interaktion och utseende med komponenten med Cypress Komponenttest.

Komponenttester placeras i samma katalog som komponenten för komponenten och använder `${component}.cy.ts` som filnamn.

Varje komponent bör ha minst ett komponenttest som testar det visuella utseendet i form av ett screenshot sk "screenshottester"
Vi använder oss av `@forsakringskassan/cypress-visual-regression` för att skriva tester med skärmdumpar: visuell regressionstest.

Läs mer om [screenshottester][testning].

Cypress är konfigurerat i rootens `cypress.config.ts` och anropas direkt från root med `npm exec cypress open` (headed) alternativt `npm exec cypress run` (headless).

Cypress är konfigurerat med följande plugins:

-   `@forsakringskassan/cypress-axe` för tillgänglighetstester med Axe.
-   `@forsakringskassan/cypress-visual-regression` för screenshottester (visuel regression).
-   `cypress-html-validate` för HTML validering.

Konfigurationen genererar test resultat i maskinläsbart format i `test-results` katalogen.
CI-miljö läser in filen.

`tsconfig.json` i respektive paket med Cypress komponenttester pekar ut en separat `tsconfig.cypress.json` med specifik typescript konfiguration för Cypress:

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

I undantagsfall kan E2E-tester användas där man vill testa ett större sammanhang.
E2E-tester kör mot den genererade dokumentationen och kräver att den byggts och startats som en separat process.

För att bygga och starta dokumentation:

```bash
npm run build
npm run build:docs
npm start
```

Därefter i en annan terminal kan E2E-tester startas:

```bash
npm exec cypress open
```

E2E-tester ska endast användas som en sista utväg.

För konfiguration se [komponenttester](#komponenttester-cypress).

## Statisk kodanalys och lintning

FKUI använder flera verktyg för statisk kodanalys och lintning:

-   Prettier för att formatera kod.
-   ESLint för lintning av javascript-, typescript- och Vue-filer.
-   HTML-Validate för validering och analys av HTML i komponenter och exempel.
-   Stylelint för lintning av css- och sass-filer.

Samtliga verktyg körs och är konfigurerade från root men i undantagsfall konfigureras verktygen om i respektive paket.
Flera verktyg använder färdiga mallar för sin konfiguration, se respektive konfigurationsfil och dokumentation för detaljer.

Vid commit anropas både Prettier och ESLint via husky (konfigurerat i `.husky/pre-commit`). Läs mer om git hooks.

### Eslint

Använder `@forsakringskassan/eslint-config`.

Läs mer om dokumentationsexempel.
