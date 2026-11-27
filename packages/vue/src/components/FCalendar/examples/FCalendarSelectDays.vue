<script setup lang="ts">
import { ref, shallowRef } from "vue";
import { FDate } from "@fkui/date";
import { FCalendar, FCalendarDay, FMessageBox } from "@fkui/vue";

const month = shallowRef<FDate>(FDate.fromIso("2022-10-01"));
const min = shallowRef<FDate>(FDate.fromIso("2020-10-01"));
const max = shallowRef<FDate>(FDate.fromIso("2029-12-31"));
const selecting = ref<string[]>([]);
const selected = ref<string[]>([]);

function onSelecting(days: string[]): void {
    selecting.value = days;
}

function onSelect(days: string[]): void {
    selecting.value = [];
    const add = days.filter((day) => !selected.value.includes(day));
    const remove = add.length > 0 ? [] : days;
    selected.value = selected.value.filter((day) => !remove.includes(day)).concat(add);
}

function isSelecting(date: FDate) {
    return selecting.value.includes(date.toString());
}
function isSelected(date: FDate) {
    return selected.value.includes(date.toString());
}
</script>

<template>
    <div>
        <f-message-box type="info">
            <template #default="{ headingSlotClass }">
                <h2 :class="headingSlotClass">Exemplet är pågående poc av flerval</h2>
                <p>
                    Det är inte testat i någon större utsträckning, men är tänkt att kunna användas
                    på några olika sätt:
                </p>
                <ul>
                    <li>
                        Dra med musen från en dag till en annan. Samtliga dagar blir markerade som
                        ingår i området (med undantag om alla dagar redan är markerade, då blir de
                        avmarkerade)
                    </li>
                    <li>
                        Klicka på en dag, den blir vald. Klicka på en annan dag samtidigt som du
                        trycker ned SHIFT-knappen. Dagar däremellan blir markerade.
                    </li>
                    <li>
                        Tabba in till en kalenderdag. Håll inne SHIFT-knappen och förflytta dig med
                        piltangenterna i kalendern. Släpp SHIFT-knappen på önskad dag. Dagar
                        däremellan blir markerade.
                    </li>
                </ul>
            </template>
        </f-message-box>

        <f-calendar
            v-model="month"
            :min-date="min"
            :max-date="max"
            @selecting="onSelecting"
            @select="onSelect"
        >
            <template #default="{ date, isFocused }">
                <f-calendar-day
                    data-test="multiple-days"
                    :day="date"
                    :focused="isFocused"
                    :selecting="isSelecting(date)"
                    :selected="isSelected(date)"
                >
                </f-calendar-day>
            </template>
        </f-calendar>
        <span data-test="days-array">Valda dagar: {{ selected }}</span>
    </div>
</template>
