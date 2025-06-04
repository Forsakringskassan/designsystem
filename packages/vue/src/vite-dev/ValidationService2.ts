interface ValidationCodeMapping {
    personnummer: "format" | "checksum";
}

interface ValidationValid<K extends string> {
    name: K;
    valid: true;
}

type ValidationInvalid<K extends string> = K extends keyof ValidationCodeMapping
    ? { name: K, valid: false; code: ValidationCodeMapping[K] }
    : { name: K, valid: false; code: unknown };

type ValidatorResult<K extends string> =
    | ValidationValid<K>
    | ValidationInvalid<K>;

interface RawValidator<K extends string, TValue> {
    name: K;
    type: "raw";
    validate(value: TValue | null | undefined): ValidatorResult<K>;
}

interface ParsedValidator<K extends string, TModel> {
    name: K;
    type: "parsed";
    validate(value: TModel): ValidatorResult<K>;
}

type Validator2<K extends string, TValue, TModel> =
    | RawValidator<K, TValue>
    | ParsedValidator<K, TModel>;

export interface ValidationTarget<TValue, TModel> {
    getViewValue(): TValue | null | undefined;
    getModelValue(): TModel;
    readonly validators: Array<Validator2<string, TValue, TModel>>;
}

export const personnummer: RawValidator<"personnummer", string> = {
    name: "personnummer",
    type: "raw",
    validate(value) {
        if (typeof value === "string" && /^\d+$/.test(value)) {
            return { name: "personnummer", valid: true };
        }
        return { name: "personnummer", valid: false, code: "format" };
    },
};

export function validateSingle<TValue, TModel>(
    target: ValidationTarget<TValue, TModel>,
): boolean {
    const viewValue = target.getViewValue();

    for (const validator of target.validators.filter(isRaw)) {
        const result = validator.validate(viewValue);
        if (!result.valid) {
            return false;
        }
    }

    return true;
}

function isRaw<K extends string, TValue, TModel>(
    value: Validator2<K, TValue, TModel>,
): value is RawValidator<K, TValue> {
    return value.type === "raw";
}
