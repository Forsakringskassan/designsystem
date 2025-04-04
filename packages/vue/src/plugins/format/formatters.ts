import { DateFormat, FDate } from "@fkui/date";
import {
    formatNumber as numberFormater,
    parseBankgiro,
    parseDate,
    parseOrganisationsnummer,
    parsePersonnummer,
} from "@fkui/logic";

interface DateRange {
    from: string;
    to: string;
}

interface NumberFormat {
    number: number | string;
    decimals: number;
}

function isDateRange(value: unknown): value is DateRange {
    if (!value) {
        return false;
    }

    const maybeDateRange = value as DateRange;
    return (
        typeof maybeDateRange.from === "string" &&
        typeof maybeDateRange.to === "string"
    );
}

function isNumberFormat(value: unknown): value is NumberFormat {
    if (!value) {
        return false;
    }

    const maybeNumberformat = value as NumberFormat;
    if (typeof maybeNumberformat.decimals !== "number") {
        return false;
    }

    return ["number", "string"].includes(typeof maybeNumberformat.number);
}

export function formatNumber(
    el: HTMLElement,
    number: string | number | NumberFormat | unknown,
): void {
    const value = number ? number : el.textContent;
    if (typeof value === "string" || typeof value === "number") {
        el.textContent = numberFormater(value) ?? "";
    } else if (isNumberFormat(value)) {
        el.textContent = numberFormater(value.number, value.decimals) ?? "";
    } else {
        return;
    }
    el.classList.add("formatter--number");
}

export function formatDate(el: HTMLElement, date: string | unknown): void {
    if (typeof date !== "string" && typeof date !== "undefined") {
        return;
    }
    const textContent = date
        ? parseDate(date)
        : parseDate(el.textContent?.trim() ?? "");
    el.textContent = textContent ?? "";
    el.classList.add("formatter--date");
}

export function formatDateFull(el: HTMLElement, date: string | unknown): void {
    if (typeof date !== "string" && typeof date !== "undefined") {
        return;
    }
    const dateString = date
        ? parseDate(date)
        : parseDate(el.textContent?.trim() ?? "");
    el.textContent = FDate.fromIso(dateString ?? "").toString(DateFormat.FULL);
    el.classList.add("formatter--date-full");
}

export function formatDateLong(el: HTMLElement, date: string | unknown): void {
    if (typeof date !== "string" && typeof date !== "undefined") {
        return;
    }
    const dateString = date
        ? parseDate(date)
        : parseDate(el.textContent?.trim() ?? "");
    el.textContent = FDate.fromIso(dateString ?? "").toString(DateFormat.LONG);
    el.classList.add("formatter--date-long");
}

export function formatDateRange(
    el: HTMLElement,
    range: DateRange | unknown,
): void {
    if (!isDateRange(range)) {
        return;
    }
    const from = parseDate(range.from) ?? "";
    const to = parseDate(range.to) ?? "";
    el.textContent = `${FDate.fromIso(from)} – ${FDate.fromIso(to)}`;
    el.classList.add("formatter--date-range");
}

export function formatBankgiro(
    el: HTMLElement,
    bankgiro: string | unknown,
): void {
    if (typeof bankgiro !== "string" && typeof bankgiro !== "undefined") {
        return;
    }

    const textContent = bankgiro
        ? parseBankgiro(bankgiro)
        : parseBankgiro(el.textContent?.trim() ?? "");
    el.textContent = textContent ?? "";
    el.classList.add("formatter--bankgiro");
}

export function formatPersonnummer(
    el: HTMLElement,
    pnr: string | unknown,
): void {
    if (typeof pnr !== "string" && typeof pnr !== "undefined") {
        return;
    }

    const textContent = pnr
        ? parsePersonnummer(pnr)
        : parsePersonnummer(el.textContent);

    el.textContent = textContent ?? "";
    el.classList.add("formatter--pnr");
}

export function formatOrganisationsnummer(
    el: HTMLElement,
    orgnr: string | unknown,
): void {
    if (typeof orgnr !== "string" && typeof orgnr !== "undefined") {
        return;
    }
    const textContent = orgnr
        ? parseOrganisationsnummer(orgnr)
        : parseOrganisationsnummer(el.textContent?.trim() ?? "");
    el.textContent = textContent ?? "";
    el.classList.add("formatter--orgnr");
}

export function formatText(el: HTMLElement, text: string | unknown): void {
    if (typeof text === "string") {
        el.textContent = text;
    }
    el.classList.add("formatter--text");
}
