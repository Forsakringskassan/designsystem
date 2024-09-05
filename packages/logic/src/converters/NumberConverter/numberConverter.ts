import { stripWhitespace } from "../../text";
import { isEmpty } from "../../utils";

const NUMBER_REGEXP = /^([-]?[0-9]+)([,.][0-9]+)?$/;

function replaceCommaWithDot(str: string): string {
    return str.replace(",", ".");
}

function replaceMinusSignWithDash(str: string): string {
    return str.replace("−", "-");
}

function replaceDotWithComma(str: string): string {
    return str.replace(".", ",");
}

function formatSwedishNotation(
    value: number,
    decimals?: number,
): string | undefined {
    if (decimals !== undefined) {
        // round
        value = Number(value.toFixed(decimals));
    }

    // Workaround, replace dot with comma. Node doesn't have swedish locale
    // installed as default. By having this workaround the applications
    // doesn't need to install full-icu & cross-env to get correct
    // formatting in jest tests.
    return replaceDotWithComma(
        value.toLocaleString("sv-SE", {
            minimumFractionDigits: decimals,
        }),
    );
}

/**
 * Format number with thousand separator and use comma as decimal separator.
 *
 * @public
 */
export function formatNumber(
    value: number | string | undefined | null,
    decimals?: number,
): string | undefined {
    if (typeof value === "string") {
        value = parseNumber(value) ?? "";
    }

    if (typeof value !== "number" || isNaN(value)) {
        return undefined;
    }

    return formatSwedishNotation(value, decimals);
}

/**
 * @public
 */
export function parseNumber(value: string): number | undefined {
    if (isEmpty(value)) {
        return undefined;
    }

    const stripped = stripWhitespace(value);
    const numberString = replaceCommaWithDot(
        replaceMinusSignWithDash(stripped),
    );

    if (!NUMBER_REGEXP.test(numberString)) {
        return undefined;
    }

    const number = Number(numberString);

    return isNaN(number) ? undefined : number;
}
