import { defineComponent, useTemplateRef } from "vue";
import { FLabel, FTooltip } from "../components";
import { FTooltipPageObject } from "./FTooltip.pageobject";

const pageobject = new FTooltipPageObject(".tooltip");

describe("attached to label", () => {
    beforeEach(() => {
        cy.mount(
            defineComponent({
                template: /* HTML */ `
                    <f-label>
                        <template #default> Label </template>
                        <template #tooltip>
                            <f-tooltip
                                :model-value="true"
                                screen-reader-text="Lorem ipsum dolor sit amet"
                                header-tag="h1"
                            >
                                <template #header> Header slot </template>
                                <template #body> body slot </template>
                            </f-tooltip>
                        </template>
                    </f-label>
                `,
                components: { FLabel, FTooltip },
            }),
        );
    });

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

describe("attached to heading", () => {
    beforeEach(() => {
        cy.mount(
            defineComponent({
                template: /* HTML */ `
                    <div ref="attach">
                        <h2>Heading</h2>
                    </div>
                    <f-tooltip
                        :attach-to="attach"
                        :model-value="true"
                        screen-reader-text="Lorem ipsum dolor sit amet"
                        header-tag="h1"
                    >
                        <template #header> Header slot </template>
                        <template #body> body slot </template>
                    </f-tooltip>
                `,
                components: { FTooltip },
                setup() {
                    return { attach: useTemplateRef("attach") };
                },
            }),
        );
    });

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

describe("unattached", () => {
    beforeEach(() => {
        cy.mount(FTooltip, {
            props: {
                modelValue: true,
                screenReaderText: "Lorem ipsum dolor sit amet",
                headerTag: "h1",
            },
            slots: {
                header: "Header slot",
                body: "Body slot",
            },
        });
    });

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
