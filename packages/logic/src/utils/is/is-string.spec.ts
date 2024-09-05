import { isString } from "./is-string";

it.each`
    value           | expected | description
    ${""}           | ${true}  | ${"empty string expect true"}
    ${undefined}    | ${false} | ${"undefined expect false"}
    ${{}}           | ${false} | ${"empty object expect false"}
    ${new String()} | ${true}  | ${"New string expect true"}
    ${4}            | ${false} | ${"number expect false"}
    ${null}         | ${false} | ${"null expect false"}
    ${"abc"}        | ${true}  | ${"string expect true"}
`(
    'should return $expected with value "$value" , because of $description',
    ({ value, expected }) => {
        expect(isString(value)).toBe(expected);
    },
);
