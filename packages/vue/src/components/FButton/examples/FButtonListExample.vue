<script setup lang="ts">
import { FButton } from "@fkui/vue";
</script>

<template>
    <ul class="button-list">
        <li>
            <f-button size="medium" variant="tertiary" icon-left="success">
                Knapp 1 i lista
            </f-button>
        </li>
        <li>
            <f-button size="medium" variant="tertiary" icon-left="cross">
                Knapp 2 i lista
            </f-button>
        </li>
        <li>
            <f-button size="medium" variant="tertiary" icon-left="pen"> Knapp 3 i lista </f-button>
        </li>
    </ul>
</template>
