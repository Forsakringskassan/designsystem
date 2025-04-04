import { formatNumber as numberFormater } from "@fkui/logic";

interface NumberFormat {
    number: number | string;
    decimals: number;
}

function isNumberFormat(value: unknown): value is NumberFormat {
    if (!value) {
        return false;
    }

    const maybeNumberformat = value as NumberFormat;
    if (typeof maybeNumberformat.decimals !== "number") {
        return false;
    }

    return ["number", "string"].includes(typeof maybeNumberformat.number);
}

export function formatNumber(
    el: HTMLElement,
    number: string | number | NumberFormat | unknown,
): void {
    const value = number ? number : el.textContent;
    if (typeof value === "string" || typeof value === "number") {
        el.textContent = numberFormater(value) ?? "";
    } else if (isNumberFormat(value)) {
        el.textContent = numberFormater(value.number, value.decimals) ?? "";
    } else {
        return;
    }
    el.classList.add("formatter--number");
}
