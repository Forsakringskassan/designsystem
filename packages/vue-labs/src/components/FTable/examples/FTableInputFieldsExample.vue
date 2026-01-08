<script setup lang="ts">
import { computed, ref } from "vue";
import { ValidationService } from "@fkui/logic";
import { FTable, defineTableColumns } from "@fkui/vue-labs";

interface TableRow {
    id: string;
    text: string;
    pnr: string;
    bankAccountNumber: string;
    bankgiro: string;
    clearingNumber: string;
    date: string;
    epost: string;
    orgnr: string;
    tele: string;
    postnr: string;
    plusgiro: string;
    currency: number | string;
    percent: number | string;
    number: number | string;
}

const columns1 = defineTableColumns<TableRow, keyof TableRow>([
    {
        type: "text",
        header: "Text",
        key: "text",
        editable: true,
    },
    {
        type: "text:personnummer",
        header: "Pnr",
        key: "pnr",
        editable: true,
    },
    {
        type: "text:bankAccountNumber",
        header: "Kontonr",
        key: "bankAccountNumber",
        editable: true,
    },
    {
        type: "text:bankgiro",
        header: "Bankgiro",
        key: "bankgiro",
        editable: true,
    },
    {
        type: "text:clearingNumber",
        header: "Clearingnr",
        key: "clearingNumber",
        editable: true,
    },
]);

const columns2 = defineTableColumns<TableRow, keyof TableRow>([
    {
        type: "text:currency",
        header: "Valuta",
        key: "currency",
        editable: true,
    },
    {
        type: "text:date",
        header: "Datum",
        key: "date",
        editable: true,
    },
    {
        type: "text:number",
        decimals: 3,
        header: "Nummer, tre decimaler",
        key: "number",
        editable: true,
    },
    {
        type: "text:percent",
        decimals: 2,
        header: "% två decimaler",
        key: "percent",
        editable: true,
    },
    {
        type: "text:email",
        header: "Epost",
        key: "epost",
        editable: true,
    },
]);

const columns3 = defineTableColumns<TableRow, keyof TableRow>([
    {
        type: "text:organisationsnummer",
        header: "Orgnr",
        key: "orgnr",
        editable: true,
    },
    {
        type: "text:phoneNumber",
        header: "Tele",
        key: "tele",
        editable: true,
    },
    {
        type: "text:postalCode",
        header: "Postnr",
        key: "postnr",
        editable: true,
    },
    {
        type: "text:plusgiro",
        header: "Plusgiro",
        key: "plusgiro",
        editable: true,
    },
]);

const rows = ref<TableRow[]>([
    {
        id: "1",
        text: "aaa",
        pnr: "19120211-9150",
        bankAccountNumber: "12345678",
        bankgiro: "9999996",
        clearingNumber: "5678",
        date: "2023-06-15",
        currency: 3453455,
        number: 5.4,
        percent: 9.987,
        epost: "a.b@example.net",
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
        currency: 24233,
        date: "2024-01-20",
        number: 5.5,
        percent: 19.987,
        epost: "a.b@example.net",
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
        currency: 234623546,
        date: "2022-11-05",
        number: 5.55,
        percent: 3.1,
        epost: "a.b@example.net",
        orgnr: "9999999999",
        tele: "12345678901234567",
        postnr: "37332",
        plusgiro: "111112",
    },
]);

const sum = computed(() => {
    return rows.value.reduce((sum, row) => {
        if (typeof row.number === "number") {
            return sum + row.number;
        } else {
            return sum;
        }
    }, 0);
});

function validataAll(): void {
    /* eslint-disable-next-line @typescript-eslint/no-floating-promises -- technical debt */
    ValidationService.validateAllElements("all");
}
</script>

<template>
    <button type="button" class="button button--secondary" @click="validataAll">
        Interagerbart element före
    </button>
    <div id="all">
        <f-table :rows :columns="columns1" key-attribute="id" striped> </f-table>
        <f-table :rows :columns="columns2" key-attribute="id" striped> </f-table>
        <f-table :rows :columns="columns3" key-attribute="id" striped> </f-table>
    </div>
    <pre>Summa: {{ { sum } }}</pre>
    <h3>Rows ({{ rows.length }} items):</h3>
    <pre>{{ rows }}</pre>
    <button type="button" class="button button--secondary" @click="validataAll">
        Interagerbart element efter
    </button>
</template>
