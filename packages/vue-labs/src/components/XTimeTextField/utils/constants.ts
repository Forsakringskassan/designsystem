/**
 * @public
 */
export const HOURS_MINUTES_REGEXP = /^(?<hours>\d+)?(:(?<minutes>[0-5]\d))?$/;

/**
 * @public
 */
export const HOURS_MINUTES_WITHOUT_COLON_REGEXP =
    /^(?<hours>\d{2})(?<minutes>[0-5]\d)$/;
