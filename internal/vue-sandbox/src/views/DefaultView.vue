<script lang="ts">
import { defineComponent } from "vue";
import { prototypes } from "../router";

export default defineComponent({
    setup() {
        return { prototypes };
    },
});
</script>

<template>
    <div class="sandbox-root">
        <h1>Prototyper</h1>
        <ul class="prototype-list">
            <li v-for="proto in prototypes" :key="proto.path">
                <router-link class="anchor" :to="proto.path">{{ proto.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
@use "@fkui/design/src/core/size";

.sandbox-root {
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
