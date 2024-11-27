import { FDate } from "@fkui/date";
import { type Validator } from "../Validator";
import { formatPersonnummerToDate } from "../../../converters";

export const personnummerOlder: Validator = {
    name: "personnummerOlder",
    validation(value, _element, config) {
        const valueAsDate = formatPersonnummerToDate(value);
        const otherAsDate = formatPersonnummerToDate(String(config.otherField));
        if (!valueAsDate || !otherAsDate) {
            return true;
        }
        return FDate.compare(valueAsDate, otherAsDate) !== 1;
    },
};
