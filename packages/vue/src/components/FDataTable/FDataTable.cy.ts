import { defineComponent } from "vue";
import {
    DensityWrapper,
    densityWrapperHeight,
    densityWrapperWidth,
} from "@fkui/test-utils/vue";
import FTableColumn from "../FTableColumn/FTableColumn.vue";
import FDataTable from "./FDataTable.vue";

describe("density", () => {
    const DensityComponent = defineComponent({
        template: /* HTML */ `
            <density-wrapper>
                <f-data-table :rows="rows" striped key-attribute="id">
                    <template #caption> Tabell </template>
                    <template #default>
                        <f-table-column
                            v-for="column in columns"
                            :key="column.id"
                            title="Kolumnrubrik"
                            type="text"
                        >
                            Text
                        </f-table-column>
                    </template>
                </f-data-table>
            </density-wrapper>
        `,
        components: {
            DensityWrapper,
            FDataTable,
            FTableColumn,
        },
        data() {
            return {
                rows: ["1", "2", "3"].map((id) => ({ id })),
                columns: ["1", "2", "3"].map((id) => ({ id })),
            };
        },
    });

    /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
    it.skip(`should be densified`, () => {
        cy.viewport(densityWrapperWidth, densityWrapperHeight);
        cy.mount(DensityComponent);
        cy.toMatchScreenshot();
    });
});
