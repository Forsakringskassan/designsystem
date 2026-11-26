import { FSelectField, FTooltip } from "../components";
import { FSelectFieldPageObject } from "./FSelectField.pageobject";

const selectField = new FSelectFieldPageObject(".select-field");

it("el() should get root element", () => {
    const selectFieldEl = new FSelectFieldPageObject('[data-test="foobar"]');
    cy.mount({
        /* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- false positive (vue-tsc) */
        components: { FSelectField },
        template: /* HTML */ `
            <f-select-field v-test="'foobar'">
                <template #label> Lorem ipsum dolor sit amet </template>

                <option value="foo">Foo</option>
                <option value="bar">Bar</option>
                <option value="baz">Baz</option>
            </f-select-field>
        `,
    });
    selectFieldEl.el().should("exist");
});

it("dropdown() should get select element", () => {
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
    selectField.dropdown().should("have.prop", "tagName", "SELECT");
});

it("numberOfOptions() should get number of options", () => {
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
    selectField.numberOfOptions().should("be.equal", 3);
});

it("selectedValue() should get value of selected option", () => {
    cy.mount(FSelectField, {
        props: {
            modelValue: "baz-value",
        },
        slots: {
            label: `Lorem ipsum dolor sit amet`,
            default: [
                `<option value="foo-value">Foo</option>`,
                `<option value="bar-value">Bar</option>`,
                `<option value="baz-value">Baz</option>`,
            ].join(""),
        },
    });
    // Default value
    selectField.selectedValue().should("be.equal", "baz-value");
    selectField.dropdown().select("foo-value");
    selectField.selectedValue().should("be.equal", "foo-value");
});

it("arrowIcon() should get arrow icon", () => {
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
    selectField.arrowIcon().should("exist");
});

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

it("label should get label pageobject", () => {
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
    selectField.label.el().should("contain.text", "Lorem ipsum dolor sit amet");
});

it("tooltip should get tooltip pageobject", () => {
    cy.mount({
        /* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- false positive (vue-tsc) */
        components: { FSelectField, FTooltip },
        template: /* HTML */ `
            <f-select-field v-test="'foobar'">
                <template #label> Lorem ipsum dolor sit amet </template>
                <template #tooltip>
                    <f-tooltip screen-reader-text="sr-text">
                        <template #body> Tooltip body </template>
                    </f-tooltip>
                </template>
                <option value="foo">Foo</option>
                <option value="bar">Bar</option>
                <option value="baz">Baz</option>
            </f-select-field>
        `,
    });
    selectField.tooltip.iButton().should("be.visible");
    selectField.tooltip.iButton().click();
    selectField.tooltip.body().should("contain.text", "Tooltip body");
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
