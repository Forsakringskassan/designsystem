<script setup lang="ts">
import { FFileItem } from "@fkui/vue";
</script>

<template>
    <!-- cut above -->
    <f-file-item v-test="'file-item-doc'" file-name="myFile.doc" mime-type="application/msword"></f-file-item>
    <f-file-item v-test="'file-item-pdf'" file-name="myFile.pdf" mime-type="application/pdf"></f-file-item>
    <f-file-item v-test="'file-item-img'" file-name="myFile.png" mime-type="image/png"></f-file-item>
    <!-- cut below -->
</template>
