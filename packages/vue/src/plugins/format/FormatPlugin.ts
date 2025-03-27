import { DateFormat, FDate } from "@fkui/date";
import { formatNumber, parseBankgiro, parseDate } from "@fkui/logic";
import { type App, type DirectiveBinding, type Plugin } from "vue";

interface DateRange {
    from: string;
    to: string;
}

function formatNumbers(el: HTMLElement, number: string | number): void {
    el.innerText = formatNumber(number) ?? "";
    el.classList.add("format__number");
}

function formatDate(el: HTMLElement, date: string): void {
    el.innerText = parseDate(date) ?? "";
    el.classList.add("format__date");
}

function formatDateFull(el: HTMLElement, date: string): void {
    const dateString = parseDate(date) ?? "";
    el.innerText = FDate.fromIso(dateString).toString(DateFormat.FULL);
    el.classList.add("format__date-full");
}

function formatDateLong(el: HTMLElement, date: string): void {
    const dateString = parseDate(date) ?? "";
    el.innerText = FDate.fromIso(dateString).toString(DateFormat.LONG);
    el.classList.add("format__date-long");
}

function formatDateRange(el: HTMLElement, range: DateRange): void {
    const from = parseDate(range.from) ?? "";
    const to = parseDate(range.to) ?? "";
    el.innerText = `${FDate.fromIso(from)} – ${FDate.fromIso(to)}`;
    el.classList.add("format__date");
}

function formatBankgiro(el: HTMLElement, bankgiro: string): void {
    el.innerText = parseBankgiro(bankgiro) ?? "";
    el.classList.add("format__bankgiro");
}

/**
 * @public
 */
export const FormatPlugin: Plugin = {
    install(app: App) {
        app.directive(
            "format",
            (el: HTMLElement, binding: DirectiveBinding) => {
                switch (binding.arg) {
                    case "number":
                        formatNumbers(el, binding.value);
                        break;
                    case "date":
                        formatDate(el, binding.value);
                        break;
                    case "date-full":
                        formatDateFull(el, binding.value);
                        break;
                    case "date-long":
                        formatDateLong(el, binding.value);
                        break;
                    case "date-range":
                        formatDateRange(el, binding.value);
                        break;
                    case "bankgiro":
                        formatBankgiro(el, binding.value);
                        break;
                }
            },
        );
    },
};
