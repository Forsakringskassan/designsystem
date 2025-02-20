---
title: Kontextmeny
status: Produktionsklar
layout: component
component: FContextMenu
---

En kontextmeny presenterar en popup-ruta med funktioner kopplade till ett objekt, till exempel en lista eller tabellrad.

Använd en kontextmeny för att presentera flera åtgärder som hör ihop när det inte finns plats eller
är önskvärt att visa alla funktioner direkt. Kontextmenyn aktiveras alltid med en knapp som har `aria-haspopup="menu"`.

Placera bara funktioner som används sällan i en kontextmeny.

- Menyvalens texter ska vara korta och tydliga, som texter på knappar, exempelvis "Skriv ut" , "Ersätt" eller "Kopiera".
- En ikon kan användas för att tydliggöra.
- Använd en delningslinje för att gruppera eller särskilja vissa funktioner i menyn.
- Ange ett namn som tydligt beskriver syftet för kontextmenyn i `aria-label` prop.

## Bara text

```import
<!-- [html-validate-disable-block element-name, no-unused-disable -- teleport casing issue in html-validate-vue] -->
FContextMenuExampleTextOnly.vue
```

## Ikoner och text

```import
<!-- [html-validate-disable-block element-name, no-unused-disable -- teleport casing issue in html-validate-vue] -->
FContextMenuExample.vue
```

I detta exemplet används typen `ContextMenuItem` för att definiera valen i menyn.
`{ separator: true }` används för att positionera en avskiljare mellan två menyval.

```ts
import { type ContextMenuItem } from "@fkui/vue";

const exampleItems: ContextMenuItem[] = [
    { label: "Påminnelse", key: "MENU_2", icon: "bell" },
    { label: "Ändra", key: "MENU_3", icon: "pen" },
    { separator: true },
    { label: "Ta bort", key: "MENU_4", icon: "trashcan" },
    { label: "Utan ikon", key: "MENU_5" },
];
```

Ikonerna definieras med hjälp av `icon`-property som är satt till namnet på en ikon från `fk-icon`, se {@link FIcon} för listan av tillgängliga ikoner.

```diff
 const items: Array<ContextMenuItem> = [
-    { label: "Skriv ut", key: "print" },
+    { label: "Skriv ut", key: "print", icon: "print" },
 ];
```

Om du behöver en ikon från ett annat ikon-bibliotek, gör en import och ange namnet på biblioteket i `ContextMenuItem`, parametern `iconLibrary`:

```diff
+import "fk-icons/dist/f-internal";
import { ContextMenuItem } from "@fkui/vue";
```

```diff
 const items: Array<ContextMenuItem> = [
-    { label: "Copy", key: "copy", icon: "copy" },
+    { label: "Copy", key: "copy", icon: "copy", iconLibrary: "f-internal" },
 ];
```

## API

:::api
vue:FContextMenu
:::
