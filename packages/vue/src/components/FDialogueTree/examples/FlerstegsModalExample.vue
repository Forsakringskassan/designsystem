<script lang="ts">
import { defineComponent } from "vue";
import { FButton, formModal } from "@fkui/vue";
import ExampleModal from "./FlerstegsModal.vue";

export default defineComponent({
    name: "FlerstegsModalExample",
    components: { FButton },
    data() {
        return {
            result: "",
        };
    },
    methods: {
        async onClick() {
            this.result = "";
            try {
                this.result = await formModal(this, ExampleModal);
            } catch {
                console.log("Användaren avbröt");
            }
        },
    },
});
</script>

<template>
    <div>
        <f-button size="small" variant="secondary" @click="onClick">Öppna Modal</f-button>
        <div v-if="result">
            <pre>Modalen stängdes med resultatet:</pre>
            <pre>{{ result }}</pre>
        </div>
    </div>
</template>
