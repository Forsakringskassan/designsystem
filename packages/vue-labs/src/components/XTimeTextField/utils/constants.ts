/**
 * @public
 */
export const HOURS_MINUTES_REGEXP =
    /^(?<hours>[0-9]+)?(:(?<minutes>[0-5][0-9]))?$/;

/**
 * @public
 */
export const HOURS_MINUTES_WITHOUT_COLON_REGEXP =
    /^(?<hours>[0-9]{2})(?<minutes>[0-5][0-9])$/;
