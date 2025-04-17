<script>
import { defineComponent } from "vue";
import { FPageHeader, FLogo } from "@fkui/vue";

export default defineComponent({
    name: "FPageHeaderDefault",
    components: { FPageHeader, FLogo },
});
</script>

<template>
    <f-page-header>
        Exempelapplikation
        <template #logo>
            <f-logo size="small">Example logo text</f-logo>
        </template>
        <template #right> Namn Namnsson </template>
    </f-page-header>
</template>
