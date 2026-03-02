<script lang="ts" setup>
import { useRoute } from "vue-router";
import TopNavigation from "./components/TopNavigation.vue";

const route = useRoute();
</script>

<template>
    <div id="app">
        <TopNavigation />

        <main class="content">
            <RouterView :key="route.fullPath" />
        </main>
    </div>
</template>

<style scoped>
#app {
    display: flex;
    flex-direction: column;
    height: 100vh;
}

.content {
    flex: 1;
    padding: 1rem;
}
</style>
