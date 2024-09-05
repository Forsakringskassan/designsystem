import { type Manifest } from "@forsakringskassan/docs-generator";

type ManifestPage = Manifest["pages"][number];
type ManifestExample = ManifestPage["examples"][number];

function isLiveExample(example: ManifestExample): boolean {
    return example.tags.includes("live-example");
}

it("should visit all pages and ensure examples load properly", () => {
    cy.task<ManifestPage[]>("getDocsPages").then((pages) => {
        for (const page of pages) {
            const { path, examples } = page;
            const liveExamples = examples.filter(isLiveExample);
            if (liveExamples.length === 0) {
                continue;
            }

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

                cy.get(container).should("exist");
                cy.get(runtime).should("exist").and("not.be.empty");
                cy.get(controls).should("exist").and("not.be.empty");
                cy.get(code).should("exist");
                cy.get(toggleCode).click();
                cy.get(markup).should("exist");
                cy.get(markup).invoke("text").should("not.be.empty");
                cy.get(errorhandler).should("not.exist");
            }
        }
    });
});
