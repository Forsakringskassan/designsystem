<script lang="ts">
import { defineComponent } from "vue";
import { FTextField, FOutputField } from "@fkui/vue";

function myParser(value: string): string {
    return value.toUpperCase();
}

function myFormatter(value: string): string {
    return value.toLowerCase();
}

export default defineComponent({
    name: "WithParserFormatterExample",
    components: { FTextField, FOutputField },
    data() {
        return {
            modelValue: "",
            myParser,
            myFormatter,
        };
    },
});
</script>

<template>
    <div class="row">
        <div class="col col--md-9">
            <f-text-field
                id="with-parser-formatter"
                v-model="modelValue"
                v-validation.maxLength="{ maxLength: { length: 100 } }"
                :parser="myParser"
                :formatter="myFormatter"
            >
                <template #default> Inmatningsfält </template>
            </f-text-field>
        </div>
        <div class="col col--md-3">
            <f-output-field for="with-parser-formatter">
                <template #label> modelValue </template>
                <template #default>
                    <span class="docs-pre">{{ JSON.stringify(modelValue) }}</span>
                </template>
            </f-output-field>
        </div>
    </div>
</template>
