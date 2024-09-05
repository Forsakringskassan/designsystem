import { type Validator } from "../Validator";
import { stripWhitespace } from "../../../text";
import { isEmpty, isSet } from "../../../utils";
import { type ValidatorOptions } from "../ValidationServiceInterface";

/**
 * @public
 */
export interface DecimalValidatorConfig extends ValidatorOptions {
    minDecimals: number;
    maxDecimals: number;
}

function createNumberRegexp(minDecimals = 0, maxDecimals = 2): RegExp {
    return new RegExp(
        `^([-\u2212]?[0-9]+)([,.][0-9]{${minDecimals},${maxDecimals}})(?<![,.])$`,
    );
}

export const decimalValidator: Validator<DecimalValidatorConfig> = {
    name: "decimal",
    validation(value, _element, config) {
        const valueWithoutWhitespace = isSet(value)
            ? stripWhitespace(String(value))
            : value;
        const minDecimalsAsNumber = isSet(config.minDecimals)
            ? Number(config.minDecimals)
            : undefined;
        const maxDecimalsAsNumber = isSet(config.maxDecimals)
            ? Number(config.maxDecimals)
            : undefined;

        /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- technical debt, should actually verfiy value instead */
        if (config.minDecimals && isNaN(minDecimalsAsNumber!)) {
            throw new Error("config.minDecimals must be a number");
        }
        /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- technical debt, should actually verfiy value instead */
        if (config.maxDecimals && isNaN(maxDecimalsAsNumber!)) {
            throw new Error("config.maxDecimals must be a number");
        }

        return (
            isEmpty(valueWithoutWhitespace) ||
            createNumberRegexp(minDecimalsAsNumber, maxDecimalsAsNumber).test(
                valueWithoutWhitespace,
            )
        );
    },
};
