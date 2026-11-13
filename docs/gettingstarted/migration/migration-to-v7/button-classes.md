---
title: "Version 7 migreringsguide: @fkui/button-classes"
short-title: "@fkui/button-classes"
name: migrating-to-v7-button-classes
layout: article
---

## Ersättning av klasser på knappar

Vissa klasser på `button` ersätts med andra.

### Migrering

Byt ut dessa klasser till den ersättande klassen. Om möjligt rekommendares det att använda `FButton` istället för egna knappar med dessa klasser.

- `button--text` ersätts med `button--tertiary`

- `button--text--black` ersätts med `button--tertiary--muted`

- `button--discrete` ersätts med `button--tertiary`

- `button--discrete--black` ersätts med `button--tertiary--muted`

Efter migreringen kommer knapparna ha lite rundade kanter och en `min-width`. Kontrollera om detta behöver överskrivas i din applikation.
