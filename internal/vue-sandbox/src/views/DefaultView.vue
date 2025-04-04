<script setup lang="ts">
import { DateFormat, FDate } from "@fkui/date";
import { ref } from "vue";
import { parseDate } from "@fkui/logic";

const myNumber = ref(5000000);
const myStringNumber = ref("5000000");
const myDate1 = ref("20200101");
const myDate2 = ref("2020-01-01");

function doMagic(): void {
    myNumber.value = Math.random() * 10000000;
    myStringNumber.value = myNumber.value.toString();
    const date = FDate.fromIso(parseDate(myDate1.value) ?? "");
    myDate1.value = date.addDays(1).toString(DateFormat.ISO8601).replaceAll("-", "");
    myDate2.value = date.addDays(1).toString(DateFormat.ISO8601);
}
</script>

<template>
    <div class="container">
        <h2>Raw:</h2>
        <pre>Number: {{ myNumber }}</pre>
        <pre>Number as string: "{{ myStringNumber }}"</pre>
        <pre>Date1 as string: "{{ myDate1 }}"</pre>
        <pre>Date2 as string: "{{ myDate2 }}"</pre>

        <h2>Formated:</h2>
        <p>
            Formaterat nummer:
            <strong v-format:number="myNumber"></strong>
        </p>
        <p>
            Formaterat nummer från "string":
            <strong v-format:number="myStringNumber"></strong>
        </p>
        <p>
            Datum1 ISO8601:
            <strong v-format:date="myDate1"></strong>
        </p>
        <p>
            Datum2 ISO8601:
            <strong v-format:date="myDate2"></strong>
        </p>
        <p>
            Datum1 LONG:
            <strong v-format:date-long="myDate1"></strong>
        </p>
        <p>
            Datum2 LONG:
            <strong v-format:date-long="myDate2"></strong>
        </p>
        <p>
            Datum1 FULL:
            <strong v-format:date-full="myDate1"></strong>
        </p>
        <p>
            Datum2 FULL:
            <strong v-format:date-full="myDate2"></strong>
        </p>
        <button type="button" @click="doMagic()">Magic</button>
    </div>
    <br />
</template>

<style>
.format__date,
.format__date-full,
.format__date-long {
    white-space: nowrap;
}

.format__number {
    white-space: nowrap;
    font-feature-settings: "tnum";
}
</style>
