<script lang="ts">
import { defineComponent } from "vue";
import { type GroupValidityEvent, FTextField, FValidationGroup } from "@fkui/vue";

export default defineComponent({
    name: "FValidationGroupExample",
    components: { FValidationGroup, FTextField },
    data() {
        return { favoritGrupp: {} as GroupValidityEvent };
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
