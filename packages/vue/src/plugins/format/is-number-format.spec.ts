import { isNumberFormat } from "./is-number-format";

it.each`
    value                                     | expected
    ${""}                                     | ${false}
    ${undefined}                              | ${false}
    ${null}                                   | ${false}
    ${0}                                      | ${false}
    ${{}}                                     | ${false}
    ${"test"}                                 | ${false}
    ${true}                                   | ${false}
    ${42}                                     | ${false}
    ${{ number: 123, decimals: null }}        | ${false}
    ${{ number: "123", decimals: null }}      | ${false}
    ${{ number: null, decimals: 1 }}          | ${false}
    ${{ number: 123, decimals: undefined }}   | ${false}
    ${{ number: "123", decimals: undefined }} | ${false}
    ${{ number: undefined, decimals: 1 }}     | ${false}
    ${{ number: "", decimals: "" }}           | ${false}
    ${{ number: "123", decimals: "2" }}       | ${false}
    ${{ number: "0", decimals: 2 }}           | ${true}
    ${{ number: "123", decimals: 0 }}         | ${true}
    ${{ number: 123, decimals: "2" }}         | ${false}
    ${{ number: 123, decimals: 2 }}           | ${true}
    ${{ number: 0, decimals: 2 }}             | ${true}
`('should return $expected with value "$value"', ({ value, expected }) => {
    expect(isNumberFormat(value)).toBe(expected);
});
