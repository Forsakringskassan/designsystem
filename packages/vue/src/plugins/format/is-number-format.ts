import { isSet } from "@fkui/logic";
import { NumberFormat } from "./number-format";

export function isNumberFormat(value: unknown): value is NumberFormat {
    if (!isSet(value)) {
        return false;
    }

    const maybeNumberformat = value as NumberFormat;
    if (typeof maybeNumberformat.decimals !== "number") {
        return false;
    }

    return ["number", "string"].includes(typeof maybeNumberformat.number);
}
