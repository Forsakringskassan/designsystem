import { type ValidatorConfig, isSet } from "@fkui/logic";
import { parseTimeToNumber } from "../converters";

/* eslint-disable-next-line @typescript-eslint/no-extraneous-class -- technical
 * debt, should be refactored to vanilla functions */
export class HoursMinutesValidatorUtils {
    public static validate(
        value: string,
        config: ValidatorConfig,
        name: string,
        compare: (value: number, limit: number) => boolean,
    ): boolean {
        if (value === "") {
            return true;
        }

        const limit = config[name];
        if (!isSet(limit)) {
            return false;
        }

        const parseFunction =
            HoursMinutesValidatorUtils.getParserFromConfig(config);
        const limitAsNumber = parseFunction(String(config[name]));
        if (!isSet(limitAsNumber)) {
            throw new Error(`config.${name} must be a number`);
        }

        const valueAsNumber = parseFunction(value);
        if (!isSet(valueAsNumber)) {
            return false;
        }

        return compare(valueAsNumber, limitAsNumber);
    }

    public static getParserFromConfig(
        config?: ValidatorConfig,
    ): (viewValue: string | null | undefined) => number | undefined {
        if (
            !isSet(config) ||
            !Array.isArray(config.parser) ||
            !isSet(config.parser?.[0]) ||
            typeof config.parser[0] !== "function"
        ) {
            return parseTimeToNumber;
        }

        return config.parser[0] as (
            viewValue: string | null | undefined,
        ) => number | undefined;
    }
}
