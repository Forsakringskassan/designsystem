<!-- eslint-disable vue/component-api-style -- technical debt: should be migrated from options to composition api -->
<script lang="ts">
import { defineComponent } from "vue";
import { ValidationService } from "@fkui/logic";
import { FButton, FTextField } from "@fkui/vue";

export default defineComponent({
    name: "ValidationPluginToggleEnabled",
    components: { FButton, FTextField },
    data() {
        return { model: "", toggleEnabled: true };
    },
    mounted() {
        ValidationService.setSubmitted("validator-enabled");
    },
});
</script>

<template>
    <div>
        <p>Validering aktiverad: {{ toggleEnabled }}</p>

        <f-text-field
            id="validator-enabled"
            v-model="model"
            v-test="'validator-enabled'"
            v-validation.maxLength="{ maxLength: { enabled: toggleEnabled, length: 10 } }"
        >
            Max tio tecken
        </f-text-field>
        <f-button data-test="validator-enabled-button" @click="toggleEnabled = !toggleEnabled">
            Aktivera/Inaktivera
        </f-button>
    </div>
</template>
