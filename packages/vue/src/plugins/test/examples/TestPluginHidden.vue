<script>
import { defineComponent } from "vue";
import { FTextField } from "@fkui/vue";

export default defineComponent({
    name: "TestPluginHidden",
    components: { FTextField },
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

        <button type="button" @click="isVisible = !isVisible">
            {{ isVisible ? "Göm inmatningsfält" : "Visa inmatningsfält" }}
        </button>
    </div>
</template>
