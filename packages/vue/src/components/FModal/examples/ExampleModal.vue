<script lang="ts">
import { type PropType, defineComponent } from "vue";
import {
    type FModalButtonDescriptor,
    type FValidationFormCallback,
    FFormModal,
    FTextField,
} from "@fkui/vue";
import type { sizes } from "../sizes";

export default defineComponent({
    name: "ExampleModal",
    components: { FFormModal, FTextField },
    props: {
        isOpen: {
            type: Boolean,
            required: false,
        },
        size: {
            default: "",
            type: String as PropType<(typeof sizes)[number]>,
        },
        testId: {
            type: String,
            default: "",
            required: false,
        },
        beforeSubmit: {
            type: Function as PropType<FValidationFormCallback | undefined>,
            required: false,
            default: undefined,
        },
        frukt: {
            type: String,
            required: false,
            default: "",
        },
        buttons: {
            type: Array as PropType<FModalButtonDescriptor[] | undefined>,
            required: false,
            default: undefined,
        },
    },
    emits: ["cancel", "close", "submit"],
    data() {
        return {
            value: {
                field1: this.frukt,
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
    <f-form-modal
        :size
        :data-test="testId"
        :use-error-list="false"
        :is-open
        :value
        :before-submit
        :buttons="buttons ? buttons : undefined"
        @submit="onSubmit"
        @cancel="onCancel"
        @close="onClose"
    >
        <template #header> Fruktsallad </template>
        <p>
            Fruktsallad är en dessert bestående av minst tre sorters blandade frukter som är tärnade
            eller skivade och ofta skalade och urkärnade. En tallrik med fruktsallad bestående av
            päron, satsuma, kiwi, passionsfrukt, granatäppelkärnor, samt grekisk yoghurt blandat med
            flytande honung, kardemumma och vaniljsocker.
        </p>
        <template #error-message> Oj, du har glömt fylla i något. Gå till: </template>
        <template #input-text-fields>
            <f-text-field
                v-model="value.field1"
                v-test="'field1'"
                v-validation.required.maxLength="{ maxLength: { length: 32 } }"
            >
                Favoritfrukt
            </f-text-field>
            <f-text-field
                v-model="value.field2"
                v-test="'field2'"
                v-validation.required.maxLength="{ maxLength: { length: 32 } }"
            >
                Smak
            </f-text-field>
        </template>
    </f-form-modal>
</template>
