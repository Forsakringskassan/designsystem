<script lang="ts">
import { defineComponent } from "vue";
import {
    FTextField,
    FTextareaField,
    FSelectField,
    FDatepickerField,
    FFieldset,
    FCheckboxField,
    FRadioField,
    FDataTable,
    FTableColumn,
    FList,
    FCard,
    FBadge,
    FExpandableParagraph,
    FExpandablePanel,
    FMessageBox,
    FTooltip,
    FIcon,
    FStaticField,
} from "@fkui/vue";

export default defineComponent({
    components: {
        FTextField,
        FTextareaField,
        FSelectField,
        FDatepickerField,
        FFieldset,
        FCheckboxField,
        FRadioField,
        FDataTable,
        FTableColumn,
        FList,
        FCard,
        FBadge,
        FExpandableParagraph,
        FExpandablePanel,
        FMessageBox,
        FTooltip,
        FIcon,
        FStaticField,
    },
    data() {
        return {
            components: [] as string[],
            densityLeft: "density-default",
            densityRight: "density-dense",
            textField: "Text",
            textAreaField: [1, 2, 3, 4].map((it) => `Rad ${it}`).join("\n"),
            selectField: "Text",
            datepickerField: "2024-01-01",
            checkboxField: [],
            radioField: "",
            dataTableRows: ["1", "2", "3"].map((id) => ({ id })),
            dataTableColumns: ["1", "2", "3"].map((id) => ({ id })),
            listItems: ["1", "2", "3"].map((id) => ({ id })),
            listSelectedItems: [],
        };
    },
    computed: {
        densities(): Array<{ class: string }> {
            return [this.densityLeft, this.densityRight].map((it) => ({ class: it }));
        },
    },
});
</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col col--sm-6">
                <f-fieldset name="density-left" chip horizontal>
                    <template #label> Vänster </template>
                    <f-radio-field v-model="densityLeft" value="density-default">
                        Standard
                    </f-radio-field>
                    <f-radio-field v-model="densityLeft" value="density-dense">
                        Kompakt
                    </f-radio-field>
                    <f-radio-field v-model="densityLeft" value="density-densest">
                        Extra kompakt
                    </f-radio-field>
                </f-fieldset>
            </div>

            <div class="col col--sm-6">
                <f-fieldset name="density-right" chip horizontal>
                    <template #label> Höger </template>
                    <f-radio-field v-model="densityRight" value="density-default">
                        Standard
                    </f-radio-field>
                    <f-radio-field v-model="densityRight" value="density-dense">
                        Kompakt
                    </f-radio-field>
                    <f-radio-field v-model="densityRight" value="density-densest">
                        Extra kompakt
                    </f-radio-field>
                </f-fieldset>
            </div>
        </div>

        <div class="row">
            <div
                v-for="density in densities"
                :key="density.class"
                class="col col--sm-6"
                :class="density.class"
            >
                <f-text-field v-model="textField" v-validation.required maxlength="100">
                    Inmatningsfält
                </f-text-field>

                <f-static-field>
                    <template #label> Presentationsfält - statiskt </template>
                    <template #tooltip>
                        <f-tooltip screen-reader-text="Skärmläsartext" header-tag="h2">
                            <template #header> Rubrik </template>
                            <template #body> Brödtext </template>
                        </f-tooltip>
                    </template>
                    <template #default> Text </template>
                </f-static-field>

                <div class="tooltip-before">
                    <label class="label tooltip-before__label"> Tooltip </label>
                </div>

                <f-textarea-field v-model="textAreaField" v-validation.required :maxlength="100">
                    Flerradigt inmatningsfält
                </f-textarea-field>

                <f-select-field v-model="selectField">
                    <template #label> Dropplista </template>
                    <option value="Text">Text</option>
                    <option value="Text2">Text 2</option>
                    <option value="Text3">Text 3</option>
                </f-select-field>

                <f-datepicker-field v-model="datepickerField" v-validation.required maxlength="100">
                    Datumväljare
                </f-datepicker-field>

                <f-fieldset v-validation.required>
                    <template #label> Kryssrutegrupp </template>
                    <f-checkbox-field v-model="checkboxField" value="Kryssruta1">
                        Kryssruta
                    </f-checkbox-field>
                    <f-checkbox-field v-model="checkboxField" value="Kryssruta2">
                        Kryssruta
                    </f-checkbox-field>
                    <f-checkbox-field v-model="checkboxField" value="Kryssruta3">
                        Kryssruta
                    </f-checkbox-field>
                    <f-checkbox-field v-model="checkboxField" value="Kryssruta4">
                        Kryssruta
                    </f-checkbox-field>
                </f-fieldset>

                <f-fieldset v-validation.required :name="`radio-${density.class}`">
                    <template #label> Radioknappsgrupp </template>
                    <f-radio-field v-model="radioField" value="Radio1"> Text </f-radio-field>
                    <f-radio-field v-model="radioField" value="Radio2"> Text </f-radio-field>
                    <f-radio-field v-model="radioField" value="Radio3"> Text </f-radio-field>
                    <f-radio-field v-model="radioField" value="Radio4"> Text </f-radio-field>
                </f-fieldset>

                <f-data-table :rows="dataTableRows" striped key-attribute="id">
                    <template #caption> Tabell </template>
                    <template #default>
                        <f-table-column
                            v-for="column in dataTableColumns"
                            :key="column.id"
                            title="Kolumnrubrik"
                            type="text"
                        >
                            Text
                        </f-table-column>
                    </template>
                </f-data-table>

                <f-list v-model="listSelectedItems" key-attribute="id" :items="listItems">
                    <template #default> Lista </template>
                </f-list>

                <f-card>
                    <template #header="{ headingSlotClass }">
                        <h3 :class="headingSlotClass">Kort</h3>
                    </template>
                    <template #default> Innehåll </template>
                    <template #footer>
                        <div class="button-group">
                            <button
                                class="button button-group__item button--tertiary button--medium button--align-text"
                                type="button"
                            >
                                <f-icon name="pen"></f-icon>
                                <span> Ändra </span>
                            </button>
                            <button
                                class="button button-group__item button--tertiary button--medium button--align-text"
                                type="button"
                            >
                                <f-icon name="trashcan"></f-icon>
                                <span> Ta bort </span>
                            </button>
                        </div>
                    </template>
                </f-card>

                <div class="button-group">
                    <button
                        class="button button--primary button--medium button-group__item"
                        type="button"
                    >
                        Medium
                    </button>
                    <button
                        class="button button--secondary button--medium button-group__item"
                        type="button"
                    >
                        Medium
                    </button>
                    <button
                        class="button button--tertiary button--medium button-group__item"
                        type="button"
                    >
                        <f-icon name="paper-clip" class="button__icon"></f-icon> Medium
                    </button>
                </div>

                <div class="button-group">
                    <button
                        class="button button--primary button--large button-group__item"
                        type="button"
                    >
                        Large
                    </button>
                    <button
                        class="button button--secondary button--large button-group__item"
                        type="button"
                    >
                        Large
                    </button>
                    <button
                        class="button button--tertiary button--large button-group__item"
                        type="button"
                    >
                        <f-icon name="paper-clip" class="button__icon"></f-icon> Large
                    </button>
                </div>

                <f-badge> Bricka </f-badge>
                <f-badge status="info"> Bricka </f-badge>

                <f-expandable-paragraph :expanded="true">
                    <template #title> Expanderbart stycke </template>
                    <template #default> Innehåll </template>
                </f-expandable-paragraph>

                <f-expandable-panel :expanded="true">
                    <template #title> Expanderbar panel </template>
                    <template #default> Innehåll </template>
                </f-expandable-panel>

                <f-message-box type="info">
                    <template #default="{ headingSlotClass }">
                        <h2 :class="headingSlotClass">Meddelanderuta</h2>
                        <p>Brödtext</p>
                    </template>
                </f-message-box>
            </div>
        </div>
    </div>
</template>
