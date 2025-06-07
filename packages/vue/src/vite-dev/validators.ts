import { parseNumber } from "@fkui/logic";
import {
    defineValidator,
    UntypedValidator,
    Validator,
    ValidatorName,
} from "./validator-definition";

declare module "./validator-definition" {
    export interface ValidatorTypeMapping {
        personnummer: {
            config: never;
            codes: never;
        };
    }
}

export const personnummer = defineValidator("personnummer", {
    validateViewValue(value) {
        if (typeof value === "string" && /^\d+$/.test(value)) {
            return { valid: true, code: "format" };
        }
        return { valid: false, code: "format" };
    },
});

export const number = defineValidator("number", {
    validateViewValue(value) {
        if (typeof value !== "string") {
            return { valid: false };
        }
        return { valid: typeof parseNumber(value) === "number" };
    },
});

export const min = defineValidator("min", {
    validateModelValue(value: number | null | undefined) {
        return { valid: typeof value === "number" && value >= 10 };
    },
});

const validators: Partial<
    Record<string, Validator<ValidatorName, unknown, unknown>>
> = {
    personnummer,
    number,
    min: min as Validator<"min", unknown, unknown>,
};

export function getValidatorByname(name: string): UntypedValidator {
    const validator = validators[name];
    if (!validator) {
        throw new Error(`no validator named "${name}"`);
    }
    return validator as UntypedValidator;
}
