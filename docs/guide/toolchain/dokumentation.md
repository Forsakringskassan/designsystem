---
title: Dokumentation
layout: content-with-menu
---

Dokumentation genereras med `@forsakringskassan/docs-generator` och är konfigurerat i två filer:

- `generate-docs.mjs` är den primära konfigurationen och den som anropar `@forsakringskassan/docs-generator`.
- `docs.config.js` är en förteckning över vilka filer som ska inkluderas vid bygge.

Dokumentationen genereras upp från markdown-filer i `docs` katalogen.

Exempel kan skapas upp i flera varianter:

- Statiska exempel: visar enbart kod.
- Körbara exempel: ett block med html eller en Vue-komponent som monteras.
- Live exempel: ett körbart exempel med inställningar som läsaren kan justera.

Exempel kan implementeras antingen inline i markdown-filer eller som fristående filer som importeras.

Läs mer i dokumentationen för `@forsakringskassan/docs-generator`.

## Exempel

I FKUI använder vi ofta exempelfiler för att testa komponenter och för att visa upp i dokumentation.
Exempel som används i testning placeras i en underkatalog `examples` till komponenten exemplet tillhör och exempel som används för dokumentation kan placeras antingen i `docs` katalogen bredvid markdown-filen exemplet tillhör eller så kan samma exempel som används för testning användas. Konfigurationen för `@forsakringskassan/docs-generator` letar automatiskt i båda platserna.

Flera verktyg för statisk kodanalys så som ESLint har andra regler för filer i `examples` kataloger.

I exempel använder vi alltid paketets namn vid import, exempelvis:

```ts
import { FTextField } from "@fkui/vue";
```

Detta är för att när man läser exempel som konsument ska man alltid se koden precis som om man skrivit den i sin egna applikation.
Det möjliggör också att man enkelt kan kopiera koden direkt.

För att möjliggöra import av biblioteket i exempel är `tsconfig.json` konfigurerat med:

```json
{
    "compilerOptions": {
        "paths": {
            "@fkui/vue": ["./src/index.ts"]
        }
    }
}
```

Läs mer om tsconfig

### Live exempel

Live exempel implementeras som ett körbart exempel där exemplet använder `@forsakringskassan/docs-live-example`.

Läs mer i dokumentationen för `@forsakringskassan/docs-live-example`.
