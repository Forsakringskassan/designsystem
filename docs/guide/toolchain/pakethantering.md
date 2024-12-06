---
title: Pakethantering
layout: content-with-menu
---

## Beroenden

alla beroenden som paketet använder ska läggas in paketets egna package.json

--save-exact
--save-dev
--save-prod

Läs mer om [npm install](https://docs.npmjs.com/cli/v8/commands/npm-install)

vi använder renovate

### Interna beroenden

Interna beroenden mellan paket måste också deklareras i `package.json`:

- `devDependency`: här deklarerar vi exakt den version av beroendet som ska användas och **måste** motsvara versionen som finns i monorepot. Denna används enbart för utveckling av FKUI och påverkar inte konsumenter.
- `peerDependency`: här deklarerar vi den major version av beroendet som ska användas. Konsumenten av FKUI nyttjar denna för att hålla ihop versioner.

````json
{
    "name": "@fkui/foobar",
    "version": "5.1.0",
    "devDependencies": {
        "@fkui/dependency": "5.1.0"
    },
    "peerDependency": {
        "@fkui/dependency": "^5"
    }
}

Kör `npm install` i root och verfiera i `package-lock.json` att inte en kopia installerats.

Om din diff i `package-lock.json` lägger till rader likt nedan så installeras en kopia, se till att versionen av ditt beroende matchar versionen som finns i monorepot.

```diff
+    "packages/vue/node_modules/@fkui/date": {
+      "version": "5.31.0",
+      "resolved": "https://registry.npmjs.com/@fkui/date/-/date-5.31.0.tgz",
+      "integrity": "sha512-DTQkWkHNIsR+OZiGLQKirKg/IJDBS2TY2zg6QLOVvTvwtgBFLsz2wlyyc9uMT09MVUUrRGnslThrZehhsd9TXg==",
+      "dev": true,
+      "license": "MIT",
+      "engines": {
+        "node": ">= 16",
+        "npm": ">= 7"
+      }
+    }
````

## Skapa nytt paket

1. Skapa en ny katalog i `packages` eller `internal`.

- `packages` används när paketet ska publiceras och användas av konsumenter.
- `internal` används när paketet ej ska publiceras men nyttjas internt av FKUI.

2. Skapa en ny `package.json`:
    1. Sätt `name` till `@fkui/${namn}` där `${namn}` motsvarar katalogens namn
    2. Sätt `version` samma version som finns i root `package.json`. Om din PR är långlivad kom ihåg att uppdatera `version` varje gång en ny release släpps tills din PR är merged.
    3. Om paketet är internt sätt `private` flaggan till `true`.
3. Kör `npm install`

Läs mer om package.json

## Ta bort paket

1. Ta bort eventuella beroenden till paketet.
2. Ta bort katalogen som innehåller paketet.
3. Kör `npm install`.
4. Eftersom NPM inte städar bort samtliga referenser i `package-lock.json` öppna filen i din editor och sök upp kvarstående block som refererar till paketet.
