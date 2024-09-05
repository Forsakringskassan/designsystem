import { type Validator } from "../Validator";
import { isEmpty, isSet } from "../../../utils";
import { parseOrganisationsnummer } from "../../../converters";

export const organisationsnummerValidator: Validator = {
    name: "organisationsnummer",
    validation(value) {
        return isEmpty(value) || isSet(parseOrganisationsnummer(value));
    },
};
