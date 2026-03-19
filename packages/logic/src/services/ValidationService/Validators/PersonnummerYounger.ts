import { FDate } from "@fkui/date";
import { formatPersonnummerToDate } from "../../../converters";
import { type Validator } from "../Validator";

export const personnummerYounger: Validator = {
    name: "personnummerYounger",
    validation(value, _element, config) {
        const valueAsDate = formatPersonnummerToDate(value);
        const otherAsDate = formatPersonnummerToDate(String(config.otherField));
        if (!valueAsDate || !otherAsDate) {
            return true;
        }
        return FDate.compare(valueAsDate, otherAsDate) !== -1;
    },
};
