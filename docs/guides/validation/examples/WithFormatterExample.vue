<script lang="ts">
import { defineComponent } from "vue";
import { FTextField, FOutputField } from "@fkui/vue";

function myFormatter(value: string): string {
    return value.toLowerCase();
}

export default defineComponent({
    name: "WithFormatterExample",
    components: { FTextField, FOutputField },
    data() {
        return {
            modelValue: "",
            myFormatter,
        };
    },
});
</script>

<template>
    <div class="row">
        <div class="col col--md-9">
            <f-text-field
                id="with-formatter"
                v-model="modelValue"
                v-validation.maxLength="{ maxLength: { length: 100 } }"
                :formatter="myFormatter"
            >
                <template #default> Inmatningsfält </template>
            </f-text-field>
        </div>
        <div class="col col--md-3">
            <f-output-field for="with-formatter">
                <template #label> modelValue </template>
                <template #default>
                    <span class="docs-pre">{{ JSON.stringify(modelValue) }}</span>
                </template>
            </f-output-field>
        </div>
    </div>
</template>
