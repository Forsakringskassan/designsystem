import { FListPageObject } from "@fkui/vue/cypress";
import FListPageObjectExample from "./FListPageObject.vue";

it("listItems() should return list items", () => {
    cy.mount(FListPageObjectExample);
    /* --- cut above --- */
    const list = new FListPageObject();
    list.listItems().should("have.length", 3);
    list.listItems().eq(0).should("have.text", "Banan");
    list.listItems().eq(1).should("have.text", "Äpple");
    list.listItems().eq(2).should("have.text", "Apelsin");
    /* --- cut below --- */
});
