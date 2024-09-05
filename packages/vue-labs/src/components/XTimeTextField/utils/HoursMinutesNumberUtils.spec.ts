import { TranslationService } from "@fkui/logic";
import {
    minutesToHoursFloat,
    minutesToObject,
    minutesToHoursMinutesString,
    minutesToUserFriendlyString,
    splitHoursMinutes,
    hoursMinutesStringToMinutes,
} from "./HoursMinutesNumberUtils";

beforeEach(() => {
    const $t = (
        key: string,
        defaultValueOrArgs: string | Record<string, number>,
        args?: Record<string, number>,
    ): string => {
        if (typeof defaultValueOrArgs !== "string") {
            return $t(key, "", defaultValueOrArgs);
        }

        // Translation must be mocked so that we can properly test the user friendly string conversion
        if (key === "ARBE.RW.generell.etikett.timmarochminuter") {
            return `${args?.hours} timm${args?.hours === 1 ? "e" : "ar"} och ${
                args?.minutes
            } minut${args?.minutes === 1 ? "" : "er"}`;
        } else {
            return key;
        }
    };
    TranslationService.provider.translate = $t;
});

describe("hoursMinutesStringToMinutes", () => {
    it.each`
        value       | expected     | description
        ${"10:45"}  | ${645}       | ${"10:45 should be recalculated to 645 minutes"}
        ${"10:59"}  | ${659}       | ${"10:59 should be recalculated to 659 minutes"}
        ${"1030"}   | ${61800}     | ${"1030 should be recalculated to 61800 minutes"}
        ${":30"}    | ${30}        | ${":30 should be recalculated to 30 minutes"}
        ${"0:30"}   | ${30}        | ${"0:30 should be recalculated to 30 minutes"}
        ${"10:30"}  | ${630}       | ${"10:30 should be recalculated to 630 minutes"}
        ${"10030"}  | ${601800}    | ${"10030 should be recalculated to 601800 minutes"}
        ${"100:00"} | ${6000}      | ${"100:00 should be recalculated to 6000 minutes"}
        ${"nej"}    | ${undefined} | ${"a non conformant string should not be a number"}
        ${"00:00"}  | ${0}         | ${"00:00 should be recalculated to 0 minutes"}
    `(
        'should return "$expected" for "$value" because of $description',
        ({ value, expected }) => {
            expect(hoursMinutesStringToMinutes(value)).toEqual(expected);
        },
    );
});

describe("minutesToHoursMinutesString", () => {
    it.each`
        value   | expected    | description
        ${645}  | ${"10:45"}  | ${"645 should evaluate to 10 h and 45 m"}
        ${630}  | ${"10:30"}  | ${"630 should evaluate to 10 h and 30 m"}
        ${600}  | ${"10:00"}  | ${"60 should evaluate to 10 h and 00 m"}
        ${6030} | ${"100:30"} | ${"6030 should evaluate to 100 h and 30 m"}
        ${6000} | ${"100:00"} | ${"6000 should evaluate to 100 h and 00 m"}
        ${0}    | ${"00:00"}  | ${"0 should evaluate to 00 h and 00 m"}
        ${NaN}  | ${""}       | ${"NaN should evaluate to an empty string"}
    `(
        'should return "$expected" for "$value" because of $description',
        ({ value, expected }) => {
            expect(minutesToHoursMinutesString(value)).toEqual(expected);
        },
    );
});

describe("splitHoursMinutes", () => {
    it.each`
        value       | expected           | description
        ${"10:45"}  | ${["10", "45"]}    | ${"10:45 should split into 10 and 45"}
        ${"10:59"}  | ${["10", "59"]}    | ${"10:59 should split into 10 and 59"}
        ${":59"}    | ${["00", "59"]}    | ${":59 should split into 00 and 59"}
        ${"1030"}   | ${["1030", "00"]}  | ${"1030 should split into 1030 and 00"}
        ${"10:00"}  | ${["10", "00"]}    | ${"10:00 should split into 10 and 00"}
        ${"10030"}  | ${["10030", "00"]} | ${"10030 should split into 10030 and 00"}
        ${"100:00"} | ${["100", "00"]}   | ${"100:00 should split into 100 and 00"}
        ${"00:05"}  | ${["00", "05"]}    | ${"00:05 should split into 00 and 05"}
        ${"00:00"}  | ${["00", "00"]}    | ${"00:00 should split into 00 and 00"}
        ${""}       | ${["00", "00"]}    | ${"empty string should return 00 and 00"}
    `(
        'should return "$expected" for "$value" because of $description',
        ({ value, expected }) => {
            expect(splitHoursMinutes(value)).toEqual(expected);
        },
    );
});

describe("minutesToUserFriendlyString", () => {
    it.each`
        value   | expected                       | description
        ${645}  | ${"10 timmar och 45 minuter"}  | ${"should accept 645"}
        ${90}   | ${"1 timme och 30 minuter"}    | ${"should accept 90"}
        ${601}  | ${"10 timmar och 1 minut"}     | ${"should accept 601"}
        ${6030} | ${"100 timmar och 30 minuter"} | ${"should accept 6030"}
        ${30}   | ${"0 timmar och 30 minuter"}   | ${"should accept 30"}
        ${0}    | ${"0 timmar och 0 minuter"}    | ${"should accept 0"}
        ${NaN}  | ${"0 timmar och 0 minuter"}    | ${"should treat NaN as 0"}
    `(
        'should return "$expected" for "$value" because of $description',
        ({ value, expected }) => {
            expect(minutesToUserFriendlyString(value)).toEqual(expected);
        },
    );
});

describe("minutesToHoursFloat", () => {
    it.each`
        value        | expected              | description
        ${645}       | ${10.75}              | ${"645 minutes should be recalculated to 10.75 decimal value"}
        ${659}       | ${10.983333333333333} | ${"659 minutes should be recalculated to 10.983333333333333 decimal value"}
        ${61800}     | ${1030}               | ${"61800 minutes should be recalculated to 1030 decimal value"}
        ${30}        | ${0.5}                | ${"30 minutes should be recalculated to 00.5 decimal value"}
        ${630}       | ${10.5}               | ${"630 minutes should be recalculated to 10.5 decimal value"}
        ${601800}    | ${10030}              | ${"601800 minutes should be recalculated to 100.5 decimal value"}
        ${6000}      | ${100}                | ${"6000 minutes should be recalculated to 100 decimal value"}
        ${undefined} | ${0}                  | ${"an undefined number should be recalculated to 0 decimal value"}
        ${0}         | ${0}                  | ${"0 minutes should be recalculated to 0 decimal value"}
    `(
        'should return "$expected" for "$value" because of $description',
        ({ value, expected }) => {
            expect(minutesToHoursFloat(value)).toEqual(expected);
        },
    );

    it.each`
        value              | expected
        ${[120, 30, 12]}   | ${2.7}
        ${[undefined, 60]} | ${1}
        ${[30, NaN]}       | ${0.5}
    `('should return "$expected" for ...$value', ({ value, expected }) => {
        expect(minutesToHoursFloat(...value)).toEqual(expected);
    });
});

describe("minutesToObject", () => {
    it.each`
        value        | expected                        | description
        ${645}       | ${{ hours: 10, minutes: 45 }}   | ${"645 minutes should be recalculated to 10 hours and 45 minutes"}
        ${659}       | ${{ hours: 10, minutes: 59 }}   | ${"659 minutes should be recalculated to 10 hours and 59 minutes"}
        ${61800}     | ${{ hours: 1030, minutes: 0 }}  | ${"61800 minutes should be recalculated to 1030 hours and 0 minutes"}
        ${30}        | ${{ hours: 0, minutes: 30 }}    | ${"30 minutes should be recalculated to 0 hours and 30 minutes"}
        ${630}       | ${{ hours: 10, minutes: 30 }}   | ${"630 minutes should be recalculated to 10 hours and 30 minutes"}
        ${601800}    | ${{ hours: 10030, minutes: 0 }} | ${"601800 minutes should be recalculated to 10030 hours and 0 minutes"}
        ${6000}      | ${{ hours: 100, minutes: 0 }}   | ${"6000 minutes should be recalculated to 100 hours and 0 minutes"}
        ${undefined} | ${{ hours: 0, minutes: 0 }}     | ${"an undefined number should be recalculated to 0 hours and 0 minutes"}
        ${0}         | ${{ hours: 0, minutes: 0 }}     | ${"0 minutes should be recalculated to 0 hours and 0 minutes"}
    `(
        'should return "$expected" for "$value" because of $description',
        ({ value, expected }) => {
            expect(minutesToObject(value)).toEqual(expected);
        },
    );

    it.each`
        value              | expected
        ${[120, 30, 12]}   | ${{ hours: 2, minutes: 42 }}
        ${[undefined, 60]} | ${{ hours: 1, minutes: 0 }}
        ${[30, NaN]}       | ${{ hours: 0, minutes: 30 }}
    `('should return "$expected" for $value', ({ value, expected }) => {
        expect(minutesToObject(...value)).toEqual(expected);
    });
});
