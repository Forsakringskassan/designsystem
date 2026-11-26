import {
    type ValidatableHTMLElement,
    type Validator,
    type ValidatorConfig,
} from "@fkui/logic";
import { HoursMinutesValidatorUtils } from "../utils";

export const maxTimeValidator: Validator = {
    name: "maxTime",
    validation(
        value: string,
        _element: ValidatableHTMLElement,
        config: ValidatorConfig,
    ): boolean {
        return HoursMinutesValidatorUtils.validate(
            value,
            config,
            this.name,
            (value: number, limit: number) => {
                return value <= limit;
            },
        );
    },
};
