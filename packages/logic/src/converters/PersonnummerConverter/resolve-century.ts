import { FDate } from "@fkui/date";

interface NowDetails {
    nowCentury: string;
    nowYear: string;
    nowMonthDay: string;
}

function getNowDetails(now: FDate): NowDetails {
    const nowIso = now.toString();

    return {
        nowCentury: nowIso.substring(0, 2),
        nowYear: nowIso.substring(2, 4),
        nowMonthDay: nowIso.substring(5, 7) + nowIso.substring(8, 10),
    };
}

/**
 * Resolves missing century.
 *
 * ```
 * getCentury("22", "01", "01", true, FDate.now()) // => "19"
 * ```
 *
 * @internal
 */
export function resolveCentury(
    year: string,
    month: string,
    day: string,
    hasPlus: boolean,
    now: FDate,
): string {
    const { nowCentury, nowYear, nowMonthDay } = getNowDetails(now);
    let subtractCenturies = 0;

    if (hasPlus) {
        subtractCenturies += 1;
    }

    if (
        year > nowYear ||
        (year === nowYear && !hasPlus && `${month}${day}` > nowMonthDay)
    ) {
        subtractCenturies += 1;
    }

    return (Number(nowCentury) - subtractCenturies).toString();
}
