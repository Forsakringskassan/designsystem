<script setup lang="ts">
import { FFileItem } from "@fkui/vue";
</script>

<!-- cut above -->
<template>
    <div>
        <f-file-item v-test="'file-item-doc'" :file-name="'myFile.doc'" :mime-type="'application/msword'"></f-file-item>
    </div>
    <div>
        <f-file-item v-test="'file-item-pdf'" :file-name="'myFile.pdf'" :mime-type="'application/pdf'"></f-file-item>
    </div>
    <div>
        <f-file-item v-test="'file-item-image'" :file-name="'myFile.png'" :mime-type="'image/png'"></f-file-item>
    </div>
</template>
