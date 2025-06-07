import { defineValidator } from "../validator-definition";

declare module "../validator-definition" {
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
