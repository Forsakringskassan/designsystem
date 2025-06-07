import { parseNumber } from "@fkui/logic";
import { defineValidator } from "../validator-definition";

declare module "../validator-definition" {
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
