export * from "./dist/types/jest";

declare global {
    namespace jest {
        interface Matchers<R> {
            /**
             * Expects element to have focus.
             */
            toHaveFocus(): R;
        }
    }
}
