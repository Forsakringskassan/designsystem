import { FDialogueTreePageObject } from "../../cypress";
import FDialogueTreeExample from "./examples/ExampleFDialogueTree.vue";

function mount(): FDialogueTreePageObject {
    cy.mount(FDialogueTreeExample, {});
    return new FDialogueTreePageObject("body");
}

describe("Dialogue Tree", () => {
    describe("Snapshot tester", () => {
        beforeEach(() => {
            cy.viewport(1024, 600);
        });

        /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
        it.skip("should have approved design", () => {
            const dialogueTree = mount();
            dialogueTree.el().toMatchScreenshot();
        });
    });

    it("should have two options at start", () => {
        const dialogueTree = mount();

        dialogueTree.options().should("have.length", 2);
        dialogueTree.option(0).title().should("contain.text", "Option 1");
        dialogueTree.option(1).title().should("contain.text", "Option 2");
    });

    it("should be able to click through Dialogue Tree", () => {
        const dialogueTree = mount();

        dialogueTree.option(0).select();
        dialogueTree.option(0).button().should("have.focus");
        dialogueTree.option(0).title().should("contain.text", "Option (1.1)");
        dialogueTree.option(1).title().should("contain.text", "Option (1.2)");

        dialogueTree.option(0).select();
        dialogueTree.option(0).button().should("have.focus");
        dialogueTree.option(0).title().should("contain.text", "Option (1.1.1)");
        dialogueTree.option(1).title().should("contain.text", "Option (1.1.2)");

        dialogueTree.option(0).select();

        dialogueTree.option(0).el().should("not.exist");
        dialogueTree.el().should("contain", "formA");
        dialogueTree.el().get("input").should("have.focus");
    });

    it("should be clickable and get a new view when choosing second button", () => {
        const dialogueTree = mount();

        dialogueTree.option(1).select();
        dialogueTree.option(0).title().should("contain.text", "2.1");

        dialogueTree.option(1).select();
        dialogueTree.option(0).title().should("contain.text", "Option (2.2.1)");
        dialogueTree.option(1).title().should("contain.text", "Option (2.2.2)");

        dialogueTree.option(1).select();

        dialogueTree.el().should("contain", "formB");
        dialogueTree.el().get("input").should("have.focus");
    });
});
