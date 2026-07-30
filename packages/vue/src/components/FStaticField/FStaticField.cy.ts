import { defineComponent } from "vue";
import { FStaticFieldPageObject } from "../../cypress";
import FStaticFieldInput from "./examples/FStaticFieldInput.vue";
import FStaticFieldTooltipDescription from "./examples/FStaticFieldTooltipDescription.vue";
import { FStaticField, FTooltip } from "@fkui/vue";

describe("FStaticField", () => {
    it("static field with textfield: should provide a page object that can access any necessary elements", () => {
        cy.mount(FStaticFieldInput);
        const staticField = new FStaticFieldPageObject(
            "[data-test] .output-field",
        );
        staticField.label.el().eq(0).should("have.trimmedText", "Beskrivning");
        staticField.tooltip.el().should("not.exist");
        staticField
            .body()
            .should("have.trimmedText", "En liten statisk beskrivning.");
    });

    it("static field with tooltip: should provide a page object that can access any necessary elements", () => {
        cy.mount(FStaticFieldTooltipDescription);
        const staticFieldWithTooltip = new FStaticFieldPageObject(
            "[data-test] .output-field",
        );
        staticFieldWithTooltip.label.el().should("contain.text", "Etikett");
        staticFieldWithTooltip.tooltip.el().should("not.be.visible");
        staticFieldWithTooltip.tooltip.iButton().click();
        staticFieldWithTooltip.tooltip.el().should("be.visible");
        staticFieldWithTooltip
            .body()
            .should("have.trimmedText", "En liten statisk text.");
    });
});

describe("Visual forcedColor", () => {
    const forcedColorModes = ["none", "dark", "light"] as const;

    afterEach(() => {
        cy.forcedColors("none");
    });
    for (const mode of Object.values(forcedColorModes)) {
        it(`static field with tooltip, ${mode} (visual)`, () => {
            cy.forcedColors(mode);
            const TestComponent = defineComponent({
                components: { FStaticField, FTooltip },
                template: /* HTML */ `
                    <div data-test="output-field">
                        <f-static-field>
                            <template #label> Etikett </template>
                            <template #tooltip>
                                <f-tooltip
                                    screen-reader-text="Läs mer om avancerat fält"
                                    header-tag="h2"
                                >
                                    <template #header>
                                        Mer om avancerat fält
                                    </template>
                                    <template #body>
                                        Detta fältet kräver lite närmare
                                        förklaring.
                                    </template>
                                </f-tooltip>
                            </template>
                            <template
                                #description="{ descriptionClass, formatDescriptionClass }"
                            >
                                <span :class="descriptionClass">
                                    Beskrivning av etikett
                                </span>
                                <span :class="formatDescriptionClass">
                                    (format)
                                </span>
                            </template>
                            <template #default>
                                En liten statisk text.
                            </template>
                        </f-static-field>
                    </div>
                `,
            });
            cy.mount(TestComponent);
            const staticFieldWithTooltip = new FStaticFieldPageObject(
                "[data-test] .output-field",
            );

            staticFieldWithTooltip.tooltip.iButton().click();
            staticFieldWithTooltip.el().toMatchScreenshot();
        });
    }
});
