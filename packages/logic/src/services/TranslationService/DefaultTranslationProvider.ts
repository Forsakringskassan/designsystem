import { isSet } from "../../utils";
import { type TranslationProviderInterface } from "./TranslationProviderInterface";

export class DefaultTranslationProvider implements TranslationProviderInterface {
    private language = "sv";

    public get currentLanguage(): string {
        return this.language;
    }

    /* @todo technical debt, changeLanguage should accept just void */
    public changeLanguage(language: string): Promise<void> {
        this.language = language;
        return Promise.resolve();
    }

    public translate(
        key: string,
        defaultValueOrArgs?: string | Record<string, unknown>,
        args?: Record<string, unknown>,
    ): string {
        if (this.language === "cimode") {
            return key;
        }

        if (
            !isSet(defaultValueOrArgs) ||
            typeof defaultValueOrArgs !== "string"
        ) {
            throw new Error(
                "Translation failed: No default value specified (key translation is not supported by the default provider)",
            );
        }

        return isSet(args)
            ? this.interpolate(defaultValueOrArgs, args)
            : defaultValueOrArgs;
    }

    private interpolate(
        defaultValue: string,
        args: Record<string, unknown>,
    ): string {
        return defaultValue.replace(
            /* eslint-disable-next-line sonarjs/slow-regex -- technical debt */
            /{{\s*([^\s]+)\s*}}/g,
            (match, key: string) => {
                return String(args[key]) || match;
            },
        );
    }
}
