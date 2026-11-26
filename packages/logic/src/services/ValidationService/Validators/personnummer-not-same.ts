import { parsePersonnummer } from "../../../converters";
import { type Validator } from "../validator";

export const personnummerNotSame: Validator = {
    name: "personnummerNotSame",
    validation(value, _element, config) {
        const valuePnr = parsePersonnummer(value);
        if (!valuePnr) {
            return true;
        }
        // eslint-disable-next-line @typescript-eslint/no-base-to-string -- Config may contain objects
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
