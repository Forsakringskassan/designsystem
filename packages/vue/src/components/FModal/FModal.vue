<template>
    <div v-if="isOpen" :id="id" class="modal" :class="modalClass">
        <div class="modal__backdrop">
            <div
                class="modal__outer-container scroll-target"
                tabindex="-1"
                role="dialog"
                aria-modal="true"
                @keyup.esc="onClose"
            >
                <div class="modal__inner-container">
                    <div ref="modalDialogContainer" class="modal__dialog-container" :class="containerClasses">
                        <div class="modal__dialog">
                            <div class="modal__dialog-inner">
                                <div class="modal__header">
                                    <div tabindex="0" @focus="onFocusFirst"></div>
                                    <h1 v-if="hasHeaderSlot" ref="modalTitle" class="modal__title" tabindex="-1">
                                        <!--@slot Slot for the header. -->
                                        <slot name="header"></slot>
                                    </h1>
                                </div>

                                <div ref="modalContent" class="modal__content" tabindex="-1">
                                    <!--@slot Slot for the main content, e.g. paragraphs, input fields, etc. -->
                                    <slot name="content"></slot>
                                </div>

                                <div class="modal__footer">
                                    <!--@slot Slot the footer content, i.e. buttons. -->
                                    <slot name="footer"></slot>
                                </div>
                            </div>

                            <div class="modal__shelf">
                                <button type="button" class="close-button" :aria-label="ariaCloseText" @click="onClose">
                                    <span>{{ $t("fkui.modal.close", "Stäng") }}</span>
                                    <f-icon name="close"></f-icon>
                                </button>
                                <div tabindex="0" @focus="onFocusLast"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { type PropType, defineComponent } from "vue";
import { ElementIdService, pushFocus, popFocus, type StackHandle, findTabbableElements } from "@fkui/logic";
import { FIcon } from "../FIcon";
import { TranslationMixin } from "../../plugins";
import { findElementFromVueRef, getHTMLElementFromVueRef, hasSlot } from "../../utils";
import { sizes, sizeClass } from "./sizes";
import { focusElement } from "./focus-element";

interface FModalData {
    nonModalFocusableElements: HTMLElement[];
    savedFocus: StackHandle | null;
    savedScroll: number | null;
}

/**
 * Level: Ready
 */
export default defineComponent({
    name: "FModal",
    components: { FIcon },
    mixins: [TranslationMixin],
    inheritAttrs: true,
    props: {
        /**
         * The id for the root element id attribute.
         * If the prop is not set a random value will be generated.
         */
        id: {
            type: String,
            required: false,
            default: () => ElementIdService.generateElementId(),
        },
        /**
         * If the modal is open.
         * Use this to toggle if the modal should be visible or not.
         */
        isOpen: {
            type: Boolean,
            required: false,
            default: false,
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
         * Enable fullscreen mode in mobile.
         */
        fullscreen: {
            type: Boolean,
            required: false,
            default: false,
        },
        /**
         * The type of modal. 'information', 'warning' and 'error' is valid.
         */
        type: {
            type: String as PropType<"" | "information" | "warning" | "error">,
            default: "",
            validator(value: string): boolean {
                return ["", "information", "warning", "error"].includes(value);
            },
        },
        /**
         * The size of modal in desktop mode.
         */
        size: {
            type: String,
            default: "",
            validator(value: string): boolean {
                return sizes.includes(value);
            },
        },
    },
    emits: ["close"],
    data(): FModalData {
        return {
            nonModalFocusableElements: [],
            savedFocus: null,
            savedScroll: null,
        };
    },
    computed: {
        modalClass(): string[] {
            return this.type ? [`modal--${this.type}`] : [];
        },
        containerClasses(): string[] {
            const size = sizeClass(this.size);
            if (this.fullscreen) {
                return [...size, "modal__dialog-container--fullscreen"];
            } else {
                return size;
            }
        },
        hasHeaderSlot(): boolean {
            return hasSlot(this, "header");
        },
    },
    watch: {
        isOpen: {
            immediate: true,
            async handler(value: boolean): Promise<void> {
                if (value) {
                    await this.$nextTick();
                    this.openModal();
                } else {
                    this.restoreState();
                }
            },
        },
    },
    beforeUnmount(): void {
        this.restoreState();
    },
    methods: {
        onClose(): void {
            /**
             * Event that is dispatched when the escape button is pressed.
             * In most use cases the `isOpen` prop should be set to false when this event is triggered.
             */
            this.$emit("close");
        },
        openModal(): void {
            const root = document.documentElement;
            const scroll = root.scrollTop;
            root.style.top = `-${scroll}px`;
            root.classList.add("modal__open");
            const focusElement = this.resolveFocusElement();
            this.savedFocus = pushFocus(focusElement);
            this.savedScroll = scroll;
        },
        /**
         * Prioritises what element to initially focus on in the following order:
         *
         * 1. Header
         * 2. First interactive element within content
         * 3. Content
         */
        resolveFocusElement(): Element {
            const titleElement = findElementFromVueRef(this.$refs.modalTitle);
            if (titleElement) {
                return titleElement;
            }

            const contentElement = getHTMLElementFromVueRef(this.$refs.modalContent);
            const tabbableChildren = findTabbableElements(contentElement);
            const firstTabbableChildElement = tabbableChildren.length ? tabbableChildren[0] : undefined;

            return firstTabbableChildElement ?? contentElement;
        },
        restoreState(): void {
            if (this.savedFocus) {
                const root = document.documentElement;
                root.classList.remove("modal__open");
                root.style.removeProperty("top");
                root.scrollTop = this.savedScroll ?? 0;
                popFocus(this.savedFocus);
                this.savedFocus = null;
                this.savedScroll = null;
            }
        },
        onFocusFirst() {
            const tabbableElements = findTabbableElements(this.$refs.modalDialogContainer as HTMLElement);
            const lastTabbableElement = tabbableElements[tabbableElements.length - 2];
            focusElement(lastTabbableElement, this.$el);
        },
        onFocusLast() {
            const tabbableElements = findTabbableElements(this.$refs.modalDialogContainer as HTMLElement);
            const firstTabbableElement = tabbableElements[1];
            focusElement(firstTabbableElement, this.$el);
        },
    },
});
</script>
