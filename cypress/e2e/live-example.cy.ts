/* eslint-disable @typescript-eslint/no-unused-expressions -- expect style assertions have side-effects */

import { type Manifest } from "@forsakringskassan/docs-generator";

type ManifestPage = Manifest["pages"][number];
type ManifestExample = ManifestPage["examples"][number];

function isLiveExample(example: ManifestExample): boolean {
    return example.tags.includes("live-example");
}

function isVuePreviewExample(example: ManifestExample): boolean {
    return (
        example.language === "vue" &&
        !example.tags.includes("live-example") &&
        !example.tags.includes("static")
    );
}

function showDocsViewForExample(selector: string): void {
    cy.get(selector).then(($example) => {
        const view = $example
            .closest("[data-docs-view]")
            .attr("data-docs-view");

        if (view) {
            cy.get(`[data-docs-view-link="${view}"]`).click();
        }
    });
}

function assertDocsViewInitialized(): void {
    cy.get("body").then(($body) => {
        const viewLinks = $body.find("[data-docs-view-link]");

        if (viewLinks.length === 0) {
            return;
        }

        const activeLinks = viewLinks.filter('[aria-current="page"]');
        expect(activeLinks).to.have.length(1);

        const activeView = activeLinks.attr("data-docs-view-link");
        cy.get(`[data-docs-view="${activeView}"]`).should("be.visible");
        cy.get(`[data-docs-view]:not([data-docs-view="${activeView}"])`).should(
            "not.be.visible",
        );
    });
}

describe("validate documentation examples...", () => {
    const pages = Cypress.expose("pages");

    describe("should validate that there are pages", () => {
        before(() => {
            cy.getAxeConfigThisFile().then((config) => {
                config.ignoreAxeFailures = true;
                cy.setAxeConfigThisFile(config);
            });
        });

        it("should have more than zero pages", () => {
            expect(pages).to.exist;
            expect(pages.length).to.be.greaterThan(0);
        });
    });

    describe("should visit all pages and ensure examples load properly", () => {
        before(() => {
            cy.getAxeConfigThisFile().then((config) => {
                config.ignoreAxeFailures = false;
                cy.setAxeConfigThisFile(config);
            });
        });

        beforeEach(() => {
            cy.session("cookie-warning", () => {
                cy.visit("/");
                cy.setCookie("doc-hide-cookie-warning", "");
            });
        });

        const docPages = pages ?? [];
        for (const page of docPages) {
            const { path, examples } = page;
            const liveExamples = examples.filter(isLiveExample);
            const vuePreviewExamples = examples.filter(isVuePreviewExample);

            if (liveExamples.length === 0 && vuePreviewExamples.length === 0) {
                continue;
            }

            it(path, () => {
                cy.visit(path);
                assertDocsViewInitialized();
                cy.then(() => {
                    const count = Cypress.$(".mermaid").length;
                    if (count > 0) {
                        cy.get('.mermaid[data-processed="true"]').should(
                            "have.length",
                            count,
                        );
                    }
                });
                for (const example of liveExamples) {
                    const selector = example.selector;
                    const container = `${selector} .live-example__container`;
                    const runtime = `${selector} .live-example__example`;
                    const controls = `${selector} .live-example__controls`;
                    const code = `${selector} .live-example__code`;
                    const toggleCode = `${code} button`;
                    const markup = `${code} code`;
                    const errorhandler = `${selector} [data-test=f-error-page]`;

                    showDocsViewForExample(selector);
                    cy.get(container).should(($el) => {
                        expect($el, path).to.exist;
                    });
                    cy.get(runtime).should(($el) => {
                        expect($el, path).to.exist.and.not.be.empty;
                    });
                    cy.get(controls).should(($el) => {
                        expect($el, path).to.exist.and.not.be.empty;
                    });
                    cy.get(code).should(($el) => {
                        expect($el, path).to.exist;
                    });

                    cy.get(toggleCode).click();
                    cy.get(markup).should(($el) => {
                        expect($el, path).to.exist;
                        expect($el.text(), path).not.be.empty;
                    });
                    cy.get(errorhandler).should(($el) => {
                        expect($el, path).not.to.exist;
                    });
                }

                for (const example of vuePreviewExamples) {
                    const selector = example.selector;
                    const preview = `${selector} .code-preview__preview`;
                    const errorhandler = `${selector} [data-test=f-error-page]`;

                    showDocsViewForExample(selector);
                    cy.get(preview).should(($el) => {
                        expect($el, path).to.exist.and.not.be.empty;
                    });
                    cy.get(errorhandler).should(($el) => {
                        expect($el, path).not.to.exist;
                    });
                }
            });
        }
    });
});
