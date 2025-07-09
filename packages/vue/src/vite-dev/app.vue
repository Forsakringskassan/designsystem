<script setup lang="ts">
import { ref } from "vue";
import { FButton, FList, FIcon } from "../components";

let counter = 0;
const items = ref<Array<{ id: number }>>([]);

function syncOperation(): void {
    console.log("do something sync"); // eslint-disable-line no-console -- temp
}

async function asyncOperation(): Promise<void> {
    console.log("starting a slow async operation"); // eslint-disable-line no-console -- temp
    const id = counter++;
    items.value.push({ id });
    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 5000));
    items.value = items.value.filter((it) => it.id !== id);
    console.log("slow async operation done"); // eslint-disable-line no-console -- temp
}
</script>

<template>
    <div class="container">
        <h1>@fkui/vue</h1>

        <f-button @click="syncOperation">sync button</f-button>

        <f-button @click="asyncOperation">async button</f-button>

        <f-button variant="secondary" @click="asyncOperation">
            <template #iconLeft>
                <f-icon name="success" class="button__icon"></f-icon>
            </template>
            async button L
        </f-button>

        <f-button variant="tertiary" @click="asyncOperation">
            async button R
            <template #iconRight>
                <f-icon name="success" class="button__icon"></f-icon>
            </template>
        </f-button>

        <f-button @click="asyncOperation">
            <template #iconLeft>
                <f-icon name="success" class="button__icon"></f-icon>
            </template>
            async button B
            <template #iconRight>
                <f-icon name="success" class="button__icon f-icon-size-large"></f-icon>
            </template>
        </f-button>

        <button type="button" class="button button--primary button--medium" @click="asyncOperation">
            original button
        </button>

        <f-list :items>
            <template #default="{ item }"> job #{{ item.id }} in progress... </template>
            <template #empty>No expensive calls in progress</template>
        </f-list>
    </div>
</template>
