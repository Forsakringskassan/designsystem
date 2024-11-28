import { onMounted, onUnmounted, readonly, type Ref, ref, watch } from "vue";

/**
 * Compute the offset from an alement to an ancestor container.
 *
 * @internal
 */
export function useHorizontalOffset(options: {
    element: Ref<HTMLElement | null>;
    parent: Ref<HTMLElement | null>;
}): Readonly<Ref<number>> {
    const { element: elementRef, parent: parentRef } = options;
    const offset = ref(0);

    watch(() => elementRef.value, updateOffset);
    watch(() => parentRef, updateOffset);

    /* @todo debounce */
    onMounted(() => window.addEventListener("resize", updateOffset));
    onUnmounted(() => window.removeEventListener("resize", updateOffset));

    return readonly(offset);

    function updateOffset(): void {
        const element = elementRef.value;
        const parent = parentRef.value;
        if (!element || !parent) {
            return;
        }

        /*
         * Container
         * +---------------------------+
         * |         [xxxx] - Element  |
         * +---------------------------+
         *            ^^
         *              \------ center (half the width of the element)
         * ^^^^^^^^^^
         *           \--------- left (distance between container left edge and
         *                            element left edge)
         *
         * The final offset is the left distance + half the width of the
         * element, adjusted for the border width of the arrow.
         */

        /* defer one tick to allow rendering to settle */
        setTimeout(() => {
            const borderWidth = 2;
            const center = element.offsetWidth / 2;
            const left = element.offsetLeft - parent.offsetLeft;
            offset.value = left - borderWidth + center;
        }, 0);
    }
}
