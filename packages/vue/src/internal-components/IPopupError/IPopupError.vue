<script setup lang="ts">
import { computed, nextTick, ref, useTemplateRef, watch } from "vue";
import { FIcon } from "../../components/FIcon";
import { config } from "../../config";
import { CandidateOrder, Placement, fitInsideArea } from "../IPopup/i-popup-utils";
import { computeArrowOffset } from "./compute-arrow-offset";

const {
    isOpen,
    errorMessage = "Error",
    anchor = undefined,
    arrowAnchor = undefined,
    layout,
} = defineProps<{
    /**
     * Toggle open/closed error popup.
     */
    isOpen: boolean;
    /**
     * Message to display.
     */
    errorMessage?: string;
    /**
     * DOM element to position error popup at.
     */
    anchor?: HTMLElement | null;
    /**
     * DOM element to align arrow with.
     */
    arrowAnchor?: HTMLElement | null;
    /**
     * - `f-table`: error icon left of text without close button.
     * - `f-interactive-table`: close button right of text without error icon.
     */
    layout: "f-interactive-table" | "f-table";
}>();

const emit = defineEmits<(event: "close") => void>();

const POPUP_SPACING = 10;
const wrapperRef = useTemplateRef("wrapper");
const teleportDisabled = ref(false);
const placement = ref(Placement.NotCalculated);
const arrowPosition = ref("top");
const arrowOffset = ref(24);

const popupClasses = computed(() => {
    const forceInline = teleportDisabled.value || placement.value === Placement.Fallback;
    const popupState = forceInline ? ["popup-error--inline"] : ["popup-error--overlay"];
    return ["popup-error", ...popupState];
});

const arrowClass = computed(() => {
    return `popup-error popup-error--arrow popup-error--${arrowPosition.value}`;
});

const errorStyle = computed(() => {
    return `--i-popup-error-offset: ${String(arrowOffset.value)}px`;
});

const teleportTarget = computed(() => config.teleportTarget);

function onKeyEsc(event: KeyboardEvent): void {
    if (event.key === "Escape") {
        emit("close");
    }
}

function onClose(): void {
    emit("close");
}

function setArrowOffset(): void {
    const targetArrowAnchor = arrowAnchor ?? anchor?.nextElementSibling;

    if (!targetArrowAnchor || !wrapperRef.value) {
        return;
    }

    const arrowAnchorRect = targetArrowAnchor.getBoundingClientRect();
    const wrapperRect = wrapperRef.value.getBoundingClientRect();
    const arrow = computeArrowOffset(placement.value, arrowAnchorRect, wrapperRect);
    arrowOffset.value = arrow.offset;
    arrowPosition.value = arrow.position;
}

async function toggleIsOpen(isOpen: boolean): Promise<void> {
    /* popup is closing */
    if (!isOpen) {
        placement.value = Placement.NotCalculated;
        return;
    }

    /* popup is opening */
    // Wait for popup to show up
    await nextTick();

    if (!wrapperRef.value) {
        return;
    }

    if (!anchor) {
        throw new Error("No anchor element found");
    }

    // Check candidates for overlay position.
    const area = document.body;
    const viewport = document.documentElement;
    const result = fitInsideArea({
        area,
        anchor,
        target: wrapperRef.value,
        viewport,
        spacing: POPUP_SPACING,
        candidateOrder: CandidateOrder.IPopupError,
    });

    placement.value = result.placement;
    if (result.placement !== Placement.Fallback) {
        teleportDisabled.value = false;
        wrapperRef.value.style.left = `${String(result.x)}px`;
        wrapperRef.value.style.top = `${String(result.y)}px`;
        setArrowOffset();
        return;
    }

    setArrowOffset();
    teleportDisabled.value = true;
    wrapperRef.value.style.removeProperty("left");
    wrapperRef.value.style.removeProperty("top");
}

function onResize(): void {
    void toggleIsOpen(isOpen);
}

watch(
    () => anchor,
    (anchorElement, _, onCleanup) => {
        if (!anchorElement) {
            return;
        }

        anchorElement.addEventListener("keyup", onKeyEsc);
        window.addEventListener("resize", onResize);
        onCleanup(() => {
            anchorElement.removeEventListener("keyup", onKeyEsc);
            window.removeEventListener("resize", onResize);
        });
    },
    { immediate: true },
);

watch(
    () => isOpen,
    (value) => {
        void toggleIsOpen(value);
    },
    { immediate: true },
);
</script>

<template>
    <teleport v-if="isOpen" :to="teleportTarget" :disabled="teleportDisabled">
        <div :class="popupClasses" aria-hidden="true">
            <div ref="wrapper" class="popup-error__wrapper">
                <!-- [html-validate-disable-next no-inline-style] -->
                <div :class="arrowClass" :style="errorStyle">
                    <f-icon v-if="layout === 'f-table'" class="popup-error__icon" name="error"></f-icon>
                    <span>{{ errorMessage }}</span>

                    <!-- `tabindex="-1" is set since `IPopupError` has `aria-hidden`, wich cannot be used on focusable elements.
                        `IPopupError` will be closed on input-field `blur`, so the button is never focusable anyway .
                    -->
                    <button
                        v-if="layout === 'f-interactive-table'"
                        tabindex="-1"
                        type="button"
                        class="popup-error__button"
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
