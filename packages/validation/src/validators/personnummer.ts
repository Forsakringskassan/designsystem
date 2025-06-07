import { defineValidator } from "../define-validator";

declare module "../type-mapping" {
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
            return { valid: true };
        }
        return { valid: false };
    },
});
