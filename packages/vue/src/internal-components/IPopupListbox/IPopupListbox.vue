<script setup lang="ts">
import { watchEffect, useTemplateRef, nextTick, computed, onUnmounted } from "vue";
import { debounce } from "@fkui/logic";
import { useEventListener } from "../../composables";
import { config } from "../../config";
import { computeListboxRect } from "./compute-listbox-rect";

export interface IPopupListboxProps {
    isOpen: boolean;
    anchor: HTMLElement | null;
    numOfItems: number;
    itemHeight?: number;
}

const { isOpen, anchor, numOfItems, itemHeight } = defineProps<IPopupListboxProps>();
const emit = defineEmits<{ close: [] }>();
const wrapper = useTemplateRef("wrapper");
const content = useTemplateRef("content");

const teleportDisabled = false;
const popupClasses = ["popup", "popup--overlay"];
const teleportTarget = computed(() => config.popupTarget ?? config.teleportTarget);

useEventListener(anchor, "keyup", onKeyEsc);

function addListeners(): void {
    document.addEventListener("click", onDocumentClickHandler);
    window.addEventListener("resize", debounce(onResize, 100));
}

function removeListeners(): void {
    document.removeEventListener("click", onDocumentClickHandler);
    window.removeEventListener("resize", debounce(onResize, 100));
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

    const wrapperElement = wrapper.value;
    const contentWrapper = content.value;

    if (!anchor || !wrapperElement || !contentWrapper) {
        return;
    }

    let contentItemHeigth = itemHeight;
    if (!contentItemHeigth) {
        contentItemHeigth = guessItemHeight(numOfItems, contentWrapper);
    }

    wrapperElement.style.overflowY = "auto";
    wrapperElement.style.left = `0px`;
    const rect = computeListboxRect(anchor, { itemHeight: contentItemHeigth, numOfItems });
    if (rect) {
        const { top, left, width, height } = rect;
        const offsetRect = wrapperElement?.offsetParent?.getBoundingClientRect();
        const offsetLeft = offsetRect?.x ?? 0;
        wrapperElement.style.top = `${top}px`;
        wrapperElement.style.left = `${left - offsetLeft}px`;
        wrapperElement.style.minWidth = `${width}px`;
        wrapperElement.style.maxHeight = `${height}px`;
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
