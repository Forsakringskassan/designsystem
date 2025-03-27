<script setup lang="ts">
import { reactive } from "vue";
import {
    FDetailsPanel,
    FInteractiveTable,
    FPageLayout,
    FResizePane,
    FTableColumn,
    FTextField,
    useDetailsPanel,
} from "@fkui/vue";

interface Row {
    id: number;
    column1: string;
    column2: string;
    column3: string;
    column4: string;
}

const name = "edit-panel";
const panel = useDetailsPanel<Row>(name);
const ExamplePanel = FDetailsPanel<Row>;

const rows = reactive([
    { id: 1, column1: "Text11", column2: "Text12", column3: "Text13", column4: "Text14" },
    { id: 2, column1: "Text21", column2: "Text22", column3: "Text23", column4: "Text24" },
    { id: 3, column1: "Text31", column2: "Text33", column3: "Text33", column4: "Text34" },
    { id: 4, column1: "Text41", column2: "Text44", column3: "Text43", column4: "Text44" },
    { id: 5, column1: "Text51", column2: "Text52", column3: "Text53", column4: "Text54" },
    { id: 6, column1: "Text61", column2: "Text62", column3: "Text63", column4: "Text64" },
    { id: 7, column1: "Text71", column2: "Text72", column3: "Text73", column4: "Text74" },
    { id: 8, column1: "Text81", column2: "Text82", column3: "Text83", column4: "Text84" },
    { id: 9, column1: "Text91", column2: "Text92", column3: "Text93", column4: "Text94" },
]);

function openPanel(row: Row): void {
    /* to handle when the panel is closed without saving we avoid mutating the
     * row directly by creating a copy and when saving we write down the actual
     * values */
    const copy = { ...row };
    panel.open(copy, {
        onClose({ reason }) {
            if (reason === "save") {
                Object.assign(row, copy);
            }
        },
    });
}
</script>

<template>
    <div class="layout-container">
        <f-page-layout layout="three-column">
            <template #right>
                <!-- eslint-disable vue/no-deprecated-slot-attribute -- native slot -->
                <f-resize-pane min="200px" max="50%">
                    <example-panel :name>
                        <template #default="{ item, close, content }">
                            <div :slot="content">
                                <f-text-field
                                    v-model="item.column1"
                                    v-validation.required.maxLength="{ maxLength: { length: 10 } }"
                                >
                                    Etikett-rubrik 1
                                </f-text-field>
                                <f-text-field
                                    v-model="item.column2"
                                    v-validation.required.maxLength="{ maxLength: { length: 10 } }"
                                >
                                    Etikett-rubrik 2
                                </f-text-field>
                                <f-text-field
                                    v-model="item.column3"
                                    v-validation.required.maxLength="{ maxLength: { length: 10 } }"
                                >
                                    Etikett-rubrik 3
                                </f-text-field>
                                <f-text-field
                                    v-model="item.column4"
                                    v-validation.required.maxLength="{ maxLength: { length: 10 } }"
                                >
                                    Etikett-rubrik 4
                                </f-text-field>
                                <div class="button-group">
                                    <button
                                        class="button button-group__item button--primary button--small"
                                        type="button"
                                        @click="close('save')"
                                    >
                                        Spara
                                    </button>
                                    <button
                                        class="button button-group__item button--secondary button--small"
                                        type="button"
                                        @click="close()"
                                    >
                                        Avbryt
                                    </button>
                                </div>
                            </div>
                        </template>
                    </example-panel>
                </f-resize-pane>
            </template>
            <template #content>
                <f-interactive-table :rows key-attribute="id" @click="openPanel($event)">
                    <template #caption>Tabell</template>
                    <template #default="{ row }">
                        <f-table-column name="column1" title="Kolumnrubrik">
                            {{ row.column1 }}
                        </f-table-column>
                        <f-table-column name="column2" title="Kolumnrubrik">
                            {{ row.column2 }}
                        </f-table-column>
                        <f-table-column name="column3" title="Kolumnrubrik">
                            {{ row.column3 }}
                        </f-table-column>
                        <f-table-column name="column4" title="Kolumnrubrik">
                            {{ row.column4 }}
                        </f-table-column>
                    </template>
                </f-interactive-table>
            </template>
        </f-page-layout>
    </div>
</template>

<style scoped>
.layout-container {
    container-type: size;
    height: 520px;
}
</style>
