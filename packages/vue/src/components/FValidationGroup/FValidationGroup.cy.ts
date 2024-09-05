import { ValidationPlugin, TestPlugin } from "../../plugins";
import OptimizationExample from "./examples/OptimizationExample.vue";
import { OptimizationExamplePageobject } from "./examples/OptimizationExample.pageobject";

describe("FValidationGroup tests", () => {
    it("should list correct errors when components are added and removed", () => {
        const pageObject = new OptimizationExamplePageobject();

        cy.mount(OptimizationExample, {
            global: {
                plugins: [ValidationPlugin, TestPlugin],
            },
        });

        pageObject.fruktTextfield.input().type("Exceeds maxlength").blur();
        pageObject.favoritGruppErrorCount().should("have.text", "1");
        pageObject.godisRadioGroupField.select();
        pageObject.favoritGruppErrorCount().should("have.text", "0");
        pageObject.godisTextfield.input().type("Exceeds maxlength").blur();
        pageObject.favoritGruppErrorCount().should("have.text", "1");
        pageObject.godisTextfield.input().clear().type("Lakrits").blur();
        pageObject.favoritGruppErrorCount().should("have.text", "0");
        pageObject.fruktRadioGroupField.select();
        pageObject.favoritGruppErrorCount().should("have.text", "1");
    });
});
