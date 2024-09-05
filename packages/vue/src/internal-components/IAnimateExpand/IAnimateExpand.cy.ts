import IAnimateExpandTestComponent from "./examples/IAnimateExpandTestComponent.vue";

describe("tests", () => {
    it("Should animate expand", () => {
        cy.mount(IAnimateExpandTestComponent);
        cy.clock().then((clock) => {
            cy.get("button").click({ waitForAnimations: false });
            cy.get("button").then(() => {
                clock.tick(2);
                cy.get(".animate-expand")
                    .invoke("height")
                    .should("be.lessThan", 200)
                    .and("be.greaterThan", 0);
                clock.tick(200);
                cy.get(".animate-expand")
                    .invoke("height")
                    .should("be.equal", 200);
                clock.restore();
            });
        });
    });

    it("Should animate collapse", () => {
        cy.mount(IAnimateExpandTestComponent);
        cy.clock().then((clock) => {
            cy.get("button").click();
            cy.get(".animate-expand").invoke("height").should("be.equal", 200);
            cy.get("button").click({ waitForAnimations: false });
            cy.get("button").then(() => {
                clock.tick(2);
                cy.get(".animate-expand")
                    .invoke("height")
                    .should("be.lessThan", 200)
                    .and("be.greaterThan", 0);
                clock.tick(200);
                cy.get(".animate-expand")
                    .invoke("height")
                    .should("be.equal", 0);
                clock.restore();
            });
        });
    });
});
