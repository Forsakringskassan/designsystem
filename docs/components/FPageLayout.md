---
title: FPageLayout
status: Produktionsklar
layout: component
component: FPageLayout
---

## Användning

```import fullscreen
FPageLayoutSimpleExample.vue
```

## Med paneler

```diff
-    <f-page-layout layout="simple">
+    <f-page-layout layout="three-column">
         <template #header>
             <header>Header</header>
         </template>
+
+        <template #left>
+            <f-panel>
+                Left
+            </f-panel>
+        </template>
+
+        <template #right>
+            <f-panel>
+                Right
+            </f-panel>
+        </template>

         <template #content>
             <main>
                 <h1>Lorem ipsum</h1>
                 <p>dolor sit amet</p>
             </main>
         </template>
```

```import fullscreen
FPageLayoutPanelsExample.vue
```

## Responsive

```diff
         <template #left>
-            <f-panel>
+            <f-panel :behaviour="maybeOverlayOrFullscreen">
                 Left
             </f-panel>
         </template>
```

```ts
function maybeOverlayOrFullscreen(sizes) {
    /* "body" is total page width, the rest is the slots from the layout */
    const { body, left = 0, right = 0 } = sizes;
    const width = body - left - right;

    /* if total page width is less than 500px open panel as fullscreen */
    if (body < 500) {
        return { variant: "toggle", fullscreen: true };
    }

    /* if the leftover width for the main container is less than 500px open
     * panel as overlay */
    if (width < 600) {
        return { variant: "expand", overlay: true };
    }

    /* default behaviour */
    return {};
}
```

## Custom layout

```ts
const customLayout = defineLayout({
    name: "my-custom",
    slots: {
        header: {
            attach: "none",
            direction: "column",
        },
        toolbar: {
            attach: "none",
            direction: "row",
        },
        sidebar: {
            attach: "left",
            direction: "row",
        },
        content: {
            attach: "none",
            direction: "column",
        },
        footer: {
            attach: "none",
            direction: "column",
        },
    },
});
```

där:

- `attach` talar om var en panel kan fästas (eller inte kan fästas med `"none"`).
- `direction` talar om ifall ytan földar horizontalt eller vertikalt.

```css
.page-layout--my-custom {
    grid-template:
        "sidebar header" min-content
        "sidebar toolbar" min-content
        "sidebar content"
        "footer footer" min-content
        / min-content 1fr;
}
```

```html static
<f-page-layout :layout="customLayout">
    <template #header>
        <header>Header</header>
    </template>

    <template #sidebar>
        <f-panel> Sidebar </f-panel>
    </template>

    <template #toolbar> Toolbar </template>

    <template #content>
        <main>
            <h1>Lorem ipsum</h1>
            <p>dolor sit amet</p>
        </main>
    </template>

    <template #footer>
        <footer>Footer</footer>
    </template>
</f-page-layout>
```
