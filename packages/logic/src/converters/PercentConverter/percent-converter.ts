import { formatNumber, parseNumber } from "../NumberConverter";

/**
 * @public
 */
export function formatPercent(
    modelValue: number | string | undefined | null,
    decimals?: number,
): string | undefined {
    return formatNumber(modelValue, decimals);
}

/**
 * @public
 */
export function parsePercent(
    viewValue: string,
    fractionDigits?: number,
): number | undefined {
    return parseNumber(viewValue, fractionDigits);
}
