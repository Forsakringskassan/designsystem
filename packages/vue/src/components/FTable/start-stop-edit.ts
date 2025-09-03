import { type InjectionKey, inject } from "vue";

/**
 * @internal
 */
export type StartEditCallback = (focusElement: HTMLElement) => Promise<void>;

/**
 * @internal
 */
export type StopEditCallback = (
    reason: "enter" | "escape" | "tab" | "shift-tab" | "blur",
) => Promise<void>;

export interface UseStartStopEdit {
    startEdit: StartEditCallback;
    stopEdit: StopEditCallback;
}

/**
 * @internal
 */
export const startEditKey = Symbol() as InjectionKey<StartEditCallback>;

/**
 * @internal
 */
export const stopEditKey = Symbol() as InjectionKey<StopEditCallback>;

/**
 * @internal
 */
export function useStartStopEdit(): UseStartStopEdit {
    const startEdit = inject(startEditKey, () => Promise.resolve());
    const stopEdit = inject(stopEditKey, () => Promise.resolve());
    return { startEdit, stopEdit };
}
