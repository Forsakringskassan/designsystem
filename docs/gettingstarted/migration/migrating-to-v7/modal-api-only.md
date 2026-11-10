---
title: "Version 7 migreringsguide: Modal API only"
short-title: Modal API only
name: migrating-to-v7-modal-api
layout: article
---

Nu finns enbart stöd för att öppna modaler programmatiskt

Tidigare kunde en applikation ha en modal inbäddad i sin template och styra den med `is-open`:

```vue static
<script setup lang="ts">
import { ref } from "vue";
import { FButton, FModal } from "@fkui/vue";

const isOpen = ref(false);

function onClick(): void {
    isOpen.value = true;
}

function onClose(): void {
    isOpen.value = false;
}
</script>

<template>
    <f-button size="medium" variant="secondary" @click="onClick">
        Öppna modal
    </f-button>

    <f-modal :is-open @close="onClose">
        <template #header> My awesome modal </template>
        <template #content> My awesome content </template>
        <template #footer>
            <div class="button-group">
                <f-button
                    class="button-group__item"
                    size="large"
                    variant="primary"
                    @click="onClose"
                >
                    Close
                </f-button>
            </div>
        </template>
    </f-modal>
</template>
```

För att öppna modalen programmatiskt istället:

1. Flytta modalen till en egen komponent, till exempel `MyAwesomeModal.vue`.
   Modalen är alltid öppen (`is-open`) och skickar `close`-eventet vidare när den ska stängas:

```import static
MyAwesomeModal.vue
```

2. Öppna sedan modalen med `openModal()` från {@link useModal `useModal()`}:

```import static
FModalUsage.vue
```
