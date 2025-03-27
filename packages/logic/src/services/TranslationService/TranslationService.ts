import { TranslationServiceInterface } from "./TranslationServiceInterface";
import { TranslationProviderInterface } from "./TranslationProviderInterface";
import { DefaultTranslationProvider } from "./DefaultTranslationProvider";

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
