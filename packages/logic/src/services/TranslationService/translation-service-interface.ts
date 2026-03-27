import { type TranslationProviderInterface } from "./translation-provider-interface";

/**
 * @public
 */
export interface TranslationServiceInterface {
    provider: TranslationProviderInterface;
    changeProvider(provider: TranslationProviderInterface): void;
}
