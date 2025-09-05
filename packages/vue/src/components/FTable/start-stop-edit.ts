import { type InjectionKey, inject } from "vue";

/**
 * @internal
 */
export type StopEditCallback = (
    element: HTMLElement,
    reason: "enter" | "escape" | "tab" | "shift-tab" | "blur",
) => Promise<void>;

export interface UseStartStopEdit {
    stopEdit: StopEditCallback;
}

/**
 * @internal
 */
export const stopEditKey = Symbol() as InjectionKey<StopEditCallback>;

/**
 * @internal
 */
export function useStartStopEdit(): UseStartStopEdit {
    const stopEdit = inject(stopEditKey, () => Promise.resolve());
    return { stopEdit };
}
