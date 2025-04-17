<script>
import { defineComponent } from "vue";
import { formModal } from "@fkui/vue";
import ExampleModal from "./ExampleModal.vue";

export default defineComponent({
    name: "FFormModalApiExample",
    data() {
        return {
            result: "",
        };
    },
    methods: {
        async onClick() {
            this.result = "";
            try {
                this.result = await formModal(this, ExampleModal, {
                    props: {
                        dataTest: "form-modal-api-example",
                        firstName: "Anton",
                    },
                });
            } catch {
                console.log("användaren avbröt");
            }
        },
    },
});
</script>

<template>
    <div class="f-form-modal-example">
        <button
            data-test="form-modal-api-example-button"
            type="button"
            class="button button--secondary"
            @click="onClick"
        >
            Öppna Modal
        </button>
        <div v-if="result">
            <pre>Modalen stängdes med resultatet:</pre>
            <pre id="api-result">{{ result }}</pre>
        </div>
    </div>
</template>
