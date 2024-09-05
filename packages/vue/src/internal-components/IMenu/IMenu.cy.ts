import { IMenuPageObject } from "../../pageobject";
import IMenuTestComponent from "./examples/IMenuTestComponent.vue";

const testViewportRes1 = { width: 500, height: 500 };
const testViewportRes2 = { width: 200, height: 500 };

// The overflowIndex data-testid that the IMenu test example catches and display
const overflowIndexDataTestid = '[data-testid="overflowIndex"]';

function mountAndGetPageObject(): IMenuPageObject {
    cy.mount(IMenuTestComponent);
    return new IMenuPageObject("#imenu");
}

beforeEach(() => {
    // Set viewport width and height to 500px
    cy.viewport(testViewportRes1.width, testViewportRes1.height);
});

describe("tests", () => {
    it("should emit overflow on mount", () => {
        mountAndGetPageObject();
        // Viewport width is 500px
        // Only 7 items will be displayed inside 500px, overflowIndex should be 7
        // overflowIndex is 7 because label8 has index 7 and is the menu item
        // that cannot be displayed within these 500px
        cy.get(overflowIndexDataTestid).should("have.text", "7");
    });

    it("should emit overflow on resize down", () => {
        mountAndGetPageObject();
        // Viewport width is 500px
        // Resize down the viewport width to 200px
        cy.viewport(testViewportRes2.width, testViewportRes2.height);

        // only 3 items will be displayed and the overflow happens for label3 with index 2
        cy.get(overflowIndexDataTestid).should("have.text", "2");
    });

    it("should emit overflow on resize up", () => {
        mountAndGetPageObject();
        // Viewport width is 500px
        // Resize down the viewport width to 200px
        cy.viewport(testViewportRes2.width, testViewportRes2.height);

        // only 3 items will be displayed and the overflow happens for label3 with index 2
        cy.get(overflowIndexDataTestid).should("have.text", "2");

        // Resize up the viewport width to 500px
        cy.viewport(testViewportRes1.width, testViewportRes1.height);

        // 7 items will be displayed and the overflowIndex should be 7 (index of label8)
        cy.get(overflowIndexDataTestid).should("have.text", "7");
    });
});

describe("pageobject", () => {
    it("should return the list of items from the menu", () => {
        const imenuPageObj = mountAndGetPageObject();
        imenuPageObj.el().should("to.exist");
        imenuPageObj.items().should("have.length", 8);
        imenuPageObj.item(0).should("contain.text", "label1");
        imenuPageObj.item(7).should("contain.text", "label8");
    });

    it("should return the selected item after click", () => {
        const imenuPageObj = mountAndGetPageObject();
        imenuPageObj.item(4).click();
        imenuPageObj.getSelectedItem().should("contain.text", "label5");
    });
});
