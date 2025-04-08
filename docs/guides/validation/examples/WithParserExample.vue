<script lang="ts">
import { defineComponent } from "vue";
import { FTextField, FOutputField } from "@fkui/vue";

function myParser(value: string): string {
    return value.toUpperCase();
}

export default defineComponent({
    name: "WithParserExample",
    components: { FTextField, FOutputField },
    data() {
        return {
            modelValue: "",
            myParser,
        };
    },
});
</script>

<template>
    <div class="row">
        <div class="col col--md-9">
            <f-text-field
                id="with-parser"
                v-model="modelValue"
                v-validation.maxLength="{ maxLength: { length: 100 } }"
                :parser="myParser"
            >
                <template #default> Inmatningsfält </template>
            </f-text-field>
        </div>
        <div class="col col--md-3">
            <f-output-field for="with-parser">
                <template #label> modelValue </template>
                <template #default>
                    <span class="docs-pre">{{ JSON.stringify(modelValue) }}</span>
                </template>
            </f-output-field>
        </div>
    </div>
</template>
