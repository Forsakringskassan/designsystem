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

beforeEach(() => {
    cy.session("cookie-warning", () => {
        cy.visit("/");
        cy.setCookie("doc-hide-cookie-warning", "");
    });
});

describe("should visit all pages and ensure examples load properly", () => {
    Cypress.env("pages").forEach((page: ManifestPage) => {
        const { path, examples } = page;
        const liveExamples = examples.filter(isLiveExample);
        const vuePreviewExamples = examples.filter(isVuePreviewExample);

        if (liveExamples.length === 0 && vuePreviewExamples.length === 0) {
            return;
        }

        it(path, () => {
            cy.visit(path);

            for (const example of liveExamples) {
                const selector = example.selector;
                const container = `${selector} .live-example__container`;
                const runtime = `${selector} .live-example__example`;
                const controls = `${selector} .live-example__controls`;
                const code = `${selector} .live-example__code`;
                const toggleCode = `${code} button`;
                const markup = `${code} code`;
                const errorhandler = `${selector} [data-test=f-error-page]`;

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

                cy.get(preview).should(($el) => {
                    expect($el, path).to.exist.and.not.be.empty;
                });
                cy.get(errorhandler).should(($el) => {
                    expect($el, path).not.to.exist;
                });
            }
        });
    });
});
