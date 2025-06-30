import { defineValidator } from "../define-validator";

declare module "../type-mapping" {
    export interface ValidatorTypeMapping {
        maxLength: {
            config: {
                limit?: number;
            };
            codes: never;
        };
    }
}

export const min = defineValidator("maxLength", {
    validateModelValue(value: string) {
        const { limit = 0 } = this.config;
        return {
            valid: value.length <= limit,
        };
    },
});
