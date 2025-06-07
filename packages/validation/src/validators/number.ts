import { parseNumber } from "@fkui/logic";
import { defineValidator } from "../define-validator";

declare module "../type-mapping" {
    export interface ValidatorTypeMapping {
        number: {
            config: never;
            codes: never;
        };
    }
}

export const number = defineValidator("number", {
    validateViewValue(value) {
        if (typeof value !== "string") {
            return { valid: false };
        }
        return { valid: typeof parseNumber(value) === "number" };
    },
});
