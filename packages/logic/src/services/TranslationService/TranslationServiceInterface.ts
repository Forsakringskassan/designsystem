import { TranslationProviderInterface } from "./TranslationProviderInterface";

/**
 * @public
 */
export interface TranslationServiceInterface {
    provider: TranslationProviderInterface;
    changeProvider(provider: TranslationProviderInterface): void;
}
