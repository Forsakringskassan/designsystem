import { type Validator } from "../Validator";
import { numberValidator } from "./utils/number-validator";

export const lessThanValidator: Validator = {
    name: "lessThan",
    validation(value, _element, config) {
        return numberValidator(
            value,
            config,
            "limit",
            (value, limit) => value < limit,
        );
    },
};
