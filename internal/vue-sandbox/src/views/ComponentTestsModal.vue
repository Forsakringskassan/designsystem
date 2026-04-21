<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import {
    type FDialogueTreeOption,
    type FDialogueTreeQuestion,
    type FDialogueTreeSubQuestion,
    type FDialogueTreeUserProgress,
    type FModalButtonDescriptor,
    FDialogueTree,
    FFormModal,
    FOrganisationsnummerTextField,
} from "@fkui/vue";

defineProps<{ isOpen?: boolean }>();

const emit = defineEmits<{
    cancel: [];
    close: [payload: { reason: string; data?: unknown }];
    submit: [payload: { data: unknown }];
}>();

function generateOption(label: string): FDialogueTreeOption {
    return {
        label,
        question: {
            label: "Är du anställd på ett konsult eller bemanningsföretag?",
            options: [
                {
                    label: "Ja, det är jag",
                    question: { label: "Om din anställning", userData: { label: "formA" } },
                },
                {
                    label: "Nej",
                    question: { label: "Om din anställning", userData: { label: "formB" } },
                },
            ],
        },
    };
}

function generateQuestion(): FDialogueTreeQuestion {
    return {
        label: "Var är du anställd?",
        options: [generateOption("I Sverige"), generateOption("Utanför Sverige")],
    };
}

function buildDialogTree(): FDialogueTreeSubQuestion {
    return {
        label: "Vad vill du lägga till?",
        options: [
            { label: "Anställning", question: generateQuestion() },
            { label: "Enskild firma eller handelsbolag", question: generateQuestion() },
            { label: "Aktiebolag", question: generateQuestion() },
        ],
    };
}

const treeData = ref(buildDialogTree());
const value = reactive({ organisationNumber: "" });

const current = ref<FDialogueTreeUserProgress>({
    label: "",
    lastStep: true,
    steps: [],
});

const createInitialButtons = (): FModalButtonDescriptor[] => [
    { label: "Avbryt", type: "secondary", screenreader: "formuläret", event: "dismiss" },
];

const buttons = ref(createInitialButtons());

function onCancel(): void {
    emit("cancel");
}

function onClose(payload: { reason: string; data?: unknown }): void {
    buttons.value = createInitialButtons();
    emit("close", payload);
}

function onSubmit(payload: { data: unknown }): void {
    emit("submit", payload);
}

function onChange(event: FDialogueTreeUserProgress): void {
    if (event.lastStep) {
        const hasSubmit = buttons.value.some((b) => b.submitButton);
        if (!hasSubmit) {
            buttons.value.unshift({
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

watch(current, (newVal) => {
    onChange(newVal);
});
</script>

<template>
    <f-form-modal
        :is-open
        :value
        :buttons
        :use-error-list="false"
        @submit="onSubmit"
        @cancel="onCancel"
        @close="onClose"
    >
        <template #header>{{ current.label }}</template>
        <template #error-message>Oj, du har glömt fylla i något. Gå till:</template>
        <template #input-text-fields>
            <f-dialogue-tree v-model="current" :dialogue-tree="treeData">
                <template #default="{ userData }">
                    <template v-if="userData.label">
                        <f-organisationsnummer-text-field v-model="value.organisationNumber" v-validation.required />
                    </template>
                </template>
            </f-dialogue-tree>
        </template>
    </f-form-modal>
</template>
