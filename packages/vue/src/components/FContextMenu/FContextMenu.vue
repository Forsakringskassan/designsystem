<script lang="ts" setup>
import { computed, nextTick, ref, useTemplateRef, watch } from "vue";
import { type StackHandle, focus, popFocus, pushFocus } from "@fkui/logic";
import { IPopup } from "../../internal-components/IPopup";
import { useTranslate } from "../../plugins/translation";
import { actionFromKeyboardEvent } from "../../utils";
import { FIcon } from "../FIcon";
import { useMenuAction } from "./contextmenu-logic";
import { type ContextMenuItem, isContextMenuSeparatorItem, isContextMenuTextItem } from "./contextmenuitem";

const {
    isOpen,
    anchor = undefined,
    items,
    ariaLabel: ariaLabelProp = undefined,
} = defineProps<{
    /**
     * Toggle open/closed popup.
     */
    isOpen: boolean;
    /**
     * DOM element to position popup at.
     */
    anchor?: HTMLElement;
    /**
     * The items to be displayed in the menu.
     */
    items: ContextMenuItem[];
    /**
     * Unique accessible name for navigation landmark.
     */
    ariaLabel?: string;
}>();

const emit = defineEmits<{
    /**
     * Event that is dispatched after an item is selected or
     * after pressing for example esc in the menu
     */
    close: [];
    /**
     * Event that is dispatched when an item is selected.
     * @type {string} item key
     */
    select: [key: string];
}>();

const $t = useTranslate();

const preventKeys = ["Tab", "Up", "Down", "ArrowUp", "ArrowDown", "Home", "End", " ", "Spacebar", "Enter", "Escape"];
const keyUp = ["ArrowUp", "Up"];

const contextmenuRef = useTemplateRef("contextmenu");
const itemElementsRef = useTemplateRef("items");

const selectedItem = ref("");
const currentFocusedItemIndex = ref(-1);

const popupItems = computed(() => items.filter(isContextMenuTextItem));
const hasIcons = computed(() => items.some((it) => isContextMenuTextItem(it) && it.icon));

let focusHandle: StackHandle | null = null;

const ariaLabel = computed(() => {
    if (ariaLabelProp) {
        return ariaLabelProp;
    }
    /** Skärmläsartext för `<nav>` elementet. Används bara när `ariaLabel`-propen inte är satt. */
    return $t("fkui.contextmenu.aria-label", "Kontextmeny");
});

const separatorPositions = computed((): number[] => {
    const res: number[] = [];
    if (items.length > 1) {
        items.forEach((it, i) => {
            if (isContextMenuSeparatorItem(it)) {
                const pos = i - 1 - res.length;
                if (pos >= 0 && pos < items.length - 1) {
                    res.push(pos);
                }
            }
        });
    }
    return res;
});

const { doMenuAction } = useMenuAction({
    currentFocusedItemIndex,
    popupItems,
    setFocusOnItem,
    activateItem,
});

watch(
    () => isOpen,
    (isOpen) => {
        if (isOpen) {
            currentFocusedItemIndex.value = -1;
            selectedItem.value = "";

            /* wait for popup to be rendered */
            /* eslint-disable-next-line @typescript-eslint/no-floating-promises -- technical debt */
            nextTick(() => {
                if (contextmenuRef.value) {
                    focusHandle = pushFocus(contextmenuRef.value);
                }
            });
        } else {
            /* this only runs when isOpen is changed programmatically from the
             * outside, if the context menu is closed by selecting, keyboard etc
             * the focus is handled from `closePopup()` */
            if (focusHandle) {
                popFocus(focusHandle, { restoreFocus: true });
                focusHandle = null;
            }
        }
    },
    { immediate: true },
);

function hasSeparatorAfterItemAt(index: number): boolean {
    return separatorPositions.value.includes(index);
}

function closePopup(reason: string): void {
    if (focusHandle) {
        switch (reason) {
            case "click-outside":
                popFocus(focusHandle, { restoreFocus: false });
                break;
            case "tab":
            case "escape":
            case "select":
            default:
                popFocus(focusHandle, { restoreFocus: true });
                break;
        }
        focusHandle = null;
    }

    emit("close");
}

function onClickItem(item: ContextMenuItem): void {
    if (isContextMenuTextItem(item) && item.key) {
        selectedItem.value = item.key;
        emit("select", selectedItem.value);
        closePopup("select");
    }
}

function tabIndex(index: number): number {
    return index === currentFocusedItemIndex.value ? 0 : -1;
}

function onKeyUp(event: KeyboardEvent): void {
    if (preventKeys.includes(event.key)) {
        event.preventDefault();
    }
}

async function onKeyDown(event: KeyboardEvent): Promise<void> {
    if (!preventKeys.includes(event.key)) {
        return;
    }

    /* escape should close the popup, focus is restored from IPopupMenu */
    if (event.key === "Escape") {
        closePopup("escape");
        return;
    }

    /* tab (forward or reverse) also closes the popup but we need to
     * stop the tabbing from also moving the focus */
    if (event.key === "Tab") {
        event.preventDefault();
        closePopup("tab");
        return;
    }

    const action = actionFromKeyboardEvent(event);
    if (action === null) {
        return;
    }

    if (keyUp.includes(event.key) && currentFocusedItemIndex.value === -1) {
        // If the user presses arrow up key (action MOVE_PREV) but there are no items in focus
        // adjust currentFocusedItemIndex so that MOVE_PREV will put focus on last item
        currentFocusedItemIndex.value = popupItems.value.length > 0 ? popupItems.value.length : 1;
    }
    event.preventDefault();

    await doMenuAction(action);
}

async function setFocusOnItem(index: number): Promise<void> {
    if (index < 0 || index >= popupItems.value.length) {
        return;
    }
    currentFocusedItemIndex.value = index;
    await nextTick();
    if (!isOpen) {
        return;
    }
    const items = itemElementsRef.value ?? [];
    if (items.length > 0) {
        const popupMenuItem = items[index];
        focus(popupMenuItem, { preventScroll: true });
    }
}

async function activateItem(index: number): Promise<void> {
    if (index < 0 || index >= popupItems.value.length) {
        return;
    }
    if (index !== currentFocusedItemIndex.value) {
        await setFocusOnItem(index);
    }
    onClickItem(popupItems.value[currentFocusedItemIndex.value]);
}
</script>

<template>
    <i-popup :is-open :keyboard-trap="false" :anchor :set-focus="false" inline="never" @close="closePopup($event)">
        <nav class="contextmenu" :aria-label @keyup="onKeyUp" @keydown="onKeyDown">
            <ul ref="contextmenu" role="menu" tabindex="-1" class="contextmenu__list">
                <li v-for="(item, index) in popupItems" :key="item.key" role="menuitem" @click="onClickItem(item)">
                    <div ref="items" :tabindex="tabIndex(index)" class="contextmenu__list__item">
                        <f-icon
                            v-if="hasIcons"
                            class="contextmenu__lefticon"
                            :name="item.icon ? item.icon : ''"
                            :library="item.iconLibrary ? item.iconLibrary : 'f'"
                        />
                        <a ref="anchors">{{ item.label }}</a>
                    </div>
                    <hr v-if="hasSeparatorAfterItemAt(index)" class="contextmenu__separator" />
                </li>
            </ul>
        </nav>
    </i-popup>
</template>
