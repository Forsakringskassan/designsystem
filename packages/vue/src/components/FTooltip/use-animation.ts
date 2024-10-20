import { type Ref, ref, readonly } from "vue";

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion)");

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
    const useAnimation = ref(!prefersReducedMotion.matches);
    let animation = null as Animation | null;

    prefersReducedMotion.addEventListener("change", (event) => {
        useAnimation.value = !event.matches;
    });

    return {
        enabled: readonly(useAnimation),
        animate(state) {
            const element = elementRef.value;
            if (!element) {
                return;
            }

            element.classList.toggle("expanded", state === "expand");

            if (!useAnimation) {
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
