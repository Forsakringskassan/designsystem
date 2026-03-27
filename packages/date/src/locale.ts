/**
 * What locale to use when formatting days.
 *
 * @public
 */
export enum Locale {
    SWEDISH = "sv",
    ENGLISH = "en",
}

function getDefaultLocale(): Locale {
    return Locale.SWEDISH;
}

let _locale: Locale = /* @__PURE__ */ getDefaultLocale();

/**
 * Reset current locale to its default value.
 *
 * @public
 */
export function resetLocale(): void {
    _locale = getDefaultLocale();
}

/**
 * Set current locale.
 *
 * @public
 */
export function setLocale(locale: Locale): void {
    _locale = locale;
}

/**
 * Check if given value is a {@link Locale}.
 *
 * @public
 */
export function isLocale(value?: Locale | string): value is Locale {
    if (!value) {
        return false;
    }
    const localeValues = Object.values<string>(Locale);
    return localeValues.includes(value);
}

/**
 * Get current locale.
 *
 * Swedish locale is default.
 *
 * @public
 */
export function getLocale(): Locale {
    return _locale;
}
