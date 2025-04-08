import { defineComponent } from "vue";
import { FInteractiveTable } from "../FInteractiveTable";
import { FTableColumn } from "../FTableColumn";
import {
    FInteractiveTablePageObject,
    FSortFilterDatasetPageObject,
} from "../../cypress";
import FSortFilterDataset from "./FSortFilterDataset.vue";
import FSortFilterDatasetEmptySlot from "./examples/FSortFilterDatasetEmptySlot.vue";

const Viewport = {
    DESKTOP: [1024, 600] as const,
    MOBILE: [639, 600] as const,
};

const sortFilterDataset = new FSortFilterDatasetPageObject(
    '[data-test="sort-filter-dataset-example"]',
);
const table = new FInteractiveTablePageObject(
    '[data-test="sort-filter-dataset-example"]',
);

const COLUMN_TEXT = 1,
    COLUMN_YEAR = 2;

const TestComponent = defineComponent({
    template: /* HTML */ `
        <f-sort-filter-dataset
            data-test="sort-filter-dataset-example"
            :data="items"
            :sortable-attributes="sortableAttributes"
            v-bind="showHideAttrs"
        >
            <template #header="{ slotClass }">
                <h1 :class="slotClass">En titel</h1>
            </template>
            <template #default="{ sortFilterResult }">
                <f-interactive-table
                    :rows="sortFilterResult"
                    striped
                    key-attribute="id"
                >
                    <template #caption>
                        <span class="sr-only"> skärmläsaretext </span>
                    </template>
                    <template #default="{ row }">
                        <f-table-column name="id" title="Id" type="text" expand>
                            {{ row.id }}
                        </f-table-column>
                        <f-table-column
                            name="text"
                            title="Text"
                            type="text"
                            expand
                        >
                            {{ row.text }}
                        </f-table-column>
                        <f-table-column
                            name="year"
                            title="År"
                            type="numeric"
                            shrink
                        >
                            {{ row.year }}
                        </f-table-column>
                    </template>
                </f-interactive-table>
            </template>
        </f-sort-filter-dataset>
    `,
    components: {
        FSortFilterDataset,
        FInteractiveTable,
        FTableColumn,
    },
    props: {
        showSort: {
            type: Boolean,
            required: false,
            default: true,
        },
        showFilter: {
            type: Boolean,
            required: false,
            default: true,
        },
    },
    data() {
        return {
            items: [
                { id: 1, text: "aAc", year: 2020 },
                { id: 2, text: "aba", year: 2021 },
                { id: 3, text: "Aab", year: 2022 },
                { id: 4, text: "bbb", year: 2023 },
            ],
            sortableAttributes: { text: "Text", year: "År" },
        };
    },
    computed: {
        showHideAttrs(): Record<string, boolean | undefined> {
            return {
                showSort: this.showSort ? undefined : false,
                showFilter: this.showFilter ? undefined : false,
            };
        },
    },
});

function assertTable(values: string[], column: number): void {
    for (let i = 0; i < values.length; i++) {
        table
            .columnItem(i + 1)
            .tableRowBodyContent(column)
            .should("contain.text", values[i]);
    }

    if (values.length === 0) {
        table.el().should("contain.text", "Tabellen är tom");
    } else {
        table.bodyRow().should("have.length", values.length);
    }
}

describe("pageobjects", () => {
    it("should provide a page object that can access any necessary elements", () => {
        cy.mount(TestComponent);

        sortFilterDataset.header().should("have.text", "En titel");
        sortFilterDataset.selectField.label
            .el()
            .should("contain.text", "Sortera");
        sortFilterDataset.textField.label.el().should("contain.text", "Sök");
    });
});

describe("sort", () => {
    beforeEach(() => {
        cy.mount(TestComponent);
    });

    it("should sort data when dropdown is selected", () => {
        sortFilterDataset.selectField.dropdown().select("Text (stigande)");
        assertTable(["Aab", "aAc", "aba", "bbb"], COLUMN_TEXT);

        sortFilterDataset.selectField.dropdown().select("År (fallande)");
        assertTable(["2023", "2022", "2021", "2020"], COLUMN_YEAR);
    });

    it("should update table header icon when dataset is sorted via selectfield", () => {
        sortFilterDataset.selectField.dropdown().select("Text (stigande)");
        sortFilterDataset.selectField
            .dropdown()
            .should("contain.text", "Text (stigande)");

        table.getColumnSortedByIcon(COLUMN_TEXT, "ascending").should("exist");
        table.getColumnSortedByIcon(COLUMN_YEAR, "unsorted").should("exist");

        sortFilterDataset.selectField.dropdown().select("År (fallande)");
        sortFilterDataset.selectField
            .dropdown()
            .should("contain.text", "År (fallande)");

        table.getColumnSortedByIcon(COLUMN_TEXT, "unsorted").should("exist");
        table.getColumnSortedByIcon(COLUMN_YEAR, "descending").should("exist");
    });

    it("should update selectfield when dataset is sorted by clicking table header", () => {
        table.headerRowItem().tableRowHeaderContent().eq(COLUMN_TEXT).click();

        table.getColumnSortedByIcon(COLUMN_TEXT, "ascending").should("exist");
        table.getColumnSortedByIcon(COLUMN_YEAR, "unsorted").should("exist");

        sortFilterDataset.selectField
            .selectedOption()
            .should("contain.text", "Text (stigande)");

        table.headerRowItem().tableRowHeaderContent().eq(COLUMN_YEAR).click();
        table.headerRowItem().tableRowHeaderContent().eq(COLUMN_YEAR).click();

        table.getColumnSortedByIcon(COLUMN_TEXT, "unsorted").should("exist");
        table.getColumnSortedByIcon(COLUMN_YEAR, "descending").should("exist");

        sortFilterDataset.selectField
            .selectedOption()
            .should("contain.text", "År (fallande)");
    });

    it("should default to first option in dropdown", () => {
        sortFilterDataset.selectField
            .selectedOption()
            .should("contain.text", "Välj");
    });
});

describe("filter", () => {
    it("should filter data when typing in textfield", () => {
        cy.mount(TestComponent);

        sortFilterDataset.textField.input().type("a");
        assertTable(["aAc", "aba", "Aab"], COLUMN_TEXT);

        sortFilterDataset.textField.input().type("a");
        assertTable(["aAc", "Aab"], COLUMN_TEXT);

        sortFilterDataset.textField.input().type("x");
        assertTable([], COLUMN_TEXT);

        sortFilterDataset.textField.input().clear();
        assertTable(["aAc", "aba", "Aab", "bbb"], COLUMN_TEXT);
    });

    it("should filter data matching both words", () => {
        cy.mount(TestComponent);

        sortFilterDataset.textField.input().type("a");
        assertTable(["aAc", "aba", "Aab"], COLUMN_TEXT);

        sortFilterDataset.textField.input().type(" 21");
        assertTable(["aba"], COLUMN_TEXT);
        assertTable(["2021"], COLUMN_YEAR);
    });
});

describe("sort & filter in combination", () => {
    it("should keep sort when filter data by typing in textfield", () => {
        cy.mount(TestComponent);

        sortFilterDataset.selectField.dropdown().select("År (fallande)");
        assertTable(["2023", "2022", "2021", "2020"], COLUMN_YEAR);

        sortFilterDataset.textField.input().type("202");
        assertTable(["2023", "2022", "2021", "2020"], COLUMN_YEAR);

        sortFilterDataset.textField.input().type("2");
        assertTable(["2022"], COLUMN_YEAR);

        sortFilterDataset.textField.input().clear();
        assertTable(["2023", "2022", "2021", "2020"], COLUMN_YEAR);

        sortFilterDataset.selectField
            .selectedOption()
            .should("contain.text", "År (fallande)");
    });

    it("should keep filter when sorting date by selectfield", () => {
        cy.mount(TestComponent);

        sortFilterDataset.textField.input().type("a");
        assertTable(["aAc", "aba", "Aab"], COLUMN_TEXT);

        sortFilterDataset.selectField.dropdown().select("Text (stigande)");
        assertTable(["Aab", "aAc", "aba"], COLUMN_TEXT);

        sortFilterDataset.selectField.dropdown().select("Text (fallande)");
        assertTable(["aba", "aAc", "Aab"], COLUMN_TEXT);

        sortFilterDataset.textField.input().clear();
        assertTable(["bbb", "aba", "aAc", "Aab"], COLUMN_TEXT);

        sortFilterDataset.selectField
            .selectedOption()
            .should("contain.text", "Text (fallande)");
    });
});

describe("remove sort & filter fields", () => {
    it("should remove sort selectfield", () => {
        cy.mount(TestComponent, {
            props: {
                showSort: false,
            },
        });

        sortFilterDataset.selectField.el().should("not.exist");
        sortFilterDataset.textField.el().should("exist");
    });

    it("should remove filter textfield", () => {
        cy.mount(TestComponent, {
            props: {
                showFilter: false,
            },
        });

        sortFilterDataset.selectField.el().should("exist");
        sortFilterDataset.textField.el().should("not.exist");
    });
});

describe("documentation", () => {
    describe("FSortFilterDatasetEmptySlot", () => {
        it("should show text when data is present and unfiltered", () => {
            cy.mount(FSortFilterDatasetEmptySlot);
            cy.get("#data-source").select("Inläst data med rader");
            cy.get("input").clear();
            cy.get("p").should("contain.text", "Visar 4 av 4 frukter");
            cy.get("tbody tr").should("have.length", 4);
            cy.get("tbody tr").should("contain.text", "Äpple");
        });

        it("should show text when data is present and filter gives results", () => {
            cy.mount(FSortFilterDatasetEmptySlot);
            cy.get("#data-source").select("Inläst data med rader");
            cy.get("input").clear();
            cy.get("input").type("Äpp");
            cy.get("p").should("contain.text", "Visar 1 av 4 frukter");
            cy.get("tbody tr").should("have.length", 1);
            cy.get("tbody tr").should("contain.text", "Äpple");
        });

        it("should show text when data is present and filter gives no results", () => {
            cy.mount(FSortFilterDatasetEmptySlot);
            cy.get("#data-source").select("Inläst data med rader");
            cy.get("input").clear();
            cy.get("input").type("Ädelost");
            cy.get("p").should("contain.text", "Visar 0 av 4 frukter");
            cy.get("tbody tr").should("have.length", 1);
            cy.get("tbody tr").should(
                "contain.text",
                "Sökningen gav inga träffar.",
            );
        });

        it("should show text when data isn't present and unfiltered", () => {
            cy.mount(FSortFilterDatasetEmptySlot);
            cy.get("#data-source").select("Inläst data utan rader");
            cy.get("input").clear();
            cy.get("p").should("contain.text", "Visar 0 av 0 frukter");
            cy.get("tbody tr").should("have.length", 1);
            cy.get("tbody tr").should(
                "contain.text",
                "Det finns inga frukter att visa.",
            );
        });

        it("should show text when data isn't present and filtered", () => {
            cy.mount(FSortFilterDatasetEmptySlot);
            cy.get("#data-source").select("Inläst data utan rader");
            cy.get("input").clear();
            cy.get("input").type("Äpple");
            cy.get("p").should("contain.text", "Visar 0 av 0 frukter");
            cy.get("tbody tr").should("have.length", 1);
            cy.get("tbody tr").should(
                "contain.text",
                "Det finns inga frukter att visa.",
            );
        });
    });
});

/* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
it.skip("should match visual regression (desktop)", () => {
    cy.viewport(...Viewport.DESKTOP);
    cy.mount({
        template: /* HTML */ `
            <div id="wrapper" style="padding: 1rem">
                <div style="border: 1px dashed hotpink">
                    <test-component></test-component>
                </div>
            </div>
        `,
        components: { TestComponent },
    });
    cy.get("#wrapper").toMatchScreenshot();
});

/* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
it.skip("should match visual regression (mobile)", () => {
    cy.viewport(...Viewport.MOBILE);
    cy.mount({
        template: /* HTML */ `
            <div id="wrapper" style="padding: 1rem">
                <div style="border: 1px dashed hotpink">
                    <test-component></test-component>
                </div>
            </div>
        `,
        components: { TestComponent },
    });
    cy.get("#wrapper").toMatchScreenshot();
});
