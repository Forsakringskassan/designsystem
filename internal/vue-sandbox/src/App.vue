<script setup lang="ts">
import { ref } from "vue";
import { FButton, FList } from "@fkui/vue";

let counter = 0;
const items = ref<Array<{ id: number }>>([]);

function syncOperation(): void {
    console.log("do something sync");
}

async function asyncOperation(): Promise<void> {
    console.log("starting a slow async operation");
    const id = counter++;
    items.value.push({ id });
    await new Promise((resolve) => setTimeout(resolve, 5000 + Math.random() * 5000));
    items.value = items.value.filter((it) => it.id !== id);
    console.log("slow async operation done");
}
</script>

<template>
    <div class="container">
        <h1>@fkui/vue</h1>

        <f-button @click="syncOperation">sync button</f-button>
        <f-button @click="asyncOperation">async button</f-button>
        <button type="button" class="button button--primary" @click="asyncOperation">original button</button>

        <f-list :items>
            <template #default="{ item }"> job #{{ item.id }} in progress... </template>
            <template #empty>No expensive calls in progress</template>
        </f-list>
    </div>
</template>
