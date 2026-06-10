<script setup lang="ts">
import { FButton } from "@fkui/vue";
</script>

<template>
    <div class="button-group">
        <f-button class="button-group__item" icon-left="success" size="medium" variant="primary">
            Knapp 1 i grupp
        </f-button>
        <f-button class="button-group__item" icon-left="error" size="medium" variant="secondary">
            Knapp 2 i grupp
        </f-button>
    </div>
</template>
