<script setup lang="ts">
import { FPageLayout, FPageMenuPanel } from "@fkui/vue";
</script>

<template>
    <f-page-layout layout="three-column">
        <template #header>
            <header>[header]</header>
        </template>
        <template #left>
            <div class="my-left-panel">
                <f-page-menu-panel>
                    <!-- <template #header> Rubrik lång lång super </template> -->
                    <template #default="{ isOpen }">
                        <template v-if="isOpen">
                            <p>Meny foo bar baz innehåll</p>
                        </template>
                        <!-- <template v-else></template> -->
                    </template>
                    <template #footer="{ isOpen }">
                        <template v-if="isOpen">
                            <p>Sidfot</p>
                        </template>
                        <!-- <template v-else> F.. </template> -->
                    </template>
                </f-page-menu-panel>
            </div>
        </template>
        <template #right>
            <div class="my-right-panel">[right]</div>
        </template>
        <template #content>
            <main class="my-content">[main]</main>
        </template>
        <template #footer>
            <footer class="my-footer">[footer]</footer>
        </template>
    </f-page-layout>
</template>

<style>
.my-header {
    background: darkred;
    color: white;
}

.my-footer {
    background: cyan;
    color: black;
}

.my-left-panel {
    background: greenyellow;
    flex-grow: 1;
    display: flex;
}

.my-right-panel {
    background: hotpink;
    flex-grow: 1;
}

.my-content {
    flex-grow: 1;
}

body {
    margin: 0;
    padding: 0;
}
</style>
