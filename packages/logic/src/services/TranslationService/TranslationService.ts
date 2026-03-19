import { DefaultTranslationProvider } from "./DefaultTranslationProvider";
import { type TranslationProviderInterface } from "./TranslationProviderInterface";
import { type TranslationServiceInterface } from "./TranslationServiceInterface";

class TranslationServiceImpl implements TranslationServiceInterface {
    public provider: TranslationProviderInterface =
        new DefaultTranslationProvider();

    public changeProvider(newProvider: TranslationProviderInterface): void {
        this.provider = newProvider;
    }
}

/**
 * @public
 */
export const TranslationService: TranslationServiceInterface =
    /* @__PURE__ */
    new TranslationServiceImpl();
