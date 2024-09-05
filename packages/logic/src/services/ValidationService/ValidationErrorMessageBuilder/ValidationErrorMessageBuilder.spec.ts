import { type ValidatorName } from "../Validator";
import { ValidationErrorMessageBuilder } from "./ValidationErrorMessageBuilder";

it("should create a map with translations for validators", () => {
    const validatorMessageMap = ValidationErrorMessageBuilder.create()
        .map("required", "Field is required")
        .map("maxLength", "Text is too long")
        .map("minLength", "Text is to short")
        .build();

    expect(validatorMessageMap).toMatchInlineSnapshot(`
        {
          "maxLength": "Text is too long",
          "minLength": "Text is to short",
          "required": "Field is required",
        }
    `);
});

it("should create a map with translations for combined validators", () => {
    const validatorMessageMap = ValidationErrorMessageBuilder.create()
        .mapCombined(
            "required",
            "personnummer",
            "You must enter a social security number",
        )
        .build();

    expect(validatorMessageMap).toMatchInlineSnapshot(`
        {
          "required.personnummer": "You must enter a social security number",
        }
    `);
});

it("should create a map with translations for a customer validator", () => {
    const validatorMessageMap = ValidationErrorMessageBuilder.create()
        .map(
            "my-app-specific-validator" as ValidatorName,
            "Some application specific validation error message",
        )
        .build();

    expect(validatorMessageMap).toMatchInlineSnapshot(`
        {
          "my-app-specific-validator": "Some application specific validation error message",
        }
    `);
});
