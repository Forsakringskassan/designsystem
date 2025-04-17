<script lang="ts">
import { type PropType, defineComponent } from "vue";
import { FIcon } from "../../components/FIcon";
import { CandidateOrder, Placement, fitInsideArea } from "../IPopup/IPopupUtils";
import { config } from "../../config";
import { computeArrowOffset } from "./compute-arrow-offset";
import { type IPopupErrorData } from "./ipopuperror-data";

const POPUP_SPACING = 10;

export default defineComponent({
    name: "IPopupError",
    components: { FIcon },
    inheritAttrs: false,
    props: {
        /**
         * Toggle open/closed error popup.
         */
        isOpen: {
            type: Boolean,
            required: true,
        },
        /**
         * Message to display
         */
        errorMessage: {
            type: String,
            required: false,
            default: "Error",
        },
        /**
         * DOM element to position error popup at.
         */
        anchor: {
            type: HTMLElement as PropType<HTMLElement | null | undefined>,
            required: false,
            default: undefined,
        },
    },
    emits: ["close"],
    data(): IPopupErrorData {
        return {
            teleportDisabled: false,
            placement: Placement.NotCalculated,
            arrowPosition: "top",
            arrowOffset: 24,
        };
    },
    computed: {
        popupClasses(): string[] {
            const forceInline = this.teleportDisabled || this.placement === Placement.Fallback;
            const popupState = forceInline ? ["popup-error--inline"] : ["popup-error--overlay"];
            return ["popup-error", ...popupState];
        },
        arrowClass(): string {
            return `popup-error popup-error--arrow popup-error--${this.arrowPosition}`;
        },
        errorStyle(): string {
            return `--i-popup-error-offset: ${this.arrowOffset}px`;
        },
        teleportTarget() {
            return config.teleportTarget;
        },
    },
    watch: {
        anchor: {
            immediate: true,
            handler(anchor: HTMLElement | null | undefined): void {
                if (anchor) {
                    anchor.addEventListener("keyup", this.onKeyEsc);
                    window.addEventListener("resize", this.onResize);
                }
            },
        },
        isOpen: {
            immediate: true,
            async handler(value: boolean): Promise<void> {
                await this.toggleIsOpen(value);
            },
        },
    },
    unmounted() {
        this.anchor?.removeEventListener("keyup", this.onKeyEsc);
        window.removeEventListener("resize", this.onResize);
    },
    methods: {
        onResize() {
            this.toggleIsOpen(this.isOpen);
        },
        onKeyEsc(event: KeyboardEvent): void {
            if (event.key === "Escape") {
                this.$emit("close");
            }
        },
        onClose() {
            this.$emit("close");
        },
        setArrowOffset() {
            const wrapper = this.$refs["wrapper"] as HTMLElement;
            const inputIcon = this.anchor?.nextElementSibling;
            if (!inputIcon || !wrapper) {
                return;
            }
            const inputIconRect = inputIcon.getBoundingClientRect();
            const wrapperRect = wrapper.getBoundingClientRect();
            const arrow = computeArrowOffset(this.placement, inputIconRect, wrapperRect);
            this.arrowOffset = arrow.offset;
            this.arrowPosition = arrow.position;
        },
        async toggleIsOpen(isOpen: boolean): Promise<void> {
            /* popup is closing */
            if (!isOpen) {
                this.placement = Placement.NotCalculated;
                return;
            }

            /* popup is opening */
            // Wait for popup to show up
            await this.$nextTick();
            const wrapper = this.$refs["wrapper"] as HTMLElement;

            if (!this.anchor) {
                throw new Error("No anchor element found");
            }

            // Check candidates for overlay position.
            const area = document.body;
            const viewport = document.documentElement;
            const result = fitInsideArea({
                area,
                anchor: this.anchor,
                target: wrapper,
                viewport,
                spacing: POPUP_SPACING,
                candidateOrder: CandidateOrder.IPopupError,
            });

            this.placement = result.placement;
            if (result.placement !== Placement.Fallback) {
                this.teleportDisabled = false;
                wrapper.style.left = `${result.x}px`;
                wrapper.style.top = `${result.y}px`;
                await this.setArrowOffset();
                return;
            }
            await this.setArrowOffset();
            this.teleportDisabled = true;
            wrapper.style.removeProperty("left");
            wrapper.style.removeProperty("top");
        },
    },
});
</script>

<template>
    <teleport v-if="isOpen" :to="teleportTarget" :disabled="teleportDisabled">
        <div ref="popup" :class="popupClasses" aria-hidden="true">
            <div ref="wrapper" class="popup-error__wrapper">
                <!-- [html-validate-disable-next no-inline-style] -->
                <div :class="arrowClass" :style="errorStyle">
                    <span>{{ errorMessage }}</span>

                    <!-- `tabindex="-1" is set since `IPopupError` has `aria-hidden`, wich cannot be used on focusable elements.
                        `IPopupError` will be closed on input-field `blur`, so the button is never focusable anyway .
                    -->
                    <button
                        tabindex="-1"
                        type="button"
                        class="button button--discrete button--discrete--black modal__close-button popup-error__button"
                        aria-label="Stäng"
                        @click="onClose"
                    >
                        <f-icon name="close" class="button__icon"></f-icon>
                    </button>
                </div>
            </div>
        </div>
    </teleport>
</template>
