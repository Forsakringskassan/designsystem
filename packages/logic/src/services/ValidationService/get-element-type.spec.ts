import { beforeEach, expect, it } from "vitest";
import { getElementType } from "./get-element-type";

function addInputElement(
    type: string,
    parent: HTMLElement = document.body,
): HTMLInputElement {
    const element = document.createElement("input");
    element.type = type;
    parent.append(element);

    return element;
}

function addFieldsetElement(childType: string): HTMLFieldSetElement {
    const element = document.createElement("fieldset");
    addInputElement(childType, element);
    document.body.append(element);

    return element;
}

beforeEach(() => {
    document.body.innerHTML = "";
});

it("should return undefined when null", () => {
    expect.assertions(1);
    expect(getElementType(null)).toBeUndefined();
});

it('should return "text" when input type text', () => {
    expect.assertions(1);
    const element = addInputElement("text");
    expect(getElementType(element)).toBe("text");
});

it('should return "radio" when input type radio', () => {
    expect.assertions(1);
    const element = addInputElement("radio");
    expect(getElementType(element)).toBe("radio");
});

it('should return "checkbox" when input type checkbox', () => {
    expect.assertions(1);
    const element = addInputElement("checkbox");
    expect(getElementType(element)).toBe("checkbox");
});

it('should return "text" when input type different from text, radio, checkbox', () => {
    expect.assertions(1);
    const element = addInputElement("email");
    expect(getElementType(element)).toBe("text");
});

it('should return "radio" when fieldset contains input type radio', () => {
    expect.assertions(1);
    const element = addFieldsetElement("radio");
    expect(getElementType(element)).toBe("radio");
});

it('should return "checkbox" when fieldset contains input type checkbox', () => {
    expect.assertions(1);
    const element = addFieldsetElement("checkbox");
    expect(getElementType(element)).toBe("checkbox");
});

it("should return undefined when fieldset not contains radio or checkbox", () => {
    expect.assertions(1);
    const element = addFieldsetElement("text");
    expect(getElementType(element)).toBeUndefined();
});

it('should return "textarea" when textarea', () => {
    expect.assertions(1);
    const element = document.createElement("textarea");
    document.body.append(element);
    expect(getElementType(element)).toBe("textarea");
});

it('should return "select" when select', () => {
    expect.assertions(1);
    const element = document.createElement("select");
    document.body.append(element);
    expect(getElementType(element)).toBe("select");
});
