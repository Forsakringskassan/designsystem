/**
 * Takes a date string in any of the supported formats and normalizes it for
 * usage with `FDate` (ISO-8601).
 *
 * Handles:
 *
 * - `YYYY-MM-DD`
 * - `YYYY/MM/DD`
 * - `YYYYMMDD`
 *
 * @internal
 * @param value - Date string to normalize.
 * @returns Normalized date string (ISO-8601) or undefined if it doesnt match one of the
 * supported formats.
 */
export function normalizeDateFormat(value: string): string | undefined {
    const supportedFormats = [
        /* yyyy-mm-dd */
        /^(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})$/,
        /* yyyymmdd */
        /^(?<year>\d{4})(?<month>\d{2})(?<day>\d{2})$/,
        /* yyyy-mm-dd */
        /^(?<year>\d{4})\/(?<month>\d{2})\/(?<day>\d{2})$/,
    ];
    const match = supportedFormats
        .map((pattern) => value.match(pattern))
        .find(Boolean);
    if (!match || !match.groups) {
        return undefined;
    }
    const { year, month, day } = match.groups;
    return `${year}-${month}-${day}`;
}
