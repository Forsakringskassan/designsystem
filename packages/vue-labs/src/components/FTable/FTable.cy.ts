import { type VNode, ref } from "vue";
import { h } from "vue";
import { assertSet } from "@fkui/logic";
import { FValidationForm } from "@fkui/vue";
import { FSortFilterDatasetPageObject } from "@fkui/vue/cypress";
import { FTablePageObject } from "../../cypress";
import FTable from "./FTable.vue";
import FTableBulkTestExample from "./examples/FTableBulkTestExample.vue";
import { type FTableApi } from "./f-table-api";
import { defineTableColumns } from "./table-column";

const table = new FTablePageObject();

function renderButton(
    text: string,
    options?: { dataTest?: string; onClick?: () => void; type?: string },
): VNode {
    return h(
        "button",
        {
            type: options?.type ?? "button",
            "data-test": options?.dataTest,
            onClick: options?.onClick,
        },
        text,
    );
}

function getTestSelector(value: string): string {
    return `[data-test="${value}"]`;
}

describe("1.5 Separator", () => {
    const rows = [
        {
            rowheader: "A1",
            text: "A2",
            input: "A3",
            button: "A4",
            anchor: "A5",
            dropdown: "Foo",
            checkbox: false,
            radio: false,

            nested: [
                {
                    rowheader: "A-A1",
                    text: "A-A2",
                    input: "A-A3",
                    button: "A-A4",
                    anchor: "A-A5",
                    dropdown: "Foo",
                    checkbox: false,
                    radio: false,
                },
            ],
        },
        {
            rowheader: "B1",
            text: "B2",
            input: "B3",
            button: "B4",
            anchor: "B5",
            dropdown: "Foo",
            checkbox: false,
            radio: false,
        },
        {
            rowheader: "C1",
            text: "C2",
            input: "C3",
            button: "C4",
            anchor: "C5",
            dropdown: "Foo",
            checkbox: false,
            radio: false,

            nested: [
                {
                    rowheader: "C-A1",
                    text: "C-A2",
                    input: "C-A3",
                    button: "C-A4",
                    anchor: "C-A5",
                    dropdown: "Foo",
                    checkbox: false,
                    radio: false,
                },
                {
                    rowheader: "C-B1",
                    text: "C-B2",
                    input: "C-B3",
                    button: "C-B4",
                    anchor: "C-B5",
                    dropdown: "Foo",
                    checkbox: false,
                    radio: false,
                },
            ],
        },
    ];
    const columns = defineTableColumns<(typeof rows)[number]>([
        {
            type: "rowheader",
            header: "Rowheader",
            key: "rowheader",
        },
        {
            type: "text",
            header: "Text",
            key: "text",
        },
        {
            type: "text",
            header: "Input",
            key: "input",
            editable: true,
            label: () => "Input label",
            value: (row) => row.input,
        },
        {
            type: "button",
            header: "Button",
            key: "button",
            icon: "trashcan",
            text: (row) => row.button,
        },
        {
            header: "Anchor",
            type: "anchor",
            key: "anchor",
            href: "#",
            text: (row) => row.anchor,
        },
    ]);

    it("should have correct striped appearence (visual check) ", () => {
        const expandableAttribute = "nested";
        cy.mount(FTable<(typeof rows)[number]>, {
            props: { rows, columns, expandableAttribute, striped: true },
            slots: {
                caption:
                    "Verifierar att varannan rad är färgade även vid expanderade rader.",
            },
        });

        table.expandButton(3).click();
        table.expandButton(1).click();
        cy.toMatchScreenshot();
    });
});

describe("3.1 Feedback to user on invalid input components", () => {
    it("should not display error when initial value is valid", () => {
        interface Row {
            text: string;
        }

        const columns = defineTableColumns<Row>([
            {
                type: "text",
                header: "Max 5",
                editable: true,
                key: "text",
                label: () => "text",
                validation: {
                    maxLength: { length: 5 },
                },
            },
        ]);

        const rows: Row[] = [
            {
                text: "12345",
            },
        ];

        cy.mount(FTable<Row>, { props: { rows, columns } });

        table
            .cell({ row: 1, col: 1 })
            .should("not.have.class", "table-ng__cell--error");
    });

    it("should display error when initial value is invalid", () => {
        interface Row {
            text: string;
        }

        const columns = defineTableColumns<Row>([
            {
                type: "text",
                header: "Max 5",
                editable: true,
                key: "text",
                label: () => "text",
                validation: {
                    maxLength: { length: 5 },
                },
            },
        ]);

        const rows: Row[] = [
            {
                text: "123456",
            },
        ];

        cy.mount(FTable<Row>, { props: { rows, columns } });

        table
            .cell({ row: 1, col: 1 })
            .should("have.class", "table-ng__cell--error");
    });

    it("should display error when invalid value is entered", () => {
        interface Row {
            text: string;
        }

        const columns = defineTableColumns<Row>([
            {
                type: "text",
                header: "Max 5",
                editable: true,
                key: "text",
                label: () => "text",
                validation: {
                    maxLength: { length: 5 },
                },
            },
        ]);

        const rows: Row[] = [
            {
                text: "",
            },
        ];

        cy.mount(FTable<Row>, { props: { rows, columns } });

        table.cell({ row: 1, col: 1 }).click();
        cy.focused().type("123456");
        cy.focused().blur();
        table
            .cell({ row: 1, col: 1 })
            .should("have.class", "table-ng__cell--error");
    });

    it("should not display error while editing value", () => {
        interface Row {
            text: string;
        }

        const columns = defineTableColumns<Row>([
            {
                type: "text",
                header: "Max 5",
                editable: true,
                key: "text",
                label: () => "text",
                validation: {
                    maxLength: { length: 5 },
                },
            },
        ]);

        const rows: Row[] = [
            {
                text: "123456",
            },
        ];

        cy.mount(FTable<Row>, { props: { rows, columns } });

        table.cell({ row: 1, col: 1 }).click();
        table
            .cell({ row: 1, col: 1 })
            .should("have.class", "table-ng__cell--error");
        cy.focused().type("7");
        table
            .cell({ row: 1, col: 1 })
            .should("not.have.class", "table-ng__cell--error");
        cy.focused().blur();
        table
            .cell({ row: 1, col: 1 })
            .should("have.class", "table-ng__cell--error");
    });

    it("should not display error after correction", () => {
        interface Row {
            text: string;
        }

        const columns = defineTableColumns<Row>([
            {
                type: "text",
                header: "Max 5",
                editable: true,
                key: "text",
                label: () => "text",
                validation: {
                    maxLength: { length: 5 },
                },
            },
        ]);

        const rows: Row[] = [
            {
                text: "123456",
            },
        ];

        cy.mount(FTable<Row>, { props: { rows, columns } });

        table.cell({ row: 1, col: 1 }).click();
        table
            .cell({ row: 1, col: 1 })
            .should("have.class", "table-ng__cell--error");
        cy.focused().clear();
        cy.focused().type("12345");
        cy.focused().blur();
        table
            .cell({ row: 1, col: 1 })
            .should("not.have.class", "table-ng__cell--error");
    });

    it("should retain original value when directly pressing escape on started edit", () => {
        interface Row {
            text: string;
        }

        const columns = defineTableColumns<Row>([
            {
                type: "text",
                header: "Max 5",
                editable: true,
                key: "text",
                label: () => "text",
                validation: {
                    maxLength: { length: 5 },
                },
            },
        ]);

        const rows: Row[] = [
            {
                text: "12345",
            },
        ];

        cy.mount(FTable<Row>, { props: { rows, columns } });

        table
            .cell({ row: 1, col: 1 })
            .should("not.have.class", "table-ng__cell--error");
        table.cell({ row: 1, col: 1 }).click();
        table.cell({ row: 1, col: 1 }).get("input").should("have.focus");
        table.cell({ row: 1, col: 1 }).press("Escape");
        table.cell({ row: 1, col: 1 }).should("have.focus");
        table
            .cell({ row: 1, col: 1 })
            .should("not.have.class", "table-ng__cell--error");
    });

    it("should retain original value when editing valid value and pressing escape", () => {
        interface Row {
            text: string;
        }

        const columns = defineTableColumns<Row>([
            {
                type: "text",
                header: "Max 5",
                editable: true,
                key: "text",
                label: () => "text",
                validation: {
                    maxLength: { length: 5 },
                },
            },
        ]);

        const rows: Row[] = [
            {
                text: "12345",
            },
        ];

        cy.mount(FTable<Row>, { props: { rows, columns } });

        table
            .cell({ row: 1, col: 1 })
            .should("not.have.class", "table-ng__cell--error");
        table.cell({ row: 1, col: 1 }).click();
        cy.focused().type("6");
        cy.focused().press("Escape");
        table.cell({ row: 1, col: 1 }).should("have.focus");
        table.cell({ row: 1, col: 1 }).should("contain.text", "12345");
        table
            .cell({ row: 1, col: 1 })
            .should("not.have.class", "table-ng__cell--error");
    });

    it("should retain original value when editing invalid value and pressing escape", () => {
        interface Row {
            text: string;
        }

        const columns = defineTableColumns<Row>([
            {
                type: "text",
                header: "Max 5",
                editable: true,
                key: "text",
                label: () => "text",
                validation: {
                    maxLength: { length: 5 },
                },
            },
        ]);

        const rows: Row[] = [
            {
                text: "123456",
            },
        ];

        cy.mount(FTable<Row>, { props: { rows, columns } });

        table
            .cell({ row: 1, col: 1 })
            .should("have.class", "table-ng__cell--error");
        table.cell({ row: 1, col: 1 }).click();
        cy.focused().clear();
        cy.focused().press("Escape");
        table.cell({ row: 1, col: 1 }).should("have.focus");
        table.cell({ row: 1, col: 1 }).should("contain.text", "123456");
        table
            .cell({ row: 1, col: 1 })
            .should("have.class", "table-ng__cell--error");
    });

    it("should emit validation events when validation is used", () => {
        interface Row {
            text: string;
        }

        const columns = defineTableColumns<Row>([
            {
                type: "text:number",
                header: "Real validation",
                editable: true,
                key: "text",
                label: () => "text",
            },
        ]);

        const rows: Row[] = [
            {
                text: "1234",
            },
        ];

        const onValidity = cy.spy().as("onValidity");
        const onComponentValidity = cy.spy().as("onComponentValidity");
        cy.mount(FTable<Row>, {
            props: {
                rows,
                columns,
                onValidity,
                onComponentValidity,
            },
        });

        cy.get("@onValidity").should("have.been.called");
        cy.get("@onComponentValidity").should("have.been.called");

        onValidity.resetHistory();
        onComponentValidity.resetHistory();
        table.cell({ row: 1, col: 1 }).click();
        cy.focused().type("edit{enter}");

        cy.get("@onValidity").should("have.been.called");
        cy.get("@onComponentValidity").should("have.been.called");
    });

    it("should not emit validation events when no validation is used", () => {
        interface Row {
            text: string;
        }

        const columns = defineTableColumns<Row>([
            {
                type: "text",
                header: "Fake validation",
                editable: true,
                key: "text",
                label: () => "text",
            },
        ]);

        const rows: Row[] = [
            {
                text: "1234",
            },
        ];

        const onValidity = cy.spy().as("onValidity");
        const onComponentValidity = cy.spy().as("onComponentValidity");
        cy.mount(FTable<Row>, {
            props: {
                rows,
                columns,
                onValidity,
                onComponentValidity,
            },
        });

        cy.get("@onValidity").should("not.have.been.called");
        cy.get("@onComponentValidity").should("not.have.been.called");

        onValidity.resetHistory();
        onComponentValidity.resetHistory();
        table.cell({ row: 1, col: 1 }).click();
        cy.focused().type("edit{enter}");

        cy.get("@onValidity").should("not.have.been.called");
        cy.get("@onComponentValidity").should("not.have.been.called");
    });
});

describe("3.6 Feedback to user on table validation errors at submit", () => {
    it("should focus on first error when form is submitted", () => {
        interface Row {
            text: string;
        }

        const columns = defineTableColumns<Row>([
            {
                type: "text",
                header: "Max 5",
                editable: true,
                key: "text",
                label: () => "text",
                validation: {
                    maxLength: { length: 5 },
                },
            },
        ]);

        const rows: Row[] = [
            {
                text: "1234",
            },
            {
                text: "123456", // first invalid
            },
            {
                text: "12345",
            },
            {
                text: "1234567",
            },
        ];

        cy.mount(() =>
            h(FValidationForm, { useErrorList: false }, () => [
                h(FTable<Row>, { rows, columns }),
                renderButton("submit", { type: "submit" }),
            ]),
        );

        cy.get("button").click();

        table.cell({ row: 2, col: 1 }).should("have.focus");
    });
});

describe("6 Expandable table", () => {
    const rows = [
        { text: "A1", nested: [{ text: "A2" }, { text: "A3" }] },
        { text: "B1", nested: [{ text: "B2" }, { text: "B3" }] },
    ];

    const columns = defineTableColumns<(typeof rows)[number]>([
        {
            type: "text",
            header: "A",
            key: "text",
        },
    ]);

    const expandableAttribute = "nested";

    it("6.1 should expand row when pressing Enter on expand cell", () => {
        cy.mount(FTable<(typeof rows)[number]>, {
            props: { rows, columns, expandableAttribute },
        });

        table.expandButton(2).focus();
        table.expandButton(2).type("{enter}");
        table.expandButton(1).focus();
        table.expandButton(1).type("{enter}");

        table.rows().should("have.length", 6);
        table.cell({ row: 2, col: 2 }).should("contain.text", "A2");
        table.cell({ row: 3, col: 2 }).should("contain.text", "A3");

        table.cell({ row: 5, col: 2 }).should("contain.text", "B2");
        table.cell({ row: 6, col: 2 }).should("contain.text", "B3");
    });

    it("6.1 should expand row when pressing Space on expand cell", () => {
        cy.mount(FTable<(typeof rows)[number]>, {
            props: { rows, columns, expandableAttribute },
        });

        table.expandButton(2).focus();
        table.expandButton(2).press(Cypress.Keyboard.Keys.SPACE);

        table.expandButton(1).focus();
        table.expandButton(1).press(Cypress.Keyboard.Keys.SPACE);

        table.rows().should("have.length", 6);
        table.cell({ row: 2, col: 2 }).should("contain.text", "A2");
        table.cell({ row: 3, col: 2 }).should("contain.text", "A3");

        table.cell({ row: 5, col: 2 }).should("contain.text", "B2");
        table.cell({ row: 6, col: 2 }).should("contain.text", "B3");
    });

    describe("6.2 Keyboard navigation", () => {
        const navRows = [
            { text: "A1", nested: [{ text: "A2" }] },
            { text: "B1" },
        ];

        const navColumns = defineTableColumns<(typeof navRows)[number]>([
            {
                type: "text",
                header: "A",
                key: "text",
            },
            {
                type: "text",
                header: "B",
                key: "text",
            },
            {
                type: "text",
                header: "C",
                key: "text",
            },
        ]);

        it("should have correct arrow navigation in the expanded rows", () => {
            cy.mount(FTable<(typeof navRows)[number]>, {
                props: {
                    rows: navRows,
                    columns: navColumns,
                    expandableAttribute,
                },
            });

            table.expandButton(1).click();

            // column 1
            cy.focused().press(Cypress.Keyboard.Keys.DOWN);
            table.cell({ row: 2, col: 1 }).should("have.focus");
            cy.focused().press(Cypress.Keyboard.Keys.DOWN);
            table.cell({ row: 3, col: 1 }).should("have.focus");

            // column 2
            cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
            table.cell({ row: 3, col: 2 }).should("have.focus");
            cy.focused().press(Cypress.Keyboard.Keys.UP);
            table.cell({ row: 2, col: 2 }).should("have.focus");
            cy.focused().press(Cypress.Keyboard.Keys.UP);
            table.cell({ row: 1, col: 2 }).should("have.focus");

            // column 3
            cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
            table.cell({ row: 1, col: 3 }).should("have.focus");
            cy.focused().press(Cypress.Keyboard.Keys.DOWN);
            table.cell({ row: 2, col: 3 }).should("have.focus");
            cy.focused().press(Cypress.Keyboard.Keys.DOWN);
            table.cell({ row: 3, col: 3 }).should("have.focus");

            // row
            cy.focused().press(Cypress.Keyboard.Keys.UP);
            table.cell({ row: 2, col: 3 }).should("have.focus");
            cy.focused().press(Cypress.Keyboard.Keys.LEFT);
            table.cell({ row: 2, col: 2 }).should("have.focus");
            cy.focused().press(Cypress.Keyboard.Keys.LEFT);
            table.cell({ row: 2, col: 1 }).should("have.focus");
        });

        it("should have correct arrow navigation in custom expanded row", () => {
            cy.mount(FTable<(typeof navRows)[number]>, {
                props: {
                    rows: navRows,
                    columns: navColumns,
                    expandableAttribute,
                },
                slots: { expandable: "Foo" },
            });

            table.expandButton(1).click();

            // column 1
            cy.focused().press(Cypress.Keyboard.Keys.DOWN);
            table.cell({ row: 2, col: 1 }).should("have.focus");
            cy.focused().press(Cypress.Keyboard.Keys.DOWN);
            table.cell({ row: 3, col: 1 }).should("have.focus");

            // column 2
            cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
            table.cell({ row: 3, col: 2 }).should("have.focus");
            cy.focused().press(Cypress.Keyboard.Keys.UP);
            table.cell({ row: 2, col: 2 }).should("have.focus");
            cy.focused().press(Cypress.Keyboard.Keys.UP);
            table.cell({ row: 1, col: 2 }).should("have.focus");

            // column 3
            cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
            table.cell({ row: 1, col: 3 }).should("have.focus");
            cy.focused().press(Cypress.Keyboard.Keys.DOWN);
            table.cell({ row: 2, col: 2 }).should("have.focus");
            cy.focused().press(Cypress.Keyboard.Keys.DOWN);
            table.cell({ row: 3, col: 3 }).should("have.focus");
        });
    });

    describe("6.3 Collapse expanded row", () => {
        const rows = [
            { text: "A1", nested: [{ text: "A2" }, { text: "A3" }] },
            { text: "B1", nested: [{ text: "B2" }, { text: "B3" }] },
        ];

        const columns = defineTableColumns<(typeof rows)[number]>([
            {
                type: "rowheader",
                header: "A",
                key: "text",
            },
        ]);

        it("should collapse expanded row when pressing Enter on expand button", () => {
            cy.mount(FTable<(typeof rows)[number]>, {
                props: { rows, columns, expandableAttribute },
            });

            table.rows().should("have.length", 2);

            table.expandButton(2).focus().type("{enter}");
            table.expandButton(1).focus().type("{enter}");

            table.rows().should("have.length", 6);
            //collapse
            table.expandButton(4).focus().type("{enter}");
            table.expandButton(1).focus().type("{enter}");

            table.rows().should("have.length", 2);
        });

        it("should collapse expanded row when pressing Space on expand button", () => {
            cy.mount(FTable<(typeof rows)[number]>, {
                props: { rows, columns, expandableAttribute },
            });

            table.rows().should("have.length", 2);

            table.expandButton(2).focus();
            table.expandButton(2).press(Cypress.Keyboard.Keys.SPACE);
            table.expandButton(1).focus();
            table.expandButton(1).press(Cypress.Keyboard.Keys.SPACE);

            table.rows().should("have.length", 6);

            //collapse
            table.expandButton(4).focus();
            table.expandButton(4).press(Cypress.Keyboard.Keys.SPACE);
            table.expandButton(1).focus();
            table.expandButton(1).press(Cypress.Keyboard.Keys.SPACE);

            table.rows().should("have.length", 2);
        });
    });
});

describe("5 tabstop", () => {
    interface TabstopRow {
        foo: string;
        bar: string;
    }

    function mountTabstopTestbed(): {
        buttonBeforeTable: string;
        buttonAfterTable: string;
        buttonAddRow: string;
        buttonRemoveRow: string;
    } {
        const rows = ref([
            { foo: "1", bar: "alpha" },
            { foo: "2", bar: "beta" },
            { foo: "3", bar: "gamma" },
        ]);

        const columns = defineTableColumns<TabstopRow>([
            {
                type: "text",
                header: "foo",
                key: "foo",
            },
            {
                type: "button",
                header: "remove",
                icon: "trashcan",
                text(row) {
                    return row.bar;
                },
                onClick(row) {
                    rows.value.splice(rows.value.indexOf(row), 1);
                },
            },
        ]);

        const buttonBeforeTable = "button-before-table";
        const buttonAfterTable = "button-after-table";
        const buttonAddRow = "button-add-row";
        const buttonRemoveRow = "button-remove-row";
        const counter = ref(4);

        cy.mount(() =>
            h("div", [
                renderButton("Before table", { dataTest: buttonBeforeTable }),
                h(FTable<TabstopRow>, {
                    rows: rows.value,
                    columns,
                }),
                renderButton("After table", { dataTest: buttonAfterTable }),
                renderButton("Add row", {
                    dataTest: buttonAddRow,
                    onClick: () =>
                        rows.value.push({
                            foo: String(counter.value++),
                            bar: "Added row",
                        }),
                }),
                renderButton("Remove row", {
                    dataTest: buttonRemoveRow,
                    onClick: () => rows.value.shift(),
                }),
            ]),
        );

        return {
            buttonBeforeTable: getTestSelector(buttonBeforeTable),
            buttonAfterTable: getTestSelector(buttonAfterTable),
            buttonAddRow: getTestSelector(buttonAddRow),
            buttonRemoveRow: getTestSelector(buttonRemoveRow),
        };
    }

    function mountRowRemovalTestbed(): void {
        let api: FTableApi | undefined = undefined;

        const rows = ref([
            { foo: "1", bar: "alpha" },
            { foo: "2", bar: "beta" },
            { foo: "3", bar: "gamma" },
        ]);

        const columns = defineTableColumns<TabstopRow>([
            {
                type: "text",
                header: "foo",
                key: "foo",
            },
            {
                type: "button",
                header: "remove",
                icon: "trashcan",
                text(row) {
                    return row.bar;
                },
                onClick(row) {
                    assertSet(api);
                    api.withTabstopBehaviour("row-removal", () => {
                        rows.value.splice(rows.value.indexOf(row), 1);
                    });
                },
            },
        ]);

        cy.mount(() =>
            h(FTable<TabstopRow>, {
                rows: rows.value,
                columns,
                ref: (exposed: unknown) => (api = exposed as FTableApi),
            }),
        );
    }

    interface NavigationRow {
        staticText: string;
        editText: string;
        select: string;
        checkbox: boolean;
        radio: boolean;
        button: string;
        anchor: string;
        custom: string;
        children?: NavigationRow[];
    }

    function mountNavigationTestbed(slots?: object): {
        buttonBeforeTable: string;
    } {
        const rows = ref([
            {
                staticText: "awesome static text",
                editText: "awesome edit text",
                select: "awesome option",
                checkbox: true,
                radio: true,
                button: "awesome button",
                anchor: "awesome anchor",
                custom: "awesome custom",
                children: [
                    {
                        staticText: "child static text",
                        editText: "child edit text",
                        select: "another option",
                        checkbox: false,
                        radio: false,
                        button: "child button",
                        anchor: "child anchor",
                        custom: "child custom",
                    },
                ],
            },
        ]);

        const columns = defineTableColumns<NavigationRow>([
            {
                type: "text",
                header: "static text header",
                key: "staticText",
            },
            {
                type: "text",
                editable: true,
                header: "edit text header",
                key: "editText",
                label: () => "edit text label",
            },
            {
                type: "select",
                header: "select header",
                options: ["awesome option", "catastrophic option"],
                key: "select",
                label: () => "select label",
            },
            {
                type: "checkbox",
                header: "checkbox header",
                key: "checkbox",
                editable: true,
                label: () => "checkbox label",
            },
            {
                type: "radio",
                header: "radio header",
                key: "radio",
                label: () => "radio label",
            },
            {
                type: "button",
                header: "button header",
                text(row) {
                    return row.button;
                },
                icon: "bell",
            },
            {
                type: "anchor",
                header: "anchor header",
                text(row) {
                    return row.anchor;
                },
                href: "awesome href",
            },
        ]);

        const buttonBeforeTable = "button-before-table";

        cy.mount(() =>
            h("div", [
                renderButton("Before table", { dataTest: buttonBeforeTable }),
                h(
                    FTable<NavigationRow>,
                    {
                        rows: rows.value,
                        columns,
                        expandableAttribute: "children",
                        selectable: "multi",
                    },
                    slots,
                ),
            ]),
        );

        return {
            buttonBeforeTable: getTestSelector(buttonBeforeTable),
        };
    }

    it("5.1 should default to first datacell", () => {
        const { buttonBeforeTable } = mountTabstopTestbed();
        cy.get(buttonBeforeTable).focus();
        cy.focused().press(Cypress.Keyboard.Keys.TAB);

        table.cell({ row: 1, col: 1 }).should("have.focus");
    });

    it("5.1 should leave table on tab", () => {
        const { buttonBeforeTable, buttonAfterTable } = mountTabstopTestbed();
        cy.get(buttonBeforeTable).focus();
        cy.focused().press(Cypress.Keyboard.Keys.TAB);
        cy.focused().press(Cypress.Keyboard.Keys.TAB);
        cy.get(buttonAfterTable).should("have.focus");
    });

    it("5.2 should only have one tabstop", () => {
        const { buttonBeforeTable } = mountTabstopTestbed();
        table.cell({ row: 2, col: 1 }).as("td").click();
        cy.focused().press(Cypress.Keyboard.Keys.TAB);
        cy.focused().should("contain.text", "After table");
        cy.get(buttonBeforeTable).focus();
        cy.focused().press(Cypress.Keyboard.Keys.TAB);
        cy.get("@td").should("have.focus");
    });

    it("5.3 should have tabstop on focused element", () => {
        const { buttonBeforeTable } = mountTabstopTestbed();
        cy.get(buttonBeforeTable).focus();
        cy.focused().press(Cypress.Keyboard.Keys.TAB);
        cy.focused().should("contain.text", "1");
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        cy.focused().should("contain.text", "alpha");
    });

    it("5.4 should fallback according to first-cell mode when current tabstop is removed", () => {
        const { buttonBeforeTable } = mountTabstopTestbed();
        cy.get(buttonBeforeTable).focus();
        cy.focused().press(Cypress.Keyboard.Keys.TAB);
        cy.focused().should("contain.text", "1");
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        cy.focused().click();
        cy.focused().should("contain.text", "2");
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        cy.focused().click();
        cy.focused().should("contain.text", "3");
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        cy.focused().click();
        cy.focused().should("contain.text", "Tabellen är tom");
    });

    it("5.5 should fallback according to sticky mode when current tabstop is removed", () => {
        mountRowRemovalTestbed();
        table.cell({ row: 2, col: 2 }).click();
        cy.focused().should("contain.text", "alpha");
        cy.focused().click();
        cy.focused().should("contain.text", "gamma");
        cy.focused().click();
        cy.focused().should("contain.text", "Tabellen är tom");
    });

    it("should not set focus when removing rows from outside table", () => {
        const { buttonRemoveRow } = mountTabstopTestbed();
        cy.get(buttonRemoveRow).focus();
        cy.focused().click();
        cy.get(buttonRemoveRow).should("be.focused");
        cy.focused().click();
        cy.get(buttonRemoveRow).should("be.focused");
        cy.focused().click();
        cy.get(buttonRemoveRow).should("be.focused");
    });

    it("should set tabstop to first cell when a first row is added", () => {
        const { buttonBeforeTable, buttonAddRow } = mountTabstopTestbed();
        cy.get(buttonBeforeTable).focus();
        cy.focused().press(Cypress.Keyboard.Keys.TAB);
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        cy.focused().click();
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        cy.focused().click();
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        cy.focused().click();
        cy.get(buttonAddRow).click();
        table.cell({ row: 1, col: 1 }).should("have.attr", "tabindex", "0");
    });

    it("should set correct tabstop for all types of headers and cells on navigation", () => {
        const { buttonBeforeTable } = mountNavigationTestbed();
        cy.get(buttonBeforeTable).focus();
        cy.focused().press(Cypress.Keyboard.Keys.TAB);
        // {1, 1}: expand button
        cy.focused().click();
        cy.focused()
            .should("have.prop", "tagName", "BUTTON")
            .should("have.attr", "aria-expanded", "true")
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        // {1, 2}: selectable checkbox
        cy.focused().click();
        cy.focused()
            .should("have.prop", "tagName", "INPUT")
            .should("have.attr", "type", "checkbox")
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        // {1, 3}: static text
        cy.focused()
            .should("have.prop", "tagName", "TD")
            .should("contain.text", "awesome static text")
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        // {1, 4}: edit text
        cy.focused()
            .should("have.prop", "tagName", "TD")
            .should("contain.text", "awesome edit text")
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        // {1, 5}: select
        cy.focused()
            .should("have.prop", "tagName", "TD")
            .should("contain.text", "awesome option")
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        // {1, 6}: checkbox
        cy.focused()
            .should("have.prop", "tagName", "INPUT")
            .should("have.attr", "type", "checkbox")
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        // {1, 7}: radio
        cy.focused()
            .should("have.prop", "tagName", "INPUT")
            .should("have.attr", "type", "radio")
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        // {1, 8}: button
        cy.focused()
            .should("have.prop", "tagName", "BUTTON")
            .should("contain.text", "awesome button")
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        // {1, 9}: anchor
        cy.focused()
            .should("have.prop", "tagName", "A")
            .should("contain.text", "awesome anchor")
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.UP);
        // {0, 9}: anchor header
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "anchor header", true)
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.LEFT);
        // {0, 8}: button header
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "button header", true)
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.LEFT);
        // {0, 7}: radio header
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "radio header", true)
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.LEFT);
        // {0, 6}: checkbox header
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "checkbox header", true)
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.LEFT);
        // {0, 5}: select header
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "select header", true)
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.LEFT);
        // {0, 4}: edit text header
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "edit text header", true)
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.LEFT);
        // {0, 3}: static text header
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "static text header", true)
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.LEFT);
        // {0, 2}: selectable header
        cy.focused()
            .should("have.prop", "tagName", "INPUT")
            .should("have.attr", "type", "checkbox")
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.LEFT);
        // {0, 1}: expand header (empty)
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("not.have.text")
            .should("have.attr", "tabindex", 0);
        cy.focused().press(Cypress.Keyboard.Keys.DOWN);
        // {1, 1}: expand
        cy.focused().press(Cypress.Keyboard.Keys.DOWN);
        // {2, 1}: expand for child (empty)
        cy.focused()
            .should("have.prop", "tagName", "TD")
            .should("not.have.text")
            .should("have.attr", "tabindex", 0);
    });

    it("should set correct tabstop for all types of headers and cells on click", () => {
        mountNavigationTestbed();

        // {1, 1}: expand button
        table.cell({ row: 1, col: 1 }).click();
        cy.focused()
            .should("have.prop", "tagName", "BUTTON")
            .should("have.attr", "aria-expanded", "true")
            .should("have.attr", "tabindex", 0);
        // {1, 2}: selectable checkbox
        table.cell({ row: 1, col: 2 }).click();
        cy.focused()
            .should("have.prop", "tagName", "INPUT")
            .should("have.attr", "type", "checkbox")
            .should("have.attr", "tabindex", 0);
        // {1, 3}: static text
        table.cell({ row: 1, col: 3 }).click();
        cy.focused()
            .should("have.prop", "tagName", "TD")
            .should("contain.text", "awesome static text")
            .should("have.attr", "tabindex", 0);
        // {1, 4}: edit text
        table.cell({ row: 1, col: 4 }).click();
        cy.focused()
            .should("have.prop", "tagName", "INPUT")
            .should("have.attr", "tabindex", 0);
        // {1, 5}: select
        table.cell({ row: 1, col: 5 }).click();
        cy.focused()
            .should("have.prop", "tagName", "TD")
            .should("contain.text", "awesome option")
            .should("have.attr", "tabindex", 0);
        // {1, 6}: checkbox
        table.cell({ row: 1, col: 6 }).click();
        cy.focused()
            .should("have.prop", "tagName", "INPUT")
            .should("have.attr", "type", "checkbox")
            .should("have.attr", "tabindex", 0);
        // {1, 7}: radio
        table.cell({ row: 1, col: 7 }).click();
        cy.focused()
            .should("have.prop", "tagName", "INPUT")
            .should("have.attr", "type", "radio")
            .should("have.attr", "tabindex", 0);
        // {1, 8}: button
        table.cell({ row: 1, col: 8 }).click();
        cy.focused()
            .should("have.prop", "tagName", "BUTTON")
            .should("contain.text", "awesome button")
            .should("have.attr", "tabindex", 0);
        // {0, 9}: anchor header
        table.header(9).click();
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "anchor header", true)
            .should("have.attr", "tabindex", 0);
        // {0, 8}: button header
        table.header(8).click();
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "button header", true)
            .should("have.attr", "tabindex", 0);
        // {0, 7}: radio header
        table.header(7).click();
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "radio header", true)
            .should("have.attr", "tabindex", 0);
        // {0, 6}: checkbox header
        table.header(6).click();
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "checkbox header", true)
            .should("have.attr", "tabindex", 0);
        // {0, 5}: select header
        table.header(5).click();
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "select header", true)
            .should("have.attr", "tabindex", 0);
        // {0, 4}: edit text header
        table.header(4).click();
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "edit text header", true)
            .should("have.attr", "tabindex", 0);
        // {0, 3}: static text header
        table.header(3).click();
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("contain.text", "static text header", true)
            .should("have.attr", "tabindex", 0);
        // {0, 2}: selectable header
        table.header(2).click();
        cy.focused()
            .should("have.prop", "tagName", "INPUT")
            .should("have.attr", "type", "checkbox")
            .should("have.attr", "tabindex", 0);
        // {0, 1}: expand header (empty)
        table.header(1).click();
        cy.focused()
            .should("have.prop", "tagName", "TH")
            .should("not.have.text")
            .should("have.attr", "tabindex", 0);
        // {2, 1}: expand for child (empty)
        table.cell({ row: 2, col: 1 }).click();
        cy.focused()
            .should("have.prop", "tagName", "TD")
            .should("not.have.text")
            .should("have.attr", "tabindex", 0);
    });

    it("should allow tab navigation in and out of expanded row", () => {
        const { buttonBeforeTable } = mountNavigationTestbed();

        table.expandButton(1).click();
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        cy.focused().press(Cypress.Keyboard.Keys.DOWN);
        table.cell({ row: 2, col: 3 }).should("have.focus");

        cy.focused().realPress(["Shift", "Tab"]);
        cy.get(buttonBeforeTable).should("have.focus");

        cy.focused().press(Cypress.Keyboard.Keys.TAB);
        table.cell({ row: 2, col: 3 }).should("have.focus");
    });

    it("should allow tab navigation in and out of custom expanded row", () => {
        const slots = { expandable: "Foo" };
        const { buttonBeforeTable } = mountNavigationTestbed(slots);

        table.expandButton(1).click();
        cy.focused().press(Cypress.Keyboard.Keys.RIGHT);
        cy.focused().press(Cypress.Keyboard.Keys.DOWN);
        table.cell({ row: 2, col: 2 }).should("have.focus");

        cy.focused().realPress(["Shift", "Tab"]);
        cy.get(buttonBeforeTable).should("have.focus");

        cy.focused().press(Cypress.Keyboard.Keys.TAB);
        table.cell({ row: 2, col: 2 }).should("have.focus");
    });
});

describe("Radio button single‑select functionality in table", () => {
    interface Row {
        text: string;
    }

    const rows = ref([{ text: "A1" }, { text: "A2" }]);

    const columns = defineTableColumns<Row>([
        {
            type: "text",
            header: "A",
            key: "text",
        },
    ]);

    it("should allow selecting only one row at a time by clicking its radio button", () => {
        cy.mount(FTable<Row>, {
            props: {
                rows: rows.value,
                columns,
                selectable: "single",
            },
        });
        table.selectInput(1).should("not.be.checked");
        table.selectInput(2).should("not.be.checked");

        table.selectInput(2).click();
        table.selectInput(1).should("not.be.checked");
        table.selectInput(2).should("be.checked").and("be.focused");

        table.selectInput(1).click();
        table.selectInput(1).should("be.checked").and("be.focused");
        table.selectInput(2).should("not.be.checked");
    });

    it("should allow selecting only one row using the space key", () => {
        const selectedRows: Row[] = [];
        cy.mount(FTable<Row>, {
            props: {
                rows: rows.value,
                columns,
                selectable: "single",
                selectedRows,
            },
        });
        table.selectInput(1).should("not.be.checked");
        table.selectInput(2).should("not.be.checked");

        table.selectInput(2).focus().press(Cypress.Keyboard.Keys.SPACE);

        table.selectInput(1).should("not.be.checked");
        table.selectInput(2).should("be.checked").and("be.focused");

        table.selectInput(1).focus().press(Cypress.Keyboard.Keys.SPACE);
        table.selectInput(1).should("be.checked").and("be.focused");
        table.selectInput(2).should("not.be.checked");
    });

    it("should render radio buttons, single select correctly (visual check)", () => {
        const selectedRows: Row[] = [];
        cy.mount(FTable<Row>, {
            props: {
                rows: rows.value,
                columns,
                selectable: "single",
                selectedRows,
            },
            slots: {
                caption:
                    "Verifierar att radioknappar är renderade korrekt vid enkelval.",
            },
        });

        table.selectInput(2).focus().press(Cypress.Keyboard.Keys.SPACE);
        cy.toMatchScreenshot();
    });

    it("should not have bulk operation for single select", () => {
        const selectedRows: Row[] = [];
        cy.mount(FTable<Row>, {
            props: {
                rows: rows.value,
                columns,
                selectable: "single",
                selectedRows,
            },
        });

        table.selectHeaderInput().should("not.exist");
    });
});

describe("7 Bulk Operation ", () => {
    describe("7.2 Bulk Operation Checkbox States", () => {
        interface Row {
            text: string;
        }

        const rows = ref([{ text: "A1" }, { text: "A2" }]);

        const columns = defineTableColumns<Row>([
            {
                type: "text",
                header: "A",
                key: "text",
            },
        ]);

        it("should show indeterminate state when some rows are selected (visual check)", () => {
            const selectedRows: Row[] = [];
            cy.mount(FTable<Row>, {
                props: {
                    rows: rows.value,
                    columns,
                    selectable: "multi",
                    selectedRows,
                },
                slots: {
                    caption:
                        "Verifierar att övre kryssrutan är delvis vald när inte alla rader är valda.",
                },
            });

            table.selectInput(1).focus().click();
            cy.toMatchScreenshot();
        });

        it("should show state when selected with click", () => {
            const selectedRows: Row[] = [];
            cy.mount(FTable<Row>, {
                props: {
                    rows: rows.value,
                    columns,
                    selectable: "multi",
                    selectedRows,
                },
            });

            table
                .selectHeaderInput()
                .should("not.be.checked")
                .and("have.prop", "indeterminate", false);
            table.selectInput(1).should("not.be.checked");
            table.selectInput(2).should("not.be.checked");
            //select row
            table.selectInput(1).focus().click();

            table
                .selectHeaderInput()
                .should("not.be.checked")
                .and("have.prop", "indeterminate", true);

            table.selectInput(1).should("be.checked");
            table.selectInput(2).should("not.be.checked");
            //select all rows
            table.selectHeaderInput().focus().click();

            table
                .selectHeaderInput()
                .should("be.checked")
                .and("have.prop", "indeterminate", false);
            table.selectInput(1).should("be.checked");
            table.selectInput(2).should("be.checked");
            //deselect all rows
            table.selectHeaderInput().focus().click();

            table
                .selectHeaderInput()
                .should("not.be.checked")
                .and("have.prop", "indeterminate", false);
            table.selectInput(1).should("not.be.checked");
            table.selectInput(2).should("not.be.checked");
        });

        it("should show state when selected with space", () => {
            const selectedRows: Row[] = [];
            cy.mount(FTable<Row>, {
                props: {
                    rows: rows.value,
                    columns,
                    selectable: "multi",
                    selectedRows,
                },
            });
            //select row
            table.selectInput(1).focus().press(Cypress.Keyboard.Keys.SPACE);

            table
                .selectHeaderInput()
                .should("not.be.checked")
                .and("have.prop", "indeterminate", true);

            table.selectInput(1).should("be.checked");
            table.selectInput(2).should("not.be.checked");

            //select all rows
            table
                .selectHeaderInput()
                .focus()
                .press(Cypress.Keyboard.Keys.SPACE);

            table
                .selectHeaderInput()
                .should("be.checked")
                .and("have.prop", "indeterminate", false);
            table.selectInput(1).should("be.checked");
            table.selectInput(2).should("be.checked");
        });
    });

    describe("7.3 Row Selection Behavior with Filtering and Sorting", () => {
        it("should reset row selections when filtering is applied", () => {
            const sorter = new FSortFilterDatasetPageObject(
                ".sort-filter-dataset",
            );
            cy.mount(FTableBulkTestExample);
            table.selectInput(1).focus().click();
            table.selectInput(1).should("be.checked");

            table
                .selectHeaderInput()
                .should("not.be.checked")
                .and("have.prop", "indeterminate", true);

            sorter.textField.input().type("Ape");

            table.selectInput(1).should("not.be.checked");
            table
                .selectHeaderInput()
                .should("not.be.checked")
                .and("have.prop", "indeterminate", false);
        });

        it("should retains row selections when sorting is applied", () => {
            const sorter = new FSortFilterDatasetPageObject(
                '[data-test="filter"]',
            );

            cy.mount(FTableBulkTestExample);

            table.selectInput(2).focus().click();
            table.selectInput(2).should("be.checked");
            table
                .selectHeaderInput()
                .should("not.be.checked")
                .and("have.prop", "indeterminate", true);
            //sort ascending
            table.header(2).click();
            table.selectInput(2).should("be.checked");
            table
                .selectHeaderInput()
                .should("not.be.checked")
                .and("have.prop", "indeterminate", true);
            //sort descending
            table.header(2).click();
            table.selectInput(1).should("be.checked");
            table
                .selectHeaderInput()
                .should("not.be.checked")
                .and("have.prop", "indeterminate", true);
            //sort ascending
            sorter.selectField.dropdown().select("Text (stigande)");
            table.selectInput(2).should("be.checked");
            table
                .selectHeaderInput()
                .should("not.be.checked")
                .and("have.prop", "indeterminate", true);
            //sort descending
            sorter.selectField.dropdown().select("Text (fallande)");
            table.selectInput(1).should("be.checked");
            table
                .selectHeaderInput()
                .should("not.be.checked")
                .and("have.prop", "indeterminate", true);
        });
    });

    describe("7.4 Bulk selection in expandable", () => {
        interface Row {
            text: string;
            expandableRows?: Row[];
        }

        const rows = ref([
            { text: "A1", expandableRows: [{ text: "A2" }] },
            { text: "B1" },
            { text: "C1", expandableRows: [{ text: "C2" }] },
        ]);

        const columns = defineTableColumns<Row>([
            {
                type: "text",
                header: "A",
                key: "text",
            },
            {
                type: "text",
                header: "B",
                key: "text",
            },
        ]);

        it("should allow selecting all top-level rows in expandable table", () => {
            const selectedRows: Row[] = [];
            cy.mount(FTable<Row>, {
                props: {
                    rows: rows.value,
                    columns,
                    expandableAttribute: "expandableRows",
                    selectable: "multi",
                    selectedRows,
                },
            });

            table.expandButton(3).click();
            table.expandButton(1).click();

            table.selectHeaderInput().focus().click();

            table
                .selectHeaderInput()
                .should("be.checked")
                .and("have.prop", "indeterminate", false);
            table.selectInput(1).should("be.checked");
            table.cell({ row: 2, col: 2 }).should("be.empty");
            table.selectInput(3).should("be.checked");
            table.selectInput(4).should("be.checked");
            table.cell({ row: 5, col: 2 }).should("be.empty");
        });

        it("should allow selecting top-level row in expandable table", () => {
            const selectedRows: Row[] = [];
            cy.mount(FTable<Row>, {
                props: {
                    rows: rows.value,
                    columns,
                    expandableAttribute: "expandableRows",
                    selectable: "multi",
                    selectedRows,
                },
            });

            table.expandButton(3).click();
            table.expandButton(1).click();
            table.selectInput(1).focus().click();

            table
                .selectHeaderInput()
                .should("not.be.checked")
                .and("have.prop", "indeterminate", true);

            table.selectInput(1).should("be.checked");
            table.cell({ row: 2, col: 2 }).should("be.empty");
            table.selectInput(3).should("not.be.checked");
            table.selectInput(4).should("not.be.checked");
            table.cell({ row: 5, col: 2 }).should("be.empty");
        });

        describe("7.7 Dataset change resets selection ", () => {
            it("should clear all selected rows when row is removed or added", () => {
                cy.mount(FTableBulkTestExample);

                table.selectHeaderInput().focus().click();

                table
                    .selectHeaderInput()
                    .should("be.checked")
                    .and("have.prop", "indeterminate", false);
                table.selectInput(1).should("be.checked");
                table.selectInput(2).should("be.checked");

                cy.contains("button", "Lägg till rad").click();

                table
                    .selectHeaderInput()
                    .should("not.be.checked")
                    .and("have.prop", "indeterminate", false);
                table.selectInput(1).should("not.be.checked");
                table.selectInput(2).should("not.be.checked");
                table.selectInput(3).should("not.be.checked");

                table.selectInput(3).focus().click();

                table
                    .selectHeaderInput()
                    .should("not.be.checked")
                    .and("have.prop", "indeterminate", true);

                cy.contains("button", "Ta bort markerade rader").click();

                table
                    .selectHeaderInput()
                    .should("not.be.checked")
                    .and("have.prop", "indeterminate", false);
            });
        });
    });
});

describe("select cell", () => {
    const rows = [{ option: "Foo" }, { option: "Bar" }];
    const columns = defineTableColumns<(typeof rows)[number]>([
        {
            type: "select",
            header: "Header",
            options: ["Foo", "Bar", "Baz"],
            key: "option",
            editable: true,
            label: () => "Label",
        },
    ]);

    it("should set value when selecting option with enter", () => {
        const setValueRows = [{ option: "Foo" }, { option: "Bar" }];
        cy.mount(FTable<(typeof rows)[number]>, {
            props: { rows: setValueRows, columns },
        });

        table.cell({ row: 1, col: 1 }).should("contain.text", "Foo");
        table.cell({ row: 2, col: 1 }).should("contain.text", "Bar");
        table.cell({ row: 1, col: 1 }).focus();
        cy.focused().press(Cypress.Keyboard.Keys.ENTER);
        table.selectDropdown().should("exist");

        cy.focused().press(Cypress.Keyboard.Keys.DOWN);
        cy.focused().press(Cypress.Keyboard.Keys.DOWN);
        cy.focused().press(Cypress.Keyboard.Keys.ENTER);
        table.cell({ row: 1, col: 1 }).should("contain.text", "Baz");
        table.cell({ row: 2, col: 1 }).should("contain.text", "Bar");
    });

    it("should focus next row on selecting option with enter", () => {
        cy.mount(FTable<(typeof rows)[number]>, { props: { rows, columns } });

        table.cell({ row: 1, col: 1 }).focus();
        cy.focused().press(Cypress.Keyboard.Keys.ENTER);
        table.selectDropdown().should("exist");

        cy.focused().press(Cypress.Keyboard.Keys.ENTER);
        table.selectDropdown().should("not.exist");
        table.cell({ row: 2, col: 1 }).should("have.focus");
    });

    it("should focus same cell on selecting option with enter when on last row", () => {
        cy.mount(FTable<(typeof rows)[number]>, { props: { rows, columns } });

        table.cell({ row: 2, col: 1 }).focus();
        cy.focused().press(Cypress.Keyboard.Keys.ENTER);
        table.selectDropdown().should("exist");

        cy.focused().press(Cypress.Keyboard.Keys.ENTER);
        table.selectDropdown().should("not.exist");
        table.cell({ row: 2, col: 1 }).should("have.focus");
    });

    it("should focus same cell on selecting option with enter when on last row using table with footer", () => {
        cy.mount(FTable<(typeof rows)[number]>, {
            props: { rows, columns },
            slots: { footer: "Lorem ipsum" },
        });

        table.cell({ row: 2, col: 1 }).focus();
        cy.focused().press(Cypress.Keyboard.Keys.ENTER);
        table.selectDropdown().should("exist");

        cy.focused().press(Cypress.Keyboard.Keys.ENTER);
        table.selectDropdown().should("not.exist");
        table.cell({ row: 2, col: 1 }).should("have.focus");
    });

    it("should close dropdown and focus cell on pressing escape", () => {
        cy.mount(FTable<(typeof rows)[number]>, {
            props: { rows, columns },
        });

        table.cell({ row: 1, col: 1 }).focus();
        cy.focused().press(Cypress.Keyboard.Keys.ENTER);
        table.selectDropdown().should("exist");

        cy.focused().press(Cypress.Keyboard.Keys.ESC);
        table.selectDropdown().should("not.exist");
        table.cell({ row: 1, col: 1 }).should("have.focus");
    });

    it("should close dropdown on tab", () => {
        cy.mount(FTable<(typeof rows)[number]>, {
            props: { rows, columns },
        });

        table.cell({ row: 1, col: 1 }).focus();
        cy.focused().press(Cypress.Keyboard.Keys.ENTER);
        table.selectDropdown().should("exist");

        cy.focused().press(Cypress.Keyboard.Keys.TAB);
        table.selectDropdown().should("not.exist");
    });

    it("should close dropdown on shift-tab", () => {
        cy.mount(FTable<(typeof rows)[number]>, {
            props: { rows, columns },
        });

        table.cell({ row: 1, col: 1 }).focus();
        cy.focused().press(Cypress.Keyboard.Keys.ENTER);
        table.selectDropdown().should("exist");

        cy.focused().realPress(["Shift", "Tab"]);
        table.selectDropdown().should("not.exist");
    });

    it("should close dropdown on click outside", () => {
        cy.mount(FTable<(typeof rows)[number]>, {
            props: { rows, columns },
        });

        table.cell({ row: 1, col: 1 }).click();
        table.selectDropdown().should("exist");

        cy.get("body").realClick({ position: "topLeft" });
        table.selectDropdown().should("not.exist");
    });

    it("should have correct styling when open", () => {
        cy.mount(FTable<(typeof rows)[number]>, {
            props: { rows, columns },
            slots: {
                caption: "select cell should have correct styling when open",
            },
        });

        table.cell({ row: 2, col: 1 }).click();
        cy.toMatchScreenshot();
    });

    it("should have correct styling when focused", () => {
        cy.mount(FTable<(typeof rows)[number]>, {
            props: { rows, columns },
            slots: {
                caption: "select cell should have correct styling when focused",
            },
        });

        table.cell({ row: 2, col: 1 }).focus();
        cy.toMatchScreenshot();
    });
});
