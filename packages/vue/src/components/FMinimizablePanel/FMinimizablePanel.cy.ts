import { FMinimizablePanelPageObject } from "../../cypress";
import Testbed from "./examples/FMinimizablePanelTestbed.vue";

const mobile = [500, 480] as [number, number];
const desktop = [640, 480] as [number, number];

const resizeVariants = { "resize enabled": true, "resize disabled": false };
const areaVariants = { "left area": "left", "right area": "right" };

const minimizablePanel = new FMinimizablePanelPageObject(
    "ce-minimizable-panel",
);

it("foo", () => {
    cy.mount(Testbed, {
        props: {
            area: "left",
            resize: false,
        },
    });
    minimizablePanel.toggleButton().click({ force: true });
    minimizablePanel.header().should("contain.text", "[header]");
    minimizablePanel.toggleButton().click({ force: true });
    minimizablePanel.header().should("not.exist");
});

describe("mobile", () => {
    for (const [resizeDescription, resize] of Object.entries(resizeVariants)) {
        for (const [areaDescription, area] of Object.entries(areaVariants)) {
            it(`should open and close properly in ${areaDescription} with ${resizeDescription}`, () => {
                cy.viewport(...mobile);
                cy.mount(Testbed, {
                    props: {
                        area,
                        resize,
                    },
                });

                minimizablePanel.header().should("not.exist");
                minimizablePanel.toggleButton().click({ force: true });
                minimizablePanel.header().should("contain.text", "[header]");
                // cy.toMatchScreenshot(); technical debt
                minimizablePanel.toggleButton().click({ force: true });
                minimizablePanel.header().should("not.exist");
            });
        }
    }
});

describe("desktop", () => {
    for (const [resizeDescription, resize] of Object.entries(resizeVariants)) {
        for (const [areaDescription, area] of Object.entries(areaVariants)) {
            it(`should open and close properly in ${areaDescription} with ${resizeDescription}`, () => {
                cy.viewport(...desktop);
                cy.mount(Testbed, {
                    props: {
                        area,
                        resize,
                    },
                });

                minimizablePanel.header().should("contain.text", "[header]");
                minimizablePanel.toggleButton().click({ force: true });
                minimizablePanel.header().should("not.exist");
                minimizablePanel.toggleButton().click({ force: true });
                minimizablePanel.header().should("contain.text", "[header]");
                //cy.toMatchScreenshot(); technical debt
            });
        }
    }
});
