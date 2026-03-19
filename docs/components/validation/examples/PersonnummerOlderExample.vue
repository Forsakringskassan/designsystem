<script lang="ts">
import { defineComponent } from "vue";
import { FTextField } from "@fkui/vue";

export default defineComponent({
    name: "PersonnummerOlderExample",
    components: { FTextField },
    data() {
        return {
            reference: "",
            model: "",
        };
    },
});
</script>

<template>
    <div class="row">
        <div class="col col--md-6">
            <f-text-field
                id="personnummer-older-reference"
                v-model="reference"
                v-validation.personnummerFormat
            >
                Fyll i ett personnummer (referens)
            </f-text-field>
        </div>
        <div class="col col--md-6">
            <f-text-field
                id="personnummer-older-input"
                v-model="model"
                v-validation.personnummerFormat.personnummerOlder="{
                    personnummerOlder: { otherField: reference },
                }"
            >
                Fyll i ett personnummer
            </f-text-field>
        </div>
    </div>
</template>
