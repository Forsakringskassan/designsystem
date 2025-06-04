import { parseNumber } from "@fkui/logic";
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

export const number = defineValidator("number", {
    type: "raw",
    validate(value: string) {
        if (typeof value !== "string") {
            return { valid: false, code: "" };
        }
        return { valid: typeof parseNumber(value) === "number", code: "" };
    },
});


export const min = defineValidator("min", {
    type: "parsed",
    validate(value: number) {
        console.log({ value });
        return { valid: value >= 10, code: "" };
    },
});
