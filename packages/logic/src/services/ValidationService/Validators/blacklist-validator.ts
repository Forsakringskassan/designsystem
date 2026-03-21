import { type ValidatorOptions } from "../validation-service-interface";
import { type Validator } from "../validator";

/**
 * @public
 */
export interface BlacklistValidatorConfig extends ValidatorOptions {
    values: string | string[] | number | number[];
}

function toArray<T>(value: T | T[]): T[] {
    if (Array.isArray(value)) {
        return value;
    } else {
        return [value];
    }
}

export const blacklistValidator: Validator<BlacklistValidatorConfig> = {
    name: "blacklist",
    validation(value, _element, config) {
        if (!config.values) {
            throw new Error("config.exclude must have values");
        }
        const values = toArray(config.values);
        const found = values.some((it) => String(it) === value);
        return !found;
    },
};
