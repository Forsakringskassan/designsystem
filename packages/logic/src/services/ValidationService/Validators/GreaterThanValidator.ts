import { type Validator } from "../Validator";
import { numberValidator } from "./utils/number-validator";

export const greaterThanValidator: Validator = {
    name: "greaterThan",
    validation(value, _element, config) {
        return numberValidator(
            value,
            config,
            "limit",
            (value, limit) => value > limit,
        );
    },
};
