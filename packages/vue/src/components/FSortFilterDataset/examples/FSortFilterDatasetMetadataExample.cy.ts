import { FListSelectors } from "../../../selectors";
import FSortFilterDatasetMetadataExample from "./FSortFilterDatasetMetadataExample.vue";
import {
    FListPageObject,
    FSortFilterDatasetPageObject,
} from "@fkui/vue/cypress";

const selectors = FListSelectors("#rows");
const list = new FListPageObject("#rows");
const sortFilter = new FSortFilterDatasetPageObject(".sort-filter-dataset");

it("should preserve original row index when sorting", () => {
    cy.mount(FSortFilterDatasetMetadataExample);

    sortFilter.selectField.dropdown().select("Land (stigande)");

    list.listItems().should("have.length", 4);

    list.listItems()
        .eq(0)
        .should("contain.text", "Namn Banan")
        .and("contain.text", "Land Colombia")
        .and("contain.text", "Radindex 2");

    list.listItems()
        .eq(1)
        .should("contain.text", "Namn Vattenmelon")
        .and("contain.text", "Land Spanien")
        .and("contain.text", "Radindex 3");

    list.listItems()
        .eq(2)
        .should("contain.text", "Äpple")
        .and("contain.text", "Land Sverige")
        .and("contain.text", "Radindex 1");

    list.listItems()
        .eq(3)
        .should("contain.text", "Namn Grapefrukt")
        .and("contain.text", "Land Turkiet")
        .and("contain.text", "Radindex 4");
});

it("should preserve original row index when filtering", () => {
    cy.mount(FSortFilterDatasetMetadataExample);

    sortFilter.textField.input().type("grape");

    list.listItems().should("have.length", 1);

    list.listItems()
        .eq(0)
        .should("contain.text", "Namn Grapefrukt")
        .and("contain.text", "Land Turkiet")
        .and("contain.text", "Radindex 4");
});
