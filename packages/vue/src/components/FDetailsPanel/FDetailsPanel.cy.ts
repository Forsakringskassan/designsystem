import { FDetailsPanelPageObject } from "../../cypress";
import Testbed from "./examples/FDetailsPanelTestbed.vue";
import Exclusive from "./examples/FDetailsPanelExclusive.vue";

const mobile = [500, 480] as [number, number];
const desktop = [640, 480] as [number, number];
const sizes = { mobile, desktop };

for (const [variant, size] of Object.entries(sizes)) {
    const detailsPanel = FDetailsPanelPageObject.fromName("example-panel");
    const button = "button";

    describe(variant, () => {
        it("should open and close properly in left area with resize enabled", () => {
            cy.viewport(...size);
            cy.mount(Testbed, {
                props: {
                    area: "left",
                    resize: true,
                },
            });
            detailsPanel.el().should("not.exist");
            cy.get(button).click();
            detailsPanel.el().should("exist");
            detailsPanel.header().should("contain.text", "[header]");
            detailsPanel
                .content()
                .should("contain.text", "[content]")
                .and("contain.text", JSON.stringify({ item: "foobar" }));
            detailsPanel.footer().should("contain.text", "[footer]");
            //cy.toMatchScreenshot(); technical debt
            detailsPanel.closeButton().click();
            detailsPanel.el().should("not.exist");
        });

        it("should open and close properly in right area with resize enabled", () => {
            cy.viewport(...size);
            cy.mount(Testbed, {
                props: {
                    area: "right",
                    resize: true,
                },
            });
            detailsPanel.el().should("not.exist");
            cy.get(button).click();
            detailsPanel.el().should("exist");
            detailsPanel.header().should("contain.text", "[header]");
            detailsPanel
                .content()
                .should("contain.text", "[content]")
                .and("contain.text", JSON.stringify({ item: "foobar" }));
            detailsPanel.footer().should("contain.text", "[footer]");
            //cy.toMatchScreenshot(); technical debt
            detailsPanel.closeButton().click();
            detailsPanel.el().should("not.exist");
        });

        it("should open and close properly in left area with resize disabled", () => {
            cy.viewport(...size);
            cy.mount(Testbed, {
                props: {
                    area: "left",
                    resize: false,
                },
            });
            detailsPanel.el().should("not.exist");
            cy.get(button).click();
            detailsPanel.el().should("exist");
            detailsPanel.header().should("contain.text", "[header]");
            detailsPanel
                .content()
                .should("contain.text", "[content]")
                .and("contain.text", JSON.stringify({ item: "foobar" }));
            detailsPanel.footer().should("contain.text", "[footer]");
            //cy.toMatchScreenshot(); technical debt
            detailsPanel.closeButton().click();
            detailsPanel.el().should("not.exist");
        });

        it("should open and close properly in right area with resize disabled", () => {
            cy.viewport(...size);
            cy.mount(Testbed, {
                props: {
                    area: "right",
                    resize: false,
                },
            });
            detailsPanel.el().should("not.exist");
            cy.get(button).click();
            detailsPanel.el().should("exist");
            detailsPanel.header().should("contain.text", "[header]");
            detailsPanel
                .content()
                .should("contain.text", "[content]")
                .and("contain.text", JSON.stringify({ item: "foobar" }));
            detailsPanel.footer().should("contain.text", "[footer]");
            //cy.toMatchScreenshot(); technical debt
            detailsPanel.closeButton().click();
            detailsPanel.el().should("not.exist");
        });
    });
}

describe("exclusive", () => {
    const detailsPanel1 = FDetailsPanelPageObject.fromName("example-panel-1");
    const detailsPanel2 = FDetailsPanelPageObject.fromName("example-panel-2");
    const detailsPanel3 = FDetailsPanelPageObject.fromName("example-panel-3");
    const detailsPanel4 = FDetailsPanelPageObject.fromName("example-panel-4");
    const button1 = "button:contains('Öppna panel 1')";
    const button2 = "button:contains('Öppna panel 2')";
    const button3 = "button:contains('Öppna panel 3')";
    const button4 = "button:contains('Öppna panel 4')";

    it("should open multiple panels in same area when exclusive is disabled", () => {
        cy.viewport(...desktop);
        cy.mount(Exclusive, {
            props: {
                exclusive: false,
            },
        });
        detailsPanel1.el().should("not.exist");
        detailsPanel2.el().should("not.exist");
        detailsPanel3.el().should("not.exist");
        detailsPanel4.el().should("not.exist");
        cy.get(button1).click();
        cy.get(button2).click();
        cy.get(button3).click();
        cy.get(button4).click();
        detailsPanel1.el().should("exist");
        detailsPanel2.el().should("exist");
        detailsPanel3.el().should("exist");
        detailsPanel4.el().should("exist");
        detailsPanel1.header().should("contain.text", "[panel 1]");
        detailsPanel2.header().should("contain.text", "[panel 2]");
        detailsPanel3.header().should("contain.text", "[panel 3]");
        detailsPanel4.header().should("contain.text", "[panel 4]");
        //cy.toMatchScreenshot(); technical debt
    });

    it("should only keep one panel per group open when exclusive is enabled", () => {
        cy.viewport(...desktop);
        cy.mount(Exclusive, {
            props: {
                exclusive: true,
            },
        });
        detailsPanel1.el().should("not.exist");
        detailsPanel2.el().should("not.exist");
        detailsPanel3.el().should("not.exist");
        detailsPanel4.el().should("not.exist");
        cy.get(button1).click();
        cy.get(button2).click();
        cy.get(button3).click();
        cy.get(button4).click();
        detailsPanel1.el().should("not.exist");
        detailsPanel2.el().should("exist");
        detailsPanel3.el().should("not.exist");
        detailsPanel4.el().should("exist");
        detailsPanel2.header().should("contain.text", "[panel 2]");
        detailsPanel4.header().should("contain.text", "[panel 4]");
        //cy.toMatchScreenshot(); technical debt
    });
});
