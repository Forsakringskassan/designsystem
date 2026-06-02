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
    it("should provide a page object that can access any necessary elements", () => {
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
                        <template #header>
                            Mer om berätta om dig själv
                        </template>
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
                    <span :class="formatDescriptionClass">
                        (max 100 tecken)
                    </span>
                </template>
            </f-textarea-field>
        `;
        cy.mount(createComponent(template));
        const berattelseTextareaField = new FTextareaFieldPageObject(
            '[data-test="berattelse-text-field"]',
        );
        berattelseTextareaField.label
            .el()
            .should("contain.text", "Berätta om dig själv");
        berattelseTextareaField.label
            .description()
            .should("contain.text", "En inte allt för utförlig berättelse");
        berattelseTextareaField.label
            .formatDescription()
            .should("contain.text", "(max 100 tecken)");
        berattelseTextareaField.label.errorMessage().should("not.exist");
        berattelseTextareaField.label.errorIcon().should("not.exist");

        berattelseTextareaField
            .input()
            .focus()
            .clear()
            .type("asd000")
            .should("have.value", "asd000")
            .should("have.focus")
            .blur()
            .should("not.have.focus");

        berattelseTextareaField.enter("qwe456");
        berattelseTextareaField.value().should("be.equal", "qwe456");

        berattelseTextareaField.tooltip.iButton().should("be.visible");
        berattelseTextareaField.tooltip.iButton().click();
    });

    describe("autoResize", () => {
        it("should grow and shrink with content in the browser", () => {
            const template = /* HTML */ `
                <f-textarea-field
                    id="auto-resize"
                    v-model="about"
                    auto-resize
                    rows="1"
                >
                    Berätta om dig själv
                </f-textarea-field>
            `;
            let initialHeight = 0;
            let expandedHeight = 0;

            cy.mount(createComponent(template));
            cy.get("textarea")
                .should("have.attr", "rows", "1")
                .should(($textarea) => {
                    const textarea = $textarea[0] as HTMLTextAreaElement;
                    initialHeight = textarea.getBoundingClientRect().height;

                    expect(initialHeight).to.be.greaterThan(0);
                });
            cy.get("textarea").type(
                ["Rad 1", "Rad 2", "Rad 3", "Rad 4"].join("{enter}"),
            );
            cy.get("textarea").should(($textarea) => {
                const textarea = $textarea[0] as HTMLTextAreaElement;
                expandedHeight = textarea.getBoundingClientRect().height;

                expect(expandedHeight).to.be.greaterThan(initialHeight + 20);
                expect(
                    getComputedStyle(textarea).getPropertyValue("field-sizing"),
                ).to.equal("content");
            });
            cy.get("textarea").should("have.focus");
            cy.get("textarea").clear();
            cy.get("textarea").should(($textarea) => {
                const textarea = $textarea[0] as HTMLTextAreaElement;

                expect(textarea.getBoundingClientRect().height).to.be.lessThan(
                    expandedHeight,
                );
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
                    Berätta om dig själv
                </f-textarea-field>
            `;

            cy.mount(createComponent(template));
            cy.get("textarea").type(
                ["Rad 1", "Rad 2", "Rad 3", "Rad 4", "Rad 5"].join("{enter}"),
            );
            cy.get("textarea").should(($textarea) => {
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

        it(`should be densified`, () => {
            cy.viewport(densityWrapperWidth, densityWrapperHeight);
            cy.mount(DensityComponent);
            cy.toMatchScreenshot();
        });
    });
});
