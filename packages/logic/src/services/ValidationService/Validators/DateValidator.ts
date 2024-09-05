import { FDate } from "@fkui/date";
import { type Validator } from "../Validator";
import { isEmpty, normalizeDateFormat } from "../../../utils";

export const dateValidator: Validator = {
    name: "date",
    validation(value) {
        if (isEmpty(value)) {
            return true;
        }

        const normalized = normalizeDateFormat(value);
        if (!normalized) {
            return false;
        }

        const parsed = FDate.fromIso(normalized);
        return parsed.isValid();
    },
};

export const dateFormatValidator: Validator = {
    name: "dateFormat",
    validation(value) {
        if (isEmpty(value)) {
            return true;
        }

        const normalized = normalizeDateFormat(value);
        return Boolean(normalized);
    },
};
