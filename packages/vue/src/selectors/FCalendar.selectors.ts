/**
 * Selectors for `FCalendar`.
 *
 * @public
 * @since v6.45.0
 * @param selector - The selector for the FCalendar component.
 * @returns An object with selector methods for the FCalendar component.
 */
export function FCalendarSelectors(selector: string = ".calendar__wrapper") {
    return Object.freeze({
        /**
         * The base selector for the component.
         *
         * This is the same selector that the consumer provided.
         *
         * @public
         * @since v6.45.0
         * @returns The root selector for the component.
         */
        get selector(): string {
            return selector;
        },

        /**
         * Get the calendar caption element.
         *
         * Displays the current month and year.
         *
         * @example Cypress
         *
         * ```ts
         * const { navCaption } = FCalendarSelectors();
         * cy.get(navCaption()).should("contain.text", "June 2024");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { navCaption } = FCalendarSelectors();
         * await expect(page.locator(navCaption())).toContainText("June 2024");
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the calendar caption element.
         */
        navCaption(): string {
            return `${selector} .calendar-navbar__month--title`;
        },

        /**
         * Get the previous month button element.
         *
         * @example Cypress
         *
         * ```ts
         * const { navPrevButton } = FCalendarSelectors();
         * cy.get(navPrevButton()).click();
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { navPrevButton } = FCalendarSelectors();
         * await page.locator(navPrevButton()).click();
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the previous month button element.
         */
        navPrevButton(): string {
            return `${selector} .calendar-navbar__arrow--previous`;
        },

        /**
         * Get the next month button element.
         *
         * @example Cypress
         *
         * ```ts
         * const { navNextButton } = FCalendarSelectors();
         * cy.get(navNextButton()).click();
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { navNextButton } = FCalendarSelectors();
         * await page.locator(navNextButton()).click();
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the next month button element.
         */
        navNextButton(): string {
            return `${selector} .calendar-navbar__arrow--next`;
        },

        /**
         * Get the year selector toggle button element.
         *
         * Clicking this button opens the year selector view.
         *
         * @example Cypress
         *
         * ```ts
         * const { navYearSelectorButton } = FCalendarSelectors();
         * cy.get(navYearSelectorButton()).click();
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { navYearSelectorButton } = FCalendarSelectors();
         * await page.locator(navYearSelectorButton()).click();
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the year selector toggle button element.
         */
        navYearSelectorButton(): string {
            return `${selector} .calendar-navbar__year-selector-button`;
        },

        /**
         * Get a day button element by date.
         *
         * The `date` parameter must be in `YYYY-MM-DD` format matching the
         * `data-date` attribute on the day element.
         *
         * @example Cypress
         *
         * ```ts
         * const { dayButton } = FCalendarSelectors();
         * cy.get(dayButton("2024-06-15")).click();
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { dayButton } = FCalendarSelectors();
         * await page.locator(dayButton("2024-06-15")).click();
         * ```
         *
         * @public
         * @since v6.45.0
         * @param date - The date in `YYYY-MM-DD` format.
         * @returns A selector for the day button element.
         */
        dayButton(date: string): string {
            return `${selector} [data-date="${date}"]`;
        },

        /**
         * Get the currently selected day element.
         *
         * @example Cypress
         *
         * ```ts
         * const { selectedDay } = FCalendarSelectors();
         * cy.get(selectedDay()).should("exist");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { selectedDay } = FCalendarSelectors();
         * await expect(page.locator(selectedDay())).toBeVisible();
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the selected day element.
         */
        selectedDay(): string {
            return `${selector} [data-date] .calendar-day--selected`;
        },

        /**
         * Get the today (highlighted) day element.
         *
         * @example Cypress
         *
         * ```ts
         * const { todayDay } = FCalendarSelectors();
         * cy.get(todayDay()).should("exist");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { todayDay } = FCalendarSelectors();
         * await expect(page.locator(todayDay())).toBeVisible();
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the today day element.
         */
        todayDay(): string {
            return `${selector} [data-date] .calendar-day--today`;
        },

        /**
         * Get the year selector element.
         *
         * The year selector is shown when the user activates year navigation
         * via `navYearSelectorButton()`.
         *
         * @example Cypress
         *
         * ```ts
         * const { yearSelector } = FCalendarSelectors();
         * cy.get(yearSelector()).should("exist");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { yearSelector } = FCalendarSelectors();
         * await expect(page.locator(yearSelector())).toBeVisible();
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the year selector element.
         */
        yearSelector(): string {
            return `${selector} .calendar__year-selector`;
        },
    });
}
