/**
 * @public
 */
export type CookieLifetimeOption =
    | {
          /**
           * @deprecated Use timeLimitSeconds instead. Will be rounded to nearest second.
           */
          timeLimitMillis?: number;
          timeLimitSeconds?: never;
      }
    | {
          timeLimitMillis?: never;
          timeLimitSeconds?: number;
      };

/**
 * @public
 */
export type CookieOptions = {
    name: string;
    value: string;
    keepAnyExistingCookie?: boolean;
} & CookieLifetimeOption;

const TWELVE_HOURS = 12 * 60 * 60;

/**
 * @public
 */
export function setCookie(options: CookieOptions): void {
    const shouldKeepTheExistingCookie =
        options.keepAnyExistingCookie && findCookie(options.name);
    if (shouldKeepTheExistingCookie) {
        return;
    }

    let cookieString = `${options.name}=${encodeURIComponent(
        options.value,
    )}; path=/;`;

    const timeLimitSeconds = options.timeLimitMillis
        ? Math.round(options.timeLimitMillis / 1000)
        : options.timeLimitSeconds;
    const timeout = timeLimitSeconds ?? TWELVE_HOURS;
    cookieString += `max-age=${timeout};`;

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
