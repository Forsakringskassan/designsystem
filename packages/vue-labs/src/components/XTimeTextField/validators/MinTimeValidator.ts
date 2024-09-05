import {
    type Validator,
    type ValidatorName,
    type ValidatorConfig,
    type ValidatableHTMLElement,
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
