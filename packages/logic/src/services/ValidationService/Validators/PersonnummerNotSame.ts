import { type Validator } from "../Validator";
import { parsePersonnummer } from "../../../converters";

export const personnummerNotSame: Validator = {
    name: "personnummerNotSame",
    validation(value, _element, config) {
        const valuePnr = parsePersonnummer(String(value));
        if (!valuePnr) {
            return true;
        }
        const otherFieldPnr = parsePersonnummer(String(config.otherField));
        if (!otherFieldPnr) {
            return true;
        }
        if (valuePnr === otherFieldPnr) {
            return false;
        }
        return true;
    },
};
