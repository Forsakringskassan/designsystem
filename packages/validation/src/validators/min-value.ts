import { defineValidator } from "../define-validator";

declare module "../type-mapping" {
    export interface ValidatorTypeMapping {
        minValue: {
            config: {
                limit?: number;
            };
            codes: never;
        };
    }
}

export const min = defineValidator("minValue", {
    validateModelValue(value: number) {
        const { limit = 0 } = this.config;
        return {
            valid: value >= limit,
        };
    },
});
