---
title: För utvecklare
name: contributing-developers
layout: pattern
sortorder: 2
---

## Installation

Checka ut repo som vanligt och gör en `npm install`.

```bash
npm install
```

Det här kommer starta igång (bootstrap) för både rot-projekt och alla paket i mappen `packages`.

Beroenden kommer bli lösta genom användning av symlänkar (symboliska länkar) och ändringar blir direkt synliga mellan paketen.

Nästan alla ågärder kan genomföras i batch genom att använda kommando i rot-projektet.
Till exempel, `npm test` kommer köra testerna i alla projekt.

Det finns också ett antal kortkommando-skript för att du ska kunna köra paket-specifika npm-kommandon från roten, till exempel `npm run logic build`.

[Läs mer i dokumentation om Lerna hur kommadon fungerar och se hela listan med kommandon](https://github.com/lerna/lerna)

Om du vill installera ett specifikt paket som till exempel design skriv:

```bash
npm  install --save-dev @fkui/design
```

## Kommandon

### Installation

För att ladda ner beroenden kör:

```bash
npm install
```

Efter att du har laddat ner beroenden behöver du bygga dem, se kommando nedan.

### Bygga

Du bygger alla paket genom:

```bash
npm run build
```

För att köra webbplatsen för dokumentationen behöver du först bygga den:

```bash
npm run build:docs
```

### Köra (Run)

För att starta dokumentationen skriver du:

```bash
npm run start
```

För att starta vue-paketet med Vite utvecklingsserver:

```bash
npm run vue start
```

### Testning

Du kör igång hela test-sviten mot alla paket genom att skriva:

```bash
npm test
```

För att köra cypress-tester behöver du först starta servern med `npm start` och därefter köra:

```bash
npm exec cypress -- open
```

För att köra enhetstest för ett paket skriv:

```bash
npm run unit
```

Om du vill köra test i watch mode:

```bash
npm run unit:watch
```

### Lintning

Du kör all lintning och konfiguration i rot-paketet genom att skriva:

```bash
npm run lint
```

### Applicera kodstandard

Se till att all kod följer kodstandard genom att skriva:

```bash
npm run prettier:write
```

### Paketering

För att paketera allt och lägga de resulterande filerna (tarballs) i dist/-katalogen skriv:

```bash
npm pack --workspaces --pack-destination dist/
```

### Länkning

Länka alla paket (theme-default, logic, design, vue) så att de kan länkas till andra lokala repon genom att skriva:

```bash
npm run link-all
```

Du länkar till andra lokala repon genom att använda npm link {package-name}, till exempel:

```bash
npm link @fkui/vue
```

### Kodstandard

Följ riktlinjerna nedan

- Namnge variabler enligt [BEM:s standard för namn](https://getbem.com/).
- Ta fram exempel för olika komponent-tillstånd.
- Undvid att skapa globala CSS-klasser.
- Använd prefix för komponenter för att underlätta för de konsumenter som kör olika versioner på samma webbplats.
- Sätt prefix `.h-` för hjälp-klasser.
- Använd `rem` för storlekar (finns undantag, till exempel när du inte vill att skalning ska utgå från rem-storleken).

### Commit

Skriv ditt commit-meddelande enligt standard [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).

type [optional scope]: description

Scope är frivilligt men ska sättas till det paket som ändringen påverkar eller använd en av de generiska typerna av ändring (Type) från tabellen längre ner.

```bash
git commit -m 'feat: new component (fixes issue number)'
```

Om inget scope är satt kommer det sättas automatiskt baserat på vilka paket som är påverkade.

Du kan sätta scope manuellt genom:

```bash
git commit -m 'feat(fkui-vue): new component (fixes issue number)'
```

För att sätta multipla scope separerar du dem i en lista med komma:

```bash
git commit -m 'fix(fkui-design,fkui-vue): update styling (fixes issue number)'
```

Du sätter en release som brytande (BREAKING) genom att lägga till orden `BREAKING CHANGE:` i sidfoten följt av en beskrivning av vad som har ändrats.
Du behöver också informera konsumenten hur hen ska hantera ändringen. <br>
Texten kommer inkluderas i {@link changelog CHANGELOG}.
Du kan också använda ett utropstecken `!` efter type/scope för att visa att en release är brytande.

De olika typerna av ändring (Type) som är tillåtna och vilken release som de genererar visas i tabellen nedan.

#### Typer av ändring och vilken release de generar

| Type       | Description                                                                             | Release |
| ---------- | --------------------------------------------------------------------------------------- | ------- |
| Breaking   | A breaking which requires the users attention, <br>usually in the form of code changes. | Major   |
| `feat`     | A new feature has been added.                                                           | Minor   |
| `fix`      | An existing feature has been patched.                                                   | Patch   |
| `build`    | Changes to build-system/tooling only.                                                   | -       |
| `chore`    | Other changes not fitting any other description.                                        | -       |
| `ci`       | Changes to CI/CD configuration only.                                                    | -       |
| `docs`     | Documentation changes only                                                              | -       |
| `perf`     | Performance improvements.                                                               | Patch   |
| `refactor` | Code change that neither fixes a bug nor adds a feature.                                | -       |
| `revert`   | Revert an existing commit.                                                              | Patch   |
| `style`    | Cosmetic changes to source code, e.g. reformatting.                                     | -       |
| `test`     | Changes to tests only                                                                   | -       |

#### Commit-meddelande utifrån typ av ändring

| Type    | Scope        | Description                                                                                             |
| ------- | ------------ | ------------------------------------------------------------------------------------------------------- |
| `feat`  | Package name | Comma-separated list of package names affected by the change. <br>Automatically determined if left out. |
| `fix`   | Package name | Above.                                                                                                  |
| `chore` | `deps`       | Use when updating dependencies only.                                                                    |
