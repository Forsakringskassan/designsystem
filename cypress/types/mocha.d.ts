import "mocha";

declare global {
    namespace Cypress {
        interface Cypress {
            /**
             * Intern referens till Cypress underliggande Mocha-instans.
             */
            mocha: {
                getRunner: () => Mocha.Runner;
            };
        }
    }
}
export {};
