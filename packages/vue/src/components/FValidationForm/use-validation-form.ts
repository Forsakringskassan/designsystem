import { type InjectionKey, type Ref, inject, ref } from "vue";

/**
 * @internal
 */
export const formPendingKey: InjectionKey<Ref<boolean>> = Symbol("formPending");

/**
 * Inject the pending (inflight) state from the closest {@link FValidationForm}.
 *
 * Returns a `Ref<boolean>` that is `true` while the form is processing a
 * submission (validation, callbacks and the submit handler).
 *
 * Defaults to `ref(false)` when there is no ancestor `FValidationForm`.
 *
 * @internal
 */
export function useValidationForm(): Ref<boolean> {
    return inject(formPendingKey, ref(false));
}
