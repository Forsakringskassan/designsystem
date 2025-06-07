import { defineValidator } from "../validator-definition";

declare module "../validator-definition" {
    export interface ValidatorTypeMapping {
        minValue: {
            config: number | undefined;
            codes: never;
        };
    }
}

export const min = defineValidator("minValue", {
    validateModelValue(value: number) {
        const limit = this.config ?? 0;
        return {
            valid: value >= limit,
        };
    },
});
