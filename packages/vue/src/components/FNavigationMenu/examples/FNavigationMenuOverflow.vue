<template>
    <f-navigation-menu :routes="routes"></f-navigation-menu>
</template>

<script setup>
import { FNavigationMenu } from "@fkui/vue";
import { routes } from "./router";
</script>
