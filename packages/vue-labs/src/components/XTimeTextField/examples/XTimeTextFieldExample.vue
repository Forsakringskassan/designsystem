<script lang="js">
import {
    XTimeTextField,
    minutesToUserFriendlyString,
    minutesToHoursFloat,
    minutesToObject,
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
            v-validation.required.hoursMinutes="{
                hoursMinutes: { errorMessage: 'Du har skrivit in ett felaktigt tidformat' },
            }"
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
