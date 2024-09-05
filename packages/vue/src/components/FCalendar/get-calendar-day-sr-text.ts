import { DateFormat, FDate } from "@fkui/date";
import { type TranslateFunction } from "@fkui/logic";

/**
 * @public
 *
 * Returns day screenreader text with information about its state and date.
 */
export function getCalendarDaySrText(
    day: FDate,
    enabled: boolean,
    selected: boolean,
    t: TranslateFunction,
): string {
    const parts = [];

    if (!enabled) {
        parts.push(t("fkui.calendar.day.unselectable", "inte valbar"));
    } else if (selected) {
        parts.push(t("fkui.calendar.day.selected", "vald dag"));
    }

    const today = FDate.now();

    if (day.equals(today)) {
        parts.push(t("fkui.calendar.day.today", "idag"));
    } else if (day.equals(today.addDays(-1))) {
        parts.push(t("fkui.calendar.day.yesterday", "igår"));
    } else if (day.equals(today.addDays(1))) {
        parts.push(t("fkui.calendar.day.tomorrow", "imorgon"));
    }

    parts.push(day.toString(DateFormat.FULL));

    return parts.join(" ");
}
