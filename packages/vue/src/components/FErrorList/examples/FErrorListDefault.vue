<script lang="ts">
import { defineComponent } from "vue";
import { FErrorList, FTextField } from "@fkui/vue";

export default defineComponent({
    name: "FErrorListDefault",
    components: { FErrorList, FTextField },
    data() {
        return {
            items: [
                { id: "fornamn", title: "Förnamn" },
                { id: "efternamn", title: "Efternamn" },
            ],
        };
    },
});
</script>

<template>
    <div>
        <f-error-list :items>
            <template #title> Kolla på felen nedan </template>
        </f-error-list>

        <f-text-field id="fornamn" v-validation.maxLength> Förnamn </f-text-field>
        <f-text-field id="efternamn" v-validation.maxLength> Efternamn </f-text-field>
    </div>
</template>
