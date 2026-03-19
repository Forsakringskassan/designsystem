import { type DefineComponent, defineComponent } from "vue";
import { FFileSelectorPageObject } from "../../cypress";
import FFileSelector from "./FFileSelector.vue";

function createComponent(template: string): DefineComponent {
    return defineComponent({
        template,
        name: "FFileSelectorEnabled",
        components: { FFileSelector },
    });
}

describe("FFileSelector", () => {
    const fileSelectorEnabled = new FFileSelectorPageObject(
        '[data-test="enabledFileSelector"]',
    );
    const fileSelectorDisabled = new FFileSelectorPageObject(
        '[data-test="disabledFileSelector"]',
    );

    it("enabled fileselector should be visible, clickable and have a paper-clip icon", () => {
        const template = /* HTML */ `
            <f-file-selector
                v-test="'enabledFileSelector'"
                accept="application/pdf, image/jpeg, image/tiff, image/png"
            >
                Lägg till fil
            </f-file-selector>
        `;
        cy.mount(createComponent(template));
        fileSelectorEnabled.el().should("be.visible").click();
        fileSelectorEnabled.icon().should("be.visible");
        fileSelectorEnabled.addFile().should("not.have.attr", "aria-disabled");
    });

    it("disabled fileselector should be disabled", () => {
        const template = /* HTML */ `
            <f-file-selector
                id="dis"
                v-test="'disabledFileSelector'"
                accept="image/jpeg, image/tiff"
                disabled
            >
                Lägg till fil
            </f-file-selector>
        `;
        cy.mount(createComponent(template));
        fileSelectorDisabled
            .addFile()
            .should("have.attr", "aria-disabled", "true");
    });
});
