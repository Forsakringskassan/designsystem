import { FCalendarDayPageObject } from "../FCalendarDay.pageobject";
import { ICalendarNavbarPageObject } from "../ICalendarNavbar.pageobject";
import { type BasePageObject, type DefaultCypressChainable } from "../common";

const monthList = [
    "Januari",
    "Februari",
    "Mars",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "Augusti",
    "September",
    "Oktober",
    "November",
    "December",
];
/**
 * Calendar pageobject and functions for accessing days, and navigation in the calendar day view
 *
 * @public
 */
export class CalendarPageObject implements BasePageObject {
    public selector: string;
    public navigationBar: ICalendarNavbarPageObject;

    public constructor(selector: string) {
        this.selector = selector;
        this.navigationBar = new ICalendarNavbarPageObject(
            `${this.selector} .calendar-navbar`,
        );
    }

    public el(): DefaultCypressChainable {
        return cy.get(this.selector);
    }

    /**
     * Get the caption text.
     *
     * @internal
     */
    public calendarCaption(): DefaultCypressChainable {
        return this.navigationBar.text();
    }

    /**
     * return the weeknumbers surrounding the days in the calendar
     */
    public weekNumbers(): DefaultCypressChainable {
        return cy.get(`${this.selector} .calendar-month__cell--week-number`);
    }

    /**
     * return the weekday names surrounding the days in the calendar
     */
    public headerCells(): DefaultCypressChainable {
        return cy.get(
            `${this.selector} .calendar-month__header-cell  > :is(abbr, span)`,
        );
    }

    /**
     * Day to select in the calendar day-view via day number
     */
    public dayButton(day = 1): DefaultCypressChainable {
        return cy.get(
            `${this.selector} .calendar-month__button:nth(${String(day - 1)})`,
        );
    }

    public day(day: number = 1): FCalendarDayPageObject {
        return new FCalendarDayPageObject(
            `${this.selector} .calendar-month__button:nth(${String(
                day - 1,
            )}) .calendar-day`,
        );
    }

    /**
     * Uses the calendar navigation bar navigate to selected year and month
     * jan = 0, dec = 11
     * @param targetYear - Selected year
     * @param targetMonth - Selected month 0-11, 0 = Jan 11 = dec
     */
    public navigateTo(targetYear: number, targetMonth: number): void {
        cy.log(`Navigate to ${monthList[targetMonth]} ${String(targetYear)}`);
        this.navigationBar.text().then((el) => {
            let currYear = 2023;
            let currentMonth = 0;
            el.text().replace(/(\w+)\s+(\d+)/, (match, p1, p2) => {
                currentMonth = monthList.findIndex((month) => month === p1);
                currYear = parseInt(p2, 10);
                return String(currYear);
            });

            const yearDiff = Math.abs(currYear - targetYear);
            const monthDiff = Math.abs(currentMonth - targetMonth);

            let diffInMonths =
                currYear > targetYear ? yearDiff * -12 : yearDiff * 12;
            diffInMonths += currentMonth > targetMonth ? -monthDiff : monthDiff;

            if (diffInMonths !== 0) {
                const stepMonth =
                    diffInMonths < 0
                        ? this.navigationBar.prevButton()
                        : this.navigationBar.nextButton();
                for (let i = 0; i < Math.abs(diffInMonths); i++) {
                    stepMonth.click();
                }
            }
        });
    }

    /**
     * @internal
     */
    public navYearSelectorButton(): DefaultCypressChainable {
        return this.navigationBar.yearSelectorButton();
    }

    /**
     * @internal
     */
    public yearSelector(): DefaultCypressChainable {
        return cy.get(`${this.selector} .calendar__year-selector`);
    }

    /**
     * @internal
     */
    public yearSelectorListbox(): DefaultCypressChainable {
        return cy.get(`${this.selector} .calendar__year-selector__listbox`);
    }

    /**
     * @internal
     */
    public highlightedYear(): DefaultCypressChainable {
        return cy.get(
            `${this.selector} .calendar__year-selector__year--highlight`,
        );
    }

    /**
     * Get all available years from year selector.
     *
     * @internal
     */
    public availableYears(): DefaultCypressChainable {
        return cy.get(`${this.selector} .calendar__year-selector__year`);
    }
}
