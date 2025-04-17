<script>
import { defineComponent } from "vue";
import { FDate } from "@fkui/date";
import { FCalendar } from "@fkui/vue";

const holidays = [
    {
        date: "12-24",
        text: "Julafton",
    },
    {
        date: "12-25",
        text: "Juldagen",
    },
    {
        date: "12-26",
        text: "Annandag jul",
    },
];

const events = [
    "Standup",
    "Tillgänglighetsmöte",
    "Mötesfri dag",
    "",
    "Fikadags",
    "Förfining",
    "Långlunch",
    "Gymdag",
    "Tandläkare",
    "PR Review",
    "Möte med FKUI",
    "Bidra till FKUI",
    "Födelsedag",
    "Designmöte",
];

const randomEvents = [];

for (let i = 0; i < 31; i++) {
    const randomIndex = Math.floor(Math.random() * events.length);
    const randomEvent = events[randomIndex];

    randomEvents.push(randomEvent);
}

export default defineComponent({
    name: "FCalendarCustom",
    components: {
        FCalendar,
    },
    data() {
        return {
            month: FDate.fromIso("2022-12-24"),
            min: FDate.fromIso("2020-01-01"),
            max: FDate.fromIso("2029-01-30"),
            tabDay: FDate.fromIso("2022-12-24"),
            selectedDay: undefined,
        };
    },
    methods: {
        getEvents(date) {
            const dayOfYear = `${date.month}-${date.day}`;

            const match = holidays.find((it) => it.date === dayOfYear);
            if (match) {
                return match.text;
            }

            const eventIndex = date.day - 1;
            return randomEvents[eventIndex];
        },
        eventClasses(date) {
            const classes = ["event"];
            const dayOfYear = `${date.month}-${date.day}`;

            const match = holidays.find((it) => it.date === dayOfYear);
            if (match) {
                classes.push("holiday");
            }

            return classes;
        },
        dayClasses(date) {
            const classes = ["my-custom-day"];

            if (this.selectedDay && date.equals(this.selectedDay)) {
                classes.push("selected");
            }

            return classes;
        },
        onSelectDay(date) {
            this.selectedDay = date;
        },
    },
});
</script>

<template>
    <f-calendar
        v-model="month"
        :min-date="min"
        :max-date="max"
        :tab-date="tabDay"
        @click="onSelectDay"
    >
        <template #default="{ date }">
            <span :class="dayClasses(date)">
                <span class="date"> {{ date.day }} </span>
                <span :class="eventClasses(date)"> {{ getEvents(date) }} </span>
            </span>
        </template>
    </f-calendar>
</template>

<style>
.my-custom-day {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 4rem;
    font-size: 12px;
    text-align: left;
    color: black;
    border: 1px solid black;
}
.selected {
    border: 3px solid green;
}
.event {
    width: 100%;
    color: black;
    background-color: #c6e0ff;
}
.holiday {
    color: white;
    background-color: #640000;
}
</style>
