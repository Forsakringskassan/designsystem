import { FCalenderDayPageobject } from "../../../cypress";
import FCalendarSelectDays from "./FCalendarSelectDays.vue";

function mount(): FCalenderDayPageobject {
    cy.mount(FCalendarSelectDays);

    return new FCalenderDayPageobject(`[data-test="multiple-days"]`);
}

describe("FCalendarSelectDays", () => {
    it("should be able to select and deselect days", () => {
        const po = mount();
        po.el().should("exist");
        po.button().get(`[data-date="2022-10-03"]`).click();
        po.button().get(`[data-date="2022-10-04"]`).click();
        po.button().get(`[data-date="2022-10-05"]`).focus().type("{enter}");
        po.button().get(`[data-date="2022-10-06"]`).focus().type(" ");
        cy.get(`[data-test="days-array"]`).should(
            "contain.text",
            `"2022-10-03"`,
        );
        cy.get(`[data-test="days-array"]`).should(
            "contain.text",
            `"2022-10-04"`,
        );
        cy.get(`[data-test="days-array"]`).should(
            "contain.text",
            `"2022-10-05"`,
        );
        cy.get(`[data-test="days-array"]`).should(
            "contain.text",
            `"2022-10-06"`,
        );
        po.button().get(`[data-date="2022-10-05"]`).click();
        po.button().get(`[data-date="2022-10-04"]`).click();
        cy.get(`[data-test="days-array"]`).should(
            "contain.text",
            `"2022-10-03"`,
        );
        cy.get(`[data-test="days-array"]`).should(
            "contain.text",
            `"2022-10-06"`,
        );
    });
});
