import { defineComponent } from "vue";
import { FModal, FConfirmModal, FFormModal } from "../FModal";
import { ListItem } from "../../types";
import ListExample from "./examples/FCrudDatasetListExample.vue";
import FCrudDataset from "./FCrudDataset.vue";
import FCrudButton from "./FCrudButton.vue";

const ADD_TEMPLATE = /* HTML */ `
    <template #add="{ item }">
        <span> add </span>
        <input id="id-input" type="number" v-model.number="item.id" />
        <input id="name-input" type="text" v-model="item.name" />
    </template>
`;

const MODIFY_TEMPLATE = /* HTML */ `
    <template #modify="{ item }">
        <span> modify </span>
        <input id="name-input" type="text" v-model="item.name" />
        <input id="child-name-input" type="text" v-model="item.child.name" />
    </template>
`;

const DELETE_TEMPLATE = /* HTML */ `
    <template #delete="{ item }">
        <span> delete </span>
        {{ item.name }}?
    </template>
`;

function mountComponent(templates = new Array<string>()): void {
    // Because we generate the template we intentionally do not use the end tag </f-crud-dataset>
    // in the following const string:
    const templateStart = `
        <div>
            <f-crud-dataset
                v-model="items"
                @created="onCreatedEvent"
                @updated="onUpdatedEvent"
                @deleted="onDeletedEvent"
            >
                <template #default>
                    <table>
                        <thead>
                            <tr>
                                <th scope="col"> id </th>
                                <th scope="col"> name </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in items" :key="item.id">
                                <td :id="'item'+item.id"> {{ item.id }} </td>
                                <td> {{ item.name }} </td>
                                <td>
                                    <f-crud-button
                                        :id="'modifyButton'+item.id"
                                        action="modify"
                                        :item="item"
                                        label
                                    />
                                </td>
                                <td>
                                    <f-crud-button
                                        :id="'deleteButton'+item.id"
                                        action="delete"
                                        :item="item"
                                        label
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </template>
    `;
    // the end tag of the root component f-crud-dataset
    const templateEnd = "</f-crud-dataset>";

    const testDataTemplate =
        "<pre id='deletedEventData'> {{ getDeletedEventData() }} </pre></div>";

    // generate the template middle part
    let templateMiddle = "";
    for (const t of templates) {
        templateMiddle += t;
    }

    // generate the complete template
    const testComponentTemplate = templateStart
        .concat(templateMiddle)
        .concat(templateEnd);

    const TestComponent = defineComponent({
        template: testComponentTemplate + testDataTemplate,
        components: {
            FCrudDataset,
            FCrudButton,
            FModal,
            FConfirmModal,
            FFormModal,
        },
        data() {
            return {
                items: [
                    { id: 1, name: "a", child: { name: "a1" } },
                    { id: 2, name: "b", child: { name: "b1" } },
                    { id: 3, name: "c", child: { name: "c1" } },
                ],
                createdEventData: null as null | ListItem,
                updatedEventData: null as null | ListItem,
                deletedEventData: null as null | ListItem,
            };
        },
        methods: {
            onCreatedEvent(item: ListItem): void {
                this.createdEventData = item;
            },
            onUpdatedEvent(item: ListItem): void {
                this.updatedEventData = item;
            },
            onDeletedEvent(item: ListItem): void {
                this.deletedEventData = item;
            },
            getDeletedEventData(): string {
                return JSON.stringify(this.deletedEventData);
            },
        },
    });

    cy.mount(TestComponent, {});
}

describe("item delete", () => {
    it("should delete item after click on delete and click on confirmation", () => {
        mountComponent([ADD_TEMPLATE, MODIFY_TEMPLATE, DELETE_TEMPLATE]);
        // Check that item with id item1 exists
        cy.get("#item1").should("exist");
        cy.get("#deleteButton1").click();
        cy.get(".modal .button--primary").click();
        // Check that row 1 and item with id item1 do not exist after delete
        cy.get("#item1").should("not.exist");
    });

    it("should emit deleted event when items are deleted", () => {
        mountComponent([ADD_TEMPLATE, MODIFY_TEMPLATE, DELETE_TEMPLATE]);
        // Check that item with id item1 exists
        cy.get("#item1").should("exist");
        cy.get("#deletedEventData").should("trimmedText", "null");
        cy.get("#deleteButton1").click();
        cy.get(".modal .button--primary").click();
        const item1 = JSON.stringify({
            id: 1,
            name: "a",
            child: { name: "a1" },
        });
        cy.get("#deletedEventData").contains(item1);
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
