import { FDate } from "@fkui/date";
import { normalizeDateFormat, isEmpty } from "../../utils";

/**
 * A string in format YYYY-MM-DD, for example 2021-02-03
 *
 * @public
 */
export type DateString = string;

/**
 * @public
 */
export function parseDate(value: string): DateString | undefined {
    if (isEmpty(value)) {
        return undefined;
    }

    const normalized = normalizeDateFormat(value);
    if (!normalized) {
        return undefined;
    }

    const date = FDate.fromIso(normalized);

    if (date.isValid()) {
        return date.toString();
    } else {
        return undefined;
    }
}
