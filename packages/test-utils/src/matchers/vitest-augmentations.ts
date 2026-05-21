// Augmentation for Vitest's expect (which uses @vitest/expect)
declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace -- needed for Vitest
    namespace Vi {
        interface Assertion<R> {
            toHaveFocus(): R;
        }
        interface AsymmetricMatchersContaining {
            toHaveFocus(): void;
        }
    }
}
export {};
