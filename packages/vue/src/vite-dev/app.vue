<script setup lang="ts">
import { ref } from "vue";
import { FTextField } from "../components";

const namn = ref("");
</script>

<template>
    <div class="container">
        <f-text-field v-model="namn" v-validation.required maxlength="100"> Namn </f-text-field>
        <pre>Hej {{ namn }}</pre>
    </div>
</template>
