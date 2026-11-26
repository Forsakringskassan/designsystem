import Example from "./FTableSetFocusExample.vue";
import { FTablePageObject } from "@fkui/vue/cypress";

const table = new FTablePageObject();

describe("FTableSetFocusExample", () => {
    it("should focus and activate first cell with validation error", () => {
        cy.mount(Example);

        cy.get('td[aria-invalid="true"]')
            .should("have.length", 2)
            .then((cells) => {
                const firstCell = cells[0];
                const secondCell = cells[1];

                cy.contains("button", "Skicka").click();

                cy.wrap(firstCell).find("input").should("have.focus");

                cy.wrap(secondCell).should("have.attr", "aria-invalid", "true");
            });
    });
});
