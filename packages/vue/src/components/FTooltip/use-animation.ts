import { type Ref, ref, computed, onMounted, watchEffect } from "vue";

let initialized = false;
const reducedMotion = ref(false);

/**
 * @internal
 */
export interface UseAnimation {
    /**
     * Set to `true` if the user has animations enabled (i.e.
     * `prefers-reduced-motion` is not set).
     */
    enabled: Readonly<Ref<boolean>>;

    animate(state: "expand" | "collapse"): void;
}

/**
 * @internal
 */
export function useAnimation(options: {
    duration?: number;
    easing?: string;
    element: Readonly<Ref<HTMLElement | null>>;
}): UseAnimation {
    const { duration = 250, easing = "ease-in", element: elementRef } = options;

    let current: "expand" | "collapse" = "collapse";
    let animation = null as Animation | null;

    onMounted(() => {
        if (initialized) {
            return;
        }

        if ("matchMedia" in window) {
            const prefersReducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)",
            );

            reducedMotion.value = prefersReducedMotion.matches;

            prefersReducedMotion.addEventListener("change", (event) => {
                reducedMotion.value = event.matches;
            });
        } else {
            /* fallback when matchMedia is not available, typically in jsdom under testing or similar environment */
            reducedMotion.value = true;
        }

        initialized = true;
    });

    watchEffect(() => {
        if (elementRef.value) {
            elementRef.value.classList.toggle("expanded", current === "expand");
        }
    });

    return {
        enabled: computed(() => reducedMotion.value === false),
        animate(state) {
            current = state;

            const element = elementRef.value;
            if (!element) {
                return;
            }

            element.classList.toggle("expanded", state === "expand");

            if (reducedMotion.value) {
                return;
            }

            if (animation) {
                animation.cancel();
            }

            element.classList.add("animating");
            const h = element.offsetHeight;

            if (state === "expand") {
                animation = element.animate(
                    [{ height: 0 }, { height: `${h}px` }],
                    {
                        duration,
                        easing,
                    },
                );
            } else {
                animation = element.animate(
                    [{ height: `${h}px` }, { height: 0 }],
                    {
                        duration,
                        easing,
                    },
                );
            }

            animation.addEventListener("finish", () => {
                element.classList.remove("animating");
            });
        },
    };
}
