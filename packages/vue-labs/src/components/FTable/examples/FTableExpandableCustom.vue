<script setup lang="ts">
import { ref } from "vue";
import { FButton, FCard } from "@fkui/vue";
import { FTable } from "@fkui/vue-labs";
import { formatNumber } from "@fkui/logic";
import { defineTableColumns } from "../table-column";
import { type FruitOrder, orders, fruitDeliveryOptions } from "./example-data";

const columns = defineTableColumns<FruitOrder>([
    {
        type: "text",
        header: "Datum",
        value(order) {
            return order.date;
        },
    },
    {
        type: "text",
        header: "Beställare",
        value(order) {
            return order.customer;
        },
    },

    {
        type: "text",
        header: "Totalsumma",
        value(order) {
            const total = order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
            return formatNumber(total) ?? "";
        },
    },
    {
        type: "checkbox",
        header: "Betald",
        key: "paid",
    },
    {
        header: "Leveransstatus",
        type: "select",
        key: "delivery",
        options: fruitDeliveryOptions,
    },
    {
        type: "button",
        header: "Makulera",
        icon: "trashcan",
        value(order) {
            return `Ta bort ${order.id}`;
        },
        onClick(order) {
            onButtonClick(order.id);
        },
    },
]);

const rows = ref(orders);

function onButtonClick(id: string): void {
    alert(`Du klickade på rad med id ${id}`);
}
</script>

<template>
    <f-table :rows :columns key-attribute="id" striped expandable-attribute="items">
        <template #expandable="{ row }">
            <f-card>
                <template #header="{ headingSlotClass }">
                    <h3 :class="headingSlotClass">{{ row.product }}</h3>
                </template>
                <template #default>
                    <p>Pris: {{ row.price }}</p>
                    <p>Antal: {{ row.quantity }}</p>
                    <p>Delsumma: {{ row.quantity * row.price }}</p>
                </template>
                <template #footer>
                    <div class="button-group">
                        <f-button
                            variant="tertiary"
                            align-text
                            class="button-group__item"
                            icon-left="trashcan"
                        >
                            Ta bort
                        </f-button>
                        <f-button
                            variant="tertiary"
                            align-text
                            class="button-group__item"
                            icon-left="pen"
                        >
                            Ändra
                        </f-button>
                    </div>
                </template>
            </f-card>
        </template>
    </f-table>
</template>

<style>
body {
    padding: 1rem;
}

.icon-button {
    margin: 0;
    padding: 0;
    background: inherit;
    border: 0;
    cursor: pointer;
}

.level-2 {
    margin-left: 0.5rem;
}

.level-3 {
    padding-left: 1rem;
}

.bar {
    background: hotpink;
}
</style>
