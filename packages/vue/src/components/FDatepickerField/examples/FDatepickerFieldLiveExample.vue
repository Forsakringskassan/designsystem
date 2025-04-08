<script lang="ts">
import { defineComponent } from "vue";
import { FDatepickerField, FFieldset, FCheckboxField, FSelectField, FTooltip } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import { DateFormat, FDate, Weekday } from "@fkui/date";

export default defineComponent({
    name: "FDatepickerFieldLiveExample",
    components: { LiveExample, FFieldset, FCheckboxField, FSelectField },
    data() {
        return {
            DateFormat,
            FDate,
            monthToShow: "",
            minDateLimit: "",
            maxDateLimit: "",
            invalidDates: [],
            invalidWeekdays: false,
            highlightTodayEnabled: true,
            isRequired: false,
            isDisabled: false,
            alwaysInlineEnabled: false,
            tooltipVisible: false,
            descriptionVisible: false,
        };
    },
    computed: {
        livedata(): object {
            return { model: "", FDate: FDate, Weekday: Weekday };
        },
        components(): object {
            return {
                FDatepickerField,
                FDate,
                Weekday,
                FTooltip,
            };
        },
        alwaysInline(): string {
            return this.alwaysInlineEnabled ? "always-inline" : "";
        },
        initialMonth(): string {
            return this.monthToShow ? `:initial-month='FDate.fromIso("${this.monthToShow}")'` : "";
        },
        validation(): string {
            let validators = "";
            const settings = [];

            if (this.isRequired) {
                validators += ".required";
            }

            if (this.minDateLimit) {
                validators += ".minDate";
                settings.push(` minDate: { limit: '${this.minDateLimit}' }`);
            }

            if (this.maxDateLimit) {
                validators += ".maxDate";
                settings.push(` maxDate: { limit: '${this.maxDateLimit}' }`);
            }

            if (this.invalidWeekdays) {
                validators += ".invalidWeekdays";
                settings.push(` invalidWeekdays: { days: [Weekday.SATURDAY, Weekday.SUNDAY] }`);
            }

            if (this.invalidDates.length > 0) {
                validators += ".invalidDates";
                const dates = this.getInvalidDates();
                settings.push(` invalidDates: { dates: ['${dates.join("', '")}'] }`);
            }

            if (settings.length > 0) {
                return validators ? `v-validation${validators}="{${settings.join(", ")}}"` : "";
            } else {
                return validators ? `v-validation${validators}` : "";
            }
        },
        highlightToday(): string {
            return this.highlightTodayEnabled ? "" : `:highlight-today="false"`;
        },
        disabled(): string {
            return this.isDisabled ? "disabled" : "";
        },
        description(): string {
            const template = /* HTML */ `
                <template #description="{ descriptionClass }">
                    <span :class="descriptionClass"> Hjälptext </span>
                </template>
            `;

            return this.descriptionVisible ? template : "";
        },
        tooltip(): string {
            const template = /* HTML */ `
                <template #tooltip>
                    <f-tooltip screen-reader-text="Läs mer här" header-tag="h2">
                        <template #header> Header </template>
                        <template #body> Body </template>
                    </f-tooltip>
                </template>
            `;

            return this.tooltipVisible ? template : "";
        },
        template(): string {
            return /* HTML */ `
                <f-datepicker-field
                    v-model="model"
                    ${this.initialMonth}
                    ${this.alwaysInline}
                    ${this.highlightToday}
                    ${this.validation}
                    ${this.disabled}
                >
                    <template #default> Etikett </template>
                    ${this.tooltip} ${this.description}
                </f-datepicker-field>
            `;
        },
    },
    methods: {
        getDateWithOffset(months: number): string {
            return FDate.now().addMonths(months).toString();
        },
        getMonthYearString(date: string): string {
            const fdate = FDate.fromIso(date);
            return `${fdate.monthName} ${fdate.year}`;
        },
        getInvalidDates(): string[] {
            return [FDate.now().addDays(-7).toString(), FDate.now().addDays(-3).toString()];
        },
    },
});
</script>

<template>
    <live-example :components="components" :template="template" :livedata="livedata">
        <f-select-field v-model="monthToShow">
            <template #label> Visa månad </template>
            <option value="">Nuvarande månad (standard)</option>
            <option :value="getDateWithOffset(-6)">
                Exempel: {{ getMonthYearString(getDateWithOffset(-6)) }}
            </option>
        </f-select-field>
        <f-select-field v-model="minDateLimit">
            <template #label> Tidigaste valbara datum </template>
            <option value="">10 år tillbaka (standard)</option>
            <option :value="getDateWithOffset(-3)">Exempel: {{ getDateWithOffset(-3) }}</option>
        </f-select-field>
        <f-select-field v-model="maxDateLimit">
            <template #label> Senaste valbara datum </template>
            <option value="">10 år framåt (standard)</option>
            <option :value="getDateWithOffset(3)">Exempel: {{ getDateWithOffset(3) }}</option>
        </f-select-field>
        <f-select-field v-model="invalidWeekdays">
            <template #label> Ej valbara veckodagar </template>
            <option :value="false">Inga (standard)</option>
            <option :value="true">Exempel: Lördag och söndag</option>
        </f-select-field>
        <f-select-field v-model="invalidDates">
            <template #label> Ej valbara datum </template>
            <option :value="[]">Inga (standard)</option>
            <option :value="getInvalidDates()">Exempel: {{ getInvalidDates().join(", ") }}</option>
        </f-select-field>
        <f-checkbox-field v-model="highlightTodayEnabled" :value="true">
            Markera dagens datum i kalendern
        </f-checkbox-field>
        <f-checkbox-field v-model="isRequired" :value="true"> Obligatorisk fält </f-checkbox-field>
        <f-checkbox-field v-model="isDisabled" :value="true"> Inaktivt fält </f-checkbox-field>
        <f-checkbox-field v-model="alwaysInlineEnabled" :value="true">
            Kalendern visas alltid inline
        </f-checkbox-field>
        <f-fieldset name="etikett">
            <template #label> Etiketten </template>
            <f-checkbox-field v-model="tooltipVisible" :value="true"> Tooltip </f-checkbox-field>
            <f-checkbox-field v-model="descriptionVisible" :value="true">
                Hjälptext
            </f-checkbox-field>
        </f-fieldset>
    </live-example>
</template>
