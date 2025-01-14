import { computed, type Ref, ref } from "vue";
import { useEventListener } from ".";

interface UsePageWidth {
    readonly pageWidth: Readonly<Ref<number>>;
    readonly isMobile: Readonly<Ref<boolean>>;
    readonly isDesktop: Readonly<Ref<boolean>>;
}

const bp = 640;

function hasChanged(a: number, b: number): boolean {
    return (a <= bp && b > bp) || (a > bp && b <= bp);
}

export function usePageWidth({
    onModeChange,
}: { onModeChange?(): void } = {}): UsePageWidth {
    const pageWidth = ref(document.body.clientWidth);

    useEventListener(window, "resize", () => {
        const oldValue = pageWidth.value;
        const newValue = document.body.clientWidth;
        pageWidth.value = newValue;

        if (onModeChange && hasChanged(oldValue, newValue)) {
            onModeChange();
        }
    });

    return {
        pageWidth,
        isMobile: computed(() => pageWidth.value <= bp),
        isDesktop: computed(() => pageWidth.value > bp),
    };
}
