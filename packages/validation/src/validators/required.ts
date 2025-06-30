import { defineValidator } from "../define-validator";

declare module "../type-mapping" {
    export interface ValidatorTypeMapping {
        required: {
            config: never;
            codes: never;
        };
    }
}

export default defineValidator("required", {
    validateViewValue(value) {
        return { valid: Boolean(value) };
    },
});
