<!-- eslint-disable vue/component-api-style -- technical debt: should be migrated from options to composition api -->
<script lang="ts">
import { defineComponent } from "vue";
import { FTextField } from "@fkui/vue";

export default defineComponent({
    name: "TestPluginExample",
    components: { FTextField },
});
</script>

<template>
    <f-text-field id="child-name" v-validation.maxLength="{ maxLength: { length: 100 } }">
        Barnets namn
    </f-text-field>
</template>
