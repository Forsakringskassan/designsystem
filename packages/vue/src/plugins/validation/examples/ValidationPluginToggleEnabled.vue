<script>
import { defineComponent } from "vue";
import { ValidationService } from "@fkui/logic";
import { FTextField } from "@fkui/vue";

export default defineComponent({
    name: "ValidationPluginToggleEnabled",
    components: { FTextField },
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
        <button
            class="button button--primary"
            data-test="validator-enabled-button"
            type="button"
            @click="toggleEnabled = !toggleEnabled"
        >
            Aktivera/Inaktivera
        </button>
    </div>
</template>
