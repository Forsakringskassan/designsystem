import { Locale, getLocale } from "../locale";
import { Weekday } from "./weekday";
import { WeekdayNaming } from "./weekday-naming";

const namings: Record<Locale, WeekdayNaming[]> = {
    [Locale.SWEDISH]: [
        {
            weekday: Weekday.MONDAY,
            name: "måndag",
            shortName: "mån",
        },
        {
            weekday: Weekday.TUESDAY,
            name: "tisdag",
            shortName: "tis",
        },
        {
            weekday: Weekday.WEDNESDAY,
            name: "onsdag",
            shortName: "ons",
        },
        {
            weekday: Weekday.THURSDAY,
            name: "torsdag",
            shortName: "tor",
        },
        {
            weekday: Weekday.FRIDAY,
            name: "fredag",
            shortName: "fre",
        },
        {
            weekday: Weekday.SATURDAY,
            name: "lördag",
            shortName: "lör",
        },
        {
            weekday: Weekday.SUNDAY,
            name: "söndag",
            shortName: "sön",
        },
    ],
    [Locale.ENGLISH]: [
        {
            weekday: Weekday.MONDAY,
            name: "Monday",
            shortName: "Mon",
        },
        {
            weekday: Weekday.TUESDAY,
            name: "Tuesday",
            shortName: "Tue",
        },
        {
            weekday: Weekday.WEDNESDAY,
            name: "Wednesday",
            shortName: "Wed",
        },
        {
            weekday: Weekday.THURSDAY,
            name: "Thursday",
            shortName: "Thu",
        },
        {
            weekday: Weekday.FRIDAY,
            name: "Friday",
            shortName: "Fri",
        },
        {
            weekday: Weekday.SATURDAY,
            name: "Saturday",
            shortName: "Sat",
        },
        {
            weekday: Weekday.SUNDAY,
            name: "Sunday",
            shortName: "Sun",
        },
    ],
};

/**
 * Returns naming details for each weekday.
 *
 * If no locale is specified, the current locale will be used.
 *
 * @public
 */
export function getWeekdayNamings(locale?: Locale): WeekdayNaming[] {
    const resolvedLocale = locale ?? getLocale();

    return namings[resolvedLocale];
}
