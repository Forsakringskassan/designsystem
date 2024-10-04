import { createInstance } from "i18next";
import {
    type TranslateFunction,
    type TranslationProviderInterface,
    flatten,
} from "@fkui/logic";

/**
 * @public
 */
export interface NestedStringRecord {
    [key: string | symbol]: string | NestedStringRecord;
}

/**
 * @public
 */
export interface I18nextOptions {
    /** Enable i18next debug mode (see their documentation for details ) */
    debug?: boolean;

    /** Default language to load */
    defaultLanguage: string;

    /**
     * Load a new language.
     *
     * This callback will be called with the default language initially.
     *
     * It should return a JSON structure (flat or nested):
     *
     * ```json
     * {
     *   "foo": "Translation for foo",
     *   "flat.key": "Flattened key",
     *   "nested": {
     *     "key": "Nested key"
     *   }
     * }
     * ```
     *
     * Nested keys will be flattened automatically.
     *
     * @param lang - Language to load.
     * @returns Texts as a JSON structure or a `Promise` resolving to a JSON
     * structure.
     */
    loadLanguage(
        lang: string,
    ): NestedStringRecord | Promise<NestedStringRecord>;
}

/**
 * @public
 */
export interface I18nextProvider extends TranslationProviderInterface {
    /**
     * Add a new custom formatter.
     */
    addFormatter(
        name: string,
        fn: (
            value: unknown,
            lang: string | undefined,
            options: unknown,
        ) => string,
    ): void;
}

const NAMESPACE = "translations";

/**
 * Create a new `i18next` provider for `TranslationService`.
 *
 * @public
 * @param options - Options for provider.
 * @returns New instance of a `I18nextProvider`.
 */
export async function i18nextProvider(
    options: I18nextOptions,
): Promise<I18nextProvider> {
    const { defaultLanguage, loadLanguage } = options;

    const i18next = createInstance();
    const $t = await i18next.init({
        lng: defaultLanguage,
        debug: options.debug,
        resources: {},
        keySeparator: false,
        interpolation: {
            escapeValue: false,
        },
        defaultNS: NAMESPACE,
    });

    await changeLanguage(defaultLanguage);

    return {
        get currentLanguage(): string {
            return i18next.language;
        },

        changeLanguage(lang): Promise<void> {
            return changeLanguage(lang);
        },

        translate(key, defaultValueOrArgs, args): string {
            /* workaround for the incorrect TranslateFunction type which
             * accepts incorrect calls such as `$t("foo", {}, {})` */
            const fn = $t as unknown as TranslateFunction;
            return fn(key, defaultValueOrArgs, args);
        },

        addFormatter(name, fn) {
            i18next.services.formatter?.add(name, fn);
        },
    };

    async function changeLanguage(lang: string): Promise<void> {
        if (lang !== "cimode") {
            const texts = await loadLanguage(lang);
            i18next.addResourceBundle(lang, NAMESPACE, flatten(texts));
        }
        await i18next.changeLanguage(lang);
    }
}
