import { FDate } from "@fkui/date";
import { type TranslateFunction } from "@fkui/logic";
import { TranslationService } from "@fkui/logic";
import { getMessage } from "./get-message";

const t: TranslateFunction = (key, defaultValueOrArgs, args) => {
    return TranslationService.provider.translate(key, defaultValueOrArgs, args);
};

const minDate = FDate.fromIso("2022-01-01");
const maxDate = FDate.fromIso("2022-12-31");

describe("getMessage", () => {
    it("should return message when before minDate", () => {
        const selectedDate = FDate.fromIso("2021-12-01");
        const message = getMessage(t, selectedDate, minDate, maxDate);
        expect(message).toBe("Du kan inte välja en dag före 1 januari 2022");
    });

    it("should return message when after maxDate", () => {
        const selectedDate = FDate.fromIso("2023-01-01");
        const message = getMessage(t, selectedDate, minDate, maxDate);
        expect(message).toBe("Du kan inte välja en dag efter 31 december 2022");
    });

    it("should return undefined if not outside of minDate or maxDate", () => {
        const selectedDate = FDate.fromIso("2022-05-20");
        const message = getMessage(t, selectedDate, minDate, maxDate);
        expect(message).toBeUndefined();
    });
});
