import { defineValidator } from "../validator-definition";

declare module "../validator-definition" {
    export interface ValidatorTypeMapping {
        min: {
            config: {
                readonly value?: number;
            };
            codes: never;
        };
    }
}

export const min = defineValidator("min", {
    validateModelValue(value: number | null | undefined) {
        return { valid: typeof value === "number" && value >= 10 };
    },
});
