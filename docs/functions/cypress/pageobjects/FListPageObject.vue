<script setup lang="ts">
import { FList } from "@fkui/vue";

interface Item {
    id: number;
    frukt: string;
}

const items: Item[] = [
    { id: 1, frukt: "Banan" },
    { id: 2, frukt: "Äpple" },
    { id: 3, frukt: "Apelsin" },
];
</script>

<template>
    <f-list :items>
        <template #default="{ item }">
            {{ item.frukt }}
        </template>
    </f-list>
</template>
