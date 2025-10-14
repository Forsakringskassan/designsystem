import { mount } from "cypress/vue";

interface CustomOptions {
    errorThreshold: number;
    baseDelay: number;
    retries: number;
}

type ToMatchScreenshotOptions = Cypress.ScreenshotOptions | CustomOptions;

declare global {
    namespace Cypress {
        interface Chainable {
            mount: typeof mount;

            toMatchScreenshot(errorThreshold?: number): void;
            toMatchScreenshot(options: Partial<ToMatchScreenshotOptions>): void;
        }
    }
}
