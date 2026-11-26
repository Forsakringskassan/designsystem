<script setup lang="ts">
import { FPageLayout } from "@fkui/vue";
</script>

<template>
    <f-page-layout layout="three-column">
        <template #default="{ header, left, right, content, footer }">
            <header :slot="header" class="my-header">[header]</header>
            <div :slot="left" class="my-left-panel">[left]</div>
            <div :slot="right" class="my-right-panel">[right]</div>
            <main :slot="content" class="my-content">[main]</main>
            <footer :slot="footer" class="my-footer">[footer]</footer>
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
