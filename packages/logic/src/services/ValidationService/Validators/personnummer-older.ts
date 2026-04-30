import { FDate } from "@fkui/date";
import { formatPersonnummerToDate } from "../../../converters";
import { type Validator } from "../validator";

export const personnummerOlder: Validator = {
    name: "personnummerOlder",
    validation(value, _element, config) {
        const valueAsDate = formatPersonnummerToDate(value);
        // eslint-disable-next-line @typescript-eslint/no-base-to-string -- Config may contain objects
        const otherAsDate = formatPersonnummerToDate(String(config.otherField));
        if (!valueAsDate || !otherAsDate) {
            return true;
        }
        return FDate.compare(valueAsDate, otherAsDate) !== 1;
    },
};
