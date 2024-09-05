import {
    parseTimeToNumber,
    formatNumberToTime,
    forgivingParseTimeToNumber,
} from "./HoursMinutesConverter";

describe("parsing", () => {
    it.each`
        value        | expected     | description
        ${""}        | ${undefined} | ${"empty value should be parsed as undefined"}
        ${"5"}       | ${300}       | ${"value 5 should be parsed as 05:00"}
        ${"45"}      | ${2700}      | ${"value 45 should be parsed as 45:00"}
        ${"145"}     | ${8700}      | ${"value 145 should be parsed as 145:00"}
        ${"1045"}    | ${62700}     | ${"value 1045 should be parsed as 1045:00"}
        ${"10145"}   | ${608700}    | ${"value 10145 should be parsed as 10145:00"}
        ${"100145"}  | ${6008700}   | ${"value 100145 should be parsed as 100145:00"}
        ${":45"}     | ${45}        | ${"value :45 should be parsed as 00:45"}
        ${"1:45"}    | ${105}       | ${"value 1:45 should be parsed as 01:45"}
        ${"10:45"}   | ${645}       | ${"value 10:45 should be parsed as 10:45"}
        ${"1001:45"} | ${60105}     | ${"value 1001:45 should be parsed as 1001:45"}
    `(
        'should return "$expected" for "$value" because of $description',
        ({ value, expected }) => {
            expect(parseTimeToNumber(value)).toEqual(expected);
        },
    );
});

describe("formatting", () => {
    it.each`
        value        | expected       | description
        ${undefined} | ${undefined}   | ${"empty value should be formatted as undefined"}
        ${300}       | ${"05:00"}     | ${"value 300 should be formatted as 05:00"}
        ${2700}      | ${"45:00"}     | ${"value 2700 should be formatted as 45:00"}
        ${8700}      | ${"145:00"}    | ${"value 8700 should be formatted as 145:00"}
        ${62700}     | ${"1045:00"}   | ${"value 62700 should be formatted as 1045:00"}
        ${608700}    | ${"10145:00"}  | ${"value 608700 should be formatted as 10145:00"}
        ${6008700}   | ${"100145:00"} | ${"value 6008700 should be formatted as 100145:00"}
        ${45}        | ${"00:45"}     | ${"value 45 should be formatted as 00:45"}
        ${105}       | ${"01:45"}     | ${"value 105 should be formatted as 01:45"}
        ${645}       | ${"10:45"}     | ${"value 645 should be formatted as 10:45"}
        ${60105}     | ${"1001:45"}   | ${"value 60105 should be formatted as 1001:45"}
    `(
        'should return "$expected" for "$value" because of $description',
        ({ value, expected }) => {
            expect(formatNumberToTime(value)).toEqual(expected);
        },
    );
});

describe("forgiving parsing", () => {
    it.each`
        value        | expected     | description
        ${""}        | ${undefined} | ${"empty value should be parsed as undefined"}
        ${"5"}       | ${300}       | ${"value 5 should be parsed as 05:00"}
        ${"45"}      | ${2700}      | ${"value 45 should be parsed as 45:00"}
        ${"145"}     | ${8700}      | ${"value 145 should be parsed as 145:00"}
        ${"1045"}    | ${645}       | ${"value 1045 should be parsed as 10:45"}
        ${"10145"}   | ${608700}    | ${"value 10145 should be parsed as 10145:00"}
        ${":45"}     | ${45}        | ${"value :45 should be parsed as 00:45"}
        ${"1:45"}    | ${105}       | ${"value 1:45 should be parsed as 01:45"}
        ${"10:45"}   | ${645}       | ${"value 10:45 should be parsed as 10:45"}
        ${"1001:45"} | ${60105}     | ${"value 1001:45 should be parsed as 1001:45"}
    `(
        'should return "$expected" for "$value" when `extraForgiving` is true because of $description',
        ({ value, expected }) => {
            expect(forgivingParseTimeToNumber(value)).toEqual(expected);
        },
    );
});
