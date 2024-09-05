<template>
    <div class="f-form-modal-custom-buttons">
        <button type="button" class="button button--secondary" @click="onClick">Öppna Modal</button>
        <div class="f-form-modal-example">
            <example-modal
                :is-open="isOpen"
                :buttons="buttons"
                @submit="onSubmit"
                @cancel="onCancel"
                @close="onClose"
            ></example-modal>
        </div>
        <div v-if="field1 || field2">
            <pre>Modalen stängdes med resultatet:</pre>
            <pre>Förnamn: {{ field1 }}, Efternamn: {{ field2 }}</pre>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import ExampleModal from "./ExampleModal.vue";

export default defineComponent({
    name: "FFormModalExampleCustomButtons",
    components: { ExampleModal },
    props: {},
    data: () => {
        return {
            isOpen: false,
            field1: "",
            field2: "",
            buttons: [{ label: "Stäng", screenreader: "formuläret", event: "dismiss" }],
        };
    },
    methods: {
        onClick() {
            this.isOpen = true;
        },
        onClose() {
            this.isOpen = false;
        },
        onSubmit(event) {
            this.field1 = event.data.field1;
            this.field2 = event.data.field2;
            window.alert("onSubmit");
        },
        onCancel() {
            this.resetFields();
            window.alert("onCancel");
        },
        resetFields() {
            this.field1 = "";
            this.field2 = "";
        },
    },
});
</script>
