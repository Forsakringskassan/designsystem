<script setup lang="ts">
import { type NavigationMenuItem, FNavigationMenu } from "@fkui/vue";
import { useRouter } from "vue-router";

const router = useRouter();

const bar1: NavigationMenuItem[] = [
    { label: "Översikt", route: "overview" },
    { label: "Journal", route: "journal" },
    { label: "Dokument", route: "documents" },
];

const bar2: NavigationMenuItem[] = [
    { label: "Kundinformation", route: "ROUTE_1" },
    { label: "Kundens ärenden", route: "ROUTE_2" },
    { label: "Serviceåtgärder", route: "ROUTE_3" },
];

function onSelectRoute(route: string): void {
    router.push({ name: route });
}
</script>

<template>
    <div class="toolbar">
        <f-navigation-menu
            aria-label="Primary toolbar"
            :routes="bar1"
            @selected-route="onSelectRoute"
        ></f-navigation-menu>
        <f-navigation-menu aria-label="Secondary toolbar" :routes="bar2"></f-navigation-menu>
    </div>
</template>

<style>
.toolbar {
    display: flex;
    justify-content: space-between;
    width: 100%;
}
</style>
