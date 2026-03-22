import {
    type ValidatableHTMLElement,
    type Validator,
    type ValidatorConfig,
    type ValidatorName,
} from "@fkui/logic";
import { HoursMinutesValidatorUtils } from "../utils";

export const minTimeValidator: Validator = {
    name: "minTime" as ValidatorName,
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
                return value >= limit;
            },
        );
    },
};
