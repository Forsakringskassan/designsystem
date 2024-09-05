import {
    TranslationService,
    isEmpty,
    isSet,
    stripWhitespace,
} from "@fkui/logic";
import { HoursMinutesString } from "../converters";
import {
    HOURS_MINUTES_REGEXP,
    HOURS_MINUTES_WITHOUT_COLON_REGEXP,
} from "./constants";

function findMatch(regexps: RegExp[], value: string): RegExpMatchArray | null {
    for (const regexp of regexps) {
        const match = value.match(regexp);

        if (match) {
            return match;
        }
    }

    return null;
}

function padInitialZeros(value: string | undefined, maxLength = 2): string {
    value = value ?? "";
    return value.padStart(maxLength, "0");
}

export function hoursMinutesStringToMinutes(
    valueString: string,
    extraForgiving = false,
): number | undefined {
    if (isEmpty(valueString.trim())) {
        return undefined;
    }

    const [hours, minutes] = splitHoursMinutes(valueString, extraForgiving).map(
        (value) => parseInt(value, 10),
    );
    const totalMinutes = hours * 60 + minutes;

    return !isNaN(totalMinutes) ? totalMinutes : undefined;
}

export function minutesToHoursMinutesString(
    value?: number,
): HoursMinutesString {
    let valueString = "";
    const safeValue = value ?? NaN;
    if (!isNaN(safeValue)) {
        const { hours, minutes } = minutesToObject(safeValue);
        valueString = [hours, minutes]
            .map((value) => String(value).padStart(2, "0"))
            .join(":");
    }

    return stripWhitespace(valueString);
}

export function splitHoursMinutes(
    valueString: string,
    extraForgiving = false,
): string[] {
    const regexps = extraForgiving
        ? [HOURS_MINUTES_WITHOUT_COLON_REGEXP, HOURS_MINUTES_REGEXP]
        : [HOURS_MINUTES_REGEXP];
    const match = findMatch(regexps, stripWhitespace(valueString));

    if (!match) {
        return ["", ""];
    }

    const hours = padInitialZeros(match?.groups?.hours);
    const minutes = padInitialZeros(match?.groups?.minutes);

    return [hours, minutes];
}

/**
 * Accepts time as a number and returns a user friendly string (to be used in i.e. review mode)
 * Example:
 *     Input: 13.5
 *     Output: '13 timmar och 30 minuter'
 */
export function minutesToUserFriendlyString(value: number): string {
    const [hours, minutes] = splitHoursMinutes(
        minutesToHoursMinutesString(value),
    ).map(Number);

    return TranslationService.provider.translate(
        "ARBE.RW.generell.etikett.timmarochminuter",
        "{{hours}} timmar och {{minutes}} minuter",
        { hours, minutes },
    );
}

/**
 * Helper for converting AgeTimeTextField values into hours. For convienence,
 * it is possible to provide multiple values and get their sum. The actual
 * conversion will be performed as a last step, to minimize the amount of rounding
 * errors.
 *
 * Parameters that are undefined or NaN will be ignored and add 0 to the sum.
 *
 * @param values - Values in minutes, to be converted into a value in hours.
 * @returns The sum of all values divided by 60. E.g., `150` becomes `2.5`.
 */
export function minutesToHoursFloat(
    ...values: Array<number | undefined>
): number {
    const minutes = values
        .filter((value): value is number => isSet(value) && !isNaN(value))
        .reduce((sum, value) => sum + value, 0);

    return minutes / 60;
}

/**
 * Helper for converting AgeTimeTextField values into an object. For
 * convenience, it is possible to provide multiple values and get their sum.
 *
 * Parameters that are undefined or NaN will be ignored and add 0 to the sum.
 *
 * @param values - Values in minutes, to be converted into a value into an
 * hour minute object.
 * @returns The sum of all values in an object representation. E.g.,
 * `150` becomes `{ hours: 2, minutes: 30 }`
 */
export function minutesToObject(...values: Array<number | undefined>): {
    hours: number;
    minutes: number;
} {
    const minutes = values
        .filter((value): value is number => isSet(value) && !isNaN(value))
        .reduce((sum, value) => sum + value, 0);

    return {
        hours: Math.floor(minutes / 60),
        minutes: minutes % 60,
    };
}
