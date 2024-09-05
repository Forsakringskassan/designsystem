/**
 * What format to use when formatting dates.
 *
 * @public
 */
export enum DateFormat {
    /**
     * Format with weekday, day, month, year as a human-readable string.
     *
     * "onsdag 4 maj 2022"
     */
    FULL = "full",

    /**
     * Format with day, month, year as a human-readable string.
     *
     * "4 maj 2022"
     */
    LONG = "long",

    /**
     * Format according to ISO 8601 format.
     *
     * "2022-05-04"
     */
    ISO8601 = "iso-8601",

    /**
     * Format YYYYMMDD
     *
     * "20220504"
     */
    YYYYMMDD = "YYYYMMDD",
}
