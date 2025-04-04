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
