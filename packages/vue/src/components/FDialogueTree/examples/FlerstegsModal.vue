<script lang="ts">
import { defineComponent } from "vue";
import {
    FFormModal,
    FDialogueTree,
    FOrganisationsnummerTextField,
    type FDialogueTreeUserProgress,
    type FModalButtonDescriptor,
} from "@fkui/vue";
import { exampleDialogTree } from "./example-dialog-tree";

const DIALOGUE_TREE_DATA = exampleDialogTree();

export default defineComponent({
    name: "ExampleFlerstegsModal",
    components: { FFormModal, FDialogueTree, FOrganisationsnummerTextField },
    props: {
        isOpen: {
            type: Boolean,
            default: false,
            required: false,
        },
    },
    emits: ["close", "cancel", "submit"],
    data() {
        return {
            current: {
                label: "",
                lastStep: true,
                steps: [],
            } satisfies FDialogueTreeUserProgress,
            treeData: DIALOGUE_TREE_DATA,
            value: {
                organisationNumber: "",
            },
            buttons: [
                {
                    label: "Avbryt",
                    type: "secondary",
                    screenreader: "formuläret",
                    event: "dismiss",
                },
            ] as FModalButtonDescriptor[],
        };
    },
    methods: {
        onClose(event: Event): void {
            this.buttons = [
                {
                    label: "Avbryt",
                    type: "secondary",
                    screenreader: "formuläret",
                    event: "dismiss",
                },
            ];
            this.$emit("close", event);
        },
        onCancel(event: Event): void {
            this.$emit("cancel", event);
        },
        onSubmit(event: Event): void {
            this.$emit("submit", event);
        },
        onChange(event: FDialogueTreeUserProgress): void {
            if (event.lastStep) {
                this.buttons.push({
                    label: "Lägg till",
                    type: "primary",
                    screenreader: "lägg till knapp",
                    event: "submit",
                    submitButton: true,
                });
            }
        },
    },
});
</script>

<template>
    <f-form-modal
        :is-open="isOpen"
        :value="value"
        :buttons="buttons"
        @submit="onSubmit"
        @cancel="onCancel"
        @close="onClose"
    >
        <template #header> {{ current.label }} </template>
        <template #error-message>Oj, du har glömt fylla i något. Gå till:</template>
        <template #input-text-fields>
            <f-dialogue-tree v-model="current" :dialogue-tree="treeData" @change="onChange">
                <template #default="{ userData }">
                    <template v-if="userData.label">
                        <f-organisationsnummer-text-field
                            v-model="value.organisationNumber"
                            v-validation.required
                            v-test="'organisationsnummer'"
                        ></f-organisationsnummer-text-field>
                    </template>
                </template>
            </f-dialogue-tree>
        </template>
    </f-form-modal>
</template>
