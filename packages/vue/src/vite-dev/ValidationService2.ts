interface Validator2 {
    type: "raw" | "parsed";
    validate(value: string): boolean;
}

export interface ValidationTarget<T> {
    getViewValue(): string;
    getModelValue(): T;
    readonly validators: Validator2[];
}

const personnummer: Validator2 = {
    type: "raw",
    validate() {
        return true;
    },
};

export function validate(target: ValidationTarget<unknown>): boolean {
    const viewValue = target.getViewValue();

    for (const validator of target.validators.filter(isRaw)) {
        const result = validator.validate(viewValue);
        if (!result) {
            return false;
        }
    }
    return true;
}

function isRaw(value: Validator2): boolean {
    return value.type === "raw";
}
