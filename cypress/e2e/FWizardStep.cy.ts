import { MyOrderWizardStepPageobject } from "../pageobjects/wizardstep/MyOrderWizardStep.pageobject";
import { MyInfoWizardStepPageobject } from "../pageobjects/wizardstep/MyInfoWizardStep.pageobject";
import {
    FRUIT,
    FruitBasketWizardStepPageobject,
} from "../pageobjects/wizardstep/FruitBasketWizardStep.pageobject";
import { STATUS, FWizardPageobject } from "@fkui/vue/cypress";

describe("FWizardStep", () => {
    before(() => {
        cy.visit("/components/fwizard.html");
    });

    it("Should have a page object that can access any necessary elements", () => {
        const wizard = new FWizardPageobject(`[data-test=add-step] .wizard`);
        const stepBestallning = new MyOrderWizardStepPageobject(
            "[data-test=myOrderStep]",
        );
        const stepFruktkorg = new FruitBasketWizardStepPageobject(
            "[data-test=fruitBasketStep-1]",
        );
        const stepMinaUppgifter = new MyInfoWizardStepPageobject(
            "[data-test=myInfoStep]",
        );

        wizard.steps().should("have.length", 2);

        cy.log("FWizardStep: Min beställning");
        stepBestallning.status().should("be.equal", STATUS.open);
        stepBestallning.el().should("be.visible");

        stepBestallning.header.stepNumber().should("be.equal", "1");
        stepBestallning.header
            .stepOf()
            .should("have.trimmedText", "Steg 1 av 2");
        stepBestallning.header
            .title()
            .should("have.trimmedText", "Steg 1 av 2 Min beställning");
        stepBestallning.header.successIcon().should("not.be.visible");

        stepBestallning.addBasket().click();
        stepBestallning.header
            .stepOf()
            .should("have.trimmedText", "Steg 1 av 3");

        stepBestallning.continue().click();
        stepFruktkorg.waitOnOpen();
        stepBestallning.header.successIcon().should("be.visible");

        cy.log("FWizardStep: Fruktkorg");

        wizard.steps().should("have.length", 3);

        stepFruktkorg.status().should("be.equal", STATUS.open);
        stepFruktkorg.body().should("be.visible");

        /* ensures the animation is finished before continuing */
        stepFruktkorg.header.el().should("have.focus");

        stepFruktkorg.header.stepOf().should("have.trimmedText", "Steg 2 av 3");
        stepBestallning.status().should("eq", STATUS.done);
        stepFruktkorg.status().should("eq", STATUS.open);
        stepMinaUppgifter.status().should("eq", STATUS.pending);

        stepFruktkorg.body().should("be.visible");

        stepFruktkorg.nameOnGiftcard.label
            .el()
            .invoke("text")
            .should("match", /^[\s]?.*Namn på presentkort/);
        stepFruktkorg.nameOnGiftcard.enter("Kalle");

        stepFruktkorg.fruits.label
            .el()
            .invoke("text")
            .should("match", /^[\s]?.*Vad ska ingå i din fruktkorg?/);

        stepFruktkorg.continue().click();

        stepFruktkorg.errors.listItems().should("have.length", 1);

        stepFruktkorg.fruits.checkBox(FRUIT.banana).select();
        stepFruktkorg.fruits.checkBox(FRUIT.pineapple).select();
        stepFruktkorg.fruits.checkBox(FRUIT.other).select();

        stepFruktkorg.continue().click();
        stepFruktkorg.waitOnClose();
        stepFruktkorg.header.successIcon().should("be.visible");
        cy.log("FWizardStep: Mina uppgifter");
        stepMinaUppgifter.status().should("eq", STATUS.open);
        stepMinaUppgifter.myAddress().should("have.trimmedText", "Min adress");
        stepMinaUppgifter.continue().click();

        stepBestallning.status().should("eq", STATUS.done);
        stepFruktkorg.status().should("eq", STATUS.done);
        stepMinaUppgifter.status().should("eq", STATUS.done);
    });
});
