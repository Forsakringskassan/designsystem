<!-- eslint-disable vue/component-api-style -- technical debt: should be migrated from options to composition api -->
<script lang="ts">
import { defineComponent } from "vue";
import { FIcon } from "@fkui/vue";

export default defineComponent({
    name: "FIconLibrary",
    components: { FIcon },
});
</script>

<template>
    <f-icon name="bell" library="f"></f-icon>
</template>
