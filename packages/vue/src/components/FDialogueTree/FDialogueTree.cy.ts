import { defineComponent } from "vue";
import { FDialogueTreePageObject } from "../../cypress";
import FDialogueTree from "./FDialogueTree.vue";
import FDialogueTreeExample, {
    dialogueTreeData,
} from "./examples/ExampleFDialogueTree.vue";

const dialogueTree = new FDialogueTreePageObject("body");

describe("Dialogue Tree", () => {
    describe("Snapshot tester", () => {
        beforeEach(() => {
            cy.viewport(1024, 600);
        });

        it("should have approved design visual", () => {
            cy.mount(FDialogueTreeExample);

            dialogueTree.el().toMatchScreenshot();
        });

        it("options should have right size on focus visual", () => {
            const Template = `<div style="background-color:#fff;padding:2rem">
             <f-dialogue-tree v-model="current" :dialogue-tree="tree"/>
             </div>`;
            const TestComponent = defineComponent({
                template: Template,
                components: { FDialogueTree },
                data() {
                    return {
                        tree: dialogueTreeData(
                            "Option 1 (in focus)",
                            "Option 2 (hover)",
                        ),
                        current: [
                            {
                                label: "",
                                lastStep: true,
                                steps: [],
                            },
                        ],
                    };
                },
            });
            cy.viewport(800, 600);
            cy.mount(TestComponent);

            dialogueTree.option(0).button().focus();
            dialogueTree.option(1).el().invoke("addClass", "is-hover");
            dialogueTree.el().toMatchScreenshot();
        });
    });

    it("should have two options at start", () => {
        cy.mount(FDialogueTreeExample);

        dialogueTree.options().should("have.length", 2);
        dialogueTree.option(0).title().should("contain.text", "Option 1");
        dialogueTree.option(1).title().should("contain.text", "Option 2");
    });

    it("should be able to click through Dialogue Tree", () => {
        cy.mount(FDialogueTreeExample);

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
        cy.mount(FDialogueTreeExample);

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
