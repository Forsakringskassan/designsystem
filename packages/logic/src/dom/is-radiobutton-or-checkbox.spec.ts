import { isRadiobuttonOrCheckbox } from "./is-radiobutton-or-checkbox";

it("should return false for arbitrary elements", () => {
    const element = document.createElement("div");
    expect(isRadiobuttonOrCheckbox(element)).toBe(false);
});

it("should return false for non-checkbox/radio inputs", () => {
    const element = document.createElement("input");
    expect(isRadiobuttonOrCheckbox(element)).toBe(false);
});

it("should return true for checkbox input elements", () => {
    const element = document.createElement("input");
    element.type = "checkbox";
    expect(isRadiobuttonOrCheckbox(element)).toBe(true);
});

it("should return true for radio input elements", () => {
    const element = document.createElement("input");
    element.type = "radio";
    expect(isRadiobuttonOrCheckbox(element)).toBe(true);
});
