import { FDate } from "@fkui/date";
import { isDateRange } from "./is-date-range";

it.each`
    value                                                                     | expected
    ${""}                                                                     | ${false}
    ${undefined}                                                              | ${false}
    ${null}                                                                   | ${false}
    ${0}                                                                      | ${false}
    ${{}}                                                                     | ${false}
    ${{ from: "20200101", to: FDate.fromIso("2020-01-02") }}                  | ${false}
    ${{ from: FDate.fromIso("2020-01-01"), to: "20200101" }}                  | ${false}
    ${{ from: "", to: "" }}                                                   | ${true}
    ${{ from: "abc", to: "abc" }}                                             | ${true}
    ${{ from: "20200101", to: "20200102" }}                                   | ${true}
    ${{ from: "2020-01-01", to: "2020-01-02" }}                               | ${true}
    ${{ from: FDate.fromIso("2020-01-01"), to: FDate.fromIso("2020-01-02") }} | ${true}
`('should return $expected with value "$value"', ({ value, expected }) => {
    expect(isDateRange(value)).toBe(expected);
});
