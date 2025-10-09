<script setup lang="ts" generic="RowValue">
import { ref } from "vue";
import { FTable } from "@fkui/vue-labs";
import { defineTableColumns, type TableColumn, type TableColumnText } from "../table-column";

interface Row {
    id: string;
    text: string;
    pnr: string;
    bankAccountNumber: string;
    bankgiro: string;
    clearingNumber: string;
    currency: string;
    number: number;
    epost: string;
    orgnr: string;
    tele: string;
    percent: number;
    postnr: string;
    plusgiro: string;
}

const columns = defineTableColumns<Row, RowValue, keyof Row>([
    {
        type: "text",
        header: "Text",
        key: "text",
        editable: true,
    },
    {
        type: "text",
        subtype: "personnummer",
        header: "Pnr",
        key: "pnr",
        editable: true,
    },
    {
        type: "text",
        subtype: "bankAccountNumber",
        header: "Kontonr",
        key: "bankAccountNumber",
        editable: true,
    },
    {
        type: "text",
        subtype: "bankgiro",
        header: "Bankgiro",
        key: "bankgiro",
        editable: true,
    },
    {
        type: "text",
        subtype: "clearingNumber",
        header: "Clearingnr",
        key: "clearingNumber",
        editable: true,
    },
    {
        type: "text",
        subtype: "currency",
        header: "Valuta",
        key: "currency",
        editable: true,
    },
    {
        type: "text",
        subtype: "number",
        decimals: 2,
        header: "Nummer, två decimaler",
        key: "number",
        editable: true,
        value(row) {
            return row.number;
        },
        update(row, newValue, oldValue) {
            row.number = newValue + oldValue - 1;
        },
    }, // satisfies TableColumn<Row, RowValue, keyof Row>,
    {
        type: "text",
        subtype: "percent",
        decimals: 2,
        header: "% två decimaler",
        key: "percent",
        editable: true,
    },
    {
        type: "text",
        subtype: "email",
        header: "Epost",
        key: "epost",
        editable: true,
    },
    {
        type: "text",
        subtype: "organisationsnummer",
        header: "Orgnr",
        key: "orgnr",
        editable: true,
    },
    {
        type: "text",
        subtype: "phoneNumber",
        header: "Tele",
        key: "tele",
        editable: true,
    },
    {
        type: "text",
        subtype: "postalCode",
        header: "Postnr",
        key: "postnr",
        editable: true,
    },
    {
        type: "text",
        subtype: "plusgiro",
        header: "Plusgiro",
        key: "plusgiro",
        editable: true,
    },
]);

const rows = ref<Row[]>([
    {
        id: "1",
        text: "aaa",
        pnr: "19120211-9150",
        bankAccountNumber: "12345678",
        bankgiro: "9999996",
        clearingNumber: "5678",
        currency: "3453455",
        number: 5,
        percent: 9.987,
        epost: "a.b@c.com",
        orgnr: "9999999999",
        tele: "12345678901234567",
        postnr: "37324",
        plusgiro: "11111119",
    },
    {
        id: "2",
        text: "bbb",
        pnr: "201812312385",
        bankAccountNumber: "0012345678",
        bankgiro: "999-9996",
        clearingNumber: "56781",
        currency: "24233",
        number: 5.5,
        percent: 19.987,
        epost: "a.b@c.com",
        orgnr: "9999999999",
        tele: "12345678901234567",
        postnr: "39359",
        plusgiro: "11111119",
    },
    {
        id: "3",
        text: "ccc",
        pnr: "197006121144",
        bankAccountNumber: "123456",
        bankgiro: "999-9996",
        clearingNumber: "5678-1",
        currency: "234623546",
        number: 5.55,
        percent: 3.1,
        epost: "a.b@c.com",
        orgnr: "9999999999",
        tele: "12345678901234567",
        postnr: "37332",
        plusgiro: "111112",
    },
]);
</script>

<template>
    <button type="button" class="button button--secondary">Interagerbart element före</button>
    <f-table :rows :columns="columns.slice(0, 5)" key-attribute="id" striped> </f-table>
    <f-table :rows :columns="columns.slice(5, 10)" key-attribute="id" striped> </f-table>
    <f-table :rows :columns="columns.slice(10)" key-attribute="id" striped> </f-table>
    <h3>Rows ({{ rows.length }} items):</h3>
    <pre>{{ rows }}</pre>
    <button type="button" class="button button--secondary">Interagerbart element efter</button>
</template>
