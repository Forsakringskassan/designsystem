<template>
    <div class="tooltip">
        <div class="tooltip__container">
            <button
                class="tooltip__button"
                type="button"
                ref="button"
                :aria-expanded="isOpen ? 'true' : 'false'"
                @click="onClickToggle"
            >
                <span class="icon-stack icon-stack--tooltip">
                    <f-icon name="circle"></f-icon>
                    <f-icon name="i"></f-icon>
                    <span class="sr-only">{{ screenReaderText }}</span>
                </span>
            </button>
            <f-expand>
                <div v-if="isOpen">
                    <div class="tooltip__content-wrapper" ref="wrapper" tabindex="-1" :aria-hidden="isOpen ? undefined : 'true'">
                        <span v-show="isOpen" class="tooltip__arrow" ref="arrow"></span>
                        <div class="tooltip__content">
                            <component :is="headerTag" v-if="hasHeader" class="tooltip__header">
                                <!-- @slot Tooltip header content -->
                                <slot name="header"></slot>
                            </component>

                            <div class="tooltip__body">
                                <!-- @slot Tooltip body content-->
                                <slot name="body"></slot>
                            </div>
                        </div>
                        <i-flex float="right">
                            <i-flex-item shrink>
                                <button class="close-button" type="button" @click="onClickToggle">
                                    <span>{{ closeButtonText }}</span>
                                    <f-icon class="button__icon" name="close"></f-icon>
                                </button>
                            </i-flex-item>
                        </i-flex>
                    </div>
                </div>
            </f-expand>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineComponent, useSlots, ref, computed, watch, onMounted, nextTick } from "vue";
import { focus, TranslationService } from "@fkui/logic";
import { FExpand } from "../FExpand";
import { IFlex, IFlexItem } from "../../internal-components";
import { FIcon } from "../FIcon";
import { hasSlot } from "../../utils";

const isOpen = ref(false);
const hasHeader = ref(false);
const screenReaderText = ref("asdf");
const closeButtonText = ref("asdf");
const headerTag = ref("div");

const props = defineProps<{}>();
    /**
     * State (expanded or collapsed) of the tooltip. The value is `true` if the tooltip is expanded.
     *
     * @model
     */
    // modelValue: {
    //     type: Boolean,
    //     required: false,
    // },

    /**
     * Screen reader text for toggle button
     */
    // screenReaderText: {
    //     type: String,
    //     required: true,
    // },
    //
    //     /**
    //      * Close button text
    //      */
    //     closeButtonText: {
    //         type: String,
    //         required: false,
    //         default: TranslationService.provider.translate("fkui.tooltip.close", "Stäng"),
    //     },
    //
    /**
     * Element to render for the header element inside the tooltip.
     *
     * Must be set to one of:
     *
     * - `div` (default)
     * - `span`
     * - `h1`
     * - `h2`
     * - `h3`
     * - `h4`
     * - `h5`
     * - `h6`
     */
    // headerTag: {
    //     type: String,
    //     default: "div",
    //     required: false,
    //     validator(value: string): boolean {
    //         return ["div", "span", "h1", "h2", "h3", "h4", "h5", "h6"].includes(value);
    //     },
    // },
//});

const emit = defineEmits<{
    /**
     * v-model event.
     *
     * @param {boolean} value - Model value
     */
    "update:modelValue": [isOpen: boolean];

    /**
     * Emitted when the state of the tooltip (collapsed/expanded) changes.
     *
     * @param {{ isOpen: boolean }} event - New state of tooltip.
     */
    toggle: [event: { isOpen: boolean }];
}>();

const $slots = useSlots();

//const isOpen = ref(false);
const button = ref<HTMLElement | null>(null);
const arrow = ref<HTMLElement | null>(null);
const wrapper = ref<HTMLElement | null>(null);
//
// const hasHeader = computed(() => {
//     /* technical debt: use `useSlotsUtils().hasSlot(..)` when available */
//     return hasSlot({ $slots }, "header");
// });
//
// watch(
//     () => props.modelValue,
//     (value) => {
//         isOpen.value = value;
//     },
//     { immediate: true },
// );
//
// onMounted(() => {
//     window.addEventListener("resize", () => {
//         if (isOpen.value) {
//             positionArrow();
//         }
//     });
//
//     if (isOpen.value) {
//         positionArrow();
//     }
// });

/**
 * Gets called when the user interacts with the toggle button
 *
 * @internal
 */
function onClickToggle(): void {
    isOpen.value = !isOpen.value;

    const value = isOpen.value;
    const event = { isOpen: value };

    emit("update:modelValue", value);
    emit("toggle", event);

    if (!value) {
        focus(button.value);
    }
    nextTick(() => {
        positionArrow();
    });
}

function positionArrow(): void {
    const borderSize = 2;
    const buttonElement = button.value;
    const arrowElement = arrow.value;
    const wrapperElement = wrapper.value;

    if (buttonElement && arrowElement && wrapperElement) {
        const buttonOffsetLeft: number = buttonElement.offsetLeft - wrapperElement.offsetLeft;
        const relativeOffset = buttonOffsetLeft - borderSize + buttonElement.getBoundingClientRect().width / 2;
        arrowElement.style.left = `${relativeOffset}px`;
    }
}
</script>
