import { DateFormat, FDate } from "@fkui/date";
import {
    formatNumber as numberFormater,
    parseBankgiro,
    parseDate,
    parseOrganisationsnummer,
    parsePersonnummer,
    parsePlusgiro,
    parsePostalCode,
} from "@fkui/logic";
import { type DateRange } from "./date-range";
import { type NumberFormat } from "./number-format";
import { isNumberFormat } from "./is-number-format";
import { isDateRange } from "./is-date-range";

/**
 * @internal
 */
export function formatNumber(
    el: HTMLElement,
    number: string | number | NumberFormat | unknown,
): void {
    el.classList.add("formatter--number");
    el.textContent = "";

    if (typeof number === "string" || typeof number === "number") {
        el.textContent = numberFormater(number) ?? "";
    } else if (isNumberFormat(number)) {
        el.textContent = numberFormater(number.number, number.decimals) ?? "";
    }
}

/**
 * @internal
 */
export function formatDate(el: HTMLElement, date: string | unknown): void {
    el.classList.add("formatter--date");
    el.textContent = "";

    if (typeof date === "string") {
        el.textContent = parseDate(date) ?? "";
    } else if (date instanceof FDate) {
        el.textContent = date.toString();
    }
}

/**
 * @internal
 */
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

/**
 * @internal
 */
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

/**
 * @internal
 */
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
            ? range.from
            : FDate.fromIso(parseDate(range.from) ?? "");

    const toDate =
        range.to instanceof FDate
            ? range.to
            : FDate.fromIso(parseDate(range.to) ?? "");

    if (fromDate.isValid() && toDate.isValid()) {
        el.textContent = `${fromDate.toString()} – ${toDate.toString()}`;
    }
}

/**
 * @internal
 */
export function formatBankgiro(
    el: HTMLElement,
    bankgiro: string | unknown,
): void {
    el.classList.add("formatter--bankgiro");
    el.textContent = "";

    if (typeof bankgiro === "string") {
        el.textContent = parseBankgiro(bankgiro) ?? "";
    }
}

/**
 * @internal
 */
export function formatPersonnummer(
    el: HTMLElement,
    pnr: string | unknown,
): void {
    el.classList.add("formatter--pnr");
    el.textContent = "";

    if (typeof pnr === "string") {
        el.textContent = parsePersonnummer(pnr) ?? "";
    }
}

/**
 * @internal
 */
export function formatOrganisationsnummer(
    el: HTMLElement,
    orgnr: string | unknown,
): void {
    el.classList.add("formatter--orgnr");
    el.textContent = "";

    if (typeof orgnr === "string") {
        el.textContent = parseOrganisationsnummer(orgnr) ?? "";
    }
}

/**
 * @internal
 */
export function formatText(el: HTMLElement, text: string | unknown): void {
    el.classList.add("formatter--text");
    el.textContent = typeof text === "string" ? text : "";
}

export function formatPlusgiro(
    el: HTMLElement,
    plusgiro: string | unknown,
): void {
    el.classList.add("formatter--plusgiro");
    el.textContent = "";

    if (typeof plusgiro === "string") {
        el.textContent = parsePlusgiro(plusgiro) ?? "";
    }
}

export function formatPostnummer(
    el: HTMLElement,
    postnummer: string | unknown,
): void {
    el.classList.add("formatter--postnummer");
    el.textContent = "";

    if (typeof postnummer === "string") {
        el.textContent = parsePostalCode(postnummer) ?? "";
    }
}
