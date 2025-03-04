<script setup lang="ts">
import { FPageClosablePanel } from "../components";
import { type Ankeborgare } from "./ankeborgare";

const FooBar = FPageClosablePanel<Ankeborgare>;
</script>

<template>
    <foo-bar name="left-object">
        <template #header="{ item }"> {{ item.namn }} </template>
        <template #default="{ item, close }">
            <pre>{{ JSON.stringify({ item }, null, 2) }}</pre>
            <button type="button" class="button button--primary" @click="close('save')">Spara</button>
            <button type="button" class="button button--secondary" @click="close('dismiss')">Avbryt</button>
        </template>
    </foo-bar>
</template>
