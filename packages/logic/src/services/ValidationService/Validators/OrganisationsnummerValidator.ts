import { parseOrganisationsnummer } from "../../../converters";
import { isEmpty, isSet } from "../../../utils";
import { type Validator } from "../Validator";

export const organisationsnummerValidator: Validator = {
    name: "organisationsnummer",
    validation(value) {
        return isEmpty(value) || isSet(parseOrganisationsnummer(value));
    },
};
