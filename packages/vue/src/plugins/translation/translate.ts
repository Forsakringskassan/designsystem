import { TranslationService } from "@fkui/logic";

/**
 * @internal
 */
export function translate(
    key: string,
    defaultValueOrArgs?: string | Record<string, unknown>,
    args?: Record<string, unknown>,
): string {
    const { provider } = TranslationService;
    return provider.translate(key, defaultValueOrArgs, args);
}
