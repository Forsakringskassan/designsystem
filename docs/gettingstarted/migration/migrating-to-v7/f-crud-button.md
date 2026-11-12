---
title: "Version 7 migreringsguide: FCrudButton"
short-title: Migrera FCrudButton
name: migrating-to-v7-f-crud-button
layout: article
---

Komponenten `FCrudButton` är borttagen och textnycklarna `fkui.crud-button.modify` och `fkui.crud-button.delete` används inte längre.
Använd {@link component:FButton FButton} tillsammans med `updateItem(item)` och `deleteItem(item)` som `FCrudDataset` skickar som slot-props till defaultslotten.
I tabeller använder du i stället en `menu`-kolumn i {@link component:FTable FTable}.

```diff
 <f-crud-dataset>
-    <template #default>
+    <template #default="{ updateItem, deleteItem }">
         <f-list :items>
             <template #default="{ item }">
-                <f-crud-button action="modify" :item icon>
+                <f-button icon-left="pen" size="small" variant="tertiary" @click="updateItem(item)">
                     Ändra {{ item.name }}
-                </f-crud-button>
+                </f-button>
             </template>
         </f-list>
     </template>
 </f-crud-dataset>
```

Läs mer i {@link migrating-crud-button migreringsguiden för FCrudButton}.
