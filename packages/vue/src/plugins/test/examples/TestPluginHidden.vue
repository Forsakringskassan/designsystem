<script lang="ts">
import { defineComponent } from "vue";
import { FButton, FTextField } from "@fkui/vue";

export default defineComponent({
    name: "TestPluginHidden",
    components: { FButton, FTextField },
    data() {
        return { isVisible: false };
    },
});
</script>

<template>
    <div>
        <f-text-field
            v-if="isVisible"
            id="child-name"
            v-validation.maxLength="{ maxLength: { length: 100 } }"
        >
            Barnets namn
        </f-text-field>

        <f-button @click="isVisible = !isVisible">
            {{ isVisible ? "Göm inmatningsfält" : "Visa inmatningsfält" }}
        </f-button>
    </div>
</template>
