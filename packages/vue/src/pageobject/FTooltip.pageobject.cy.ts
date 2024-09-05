import { FTooltip } from "../components";
import { FTooltipPageObject } from "./FTooltip.pageobject";

const pageobject = new FTooltipPageObject(".tooltip");

beforeEach(() => {
    cy.mount(FTooltip, {
        props: {
            modelValue: true,
            screenReaderText: "Lorem ipsum dolor sit amet",
        },
        slots: {
            header: "Header slot",
            body: "Body slot",
        },
    });
});

describe("FTooltipPageObject", () => {
    it("el()", () => {
        pageobject.el().should("exist");
    });

    it("iButton()", () => {
        pageobject.iButton().should("exist");
        pageobject
            .iButton()
            .should("contain.text", "Lorem ipsum dolor sit amet");
    });

    it("header()", () => {
        pageobject.header().should("exist");
        pageobject.header().should("contain.text", "Header slot");
    });

    it("closeButton()", () => {
        pageobject.closeButton().should("exist");
    });
});

describe("deprecated methods", () => {
    it("content().closeButtonTop()", () => {
        pageobject.content().closeButtonTop().should("exist");
    });

    it("content().closeButtonBottom()", () => {
        pageobject.content().closeButtonBottom().should("exist");
    });

    it("content().heading()", () => {
        pageobject.content().heading().should("exist");
        pageobject.content().heading().should("contain.text", "Header slot");
    });

    it("content().brodtext()", () => {
        pageobject.content().brodtext().should("exist");
        pageobject.content().brodtext().should("contain.text", "Body slot");
    });
});
