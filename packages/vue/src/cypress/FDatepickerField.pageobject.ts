import { type BasePageObject, type DefaultCypressChainable } from "./common";
import { FTextFieldPageObject } from "./FTextField.pageobject";
import { ICalendarNavbarPageObject } from "./ICalendarNavbar.pageobject";

/**
 * @public
 */
export class FDatepickerFieldPageobject implements BasePageObject {
    public selector: string;
    private textField: FTextFieldPageObject;
    private calendarNavbar: ICalendarNavbarPageObject;

    public constructor(selector: string) {
        this.selector = selector;

        this.textField = new FTextFieldPageObject(
            `${this.selector} .text-field`,
        );

        this.calendarNavbar = new ICalendarNavbarPageObject(
            `${this.selector} .calendar-navbar`,
        );
    }

    public el(): DefaultCypressChainable {
        return cy.get(this.selector);
    }

    public input(): DefaultCypressChainable {
        return this.textField.input();
    }

    public textFieldErrorMessage(): DefaultCypressChainable {
        return this.textField.label.errorMessage();
    }

    public toggleCalendarButton(): DefaultCypressChainable {
        return cy.get(`${this.selector} [data-test="calendar-button"]`);
    }

    public closeCalendarButton(): DefaultCypressChainable {
        return cy.get(`${this.selector}__close__button`);
    }

    public popup(): DefaultCypressChainable {
        return cy.get(`${this.selector} .popup`);
    }

    public calendar(): DefaultCypressChainable {
        return cy.get(`${this.selector} .calendar__wrapper`);
    }

    public calendarCaption(): DefaultCypressChainable {
        return this.calendarNavbar.text();
    }

    public navPrevButton(): DefaultCypressChainable {
        return this.calendarNavbar.prevButton();
    }

    public navNextButton(): DefaultCypressChainable {
        return this.calendarNavbar.nextButton();
    }

    public dayButton(date: string): DefaultCypressChainable {
        return cy.get(`${this.selector} [data-date="${date}"]`);
    }

    public disabledDay(date: string): DefaultCypressChainable {
        return cy.get(
            `${this.selector} [data-date="${date}"] .calendar-day--disabled`,
        );
    }

    public selectedDay(): DefaultCypressChainable {
        return cy.get(`${this.selector} [data-date] .calendar-day--selected`);
    }

    public highlightedDay(): DefaultCypressChainable {
        return cy.get(`${this.selector} [data-date] .calendar-day--today`);
    }
}
