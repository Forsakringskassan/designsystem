import { type TranslateFunction } from "@fkui/vue";

/**
 * Format a timestamp as a relative "time ago" string.
 *
 * @internal
 */
export function timeAgo(
    timestamp: number,
    reference: number,
    $t: TranslateFunction,
): string {
    const seconds = Math.floor((reference - timestamp) / 1000);
    if (seconds < 60) {
        return $t("fkui.time-ago.seconds", "{{ count }}s ago", {
            count: seconds,
        });
    }
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
        return $t("fkui.time-ago.minutes", "{{ count }}m ago", {
            count: minutes,
        });
    }
    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
        return $t("fkui.time-ago.hours", "{{ count }}h ago", { count: hours });
    }
    const days = Math.floor(hours / 24);
    if (days < 30) {
        return $t("fkui.time-ago.days", "{{ count }}d ago", { count: days });
    }
    const months = Math.floor(days / 30);
    if (months < 12) {
        return $t("fkui.time-ago.months", "{{ count }}mo ago", {
            count: months,
        });
    }
    const years = Math.floor(months / 12);
    return $t("fkui.time-ago.years", "{{ count }}y ago", { count: years });
}
