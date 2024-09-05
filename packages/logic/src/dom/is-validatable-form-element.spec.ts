import { isValidatableFormElement } from "./is-validatable-form-element";

it("should return true for inputs", () => {
    const element = document.createElement("input");
    expect(isValidatableFormElement(element)).toBe(true);
});

it("should return true for select-elements", () => {
    const element = document.createElement("select");
    expect(isValidatableFormElement(element)).toBe(true);
});

it("should return true for textarea-elements", () => {
    const element = document.createElement("textarea");
    expect(isValidatableFormElement(element)).toBe(true);
});

it("should return false for fieldsets", () => {
    const element = document.createElement("fieldset");
    expect(isValidatableFormElement(element)).toBe(false);
});
