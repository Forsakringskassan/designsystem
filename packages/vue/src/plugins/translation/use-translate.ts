import { translate } from "./translate";
import { type TranslateFunction } from "./translate-function";

/**
 * Translation function.
 * @public
 */
export function useTranslate(): TranslateFunction {
    return translate;
}
