<script lang="ts">
import { defineComponent, h } from "vue";
import { FDate } from "@fkui/date";
import {
    FCheckboxField,
    FFieldset,
    FRadioField,
    FSelectField,
    getHTMLElementFromVueRef,
} from "@fkui/vue";
import {
    type TableColumn,
    FTable,
    defineTableColumns as defineTableColumnsFunc,
} from "@fkui/vue-labs";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import { defaultTnumValue } from "../columns/helpers";
import { type InputType } from "../input-fields-config";
import { isEnableColumn } from "../is-enable-column";
import { isTextColumn } from "../is-text-column";
import { type TableColumnType, isEditableColumn } from "../table-column";
import { stringifyObject } from "./stringify-object";

interface Row {
    id?: number;
    value: string | number | boolean;
}

const columnData: Record<TableColumnType, TableColumn<Row>> = {
    checkbox: {
        type: "checkbox",
        header: "Kryssruta",
        key: "value",
    },
    radio: {
        type: "radio",
        header: "Radioknapp",
        key: "value",
    },
    "text:currency": {
        type: "text:currency",
        header: "Valuta",
        key: "value",
    },
    "text:number": {
        type: "text:number",
        decimals: 3,
        header: "Numeriskt, tre decimaler",
        key: "value",
    },
    "text:percent": {
        type: "text:percent",
        decimals: 2,
        header: "Procent, två decimaler",
        key: "value",
    },
    text: {
        type: "text",
        header: "Fritext",
        key: "value",
    },
    "text:bankAccountNumber": {
        type: "text:bankAccountNumber",
        header: "Kontonummer",
        key: "value",
    },
    "text:bankgiro": {
        type: "text:bankgiro",
        header: "Bankgiro",
        key: "value",
    },
    "text:clearingNumber": {
        type: "text:clearingNumber",
        header: "Clearingnummer",
        key: "value",
    },
    "text:email": {
        type: "text:email",
        header: "Mejladress",
        key: "value",
    },
    "text:organisationsnummer": {
        type: "text:organisationsnummer",
        header: "Organisationsnummer",
        key: "value",
    },
    "text:personnummer": {
        type: "text:personnummer",
        header: "Personnummer",
        key: "value",
    },
    "text:phoneNumber": {
        type: "text:phoneNumber",
        header: "Telefonnummer",
        key: "value",
    },
    "text:plusgiro": {
        type: "text:plusgiro",
        header: "Plusgiro",
        key: "value",
    },
    "text:postalCode": {
        type: "text:postalCode",
        header: "Postnummer",
        key: "value",
    },
    rowheader: {
        type: "rowheader",
        header: "Radrubrik",
        key: "value",
    },
    anchor: {
        type: "anchor",
        header: "Länk",
        text: () => "value",
        href: "#",
    },
    button: {
        type: "button",
        header: "Knapp",
        text: () => "value",
        icon: "bell",
    },
    select: {
        type: "select",
        header: "Dropplista",
        key: "value",
        options: ["Foo", "Bar", "Baz"],
    },
    "text:date": {
        type: "text:date",
        header: "Datum",
        key: "value",
    },
    menu: {
        type: "menu",
        header: "Kontextmeny",
        text() {
            return "Skärmläsartext";
        },
    },
};

const rowData: Record<TableColumnType, Array<string | number | boolean>> = {
    checkbox: [true, false],
    radio: [true, false],
    "text:currency": [3453455, 10000],
    "text:number": [5.4, 10.5],
    "text:percent": [9.987, 51],
    text: ["Six seven", "Skibidi"],
    "text:bankAccountNumber": ["12345678", "1234567890123456"],
    "text:bankgiro": ["999-9996", "9999-9997"],
    "text:clearingNumber": ["5678", "5678-1"],
    "text:email": ["sixseven@example.net", "skibidi@example.net"],
    "text:organisationsnummer": ["9999999999", "9999999999"],
    "text:personnummer": ["19120211-9150", "19970131-2390"],
    "text:phoneNumber": ["12345678901234567", "123456789012345678"],
    "text:plusgiro": ["11111119", "9999996"],
    "text:postalCode": ["37324", "93222"],
    "text:date": [FDate.now().toString(), FDate.now().addDays(1).toString()],
    rowheader: ["Six seven", "Skibidi"],
    anchor: ["Six seven", "Skibidi"],
    button: ["Six seven", "Skibidi"],
    select: ["Foo"],
    menu: ["Foo", "Bar", "Baz"],
};

function getColumn(options: {
    columnType: TableColumnType;
    description?: boolean;
    tnum?: boolean;
    align?: "left" | "right";
    enabled?: boolean;
    editable?: boolean;
}): TableColumn<Row> {
    const { columnType, description, tnum, align, enabled, editable } = options;
    const column = { ...columnData[columnType] };

    if (description) {
        column.description = "Formatbeskrivning";
    }

    if (tnum !== undefined && isTextColumn(column)) {
        column.tnum = tnum;
    }

    if (align !== undefined && isTextColumn(column)) {
        column.align = align;
    }

    if (editable !== undefined && isEditableColumn(column)) {
        column.editable = editable;
    }

    if (enabled !== undefined && isEnableColumn(column)) {
        column.enabled = enabled;
    }

    return column;
}

function getRows(options: { columnType: TableColumnType }): Row[] {
    const { columnType } = options;

    return rowData[columnType].map((it, index) => ({ id: index + 1, value: it }));
}

export default defineComponent({
    name: "FTableColumnLiveExample",
    components: { LiveExample, FSelectField, FFieldset, FCheckboxField, FRadioField },
    data() {
        return {
            columnType: "text" as TableColumnType,
            textType: "text" as TableColumnType,
            descriptionChecked: false,
            tnum: false,
            align: "left" as "left" | "right",
            editableChecked: true,
            enabledChecked: true,
        };
    },
    computed: {
        livemethods(): object {
            return {
                defineTableColumns: defineTableColumnsFunc,
            };
        },
        components(): object {
            return { FTable };
        },
        tnumSupport(): boolean {
            return this.columnType === "text";
        },
        alignSupport(): boolean {
            return this.columnType === "text";
        },
        defaultTNUM(): boolean {
            return defaultTnumValue(this.textType as InputType);
        },
        defaultAlign(): "left" | "right" {
            if (this.columnType === "text") {
                return ["text:currency", "text:number", "text:percent"].includes(this.textType)
                    ? "right"
                    : "left";
            }

            return "left";
        },
        alignLeftText(): string {
            return this.defaultAlign === "left" ? "Vänster (default)" : "Vänster";
        },
        alignRightText(): string {
            return this.defaultAlign === "right" ? "Höger (default)" : "Höger";
        },
        tnumOffText(): string {
            return !this.defaultTNUM ? "Av (default)" : "Av";
        },
        tnumOnText(): string {
            return this.defaultTNUM ? "På (default)" : "På";
        },
        enabledSupport(): boolean {
            return ["anchor", "button"].includes(this.columnType);
        },
        editableSupport(): boolean {
            return ["checkbox", "select", "text"].includes(this.columnType);
        },
        normalizedKey(): TableColumnType {
            return this.columnType === "text" ? this.textType : this.columnType;
        },
        columns(): string {
            const column = getColumn({
                columnType: this.normalizedKey,
                description: this.descriptionChecked,
                tnum: this.tnumSupport && this.tnum !== this.defaultTNUM ? this.tnum : undefined,
                align:
                    this.alignSupport && this.align !== this.defaultAlign ? this.align : undefined,
                editable: this.editableSupport ? this.editableChecked : undefined,
                enabled: this.enabledSupport ? this.enabledChecked : undefined,
            });

            return `defineTableColumns([${stringifyObject(column as unknown as Record<string, unknown>)}])`;
        },
        rows(): string {
            const rows = getRows({ columnType: this.normalizedKey });
            const stringified = rows
                .map((it) => stringifyObject(it as unknown as Record<string, unknown>))
                .join(", ");

            return `[${stringified}]`;
        },
        template(): string {
            return `<f-table :columns="${this.columns}" :rows="${this.rows}"></f-table>`;
        },
    },
    mounted() {
        this.limitTableWidth();
    },
    updated() {
        this.limitTableWidth();
    },
    methods: {
        limitTableWidth() {
            const root = getHTMLElementFromVueRef(this.$el);
            const table = root.querySelector("table");

            if (table) {
                table.style.width = "300px";
            }
        },
        onTextTypeChange() {
            this.align = this.defaultAlign;
            this.tnum = this.defaultTNUM;
        },
    },
});
</script>

<template>
    <live-example :components :template :livemethods>
        <f-select-field v-model="columnType">
            <template #label> Kolumntyp </template>
            <option value="text">Text</option>
            <option value="checkbox">Kryssruta</option>
            <option value="radio">Radioknapp</option>
            <option value="rowheader">Radrubrik</option>
            <option value="anchor">Länk</option>
            <option value="button">Knapp</option>
            <option value="select">Dropplista</option>
        </f-select-field>

        <f-select-field v-if="columnType === 'text'" v-model="textType" @change="onTextTypeChange">
            <template #label> Texttyp </template>
            <option value="text">Fritext</option>
            <option value="text:bankgiro">Bankgiro</option>
            <option value="text:clearingNumber">Clearingnummer</option>
            <option value="text:bankAccountNumber">Kontonummer</option>
            <option value="text:email">Mejladress</option>
            <option value="text:number">Numeriskt</option>
            <option value="text:organisationsnummer">Organisationsnummer</option>
            <option value="text:personnummer">Personnummer</option>
            <option value="text:plusgiro">Plusgiro</option>
            <option value="text:postalCode">Postnummer</option>
            <option value="text:percent">Procent</option>
            <option value="text:phoneNumber">Telefonnummer</option>
            <option value="text:currency">Valuta</option>
            <option value="text:date">Datum</option>
        </f-select-field>

        <f-checkbox-field v-if="editableSupport" v-model="editableChecked" :value="true"
            >Redigerbar</f-checkbox-field
        >
        <f-checkbox-field v-if="enabledSupport" v-model="enabledChecked" :value="true"
            >Enabled</f-checkbox-field
        >

        <f-fieldset v-if="alignSupport" name="align">
            <template #label> Justering </template>
            <f-radio-field v-model="align" value="left">
                {{ alignLeftText }}
            </f-radio-field>
            <f-radio-field v-model="align" value="right">
                {{ alignRightText }}
            </f-radio-field>
        </f-fieldset>

        <f-fieldset v-if="tnumSupport" name="tnum">
            <template #label> TNUM </template>
            <f-radio-field v-model="tnum" :value="false"> {{ tnumOffText }} </f-radio-field>
            <f-radio-field v-model="tnum" :value="true"> {{ tnumOnText }} </f-radio-field>
        </f-fieldset>

        <f-fieldset name="rubrik">
            <template #label> Rubriken </template>

            <f-checkbox-field v-model="descriptionChecked" :value="true">
                Formatbeskrivning
            </f-checkbox-field>
        </f-fieldset>
    </live-example>
</template>
