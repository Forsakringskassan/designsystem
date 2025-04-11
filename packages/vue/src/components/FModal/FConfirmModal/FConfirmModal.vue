<script lang="ts">
import { defineComponent, type PropType } from "vue";
import FModal from "../FModal.vue";
import { sizes } from "../sizes";

import { FModalButton, FModalButtonDescriptor, prepareButtonList } from "../modal-button";
import { config, FKUIConfigButtonOrder } from "../../../config";

const defaultButtons: FModalButtonDescriptor[] = [
    { label: "Primärknapp", event: "confirm", type: "primary" },
    { label: "Sekundärknapp", event: "dismiss", type: "secondary" },
];

/**
 * Level: Ready
 */
export default defineComponent({
    name: "FConfirmModal",
    components: { FModal },
    inheritAttrs: true,
    props: {
        /**
         * Enable fullscreen mode in mobile.
         */
        fullscreen: {
            type: Boolean,
            required: false,
            default: false,
        },
        /**
         * Prop for opening modal
         */
        isOpen: {
            type: Boolean,
            required: false,
            default: false,
        },
        /**
         * Simple text content
         */
        content: {
            type: String,
            required: false,
            default: "Brödtext",
        },
        /**
         * Simple text header
         */
        heading: {
            type: String,
            required: false,
            default: "Rubrik",
        },
        /**
         * The size of modal. 'large' and 'fullscreen' is valid.
         */
        size: {
            type: String,
            default: "",
            validator(value: string): boolean {
                return sizes.includes(value);
            },
        },
        /**
         * The aria-label attribute text for the top right close button.
         */
        ariaCloseText: {
            type: String,
            required: false,
            default: undefined,
        },
        /**
         * List of buttons
         */
        buttons: {
            type: Array as PropType<FModalButtonDescriptor[]>,
            required: false,
            default: (): FModalButtonDescriptor[] => {
                return defaultButtons;
            },
        },
        /**
         * Default behavior is that the modal will restore focus to previous element once closed.
         * - "on" (default) - component will set focus both when opened and closed
         * - "off" - focus strategy disabled
         * - "open" - focus will only be applied once modal is opened
         */
        focus: {
            type: String as PropType<"on" | "off" | "open">,
            default: "on",
            validator(value: string): boolean {
                return ["on", "off", "open"].includes(value);
            },
        },
    },
    emits: ["close", ...defaultButtons.map((it) => it.event ?? "")],
    computed: {
        preparedButtons(): FModalButton[] {
            const preparedButtonList = prepareButtonList(this.buttons);
            return config.buttonOrder === FKUIConfigButtonOrder.RIGHT_TO_LEFT
                ? preparedButtonList.reverse()
                : preparedButtonList;
        },
    },
    methods: {
        onClose() {
            this.$emit("close", {
                reason: "close",
            });
        },
        onClick(button: FModalButton): void {
            /**
             * Emits specified button event when clicked
             *
             * @event button.event
             *
             */
            this.$emit(button.event);

            /**
             * Emits reason for closing modal
             */
            this.$emit("close", {
                reason: button.reason,
            });
        },
    },
});
</script>

<template>
    <f-modal
        :fullscreen="fullscreen"
        :is-open="isOpen"
        :aria-close-text="ariaCloseText"
        type="warning"
        :size="size"
        :focus="focus"
        @close="onClose"
    >
        <template #header>
            <!--@slot Slot for advanced header. -->
            <slot name="heading">{{ heading }}</slot>
        </template>
        <template #content>
            <!--@slot Slot for advanced content. -->
            <slot name="content">{{ content }}</slot>
        </template>

        <template #footer>
            <div class="button-group">
                <button
                    v-for="button in preparedButtons"
                    :key="button.label"
                    type="button"
                    :class="button.classlist"
                    class="button-group__item"
                    @click="onClick(button)"
                >
                    <span>{{ button.label }}</span>
                    <span v-if="button.screenreader" class="sr-only">&nbsp;{{ button.screenreader }}</span>
                </button>
            </div>
        </template>
    </f-modal>
</template>
