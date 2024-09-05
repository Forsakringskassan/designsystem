/**
 * @public
 */
export type TranslateFunction = (
    key: string,
    defaultValueOrArgs?: string | Record<string, unknown>,
    args?: Record<string, unknown>,
) => string;

/**
 * @public
 */
export interface TranslationProviderInterface {
    readonly currentLanguage: string;

    changeLanguage(
        language: string,
    ): Promise<void> | Promise<TranslateFunction>;

    translate(
        key: string,
        defaultValueOrArgs?: string | Record<string, unknown>,
        args?: Record<string, unknown>,
    ): string;
}
