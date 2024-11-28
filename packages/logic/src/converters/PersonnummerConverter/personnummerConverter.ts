import { FDate } from "@fkui/date";
import { validChecksum, isSet } from "../../utils";
import { stripWhitespace } from "../../text";
import { parseDate } from "../DateConverter";
import { resolveCentury } from "./resolve-century";

const PERSONNUMMER_REGEXP =
    /^(?<century>\d{2})?(?<year>\d{2})(?<month>\d{2})(?<day>\d{2})(?<sign>-|\+)?(?<check>\d{4})$/;

function getDayWithoutSamordning(day: string): string {
    return (Number(day) % 60).toString().padStart(2, "0");
}

function getPersonnummerString(
    century: string,
    year: string,
    month: string,
    day: string,
    check: string,
): PersonnummerString {
    return `${century}${year}${month}${day}-${check}`;
}

/**
 * Checks if date is valid and within valid period.
 * The valid period is between 1840-05-06 (first registered personnummer) and today's date.
 *
 * @internal
 */
export function isValidDate(date: FDate, now: FDate): boolean {
    if (!date.isValid() || date.isBefore("1840-05-06") || date.isAfter(now)) {
        return false;
    }

    return true;
}

/**
 * A 12-digit string including hyphen separator, for example "99999999-9999"
 *
 * @public
 */
export type PersonnummerString = string;

/**
 * Parses 10- and 12-digit personnummers.
 *
 * @public
 */
export function parsePersonnummer(
    value: string | null | undefined,
    now: FDate = FDate.now(),
): PersonnummerString | undefined {
    if (!isSet(value)) {
        return undefined;
    }

    const match = stripWhitespace(value).match(PERSONNUMMER_REGEXP);
    if (!match) {
        return undefined;
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- expected
    const { year, month, day, sign, check } = match.groups!;
    const dayWithoutSamordning = getDayWithoutSamordning(day);

    const century =
        match.groups?.century ??
        resolveCentury(year, month, dayWithoutSamordning, sign === "+", now);

    // consider date as valid when samordningsnummer equals "60" (it means birthday is unknown)
    if (day === "60") {
        return getPersonnummerString(century, year, month, day, check);
    }

    const date = FDate.fromYearMonthDay(
        century + year,
        month,
        dayWithoutSamordning,
    );

    if (!isValidDate(date, now)) {
        return undefined;
    }

    return getPersonnummerString(century, year, month, day, check);
}

/**
 * Parses 10- and 12-digit personnummers with Luhn validation.
 *
 * @public
 */
export function parsePersonnummerLuhn(
    value: string | null | undefined,
): PersonnummerString | undefined {
    const parsed = parsePersonnummer(value);
    if (!parsed) {
        return undefined;
    }

    if (!validChecksum(parsed)) {
        return undefined;
    }

    return parsed;
}

/**
 * Formats personnummer to a 10-digit string.
 *
 * @public
 */
export function formatPersonnummer(
    value: PersonnummerString | null | undefined,
): string | undefined {
    if (!isSet(value)) {
        return undefined;
    }

    const currentYear = FDate.now().year;
    const year = Number(value.substring(0, 4));

    if (currentYear - year >= 100) {
        return value.substring(2).replace("-", "+");
    }

    return value.substring(2);
}

/**
 * Formats personnummer to a 8-digit date.
 *
 * @public
 */
export function formatPersonnummerToDate(
    value: PersonnummerString | undefined,
): FDate | undefined {
    const datePart = parseDate(parsePersonnummer(value)?.slice(0, 8) || "");
    if (!datePart) {
        return undefined;
    }
    return FDate.fromIso(datePart);
}
