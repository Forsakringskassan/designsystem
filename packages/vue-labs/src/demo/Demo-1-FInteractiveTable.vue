<script setup lang="ts">
import { reactive } from "vue";
import {
    FButton,
    FCheckboxField,
    FInteractiveTable,
    FSelectField,
    FTableButton,
    FTableColumn,
    FTextField,
} from "@fkui/vue";
import { formatNumber } from "@fkui/logic";
import data, { OrderStatus, statusString } from "./example-data";
import { useERPService } from "./erp-service";
import XOrderFilter from "./OrderFilter.vue";

const rows = reactive(data);

const erp = useERPService(rows);
const { filter, filteredRows } = erp;
</script>

<template>
    <div class="container density-dense">
        <h1>Demo: FInteractiveTable</h1>
        <p>Visar dagens FInteractiveTable.</p>

        <h2 id="fruktbestallningar">Fruktbeställningar</h2>

        <x-order-filter v-model="filter"></x-order-filter>

        <f-interactive-table :rows="filteredRows" aria-labelledby="fruktbestallningar">
            <template #caption></template>
            <template #default="{ row }">
                <f-table-column title="Ordernr" type="numeric" shrink>{{ row.id }}</f-table-column>
                <f-table-column title="Status" type="text" shrink>{{ statusString(row.status) }}</f-table-column>
                <f-table-column title="Fakturanr" type="numeric" shrink>{{ row.invoice }}</f-table-column>
                <f-table-column title="Orderdatum" type="text" shrink>{{ row.orderedAt }}</f-table-column>
                <f-table-column title="Leveransdatum" type="text" shrink>{{ row.shippedAt }}</f-table-column>
                <f-table-column title="Kundnr" type="numeric" shrink>{{ row.customerId }}</f-table-column>
                <f-table-column title="Kund" type="text" shrink>
                    <f-text-field
                        v-if="!erp.isReadonly(row)"
                        v-model="row.name"
                        v-validation.required.maxLength="{ maxLength: { length: 20 } }"
                        maxlength="25"
                    ></f-text-field>
                    <template v-else>{{ row.name }}</template>
                </f-table-column>
                <f-table-column title="Orderflöde" type="text" shrink>
                    <span v-if="erp.isReadonly(row)">
                        {{ row.orderflode }}
                    </span>
                    <f-select-field v-else v-model="row.orderflode" :disabled="erp.isReadonly(row)">
                        <template #label>Orderflöde</template>
                        <template #default>
                            <option value="ACME">ACME</option>
                            <option value="Standard">Standard</option>
                            <option value="Ekonomi">Ekonomi</option>
                        </template>
                    </f-select-field>
                </f-table-column>
                <f-table-column title="F" shrink>
                    <f-checkbox-field
                        v-model="row.foljsesedel"
                        :value="true"
                        :disabled="erp.isReadonly(row)"
                    ></f-checkbox-field>
                </f-table-column>
                <f-table-column title="A" shrink>
                    <f-checkbox-field
                        v-model="row.avisering"
                        :value="true"
                        :disabled="erp.isReadonly(row)"
                    ></f-checkbox-field>
                </f-table-column>
                <f-table-column title="Totalbelopp" type="numeric" shrink>
                    {{ formatNumber(erp.getOrderTotal(row), 2) }} kr
                </f-table-column>
                <f-table-column title="Spårningsnr" type="text" shrink>
                    <a v-if="row.tracking" class="anchor" href="#">{{ row.tracking }}</a>
                </f-table-column>
                <f-table-column title="Åtgärd" type="action" shrink>
                    <template v-if="row.status === OrderStatus.PENDING">
                        <f-table-button icon="success" label @click="erp.confirmOrder(row)">Bekräfta</f-table-button>
                        <f-table-button icon="cross" label @click="erp.cancelOrder(row)">Makulera</f-table-button>
                    </template>
                    <template v-if="row.status === OrderStatus.CONFIRMED">
                        <f-table-button icon="success" label @click="erp.startPacking(row)">Plocka</f-table-button>
                        <f-table-button icon="cross" label @click="erp.cancelOrder(row)">Makulera</f-table-button>
                    </template>
                    <template v-if="row.status === OrderStatus.PROCESSING">
                        <f-table-button icon="success" label @click="erp.finalizePacking(row)">Slutför</f-table-button>
                        <f-table-button icon="cross" label @click="erp.stopPacking(row)">Avbryt</f-table-button>
                    </template>
                    <template v-if="row.status === OrderStatus.INTRANSIT && row.invoice === null">
                        <f-table-button icon="file" label @click="erp.createInvoice(row)">Fakturera</f-table-button>
                    </template>
                </f-table-column>
            </template>
        </f-interactive-table>

        <f-button icon-left="plus">Orderregistering</f-button>
    </div>
</template>

<!-- eslint-disable-next-line vue/no-restricted-block -- technical debt -->
<style>
.checkbox label {
    min-width: auto;
}

.table__column--text,
.table__column--numeric {
    white-space: nowrap;
}

.table__column--action {
    text-align: left;
}
</style>
