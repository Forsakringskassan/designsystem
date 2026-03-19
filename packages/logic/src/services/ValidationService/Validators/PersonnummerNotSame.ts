import { parsePersonnummer } from "../../../converters";
import { type Validator } from "../Validator";

export const personnummerNotSame: Validator = {
    name: "personnummerNotSame",
    validation(value, _element, config) {
        /* eslint-disable-next-line @typescript-eslint/no-unnecessary-type-conversion -- technical debt */
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
