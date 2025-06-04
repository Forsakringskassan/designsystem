import { defineValidator } from "./validator-definition";

declare module "./validator-result" {
    interface ValidationCodeMapping {
        personnummer: "format" | "checksum";
    }
}

export const personnummer = defineValidator("personnummer", {
    type: "raw",
    validate(value: string) {
        if (typeof value === "string" && /^\d+$/.test(value)) {
            return { valid: true };
        }
        return { valid: false, code: "format" };
    },
});
