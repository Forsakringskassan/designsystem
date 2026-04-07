import { type DefineComponent, defineComponent } from "vue";
import { FFileItemPageObject } from "../../cypress";
import { FButton } from "../FButton";
import { FProgressbar } from "../FProgressbar";
import FFileItem from "./FFileItem.vue";

function createComponent(template: string): DefineComponent {
    return defineComponent({
        template,
        components: { FButton, FFileItem, FProgressbar },
        data() {
            return {
                fileName: "bar.pdf",
                mimeType: "application/pdf",
                progress: 30,
                filteredProgress: 30,
            };
        },
    });
}

describe("FFileItem", () => {
    const fileItem = new FFileItemPageObject("[data-test=file-item]");

    it("Should have a page object that can access any necessary elements", () => {
        const template = /* HTML */ `
            <div>
                <label>
                    Progress:
                    <input
                        id="upload-progress"
                        v-model.number="progress"
                        type="number"
                        style="margin-bottom: 20px"
                        @input="filteredProgress = progress === '' ? 0 : progress"
                /></label>
                <f-file-item
                    v-test="'file-item'"
                    :file-name="fileName"
                    :mime-type="mimeType"
                >
                    <template #row>
                        <f-button
                            v-if="progress < 100"
                            class="file-item__file-remove"
                            icon-left="close"
                            variant="tertiary"
                        >
                            Avbryt uppladdning
                        </f-button>
                        <f-button
                            v-else-if="progress === 100"
                            class="file-item__file-remove"
                            icon-left="trashcan"
                            variant="tertiary"
                        >
                            Ta bort
                        </f-button>
                    </template>
                    <f-progressbar
                        v-if="progress < 100"
                        aria-label="progress"
                        :value="filteredProgress"
                    ></f-progressbar>
                </f-file-item>
            </div>
        `;
        cy.mount(createComponent(template));
        fileItem.fileName().should("have.trimmedText", "bar.pdf");
        fileItem.typeOfFile().should("be.equal", "pdf");
        fileItem
            ._cancelDeleteButton()
            .should("have.trimmedText", "Avbryt uppladdning");
        fileItem.typeOfButtonIcon().should("be.equal", "close");
        const selector = "#upload-progress";
        cy.get(selector).clear();
        cy.get(selector).type("30");
        fileItem._progressMeter.progressMeter().should("be.visible");
        cy.get(selector).clear();
        cy.get(selector).type("100");
        fileItem._progressMeter.progressMeter().should("not.exist");
        fileItem.typeOfButtonIcon().should("be.equal", "trashcan");
    });

    it("should wrap file name without natural breakpoints on multiple lines", () => {
        cy.viewport(400, 300);
        const fileName =
            "lorem_ipsum_dolor_sit_amet_consectetur_adipiscing_elit.pdf";
        cy.mount(FFileItem, { props: { fileName } });
        const pageObject = new FFileItemPageObject(".file-item");
        pageObject.fileName().should("have.trimmedText", fileName);
        cy.get(pageObject.selector).toMatchScreenshot();
    });

    it("should wrap multiple file name,short, long with hyphen and long with word visual", () => {
        cy.viewport(400, 300);
        const fileNameShort = "lorem-ipsum.pdf";
        const fileNameHyphen =
            "lorem_ipsum_dolor_sit_amet-consect_adipiscing_elit.pdf";
        const fileNameWord =
            "lorem ipsum dolor sit amet consect adipiscing elit.pdf";
        const fileNameLong = "loremipsumdolorsitametconsectadipiscingelit.pdf";
        const testComponent = defineComponent({
            components: { FFileItem },
            template: /* HTML */ `
                <div id="files">
                    <p>FFileItem med kort filnamn.</p>
                    <f-file-item file-name="${fileNameShort}"> </f-file-item>
                    <p>FFileItem med långt namn (skiljetecken)</p>
                    <f-file-item file-name="${fileNameHyphen}"> </f-file-item>
                    <p>FFileItem med långt namn (whitespace)</p>
                    <f-file-item file-name="${fileNameWord}"> </f-file-item>
                    <p>FFileItem med långt namn (utan skiljetecken)</p>
                    <f-file-item file-name="${fileNameLong}"> </f-file-item>
                </div>
            `,
        });
        cy.mount(testComponent);
        cy.get("#files").toMatchScreenshot();
    });

    it("should with row slot wrap file name without natural breakpoints on multiple lines", () => {
        cy.viewport(400, 300);
        const fileName =
            "lorem_ipsum_dolor_sit_amet_consectetur_adipiscing_elit.pdf";
        const row = defineComponent({
            components: { FButton },
            template: /* HTML */ `
                <f-button
                    class="file-item__file-remove"
                    icon-left="trashcan"
                    variant="tertiary"
                >
                    Ta bort
                </f-button>
            `,
        });
        cy.mount(FFileItem, { props: { fileName }, slots: { row } });
        const pageObject = new FFileItemPageObject(".file-item");
        pageObject.fileName().should("have.trimmedText", fileName);
        cy.get(pageObject.selector).toMatchScreenshot();
    });

    describe("Visual", () => {
        const forcedColorModes = ["none", "dark", "light"] as const;

        for (const mode of forcedColorModes) {
            it(`should render correct styling for forced color mode '${mode}'`, () => {
                cy.viewport(300, 100);
                cy.forcedColors(mode);
                cy.mount(FFileItem, {
                    props: {
                        fileName: "visualExample.pdf",
                        mimeType: "application/pdf",
                    },
                });
                cy.toMatchScreenshot();
            });
        }
    });
});
