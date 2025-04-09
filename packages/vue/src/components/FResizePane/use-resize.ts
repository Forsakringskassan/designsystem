import { type InjectionKey, type Ref, inject, onUnmounted, ref } from "vue";

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
    size: Readonly<Ref<number>>;
}

/**
 * @internal
 */
export const injectionKey: InjectionKey<ResizeAPI> = Symbol("FResizePane");

/**
 * Returned from `useResize()`.
 *
 * @public
 */
export interface UseResize {
    /** current size of resize pane in px */
    readonly size: Readonly<Ref<number>>;
}

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
export function useResize(options: UseResizeOptions = {}): UseResize {
    const api = inject(injectionKey, {
        register() {
            /* fallback: do nothing */
            return () => undefined;
        },
        size: ref(0),
    });

    const unregister = api.register({
        enabled: options.enabled,
        visible: options.visible,
    });

    onUnmounted(unregister);

    return {
        size: api.size,
    };
}
