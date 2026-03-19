<script setup lang="ts">
import { FDetailsPanel } from "@fkui/vue";
import { type Person } from "../person";

const { name, exclusive } = defineProps<{ name: string; exclusive: string }>();
const XPersonPanel = FDetailsPanel<Person>;
</script>
<template>
    <x-person-panel :name :exclusive>
        <template #default="{ item, header, content }">
            <h2 :slot="header">Detaljer om person</h2>
            <div :slot="content">
                <dl>
                    <dt>Namn</dt>
                    <dd>{{ item.name }}</dd>
                    <dt>Address</dt>
                    <dd>{{ item.adress ?? "-" }}</dd>
                    <dt>Stad</dt>
                    <dd>{{ item.city ?? "-" }}</dd>
                    <dt>Bil</dt>
                    <dd>{{ item.car ?? "-" }}</dd>
                </dl>
            </div>
        </template>
    </x-person-panel>
</template>
