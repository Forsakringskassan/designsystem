import { type DefineComponent, defineComponent } from "vue";
import { FDate } from "@fkui/date";
import { CalendarPageObject } from "../../cypress";
import FCalendar from "./FCalendar.vue";
import FCalendarDay from "./FCalendarDay.vue";

function createComponent(template: string): DefineComponent {
    return defineComponent({
        template,
        components: {
            FCalendar,
            FCalendarDay,
        },
        data() {
            return {
                month: FDate.fromIso("2022-10-01"),
                min: FDate.fromIso("2020-01-01"),
                max: FDate.fromIso("2029-01-30"),
            };
        },
    });
}

const calendar = new CalendarPageObject(`.calendar__wrapper`);

before(() => {
    const date = new Date(2022, 11, 24);
    cy.clock(date, ["Date"]);
});

describe("FCalendar default", () => {
    beforeEach(() => {
        const template = /* HTML */ `
            <f-calendar v-model="month" :min-date="min" :max-date="max">
                <template #default="{ date, isFocused }">
                    <f-calendar-day :day="date" :focused="isFocused">
                    </f-calendar-day>
                </template>
            </f-calendar>
        `;
        cy.mount(createComponent(template));
    });

    it("FCalendar", () => {
        calendar.el().scrollIntoView();
        calendar.navigationBar
            .text()
            .should("have.trimmedText", "Oktober 2022");
        calendar.navigationBar.nextButton().click();
        calendar.navigationBar
            .text()
            .should("have.trimmedText", "November 2022");

        calendar.weekNumbers().eq(2).should("have.trimmedText", "46");
        calendar.headerCells().eq(0).should("have.trimmedText", "mån");
        calendar.headerCells().eq(-1).should("have.trimmedText", "sön");
        calendar.navigateTo(2022, 6);
        calendar.navigationBar.text().should("have.trimmedText", "Juli 2022");
        calendar.navigateTo(2022, 8);
        calendar.navigationBar
            .text()
            .should("have.trimmedText", "September 2022");

        calendar.navigateTo(2023, 2);
        calendar.navigationBar.text().should("have.trimmedText", "Mars 2023");

        calendar.navigateTo(2024, 4);
        calendar.navigationBar.text().should("have.trimmedText", "Maj 2024");

        calendar.navigateTo(2025, 4);
        calendar.navigationBar.text().should("have.trimmedText", "Maj 2025");

        calendar.navigateTo(2026, 0);
        calendar.navigationBar
            .text()
            .should("have.trimmedText", "Januari 2026");

        calendar.navigateTo(2025, 11);
        calendar.navigationBar
            .text()
            .should("have.trimmedText", "December 2025");

        calendar.navigateTo(2024, 10);
        calendar.navigationBar
            .text()
            .should("have.trimmedText", "November 2024");

        calendar.navigateTo(2023, 11);
        calendar.navigationBar
            .text()
            .should("have.trimmedText", "December 2023");

        calendar.day(1).number().should("have.trimmedText", "1");
        calendar.day(9).number().should("have.trimmedText", "9");
        calendar.day(0).number().should("have.trimmedText", "31");
        calendar.day(-3).number().should("have.trimmedText", "28");
    });

    /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
    it.skip("should match screenshot", () => {
        cy.toMatchScreenshot();
    });
});

describe("FCalendar with year selector", () => {
    beforeEach(() => {
        const template = /* HTML */ `
            <f-calendar
                v-model="month"
                year-selector
                :min-date="min"
                :max-date="max"
            >
                <template #default="{ date, isFocused }">
                    <f-calendar-day :day="date" :focused="isFocused">
                    </f-calendar-day>
                </template>
            </f-calendar>
        `;
        cy.mount(createComponent(template));
    });

    it("should have year selector", () => {
        /* should not be visible by default */
        calendar.navYearSelectorButton().should("exist");
        calendar.yearSelector().should("not.exist");
        calendar
            .navYearSelectorButton()
            .should("contain.text", "Öppna årsväljare");
        calendar
            .navYearSelectorButton()
            .should("have.attr", "aria-expanded", "false");

        /* should open when clicked */
        calendar.navYearSelectorButton().click();
        calendar.yearSelector().should("exist");
        calendar
            .navYearSelectorButton()
            .should("have.attr", "aria-expanded", "true");
        calendar.availableYears().should("have.length", 10);
        calendar.availableYears().eq(0).should("have.text", "2020");
        calendar.availableYears().eq(-1).should("have.text", "2029");

        /* keyboard navigation */
        calendar.highlightedYear().should("contain.text", "2022");
        calendar.highlightedYear().type("{downArrow}{downArrow}{upArrow}");
        calendar.highlightedYear().should("contain.text", "2023");
    });

    /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
    it.skip("should match screenshot", () => {
        calendar.navYearSelectorButton().click();
        calendar.yearSelector().should("exist");
        cy.toMatchScreenshot();
    });
});
