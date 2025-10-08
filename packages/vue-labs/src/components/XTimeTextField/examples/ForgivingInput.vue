<script lang="ts">
import { defineComponent } from "vue";
import {
    XTimeTextField,
    forgivingParseTimeToNumber,
    minutesToHoursFloat,
    minutesToObject,
    minutesToUserFriendlyString,
} from "@fkui/vue-labs";

export default defineComponent({
    name: "XTimeComponentExample",
    components: {
        XTimeTextField,
    },
    data() {
        return {
            time: undefined as number | undefined,
            parser: (value: string) => forgivingParseTimeToNumber(value),
        };
    },
    computed: {
        userFriendlyValue() {
            /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- technical debt */
            return minutesToUserFriendlyString(this.time!);
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
            :parser
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
