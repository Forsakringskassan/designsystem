import {
    type ValidatableHTMLElement,
    type Validator,
    type ValidatorConfig,
    type ValidatorName,
} from "@fkui/logic";
import { HoursMinutesValidatorUtils } from "../utils";

export const greaterThanTimeValidator: Validator = {
    name: "greaterThanTime" as ValidatorName,
    validation(
        value: string,
        _element: ValidatableHTMLElement,
        config: ValidatorConfig,
    ): boolean {
        return HoursMinutesValidatorUtils.validate(
            value,
            config,
            "limit",
            (value: number, limit: number) => {
                return value > limit;
            },
        );
    },
};
