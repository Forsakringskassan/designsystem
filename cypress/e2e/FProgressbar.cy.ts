import { FProgressbarPageObject } from "@fkui/vue/pageobject";
import { FProgressbarLocalePageObject } from "../pageobjects/FProgressbarLocale.pageobject";

describe("FProgressbar", () => {
    const progressBarItem = new FProgressbarPageObject(".progress");
    const progressBarLocalItem = new FProgressbarLocalePageObject(
        ".code-preview__preview",
    );

    beforeEach(() => {
        cy.visit("/components/ladda/fprogressbar.html");
    });

    it("Should have state inprogress from beginning", () => {
        progressBarItem.progressMeter().should("be.visible");
        progressBarItem.progressStatus().should("be.equal", "inprogress");
        progressBarItem.progressStatus().should("not.be.equal", "finished");
        progressBarItem.progressStatus().should("not.be.equal", "pending");
        progressBarItem.ariaValueNow().should("be.equal", "40");
    });

    it("Should have the state finished when progressbar has value 100 ", () => {
        progressBarLocalItem.increase().click();
        progressBarLocalItem.increase().click();
        progressBarLocalItem.increase().click();
        progressBarItem.progressStatus().should("be.equal", "finished");
        progressBarItem.progressStatus().should("not.be.equal", "pending");
        progressBarItem.progressStatus().should("not.be.equal", "inprogress");
        progressBarItem.ariaValueNow().should("be.equal", "100");

        // Verify that if progressbar is 100% and you click Increase button the value will still be 100
        progressBarLocalItem.increase().click();
        progressBarItem.ariaValueNow().should("be.equal", "100");
    });

    it("Should have the state pending and value equal to 0 ", () => {
        progressBarLocalItem.decrease().click();
        progressBarLocalItem.decrease().click();
        progressBarItem.progressStatus().should("be.equal", "pending");
        progressBarItem.progressStatus().should("not.be.equal", "inprogress");
        progressBarItem.progressStatus().should("not.be.equal", "finished");
        progressBarItem.ariaValueNow().should("be.equal", "0");

        // Verify that if progressbar is 0% and you click Decrease button the value will still be 0
        progressBarLocalItem.decrease().click();
        progressBarItem.ariaValueNow().should("be.equal", "0");
    });
});
