import { type Ref, type ShallowRef, computed } from "vue";
import { useEventListener } from "@vueuse/core";
import { type LayoutAreaAttachPanel } from "../FPageLayout";
import { Orientation } from "./orientation";
import { SizeState } from "./size-state";
import { clamp } from "./clamp";

/**
 * @internal
 */
export interface UsePointerHandlerActions {
    movement(value: number): void;
}

/**
 * @internal
 */
export interface UsePointerHandlerOptions extends UsePointerHandlerActions {
    readonly separator: Readonly<ShallowRef<HTMLElement | null | undefined>>;
    readonly state: Readonly<Ref<SizeState>>;
    readonly attachment: Readonly<Ref<LayoutAreaAttachPanel | null>>;
}

export function usePointerHandler(options: UsePointerHandlerOptions): void {
    const { separator, attachment } = options;

    const invert = computed(() => {
        if (attachment.value === "right" || attachment.value === "bottom") {
            return -1;
        }
        return 1;
    });

    const orientation = computed((): Orientation => {
        if (attachment.value === "top" || attachment.value === "bottom") {
            return "horizontal";
        } else {
            return "vertical";
        }
    });

    useEventListener(separator, "pointerdown", (event) => {
        const { isPrimary, button, target, pointerId } = event;

        if (!separator.value) {
            return;
        }

        if (!isPrimary || button !== 0 || target !== separator.value) {
            return;
        }

        const separatorElement = separator.value;
        const property =
            orientation.value === "horizontal" ? "clientY" : "clientX";
        const reference = event[property];
        const resize = createResizer();

        function onPointerMove(event: PointerEvent): void {
            if (event.pointerId === pointerId) {
                resize(event[property] - reference);
            }
        }

        function onLostPointerCapture(event: PointerEvent): void {
            if (event.pointerId === pointerId) {
                separatorElement.removeEventListener(
                    "pointermove",
                    onPointerMove,
                );
                separatorElement.removeEventListener(
                    "lostpointercapture",
                    onLostPointerCapture,
                );
            }
        }

        onPointerMove(event);

        separatorElement.addEventListener(
            "lostpointercapture",
            onLostPointerCapture,
        );
        separatorElement.addEventListener("pointermove", onPointerMove);
        separatorElement.setPointerCapture(pointerId);

        event.preventDefault();
    });

    function createResizer(): (amount: number) => void {
        const { min, max, current: value } = options.state.value;
        return (amount: number) => {
            options.movement(clamp(value + amount * invert.value, min, max));
        };
    }
}
