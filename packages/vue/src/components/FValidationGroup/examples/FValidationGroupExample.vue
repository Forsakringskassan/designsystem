<script>
import { defineComponent } from "vue";
import { FValidationGroup, FTextField } from "@fkui/vue";

export default defineComponent({
    name: "FValidationGroupExample",
    components: { FValidationGroup, FTextField },
    data() {
        return { favoritGrupp: {} };
    },
});
</script>

<template>
    <div>
        <f-validation-group key="favoritGrupp" v-model="favoritGrupp">
            <f-text-field id="frukt" v-validation.required maxlength="100">
                Favoritfrukt
            </f-text-field>
            <f-text-field id="godis" v-validation.required maxlength="100">
                Favoritgodis
            </f-text-field>
        </f-validation-group>

        <pre>v-model</pre>
        <pre>{{ favoritGrupp }}</pre>
    </div>
</template>
