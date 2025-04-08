<script lang="ts">
import { defineComponent } from "vue";
import { formatNumber } from "@fkui/logic";
import { FTextField, FOutputField } from "@fkui/vue";

export default defineComponent({
    name: "FormatterExample",
    components: { FTextField, FOutputField },
    data() {
        return {
            modelValue: "",
            formatNumber,
        };
    },
});
</script>

<template>
    <div class="row">
        <div class="col col--md-9">
            <f-text-field
                id="formatter-example"
                v-model="modelValue"
                v-validation.maxLength="{ maxLength: { length: 20 } }"
                :formatter="formatNumber"
            >
                <template #default> Inmatningsfält </template>
                <template #description="{ descriptionClass }">
                    <span :class="descriptionClass"> Fyll i ett heltal </span>
                </template>
            </f-text-field>
        </div>
        <div class="col col--md-3">
            <f-output-field for="formatter-example">
                <template #label> modelValue </template>
                <template #default>
                    <span class="docs-pre">{{ JSON.stringify(modelValue) }}</span>
                </template>
            </f-output-field>
        </div>
    </div>
</template>
