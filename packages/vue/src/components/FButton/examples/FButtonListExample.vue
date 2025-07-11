<script setup lang="ts">
import FButton from "../FButton.vue";
</script>

<template>
    <ul class="button-list no-marker">
        <li>
            <f-button variant="tertiary" icon-left="success"> Knapp 1 i lista </f-button>
        </li>
        <li>
            <f-button variant="tertiary" icon-left="cross"> Knapp 2 i lista </f-button>
        </li>
        <li>
            <f-button variant="tertiary" icon-left="pen"> Knapp 3 i lista </f-button>
        </li>
    </ul>
</template>
<style>
.no-marker {
    list-style-type: none;
}
</style>
