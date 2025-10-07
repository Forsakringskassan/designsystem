import { type DefineComponent, defineComponent } from "vue";
import { FTablePageObject } from "../../cypress/FTable.pageobject";
import { FTable, defineTableColumns } from ".";

const table = new FTablePageObject();

interface Row {
    id: string;
    name: string;
    input: string;
    check: boolean;
}

const columns = defineTableColumns<Row>([
    {
        type: "rowheader",
        header: "Name",
        key: "name",
    },
    {
        type: "text",
        header: "Input",
        key: "input",
        editable: true,
        value(row) {
            return row.input;
        },
    },
    {
        type: "checkbox",
        header: "Kryssruta",
        key: "check",
        editable: true,
    },
    {
        type: "button",
        header: "Button",
        icon: "trashcan",
        value(row) {
            return `Ta bort ${row.id}`;
        },
    },
    {
        header: "Anchor",
        type: "anchor",
        href: "#",
        value() {
            return "Link";
        },
    },
    {
        type: "text",
        header: "ID",
        value(row) {
            return row.id;
        },
    },
]);

function createComponent(
    expandable?: "custom" | "rows",
    selectable?: "multi" | "single",
): DefineComponent {
    const expandableSlot =
        expandable === "custom"
            ? "<template #expandable='{ row }'> {{ row.name }} </template>"
            : "";
    return defineComponent({
        template: /* HTML */ `
            <f-table
                :rows
                :columns
                selectable="${selectable}"
                expandable-attribute="${expandable ? "nested" : undefined}"
            >
                ${expandableSlot}
            </f-table>
        `,
        components: {
            FTable,
        },
        data() {
            return {
                rows: [
                    {
                        id: "1",
                        name: "a",
                        input: "input-a",
                        check: false,
                        nested: [
                            {
                                id: "1-1",
                                name: "a-a",
                                input: "input-a-a",
                                check: false,
                            },
                        ],
                    },
                    {
                        id: "2",
                        name: "b",
                        input: "input-b",
                        check: false,
                        nested: [
                            {
                                id: "2-1",
                                name: "b-a",
                                input: "input-b-a",
                                check: false,
                            },
                        ],
                    },
                    {
                        id: "3",
                        name: "c",
                        input: "input-c",
                        check: false,
                        nested: [
                            {
                                id: "3-1",
                                name: "c-a",
                                input: "input-c-a",
                                check: false,
                            },
                        ],
                    },
                ],
                columns,
            };
        },
    });
}


it("Should set correct headertext 1.3", () => {
    cy.mount(createComponent());
        table.header(1).should("contain.text", "Name");
        table.header(2).should("contain.text", "Input");
        table.header(3).should("contain.text", "Kryssruta");
        table.header(4).should("contain.text", "Button");
        table.header(5).should("contain.text", "Anchor");
        table.header(6).should("contain.text", "ID");
});

it.skip("should set rowheader 1.4", () => {
    cy.mount(createComponent());
    table.cell({row:1, col:1}).should("have.prop", "tagName", "TH");
    table.cell({row:2, col:1}).should("have.prop", "tagName", "TH");
    table.cell({row:3, col:1}).should("have.prop", "tagName", "TH");
});

it.skip("should set rowheader on expandable rows 1.4", () => {
    cy.mount(createComponent("rows"));
    table.expandButton(1).click();
    table.cell({row:2, col:1}).should("have.prop", "tagName", "TH");
});

