<script setup lang="ts">
import { FPageLayout, FPageMenuPanel } from "@fkui/vue";
</script>

<template>
    <f-page-layout layout="three-column">
        <template #header>
            <header class="my-header">[header]</header>
        </template>
        <template #left>
            <f-page-menu-panel>
                <template #header="{ isOpen }">
                    <template v-if="isOpen"> [panel header] </template>
                </template>
                <template #default="{ isOpen }">
                    <template v-if="isOpen">
                        <p>[panel content]</p>
                        <p>[panel content]</p>
                        <p>[panel content]</p>
                    </template>
                    <template v-else> [closed mode] </template>
                </template>
                <template #footer="{ isOpen }">
                    <template v-if="isOpen">[panel footer]</template>
                    <template v-else> [closed mode] </template>
                </template>
            </f-page-menu-panel>
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

<style scoped>
.my-header {
    background: darkred;
    color: white;
    padding: 1rem;
}

.my-footer {
    background: cyan;
    color: black;
    padding: 1rem;
}

.my-left-panel {
    background: greenyellow;
    padding: 1rem;
    flex-grow: 1;
    width: 25cqw;
}

.my-right-panel {
    background: hotpink;
    padding: 1rem;
    flex-grow: 1;
    width: 25cqw;
}

.my-content {
    flex-grow: 1;
    padding: 1rem;
}
</style>
