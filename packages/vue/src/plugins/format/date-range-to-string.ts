import { DateFormat, FDate } from "@fkui/date";
import { type DateRange } from "./date-range";
/**
 * Formats a date period according to Swedish text rules.
 *
 * Same month: "3–5 maj 2000"
 * Same year: "5 juni – 5 juli 2000"
 * Different years: "4 juni 2000 – 16 februari 2001"
 *
 * @public
 */
export function dateRangeToString(range: DateRange): string {
    const { from, to, format = "iso" } = range;
    const fromDate = typeof from === "string" ? FDate.fromIso(from) : from;
    const toDate = typeof to === "string" ? FDate.fromIso(to) : to;

    if (!fromDate.isValid() || !toDate.isValid()) {
        return "";
    }

    if (format === "iso") {
        return `${fromDate.toString()} – ${toDate.toString()}`;
    }

    const sameYear = fromDate.year === toDate.year;
    const sameMonth = sameYear && fromDate.month === toDate.month;

    let formattedFrom: string;

    if (sameMonth) {
        formattedFrom = fromDate.day.toString();
    } else if (sameYear) {
        formattedFrom = `${fromDate.day} ${fromDate.monthName}`;
    } else {
        formattedFrom = fromDate.toString(DateFormat.LONG);
    }

    return `${formattedFrom} – ${toDate.toString(DateFormat.LONG)}`;
}
