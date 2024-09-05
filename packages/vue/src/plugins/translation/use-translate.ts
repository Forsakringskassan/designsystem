import { type TranslateFunction } from "./translate-function";
import { translate } from "./translate";

/**
 * Translation function.
 * @public
 */
export function useTranslate(): TranslateFunction {
    return translate;
}
