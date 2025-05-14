import { useElementBounding } from "@vueuse/core";
import { type ShallowRef, ref, watchEffect } from "vue";

/**
 * @internal
 */
interface UseCalendarHeightOptions {
    readonly src: Readonly<ShallowRef<HTMLElement | null>>;
    readonly dst: Readonly<ShallowRef<HTMLElement | null>>;
    readonly property: string;
}

/**
 * Stores the last known height of the `src` element as a CSS property on the
 * `dst` element.
 *
 * @internal
 */
export function useCalendarHeight(options: UseCalendarHeightOptions): void {
    const { src, dst, property } = options;
    const { height } = useElementBounding(src);
    const cachedHeight = ref(NaN);

    watchEffect(() => {
        if (height.value > 0) {
            cachedHeight.value = height.value;
        }
    });

    watchEffect(async () => {
        if (cachedHeight.value) {
            dst.value?.style.setProperty(property, `${cachedHeight.value}px`);
        }
    });
}
