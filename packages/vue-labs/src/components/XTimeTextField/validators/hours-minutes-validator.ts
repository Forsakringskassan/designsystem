import {
    type ValidatableHTMLElement,
    type Validator,
    type ValidatorConfig,
    isEmpty,
    isSet,
} from "@fkui/logic";
import { HoursMinutesValidatorUtils } from "../utils";

export const hoursMinutesValidator: Validator = {
    name: "hoursMinutes",
    validation(
        value: string,
        _element: ValidatableHTMLElement,
        config: ValidatorConfig,
    ): boolean {
        return (
            isEmpty(value) ||
            isSet(HoursMinutesValidatorUtils.getParserFromConfig(config)(value))
        );
    },
};
