import { type MaybeRefOrGetter, onMounted, onUnmounted, toValue } from "vue";

export function useEventListener<K extends keyof HTMLElementEventMap>(
    target: MaybeRefOrGetter<HTMLElement | null>,
    event: K,
    callback: (ev: HTMLElementEventMap[K]) => void,
): void;
export function useEventListener(
    target: MaybeRefOrGetter<HTMLElement | null>,
    event: string,
    callback: (ev: Event) => void,
): void;
export function useEventListener<K extends keyof WindowEventMap>(
    target: MaybeRefOrGetter<Window | null>,
    event: K,
    callback: (ev: WindowEventMap[K]) => void,
): void;
export function useEventListener<K extends keyof DocumentEventMap>(
    target: MaybeRefOrGetter<Document | null>,
    event: K,
    callback: (ev: DocumentEventMap[K]) => void,
): void;
/**
 * Uses event listener while the underlying component is mounted.
 * Currently there is no support for replacing the `target` element.
 *
 * @internal
 */
export function useEventListener(
    target: MaybeRefOrGetter<EventTarget | null>,
    event: string,
    callback: (ev: Event) => void,
): void {
    onMounted(() => {
        toValue(target)?.addEventListener(event, callback);
    });
    onUnmounted(() => {
        toValue(target)?.removeEventListener(event, callback);
    });
}
