import { type Validator } from "../Validator";
import { type ValidatorOptions } from "../ValidationServiceInterface";
import { isSet } from "../../../utils";

/**
 * @public
 */
export interface MatchesValidatorConfig extends ValidatorOptions {
    /** Identifier of another input field */
    id?: string;
}

export const matchesValidator: Validator<MatchesValidatorConfig> = {
    name: "matches",
    validation(value, _element, config) {
        if (!isSet(config.id) || !isSet(value)) {
            return true;
        }

        /** TODO This will crash if the element is not found */
        /** TODO This assumes the id references an `<input>` field */
        const el = document.getElementById(config.id) as HTMLInputElement;
        return el.value === value;
    },
};
