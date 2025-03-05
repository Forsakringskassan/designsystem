import { type Ref } from "vue";
import { type LayoutAreaAttachPanel } from "../../components/FPageLayout";

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
}

/**
 * @internal
 */
export interface UseKeyboardHandlerResult {
    onKeydown(event: KeyboardEvent): void;
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
export function useKeyboardHandler(
    options: UseKeyboardHandlerOptions,
): UseKeyboardHandlerResult {
    const { attachment } = options;

    return {
        onKeydown(event) {
            if (!attachment.value) {
                return;
            }
            const action = keymap[attachment.value][event.key];
            if (action) {
                event.preventDefault();
                options[action]();
            }
        },
    };
}
