import { getElementType } from "./getElementType";

function addInputElement(
    type: string,
    parent: HTMLElement = document.body,
): HTMLInputElement {
    const element = document.createElement("input");
    element.type = type;
    parent.appendChild(element);

    return element;
}

function addFieldsetElement(childType: string): HTMLFieldSetElement {
    const element = document.createElement("fieldset");
    addInputElement(childType, element);
    document.body.appendChild(element);

    return element;
}

beforeEach(() => {
    document.body.innerHTML = "";
});

it("should return undefined when null", () => {
    expect(getElementType(null)).toBeUndefined();
});

it('should return "text" when input type text', () => {
    const element = addInputElement("text");
    expect(getElementType(element)).toBe("text");
});

it('should return "radio" when input type radio', () => {
    const element = addInputElement("radio");
    expect(getElementType(element)).toBe("radio");
});

it('should return "checkbox" when input type checkbox', () => {
    const element = addInputElement("checkbox");
    expect(getElementType(element)).toBe("checkbox");
});

it('should return "text" when input type different from text, radio, checkbox', () => {
    const element = addInputElement("email");
    expect(getElementType(element)).toBe("text");
});

it('should return "radio" when fieldset contains input type radio', () => {
    const element = addFieldsetElement("radio");
    expect(getElementType(element)).toBe("radio");
});

it('should return "checkbox" when fieldset contains input type checkbox', () => {
    const element = addFieldsetElement("checkbox");
    expect(getElementType(element)).toBe("checkbox");
});

it("should return undefined when fieldset not contains radio or checkbox", () => {
    const element = addFieldsetElement("text");
    expect(getElementType(element)).toBeUndefined();
});

it('should return "textarea" when textarea', () => {
    const element = document.createElement("textarea");
    document.body.appendChild(element);
    expect(getElementType(element)).toBe("textarea");
});

it('should return "select" when select', () => {
    const element = document.createElement("select");
    document.body.appendChild(element);
    expect(getElementType(element)).toBe("select");
});
