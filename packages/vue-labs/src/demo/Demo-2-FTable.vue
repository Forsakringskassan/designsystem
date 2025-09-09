<script setup lang="ts">
import { reactive } from "vue";
import { FButton } from "@fkui/vue";
import { formatNumber } from "@fkui/logic";
import { FTable, defineTableColumns } from "../components";
import data, { type FruitOrder, statusString } from "./example-data";
import { useERPService } from "./erp-service";
import XOrderFilter from "./OrderFilter.vue";

const rows = reactive(data);

const erp = useERPService(rows);
const { filter, filteredRows } = erp;

const columns = defineTableColumns<FruitOrder>([
    {
        header: "Ordernr",
        type: "text",
        value(row) {
            return row.id;
        },
    },
    {
        header: "Status",
        type: "text",
        value(row) {
            return statusString(row.status);
        },
    },
    {
        header: "Fakturanr",
        type: "text",
        value(row) {
            return row.invoice ? String(row.invoice) : "";
        },
    },
    {
        header: "Orderdatum",
        type: "text",
        value(row) {
            return row.orderedAt?.toString() ?? "";
        },
    },
    {
        header: "Leveransdatum",
        type: "text",
        value(row) {
            return row.shippedAt?.toString() ?? "";
        },
    },
    {
        header: "Kundnr",
        type: "text",
        value(row) {
            return String(row.customerId);
        },
    },
    {
        header: "Kund",
        type: "text",
        editable(row) {
            return !erp.isReadonly(row);
        },
        value(row) {
            return row.name;
        },
        update(row, value) {
            row.name = value;
        },
        validation: {
            required: {},
            maxLength: { length: 20 },
        },
    },
    {
        header: "Orderflöde",
        type: "select",
        editable(row) {
            return !erp.isReadonly(row);
        },
        value(row) {
            return row.orderflode;
        },
        update(row, value) {
            row.orderflode = value;
        },
        options: ["ACME", "Standard", "Ekonomi"],
    },
    {
        header: "F",
        type: "checkbox",
        key: "foljsesedel",
        editable(row) {
            return !erp.isReadonly(row);
        },
    },
    {
        header: "A",
        type: "checkbox",
        key: "avisering",
        editable(row) {
            return !erp.isReadonly(row);
        },
    },
    {
        header: "Totalbelopp",
        type: "text",
        value(row) {
            return `${formatNumber(String(erp.getOrderTotal(row)), 2)} kr`;
        },
    },
    {
        header: "Spårningsnummer",
        type: "anchor",
        href: "#",
        value(row) {
            return row.tracking ?? "";
        },
    },
    {
        header: "Bekräfta",
        type: "button",
        icon: "success",
        value(row) {
            return "Bekräfta";
        },
    },
    {
        header: "Plocka",
        type: "button",
        icon: "success",
        value(row) {
            return "Plocka";
        },
    },
    {
        header: "Fakturera",
        type: "button",
        icon: "file",
        value(row) {
            return "Fakturera";
        },
    },
    {
        header: "Makulera",
        type: "button",
        icon: "cross",
        value(row) {
            return "Makulera";
        },
    },
]);
</script>

<template>
    <div class="container density-dense">
        <h1>Demo: FTable</h1>
        <p>Visar ny FTable komponent.</p>

        <h2 id="fruktbestallningar">Fruktbeställningar</h2>

        <x-order-filter v-model="filter"></x-order-filter>
        <f-table :columns :rows="filteredRows"></f-table>
        <f-button icon-left="plus">Orderregistering</f-button>
    </div>
</template>
