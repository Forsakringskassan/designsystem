import { type Validator } from "../Validator";
import { numberValidator } from "./utils/number-validator";

export const maxValueValidator: Validator = {
    name: "maxValue",
    validation(value, _element, config) {
        return numberValidator(
            value,
            config,
            this.name,
            (value, limit) => value <= limit,
        );
    },
};
