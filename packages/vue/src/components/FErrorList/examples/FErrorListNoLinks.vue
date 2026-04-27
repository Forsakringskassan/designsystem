<!-- eslint-disable vue/component-api-style -- technical debt: should be migrated from options to composition api -->
<script lang="ts">
import { defineComponent } from "vue";
import { FErrorList } from "@fkui/vue";

export default defineComponent({
    name: "FErrorListNoLinks",
    components: { FErrorList },
    data() {
        return { items: [{ title: "Förnamn" }, { title: "Efternamn" }] };
    },
});
</script>

<template>
    <f-error-list :items></f-error-list>
</template>
