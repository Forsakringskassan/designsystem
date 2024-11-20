<script setup lang="ts">
import { ref } from "vue";
import { FTextField } from "@fkui/vue";

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

        <button id="add-item" type="button" @click="onAddItem">Add item</button>
        <button id="replace-list" type="button" @click="onReplaceList">Replace list</button>
    </div>
</template>
