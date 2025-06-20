import {
    type InjectionKey,
    type Ref,
    inject,
    onUnmounted,
    ref,
    toRef,
} from "vue";

/**
 * @internal
 */
export interface ResizeParams {
    readonly enabled: Readonly<Ref<boolean>> | undefined;
    readonly visible: Readonly<Ref<boolean>> | undefined;
    readonly offset: Readonly<Ref<number>> | undefined;
    readonly overlay: Readonly<Ref<boolean>> | undefined;
}

/**
 * The API provided by `FResizePane`.
 *
 * @internal
 */
export interface ResizeAPI {
    register(params: ResizeParams): () => void;
    readonly size: Readonly<Ref<number>>;
}

/**
 * @internal
 */
export const injectionKey: InjectionKey<ResizeAPI> = Symbol.for(
    "FResizePane:useResize",
);

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
    readonly enabled?: boolean | Readonly<Ref<boolean>>;

    /** When one or more compoents set `visible` to `true` the resize pane is visible */
    readonly visible?: boolean | Readonly<Ref<boolean>>;

    /**
     * When one or more components set `overlay` to `true` the resize pane is
     * displayed as an overlay and instead of occupying space from ther layout
     * areas it will be shown on top.
     *
     * The `offset` property can be used to set a static size of how much space
     * it should occupy.
     */
    readonly overlay?: boolean | Readonly<Ref<boolean>>;

    /**
     * When `overlay` is enabled this sets how much static space (in px) the
     * pane should occupy from the nearby layout areas, that is, how much of the
     * pane should be static and how much is overlay.
     *
     * Consider a collapsable panel, by setting the offset to the width of the
     * collapsed state and enabling overlay, the resize pane will occupy that
     * amount of space and the rest of the pane will be positioned on
     * top of the other layout areas.
     */
    readonly offset?: number | Readonly<Ref<number>>;
}

function toOptionalRef<T>(
    value: T | Readonly<Ref<T>> | undefined,
): Readonly<Ref<T>> | undefined {
    if (typeof value === "undefined") {
        return value;
    }
    return toRef(value) as Ref<T>;
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
        enabled: toOptionalRef(options.enabled),
        visible: toOptionalRef(options.visible),
        overlay: toOptionalRef(options.overlay),
        offset: toOptionalRef(options.offset),
    });

    onUnmounted(unregister);

    return {
        size: api.size,
    };
}
