import { isSet } from "../../../utils";
import { type ValidatorOptions } from "../ValidationServiceInterface";
import { type Validator } from "../Validator";

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
        /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- technical debt */
        const el = document.querySelector<HTMLInputElement>(`#${config.id}`)!;
        return el.value === value;
    },
};
