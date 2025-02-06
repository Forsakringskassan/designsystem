import { type DefineComponent, defineComponent } from "vue";
import {
    DensityWrapper,
    densityWrapperHeight,
    densityWrapperWidth,
} from "@fkui/test-utils/vue";
import { FListPageObject } from "../../cypress";
import FList from "./FList.vue";

interface Item {
    id: number;
    frukt: string;
}

function createComponent(template: string): DefineComponent {
    return defineComponent({
        template,
        components: {
            FList,
        },
        data() {
            return {
                items: [
                    { id: 1, frukt: "Banan" },
                    { id: 2, frukt: "Äpple" },
                    { id: 3, frukt: "Apelsin" },
                ] as Item[],
                selectedItems: [{ id: 3, frukt: "Apelsin" }] as Item[],
                changeItem: {} as Item,
            };
        },
        methods: {
            onClickItem(item: Item) {
                this.changeItem = item;
            },
        },
    });
}

const list = new FListPageObject(".list");

/* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
describe.skip("Flist screenshot", () => {
    it("should match static", () => {
        const template = /* HTML */ `
            <f-list key-attribute="id" :items="items">
                <template #default="{ item }"> {{ item.frukt }} </template>
            </f-list>
        `;
        cy.mount(createComponent(template));
        cy.toMatchScreenshot();
    });

    it("should match interactive with checkbox", () => {
        const template = /* HTML */ `
            <f-list
                v-model="selectedItems"
                key-attribute="id"
                :items="items"
                selectable
            >
                <template #default="{ item }"> {{ item.frukt }} </template>
                <template #screenreader="{ item }">
                    Frukt: {{ item.frukt }}
                </template>
            </f-list>
        `;
        cy.mount(createComponent(template));
        cy.toMatchScreenshot();
    });

    it("should match interactive with link", () => {
        const template = /* HTML */ `
            <f-list
                v-model="selectedItems"
                key-attribute="id"
                :items="items"
                selectable
                :checkbox="false"
            >
                <template #default="{ item }"> {{ item.frukt }} </template>
            </f-list>
        `;
        cy.mount(createComponent(template));
        cy.toMatchScreenshot();
    });
});

describe("Flist Clickable", () => {
    it("should be able to click on an item in the list", () => {
        const template = /* HTML */ `
            <f-list
                key-attribute="id"
                :items="items"
                :selectable="true"
                :checkbox="false"
                @click="onClickItem"
            >
                <template #default="{ item }"> {{ item.frukt }} </template>
            </f-list>
            <pre> {{ changeItem }} </pre>
        `;
        cy.mount(createComponent(template));

        list.listItem(0).content().click();
        cy.get(`pre`)
            .then((element) => {
                return JSON.parse(element.get(0).textContent || "");
            })
            .should("deep.equal", {
                id: 1,
                frukt: "Banan",
            });

        list.listItem(0)
            .content()
            .parent()
            .should("not.have.class", "list__item--active");
    });
});

describe("Flist Selectable", () => {
    beforeEach(() => {
        const template = /* HTML */ `
            <f-list
                v-model="selectedItems"
                key-attribute="id"
                :items="items"
                selectable
            >
                <template #default="{ item }"> {{ item.frukt }} </template>
                <template #screenreader="{ item }">
                    Frukt {{ item.frukt }}
                </template>
            </f-list>
        `;
        cy.mount(createComponent(template));
    });

    it("should be able to check and uncheck list item", () => {
        const selectCheckbox = list.listItem(0).selectCheckbox();
        selectCheckbox.select();
        selectCheckbox.checkbox().should("be.checked");
        selectCheckbox.select();
        selectCheckbox.checkbox().should("not.be.checked");
    });

    it("should add active class if uses clicks on item", () => {
        list.listItem(1).content().click();

        list.listItem(1)
            .content()
            .parent()
            .should("have.class", "list__item--active");
    });
});

describe("FList Empty", () => {
    it("should have default empty message", () => {
        const template = /* HTML */ `
            <f-list :items="[]" key-attribute="id">
                <template #default="{ item }"> {{ item }} </template>
            </f-list>
        `;
        cy.mount(createComponent(template));
        list.emptyMessage().should("contain.text", "Listan är tom");
    });

    it("should have custom empty message", () => {
        const template = /* HTML */ `
            <f-list :items="[]" key-attribute="id">
                <template #default="{ item }"> {{ item }} </template>
                <template #empty>
                    <em> Det finns inga frukter. </em>
                </template>
            </f-list>
        `;
        cy.mount(createComponent(template));
        list.emptyMessage().should("contain.text", "Det finns inga frukter.");
    });
});

describe("density", () => {
    const DensityComponent = defineComponent({
        template: /* HTML */ `
            <density-wrapper>
                <f-list
                    v-model="listSelectedItems"
                    key-attribute="id"
                    :items="listItems"
                    selectable
                >
                    <template #default> Text </template>
                    <template #screenreader> Screenreader </template>
                </f-list>
            </density-wrapper>
        `,
        components: {
            DensityWrapper,
            FList,
        },
        data() {
            return {
                listItems: ["1", "2", "3"].map((id) => ({ id })),
                listSelectedItems: [],
            };
        },
    });

    it(`should be densified`, () => {
        cy.viewport(densityWrapperWidth, densityWrapperHeight);
        cy.mount(DensityComponent);
        cy.toMatchScreenshot();
    });
});
