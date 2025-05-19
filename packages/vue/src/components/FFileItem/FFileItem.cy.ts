import { type DefineComponent, defineComponent } from "vue";
import { FFileItemPageObject } from "../../cypress";
import { FIcon } from "../FIcon";
import { FProgressbar } from "../FProgressbar";
import FFileItem from "./FFileItem.vue";

function createComponent(template: string): DefineComponent {
    return defineComponent({
        template,
        components: { FFileItem, FIcon, FProgressbar },
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
                        <button
                            v-if="progress < 100"
                            type="button"
                            class="button button--tertiary file-item__file-remove file-item__abort"
                        >
                            <f-icon name="close" class="button__icon"></f-icon>
                            <span> Avbryt uppladdning </span>
                        </button>
                        <button
                            v-else-if="progress === 100"
                            type="button"
                            class="button button--tertiary file-item__file-remove"
                        >
                            <f-icon
                                name="trashcan"
                                class="button__icon"
                            ></f-icon>
                            Ta bort
                        </button>
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

    /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
    it.skip("should wrap file name without natural breakpoints on multiple lines", () => {
        cy.viewport(400, 300);
        const fileName =
            "lorem_ipsum_dolor_sit_amet_consectetur_adipiscing_elit.pdf";
        cy.mount(FFileItem, { props: { fileName } });
        const pageObject = new FFileItemPageObject(".file-item");
        pageObject.fileName().should("have.trimmedText", fileName);
        cy.get(pageObject.selector).toMatchScreenshot();
    });

    /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
    it.skip("should with row slot wrap file name without natural breakpoints on multiple lines", () => {
        cy.viewport(400, 300);
        const fileName =
            "lorem_ipsum_dolor_sit_amet_consectetur_adipiscing_elit.pdf";
        const row = defineComponent({
            components: { FIcon },
            template: /* HTML */ `
                <button
                    type="button"
                    class="button button--tertiary button--medium file-item__file-remove"
                >
                    <f-icon name="trashcan" class="button__icon"></f-icon>
                    Ta bort
                </button>
            `,
        });
        cy.mount(FFileItem, { props: { fileName }, slots: { row } });
        const pageObject = new FFileItemPageObject(".file-item");
        pageObject.fileName().should("have.trimmedText", fileName);
        cy.get(pageObject.selector).toMatchScreenshot();
    });
});
