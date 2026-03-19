<script setup lang="ts">
import { ref } from "vue";
import { FButton, FTextField } from "@fkui/vue";

const list = ref(["foo", "bar", "baz"]);

function onAddItem(): void {
    list.value.push("baz");
}

function onReplaceList(): void {
    list.value = ["ole", "dole", "doff"];
}
</script>

<template>
    <div>
        <f-text-field id="input" v-validation.allowList="{ allowList: { list } }" maxlength="100">
            <template #default> Dynamic list </template>

            <template #error-message="{ hasError, validationMessage }">
                <template v-if="hasError"
                    ><span id="error">{{ validationMessage }}</span></template
                >
            </template>
        </f-text-field>

        <f-button id="add-item" @click="onAddItem">Add item</f-button>
        <f-button id="replace-list" @click="onReplaceList">Replace list</f-button>
    </div>
</template>
