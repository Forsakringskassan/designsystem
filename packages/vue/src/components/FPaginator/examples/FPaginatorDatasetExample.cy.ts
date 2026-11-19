import { FListPageObject, FPaginatorPageObject } from "../../../cypress";
import { FListSelectors } from "../../../selectors";
import FPaginatorDatasetExample from "./FPaginatorDatasetExample.vue";

const selectors = FListSelectors("#rows");
const list = new FListPageObject("#rows");
const paginator = new FPaginatorPageObject();

it("should show correct info on first page", () => {
    cy.viewport(800, 600);
    cy.mount(FPaginatorDatasetExample);
    paginator.pageButton(0).click();

    list.listItems().should("have.length", 5);
    list.listItems().eq(0).should("contain.text", "Namn Kalle Anka");
    list.listItems().eq(1).should("contain.text", "Namn Joakim von Anka");
    list.listItems().eq(2).should("contain.text", "Namn Alexander Lukas");
    list.listItems().eq(3).should("contain.text", "Namn Oppfinnar-Jocke");
    list.listItems().eq(4).should("contain.text", "Namn Magica de Hex");

    const selector = `${selectors.listItemByIndex(0)} .list`;
    const children = new FListPageObject(selector);
    children.listItems().should("have.length", 3);
    children.listItems().eq(0).should("contain.text", "Namn Knatte Anka");
    children.listItems().eq(1).should("contain.text", "Namn Fnatte Anka");
    children.listItems().eq(2).should("contain.text", "Namn Tjatte Anka");
});

it("should show correct info on second page", () => {
    cy.viewport(800, 600);
    cy.mount(FPaginatorDatasetExample);
    paginator.pageButton(1).click();

    list.listItems().should("have.length", 3);
    list.listItems().eq(0).should("contain.text", "Namn Knase Anka");
    list.listItems().eq(1).should("contain.text", "Namn Kajsa Anka");
    list.listItems().eq(2).should("contain.text", "Namn Farmor Anka");

    const selector = `${selectors.listItemByIndex(1)} .list`;
    const children = new FListPageObject(selector);
    children.listItems().should("have.length", 3);
    children.listItems().eq(0).should("contain.text", "Namn Kicki Anka");
    children.listItems().eq(1).should("contain.text", "Namn Pippi Anka");
    children.listItems().eq(2).should("contain.text", "Namn Titti Anka");
});
