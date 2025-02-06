/* axelinter:disable:prefer-native-element */
import { type DefineComponent, defineComponent } from "vue";
import { FInteractiveTablePageObject } from "../../cypress";
import { FTableColumn } from "../FTableColumn";
import FInteractiveTable from "./FInteractiveTable.vue";

function createComponent(template: string): DefineComponent {
    return defineComponent({
        template,
        components: {
            FInteractiveTable,
            FTableColumn,
        },
        data() {
            return {
                selectedItems: [
                    {
                        id: "1",
                        start: "2022-04-10",
                        end: "2022-04-25",
                        level: "Sjukpenning",
                        antal: "15",
                    },
                    {
                        id: "3",
                        start: "2022-05-20",
                        end: "2022-05-31",
                        level: "Sjukpenning",
                        antal: "11",
                    },
                ],
                items: [
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
                ],
            };
        },
    });
}

describe("FInteractiveTable", () => {
    beforeEach(() => {
        const template = /* HTML */ `
            <f-interactive-table
                v-model="selectedItems"
                :rows="items"
                selectable
                v-test="'table-example'"
                key-attribute="id"
            >
                <template #caption> Föräldrapenning </template>
                <template #default="{ row }">
                    <f-table-column name="level" title="Nivå" type="text">
                        {{ row.level }}
                    </f-table-column>
                    <f-table-column
                        name="start"
                        title="Från och med"
                        type="text"
                        expand
                    >
                        {{ row.start }}
                    </f-table-column>
                    <f-table-column name="end" title="Till och med" type="text">
                        {{ row.end }}
                    </f-table-column>
                    <f-table-column
                        name="antal"
                        title="Antal dagar"
                        type="numeric"
                    >
                        {{ row.antal }}
                    </f-table-column>
                </template>
                <template #checkbox-description> Välj denna rad </template>
            </f-interactive-table>
        `;
        cy.mount(createComponent(template));
    });

    it("should contain caption", () => {
        const presentTable = new FInteractiveTablePageObject(
            '[data-test="table-example"]',
        );
        presentTable.caption().should("contain", "Föräldrapenning");
    });

    it("should provide a page object that can access any necessary elements in table headers", () => {
        const presentTable = new FInteractiveTablePageObject(
            '[data-test="table-example"]',
        );
        presentTable.headersRow().should("have.length", 5);

        presentTable
            .headerRowItem()
            .tableRowHeaderContent()
            .eq(1)
            .should("have.trimmedText", "Nivå");

        presentTable
            .headerRowItem()
            .tableRowHeaderContent()
            .eq(2)
            .should("have.trimmedText", "Från och med");
    });

    it("should provide a page object that can access any necessary elements in a table body", () => {
        const presentTable = new FInteractiveTablePageObject(
            '[data-test="table-example"]',
        );
        presentTable.bodyRow().should("have.length", 3);

        presentTable
            .columnItem(1)
            .tableRowBodyContent(1)
            .should("contain", "Sjukpenning");
        presentTable
            .columnItem(1)
            .tableRowBodyContent(2)
            .should("contain", "2022-04-10");
        presentTable
            .columnItem(1)
            .tableRowBodyContent(3)
            .should("contain", "2022-04-25");
    });

    it("should pre-select checkboxes", () => {
        const presentTable = new FInteractiveTablePageObject(
            '[data-test="table-example"]',
        );

        presentTable.columnItem(1).checkbox().isSelected().should("be.true");
        presentTable.columnItem(2).checkbox().isSelected().should("be.false");
        presentTable.columnItem(3).checkbox().isSelected().should("be.true");
    });
});
