import { DefaultTranslationProvider } from "./default-translation-provider";
import { type TranslationProviderInterface } from "./translation-provider-interface";
import { type TranslationServiceInterface } from "./translation-service-interface";

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
