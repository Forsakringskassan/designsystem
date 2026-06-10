// Augmentation for Vitest's expect (which uses @vitest/expect)
import "vitest";

declare module "vitest" {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any -- to match upstream */
    interface Matchers<T = any> {
        toHaveFocus: () => T;
    }
}
export {};
