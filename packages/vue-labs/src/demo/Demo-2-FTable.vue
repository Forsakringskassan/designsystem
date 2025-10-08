<script setup lang="ts">
import { reactive } from "vue";
import { formatNumber } from "@fkui/logic";
import { FButton } from "@fkui/vue";
import { FTable, defineTableColumns } from "../components";
import XOrderFilter from "./OrderFilter.vue";
import { useERPService } from "./erp-service";
import data, { type FruitOrder, OrderStatus, statusString } from "./example-data";

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
            const total = erp.getOrderTotal(row);
            const formatted = formatNumber(String(total), 2);
            return `${String(formatted)} kr`;
        },
    },
    {
        header: "Spårningsnummer",
        type: "anchor",
        href: "#",
        value(row) {
            return row.tracking;
        },
    },
    {
        header: "Bekräfta",
        type: "button",
        icon: "success",
        enabled(row) {
            return row.status === OrderStatus.PENDING;
        },
        value() {
            return "Bekräfta";
        },
        onClick(row) {
            erp.confirmOrder(row);
        },
    },
    {
        header: "Plocka",
        type: "button",
        icon: "success",
        enabled(row) {
            return row.status === OrderStatus.CONFIRMED || row.status === OrderStatus.PROCESSING;
        },
        value() {
            return "Plocka";
        },
        onClick(row) {
            if (row.status === OrderStatus.CONFIRMED) {
                erp.startPacking(row);
            } else {
                erp.finalizePacking(row);
            }
        },
    },
    {
        header: "Fakturera",
        type: "button",
        icon: "file",
        enabled(row) {
            return row.status === OrderStatus.INTRANSIT && row.invoice === null;
        },
        value() {
            return "Fakturera";
        },
        onClick(row) {
            erp.createInvoice(row);
        },
    },
    {
        header: "Makulera",
        type: "button",
        icon: "cross",
        enabled(row) {
            return row.status === OrderStatus.PENDING || row.status === OrderStatus.CONFIRMED;
        },
        value() {
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
