import { FExpandablePanel } from "../components";
import { FExpandablePanelPageObject } from "./FExpandablePanel.pageobject";

const panel = new FExpandablePanelPageObject();
const title = "Title";

it("el() should get root element", () => {
    cy.mount(FExpandablePanel, {
        slots: {
            title,
        },
    });
    panel.el().should("exist");
});

it("body() should get body element", () => {
    cy.mount(FExpandablePanel, {
        slots: {
            default: "Lorem ipsum",
            title,
        },
    });
    panel.body().should("contain.text", "Lorem ipsum");
});

it("expandCollapseIcon() expand icon", () => {
    cy.mount(FExpandablePanel, {
        slots: {
            title,
        },
    });
    panel.expandCollapseIcon().should("exist");
});

it("header() should get header button", () => {
    cy.mount(FExpandablePanel, {
        slots: {
            title,
        },
    });
    panel.header().should("have.prop", "tagName", "BUTTON");
    panel.header().should("contain.text", "Title");
});

describe("isOpen()", () => {
    it("should be true when panel is open", () => {
        cy.mount(FExpandablePanel, {
            props: {
                expanded: true,
            },
            slots: {
                title,
            },
        });
        panel.isOpen().should("be.true");
    });

    it("should be false when panel is closed", () => {
        cy.mount(FExpandablePanel, {
            slots: {
                title,
            },
        });
        panel.isOpen().should("be.false");
    });
});

describe("notificationIcon()", () => {
    it("should get notification icon when notifications is above zero", () => {
        cy.mount(FExpandablePanel, {
            props: {
                notifications: 1,
            },
            slots: {
                title,
            },
        });
        panel.notificationIcon().should("contain.text", "1 notifiering");
    });

    it("should not get notification icon when notifications are zero", () => {
        cy.mount(FExpandablePanel, {
            slots: {
                title,
            },
        });
        panel.notificationIcon().should("not.exist");
    });
});

it("numberOfNotifications() should get correct number of notifications", () => {
    cy.mount(FExpandablePanel, {
        props: {
            notifications: 42,
        },
        slots: {
            title,
        },
    });
    panel.numberOfNotifications().should("equal", 42);
});

describe("relatedInfo()", () => {
    it("should get container for outside slot when slot is used", () => {
        cy.mount(FExpandablePanel, {
            slots: {
                title,
                outside: "Lorem ipsum",
            },
        });
        panel.relatedInfo().should("contain.text", "Lorem ipsum");
    });

    it("should not get container for outside slot when slot is not used", () => {
        cy.mount(FExpandablePanel, {
            slots: {
                title,
            },
        });
        panel.relatedInfo().should("not.exist");
    });
});
