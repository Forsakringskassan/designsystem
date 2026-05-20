describe("validate documentation navigation...", () => {
    before(() => {
        cy.getAxeConfigThisFile().then((config) => {
            config.ignoreAxeFailures = true;
            cy.setAxeConfigThisFile(config);
        });
    });

    beforeEach(() => {
        cy.viewport(1024, 768); // Desktop view

        cy.session("cookie-warning", () => {
            cy.visit("/");
            cy.setCookie("doc-hide-cookie-warning", "");
        });
        cy.visit("/");
    });

    it("should have more than zero links in the top navigation", () => {
        cy.get("#topnav").should("be.visible").and("have.class", "docs-topnav");
        cy.get("#topnav a.docs-topnav__anchor").should(
            "have.length.greaterThan",
            0,
        );
    });

    it("each top nav link should have links in the side navigation bar", () => {
        cy.get("#topnav a.docs-topnav__anchor").then(($links) => {
            const hrefs = [...$links].map(
                (el) => (el as HTMLAnchorElement).href,
            );

            for (const href of hrefs) {
                cy.visit(href);
                cy.get("#sidenav a").should("have.length.greaterThan", 0);
            }
        });
    });
});
