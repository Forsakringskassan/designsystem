<script setup lang="ts">
import { watchEffect, useTemplateRef, nextTick, computed, onUnmounted, watch } from "vue";
import { debounce } from "@fkui/logic";
import { useEventListener } from "../../composables";
import { config } from "../../config";
import { getAbsolutePosition } from "../../utils";
import { computeListboxRect } from "./compute-listbox-rect";

export interface IPopupListboxProps {
    isOpen: boolean;
    anchor: HTMLElement | null;
    numOfItems: number;
    itemHeight?: number;
    activeElement?: HTMLElement | undefined;
}

const { isOpen, anchor, numOfItems, itemHeight, activeElement } = defineProps<IPopupListboxProps>();
const emit = defineEmits<{ close: [] }>();
const wrapperRef = useTemplateRef("wrapper");
const contentRef = useTemplateRef("content");

const teleportDisabled = false;
const popupClasses = ["popup", "popup--overlay"];
const teleportTarget = computed(() => config.teleportTarget);
let guessedItemHeight: number | undefined = undefined;
let verticalSpacing: number | undefined = undefined;

useEventListener(anchor, "keyup", onKeyEsc);

watchEffect(() => {
    if (wrapperRef.value && activeElement !== undefined) {
        const centerPosition =
            activeElement.offsetTop -
            (wrapperRef.value.getBoundingClientRect().height - activeElement.getBoundingClientRect().height) / 2;

        if (!isElementInsideViewport(wrapperRef.value)) {
            // Scroll wrapper into viewport
            wrapperRef.value.scrollIntoView({ behavior: "instant", block: "nearest" });
        }
        // Scroll activeElement to center of wrapper.
        wrapperRef.value.scrollTo({ top: centerPosition, behavior: "instant" });
    }
});

function addListeners(): void {
    document.addEventListener("click", onDocumentClickHandler);
    window.addEventListener("resize", debounce(onResize, 100));
}

function removeListeners(): void {
    document.removeEventListener("click", onDocumentClickHandler);
    window.removeEventListener("resize", debounce(onResize, 100));
}

function isElementInsideViewport(element: Element): boolean {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;

    const insideX = rect.left >= 0 && rect.left + rect.width <= windowWidth;
    const insideY = rect.top >= 0 && rect.top + rect.height <= windowHeight;

    return insideX && insideY;
}

watchEffect(() => {
    if (isOpen) {
        calculatePosition();
        // wait one tick so we dont get the click
        // that launches the popup (await nextTick doesnt work here)
        setTimeout(() => {
            // verify that it's still open
            if (isOpen) {
                addListeners();
            }
        }, 0);
    } else {
        removeListeners();
    }
});

watch(
    () => numOfItems,
    (oldValue, newValue) => {
        if (oldValue !== newValue && isOpen) {
            calculatePosition();
        }
    },
);

onUnmounted(removeListeners);

function onDocumentClickHandler(): void {
    emit("close");
}

function onResize(): void {
    if (isOpen) {
        calculatePosition();
    }
}

function onKeyEsc(event: KeyboardEvent): void {
    if (event.key === "Escape") {
        emit("close");
    }
}

function guessItemHeight(numOfItems: number, contentWrapper: HTMLElement): number {
    return Math.ceil(contentWrapper.clientHeight / numOfItems);
}

async function calculatePosition(): Promise<void> {
    await nextTick();

    const wrapperElement = wrapperRef.value;
    const contentWrapper = contentRef.value;

    if (!anchor || !wrapperElement || !contentWrapper) {
        return;
    }

    let contentItemHeigth = itemHeight;
    if (!contentItemHeigth) {
        if (!guessedItemHeight) {
            guessedItemHeight = guessItemHeight(numOfItems, contentWrapper);
        }
        contentItemHeigth = guessedItemHeight;
    }
    if (verticalSpacing === undefined) {
        const absWrapper = getAbsolutePosition(wrapperElement);
        const { marginTop, marginBottom } = getComputedStyle(wrapperElement);
        const marginTotal = parseInt(marginTop, 10) + parseInt(marginBottom, 10); // margin-top + margin-bottom
        verticalSpacing = Math.ceil(absWrapper.height - contentItemHeigth * numOfItems) + marginTotal;
    }

    wrapperElement.style.overflowY = "auto";
    wrapperElement.style.overflowX = "hidden";
    wrapperElement.style.left = "0px";

    const rect = computeListboxRect(anchor, { itemHeight: contentItemHeigth, numOfItems, verticalSpacing });
    if (rect) {
        const { top, left, width, height } = rect;
        const offsetRect = wrapperElement?.offsetParent?.getBoundingClientRect();
        const offsetLeft = offsetRect?.x ?? 0;
        const offSetTop = Math.floor((offsetRect?.top ?? 0) + window.scrollY);
        wrapperElement.style.top = `${top - offSetTop}px`;
        wrapperElement.style.left = `${left - offsetLeft}px`;
        wrapperElement.style.width = `${width}px`;
        contentWrapper.style.maxHeight = `${height}px`;
        contentWrapper.style.width = `${width}px`;
    }
}
</script>

<template>
    <teleport v-if="isOpen" :to="teleportTarget" :disabled="teleportDisabled">
        <div ref="popup" :class="popupClasses">
            <div
                ref="wrapper"
                v-bind="$attrs"
                class="popup__wrapper"
                tabindex="0"
                @keyup.esc.stop="onKeyEsc"
                @click.stop
            >
                <div ref="content">
                    <slot></slot>
                </div>
            </div>
        </div>
    </teleport>
</template>
