<script>
import { defineComponent } from "vue";
import { FFieldset, FCheckboxField } from "@fkui/vue";

export default defineComponent({
    name: "FFieldsetChecbox",
    components: {
        FFieldset,
        FCheckboxField,
    },
    data() {
        return {
            dagar: [],
        };
    },
});
</script>

<template>
    <f-fieldset name="group-name-checkbox">
        <template #label> Vilka dagar i veckan vill du bli kontaktad? </template>
        <f-checkbox-field id="dagar-mandag" v-model="dagar" value="mandag">
            Måndag
        </f-checkbox-field>
        <f-checkbox-field id="dagar-tisdag" v-model="dagar" value="tisdag">
            Tisdag
        </f-checkbox-field>
        <f-checkbox-field id="dagar-onsdag" v-model="dagar" value="onsdag">
            Onsdag
        </f-checkbox-field>
        <f-checkbox-field id="dagar-torsdag" v-model="dagar" value="torsdag">
            Torsdag
        </f-checkbox-field>
        <f-checkbox-field id="dagar-fredag" v-model="dagar" value="fredag">
            Fredag
        </f-checkbox-field>
    </f-fieldset>
</template>
