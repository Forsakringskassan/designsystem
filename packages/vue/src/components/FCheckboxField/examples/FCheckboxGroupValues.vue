<script>
import { defineComponent } from "vue";
import { FFieldset, FCheckboxField } from "@fkui/vue";

export default defineComponent({
    name: "FCheckboxGroupValues",
    components: { FFieldset, FCheckboxField },
    data() {
        return {
            brochures: [],
        };
    },
});
</script>

<template>
    <f-fieldset name="checkbox-complex-values">
        <template #label> Broschyrer </template>

        <f-checkbox-field
            id="broschyrer-bor-eller-arbetar-utomlands"
            v-model="brochures"
            :value="['Om du bor eller arbetar utomlands']"
        >
            Om du bor eller arbetar utomlands
        </f-checkbox-field>

        <f-checkbox-field
            id="broschyrer-offentlighet-sekretess"
            v-model="brochures"
            :value="{ offentlighet: false, sekretess: true }"
        >
            Offentlighet och sekretess
        </f-checkbox-field>
    </f-fieldset>
</template>
