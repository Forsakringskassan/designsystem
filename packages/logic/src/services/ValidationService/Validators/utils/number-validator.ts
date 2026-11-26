import { parseNumber } from "../../../../converters";
import { isSet } from "../../../../utils";
import { type ValidatorConfig } from "../../validation-service-interface";

/**
 * @internal
 */
/* eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters -- technical debt */
export function numberValidator<K extends keyof T, T extends ValidatorConfig>(
    value: string,
    config: Partial<T>,
    name: K,
    compare: (value: number, limit: number) => boolean,
): boolean {
    if (value === "") {
        return true;
    }

    const limit = config[name];
    if (!isSet(limit)) {
        return false;
    }

    // eslint-disable-next-line @typescript-eslint/no-base-to-string -- Config may contain objects
    const limitAsNumber = parseNumber(String(config[name]));
    if (limitAsNumber === undefined) {
        throw new Error(`config.${String(name)} must be a number`);
    }

    const valueAsNumber = parseNumber(value);
    if (valueAsNumber === undefined) {
        return false;
    }

    return compare(valueAsNumber, limitAsNumber);
}
