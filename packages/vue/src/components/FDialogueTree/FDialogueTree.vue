<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { focus, focusFirst } from "@fkui/logic";

import { FIcon } from "../FIcon";
import { getHTMLElementsFromVueRef } from "../../utils";
import { FDialogueTreeData } from "./FDialogueTreeData";
import {
    type FDialogueTreeOption,
    FDialogueTreeQuestion,
    type FDialogueTreeUserProgress,
    isDialogueTreeEndQuestion,
} from "./FDialogueTreeModel";

export default defineComponent({
    name: "FDialogueTree",
    components: {
        FIcon,
    },
    props: {
        /**
         * Current dialogue question
         * @model
         */
        modelValue: {
            type: Object as PropType<FDialogueTreeUserProgress>,
            required: true,
        },
        /**
         * Dialogue tree
         */
        dialogueTree: {
            type: Object as PropType<FDialogueTreeQuestion>,
            required: true,
        },
    },
    emits: ["update:modelValue"],
    data(): FDialogueTreeData {
        return {
            currentStep: this.dialogueTree,
            steps: [],
        };
    },
    computed: {
        userData(): unknown {
            if (isDialogueTreeEndQuestion(this.currentStep)) {
                return this.currentStep.userData;
            }
            return undefined;
        },
        options(): FDialogueTreeOption[] {
            if (!isDialogueTreeEndQuestion(this.currentStep)) {
                return this.currentStep.options;
            }
            return [];
        },
    },
    created() {
        this.currentStep = this.dialogueTree;

        if (isDialogueTreeEndQuestion(this.currentStep)) {
            this.emitChange(true);
        } else {
            this.emitChange(false);
        }
    },

    methods: {
        async onClickedOption(option: FDialogueTreeOption, index: number): Promise<void> {
            this.steps.push(index);
            this.currentStep = option.question;
            if (isDialogueTreeEndQuestion(option.question)) {
                this.emitChange(true);
                await this.$nextTick();
                focusFirst(this.$el as HTMLElement);
            } else {
                this.emitChange(false);
                await this.$nextTick();
                const firstElement = getHTMLElementsFromVueRef(this.$refs["dialogueButton-0"])[0];
                if (firstElement) {
                    focus(firstElement);
                }
            }
        },
        emitChange(lastStep: boolean) {
            const emit: FDialogueTreeUserProgress = {
                label: this.currentStep.label,
                lastStep,
                steps: this.steps,
            };

            /**
             * `v-model` event.
             * @event update:modelValue
             * @type {FDialogueTreeUserProgress}
             */
            this.$emit("update:modelValue", emit);
        },
    },
});
</script>

<template>
    <div class="dialogue-tree">
        <template v-if="options.length > 0">
            <ul class="dialogue-tree__list">
                <li v-for="(option, index) in options" :key="option.label" class="dialogue-tree__list-item">
                    <button :ref="`dialogueButton-${index}`" type="button" @click="onClickedOption(option, index)">
                        <span>{{ option.label }}</span>
                        <f-icon name="arrow-right"></f-icon>
                    </button>
                </li>
            </ul>
        </template>
        <template v-else>
            <!--
                @slot Slot for last dialogue step.
                @binding {userData} userData Step information
            -->
            <slot v-bind="{ userData: userData }"></slot>
        </template>
    </div>
</template>
