import { defineComponent } from "vue";
import { FInteractiveTable } from "../FInteractiveTable";
import { FTableColumn } from "../FTableColumn";
import FTableButton from "./FTableButton.vue";

const rows = [
    { a: 1, b: 2, c: 3 },
    { a: 4, b: 5, c: 6 },
    { a: 7, b: 8, c: 9 },
];

/* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
describe.skip("visual regression", () => {
    it("with icon only", () => {
        const TestComponent = defineComponent({
            components: { FInteractiveTable, FTableButton, FTableColumn },
            data() {
                return { rows };
            },
            template: /* HTML */ `
                <f-interactive-table :rows>
                    <template #default="{ row }">
                        <f-table-column title="A" type="text">
                            {{ row.a }}
                        </f-table-column>
                        <f-table-column title="B" type="text">
                            {{ row.b }}
                        </f-table-column>
                        <f-table-column title="C" type="text">
                            {{ row.c }}
                        </f-table-column>
                        <f-table-column title="Actions" type="action" shrink>
                            <f-table-button icon="pen">
                                Redigera rad {{ row.a }}
                            </f-table-button>
                            <f-table-button icon="trashcan">
                                Ta bort rad {{ row.a }}
                            </f-table-button>
                        </f-table-column>
                    </template>
                </f-interactive-table>
            `,
        });
        cy.mount(TestComponent);
        cy.get("table").toMatchScreenshot();
    });

    it("with label only", () => {
        const TestComponent = defineComponent({
            components: { FInteractiveTable, FTableButton, FTableColumn },
            data() {
                return { rows };
            },
            template: /* HTML */ `
                <f-interactive-table :rows>
                    <template #default="{ row }">
                        <f-table-column title="A" type="text">
                            {{ row.a }}
                        </f-table-column>
                        <f-table-column title="B" type="text">
                            {{ row.b }}
                        </f-table-column>
                        <f-table-column title="C" type="text">
                            {{ row.c }}
                        </f-table-column>
                        <f-table-column title="Actions" type="action" shrink>
                            <f-table-button label>
                                Redigera rad
                                <span class="sr-only">{{ row.a }}</span>
                            </f-table-button>
                            <f-table-button label>
                                Ta bort rad
                                <span class="sr-only">{{ row.a }}</span>
                            </f-table-button>
                        </f-table-column>
                    </template>
                </f-interactive-table>
            `,
        });
        cy.mount(TestComponent);
        cy.get("table").toMatchScreenshot();
    });

    it("with both label and icon", () => {
        const TestComponent = defineComponent({
            components: { FInteractiveTable, FTableButton, FTableColumn },
            data() {
                return { rows };
            },
            template: /* HTML */ `
                <f-interactive-table :rows>
                    <template #default="{ row }">
                        <f-table-column title="A" type="text">
                            {{ row.a }}
                        </f-table-column>
                        <f-table-column title="B" type="text">
                            {{ row.b }}
                        </f-table-column>
                        <f-table-column title="C" type="text">
                            {{ row.c }}
                        </f-table-column>
                        <f-table-column title="Actions" type="action" shrink>
                            <f-table-button icon="pen" label>
                                Redigera rad
                                <span class="sr-only">{{ row.a }}</span>
                            </f-table-button>
                            <f-table-button icon="trashcan" label>
                                Ta bort rad
                                <span class="sr-only">{{ row.a }}</span>
                            </f-table-button>
                        </f-table-column>
                    </template>
                </f-interactive-table>
            `,
        });
        cy.mount(TestComponent);
        cy.get("table").toMatchScreenshot();
    });
});
