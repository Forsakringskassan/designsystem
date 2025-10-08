import {
    type ValidatableHTMLElement,
    type Validator,
    type ValidatorConfig,
    type ValidatorName,
} from "@fkui/logic";
import { HoursMinutesValidatorUtils } from "../utils";

export const lessThanTimeValidator: Validator = {
    name: "lessThanTime" as ValidatorName,
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
                return value < limit;
            },
        );
    },
};
