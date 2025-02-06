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

describe("FCalendar", () => {
    beforeEach(() => {
        const template = /* HTML */ `
            <f-calendar
                v-model="month"
                v-test="'calendar-default'"
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
    it("FCalendar", () => {
        const calendar = new CalendarPageObject(`[data-test=calendar-default]`);
        calendar.el().scrollIntoView();
        calendar.navigationBar
            .text()
            .should("have.trimmedText", "oktober 2022");
        calendar.navigationBar.nextButton().click();
        calendar.navigationBar
            .text()
            .should("have.trimmedText", "november 2022");

        calendar.weekNumbers().eq(2).should("have.trimmedText", "46");
        calendar.headerCells().eq(0).should("have.trimmedText", "mån");
        calendar.headerCells().eq(-1).should("have.trimmedText", "sön");
        calendar.navigateTo(2022, 6);
        calendar.navigationBar.text().should("have.trimmedText", "juli 2022");
        calendar.navigateTo(2022, 8);
        calendar.navigationBar
            .text()
            .should("have.trimmedText", "september 2022");

        calendar.navigateTo(2023, 2);
        calendar.navigationBar.text().should("have.trimmedText", "mars 2023");

        calendar.navigateTo(2024, 4);
        calendar.navigationBar.text().should("have.trimmedText", "maj 2024");

        calendar.navigateTo(2025, 4);
        calendar.navigationBar.text().should("have.trimmedText", "maj 2025");

        calendar.navigateTo(2026, 0);
        calendar.navigationBar
            .text()
            .should("have.trimmedText", "januari 2026");

        calendar.navigateTo(2025, 11);
        calendar.navigationBar
            .text()
            .should("have.trimmedText", "december 2025");

        calendar.navigateTo(2024, 10);
        calendar.navigationBar
            .text()
            .should("have.trimmedText", "november 2024");

        calendar.navigateTo(2023, 11);
        calendar.navigationBar
            .text()
            .should("have.trimmedText", "december 2023");

        calendar.day(1).number().should("have.trimmedText", "1");
        calendar.day(9).number().should("have.trimmedText", "9");
        calendar.day(0).number().should("have.trimmedText", "31");
        calendar.day(-3).number().should("have.trimmedText", "28");
    });
});
