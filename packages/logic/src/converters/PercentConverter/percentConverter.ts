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
export function parsePercent(viewValue: string): number {
    /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- technical debt */
    return parseNumber(viewValue)!;
}
