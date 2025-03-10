<script setup lang="ts">
import { FFileItem } from "@fkui/vue";
</script>

<!-- cut above -->
<template>
    <div>
        <f-file-item v-test="'file-item'" :file-name="'myFile.pdf'" :mime-type="'application/pdf'"></f-file-item>
    </div>
</template>
