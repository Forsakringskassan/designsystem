import {
    minutesToHoursMinutesString,
    hoursMinutesStringToMinutes,
} from "../utils";

/**
 * A string in the format hh:mm (hours may exceed two digits), e.g., 08:15, 16:00 and 900:12.
 *
 * @public
 */
export type HoursMinutesString = string;

/**
 * @public
 */
export function formatNumberToTime(
    value?: number,
): HoursMinutesString | undefined {
    if (typeof value !== "number" || isNaN(value)) {
        return undefined;
    }

    return minutesToHoursMinutesString(value);
}

function parseTimeToNumberUsingConfig(
    value: string | null | undefined,
    extraForgiving: boolean,
): number | undefined {
    if (typeof value !== "string") {
        return undefined;
    }

    const parsedValue =
        hoursMinutesStringToMinutes(value, extraForgiving) ?? NaN;

    return !isNaN(parsedValue) ? parsedValue : undefined;
}

/**
 * @public
 */
export function parseTimeToNumber(value?: string | null): number | undefined {
    return parseTimeToNumberUsingConfig(value, false);
}

/**
 * @public
 */
export function forgivingParseTimeToNumber(
    value?: string | null,
): number | undefined {
    return parseTimeToNumberUsingConfig(value, true);
}
