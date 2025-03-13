declare global {
    /* eslint-disable-next-line @typescript-eslint/no-namespace -- needed to match upstream */
    namespace jest {
        interface Matchers<R> {
            /**
             * Expects element to have focus.
             */
            toHaveFocus(): R;
        }
    }
}

export {};
