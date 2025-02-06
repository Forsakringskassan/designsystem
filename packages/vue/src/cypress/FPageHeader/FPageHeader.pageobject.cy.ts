import { FPageHeader } from "../../components";
import { FPageHeaderPageobject } from "./FPageHeader.pageobject";

const pageHeader = new FPageHeaderPageobject();

it("`el()` should get root element", () => {
    cy.mount(FPageHeader);
    pageHeader.el().should("exist");
});

it("`skipLink()` should get skiplink if `skipLink` prop is non-empty", () => {
    cy.mount(FPageHeader, {
        props: {
            skipLink: "#foo",
        },
        slots: {
            "skip-link-text": "foo",
        },
    });
    pageHeader.skipLink().contains("foo");
});

it("`applicationName()` should get `default` slot wrapper element", () => {
    cy.mount(FPageHeader, {
        slots: {
            default: "foo",
        },
    });
    pageHeader.applicationName().contains("foo");
});

it("`rightSlot()` should get `right` slot wrapper element", () => {
    cy.mount(FPageHeader, {
        slots: {
            right: "foo",
        },
    });
    pageHeader.rightSlot().contains("foo");
});

it("`logoSlot()` should get `logo` slot wrapper element", () => {
    cy.mount(FPageHeader, {
        slots: {
            logo: "foo",
        },
    });
    pageHeader.logoSlot().contains("foo");
});

it("`logoSlot()` should not be able to get `logo` slot wrapper element if slot is not used", () => {
    cy.mount(FPageHeader);

    pageHeader.logoSlot().should("not.exist");
});
