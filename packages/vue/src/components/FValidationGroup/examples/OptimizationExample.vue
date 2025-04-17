<script>
import { defineComponent } from "vue";
import { FValidationGroup, FTextField, FFieldset, FRadioField } from "@fkui/vue";

export default defineComponent({
    name: "OptimizationExample",
    components: { FTextField, FValidationGroup, FFieldset, FRadioField },
    data() {
        return {
            favoritGrupp: {},
            val: true,
            kaka: "",
            frukt: "",
            godis: "",
        };
    },
});
</script>

<template>
    <div>
        <f-validation-group key="unik-nyckel" v-model="favoritGrupp">
            <f-text-field id="kaka" v-validation.maxLength="{ maxLength: { length: 10 } }">
                Favoritkaka
            </f-text-field>

            <f-fieldset id="val" v-validation.required v-test="'val'" name="val">
                <template #label> Frukt eller godis? </template>

                <f-radio-field id="val-frukt" v-model="val" v-test="'val-frukt'" :value="true">
                    Frukt
                </f-radio-field>
                <f-radio-field id="val-godis" v-model="val" v-test="'val-godis'" :value="false">
                    Godis
                </f-radio-field>
            </f-fieldset>

            <div v-if="val === true">
                <f-text-field
                    id="frukt"
                    v-model="frukt"
                    v-validation.maxLength="{ maxLength: { length: 10 } }"
                    v-test="'frukt'"
                >
                    Favoritfrukt
                </f-text-field>
            </div>
            <div v-else>
                <f-text-field
                    id="godis"
                    v-model="godis"
                    v-validation.maxLength="{ maxLength: { length: 10 } }"
                    v-test="'godis'"
                >
                    Favoritgodis
                </f-text-field>
            </div>
        </f-validation-group>

        <button type="button" class="button" :disabled="!favoritGrupp.isValid">
            Lägg till något nytt
        </button>

        <p>isValid:</p>
        <pre data-test="favorit-grupp-is-valid">{{ favoritGrupp.isValid }}</pre>
        <p>componentsWithError.length:</p>
        <pre data-test="favorit-grupp-error-count">{{
            favoritGrupp.componentsWithError ? favoritGrupp.componentsWithError.length : 0
        }}</pre>
        <p>componentsWithError:</p>
        <pre>{{ favoritGrupp.componentsWithError }}</pre>
        <p>componentCount:</p>
        <pre>{{ favoritGrupp.componentCount }}</pre>
    </div>
</template>
