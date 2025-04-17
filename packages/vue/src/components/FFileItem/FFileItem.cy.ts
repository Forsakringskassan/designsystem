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
                            class="button button--discrete file-item__file-remove file-item__abort"
                        >
                            <f-icon name="close" class="button__icon"></f-icon>
                            <span> Avbryt uppladdning </span>
                        </button>
                        <button
                            v-else-if="progress === 100"
                            type="button"
                            class="button button--discrete file-item__file-remove"
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
});
