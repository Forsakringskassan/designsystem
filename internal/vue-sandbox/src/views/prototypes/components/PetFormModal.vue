<script lang="ts">
import { type PropType, defineComponent, reactive } from "vue";
import { FFormModal } from "@fkui/vue";
import PetFormFields, { type PetFormData } from "./PetFormFields.vue";

function emptyPetFormData(): PetFormData {
    return {
        animalType: "",
        name: "",
        age: "",
        legs: undefined,
        weight: undefined,
        soleGuardianship: "",
    };
}

export default defineComponent({
    name: "PetFormModal",
    components: { FFormModal, PetFormFields },
    props: {
        isOpen: {
            type: Boolean,
            required: false,
        },
        variant: {
            type: String as PropType<"long" | "short">,
            default: "long",
        },
        initialValue: {
            type: Object as PropType<PetFormData>,
            default: emptyPetFormData,
        },
    },
    emits: ["cancel", "close", "submit"],
    setup(props, { emit }) {
        const value = reactive({ ...props.initialValue }) as PetFormData;

        function onSubmit(event: { data: unknown }): void {
            emit("submit", event);
        }
        function onCancel(): void {
            emit("cancel");
        }
        function onClose(event: { reason: string; data?: unknown }): void {
            emit("close", event);
        }

        return { value, onSubmit, onCancel, onClose };
    },
});
</script>

<template>
    <f-form-modal :is-open :use-error-list="false" :value @submit="onSubmit" @cancel="onCancel" @close="onClose">
        <template #header>Husdjur</template>
        <template #input-text-fields>
            <pet-form-fields
                :model-value="value"
                :variant
                group-id="modal-pet"
                @update:model-value="Object.assign(value, $event)"
            />
        </template>
    </f-form-modal>
</template>
