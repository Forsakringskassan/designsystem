import { defineComponent } from "vue";
import {
    SizeWrapper,
    sizeWrapperWidth,
    sizeWrapperHeight,
    DensityWrapper,
    densityWrapperWidth,
    densityWrapperHeight,
} from "@fkui/test-utils/vue";
import { FOutputFieldPageobject } from "../../cypress";
import { FTextField } from "../FTextField";
import FOutputField from "./FOutputField.vue";

const TestComponent = defineComponent({
    template: /* HTML */ `
        <size-wrapper>
            <template #default="{ variant }">
                <div class="row">
                    <div class="col col--md-6">
                        <f-text-field
                            v-model="value"
                            :id="'awesome-id--' + variant"
                        >
                            Värde
                        </f-text-field>
                    </div>
                    <div class="col col--md-6" v-test="'output-field'">
                        <f-output-field :for="'awesome-id--' + variant">
                            <template #label> Beräknat värde </template>
                            <template #default> {{ value + 1 }} </template>
                        </f-output-field>
                    </div>
                </div>
            </template>
        </size-wrapper>
    `,
    components: {
        SizeWrapper,
        FOutputField,
        FTextField,
    },
    data() {
        return {
            value: 3,
        };
    },
});
it("should provide a page object that can access any necessary elements", () => {
    cy.mount(TestComponent);
    const output = new FOutputFieldPageobject("[data-test] .output-field");
    output.label.el().eq(0).should("have.trimmedText", "Beräknat värde");
    output.body().eq(0).should("have.trimmedText", "4");
});

/* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
it.skip(`should match screenshot`, () => {
    cy.viewport(sizeWrapperWidth, sizeWrapperHeight);
    cy.mount(TestComponent);
    cy.toMatchScreenshot();
});

/* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
describe.skip("density", () => {
    const DensityComponent = defineComponent({
        template: /* HTML */ `
            <density-wrapper>
                <f-text-field v-model="value"> Värde </f-text-field>
                <f-output-field>
                    <template #label> Beräknat värde </template>
                    <template #default> {{value + 1}} </template>
                </f-output-field>
            </density-wrapper>
        `,
        components: {
            DensityWrapper,
            FTextField,
            FOutputField,
        },
        data() {
            return { value: 1 };
        },
    });

    it(`should be densified`, () => {
        cy.viewport(densityWrapperWidth, densityWrapperHeight);
        cy.mount(DensityComponent);
        cy.toMatchScreenshot();
    });
});
