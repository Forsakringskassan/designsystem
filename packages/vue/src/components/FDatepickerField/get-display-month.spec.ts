import { FDate } from "@fkui/date";
import { getDisplayMonth } from "./get-display-month";

jest.useFakeTimers({ now: new Date(2023, 11, 24) });

const lateMinDate = FDate.fromIso("2024-02-15");
const lateMaxDate = FDate.fromIso("2024-09-15");
const earlyMinDate = FDate.fromIso("2020-02-15");
const earlyMaxDate = FDate.fromIso("2020-09-15");

function dateFn(val: string): FDate | undefined {
    if (val === "missing") {
        return undefined;
    } else if (val === "invalid") {
        return FDate.fromIso("foo");
    } else {
        return FDate.fromIso(val);
    }
}

describe.each([
    [
        "should return start of month for valid `selectedDate`",
        "2023-01-15",
        "2023-02-01",
        "2023-01-01",
    ],
    [
        "should return start of month for valid `initialMonth` when missing `selectedDate`",
        "missing",
        "2023-02-15",
        "2023-02-01",
    ],
    [
        "should return start of month for valid `initialMonth` when invalid `selectedDate`",
        "invalid",
        "2023-02-15",
        "2023-02-01",
    ],
    [
        "should return today's start of month when missing `selectedDate` and `initialMonth`",
        "missing",
        "missing",
        FDate.now().startOfMonth().toString(),
    ],
    [
        "should return today's start of month when invalid `selectedDate` and missing `initialMonth`",
        "invalid",
        "missing",
        FDate.now().startOfMonth().toString(),
    ],
    [
        "should return today's start of month when missing `selectedDate` and invalid `initialMonth`",
        "missing",
        "invalid",
        FDate.now().startOfMonth().toString(),
    ],
    [
        "should return today's start of month when invalid `selectedDate` and `initialMonth`",
        "invalid",
        "invalid",
        FDate.now().startOfMonth().toString(),
    ],
])(
    "%s when `selectedDate` (%s), `initialMonth` (%s)",
    (name: string, selected: string, initial: string, expected: string) => {
        const selectedDate = dateFn(selected);
        const initialMonth = dateFn(initial);

        it(`should return expected ${expected}`, () => {
            expect.assertions(1);
            expect(
                getDisplayMonth(
                    earlyMinDate,
                    lateMaxDate,
                    selectedDate,
                    initialMonth,
                ).toString(),
            ).toBe(expected);
        });

        it("overridden with min-date month when within invalid early month", () => {
            expect.assertions(1);
            expect(
                getDisplayMonth(
                    lateMinDate,
                    lateMaxDate,
                    selectedDate,
                    initialMonth,
                ).toString(),
            ).toBe("2024-02-01");
        });

        it("overridden with max-date month when within invalid late month", () => {
            expect.assertions(1);
            expect(
                getDisplayMonth(
                    earlyMinDate,
                    earlyMaxDate,
                    selectedDate,
                    initialMonth,
                ).toString(),
            ).toBe("2020-09-01");
        });
    },
);

it.each([
    ["2023-04-01", "2023-04-01", "2023-04-30", "2023-04-01"],
    ["2023-04-30", "2023-04-01", "2023-04-30", "2023-04-01"],
    ["2023-04-01", "2023-03-30", "2023-03-31", "2023-03-01"],
    ["2023-04-01", "2023-03-30", "2023-03-31", "2023-03-01"],
    ["2023-03-31", "2023-04-01", "2023-04-30", "2023-04-01"],
    ["2023-05-01", "2023-04-30", "2023-05-15", "2023-05-01"],
    ["2023-05-01", "2023-04-29", "2023-04-30", "2023-04-01"],
    ["2023-05-03", "2023-05-15", "2023-05-16", "2023-05-01"],
])(
    "min/max date override edge cases gives correct month (%s, %s, %s => %s)",
    (date: string, mindate: string, maxdate: string, expected: string) => {
        expect.assertions(1);
        expect(
            getDisplayMonth(
                FDate.fromIso(mindate),
                FDate.fromIso(maxdate),
                FDate.fromIso(date),
            ).toString(),
        ).toBe(expected);
    },
);
