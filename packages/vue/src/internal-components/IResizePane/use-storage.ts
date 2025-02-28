import { type Ref, watchEffect, ref } from "vue";
import { type SizeState } from "./size-state";
import { clamp } from "./clamp";

/**
 * @internal
 */
export interface UseStorageOptions {
    readonly state: Ref<SizeState>;
    readonly storageKey: Readonly<Ref<string | null>>;
}

/**
 * @internal
 */
export function useStorage(options: UseStorageOptions): void {
    const { state, storageKey } = options;
    const loaded = ref(false);
    let last = -1;

    /* update localstorage when size changes */
    watchEffect(() => {
        if (!loaded.value) {
            return;
        }
        if (!storageKey.value) {
            return;
        }
        if (state.value.current < 0 || state.value.current === last) {
            return;
        }
        const json = JSON.stringify(state.value.current);
        window.localStorage.setItem(storageKey.value, json);
        last = state.value.current;
    });

    /* load initial state */
    watchEffect(() => {
        if (!storageKey.value) {
            return;
        }
        const json = window.localStorage.getItem(storageKey.value);
        if (json) {
            const value = JSON.parse(json);
            state.value.current = clamp(
                value,
                state.value.min,
                state.value.max,
            );
            last = value;
        }
        loaded.value = true;
    });
}
