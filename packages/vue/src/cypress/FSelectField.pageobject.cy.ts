import { FSelectField } from "../components";
import { FSelectFieldPageObject } from "./FSelectField.pageobject";

const selectField = new FSelectFieldPageObject(".select-field");

it("selectedOption() should get the currently selected option", () => {
    cy.mount(FSelectField, {
        slots: {
            label: `Lorem ipsum dolor sit amet`,
            default: [
                `<option value="foo">Foo</option>`,
                `<option value="bar">Bar</option>`,
                `<option value="baz">Baz</option>`,
            ].join(""),
        },
    });
    selectField.dropdown().select("bar");
    selectField.selectedOption().should("have.text", "Bar");
    selectField.selectedOption().should("have.attr", "value", "bar");
});

it("listOfOptions() should return array of all available options", () => {
    cy.mount(FSelectField, {
        slots: {
            label: `Lorem ipsum dolor sit amet`,
            default: [
                `<option value="foo">Foo</option>`,
                `<option value="bar">Bar</option>`,
                `<option value="baz">Baz</option>`,
            ].join(""),
        },
    });
    selectField.listOfOptions().should("deep.equal", ["Foo", "Bar", "Baz"]);
});

it("listOfOptions() should trim options", () => {
    cy.mount(FSelectField, {
        slots: {
            label: `Lorem ipsum dolor sit amet`,
            default: [
                `<option value="foo"> Foo </option>`,
                `<option value="bar"> Bar </option>`,
                `<option value="baz"> Baz </option>`,
            ].join(""),
        },
    });
    selectField.listOfOptions().should("deep.equal", ["Foo", "Bar", "Baz"]);
});
