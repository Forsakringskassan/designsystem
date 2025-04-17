<script lang="ts">
import { defineComponent } from "vue";
import {
    FDialogueTree,
    type FDialogueTreeOption,
    type FDialogueTreeUserProgress,
    FTextField,
} from "@fkui/vue";

function generateOption(label: string): FDialogueTreeOption {
    return {
        label: `Option (${label})`,
        question: {
            label: `Fourth question (${label})`,
            options: [
                {
                    label: `Option (${label}.1)`,
                    question: {
                        label: `Answer (${label})`,
                        userData: {
                            type: "formA",
                            foo: "bar",
                        },
                    },
                },
                {
                    label: `Option (${label}.2)`,
                    question: {
                        label: `Answer (${label})`,
                        userData: {
                            type: "formB",
                            bar: "foo",
                        },
                    },
                },
            ],
        },
    };
}

const DIALOGUE_TREE_DATA = {
    label: "First question",
    options: [
        {
            label: "Option 1",
            question: {
                label: "Second question 1",
                options: [generateOption("1.1"), generateOption("1.2")],
            },
        },
        {
            label: "Option 2",
            question: {
                label: "Second question 2",
                options: [generateOption("2.1"), generateOption("2.2")],
            },
        },
    ],
};

export default defineComponent({
    name: "FDialogueTreeExample",
    components: { FDialogueTree, FTextField },
    data() {
        return {
            tree: DIALOGUE_TREE_DATA,
            current: {
                label: "",
                lastStep: true,
                steps: [],
            } satisfies FDialogueTreeUserProgress,
        };
    },
});
</script>

<template>
    <div>
        <!-- just for demo purpose -->
        <h1>{{ current.label }}</h1>

        <f-dialogue-tree v-model="current" :dialogue-tree="tree">
            <template #default="{ userData }">
                <template v-if="userData.type === 'formA'">
                    formA
                    <f-text-field v-validation.required.maxLength="{ maxLength: { length: 32 } }">
                        Field 1
                    </f-text-field>
                </template>
                <template v-if="userData.type === 'formB'">
                    formB
                    <f-text-field v-validation.required.maxLength="{ maxLength: { length: 32 } }">
                        Field 1
                    </f-text-field>
                </template>
            </template>
        </f-dialogue-tree>
    </div>
</template>
