import { type ValidatableHTMLElement } from "../ValidationServiceInterface";
import { requiredValidator } from "./RequiredValidator";

it.each`
    value      | expected | description
    ${""}      | ${false} | ${"empty value is invalid"}
    ${" "}     | ${false} | ${"space value is invalid"}
    ${"\t"}    | ${false} | ${"tab value is invalid"}
    ${"\n"}    | ${false} | ${"LF value is invalid"}
    ${"\r"}    | ${false} | ${"CR value is invalid"}
    ${"a"}     | ${true}  | ${"1 character is valid"}
    ${"0"}     | ${true}  | ${"zero character is valid"}
    ${"å"}     | ${true}  | ${"å character is valid"}
    ${"ä"}     | ${true}  | ${"ä character is valid"}
    ${"ö"}     | ${true}  | ${"ö character is valid"}
    ${"false"} | ${true}  | ${"false string is valid"}
`(
    'should return $expected with value "$value" because of $description',
    ({ value, expected }) => {
        expect(
            requiredValidator.validation(
                value,
                {} as ValidatableHTMLElement,
                {},
            ),
        ).toEqual(expected);
    },
);

function createFieldsetWithInputs(
    type: "radio" | "checkbox",
    checked: boolean,
): HTMLFieldSetElement {
    document.body.innerHTML = /* HTML */ `
        <fieldset>
            <input type="${type}" id="input1" />
            <input type="${type}" id="input2" />
        </fieldset>
    `;
    const fieldsetElement = document.querySelector(
        "fieldset",
    ) as HTMLFieldSetElement;
    (document.getElementById("input2") as HTMLInputElement).checked = checked;
    return fieldsetElement;
}

function createInputElement(
    type: "radio" | "checkbox",
    checked: boolean,
): HTMLInputElement {
    const markup = /* HTML */ ` <input type="${type}" id="input1" /> Input 1 `;
    document.body.innerHTML = markup;
    const inputElement = document.getElementById("input1") as HTMLInputElement;
    inputElement.checked = checked;
    return inputElement;
}

describe("Fieldset with radio inputs", () => {
    it("should validate group as valid when having one checked input", () => {
        expect.assertions(1);
        const fieldsetElement = createFieldsetWithInputs("radio", true);
        expect(requiredValidator.validation("", fieldsetElement, {})).toBe(
            true,
        );
    });

    it("should validate group as invalid when having no checked inputs", () => {
        expect.assertions(1);
        const fieldsetElement = createFieldsetWithInputs("radio", false);
        expect(requiredValidator.validation("", fieldsetElement, {})).toBe(
            false,
        );
    });

    it("should validate group as valid when fieldset is empty", () => {
        expect.assertions(1);
        const fieldset = document.createElement("fieldset");
        const result = requiredValidator.validation("", fieldset, {});
        expect(result).toBeTruthy();
    });

    it("should validate group as valid when all inputs are disabled", () => {
        expect.assertions(1);
        const fieldset = document.createElement("fieldset");
        const input = document.createElement("input");
        input.type = "radio";
        input.disabled = true;
        fieldset.appendChild(input);
        const result = requiredValidator.validation("", fieldset, {});
        expect(result).toBeTruthy();
    });
});

describe("Fieldset with checkbox inputs", () => {
    it("should validate group as valid when having one checked input", () => {
        const fieldsetElement = createFieldsetWithInputs("checkbox", true);
        expect(requiredValidator.validation("", fieldsetElement, {})).toBe(
            true,
        );
    });

    it("should validate group as invalid when having no checked inputs", () => {
        const fieldsetElement = createFieldsetWithInputs("checkbox", false);
        expect(requiredValidator.validation("", fieldsetElement, {})).toBe(
            false,
        );
    });

    it("should validate group as valid when fieldset is empty", () => {
        expect.assertions(1);
        const fieldset = document.createElement("fieldset");
        const result = requiredValidator.validation("", fieldset, {});
        expect(result).toBeTruthy();
    });

    it("should validate group as valid when all inputs are disabled", () => {
        expect.assertions(1);
        const fieldset = document.createElement("fieldset");
        const input = document.createElement("input");
        input.type = "checkbox";
        input.disabled = true;
        fieldset.appendChild(input);
        const result = requiredValidator.validation("", fieldset, {});
        expect(result).toBeTruthy();
    });
});

describe("checkbox", () => {
    it("should validate as valid when having one checked input", () => {
        const inputElement = createInputElement("checkbox", true);
        expect(requiredValidator.validation("", inputElement, {})).toBe(true);
    });

    it("should validate as invalid when having no checked inputs", () => {
        const inputElement = createInputElement("checkbox", false);
        expect(requiredValidator.validation("", inputElement, {})).toBe(false);
    });
});

describe("radiobutton", () => {
    it("should validate as valid when having one checked input", () => {
        const inputElement = createInputElement("radio", true);
        expect(requiredValidator.validation("", inputElement, {})).toBe(true);
    });

    it("should validate as invalid when having no checked inputs", () => {
        const inputElement = createInputElement("radio", false);
        expect(requiredValidator.validation("", inputElement, {})).toBe(false);
    });
});

describe("nestled fieldsets", () => {
    it.each`
        outerChecked | innerChecked | expectedOuter | expectedInner | description
        ${true}      | ${false}     | ${true}       | ${false}      | ${"should validate outer fieldset as valid"}
        ${false}     | ${true}      | ${false}      | ${true}       | ${"should validate inner fieldset as valid"}
        ${true}      | ${true}      | ${true}       | ${true}       | ${"should validate both fieldset as valid"}
        ${false}     | ${false}     | ${false}      | ${false}      | ${"should validate both fieldset as invalid"}
    `(
        "$description",
        ({ outerChecked, innerChecked, expectedOuter, expectedInner }) => {
            const markup = /* HTML */ `
                <fieldset>
                    <input type="radio" id="outerInput1" /> Radio 1
                    <input type="radio" id="outerInput2" /> Radio 2
                    <fieldset>
                        <input type="checkbox" id="innerInput1" /> Checkbox 1
                        <input type="checkbox" id="innerInput2" /> Checkbox 2
                    </fieldset>
                </fieldset>
            `;
            document.body.innerHTML = markup;
            const outerInputElement = document.getElementById(
                "outerInput2",
            ) as HTMLInputElement;
            outerInputElement.checked = outerChecked;

            const innerInputElement = document.getElementById(
                "innerInput2",
            ) as HTMLInputElement;
            innerInputElement.checked = innerChecked;

            expect(
                requiredValidator.validation("", outerInputElement, {}),
            ).toEqual(expectedOuter);
            expect(
                requiredValidator.validation("", innerInputElement, {}),
            ).toEqual(expectedInner);
        },
    );
});
