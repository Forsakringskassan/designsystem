// Augmentation for Vitest's expect (which uses @vitest/expect)
import "vitest";

declare module "vitest" {
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars -- to match upstream */
    interface Assertion<R extends void | Promise<void> = void, T = unknown> {
        toHaveFocus(): T;
    }

    interface Matchers<
        /* eslint-disable-next-line @typescript-eslint/no-unused-vars -- to match upstream */
        R extends void | Promise<void> = void | Promise<void>,
        T = unknown,
    > {
        toHaveFocus(): T;
    }
}
export {};
