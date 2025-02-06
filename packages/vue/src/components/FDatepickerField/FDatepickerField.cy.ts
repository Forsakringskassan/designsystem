import { defineComponent } from "vue";
import { ValidationService } from "@fkui/logic";
import { FDate } from "@fkui/date";
import {
    DensityWrapper,
    densityWrapperHeight,
    densityWrapperWidth,
} from "@fkui/test-utils/vue";
import {
    AlertScreenReaderPageObject,
    FDatepickerFieldPageobject,
} from "../../cypress";
import FDatepickerField from "./FDatepickerField.vue";

const datepickerField = new FDatepickerFieldPageobject(".datepicker-field");
const alertScreenReader = new AlertScreenReaderPageObject();

const VIEWPORT = {
    DESKTOP: { width: 1024, height: 600 }, // enough height to avoid scroll
    MOBILE: { width: 639, height: 600 },
    SHORT: { width: 1024, height: 300 }, // low enough height to result in no valid popup candidate
};

const baseDelay = 400;
const today = new Date(2022, 11, 24);

function setDate(date: Date): void {
    cy.clock(date, ["Date"]);
}

function setViewport(viewPort: { height: number; width: number }): void {
    cy.viewport(viewPort.width, viewPort.height);
}

function shouldMatchScreenshot(): void {
    cy.toMatchScreenshot({ baseDelay });
}

describe("pristine", () => {
    beforeEach(() => {
        setDate(today);
        setViewport(VIEWPORT.MOBILE);
        cy.mount(FDatepickerField);
    });

    /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
    it.skip("should have approved design", () => {
        shouldMatchScreenshot();
    });

    it("should set calendar button sr-text", () => {
        datepickerField
            .toggleCalendarButton()
            .should("contain.text", "Välj datum");
    });

    it("should set calendar button not expanded", () => {
        datepickerField
            .toggleCalendarButton()
            .should("have.attr", "aria-expanded", "false");
    });
});

describe("enter a valid date and leave textfield", () => {
    beforeEach(() => {
        setDate(today);
        setViewport(VIEWPORT.MOBILE);
        cy.mount(FDatepickerField);
        datepickerField.input().type("2022-03-01");
        datepickerField.input().blur();
    });

    /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
    it.skip("should have approved design", () => {
        shouldMatchScreenshot();
    });

    it("should show no error message", () => {
        datepickerField.textFieldErrorMessage().should("not.exist");
    });

    it("should set calendar button sr-text", () => {
        datepickerField
            .toggleCalendarButton()
            .should("contain.text", "Ändra datum tisdag 1 mars 2022");
    });
});

describe("enter an invalid date and leave textfield", () => {
    beforeEach(() => {
        setDate(today);
        setViewport(VIEWPORT.MOBILE);
        cy.mount(FDatepickerField);
        datepickerField.input().type("asdf");
        datepickerField.input().blur();
    });

    /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
    it.skip("should have approved design", () => {
        shouldMatchScreenshot();
    });

    it("should show error message", () => {
        datepickerField.textFieldErrorMessage().should("exist");
    });

    it("should set calendar button sr-text", () => {
        datepickerField
            .toggleCalendarButton()
            .should("contain.text", "Välj datum");
    });
});

describe("enter an invalid date format and leave textfield", () => {
    beforeEach(() => {
        setDate(today);
        setViewport(VIEWPORT.MOBILE);
        cy.mount(FDatepickerField);
        datepickerField.input().type("2022-02-31");
        datepickerField.input().blur();
    });

    it("should show error message", () => {
        datepickerField.textFieldErrorMessage().should("exist");
    });

    it("should set calendar button sr-text", () => {
        datepickerField
            .toggleCalendarButton()
            .should("contain.text", "Välj datum");
    });
});

describe("enter default mindate", () => {
    it("should not show error message", () => {
        setDate(today);
        setViewport(VIEWPORT.MOBILE);
        cy.mount(FDatepickerField);
        datepickerField.input().type("2012-12-24");
        datepickerField.input().blur();
        datepickerField.textFieldErrorMessage().should("not.exist");
    });
});

describe("enter day before default mindate", () => {
    it("should show error message", () => {
        setDate(today);
        setViewport(VIEWPORT.MOBILE);
        cy.mount(FDatepickerField);
        datepickerField.input().type("2012-12-23");
        datepickerField.input().blur();
        datepickerField.textFieldErrorMessage().should("exist");
    });
});

describe("enter default maxdate", () => {
    it("should not show error message", () => {
        setDate(today);
        setViewport(VIEWPORT.MOBILE);
        cy.mount(FDatepickerField);
        datepickerField.input().type("2032-12-24");
        datepickerField.input().blur();
        datepickerField.textFieldErrorMessage().should("not.exist");
    });
});

describe("enter day after default maxdate", () => {
    it("should show error message", () => {
        setDate(today);
        setViewport(VIEWPORT.MOBILE);
        cy.mount(FDatepickerField);
        datepickerField.input().type("2032-12-25");
        datepickerField.input().blur();
        datepickerField.textFieldErrorMessage().should("exist");
    });
});

describe("open calendar", () => {
    beforeEach(() => {
        setDate(today);
        setViewport(VIEWPORT.MOBILE);
        cy.mount(FDatepickerField);
        datepickerField.toggleCalendarButton().click();
    });

    it("should exist", () => {
        datepickerField.calendar().should("exist");
    });

    it("should show current month", () => {
        datepickerField
            .calendarCaption()
            .should("contain.text", "december 2022");
    });

    it("should focus on caption", () => {
        datepickerField.calendarCaption().should("have.focus");
    });

    it("should set calendar button expanded", () => {
        datepickerField
            .toggleCalendarButton()
            .should("have.attr", "aria-expanded", "true");
    });

    it("should set prev month sr-text", () => {
        datepickerField
            .navPrevButton()
            .should("contain.text", "Föregående månad");
    });

    it("should set next month sr-text", () => {
        datepickerField.navNextButton().should("contain.text", "Nästa månad");
    });

    it("should set default day sr-text", () => {
        datepickerField
            .dayButton("2022-12-01")
            .should("contain.text", "torsdag 1 december 2022");
    });

    it("should set today's day sr-text", () => {
        datepickerField
            .dayButton("2022-12-24")
            .should("contain.text", "idag lördag 24 december 2022");
    });

    it("should have entry focus on day 1 when nothing is selected", () => {
        datepickerField
            .dayButton("2022-12-01")
            .should("have.prop", "tabindex", 0);
    });
});

describe("open calendar in desktop", () => {
    beforeEach(() => {
        setDate(today);
        setViewport(VIEWPORT.DESKTOP);
        cy.mount(FDatepickerField);
        datepickerField.toggleCalendarButton().click();
    });

    /* eslint-disable-next-line mocha/no-skipped-tests -- FDatepickerField is closed on resize and Cypress triggers a resize (SFKUI-6642) */
    it.skip("should not show calendar inline", () => {
        shouldMatchScreenshot();
    });
});

describe("open calendar and go to previous month", () => {
    beforeEach(() => {
        setDate(today);
        setViewport(VIEWPORT.MOBILE);
        cy.mount(FDatepickerField);
        datepickerField.toggleCalendarButton().click();
        datepickerField.navPrevButton().click();
    });

    it("should set caption to previous month", () => {
        datepickerField
            .calendarCaption()
            .should("contain.text", "november 2022");
    });

    it("should set aria-live message to previous month", () => {
        alertScreenReader.el().should("contain.text", "november 2022 visas");
    });
});

describe("open calendar and go to next month", () => {
    beforeEach(() => {
        setDate(today);
        setViewport(VIEWPORT.MOBILE);
        cy.mount(FDatepickerField);
        datepickerField.toggleCalendarButton().click();
        datepickerField.navNextButton().click();
    });

    it("should set caption to next month", () => {
        datepickerField
            .calendarCaption()
            .should("contain.text", "januari 2023");
    });

    it("should set aria-live message to next month", () => {
        alertScreenReader.el().should("contain.text", "januari 2023 visas");
    });
});

describe("open calendar and focus on a day", () => {
    beforeEach(() => {
        setDate(today);
        setViewport(VIEWPORT.MOBILE);
        cy.mount(FDatepickerField);
        datepickerField.toggleCalendarButton().click();

        // Wait for programmatic focus on caption before refocusing.
        datepickerField.calendarCaption().should("have.focus");
        datepickerField.dayButton("2022-12-01").focus();
    });

    it("should navigate when pressing  focus on prev day when pressing left arrow", () => {
        cy.focused().trigger("keydown", { code: "ArrowLeft" });
        cy.focused().should("contain.text", "onsdag 30 november 2022");
        cy.focused().should("have.attr", "tabindex", 0);
    });

    it("should focus on next day when pressing right arrow", () => {
        cy.focused().trigger("keydown", { code: "ArrowRight" });
        cy.focused().should("contain.text", "fredag 2 december 2022");
        cy.focused().should("have.attr", "tabindex", 0);
    });

    it("should focus on prev week when pressing up arrow", () => {
        cy.focused().trigger("keydown", { code: "ArrowUp" });
        cy.focused().should("contain.text", "torsdag 24 november 2022");
        cy.focused().should("have.attr", "tabindex", 0);
    });

    it("should focus on next week when pressing down arrow", () => {
        cy.focused().trigger("keydown", { code: "ArrowDown" });
        cy.focused().should("contain.text", "torsdag 8 december 2022");
        cy.focused().should("have.attr", "tabindex", 0);
    });
});

describe("open calendar and select day", () => {
    beforeEach(() => {
        setDate(today);
        setViewport(VIEWPORT.MOBILE);
        cy.mount(FDatepickerField);
        datepickerField.toggleCalendarButton().click();
        datepickerField.dayButton("2022-12-23").click();
    });

    it("should set textfield value", () => {
        datepickerField.input().should("have.value", "2022-12-23");
    });

    it("should close calendar", () => {
        datepickerField.calendar().should("not.exist");
    });

    it("should focus on toggle button", () => {
        datepickerField.toggleCalendarButton().should("have.focus");
    });

    it("should set calendar button no expanded", () => {
        datepickerField
            .toggleCalendarButton()
            .should("have.attr", "aria-expanded", "false");
    });
});

describe("open calendar and click close button", () => {
    beforeEach(() => {
        setDate(today);
        setViewport(VIEWPORT.MOBILE);
        cy.mount(FDatepickerField);
        datepickerField.toggleCalendarButton().click();
        datepickerField.closeCalendarButton().click();
    });

    it("should close calendar, focus on toggle button and set it not expanded", () => {
        datepickerField.calendar().should("not.exist");
        datepickerField
            .toggleCalendarButton()
            .should("have.focus")
            .should("have.attr", "aria-expanded", "false");
    });
});

describe("open calendar and press ESC", () => {
    beforeEach(() => {
        setDate(today);
        setViewport(VIEWPORT.MOBILE);
        cy.mount(FDatepickerField);
        datepickerField.toggleCalendarButton().click();
        datepickerField.calendar().trigger("keyup", { key: "Escape" });
    });

    it("should close calendar, focus on toggle button and set it not expanded", () => {
        datepickerField.calendar().should("not.exist");
        datepickerField
            .toggleCalendarButton()
            .should("have.focus")
            .should("have.attr", "aria-expanded", "false");
    });
});

describe("open calendar with width 320px", () => {
    /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
    it.skip("should not show week numbers", () => {
        cy.viewport(639, 639);

        const template = /* HTML */ `
            <div style="display: flex">
                <div style="width: 300px">
                    <f-datepicker-field></f-datepicker-field>
                </div>
                <div style="flex: 1 1 auto; background: hotpink"></div>
            </div>
        `;

        setDate(today);
        cy.mount(
            defineComponent({
                template,
                components: { FDatepickerField },
            }),
        );

        datepickerField.toggleCalendarButton().click();
        shouldMatchScreenshot();
    });
});

describe("open calendar with low height", () => {
    beforeEach(() => {
        setDate(today);
        setViewport(VIEWPORT.SHORT);
        cy.mount(FDatepickerField);
    });

    it("should show calendar inline", () => {
        datepickerField.toggleCalendarButton().click();
        datepickerField.popup().should("have.class", "popup--inline");
    });
});

describe("required field", () => {
    beforeEach(() => {
        ValidationService.clearAllStates();

        const template = /* HTML */ `
            <form id="foo" novalidate @submit.prevent="onSubmit">
                <f-datepicker-field v-validation.required>
                    Required field
                </f-datepicker-field>
                <label for="outsider"> Another field </label>
                <input type="text" id="outsider" />
                <button type="submit">Submit</button>
            </form>
        `;

        setDate(today);
        setViewport(VIEWPORT.MOBILE);
        cy.mount(
            defineComponent({
                template,
                components: { FDatepickerField },
                methods: {
                    onSubmit() {
                        ValidationService.setSubmitted("foo");
                        ValidationService.validateAllElements("foo");
                    },
                },
            }),
        );
    });

    it("should not show error message when altering focus between textfield and calendar button", () => {
        datepickerField.input().focus().type("invalid");
        datepickerField.toggleCalendarButton().focus();
        datepickerField.input().focus();
        datepickerField.textFieldErrorMessage().should("not.exist");
    });

    it("should show error message when shifting focus from textfield to something outside of the component", () => {
        datepickerField.input().focus().type("invalid");
        cy.get("#outsider").focus();
        datepickerField.textFieldErrorMessage().should("exist");
    });

    it("should show error message when shifting focus from calendar button to something outside of the component", () => {
        datepickerField.input().focus().type("invalid");
        datepickerField.toggleCalendarButton().focus();
        cy.get("#outsider").focus();
        datepickerField.textFieldErrorMessage().should("exist");
    });

    it("should show error message when submitted", () => {
        cy.get("button[type='submit']").click();
        datepickerField.textFieldErrorMessage().should("exist");
    });
});

describe("initial month set", () => {
    describe("open calendar", () => {
        beforeEach(() => {
            setDate(today);
            setViewport(VIEWPORT.MOBILE);
            cy.mount(FDatepickerField, {
                props: { initialMonth: FDate.fromIso("2020-02-01") },
            });
            datepickerField.toggleCalendarButton().click();
        });

        it("should show initial month", () => {
            datepickerField
                .calendarCaption()
                .should("contain.text", "februari 2020");
        });
    });
});

describe("initial month set and invalid date", () => {
    describe("open calendar", () => {
        beforeEach(() => {
            setDate(today);
            setViewport(VIEWPORT.MOBILE);
            cy.mount(FDatepickerField, {
                props: {
                    initialMonth: FDate.fromIso("2020-03-01"),
                    modelValue: "asdf",
                },
            });
            datepickerField.toggleCalendarButton().click();
        });

        it("should show initial month and not indicate any day is selected", () => {
            datepickerField
                .calendarCaption()
                .should("contain.text", "mars 2020");

            datepickerField.selectedDay().should("not.exist");
        });
    });
});

describe("initial month set and invalid date format", () => {
    describe("open calendar", () => {
        beforeEach(() => {
            setDate(today);
            setViewport(VIEWPORT.MOBILE);
            cy.mount(FDatepickerField, {
                props: {
                    initialMonth: FDate.fromIso("2020-04-01"),
                    modelValue: "asdf",
                },
            });
            datepickerField.input().type("2022-02-31");
            datepickerField.toggleCalendarButton().click();
        });

        it("should show initial month and not indicate any day is selected", () => {
            datepickerField
                .calendarCaption()
                .should("contain.text", "april 2020");

            datepickerField.selectedDay().should("not.exist");
        });
    });
});

describe("valid date", () => {
    beforeEach(() => {
        setDate(today);
        setViewport(VIEWPORT.MOBILE);
        cy.mount(FDatepickerField, {
            props: {
                modelValue: "2022-12-31",
            },
        });
    });

    it("should be set in textfield", () => {
        datepickerField.input().should("have.value", "2022-12-31");
    });

    it("should show no error", () => {
        datepickerField.textFieldErrorMessage().should("not.exist");
    });

    describe("open calendar", () => {
        beforeEach(() => {
            datepickerField.toggleCalendarButton().click();
        });

        /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
        it.skip("should have approved design", () => {
            shouldMatchScreenshot();
        });

        it("should show belonging month and indicate day is selected", () => {
            datepickerField
                .calendarCaption()
                .should("contain.text", "december 2022");
            datepickerField.selectedDay().should("exist");
        });

        it("should set selected day sr-text", () => {
            datepickerField
                .selectedDay()
                .should("contain.text", "vald dag lördag 31 december 2022");
        });

        it("should have entry focus on selected day if it is within current month", () => {
            datepickerField
                .dayButton("2022-12-31")
                .should("have.prop", "tabindex", 0);
        });
    });

    describe("open calendar and navigate to prev month", () => {
        it("should have entry focus on day 1 if selected day is not within current month", () => {
            datepickerField.toggleCalendarButton().click();
            datepickerField.navPrevButton().click();
            datepickerField.selectedDay().should("not.exist");
            datepickerField
                .dayButton("2022-11-01")
                .should("have.prop", "tabindex", 0);
        });
    });
});

describe("today's date", () => {
    describe("open calendar", () => {
        beforeEach(() => {
            setDate(today);
            setViewport(VIEWPORT.MOBILE);
            cy.mount(FDatepickerField, {
                props: {
                    modelValue: "2022-12-24",
                },
            });

            datepickerField.toggleCalendarButton().click();
        });

        /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
        it.skip("should have approved design", () => {
            shouldMatchScreenshot();
        });

        it("should set selected today's day sr-text", () => {
            datepickerField
                .selectedDay()
                .should(
                    "contain.text",
                    "vald dag idag lördag 24 december 2022",
                );
        });
    });
});

describe("invalid date", () => {
    beforeEach(() => {
        setDate(today);
        setViewport(VIEWPORT.MOBILE);
        cy.mount(FDatepickerField, {
            props: {
                modelValue: "2022-02-31",
            },
        });
    });

    it("should be set in textfield", () => {
        datepickerField.input().should("have.value", "2022-02-31");
    });

    it("should show error", () => {
        datepickerField.textFieldErrorMessage().should("exist");
    });

    describe("open calendar", () => {
        beforeEach(() => {
            datepickerField.toggleCalendarButton().click();
        });

        it("should default show current month and not indicate any day is selected", () => {
            datepickerField
                .calendarCaption()
                .should("contain.text", "december 2022");
            datepickerField.selectedDay().should("not.exist");
        });

        it("should have entry focus on day 1 when date is invalid", () => {
            datepickerField
                .dayButton("2022-12-01")
                .should("have.prop", "tabindex", 0);
        });
    });
});

describe("invalid date and initial month set", () => {
    beforeEach(() => {
        setDate(today);
        setViewport(VIEWPORT.MOBILE);
        cy.mount(FDatepickerField, {
            props: {
                initialMonth: FDate.fromIso("2020-04-01"),
                modelValue: "2022-02-31",
            },
        });
    });

    describe("open calendar", () => {
        it("should show initial month and not indicate any day is selected", () => {
            datepickerField.toggleCalendarButton().click();
            datepickerField
                .calendarCaption()
                .should("contain.text", "april 2020");
            datepickerField.selectedDay().should("not.exist");
        });
    });
});

describe("no highlight today", () => {
    beforeEach(() => {
        setDate(today);
        setViewport(VIEWPORT.MOBILE);
        cy.mount(FDatepickerField, {
            props: {
                highlightToday: false,
                modelValue: "2022-12-24",
            },
        });
    });

    describe("open calendar", () => {
        it("should not highlight today", () => {
            datepickerField.toggleCalendarButton().click();
            datepickerField.highlightedDay().should("not.exist");
        });
    });
});

describe("open calendar in desktop with always inline", () => {
    beforeEach(() => {
        setDate(today);
        setViewport(VIEWPORT.DESKTOP);
        cy.mount(FDatepickerField, {
            props: {
                alwaysInline: true,
            },
        });
        datepickerField.toggleCalendarButton().click();
    });

    /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
    it.skip("should show calendar inline", () => {
        shouldMatchScreenshot();
    });
});

describe("disabled component", () => {
    beforeEach(() => {
        setDate(today);
        setViewport(VIEWPORT.MOBILE);
        cy.mount(FDatepickerField, {
            props: {
                disabled: true,
            },
        });
    });

    it("should disable textfield and calendar button", () => {
        datepickerField.toggleCalendarButton().should("be.disabled");
        datepickerField.input().should("be.disabled");
    });
});

describe("disabled days", () => {
    beforeEach(() => {
        ValidationService.clearAllStates();

        const template = /* HTML */ `
            <f-datepicker-field
                v-validation.invalidDates="{ invalidDates: { dates: ['2022-12-01', '2022-12-13'] }}"
            >
            </f-datepicker-field>
        `;

        setDate(today);
        setViewport(VIEWPORT.MOBILE);
        cy.mount(
            defineComponent({
                template,
                components: { FDatepickerField },
            }),
        );
    });

    describe("open calendar", () => {
        it("should set disabled day sr-text", () => {
            datepickerField.toggleCalendarButton().click();
            datepickerField
                .dayButton("2022-12-01")
                .should("contain.text", "inte valbar torsdag 1 december 2022");
        });

        it("should set corresponding days as disabled", () => {
            datepickerField.toggleCalendarButton().click();
            datepickerField.disabledDay("2022-12-01").should("exist");
            datepickerField.disabledDay("2022-12-13").should("exist");
        });
    });

    describe("open calendar and select disabled day", () => {
        beforeEach(() => {
            datepickerField.toggleCalendarButton().click();
            datepickerField.dayButton("2022-12-01").click();
        });

        it("should set value and show error message but not close calendar", () => {
            datepickerField
                .textFieldErrorMessage()
                .should("contain.text", "Du kan inte välja det här datumet.");
            datepickerField.calendar().should("exist");
        });

        it("should set aria-live message", () => {
            alertScreenReader
                .el()
                .should("contain.text", "Du kan inte välja det här datumet.");
        });
    });
});

describe("disabled weekdays", () => {
    beforeEach(() => {
        ValidationService.clearAllStates();

        const template = /* HTML */ `
            <f-datepicker-field
                v-validation.invalidWeekdays="{ invalidWeekdays: { days: [2, 4, 6] }}"
            ></f-datepicker-field>
        `;

        setDate(today);
        setViewport(VIEWPORT.MOBILE);
        cy.mount(
            defineComponent({
                template,
                components: { FDatepickerField },
            }),
        );
    });

    describe("open calendar", () => {
        it("should set corresponding days as disabled", () => {
            datepickerField.toggleCalendarButton().click();
            datepickerField.disabledDay("2022-12-05").should("not.exist"); // Monday
            datepickerField.disabledDay("2022-12-06").should("exist");
            datepickerField.disabledDay("2022-12-07").should("not.exist");
            datepickerField.disabledDay("2022-12-08").should("exist");
            datepickerField.disabledDay("2022-12-09").should("not.exist");
            datepickerField.disabledDay("2022-12-06").should("exist");
            datepickerField.disabledDay("2022-12-07").should("not.exist");
        });
    });
});

describe("mindate within month", () => {
    beforeEach(() => {
        ValidationService.clearAllStates();

        const template = /* HTML */ `
            <f-datepicker-field
                v-validation.minDate="{ minDate: { limit: '2022-12-10' }}"
            ></f-datepicker-field>
        `;

        setDate(today);
        setViewport(VIEWPORT.MOBILE);
        cy.mount(
            defineComponent({
                template,
                components: { FDatepickerField },
            }),
        );
    });

    describe("open calendar", () => {
        /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
        it.skip("should have approved design", () => {
            datepickerField.toggleCalendarButton().click();
            shouldMatchScreenshot();
        });

        it("should set corresponding days to disabled", () => {
            datepickerField.toggleCalendarButton().click();
            datepickerField.disabledDay("2022-12-09").should("exist");
            datepickerField.disabledDay("2022-12-10").should("not.exist");
            datepickerField.disabledDay("2022-12-11").should("not.exist");
        });

        it("should set prevmonth button to `aria-disabled`", () => {
            datepickerField.toggleCalendarButton().click();
            datepickerField
                .navPrevButton()
                .should("have.attr", "aria-disabled", "true");
        });
    });

    describe("open calendar and click disabled prev month button", () => {
        beforeEach(() => {
            datepickerField.toggleCalendarButton().click();
            datepickerField.navPrevButton().click();
        });

        it("should not navigate", () => {
            datepickerField
                .calendarCaption()
                .should("contain.text", "december 2022");
        });

        it("should set aria-live message", () => {
            alertScreenReader
                .el()
                .should(
                    "contain.text",
                    "Du kan inte välja en dag före 10 december 2022",
                );
        });
    });

    describe("open calendar and navigate to prev month by pressing left arrow", () => {
        beforeEach(() => {
            datepickerField.toggleCalendarButton().click();
            datepickerField.dayButton("2022-12-01").focus();
            cy.focused().trigger("keydown", { code: "ArrowLeft" });
        });

        it("should not navigate", () => {
            datepickerField.dayButton("2022-12-01").should("have.focus");
        });

        it("should set aria-live message", () => {
            alertScreenReader
                .el()
                .should(
                    "contain.text",
                    "Du kan inte välja en dag före 10 december 2022",
                );
        });
    });

    describe("open calendar and navigate to prev month by pressing up arrow", () => {
        beforeEach(() => {
            datepickerField.toggleCalendarButton().click();
            datepickerField.dayButton("2022-12-04").focus();
            cy.focused().trigger("keydown", { code: "ArrowUp" });
        });

        it("should not navigate", () => {
            datepickerField.dayButton("2022-12-04").should("have.focus");
        });

        it("should set aria-live message", () => {
            alertScreenReader
                .el()
                .should(
                    "contain.text",
                    "Du kan inte välja en dag före 10 december 2022",
                );
        });
    });
});

describe("maxdate within month", () => {
    beforeEach(() => {
        ValidationService.clearAllStates();

        const template = /* HTML */ `
            <f-datepicker-field
                v-validation.maxDate="{ maxDate: { limit: '2022-12-23' }}"
            ></f-datepicker-field>
        `;

        setDate(today);
        setViewport(VIEWPORT.MOBILE);
        cy.mount(
            defineComponent({
                template,
                components: { FDatepickerField },
            }),
        );
    });

    describe("open calendar", () => {
        /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
        it.skip("should have approved design", () => {
            datepickerField.toggleCalendarButton().click();
            shouldMatchScreenshot();
        });

        it("should set corresponding days to disabled", () => {
            datepickerField.toggleCalendarButton().click();
            datepickerField.disabledDay("2022-12-23").should("not.exist");
            datepickerField.disabledDay("2022-12-24").should("exist");
            datepickerField.disabledDay("2022-12-25").should("exist");
        });
    });

    describe("open calendar and click disabled next month button", () => {
        beforeEach(() => {
            datepickerField.toggleCalendarButton().click();
            datepickerField.navNextButton().click();
        });

        it("should not navigate", () => {
            datepickerField
                .calendarCaption()
                .should("contain.text", "december 2022");
        });

        it("should set aria-live message", () => {
            alertScreenReader
                .el()
                .should(
                    "contain.text",
                    "Du kan inte välja en dag efter 23 december 2022",
                );
        });
    });

    describe("open calendar and navigate to next month by pressing right arrow", () => {
        beforeEach(() => {
            datepickerField.toggleCalendarButton().click();
            datepickerField.dayButton("2022-12-31").focus();
            cy.focused().trigger("keydown", { code: "ArrowRight" });
        });

        it("should not navigate", () => {
            datepickerField.dayButton("2022-12-31").should("have.focus");
        });

        it("should set aria-live message", () => {
            alertScreenReader
                .el()
                .should(
                    "contain.text",
                    "Du kan inte välja en dag efter 23 december 2022",
                );
        });
    });

    describe("open calendar and navigate to next month by pressing down arrow", () => {
        beforeEach(() => {
            datepickerField.toggleCalendarButton().click();
            datepickerField.dayButton("2022-12-28").focus();
            cy.focused().trigger("keydown", { code: "ArrowDown" });
        });

        it("should not navigate", () => {
            datepickerField.dayButton("2022-12-28").should("have.focus");
        });

        it("should set aria-live message", () => {
            alertScreenReader
                .el()
                .should(
                    "contain.text",
                    "Du kan inte välja en dag efter 23 december 2022",
                );
        });
    });
});

describe("min- and maxdate within month", () => {
    beforeEach(() => {
        ValidationService.clearAllStates();

        const template = /* HTML */ `
            <f-datepicker-field
                v-validation.minDate.maxDate="{ minDate: { limit: '2022-12-10' }, maxDate: { limit: '2022-12-23' }}"
            ></f-datepicker-field>
        `;

        setDate(today);
        setViewport(VIEWPORT.MOBILE);
        cy.mount(
            defineComponent({
                template,
                components: { FDatepickerField },
            }),
        );
    });

    describe("open calendar", () => {
        /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
        it.skip("should have approved design", () => {
            datepickerField.toggleCalendarButton().click();
            shouldMatchScreenshot();
        });
    });
});

describe("popup-target", () => {
    beforeEach(() => {
        const template = /* HTML */ `
            <div>
                <div style="height: 1000px; background: hotpink"></div>
                <f-datepicker-field />
            </div>
        `;

        setDate(today);
        setViewport(VIEWPORT.DESKTOP);
        cy.mount(
            defineComponent({
                template,
                components: { FDatepickerField },
            }),
        );
    });

    it("should not scroll to top when datepicker is clicked", () => {
        datepickerField.toggleCalendarButton().click();
        cy.window().its("scrollY").should("be.greaterThan", 0);
    });
});

/* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
describe.skip("density", () => {
    const DensityComponent = defineComponent({
        template: /* HTML */ `
            <density-wrapper>
                <f-datepicker-field v-model="datepickerField" maxlength="100">
                    Etikett-rubrik
                </f-datepicker-field>
            </density-wrapper>
        `,
        components: {
            DensityWrapper,
            FDatepickerField,
        },
        data() {
            return { datepickerField: "2024-01-01" };
        },
    });

    it(`should be densified`, () => {
        cy.viewport(densityWrapperWidth, densityWrapperHeight);
        cy.mount(DensityComponent);
        cy.toMatchScreenshot();
    });
});
