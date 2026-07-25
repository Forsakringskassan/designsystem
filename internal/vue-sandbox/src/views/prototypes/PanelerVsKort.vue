<script lang="ts">
import { defineComponent } from "vue";

const prototypes = [
    { path: "/paneler-vs-kort/panellista-lang", name: "Panellista längre" },
    { path: "/paneler-vs-kort/panellista-kortare", name: "Panellista kortare" },
    { path: "/paneler-vs-kort/redigerbar-lista-lang", name: "Redigerbar lista längre" },
    { path: "/paneler-vs-kort/redigerbar-lista-kortare", name: "Redigerbar lista kortare" },
];

export default defineComponent({
    setup() {
        return { prototypes };
    },
});
</script>

<template>
    <div class="prototype-root">
        <router-link class="anchor" to="/">← Tillbaka</router-link>
        <h1>Paneler vs Kort</h1>
        <ul class="prototype-list">
            <li v-for="proto in prototypes" :key="proto.path">
                <router-link class="anchor" :to="proto.path">{{ proto.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
@use "@fkui/design/src/core/size";

.prototype-root {
    width: min(100% - 2rem, 80ch);
    margin: auto;
}

h1 {
    margin-top: 2rem;
    margin-bottom: size.$margin-150;
}

.prototype-list {
    list-style: none;
    padding: 0;

    li {
        margin-bottom: size.$margin-100;
    }
}
</style>
