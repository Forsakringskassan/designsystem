import { type InjectionKey, inject, onUnmounted, type Ref } from "vue";

export interface ResizeParams {
    readonly enabled?: Readonly<Ref<boolean>>;
    readonly visible?: Readonly<Ref<boolean>>;
}

export interface ResizeAPI {
    register(params: ResizeParams): () => void;
}

export const injectionKey: InjectionKey<ResizeAPI> = Symbol("resize");

export interface UseResizeOptions {
    readonly enabled?: Readonly<Ref<boolean>>;
    readonly visible?: Readonly<Ref<boolean>>;
}

export function useResize(options: UseResizeOptions = {}): void {
    const api = inject(injectionKey, {
        register() {
            /* do nothing */
            return () => undefined;
        },
    });

    const unregister = api.register({
        enabled: options.enabled,
        visible: options.visible,
    });

    onUnmounted(() => {
        unregister();
    });
}
