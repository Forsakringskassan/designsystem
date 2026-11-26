<script setup lang="ts">
import { FDetailsPanel } from "@fkui/vue";
import { type Expense } from "../expense";

const { name, exclusive } = defineProps<{ name: string; exclusive: string }>();

const XExpensePanel = FDetailsPanel<Expense>;
</script>
<template>
    <x-expense-panel :name :exclusive>
        <template #default="{ item, content }">
            <div :slot="content">
                <dl>
                    <dt>ID</dt>
                    <dd>{{ item.id }}</dd>
                    <dt>Beskrivning</dt>
                    <dd>{{ item.description }}</dd>
                    <dt>Belopp</dt>
                    <dd>{{ item.amount }} kr</dd>
                </dl>
            </div>
        </template>
    </x-expense-panel>
</template>
