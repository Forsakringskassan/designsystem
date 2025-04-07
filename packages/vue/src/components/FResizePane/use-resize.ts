import { type InjectionKey, inject, onUnmounted, type Ref } from "vue";

/**
 * @internal
 */
export interface ResizeParams {
    readonly enabled?: Readonly<Ref<boolean>>;
    readonly visible?: Readonly<Ref<boolean>>;
}

/**
 * The API provided by `FResizePane`.
 *
 * @internal
 */
export interface ResizeAPI {
    register(params: ResizeParams): () => void;
}

/**
 * @internal
 */
export const injectionKey: InjectionKey<ResizeAPI> = Symbol("FResizePane");

/**
 * Optional refs controlling behaviour of ancestor `FResizePanel` component.
 *
 * @public
 */
export interface UseResizeOptions {
    /** When one or more components sets `enabled` to `true` the resize handle is enabled and the end user can drag it to resize the pane */
    readonly enabled?: Readonly<Ref<boolean>>;

    /** When one or more compoents set `visible` to `true` the resize pane is visible */
    readonly visible?: Readonly<Ref<boolean>>;
}

/**
 * Provides an API to control functionallity of an ancestor `FResizePane` component.
 *
 * @public
 * @param options - Optional refs controlling behaviour.
 */
export function useResize(options: UseResizeOptions = {}): void {
    const api = inject(injectionKey, {
        register() {
            /* fallback: do nothing */
            return () => undefined;
        },
    });

    const unregister = api.register({
        enabled: options.enabled,
        visible: options.visible,
    });

    onUnmounted(unregister);
}
