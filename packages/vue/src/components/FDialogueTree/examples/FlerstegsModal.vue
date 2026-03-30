<script setup lang="ts">
import { reactive, ref } from "vue";
import {
    type FDialogueTreeUserProgress,
    type FModalButtonDescriptor,
    FDialogueTree,
    FFormModal,
    FOrganisationsnummerTextField,
} from "@fkui/vue";
import { exampleDialogTree } from "./example-dialog-tree";

const props = defineProps<{ isOpen?: boolean }>();

const emit = defineEmits<{
    cancel: [];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- technical debt, FFormModal should use generics
    close: [payload: { reason: string; data?: any }];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- technical debt, FFormModal should use generics
    submit: [payload: { data: any }];
}>();

const DIALOGUE_TREE_DATA = exampleDialogTree();

const current = ref<FDialogueTreeUserProgress>({
    label: "",
    lastStep: true,
    steps: [],
});

const treeData = ref(DIALOGUE_TREE_DATA);

const value = reactive({ organisationNumber: "" });

const createInitialButtons = (): FModalButtonDescriptor[] => [
    {
        label: "Avbryt",
        type: "secondary",
        screenreader: "formuläret",
        event: "dismiss",
    },
];

const buttons = ref(createInitialButtons());

function onCancel(): void {
    emit("cancel");
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- technical debt, FFormModal should use generics
function onClose(payload: { reason: string; data?: any }): void {
    buttons.value = createInitialButtons();
    emit("close", payload);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- technical debt, FFormModal should use generics
function onSubmit(payload: { data: any }): void {
    emit("submit", payload);
}

function onChange(event: FDialogueTreeUserProgress): void {
    if (event.lastStep) {
        const hasSubmit = buttons.value.some((b) => b.submitButton);
        if (!hasSubmit) {
            buttons.value.push({
                label: "Lägg till",
                type: "primary",
                screenreader: "lägg till knapp",
                event: "submit",
                submitButton: true,
            } as FModalButtonDescriptor & { submitButton?: boolean });
        }
    } else {
        buttons.value = buttons.value.filter((b) => !b.submitButton);
    }
}
</script>

<template>
    <f-form-modal :is-open :value :buttons @submit="onSubmit" @cancel="onCancel" @close="onClose">
        <template #header> {{ current.label }} </template>
        <template #error-message>Oj, du har glömt fylla i något. Gå till:</template>
        <template #input-text-fields>
            <f-dialogue-tree
                v-model="current"
                :dialogue-tree="treeData"
                @update:model-value="onChange"
            >
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
