import { type BasePageObject, type DefaultCypressChainable } from "./common";

/**
 * @public
 */
export class ICalendarNavbarPageObject implements BasePageObject {
    public selector: string;

    /**
     * @param selector - CSS selector to the ICalendarNavbar object
     */
    public constructor(selector: string = ".calendar-navbar") {
        this.selector = selector;
    }

    public el(): DefaultCypressChainable {
        return cy.get(this.selector);
    }

    public text(): DefaultCypressChainable {
        return cy.get(`${this.selector} .calendar-navbar__month`);
    }

    public prevButton(): DefaultCypressChainable {
        return cy.get(`${this.selector} .calendar-navbar__arrow--previous`);
    }

    public nextButton(): DefaultCypressChainable {
        return cy.get(`${this.selector} .calendar-navbar__arrow--next`);
    }
}
