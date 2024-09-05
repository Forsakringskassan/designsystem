import {
    type Ref,
    onMounted,
    onUnmounted,
    ref,
    toValue,
    watchEffect,
} from "vue";
import { getGridClasses } from "./get-grid-classes";

/**
 * @public
 */
export interface PanelLayoutOptions {
    initialWidth?: string | Ref<string>;
    minWidth?: string | Ref<string>;
    maxWidth?: number | Ref<number>;
    grow: "left" | "right";
}

/**
 * @public
 */
export interface PanelLayoutComposable {
    readonly panelWidth: Ref<number>;
    readonly leftPrimaryClasses: Ref<Record<string, boolean>>;
    readonly rightPrimaryClasses: Ref<Record<string, boolean>>;
    onBorderMouseDown(event: MouseEvent): void;
    updatePrimaryGrid(): void;
    gridClasses(): Record<string, boolean>;
}

export function useLayoutPanel(
    options: PanelLayoutOptions,
): PanelLayoutComposable {
    const growToRight = options.grow === "right";
    let borderDrag = false;
    let dragStart = 0;
    let dragStartWidth = 0;
    let preferredWidth = -1;
    let minWidth = 150;
    let maxWidth = 0.5;

    const panelWidth = ref(0);
    const leftPrimaryClasses = ref({}) as Ref<Record<string, boolean>>;
    const rightPrimaryClasses = ref({}) as Ref<Record<string, boolean>>;

    function updateOptions(): void {
        panelWidth.value = parseInt(toValue(options.initialWidth ?? "0"), 10);
        minWidth = parseInt(toValue(options.minWidth ?? "150"), 10);
        maxWidth = toValue(options.maxWidth ?? 0.5);
    }

    function disableEvent(event: Event): void {
        event.preventDefault();
    }

    function onMouseUp(): void {
        document.body.style.cursor = "";
        borderDrag = false;
        window.removeEventListener("selectstart", disableEvent);
    }

    function onMouseMove(event: MouseEvent): void {
        if (borderDrag) {
            const growDirection = growToRight ? 1 : -1;
            preferredWidth =
                dragStartWidth + (event.screenX - dragStart) * growDirection;
            limitWidth();
        }
    }

    function onBorderMouseDown(event: MouseEvent): void {
        document.body.style.cursor = "w-resize";
        borderDrag = true;
        dragStart = event.screenX;
        dragStartWidth = panelWidth.value;
        window.addEventListener("selectstart", disableEvent);
        const selection = window.getSelection();
        if (selection) {
            selection.removeAllRanges();
        }
    }

    function limitWidth(): void {
        if (preferredWidth === -1) {
            preferredWidth = panelWidth.value;
        }
        let newWidth = preferredWidth;
        newWidth = Math.max(newWidth, minWidth);
        newWidth = Math.min(newWidth, window.innerWidth * maxWidth);
        panelWidth.value = newWidth;
        updatePrimaryGrid();
    }

    function updatePrimaryGrid(): void {
        const leftPrimaryElement = document.getElementById(
            "layout-side-navigation__primary-content",
        );
        const rightPrimaryElement = document.getElementById(
            "layout-secondary__primary",
        );
        leftPrimaryClasses.value = getGridClasses(leftPrimaryElement);
        rightPrimaryClasses.value = getGridClasses(rightPrimaryElement);
    }

    function gridClasses(): Record<string, boolean> {
        updatePrimaryGrid();
        return getGridClasses(preferredWidth);
    }

    onMounted(() => {
        window.addEventListener("mouseup", onMouseUp);
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("resize", limitWidth);
    });

    onUnmounted(() => {
        window.removeEventListener("mouseup", onMouseUp);
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("resize", limitWidth);
    });

    watchEffect(() => {
        updateOptions();
    });

    return {
        panelWidth,

        /* methods */
        onBorderMouseDown,
        updatePrimaryGrid,

        /* class getters */
        gridClasses,
        leftPrimaryClasses,
        rightPrimaryClasses,
    };
}
