import { type Ref, ref, type ShallowRef, watchEffect } from "vue";
import { useEventListener } from "@vueuse/core";
import { LayoutAreaAttachPanel, LayoutAreaDirection } from "./define-layout";
import {
    VAR_NAME_AREA,
    VAR_NAME_ATTACH_PANEL,
    VAR_NAME_DIRECTION,
} from "./constants";

/**
 * @public
 */
export interface UseAreaData {
    /** Name of layout area */
    readonly area: Readonly<Ref<string | null>>;
    /** Panel attachment */
    readonly attachPanel: Readonly<Ref<LayoutAreaAttachPanel | null>>;
    /** Direction area content flows */
    readonly direction: Readonly<Ref<LayoutAreaDirection | null>>;
}

function getProperty<T>(style: CSSStyleDeclaration, key: string): T | null {
    const value = style.getPropertyValue(key);
    if (value === "") {
        return null;
    } else {
        return JSON.parse(value);
    }
}

/**
 * Fetch information about the layout area given element belongs to.
 *
 * @public
 */
export function useAreaData(
    element: Readonly<ShallowRef<HTMLElement | null | undefined>>,
): UseAreaData {
    const area = ref<string | null>(null);
    const attachPanel = ref<LayoutAreaAttachPanel | null>(null);
    const direction = ref<LayoutAreaDirection | null>(null);

    watchEffect(() => {
        const value = element.value;
        if (value) {
            const root = value.getRootNode() as Element;
            const host = root instanceof ShadowRoot ? root.host : root;
            const slot = host.closest("[slot]");
            const ancestor = host.closest("ce-page-layout");
            if (ancestor) {
                useEventListener(ancestor, "update:areaData", () => {
                    ancestor.addEventListener("update:areaData", () => {
                        console.log("areadata updated by ancestor");
                        update(value);
                    });
                });
            }
            if (slot) {
                console.log("slot", slot);
                useEventListener(slot, "slotchange", () => {
                    console.log("slotchange");
                });
            }
            update(value);
        }
    });

    return {
        area,
        attachPanel,
        direction,
    };

    function update(element: HTMLElement): void {
        const style = getComputedStyle(element);
        area.value = getProperty(style, VAR_NAME_AREA);
        attachPanel.value = getProperty(style, VAR_NAME_ATTACH_PANEL);
        console.log("area", area.value);
        direction.value = getProperty(style, VAR_NAME_DIRECTION);
    }
}
