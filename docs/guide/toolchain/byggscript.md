---
title: Byggscript
layout: content-with-menu
---

## Byggscript

Våra paket byggs med hjälp av scriptet `build`.
Alla kommandon körs direkt från root i monorepot.

- För att bygga hela FKUI anropar vi `npm run build`.
- För att bygga enskilda paket anropar vi `npm run -w @fkui/${PAKET} build`.

Läs mer om {@link monorepo#npm-script att köra npm script}.

Samtliga paket byggs som hybrid-paket (dvs vi levererar både CJS och ESM från samtliga paket).

Beroende på vilken typ av paket bygger vi antingen med `rollup` eller `vite`.

- `rollup` används för kod som är native (inte kräver något ramverk), exempelvis `@fkui/date` och `@fkui/logic`.
- `vite` används för kod som använder Vue,

Utöver `rollup` och `vite` använder vi också:

- [API Extractor][api-extractor] för att skapa en bundlad typescript dts fil samt generera en API deklaration i `etc` katalogen.
- [@html-validate/release-scripts][release-scripts] för att skapa en städad `package.json` före release.

[api-extractor]: https://api-extractor.com/
[release-scripts]: https://gitlab.com/html-validate/semantic-release-config/-/tree/master/packages/release-scripts

## Filstruktur

Filstrukturen i paketen ser ut som följande:

```

lib
├── cjs
│   ├── package.json
│   ├── index.js
│   └── index.js.map
├── esm
│   ├── package.json
│   ├── index.js
│   └── index.js.map
├── types
│   └── index.d.ts
└── tsdoc-metadata.json

```

TODO: nästlade package.json saknas i verkligheten, i vissa paket finns inte cjs/esm katalogen, i vissa finns inte types katalogen

I `package.json` mappar vi med `exports` fältet för moderna toolchains (exempelvis Vite) samt med `main` och `types` för äldre toolchains:

```json
{
    "exports": {
        ".": {
            "types": "./lib/types/index.d.ts",
            "require": "./lib/cjs/index.js",
            "import": "./lib/esm/index.js"
        }
    },
    "main": "lib/cjs/index.js",
    "module": "lib/esm/index.js",
    "types": "lib/types/index.d.ts"
}
```

Vi använder oss också av `sideEffects` fältet för de filer som har side effects (exempelvis polyfills som installeras globalt):

```json
{
    "sideEffects": ["./lib/cjs/polyfills.js", "./lib/esm/polyfills.js"]
}
```

### Rollup

TBD

### Vite

Vi använder en fördefinierad Vite konfiguration från NPM paketet [`@forsakringskassan/vite-lib-config`][vite-lib-config].
Paketet exponerar en egen `defineConfig` som fungerar som Vite's egna men andra default-värden, precis som Vite's egna så mergas anpassningar med default-värden.
Konfigurationsobjektet tar också en ny egenskap `fk` med extra anpassningar.

[vite-lib-config]: https://github.com/Forsakringskassan/vite-lib-config

En typisk `vite.config.ts` ser ut så här:

```ts
import { defineConfig } from "@forsakringskassan/vite-lib-config/vite";

export default defineConfig({
    /* FK-specifika anpassningar */
    fk: {
        enableBanner: false,
    },

    /* Vite anpassningar, mergas med default inställningar */
    resolve: {
        alias: {
            "@fkui/vue": "src/index.ts",
        },
    },
});
```

Läs mer om [FK-specifika anpassningar](https://github.com/Forsakringskassan/vite-lib-config/blob/main/README.md#viteconfigts).

Läs mer om [Vite konfiguration](https://vitejs.dev/config/).

`@forsakringskassan/vite-lib-config` levererar också ett CLI verktyg `fk-build-vue-lib` som används för att bygga paketet.
Verktyget tar hand om att bygga både CJS och ESM samt använder Babel för transpilering enligt SLA.
Under huven anropar verktygen Vite med API.

Från `package.json` anropas verktyget likt:

```json
{
    "scripts": {
        "build": "run-s build:lib",
        "build:lib": "fk-build-vue-lib"
    }
}
```

### API Extractor

API Extractor är ett verktyg som att hantera det API som exponeras från ett paket.
Vi använder det för att:

- Bundla typescript deklarationer till en fil (dts rollup).
- Städa bort symboler som inte explicit deklarerats som publika (med `@public` parametern).
- Genererar en API deklaration i `etc` katalogen.

API Extractor kräver att typescript deklarationer har genererats först.

- För Vue använder vi `vue-tsc`.
- För övriga använder vi `tsc`.

`tsconfig.json` är konfigurerat med:

```json
{
    "compilerOptions": {
        "emitDeclarationOnly": true,
        "declaration": true,
        "declarationMap": true,
        "declarationDir": "temp/types"
    }
}
```

Det innebär att typescript deklarationerna lagras i `temp/types`.

`api-extractor.json` är sen konfigurerat med:

```json
{
    "mainEntryPointFilePath": "<projectFolder>/temp/types/index.d.ts",
    "apiReport": {
        "reportFolder": "<projectFolder>/../../etc/"
    },
    "dtsRollup": {
        "publicTrimmedFilePath": "<projectFolder>/lib/types/index.d.ts"
    }
}
```

Även för API extractor finns ett verktyg `fk-api-extractor` i `@forsakringskassan/vite-lib-config`.
Skillnaden mot det officiella CLI verktyget är att verktyget kan hantera flera entrypoints samt har en flagga `--patch-augmentations` för hantering av globala module augmentations.

Verktyget anropas likt:

```json
{
    "scripts": {
        "build": "run-s build:api",
        "build:api": "fk-api-extractor --patch-augmentations api-extractor.*.json"
    }
}
```

### Bundling

Vissa beroenden kan med fördel bundlas in i NPM paketet.
Med bundling menar vi att koden för beroendet kompileras in i leverabeln.

Fördelen med detta är att konsumenten inte behöver hantera beroendet alls eller ens känna till att det existerar.
Beroendet kommer inte finnas i deras `node_modules` katalog.

Nackdelen är att konsumenten inte kan styra över vilken version som används eller kan direkt komma åt att nyttja beroendet eller konfigurera om det.

Utgångsläget är att beroenden från FKUI ska bundlas men några tumregler att ta hänsyn till:

- Beroendet bör vara förhållandevis litet.
- Beroendet ska ligga som `dependency` i `package.json` men vid release sanerar vi bort `dependencies` som inte markerats som `external`. Således kommer konsumenten inte hämta hem en extra oanvänd kopia av beroendet.Läs mer om [sanering](#release).
- Det API som beroendet kapslar in måste innehålla testfall som verifierar att beteendet fungerar även om det stegas upp till ny version, det behöver inte betyda 100% testtäckning av beroendet men 100% av det beteende man är ute efter i det API som exponeras. Se också [API design](#api-design).

Är du tveksam prata med utvecklare i FKUI teamet.

### `tsconfig.json`

Varje paket har en egen `tsconfig.json` som ärver från `tsconfig.json` i root.

Paketens `tsconfig.json` är ibland uppdelad i flera filer när olika typer av filer (speciellt Cypress) kräver olika konfiguration.
I de fallen ser paketets `tsconfig.json` ut ungefär så här:

```json
{
    "files": [],
    "references": [
        {
            "path": "./tsconfig.lib.json"
        }
        /* ... */
    ]
}
```

där `tsconfig.lib.json` matchar en uppsättning filer med en viss konfiguration:

```json
{
    "compilerOptions": {
        "composite": true
        /* ... */
    },
    "include": ["src/**/*.ts"],
    "exclude": ["src/**/*.cy.ts"]
}
```

Läs också mer om [Cypress](cypress) för konfiguration för Cypress komponenttester.

### Pageobjekt

Pageobjekt återfinns i `src/pageobject` och kompileras för sig som en egen entrypoint.

### Release scripts

Vid release används [`@html-validate/release-scripts`](https://gitlab.com/html-validate/semantic-release-config/-/tree/master/packages/release-scripts) för att städa upp `package.json`.
Scriptet anropas både från `prepack` (anropas från `npm pack`) och `republishOnly` (anropas från `npm publish`).

```json
{
    "scripts": {
        "prepack": "release-prepack --bundle --retain-scripts",
        "postpack": "release-postpack",
        "prepublishOnly": "release-prepublish --bundle --retain-scripts"
    }
}
```

> Notera: `--retain-scripts` används för att {@link monorepo#lerna Lerna} cachar vilka script som ska finnas och misslyckas därför senare att anropa script som städats bort.

> Notera: `postpublish` är ej implementerad då {@link monorepo#lerna Lerna} anropar livscykel hooks i en annan ordning är `npm publish` och publicerar därför original `package.json` istället.
> Då releasebyggen alltid körs i CI-miljö har vi valt att ignorera att `package.json` inte återställs och working copy är dirty, eftersom den inte återanvänds.

`dependencies` som inte bundlas vid kompilering ska markeras som externa antingen med `--external:${dependency}` eller med `externalDependencies` fältet.
Beroenden som inte markerats som externa kommer försvinna från `dependencies` fältet.
