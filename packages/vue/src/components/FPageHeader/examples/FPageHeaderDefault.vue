<template>
    <f-page-header>
        Exempelapplikation
        <template #right> Namn Namnsson </template>
    </f-page-header>
</template>

<script>
import { defineComponent } from "vue";
import { FPageHeader } from "@fkui/vue";

export default defineComponent({
    name: "FPageHeaderDefault",
    components: { FPageHeader },
});
</script>
