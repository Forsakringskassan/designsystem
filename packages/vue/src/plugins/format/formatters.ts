import { DateFormat, FDate } from "@fkui/date";
import {
    formatNumber as numberFormater,
    parseBankgiro,
    parseDate,
    parseOrganisationsnummer,
    parsePersonnummer,
} from "@fkui/logic";
import { DateRange } from "./date-range";
import { NumberFormat } from "./number-format";
import { isNumberFormat } from "./is-number-format";
import { isDateRange } from "./is-date-range";

export async function formatNumber(
    el: HTMLElement,
    number: string | number | NumberFormat | unknown,
): Promise<void> {
    el.classList.add("formatter--number");
    el.textContent = "";

    if (typeof number === "string" || typeof number === "number") {
        el.textContent = numberFormater(number) ?? "";
    } else if (isNumberFormat(number)) {
        el.textContent = numberFormater(number.number, number.decimals) ?? "";
    }
}

export function formatDate(el: HTMLElement, date: string | unknown): void {
    el.classList.add("formatter--date");
    el.textContent = "";

    if (typeof date === "string") {
        el.textContent = parseDate(date) ?? "";
    } else if (date instanceof FDate) {
        el.textContent = date.toString();
    }
}

export function formatDateFull(el: HTMLElement, date: string | unknown): void {
    el.classList.add("formatter--date-full");
    el.textContent = "";

    if (typeof date === "string") {
        const dateString = parseDate(date) ?? "";
        el.textContent = FDate.fromIso(dateString).toString(DateFormat.FULL);
    } else if (date instanceof FDate) {
        el.textContent = date.toString(DateFormat.FULL);
    }
}

export function formatDateLong(el: HTMLElement, date: string | unknown): void {
    el.classList.add("formatter--date-long");
    el.textContent = "";

    if (typeof date === "string") {
        const dateString = parseDate(date) ?? "";
        el.textContent = FDate.fromIso(dateString).toString(DateFormat.LONG);
    } else if (date instanceof FDate) {
        el.textContent = date.toString(DateFormat.LONG);
    }
}

export function formatDateRange(
    el: HTMLElement,
    range: DateRange | unknown,
): void {
    el.classList.add("formatter--date-range");
    el.textContent = "";

    if (!isDateRange(range)) {
        return;
    }
    const fromDate =
        range.from instanceof FDate
            ? range.from.toString()
            : parseDate(range.from);

    const toDate =
        range.to instanceof FDate ? range.to.toString() : parseDate(range.to);

    if (fromDate && toDate) {
        el.textContent = `${FDate.fromIso(fromDate ?? "")} – ${FDate.fromIso(toDate ?? "")}`;
    }
}
