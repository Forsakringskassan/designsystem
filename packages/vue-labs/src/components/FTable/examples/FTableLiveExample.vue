<script lang="ts">
import { defineComponent, h } from "vue";
import { formatNumber } from "@fkui/logic";
import { FCheckboxField, FFieldset, FRadioField, FSelectField } from "@fkui/vue";
import { FTable, defineTableColumns } from "@fkui/vue-labs";
import { LiveExample, createElement } from "@forsakringskassan/docs-live-example";

interface Row {
    id: string;
    animal?: string;
    level: string;
    start: string;
    end: string;
    antal: string;
    expandableRows?: Row[];
    expandableContent?: Array<{
        id: string;
        content: string;
    }>;
    aktiv?: boolean;
}

const columnsBase = defineTableColumns<Row>([
    {
        type: "text",
        header: "Oformaterad text",
        value(row) {
            /* eslint-disable-next-line @typescript-eslint/no-unnecessary-type-conversion -- technical debt */
            return String(row.antal);
        },
    },
    {
        type: "checkbox",
        header: "Kryssruta",
        key: "aktiv",
        label: (row) => `Välj rad ${row.id}`,
        editable: true,
    },
    {
        type: "text",
        header: "Formatterad text",
        label: (row) => `Text för rad ${row.id}`,
        value(row) {
            return formatNumber(row.antal) ?? "";
        },
        editable: false,
    },

    {
        type: "text",
        header: "Redigerbar text",
        editable: true,
        key: "level",
        label: (row) => `Text för rad ${row.id}`,
        value(row) {
            return row.level;
        },
        update(row, newValue) {
            row.level = newValue;
        },
        validation: {
            required: {},
            maxLength: { length: 5 },
        },
    },
    {
        type: "button",
        header: "Knapp",
        icon: "bell",
        value(row) {
            return `Exempeltext för knapp med id ${row.id}`;
        },
        onClick: (row) => {
            alert(`Du klickade på rad med id ${row.id}`);
        },
    },
    {
        header: "Länk",
        type: "anchor",
        href: "#",
        value() {
            return "Länktext";
        },
    },
    {
        header: "Dropplista",
        type: "select",
        key: "animal",
        label: (row) => `Djur för rad ${row.id}`,
        options: ["Hund", "Katt", "Hamster", "Papegoja", "Spindel", "Guldfisk"],
        editable: true,
    },
    {
        header: "Render function",
        render() {
            return h("td", { id: "foo", class: "bar" }, ["👻"]);
        },
    },
]);

const columnsDefault = [
    ...defineTableColumns<Row>([
        {
            type: "text",
            header: "Oformaterad text",
            value(row) {
                /* eslint-disable-next-line @typescript-eslint/no-unnecessary-type-conversion -- technical debt */
                return String(row.antal);
            },
        },
    ]),
    ...columnsBase,
];

const columnsWithHeader = [
    ...defineTableColumns<Row>([
        {
            type: "rowheader",
            header: "Oformaterad text",
            value(row) {
                /* eslint-disable-next-line @typescript-eslint/no-unnecessary-type-conversion -- technical debt */
                return String(row.antal);
            },
        },
    ]),
    ...columnsBase,
];

const rows: Row[] = [
    {
        id: "1",
        animal: "Katt",
        level: "Föräldrapenning",
        start: "2022-04-11",
        end: "2022-04-20",
        antal: "10000",
        aktiv: false,
        expandableRows: [
            {
                id: "1a",
                level: "Sjukpenningsnivå",
                start: "2022-04-18",
                end: "2022-04-20",
                antal: "30000",
            },
            {
                id: "1b",
                level: "Lägstanivå",
                start: "2022-04-16",
                end: "2022-04-17",
                antal: "20000",
            },
            {
                id: "1c",
                level: "Sjukpenningsnivå",
                start: "2022-04-11",
                end: "2022-04-15",
                antal: "50000",
            },
        ],
        expandableContent: [
            {
                id: "1a",
                content: "Anledning: Tar hand om barnet",
            },
        ],
    },
    {
        id: "2",
        animal: "Spindel",
        level: "Tillfällig föräldrapenning",
        start: "2022-05-02",
        end: "2022-05-04",
        antal: "30000",
        aktiv: false,
        expandableRows: [
            {
                id: "2a",
                level: "Heldag",
                start: "2022-05-02",
                end: "2022-05-04",
                antal: "30000",
            },
        ],
        expandableContent: [
            {
                id: "2a",
                content: "Anledning: Tar hand om barnet",
            },
        ],
    },
    {
        id: "3",
        animal: "Hamster",
        level: "Föräldrapenning",
        start: "2022-05-16",
        end: "2022-05-27",
        antal: "11000",
        aktiv: true,
        expandableRows: [
            {
                id: "3a",
                level: "Sjukpenningsnivå",
                start: "2022-05-23",
                end: "2022-05-27",
                antal: "40000",
            },
            {
                id: "3b",
                level: "Lägstanivå",
                start: "2022-05-21",
                end: "2022-05-22",
                antal: "20000",
            },
            {
                id: "3c",
                level: "Sjukpenningsnivå",
                start: "2022-05-16",
                end: "2022-05-20",
                antal: "50000",
            },
        ],
        expandableContent: [
            {
                id: "3a",
                content: "Anledning: Tar hand om barnet",
            },
        ],
    },
];

export default defineComponent({
    name: "FTableLiveExample",
    components: { LiveExample, FCheckboxField, FFieldset, FRadioField, FSelectField },
    data() {
        return {
            isEmpty: false,
            striped: false,
            hasRowDescription: false,
            hasCustomEmptyText: false,
            hasHiddenCaption: false,
            hasRowHeader: false,
            selectable: "",
            isExpandable: false,
            hasCustomExpandContent: false,
            columnsWithHeader,
            columnsDefault,
            rows,
            selectedRows: [],
        };
    },
    computed: {
        livedata(): object {
            return {
                columns: this.hasRowHeader ? this.columnsWithHeader : this.columnsDefault,
                rows: this.isEmpty ? [] : this.rows,
                selectedRows: this.selectedRows,
            };
        },
        components(): object {
            return { FTable };
        },
        captionSlotTemplate(): string {
            return /* HTML */ `<template #caption>
                <span ${this.hasHiddenCaption ? `class="sr-only"` : ""}>
                    Tabell över exempel på kolumntyper
                </span>
            </template>`;
        },
        expandableAttribute(): string | undefined {
            if (!this.isExpandable) {
                return;
            }

            return this.hasCustomExpandContent ? "expandableContent" : "expandableRows";
        },
        expandableSlotTemplate(): string {
            if (!this.isExpandable || !this.hasCustomExpandContent) {
                return "";
            }

            return /* HTML */ ` <template #expandable="{ row }"> {{ row.content }} </template> `;
        },
        emptyTemplate(): string {
            if (!this.isEmpty || !this.hasCustomEmptyText) {
                return "";
            }

            return /* HTML */ `
                <template #empty> Det finns inga aktuella utbetalningar. </template>
            `;
        },

        template(): string {
            const { striped, selectable, expandableAttribute } = this;

            return createElement(
                "f-table",
                {
                    ":columns": "columns",
                    ":rows": "rows",
                    "v-model:selected-rows": selectable ? "selectedRows" : undefined,
                    "key-attribute": "id",
                    striped,
                    selectable,
                    expandableAttribute,
                },
                [this.captionSlotTemplate, this.expandableSlotTemplate, this.emptyTemplate],
            );
        },
    },
    watch: {
        selectable: {
            immediate: false,
            handler(): void {
                this.selectedRows = [];
            },
        },
    },
});
</script>

<template>
    <live-example :components :template :livedata>
        <!-- Styling -->
        <f-fieldset name="styling">
            <template #label> Visuellt </template>
            <f-checkbox-field v-model="striped" :value="true"> Zebrarandig </f-checkbox-field>
            <f-checkbox-field v-model="hasRowHeader" :value="true"> Radrubriker </f-checkbox-field>
            <f-checkbox-field v-model="hasHiddenCaption" :value="true">
                Dold caption
            </f-checkbox-field>
        </f-fieldset>

        <!-- Interaktion -->
        <f-fieldset name="interaktion">
            <template #label> Interaktion </template>
            <f-select-field v-model="selectable">
                <template #label> Valbara rader </template>
                <option value="">Nej</option>
                <option value="multi">Ja, flerval</option>
                <option value="single">Ja, enkelval</option>
            </f-select-field>
            <f-checkbox-field v-model="isExpandable" :value="true">
                Expanderbara rader
            </f-checkbox-field>
            <f-fieldset v-if="isExpandable" name="radio-expandable-type">
                <template #label> Typ av expanderat innehåll </template>
                <f-radio-field v-model="hasCustomExpandContent" :value="false">
                    Tabellrad
                </f-radio-field>
                <f-radio-field v-model="hasCustomExpandContent" :value="true">
                    Valfritt innehåll
                </f-radio-field>
            </f-fieldset>
            <f-checkbox-field v-model="isEmpty" :value="true"> Tom tabell </f-checkbox-field>
            <f-fieldset v-if="isEmpty" name="radio-empty-text">
                <template #label> Meddelande för tom tabell </template>
                <f-radio-field v-model="hasCustomEmptyText" :value="false">
                    Standardmeddelande
                </f-radio-field>
                <f-radio-field v-model="hasCustomEmptyText" :value="true">
                    Eget meddelande
                </f-radio-field>
            </f-fieldset>
        </f-fieldset>
    </live-example>
</template>
