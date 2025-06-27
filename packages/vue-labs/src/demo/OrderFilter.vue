<script setup lang="ts">
import { FFieldset, FRadioField } from "@fkui/vue";
import { OrderStatus } from "./example-data";

const model = defineModel<OrderStatus[] | null>();
</script>

<template>
    <f-fieldset chip horizontal>
        <template #label></template>
        <template #default>
            <f-radio-field v-model="model" name="order-filter" :value="[OrderStatus.PENDING]">Inkommet</f-radio-field>
            <f-radio-field
                v-model="model"
                name="order-filter"
                :value="[OrderStatus.CONFIRMED, OrderStatus.PROCESSING, OrderStatus.INTRANSIT]"
                >Pågående</f-radio-field
            >
            <f-radio-field v-model="model" name="order-filter" :value="[OrderStatus.DELIVERED, OrderStatus.CANCELLED]"
                >Slutförda</f-radio-field
            >
            <f-radio-field v-model="model" name="order-filter" :value="null">Alla</f-radio-field>
        </template>
    </f-fieldset>
</template>
