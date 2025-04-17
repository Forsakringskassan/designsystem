<script>
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
