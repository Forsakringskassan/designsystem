import { defineComponent } from "vue";
import { FInteractiveTable, FTableButton, FTableColumn } from "..";
import { FInteractiveTablePageObject } from "../../cypress";
import FCrudDataset from "./FCrudDataset.vue";
import ListExample from "./examples/FCrudDatasetListExample.vue";

interface Item {
    id: number;
    name: string;
}

function mountComponent(): void {
    const TestComponent = defineComponent({
        components: { FCrudDataset, FTableButton },
        data() {
            return {
                items: [
                    { id: 1, name: "a" },
                    { id: 2, name: "b" },
                    { id: 3, name: "c" },
                ] as Item[],
            };
        },
        methods: {
            onAdd(commit: (item: Item) => void): void {
                commit({ id: 4, name: "d" });
            },
            onEdit(item: Item, commit: (item: Item) => void): void {
                commit({ ...item, name: `${item.name}-modified` });
            },
            onRemove(_item: Item, commit: () => void): void {
                commit();
            },
        },
        template: /* HTML */ `
            <f-crud-dataset v-model="items" :on-add :on-edit :on-remove>
                <template #default="{ updateItem, deleteItem }">
                    <table>
                        <tbody>
                            <tr v-for="item in items" :key="item.id">
                                <td :id="'item' + item.id">{{ item.name }}</td>
                                <td>
                                    <f-table-button
                                        :id="'modifyButton' + item.id"
                                        icon="pen"
                                        label
                                        @click="updateItem(item)"
                                    >
                                        Ändra
                                    </f-table-button>
                                </td>
                                <td>
                                    <f-table-button
                                        :id="'deleteButton' + item.id"
                                        icon="trashcan"
                                        label
                                        @click="deleteItem(item)"
                                    >
                                        Ta bort
                                    </f-table-button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </template>
            </f-crud-dataset>
        `,
    });

    cy.mount(TestComponent);
}

describe("FCrudDataset", () => {
    it("should add item when onAdd commits", () => {
        mountComponent();
        cy.get("#item4").should("not.exist");
        cy.get('[data-test="f-crud-dataset-add-button"]').click();
        cy.get("#item4").should("have.trimmedText", "d");
    });

    it("should modify item when onEdit commits", () => {
        mountComponent();
        cy.get("#modifyButton1").click();
        cy.get("#item1").should("have.trimmedText", "a-modified");
    });

    it("should remove item when onRemove commits", () => {
        mountComponent();
        cy.get("#item1").should("exist");
        cy.get("#deleteButton1").click();
        cy.get("#item1").should("not.exist");
    });

    it("should delete nested item", () => {
        const rows = [
            {
                name: "a",
                nested: [{ name: "a1" }, { name: "a2" }],
            },
            { name: "b", nested: [] },
        ];
        const TestComponent = defineComponent({
            components: {
                FCrudDataset,
                FInteractiveTable,
                FTableButton,
                FTableColumn,
            },
            data() {
                return {
                    rows,
                };
            },
            methods: {
                onRemove(_item: unknown, commit: () => void): void {
                    commit();
                },
            },
            template: /* HTML */ `
                <f-crud-dataset v-model="rows" :on-remove>
                    <template #default="{ deleteItem }">
                        <f-interactive-table
                            :rows
                            expandable-attribute="nested"
                        >
                            <template #selectable-description>
                                Select row
                            </template>
                            <template #default="{ row }">
                                <f-table-column title="Name">
                                    {{ row.name }}
                                </f-table-column>
                                <f-table-column
                                    title="Åtgärd"
                                    shrink
                                    type="action"
                                >
                                    <f-table-button
                                        icon="pen"
                                        @click="deleteItem(row)"
                                    >
                                        Delete
                                        <span class="sr-only">
                                            {{ row.name }}
                                        </span>
                                    </f-table-button>
                                </f-table-column>
                            </template>
                        </f-interactive-table>
                    </template>
                </f-crud-dataset>
            `,
        });
        cy.mount(TestComponent);
        /* eslint-disable-next-line @typescript-eslint/no-deprecated -- while deprecated, it should continue to work */
        const table = new FInteractiveTablePageObject();

        table.row(0).click();

        table.bodyRow().should("have.length", 4);
        table.cell({ row: 1, col: 1 }).should("have.trimmedText", "a");
        table.cell({ row: 2, col: 1 }).should("have.trimmedText", "a1");
        table.cell({ row: 3, col: 1 }).should("have.trimmedText", "a2");
        table.cell({ row: 4, col: 1 }).should("have.trimmedText", "b");
        table.row(4).should("not.exist");

        table.row(1).find(".button").click();

        table.bodyRow().should("have.length", 3);
        table.cell({ row: 1, col: 1 }).should("have.trimmedText", "a");
        table.cell({ row: 2, col: 1 }).should("have.trimmedText", "a2");
        table.cell({ row: 3, col: 1 }).should("have.trimmedText", "b");
        table.row(3).should("not.exist");
    });
});

describe("example with modals", () => {
    it("should edit item using form modal", () => {
        cy.mount(ListExample);
        cy.get("#example_item_1 .button").eq(0).click();
        cy.get(".modal input").eq(0).clear();
        cy.get(".modal input").eq(0).type("Päron");
        cy.get(".modal .button--primary").click();
        cy.get("#example_item_1 h3").should("have.trimmedText", "Päron");
    });

    it("should remove item using confirm modal", () => {
        cy.mount(ListExample);
        cy.get(".list__item").should("have.length", 4);
        cy.get("#example_item_1 .button").eq(1).click();
        cy.get(".modal .button--primary").click();
        cy.get(".list__item").should("have.length", 3);
    });
});

describe("keyboard navigation (FList)", () => {
    it("should wrap to last element when pressing up on first item", () => {
        cy.mount(ListExample, {});
        cy.get("#example_item_1").focus();
        cy.focused().should("have.attr", "id", "example_item_1");
        cy.get("#example_item_1").type("{upArrow}");
        cy.focused().should("have.attr", "id", "example_item_4");
    });

    it("should focus second element when pressing down on first item", () => {
        cy.mount(ListExample, {});
        cy.get("#example_item_1").focus();
        cy.focused().should("have.attr", "id", "example_item_1");
        cy.get("#example_item_1").eq(0).type("{downArrow}");
        cy.focused().should("have.attr", "id", "example_item_2");
    });

    it("should wrap to first element when pressing down on last item", () => {
        cy.mount(ListExample, {});
        cy.get("#example_item_4").focus();
        cy.focused().should("have.attr", "id", "example_item_4");
        cy.get("#example_item_4").type("{downArrow}");
        cy.focused().should("have.attr", "id", "example_item_1");
    });

    it("should focus second to last element when pressing up on last item", () => {
        cy.mount(ListExample, {});
        cy.get("#example_item_4").focus();
        cy.focused().should("have.attr", "id", "example_item_4");
        cy.get("#example_item_4").type("{upArrow}");
        cy.focused().should("have.attr", "id", "example_item_3");
    });
});
