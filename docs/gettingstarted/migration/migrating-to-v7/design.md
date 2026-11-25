---
title: "Version 7 migreringsguide: @fkui/design"
short-title: "@fkui/design"
name: migrating-to-v7-@fkui/design
layout: article
---

## Ersättning av klasser på knappar

Vissa klasser på `button` ersätts med andra.

### Migrering

Byt ut dessa klasser till den ersättande klassen.
Om möjligt rekommendares det att använda `FButton` istället för egna knappar med dessa klasser.

- `button--text` ersätts med `button--tertiary`

- `button--text--black` ersätts med `button--tertiary--muted`

- `button--discrete` ersätts med `button--tertiary`

- `button--discrete--black` ersätts med `button--tertiary--muted`

Efter migreringen kommer knapparna ha lite rundade kanter och en `min-width`.
Kontrollera om detta behöver överskrivas i din applikation.

## Borttag utav tema i förkompilerad CSS

Ändringen gäller dig som använder FKUI:s förkompilerade CSS-fil (`fkui.min.css`).
Om du däremot använder Sass och importerar temat före `@fkui/design` påverkas du inte av ändringen.

I version 7 innehåller den förkompilerade CSS-filen från `@fkui/design` inte längre något standardtema.
Tidigare räckte det att ladda in den filen för att använda FKUI:s ramverk.
Nu behöver du även ladda in ett tema för att komponenterna ska få korrekt utseende.

Ändringen görs eftersom den förkompilerade CSS-filen tidigare bara utgick från det ljusa temat.

Nu används i stället det tema som applikationen explicit har laddat.

### Migrering

Instruktioner för hur du laddar in FKUI:s CSS och tema finns på sidan {@link getting-started-application Ta fram applikation}.
