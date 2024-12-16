<script setup>
import { FPageLayout, FPanel } from "@fkui/vue";
</script>

<template>
    <f-page-layout layout="three-column">
        <template #header>
            <header>Header</header>
        </template>

        <template #left>
            <f-panel> Left </f-panel>
        </template>

        <template #right>
            <f-panel> Right </f-panel>
        </template>

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
</template>
