<script lang="ts" setup>
import { useRoute } from "vue-router";
import TopNavigation from "./components/TopNavigation.vue";

const route = useRoute();
</script>

<template>
    <div id="app">
        <TopNavigation />
        <RouterView :key="route.fullPath" />
    </div>
</template>

<style scoped>
#app {
    display: flex;
    flex-direction: column;
}
</style>
