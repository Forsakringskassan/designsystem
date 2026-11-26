import { type NumberFormat } from "./number-format";

/**
 * @internal
 */
export function isNumberFormat(value: unknown): value is NumberFormat {
    if (!value || typeof value !== "object") {
        return false;
    }

    const maybeNumberformat = value as { [K in keyof NumberFormat]?: unknown };
    if (typeof maybeNumberformat.decimals !== "number") {
        return false;
    }

    return ["number", "string"].includes(typeof maybeNumberformat.number);
}
