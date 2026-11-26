import { translate } from "./translate";
import { type TranslateFunction } from "./translate-function";

/**
 * Translation function.
 * @public
 */
export function useTranslate(): TranslateFunction {
    // TypeScript infers TranslateFunction<ResolveTranslationKey>
    // because we changed the default type in the interface above.
    return translate;
}
