import { personnummerNotSame } from "./PersonnummerNotSame";

const element = document.createElement("input");

it.each`
    value           | expected | config                          | description
    ${"1301012397"} | ${false} | ${{ otherField: "1301012397" }} | ${"same values should not pass"}
    ${"1301012397"} | ${true}  | ${{ otherField: "1212131313" }} | ${"different values should pass"}
    ${"1301012397"} | ${true}  | ${{ otherField: "" }}           | ${"otherField is empty"}
    ${""}           | ${true}  | ${{ otherField: "1301012397" }} | ${"value is empty"}
    ${"abcd1234"}   | ${true}  | ${{ otherField: "1301012397" }} | ${"value is invalid format"}
    ${"1301012397"} | ${true}  | ${{ otherField: "abcd1234" }}   | ${"otherField is invalid format"}
    ${""}           | ${true}  | ${{ otherField: "" }}           | ${"both fields are empty"}
    ${"1301012397"} | ${true}  | ${{ otherField: null }}         | ${"otherField is null"}
    ${null}         | ${true}  | ${{ otherField: "1301012397" }} | ${"value is null"}
    ${"1301012397"} | ${true}  | ${{ otherField: undefined }}    | ${"otherField is undefined"}
    ${undefined}    | ${true}  | ${{ otherField: "1301012397" }} | ${"value is undefined"}
`(
    'should return $expected with input value "$value" compared to "$config.otherField" because of $description',
    ({ value, config, expected }) => {
        expect(personnummerNotSame.validation(value, element, config)).toEqual(
            expected,
        );
    },
);
