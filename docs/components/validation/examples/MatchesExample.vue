<script lang="ts">
import { defineComponent } from "vue";
import { FTextField } from "@fkui/vue";

export default defineComponent({
    components: { FTextField },
    data() {
        return {
            reference: "värde",
            model: "",
        };
    },
});
</script>

<template>
    <div class="row">
        <div class="col col--md-6">
            <f-text-field id="reference" v-model="reference"> Referens </f-text-field>
        </div>
        <div id="input-wrapper" class="col col--md-6">
            <f-text-field
                id="other"
                v-model="model"
                v-validation.matches="{ matches: { id: 'reference' } }"
            >
                Inmatningsfält
            </f-text-field>
        </div>
    </div>
</template>
