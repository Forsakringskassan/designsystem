---
title: "Version 7 migreringsguide: @fkui/theme-desktop"
short-title: "@fkui/theme-desktop"
name: migrating-to-v7-theme-desktop
layout: article
---

## `@fkui/theme-desktop` avvecklas

`@fkui/theme-desktop` kommer inte längre att underhållas eller få uppdateringar.
Ersätt det med [`@fkui-community/theme-int`](https://www.npmjs.com/package/@fkui-community/theme-int).

### Migrering

Avinstallera `@fkui/theme-desktop` och installera sedan ersättaren:

```bash
npm uninstall @fkui/theme-desktop
npm install @fkui-community/theme-int
```

Byt därefter ut importen av `@fkui/theme-desktop` mot importen av det nya temat.
Gör ändringen i den Sass-fil där temat importeras, till exempel `src/main.scss`:

```css
@use "@fkui-community/theme-int";
```

Importen läser in det ljusa färgschemat som standard.
Information om hur du konfigurerar ljust och mörkt läge finns i dokumentationen för [`@fkui-community/theme-int`](https://www.npmjs.com/package/@fkui-community/theme-int).
