import { FDate } from "@fkui/date";
import { type DateRange } from "./date-range";

/**
 * @internal
 */
export function isDateRange(value: unknown): value is DateRange {
    if (!value || typeof value !== "object") {
        return false;
    }

    const maybeDateRange = value as DateRange;

    const isFDates =
        maybeDateRange.from instanceof FDate &&
        maybeDateRange.to instanceof FDate;

    const isStrings =
        typeof maybeDateRange.from === "string" &&
        typeof maybeDateRange.to === "string";

    return isFDates || isStrings;
}
