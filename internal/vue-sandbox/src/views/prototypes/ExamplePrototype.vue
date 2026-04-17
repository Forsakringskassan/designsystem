<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<template>
    <div class="prototype-root">
        <router-link to="/">← Tillbaka</router-link>
        <h1>Exempelprototyp</h1>
        <p>Ersätt det här med din prototyp.</p>
    </div>
</template>

<style>
.prototype-root {
    width: min(100% - 2rem, 80ch);
    margin: auto;
}

h1 {
    margin-top: 2rem;
}
</style>
