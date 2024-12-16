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
