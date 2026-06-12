import { type DefineComponent, defineComponent } from "vue";
import {
    DensityWrapper,
    densityWrapperHeight,
    densityWrapperWidth,
} from "@fkui/test-utils/vue";
import { FTextareaFieldPageObject } from "../../cypress";
import { FTooltip } from "../FTooltip";
import FTextareaField from "./FTextareaField.vue";

function createComponent(template: string): DefineComponent {
    return defineComponent({
        template,
        components: {
            FTextareaField,
            FTooltip,
        },
        data() {
            return {
                about: "",
            };
        },
    });
}

describe("FTextareaField", () => {
    const template = /* HTML */ `
        <f-textarea-field
            id="berattelse-tooltip"
            v-model="about"
            v-test="'berattelse-text-field'"
            :maxlength="100"
            :soft-limit="20"
            characters-left-warning="Antal tecken kvar: %charactersLeft%"
        >
            <template #default> Berätta om dig själv </template>
            <template #tooltip>
                <f-tooltip
                    screen-reader-text="Läs mer om berätta om dig själv"
                    header-tag="h1"
                >
                    <template #header> Mer om berätta om dig själv </template>
                    <template #body>
                        Denna berättelsen kräver lite närmare förklaring.
                    </template>
                </f-tooltip>
            </template>
            <template
                #description="{ descriptionClass, formatDescriptionClass }"
            >
                <span :class="descriptionClass">
                    En inte allt för utförlig berättelse
                </span>
                <span :class="formatDescriptionClass"> (max 100 tecken) </span>
            </template>
        </f-textarea-field>
    `;

    it("should provide a page object that can access any necessary elements", () => {
        cy.mount(createComponent(template));
        const textField = new FTextareaFieldPageObject(
            '[data-test="berattelse-text-field"]',
        );
        textField.label.el().should("contain.text", "Berätta om dig själv");
        textField.label
            .description()
            .should("contain.text", "En inte allt för utförlig berättelse");
        textField.label
            .formatDescription()
            .should("contain.text", "(max 100 tecken)");
        textField.label.errorMessage().should("not.exist");
        textField.label.errorIcon().should("not.exist");

        textField
            .input()
            .focus()
            .clear()
            .type("asd000")
            .should("have.value", "asd000")
            .should("have.focus")
            .blur()
            .should("not.have.focus");

        textField.enter("qwe456");
        textField.value().should("be.equal", "qwe456");

        textField.tooltip.iButton().should("be.visible");
        textField.tooltip.iButton().click();
    });

    describe("autoResize", () => {
        const textArea = new FTextareaFieldPageObject(".textarea-field");

        it("should grow and shrink with content in the browser", () => {
            let initialHeight = 0;
            let expandedHeight = 0;

            const template = /* HTML */ `
                <f-textarea-field
                    id="auto-resize"
                    v-model="about"
                    auto-resize
                    rows="1"
                    :max-rows="3"
                >
                    <template #default> Berätta om dig själv </template>
                </f-textarea-field>
            `;
            cy.mount(createComponent(template));

            textArea.input().should("have.attr", "rows", "1");

            textArea.input().then(($textarea) => {
                const textarea = $textarea[0] as HTMLTextAreaElement;
                initialHeight = textarea.getBoundingClientRect().height;
                expect(initialHeight).to.be.greaterThan(0);
            });

            textArea.input().type("Rad 1\nRad 2\nRad 3\nRad 4");

            // Verifierar att textarea har vuxit minst en hel rad efter input.
            textArea.input().then(($textarea) => {
                const textarea = $textarea[0] as HTMLTextAreaElement;
                const style = getComputedStyle(textarea);

                const lineHeight = Number.parseFloat(style.lineHeight);
                expandedHeight = textarea.getBoundingClientRect().height;

                expect(expandedHeight).to.be.greaterThan(
                    initialHeight + lineHeight,
                );

                expect(
                    getComputedStyle(textarea).getPropertyValue("field-sizing"),
                ).to.equal("content");
            });

            textArea.input().should("have.focus");
            textArea.input().clear();

            textArea.input().then(($textarea) => {
                const textarea = $textarea[0] as HTMLTextAreaElement;
                const style = getComputedStyle(textarea);

                const lineHeight = Number.parseFloat(style.lineHeight);
                const shrunkHeight = textarea.getBoundingClientRect().height;

                expect(shrunkHeight).to.be.at.most(expandedHeight - lineHeight);
            });
        });

        it("should limit height when maxRows is used", () => {
            const template = /* HTML */ `
                <f-textarea-field
                    id="auto-resize-max-rows"
                    v-model="about"
                    auto-resize
                    rows="1"
                    :max-rows="3"
                >
                    <template #default> Berätta om dig själv </template>
                </f-textarea-field>
            `;
            cy.mount(createComponent(template));

            textArea.input().type("Rad 1\nRad 2\nRad 3\nRad 4\nRad 5");

            textArea.input().then(($textarea) => {
                const textarea = $textarea[0] as HTMLTextAreaElement;
                const style = getComputedStyle(textarea);
                const height = textarea.getBoundingClientRect().height;
                const maxHeight = Number.parseFloat(style.maxHeight);

                expect(style.getPropertyValue("field-sizing")).to.equal(
                    "content",
                );
                expect(style.overflowY).to.equal("auto");
                expect(maxHeight).to.be.greaterThan(0);
                expect(height).to.be.at.most(maxHeight + 1);
            });
        });
    });

    describe("density", () => {
        const DensityComponent = defineComponent({
            template: /* HTML */ `
                <density-wrapper>
                    <f-textarea-field v-model="textAreaField" :maxlength="100">
                        Flerradigt inmatningsfält
                    </f-textarea-field>
                </density-wrapper>
            `,
            components: {
                DensityWrapper,
                FTextareaField,
            },
            data() {
                return {
                    textAreaField: [1, 2, 3, 4]
                        .map((it) => `Rad ${it}`)
                        .join("\n"),
                };
            },
        });

        it(`should be densified (visual)`, () => {
            cy.viewport(densityWrapperWidth, densityWrapperHeight);
            cy.mount(DensityComponent);
            cy.toMatchScreenshot();
        });
    });

    describe("Visual forcedColor", () => {
        const forcedColorModes = ["none", "dark", "light"] as const;
        afterEach(() => {
            cy.forcedColors("none");
        });
        for (const mode of Object.values(forcedColorModes)) {
            it(`should render correct styling for mode, ${mode} (visual)`, () => {
                cy.forcedColors(mode);

                cy.mount(createComponent(template));
                const textField = new FTextareaFieldPageObject(
                    '[data-test="berattelse-text-field"]',
                );

                textField.enter("qwe456");
                textField.value().should("be.equal", "qwe456");

                textField.tooltip.iButton().should("be.visible");
                textField.tooltip.iButton().click();

                textField.el().toMatchScreenshot();
            });
        }
    });
});
