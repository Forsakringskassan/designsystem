<template>
    <f-form-modal
        :is-open="isOpen"
        @cancel="closeModal()"
        @close="closeModal()"
        @submit="closeModal()"
    >
        <template #header> Rubrik </template>
        <template #default>
            <p>Ingress</p>
        </template>
        <template #input-text-fields>
            <f-text-field
                v-validation.required.maxLength="{
                    maxLength: { length: 32 },
                }"
            >
                Etikett
            </f-text-field>
        </template>
    </f-form-modal>
    <button type="button" class="button button--secondary" @click="isOpen = true">
        Öppna modal
    </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { FFormModal, FTextField } from "@fkui/vue";

export default defineComponent({
    name: "FFormModalExample",
    components: { FFormModal, FTextField },
    data() {
        return {
            isOpen: false,
        };
    },
    methods: {
        closeModal(): void {
            this.isOpen = false;
        },
    },
});
</script>
