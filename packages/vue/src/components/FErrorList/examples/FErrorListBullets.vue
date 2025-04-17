<script>
import { defineComponent } from "vue";
import { FErrorList, FTextField } from "@fkui/vue";

export default defineComponent({
    name: "FErrorListBullets",
    components: { FErrorList, FTextField },
    data() {
        return {
            items: [
                { id: "fornamn-med-bullets", title: "Förnamn" },
                { id: "efternamn-med-bullets", title: "Efternamn" },
            ],
        };
    },
});
</script>

<template>
    <div>
        <f-error-list :items="items" :bullets="true">
            <template #title> Kolla på felen nedan </template>
        </f-error-list>

        <f-text-field id="fornamn-med-bullets" v-validation.maxLength> Förnamn </f-text-field>
        <f-text-field id="efternamn-med-bullets" v-validation.maxLength> Efternamn </f-text-field>
    </div>
</template>
