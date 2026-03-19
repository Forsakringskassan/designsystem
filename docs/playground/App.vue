<script setup lang="ts">
import { getCurrentInstance, ref } from "vue";
import { FTextField } from "@fkui/vue";
import { setup } from "./setup";

const instance = getCurrentInstance();
setup(instance?.appContext.app);

const modelValue = ref("");
</script>

<template>
    <f-text-field v-model="modelValue" v-validation.required>Etikett</f-text-field>
    <pre><code>{{ JSON.stringify({modelValue}) }}</code></pre>
</template>
