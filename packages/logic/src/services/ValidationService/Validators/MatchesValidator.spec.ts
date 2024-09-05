import { type ValidatableHTMLElement } from "../ValidationServiceInterface";
import { matchesValidator } from "./MatchesValidator";

it.each`
    inputValue            | comparedValue         | expected | description
    ${""}                 | ${""}                 | ${true}  | ${"empty values matches"}
    ${"user@example.net"} | ${"user@example.net"} | ${true}  | ${"same values matches"}
    ${""}                 | ${"different"}        | ${false} | ${"different values dont match"}
    ${"different"}        | ${""}                 | ${false} | ${"different values dont match"}
    ${""}                 | ${null}               | ${true}  | ${"null should return true"}
    ${""}                 | ${undefined}          | ${true}  | ${"undefined should return true"}
    ${"different"}        | ${null}               | ${true}  | ${"null should return true"}
    ${"different"}        | ${undefined}          | ${true}  | ${"undefined should return true"}
    ${null}               | ${null}               | ${true}  | ${"null should return true"}
    ${undefined}          | ${undefined}          | ${true}  | ${"undefined should return true"}
`(
    'should return $expected with input value "$inputValue" compared to "$comparedValue" because of $description',
    ({ inputValue, comparedValue, expected }) => {
        const markup = /* HTML */ `
            <input id="testID" value="${inputValue}" />
        `;
        document.body.innerHTML = markup;
        expect(
            matchesValidator.validation(
                comparedValue,
                {} as ValidatableHTMLElement,
                { id: "testID" },
            ),
        ).toEqual(expected);
    },
);
