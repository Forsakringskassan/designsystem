import {
    computed,
    type Ref,
    ref,
    type ShallowRef,
    toValue,
    watchEffect,
} from "vue";
import { useEventListener } from "@vueuse/core";
import { LayoutAreaAttachPanel, LayoutAreaDirection } from "./define-layout";
import {
    VAR_NAME_AREA,
    VAR_NAME_ATTACH_PANEL,
    VAR_NAME_DIRECTION,
} from "./constants";
import { type PageLayout } from "./webcomponent";

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

function findLayoutElement(
    element: Element | null | undefined,
): PageLayout | null {
    if (!element) {
        return null;
    }
    const parent = element.closest<PageLayout>("ce-page-layout");
    if (parent) {
        return parent;
    }
    const root = element.getRootNode();
    if (root instanceof ShadowRoot) {
        return findLayoutElement(root.host);
    }
    return null;
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
    const layoutElement = computed(() => findLayoutElement(toValue(element)));

    useEventListener(layoutElement, "update", () => {
        if (element.value) {
            update(element.value);
        }
    });

    watchEffect(() => {
        if (element.value) {
            update(element.value);
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
        direction.value = getProperty(style, VAR_NAME_DIRECTION);
    }
}
