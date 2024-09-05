import { FDate } from "@fkui/date";
import { getDayStartOffset, getDayEndOffset } from "./get-day-offset";

describe("getDayStartOffset", () => {
    it.each`
        date            | weekday        | expected
        ${"2022-07-04"} | ${"Monday"}    | ${0}
        ${"2022-07-05"} | ${"Tuesday"}   | ${1}
        ${"2022-07-06"} | ${"Wednesday"} | ${2}
        ${"2022-07-07"} | ${"Thursday"}  | ${3}
        ${"2022-07-08"} | ${"Friday"}    | ${4}
        ${"2022-07-09"} | ${"Saturday"}  | ${5}
        ${"2022-07-10"} | ${"Sunday"}    | ${6}
    `(
        "should return $expected when first day is $weekday",
        ({ date, expected }) => {
            expect(getDayStartOffset([FDate.fromIso(date)])).toBe(expected);
        },
    );
});

describe("getDayEndOffset", () => {
    it.each`
        date            | weekday        | expected
        ${"2022-07-04"} | ${"Monday"}    | ${6}
        ${"2022-07-05"} | ${"Tuesday"}   | ${5}
        ${"2022-07-06"} | ${"Wednesday"} | ${4}
        ${"2022-07-07"} | ${"Thursday"}  | ${3}
        ${"2022-07-08"} | ${"Friday"}    | ${2}
        ${"2022-07-09"} | ${"Saturday"}  | ${1}
        ${"2022-07-10"} | ${"Sunday"}    | ${0}
    `(
        "should return $expected when last day is $weekday",
        ({ date, expected }) => {
            expect(getDayEndOffset([FDate.fromIso(date)])).toBe(expected);
        },
    );
});
