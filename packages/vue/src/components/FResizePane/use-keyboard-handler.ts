import { type ShallowRef, type Ref } from "vue";
import { useEventListener } from "@vueuse/core";
import { type LayoutAreaAttachPanel } from "../FPageLayout";

/**
 * @internal
 */
export interface UseKeyboardHandlerActions {
    increase(): void;
    decrease(): void;
    maximize(): void;
    minimize(): void;
}

/**
 * @internal
 */
export interface UseKeyboardHandlerOptions extends UseKeyboardHandlerActions {
    readonly attachment: Readonly<Ref<LayoutAreaAttachPanel | null>>;
    readonly separator: Readonly<ShallowRef<HTMLElement | null | undefined>>;
}

const keymap: Record<
    LayoutAreaAttachPanel,
    Partial<Record<string, keyof UseKeyboardHandlerActions>>
> = {
    left: {
        ArrowLeft: "decrease",
        ArrowRight: "increase",
        Home: "minimize",
        End: "maximize",
    },
    right: {
        ArrowLeft: "increase",
        ArrowRight: "decrease",
        Home: "minimize",
        End: "maximize",
    },
    top: {
        ArrowUp: "decrease",
        ArrowDown: "increase",
        Home: "minimize",
        End: "maximize",
    },
    bottom: {
        ArrowUp: "increase",
        ArrowDown: "decrease",
        Home: "minimize",
        End: "maximize",
    },
    none: {},
};

/**
 * @internal
 */
export function useKeyboardHandler(options: UseKeyboardHandlerOptions): void {
    const { attachment, separator } = options;

    useEventListener(separator, "keydown", (event) => {
        if (!attachment.value) {
            return;
        }
        const action = keymap[attachment.value][event.key];
        if (action) {
            event.preventDefault();
            options[action]();
        }
    });
}
