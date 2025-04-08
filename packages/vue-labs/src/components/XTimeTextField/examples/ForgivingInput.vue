<script lang="js">
import {
    XTimeTextField,
    forgivingParseTimeToNumber,
    minutesToHoursFloat,
    minutesToObject,
    minutesToUserFriendlyString,
} from "@fkui/vue-labs";
import { defineComponent } from "vue";

export default defineComponent({
    name: "XTimeComponentExample",
    components: {
        XTimeTextField,
    },
    data() {
        return {
            time: undefined,
            parser: (value) => forgivingParseTimeToNumber(value),
        };
    },
    computed: {
        userFriendlyValue() {
            return minutesToUserFriendlyString(this.time);
        },
        timeInHours() {
            return minutesToHoursFloat(this.time);
        },
        timeAsObject() {
            return JSON.stringify(minutesToObject(this.time));
        },
    },
});
</script>

<template>
    <div>
        <x-time-text-field
            v-model="time"
            v-validation.required.hoursMinutes.maxTime="{
                hoursMinutes: {
                    errorMessage: 'Du har skrivit in ett felaktigt tidformat.',
                    parser: [parser],
                },
                maxTime: {
                    maxTime: '24:00',
                    errorMessage: 'Du kan inte fylla i en tid överstigande 24 timmar.',
                    parser: [parser],
                },
            }"
            :parser="parser"
        >
            Ange arbetstid
            <template #description="{ formatDescriptionClass }">
                <span :class="formatDescriptionClass">(tt:mm)</span>
            </template>
        </x-time-text-field>
        <p>
            Värde: {{ time }}.<br />
            Renskrivet värde: {{ userFriendlyValue }}.<br />
            Värde i timmar: {{ timeInHours }}.<br />
            Värde i objektnotation: {{ timeAsObject }}.
        </p>
    </div>
</template>
