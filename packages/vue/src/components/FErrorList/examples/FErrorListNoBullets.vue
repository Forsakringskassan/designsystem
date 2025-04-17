<script>
import { defineComponent } from "vue";
import { FErrorList, FTextField } from "@fkui/vue";

export default defineComponent({
    name: "FErrorListNoBullets",
    components: { FErrorList, FTextField },
    data() {
        return {
            items: [
                { id: "fornamn-utan-bullets", title: "Förnamn" },
                { id: "efternamn-utan-bullets", title: "Efternamn" },
            ],
        };
    },
});
</script>

<template>
    <div>
        <f-error-list :items="items">
            <template #title> Kolla på felen nedan </template>
        </f-error-list>

        <f-text-field id="fornamn-utan-bullets" v-validation.maxLength> Förnamn </f-text-field>
        <f-text-field id="efternamn-utan-bullets" v-validation.maxLength> Efternamn </f-text-field>
    </div>
</template>
