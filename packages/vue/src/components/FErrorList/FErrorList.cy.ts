import { defineComponent } from "vue";
import {
    DensityWrapper,
    densityWrapperHeight,
    densityWrapperWidth,
} from "@fkui/test-utils/vue";
import { FErrorListPageObject } from "../../pageobject";
import FErrorList from "./FErrorList.vue";

const errorlist = new FErrorListPageObject(".error-list");

describe("FErrorList tests", () => {
    it("should handle errors with or without assigned element id", () => {
        cy.mount(FErrorList, {
            props: {
                items: [
                    { id: "foo", title: "With id" },
                    { title: "Without id" },
                ],
            },
        });

        errorlist.hasError("With id").should("be.true");
        errorlist.hasError("Without id").should("be.true");
        errorlist.getLinkByName("With id").should("exist");
        errorlist.getLinkByName("Without id").should("not.exist");
    });

    describe("density", () => {
        const DensityComponent = defineComponent({
            template: /* HTML */ `
                <density-wrapper>
                    <f-error-list
                        :items="[ { id: 'foo', title: 'Med länk' }, { title: 'Utan länk' } ]"
                    >
                        <template #title> Kolla på felen nedan </template>
                    </f-error-list>
                </density-wrapper>
            `,
            components: {
                DensityWrapper,
                FErrorList,
            },
        });

        it(`should be densified`, () => {
            cy.viewport(densityWrapperWidth, densityWrapperHeight);
            cy.mount(DensityComponent);
            cy.toMatchScreenshot();
        });
    });
});
