import { FProgressbarPageObject } from "../../../cypress";
import FProgressbarExample from "./FProgressbarExample.vue";

const increase = "[data-test=increase]";
const decrease = "[data-test=decrease]";
const progressbar = new FProgressbarPageObject();

describe("FProgressbarExample", () => {
    it("should have the state finished when progressbar has value 100 ", () => {
        cy.mount(FProgressbarExample);

        cy.get(increase).click();
        cy.get(increase).click();
        cy.get(increase).click();
        progressbar.progressStatus().should("be.equal", "finished");
        progressbar.progressStatus().should("not.be.equal", "pending");
        progressbar.progressStatus().should("not.be.equal", "inprogress");
        progressbar.value().should("be.equal", 100);

        // Verify that if progressbar is 100% and you click Increase button the value will still be 100
        cy.get(increase).click();
        progressbar.value().should("be.equal", 100);
    });

    it("should have the state pending and value equal to 0 ", () => {
        cy.mount(FProgressbarExample);

        cy.get(decrease).click();
        cy.get(decrease).click();
        progressbar.progressStatus().should("be.equal", "pending");
        progressbar.progressStatus().should("not.be.equal", "inprogress");
        progressbar.progressStatus().should("not.be.equal", "finished");
        progressbar.value().should("be.equal", 0);

        // Verify that if progressbar is 0% and you click Decrease button the value will still be 0
        cy.get(decrease).click();
        progressbar.value().should("be.equal", 0);
    });
});
