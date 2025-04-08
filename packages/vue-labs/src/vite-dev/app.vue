<script lang="ts">
import { defineComponent } from "vue";
import { FTextField } from "@fkui/vue";

export default defineComponent({
    components: { FTextField },
    data() {
        return {
            namn: "",
        };
    },
});
</script>

<template>
    <div>
        <f-text-field v-model="namn" v-validation.required maxlength="100">Namn</f-text-field>
        <pre>Hej {{ namn }}</pre>
    </div>
</template>
