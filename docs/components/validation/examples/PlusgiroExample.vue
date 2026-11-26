<!-- eslint-disable vue/component-api-style -- technical debt: should be migrated from options to composition api -->
<script lang="ts">
import { defineComponent } from "vue";
import { FTextField } from "@fkui/vue";

export default defineComponent({
    name: "PlusgiroExample",
    components: { FTextField },
    data() {
        return { model: "" };
    },
});
</script>

<template>
    <f-text-field v-model="model" v-validation.plusgiro> Fyll i plusgiro </f-text-field>
</template>
