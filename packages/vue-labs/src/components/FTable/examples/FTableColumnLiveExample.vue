<script lang="ts">
import { defineComponent, h } from "vue";
import { FCheckboxField, FFieldset, FRadioField, FSelectField } from "@fkui/vue";
import {
    type TableColumn,
    FTable,
    defineTableColumns as defineTableColumnsFunc,
} from "@fkui/vue-labs";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import { type InputType } from "../input-fields-config";
import { defaultTnumValue, isTextColumn } from "../table-column";
import { stringifyObject } from "./stringify-object";

interface Row {
    id?: number;
    value?: string | number | boolean;
}

// eslint-disable-next-line complexity -- testdata
function getColumn(options: {
    columnType: string;
    description?: boolean;
    tnum?: boolean;
    align?: "left" | "right";
    enabled?: boolean;
    editable?: boolean;
}): TableColumn<Row> {
    const { columnType, description, tnum, align, enabled, editable } = options;
    let column: TableColumn<Row>;

    switch (columnType) {
        case "checkbox":
            column = {
                type: "checkbox",
                header: "Kryssruta",
                key: "value",
            };
            break;
        case "radio":
            column = {
                type: "radio",
                header: "Radioknapp",
                key: "value",
            };
            break;
        case "text:currency":
            column = {
                type: "text:currency",
                header: "Valuta",
                key: "value",
            };
            break;
        case "text:number":
            column = {
                type: "text:number",
                decimals: 3,
                header: "Numeriskt, tre decimaler",
                key: "value",
            };
            break;
        case "text:percent": {
            column = {
                type: "text:percent",
                decimals: 2,
                header: "Procent, två decimaler",
                key: "value",
            };
            break;
        }
        case "text":
            column = {
                type: "text",
                header: "Fritext",
                key: "value",
            };
            break;
        case "text:bankAccountNumber":
            column = {
                type: "text:bankAccountNumber",
                header: "Kontonummer",
                key: "value",
            };
            break;
        case "text:bankgiro":
            column = {
                type: "text:bankgiro",
                header: "Bankgiro",
                key: "value",
            };
            break;
        case "text:clearingNumber":
            column = {
                type: "text:clearingNumber",
                header: "Clearingnummer",
                key: "value",
            };
            break;
        case "text:email":
            column = {
                type: "text:email",
                header: "Mejladress",
                key: "value",
            };
            break;
        case "text:organisationsnummer":
            column = {
                type: "text:organisationsnummer",
                header: "Organisationsnummer",
                key: "value",
            };
            break;
        case "text:personnummer":
            column = {
                type: "text:personnummer",
                header: "Personnummer",
                key: "value",
            };
            break;
        case "text:phoneNumber":
            column = {
                type: "text:phoneNumber",
                header: "Telefonnummer",
                key: "value",
            };
            break;
        case "text:plusgiro":
            column = {
                type: "text:plusgiro",
                header: "Plusgiro",
                key: "value",
            };
            break;
        case "text:postalCode": {
            column = {
                type: "text:postalCode",
                header: "Postnummer",
                key: "value",
            };
            break;
        }
        case "rowheader":
            column = {
                type: "rowheader",
                header: "Radrubrik",
                key: "value",
            };
            break;
        case "anchor":
            column = {
                type: "anchor",
                header: "Länk",
                key: "value",
                href: "#",
            };
            break;
        case "button":
            column = {
                type: "button",
                header: "Knapp",
                key: "value",
                icon: "bell",
            };
            break;
        case "select":
            column = {
                type: "select",
                header: "Dropplista",
                key: "value",
                options: ["Foo", "Bar", "Baz"],
            };
            break;

        default:
            throw new Error("unknown type");
    }

    if (description) {
        column.description = "Formatbeskrivning";
    }

    if (tnum !== undefined && isTextColumn(column)) {
        column.tnum = tnum;
    }

    if (align !== undefined && isTextColumn(column)) {
        column.align = align;
    }

    if (editable !== undefined && isTextColumn(column)) {
        column.editable = editable;
    }

    if ((enabled !== undefined && column.type === "button") || column.type === "anchor") {
        column.enabled = enabled;
    }

    return column;
}

function getRow(options: { columnType: string }): Row {
    const { columnType } = options;
    const row: Row = {
        id: 1,
    };

    switch (columnType) {
        case "checkbox":
            row.value = true;
            break;
        case "radio":
            row.value = true;
            break;
        case "text:currency":
            row.value = 3453455;
            break;
        case "text:number":
            row.value = 5.4;
            break;
        case "text:percent": {
            row.value = 9.987;
            break;
        }
        case "text":
            row.value = "aaa";
            break;
        case "text:bankAccountNumber":
            row.value = "12345678";
            break;
        case "text:bankgiro":
            row.value = "999-9996";
            break;
        case "text:clearingNumber":
            row.value = "5678";
            break;
        case "text:email":
            row.value = "a.b@example.net";
            break;
        case "text:organisationsnummer":
            row.value = "9999999999";
            break;
        case "text:personnummer":
            row.value = "19120211-9150";
            break;
        case "text:phoneNumber":
            row.value = "12345678901234567";
            break;
        case "text:plusgiro":
            row.value = "11111119";
            break;
        case "text:postalCode": {
            row.value = "37324";
            break;
        }
        case "rowheader":
            row.value = "Lag 1";
            break;
        case "anchor":
            row.value = "Exempel";
            break;
        case "button":
            row.value = "Exempel";
            break;
        case "select":
            row.value = "Foo";
            break;

        default:
            throw new Error("unknown type");
    }

    return row;
}

export default defineComponent({
    name: "FTableColumnLiveExample",
    components: { LiveExample, FSelectField, FFieldset, FCheckboxField, FRadioField },
    data() {
        return {
            columnType: "text",
            textType: "text",
            descriptionChecked: false,
            tnumChecked: false,
            tnum: false,
            alignChecked: false,
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
        defaultTNUM(): string {
            return defaultTnumValue(this.textType as InputType) ? "på" : "av";
        },
        defaultAlign(): string {
            if (this.columnType === "text") {
                return ["text:currency", "text:number", "text:percent"].includes(this.textType)
                    ? "höger"
                    : "vänster";
            }

            return "-";
        },
        enabledSupport(): boolean {
            return ["anchor", "button"].includes(this.columnType);
        },
        editableSupport(): boolean {
            return ["checkbox", "select", "text"].includes(this.columnType);
        },
        normalizedKey(): string {
            return this.columnType === "text" ? this.textType : this.columnType;
        },
        columns(): string {
            const column = getColumn({
                columnType: this.normalizedKey,
                description: this.descriptionChecked,
                tnum: this.tnumSupport && this.tnumChecked ? this.tnum : undefined,
                align: this.alignChecked ? this.align : undefined,
                editable: this.editableSupport ? this.editableChecked : undefined,
                enabled: this.enabledSupport ? this.enabledChecked : undefined,
            });

            return `defineTableColumns([${stringifyObject(column as unknown as Record<string, unknown>)}])`;
        },
        rows(): string {
            const row = getRow({ columnType: this.normalizedKey });

            return `[${stringifyObject(row as Record<string, unknown>)}]`;
        },
        template(): string {
            return `<f-table :columns="${this.columns}" :rows="${this.rows}"></f-table>`;
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

        <f-select-field v-if="columnType === 'text'" v-model="textType">
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
        </f-select-field>

        <f-checkbox-field v-if="editableSupport" v-model="editableChecked" :value="true"
            >Redigerbar</f-checkbox-field
        >
        <f-checkbox-field v-if="enabledSupport" v-model="enabledChecked" :value="true"
            >Enabled</f-checkbox-field
        >

        <f-fieldset name="visuellt">
            <template #label> Visuellt </template>

            <template v-if="alignSupport">
                <f-checkbox-field v-model="alignChecked" :value="true">
                    Ange justering (default: {{ defaultAlign }})
                </f-checkbox-field>
                <f-fieldset v-if="alignChecked" name="align">
                    <template #label> Justering </template>
                    <f-radio-field v-model="align" value="left"> Vänster </f-radio-field>
                    <f-radio-field v-model="align" value="right"> Höger </f-radio-field>
                </f-fieldset>
            </template>

            <template v-if="tnumSupport">
                <f-checkbox-field v-model="tnumChecked" :value="true">
                    Ange TNUM (default: {{ defaultTNUM }})
                </f-checkbox-field>
                <f-fieldset v-if="tnumChecked" name="tnum">
                    <template #label> TNUM </template>
                    <f-radio-field v-model="tnum" :value="false"> Av </f-radio-field>
                    <f-radio-field v-model="tnum" :value="true"> På </f-radio-field>
                </f-fieldset>
            </template>
        </f-fieldset>

        <f-fieldset name="rubrik">
            <template #label> Rubriken </template>

            <f-checkbox-field v-model="descriptionChecked" :value="true">
                Formatbeskrivning
            </f-checkbox-field>
        </f-fieldset>
    </live-example>
</template>
