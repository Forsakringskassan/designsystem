import { isEmpty } from "./is";

const DATE_REGEXP_WITH_DASH = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;

/**
 * @public
 */
export function validLimit(limit: unknown): string {
    if (typeof limit !== "string" || isEmpty(limit)) {
        throw new Error(`limit must be a non-empty string`);
    }

    const limitAsString: string = limit;
    if (!DATE_REGEXP_WITH_DASH.test(limitAsString)) {
        throw new Error(`limit has invalid format`);
    }

    return limitAsString;
}
