<script setup lang="ts">
import { FPageLayout } from "@fkui/vue";
</script>

<template>
    <!-- [html-validate-disable-block unique-landmark, no-multiple-main -- for demo purpose only, a real app wouldnt do this] -->
    <div class="wrapper">
        <div class="item">
            <h3><code>simple</code></h3>
            <div class="layout-container">
                <f-page-layout layout="simple">
                    <template #header>
                        <header class="area header">[header]</header>
                    </template>
                    <template #content>
                        <main class="area content">[content]</main>
                    </template>
                    <template #footer>
                        <footer class="area footer">[footer]</footer>
                    </template>
                </f-page-layout>
            </div>
        </div>
        <div class="item">
            <h3><code>left-panel</code></h3>
            <div class="layout-container">
                <f-page-layout layout="left-panel">
                    <template #header>
                        <header class="area header">[header]</header>
                    </template>
                    <template #left>
                        <div class="area left-panel">[left]</div>
                    </template>
                    <template #content>
                        <main class="area content">[content]</main>
                    </template>
                    <template #footer>
                        <footer class="area footer">[footer]</footer>
                    </template>
                </f-page-layout>
            </div>
        </div>
        <div class="item">
            <h3><code>right-panel</code></h3>
            <div class="layout-container">
                <f-page-layout layout="right-panel">
                    <template #header>
                        <header class="area header">[header]</header>
                    </template>
                    <template #right>
                        <div class="area right-panel">[right]</div>
                    </template>
                    <template #content>
                        <main class="area content">[content]</main>
                    </template>
                    <template #footer>
                        <footer class="area footer">[footer]</footer>
                    </template>
                </f-page-layout>
            </div>
        </div>
        <div class="item">
            <h3><code>three-column</code></h3>
            <div class="layout-container">
                <f-page-layout layout="three-column">
                    <template #header>
                        <header class="area header">[header]</header>
                    </template>
                    <template #left>
                        <div class="area left-panel">[left]</div>
                    </template>
                    <template #right>
                        <div class="area right-panel">[right]</div>
                    </template>
                    <template #content>
                        <main class="area content">[content]</main>
                    </template>
                    <template #footer>
                        <footer class="area footer">[footer]</footer>
                    </template>
                </f-page-layout>
            </div>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}

.layout-container {
    container-type: size;
    aspect-ratio: 16 / 9;
    max-height: 230px;
    border: 2px dashed #777;
    padding: 1px;
}

.area {
    padding: 0.5rem;
    align-content: center;
    text-align: center;
}

.header {
    background: darkred;
    color: white;
}

.footer {
    background: cyan;
    color: black;
}

.left-panel {
    background: greenyellow;
    flex-grow: 1;
    width: 25cqw;
}

.right-panel {
    background: hotpink;
    flex-grow: 1;
    width: 25cqw;
}

.content {
    flex-grow: 1;
}
</style>
