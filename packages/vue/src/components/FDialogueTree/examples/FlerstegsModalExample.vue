<script lang="ts">
import { defineComponent } from "vue";
import { formModal } from "@fkui/vue";
import ExampleModal from "./FlerstegsModal.vue";

export default defineComponent({
    name: "FlerstegsModalApiExample",
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
        <button type="button" class="button button--secondary" @click="onClick">Öppna Modal</button>
        <div v-if="result">
            <pre>Modalen stängdes med resultatet:</pre>
            <pre>{{ result }}</pre>
        </div>
    </div>
</template>
