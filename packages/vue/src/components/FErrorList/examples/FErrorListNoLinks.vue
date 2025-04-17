<script>
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
    <f-error-list :items="items" :bullets="true"></f-error-list>
</template>
