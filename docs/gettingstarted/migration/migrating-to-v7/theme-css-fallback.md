---
title: "Version 7 migreringsguide: Temavärden i förkompilerad CSS"
short-title: Temavärden i CSS
name: migrating-to-v7-theme-css-fallback
layout: article
---

## Temavärden i förkompilerad CSS

Ändringen gäller dig som använder FKUI:s förkompilerade CSS-fil (`@fkui/design/lib/fkui.min.css`).
Om du använder Sass och importerar temat före `@fkui/design` påverkas du inte av ändringen.

I version 7 innehåller den förkompilerade CSS-filen från `@fkui/design` inte längre något standardtema.
Tidigare räckte det att ladda in den filen för att använda FKUI:s komponenter.
Nu behöver du även ladda in ett tema för att komponenterna ska få rätt utseende.

Ändringen görs eftersom den förkompilerade CSS-filen tidigare bara utgick från det ljusa temat, vilket kunde ge felaktiga färger i mörkt läge.

Nu används i stället det tema som applikationen har laddat.

### Migrering

Instruktioner för hur du laddar in FKUI:s CSS och tema finns på sidan {@link getting-started-application Ta fram applikation}.
