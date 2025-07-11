<script setup lang="ts">
import FButton from "../FButton.vue";
</script>

<template>
    <div class="button-group">
        <f-button group-item icon-left="success">
            <span>Knapp 1 i grupp</span>
        </f-button>
        <f-button variant="secondary" group-item icon-left="error">
            <span>Knapp 2 i grupp</span>
        </f-button>
    </div>
</template>
