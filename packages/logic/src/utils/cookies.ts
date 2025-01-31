/**
 * @public
 */
export interface CookieOptions {
    name: string;
    value: string;
    keepAnyExistingCookie?: boolean;

    /** `max-age` parameter, default: 12h */
    timeLimitSeconds?: number;
}

const TWELVE_HOURS = 12 * 60 * 60;

/**
 * @public
 */
export function setCookie(options: CookieOptions): void {
    const { name, value, keepAnyExistingCookie, timeLimitSeconds } = options;

    const shouldKeepTheExistingCookie =
        keepAnyExistingCookie && findCookie(name);
    if (shouldKeepTheExistingCookie) {
        return;
    }

    const timeout = timeLimitSeconds ?? TWELVE_HOURS;
    const cookieString = `${name}=${encodeURIComponent(value)}; path=/; max-age=${timeout};`;

    document.cookie = cookieString;
}

/**
 * @public
 */
export function deleteCookie(name: string): void {
    document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
}

/**
 * @public
 */
export function findCookie(name: string): string | undefined {
    /* handle when document or cookie does not exist, e.g. when DOM isn't
     * present */
    if (!document?.cookie) {
        return undefined;
    }

    const cookieKeyValueStrings = document.cookie.split(";");

    for (const cookie of cookieKeyValueStrings) {
        const [foundCookieName, foundCookieValue] = cookie.split("=", 2);
        if (name === foundCookieName.trim()) {
            return foundCookieValue
                ? decodeURIComponent(foundCookieValue)
                : undefined;
        }
    }

    return undefined;
}
