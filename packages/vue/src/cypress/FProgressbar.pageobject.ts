import { type BasePageObject, type DefaultCypressChainable } from "./common";

/**
 * @public
 */
export type ProgressbarStatus = "pending" | "inprogress" | "finished";

/**
 * Cypress Pageobject representing the `FProgressbar` component.
 *
 * @public
 */
export class FProgressbarPageObject implements BasePageObject {
    public readonly selector: string;

    /**
     * @param selector - the root of the static field, usually `<div class="progress">...</div>`.
     */
    public constructor(selector: string = ".progress") {
        this.selector = selector;
    }

    /**
     * Get the element itself.
     */
    public el(): DefaultCypressChainable {
        return cy.get(this.selector);
    }

    /**
     * @internal
     */
    public progressMeter(): DefaultCypressChainable {
        return cy.get(`${this.selector} .progress__meter`);
    }

    /**
     * Returns progressbar status, one of:
     *
     * - `"pending"` - for value `0`.
     * - `"inprogress"` - for values between `1` and `99`.
     * - `"finished"` - for value `100`.
     */
    public progressStatus(): Cypress.Chainable<ProgressbarStatus> {
        return this.progressMeter().then((el) => {
            return el[0].classList[1].replace(
                /.*progress__meter--(\w+).*/,
                "$1",
            ) as ProgressbarStatus;
        });
    }

    /**
     * Get the current value of the progressbar.
     */
    public value(): Cypress.Chainable<number> {
        return this.progressMeter().then((el) => {
            return parseInt(el[0].ariaValueNow ?? "0", 10);
        });
    }
}
