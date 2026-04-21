<script lang="ts">
import { defineComponent } from "vue";
import { FFormModal, FTextField } from "@fkui/vue";

export default defineComponent({
    name: "SandboxFormModal",
    components: { FFormModal, FTextField },
    props: {
        isOpen: {
            type: Boolean,
            required: false,
        },
    },
    emits: ["cancel", "close", "submit"],
    data() {
        return {
            value: {
                field1: "",
                field2: "",
            },
        };
    },
    methods: {
        onSubmit(event: { data: unknown }) {
            this.$emit("submit", event);
        },
        onCancel(event: unknown) {
            this.$emit("cancel", event);
        },
        onClose(event: { reason: string; data?: unknown }) {
            this.$emit("close", event);
        },
    },
});
</script>

<template>
    <f-form-modal :use-error-list="false" :is-open :value @submit="onSubmit" @cancel="onCancel" @close="onClose">
        <template #header>Formulärsmodal</template>
        <template #error-message>Oj, du har glömt fylla i något. Gå till:</template>
        <template #input-text-fields>
            <f-text-field v-model="value.field1" v-validation.required.maxLength="{ maxLength: { length: 32 } }">
                Fält 1
            </f-text-field>
            <f-text-field v-model="value.field2" v-validation.required.maxLength="{ maxLength: { length: 32 } }">
                Fält 2
            </f-text-field>
        </template>
    </f-form-modal>
</template>
