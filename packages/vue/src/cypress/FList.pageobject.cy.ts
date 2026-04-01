import { h } from "vue";
import { FList } from "../components";
import { FListPageObject } from "./FList.pageobject";

interface Item {
    frukt: string;
    nested?: NestedItem[];
}

interface NestedItem {
    id: number;
}

const pageobject = new FListPageObject();

describe("FListPageObject", () => {
    it("listItems() should select each list item", () => {
        const items: Item[] = [
            { frukt: "Banan" },
            { frukt: "Äpple" },
            { frukt: "Apelsin" },
        ];
        cy.mount(FList, {
            props: {
                items,
            },
            slots: {
                default({ item }: { item: Item }) {
                    return item.frukt;
                },
            },
        });
        pageobject.listItems().should("have.length", 3);
        pageobject.listItems().eq(0).should("have.text", "Banan");
        pageobject.listItems().eq(1).should("have.text", "Äpple");
        pageobject.listItems().eq(2).should("have.text", "Apelsin");
    });

    it("listItems() should handle empty list", () => {
        const items: Item[] = [];
        cy.mount(FList, {
            props: {
                items,
            },
            slots: {
                default({ item }: { item: Item }) {
                    return item.frukt;
                },
            },
        });
        pageobject.listItems().should("have.length", 0);
    });

    it("listItems() should handle nested lists", () => {
        const items: Item[] = [
            { frukt: "Banan", nested: [{ id: 1 }] },
            { frukt: "Äpple", nested: [{ id: 2 }, { id: 3 }] },
            { frukt: "Apelsin", nested: [{ id: 4 }] },
        ];
        cy.mount(FList, {
            props: {
                items,
            },
            attrs: {
                id: "outer",
            },
            slots: {
                default({ item }: { item: Item }) {
                    return [
                        item.frukt,
                        h(
                            FList,
                            { items: item.nested },
                            {
                                default({ item }: { item: NestedItem }) {
                                    return item.id;
                                },
                            },
                        ),
                    ];
                },
            },
        });
        const pageobject = new FListPageObject("#outer");
        pageobject.listItems().should("have.length", 3);
    });

    it("emptyMessage() should select message for empty lists", () => {
        const items: Item[] = [];
        cy.mount(FList, {
            props: {
                items,
            },
            slots: {
                default({ item }: { item: Item }) {
                    return item.frukt;
                },
                empty() {
                    return "lorem ipsum";
                },
            },
        });
        pageobject
            .emptyMessage()
            .should("exist")
            .and("have.text", "lorem ipsum");
    });

    it("emptyMessage() should not exist when list have items", () => {
        const items: Item[] = [
            { frukt: "Banan" },
            { frukt: "Äpple" },
            { frukt: "Apelsin" },
        ];
        cy.mount(FList, {
            props: {
                items,
            },
            slots: {
                default({ item }: { item: Item }) {
                    return item.frukt;
                },
                empty() {
                    return "lorem ipsum";
                },
            },
        });
        pageobject.emptyMessage().should("not.exist");
    });
});
