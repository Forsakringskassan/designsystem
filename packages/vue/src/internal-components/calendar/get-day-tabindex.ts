import { FDate } from "@fkui/date";

function isSameMonth(a: FDate, b: FDate): boolean {
    return a.startOfMonth().equals(b.startOfMonth());
}

export function getDayTabindex(
    date: FDate,
    active: FDate | undefined,
    entry: FDate | undefined,
): 0 | -1 {
    const ref = active ?? entry;

    if (ref && isSameMonth(ref, date)) {
        return date.equals(ref) ? 0 : -1;
    } else {
        return date.day === 1 ? 0 : -1;
    }
}
