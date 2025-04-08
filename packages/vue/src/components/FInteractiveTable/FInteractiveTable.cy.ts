/* axelinter:disable:prefer-native-element */
import { type DefineComponent, defineComponent } from "vue";
import { FInteractiveTablePageObject } from "../../cypress";
import { FTableColumn } from "../FTableColumn";
import FInteractiveTable from "./FInteractiveTable.vue";

const table = new FInteractiveTablePageObject('[data-test="table-example"]');

const rows = [
    {
        id: "1",
        start: "2022-04-10",
        end: "2022-04-25",
        level: "Sjukpenning",
        antal: "15",
    },
    {
        id: "2",
        start: "2022-05-06",
        end: "2022-05-10",
        level: "Lägstanivå",
        antal: "4",
    },
    {
        id: "3",
        start: "2022-05-20",
        end: "2022-05-31",
        level: "Sjukpenning",
        antal: "11",
    },
];

const selectedRows = [rows[0], rows[2]];

const defaultTemplate = /* HTML */ `
    <f-interactive-table
        v-model="selectedRows"
        :rows
        selectable
        v-test="'table-example'"
        key-attribute="id"
    >
        <template #caption> Föräldrapenning </template>
        <template #default="{ row }">
            <f-table-column title="Nivå" type="text">
                {{ row.level }}
            </f-table-column>
            <f-table-column title="Från och med" type="text" expand>
                {{ row.start }}
            </f-table-column>
            <f-table-column title="Till och med" type="text">
                {{ row.end }}
            </f-table-column>
            <f-table-column title="Antal dagar" type="numeric">
                {{ row.antal }}
            </f-table-column>
        </template>
        <template #checkbox-description> Välj denna rad </template>
    </f-interactive-table>
`;

function createComponent(template: string = defaultTemplate): DefineComponent {
    return defineComponent({
        template,
        components: {
            FInteractiveTable,
            FTableColumn,
        },
        data() {
            return {
                selectedRows,
                rows,
            };
        },
    });
}

it("should move focus to next row (circular) with arrow-down-key", () => {
    cy.mount(createComponent());
    table.row(0).focus();
    table.row(0).should("have.focus");
    table.row(0).type("{downArrow}");

    table.row(1).should("have.focus");
    table.row(1).type("{downArrow}");

    table.row(2).should("have.focus");
    table.row(2).type("{downArrow}");

    table.row(0).should("have.focus");
});

it("should move focus to previous row (circular) with arrow-up-key", () => {
    cy.mount(createComponent());
    table.row(2).focus();
    table.row(2).should("have.focus");
    table.row(2).type("{upArrow}");

    table.row(1).should("have.focus");
    table.row(1).type("{upArrow}");

    table.row(0).should("have.focus");
    table.row(0).type("{upArrow}");

    table.row(2).should("have.focus");
});

it("should pre-select checkboxes", () => {
    cy.mount(createComponent());
    table.columnItem(1).checkbox().isSelected().should("be.true");
    table.columnItem(2).checkbox().isSelected().should("be.false");
    table.columnItem(3).checkbox().isSelected().should("be.true");
});

it("should update checkboxes on `v-model` change", () => {
    const selectableTemplate = /* HTML */ `
        <div>
            <button type="button" id="remove-all" @click="selectedRows = []">
                Remove all
            </button>
            <button type="button" id="select-all" @click="selectedRows = rows">
                Select all
            </button>
            <button
                type="button"
                id="add-one"
                @click="selectedRows.push(rows[1])"
            >
                Add one
            </button>
            ${defaultTemplate}
        </div>
    `;
    cy.mount(createComponent(selectableTemplate));

    table.columnItem(1).checkbox().isSelected().should("be.true");
    table.columnItem(2).checkbox().isSelected().should("be.false");
    table.columnItem(3).checkbox().isSelected().should("be.true");

    cy.get("#remove-all").click();
    table.columnItem(1).checkbox().isSelected().should("be.false");
    table.columnItem(2).checkbox().isSelected().should("be.false");
    table.columnItem(3).checkbox().isSelected().should("be.false");

    cy.get("#add-one").click();
    table.columnItem(1).checkbox().isSelected().should("be.false");
    table.columnItem(2).checkbox().isSelected().should("be.true");
    table.columnItem(3).checkbox().isSelected().should("be.false");

    cy.get("#select-all").click();
    table.columnItem(1).checkbox().isSelected().should("be.true");
    table.columnItem(2).checkbox().isSelected().should("be.true");
    table.columnItem(3).checkbox().isSelected().should("be.true");
});

describe("FInteractiveTable pageobject", () => {
    beforeEach(() => {
        cy.mount(createComponent());
    });

    it("should contain caption", () => {
        table.caption().should("contain", "Föräldrapenning");
    });

    it("should provide a page object that can access any necessary elements in table headers", () => {
        table.headersRow().should("have.length", 5);

        table
            .headerRowItem()
            .tableRowHeaderContent()
            .eq(1)
            .should("have.trimmedText", "Nivå");

        table
            .headerRowItem()
            .tableRowHeaderContent()
            .eq(2)
            .should("have.trimmedText", "Från och med");
    });

    it("should provide a page object that can access any necessary elements in a table body", () => {
        table.bodyRow().should("have.length", 3);

        table
            .columnItem(1)
            .tableRowBodyContent(1)
            .should("contain", "Sjukpenning");
        table
            .columnItem(1)
            .tableRowBodyContent(2)
            .should("contain", "2022-04-10");
        table
            .columnItem(1)
            .tableRowBodyContent(3)
            .should("contain", "2022-04-25");
    });
});
