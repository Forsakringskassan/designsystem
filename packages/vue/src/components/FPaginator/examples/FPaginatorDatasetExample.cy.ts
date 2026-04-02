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
    list.listItems()
        .eq(0)
        .should("contain.text", "Namn Kalle Anka")
        .and("contain.text", "Radindex 1");
    list.listItems()
        .eq(1)
        .should("contain.text", "Namn Joakim von Anka")
        .and("contain.text", "Radindex 5");
    list.listItems()
        .eq(2)
        .should("contain.text", "Namn Alexander Lukas")
        .and("contain.text", "Radindex 6");
    list.listItems()
        .eq(3)
        .should("contain.text", "Namn Oppfinnar-Jocke")
        .and("contain.text", "Radindex 7");
    list.listItems()
        .eq(4)
        .should("contain.text", "Namn Magica de Hex")
        .and("contain.text", "Radindex 8");

    const selector = `${selectors.listItemByIndex(0)} .list`;
    const children = new FListPageObject(selector);
    children.listItems().should("have.length", 3);
    children
        .listItems()
        .eq(0)
        .should("contain.text", "Namn Knatte Anka")
        .and("contain.text", "Radindex 2");
    children
        .listItems()
        .eq(1)
        .should("contain.text", "Namn Fnatte Anka")
        .and("contain.text", "Radindex 3");
    children
        .listItems()
        .eq(2)
        .should("contain.text", "Namn Tjatte Anka")
        .and("contain.text", "Radindex 4");
});

it("should show correct info on second page", () => {
    cy.viewport(800, 600);
    cy.mount(FPaginatorDatasetExample);
    paginator.pageButton(1).click();

    list.listItems().should("have.length", 3);
    list.listItems()
        .eq(0)
        .should("contain.text", "Namn Knase Anka")
        .and("contain.text", "Radindex 9");
    list.listItems()
        .eq(1)
        .should("contain.text", "Namn Kajsa Anka")
        .and("contain.text", "Radindex 10");
    list.listItems()
        .eq(2)
        .should("contain.text", "Namn Farmor Anka")
        .and("contain.text", "Radindex 14");

    const selector = `${selectors.listItemByIndex(1)} .list`;
    const children = new FListPageObject(selector);
    children.listItems().should("have.length", 3);
    children
        .listItems()
        .eq(0)
        .should("contain.text", "Namn Kicki Anka")
        .and("contain.text", "Radindex 11");
    children
        .listItems()
        .eq(1)
        .should("contain.text", "Namn Pippi Anka")
        .and("contain.text", "Radindex 12");
    children
        .listItems()
        .eq(2)
        .should("contain.text", "Namn Titti Anka")
        .and("contain.text", "Radindex 13");
});
