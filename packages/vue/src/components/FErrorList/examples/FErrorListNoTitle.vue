<script>
import { defineComponent } from "vue";
import { FErrorList, FTextField } from "@fkui/vue";

export default defineComponent({
    name: "FErrorListNoTitle",
    components: { FErrorList, FTextField },
    data() {
        return {
            items: [
                { id: "fornamn-utan-text", title: "Förnamn" },
                { id: "efternamn-utan-text", title: "Efternamn" },
            ],
        };
    },
});
</script>

<template>
    <div>
        <f-error-list :items="items" :bullets="true"></f-error-list>

        <f-text-field id="fornamn-utan-text" v-validation.maxLength> Förnamn </f-text-field>
        <f-text-field id="efternamn-utan-text" v-validation.maxLength> Efternamn </f-text-field>
    </div>
</template>
