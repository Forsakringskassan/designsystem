<script>
import { defineComponent } from "vue";
import { FFieldset, FCheckboxField } from "@fkui/vue";

export default defineComponent({
    name: "FCheckboxGroupSingle",
    components: { FFieldset, FCheckboxField },
    data() {
        return {
            sign: [],
        };
    },
});
</script>

<template>
    <f-fieldset v-validation.required name="underskrift">
        <template #label>
            <h2>Underskrift</h2>
        </template>
        <f-checkbox-field v-model="sign" value="Ja">
            Jag är en ensam kryssruta så min screenreadertext kommer att vara anpassad för det.
        </f-checkbox-field>
    </f-fieldset>
</template>
