import { requiredValidator } from "./Validators/RequiredValidator";
import { ValidationService } from "./ValidationService";
import { type ValidatableHTMLElement } from "./ValidationServiceInterface";

ValidationService.registerValidator(requiredValidator);

let fieldset: HTMLFieldSetElement;

let input1InFieldset: HTMLInputElement,
    input2InFieldset: HTMLInputElement,
    inputOutsideFieldset: HTMLInputElement;

function dispatchEvent(
    eventName: string,
    element: ValidatableHTMLElement,
    target?: EventTarget,
): void {
    const event = new Event(eventName, { bubbles: true, cancelable: true });
    if (target) {
        Object.defineProperty(event, "target", {
            writable: false,
            value: target,
        });
    }
    element.dispatchEvent(event);
}

function mountFieldsetElementAndValidator(): HTMLFieldSetElement {
    document.body.innerHTML = /* HTML */ `
        <div>
            <fieldset id="fieldset-element">
                <legend id="legend">Legend</legend>
                <input id="test-element1" type="checkbox" />
                <input id="test-element2" type="checkbox" />
            </fieldset>
            <input id="test-element3" type="checkbox" />
        </div>
    `;
    return document.querySelector("fieldset")!;
}

beforeEach(() => {
    fieldset = mountFieldsetElementAndValidator();
    [input1InFieldset, input2InFieldset] = Array.from(
        fieldset.querySelectorAll("input"),
    ) as HTMLInputElement[];
    inputOutsideFieldset = document.querySelector(
        "#test-element3",
    ) as HTMLInputElement;
});

afterEach(() => {
    document.body.innerHTML = "";
    ValidationService.clearAllStates();
    jest.resetAllMocks();
    jest.clearAllMocks();
});

it("On init - adds required attribute to child input elements, focusin- and validate event listener", () => {
    const addEventListener = jest.fn();
    fieldset.addEventListener = addEventListener;
    ValidationService.addValidatorsToElement(fieldset, { required: {} });
    expect(fieldset).toMatchSnapshot();
    expect(addEventListener).toHaveBeenCalledWith(
        "focusin",
        expect.any(Function),
    );
    expect(addEventListener).toHaveBeenCalledWith(
        "change",
        expect.any(Function),
    );
    expect(addEventListener).toHaveBeenCalledWith(
        "validate",
        expect.any(Function),
    );
});

describe("Document listeners", () => {
    let validityMock: jest.Mock;
    beforeEach(() => {
        validityMock = jest.fn();
        fieldset.addEventListener("validity", validityMock);
        ValidationService.addValidatorsToElement(fieldset, { required: {} });
    });

    afterEach(() => {
        dispatchEvent("click", fieldset, inputOutsideFieldset); // Reset document event listener added by FieldsetValidatorHandler
        jest.restoreAllMocks();
    });

    it("should add listener when user clicks onfocusable element", () => {
        const listenerSpy = jest.spyOn(document, "addEventListener");
        dispatchEvent("focusin", fieldset, input1InFieldset);
        expect(listenerSpy).toHaveBeenCalledTimes(2);
        expect(listenerSpy).toHaveBeenCalledWith(
            "focusin",
            expect.any(Function),
        );
        expect(listenerSpy).toHaveBeenCalledWith("click", expect.any(Function));
    });

    it("should NOT add listener when user clicks on non focusable element", () => {
        const listenerSpy = jest.spyOn(document, "addEventListener");

        const legend = document.querySelector("#legend") as HTMLLegendElement;
        dispatchEvent("focusin", fieldset, legend);

        expect(listenerSpy).toHaveBeenCalledTimes(0);
    });
});

describe("Fieldset group", () => {
    let validityMock: jest.Mock;
    beforeEach(() => {
        validityMock = jest.fn();
        fieldset.addEventListener("validity", validityMock);
        ValidationService.addValidatorsToElement(fieldset, { required: {} });
        dispatchEvent("focusin", fieldset, input1InFieldset); // Init fieldset validation
    });

    afterEach(() => {
        dispatchEvent("click", fieldset, inputOutsideFieldset); // Reset document event listener added by FieldsetValidatorHandler
    });

    it("should send validity event when checking radio/checkbox input", () => {
        input1InFieldset.checked = true;
        dispatchEvent("focusin", fieldset, input1InFieldset);
        expect(validityMock.mock.calls[0][0].detail).toMatchSnapshot();

        inputOutsideFieldset.click();
        expect(validityMock.mock.calls[1][0].detail).toMatchSnapshot();
    });

    it("should send validity event when radio/checkbox input emit change event", () => {
        input1InFieldset.checked = true;
        dispatchEvent("change", fieldset, input1InFieldset);
        expect(validityMock.mock.calls[0][0].detail.validityMode).toBe("VALID");
    });

    it("should not send validity event when unchecking radio/checkbox input", () => {
        input1InFieldset.checked = true;
        dispatchEvent("focusin", fieldset, input1InFieldset);
        expect(validityMock.mock.calls).toHaveLength(1);

        input1InFieldset.checked = false;
        dispatchEvent("focusin", fieldset, input1InFieldset);
        expect(validityMock.mock.calls).toHaveLength(1);

        inputOutsideFieldset.click();
        expect(validityMock.mock.calls).toHaveLength(2);
    });

    it("should send validity event when leaving fieldset group (focusin-event on element outside fieldset)", () => {
        input1InFieldset.checked = false;
        dispatchEvent("focusin", fieldset, input1InFieldset);
        expect(validityMock.mock.calls).toHaveLength(0);

        // focusin-events simulates keyboard-navigation with tab which leads to focus on next input-element in fieldset
        dispatchEvent("focusin", fieldset, input2InFieldset);
        expect(validityMock.mock.calls).toHaveLength(0);

        // Leaves fieldset
        dispatchEvent("focusin", fieldset, inputOutsideFieldset);

        expect(validityMock.mock.calls).toHaveLength(1);

        expect(validityMock.mock.calls[0][0].detail).toMatchSnapshot();
    });

    it("should send validity event when clicking outside fieldset group", () => {
        dispatchEvent("focusin", fieldset, input1InFieldset);

        expect(validityMock.mock.calls).toHaveLength(0);

        // Leaves fieldset
        dispatchEvent("click", fieldset, inputOutsideFieldset);
        expect(validityMock.mock.calls).toHaveLength(1);

        expect(validityMock.mock.calls[0][0].detail).toMatchSnapshot();
    });

    it("should send validity events for fieldset and required radio/checkbox input when leaving fieldset group", () => {
        input1InFieldset.required = true;
        ValidationService.addValidatorsToElement(input1InFieldset, {
            required: {},
        });

        dispatchEvent("focusin", fieldset, input2InFieldset);
        inputOutsideFieldset.click();

        expect(validityMock).toHaveBeenCalledTimes(2);

        expect(validityMock.mock.calls[0][0].detail).toEqual({
            elementId: "fieldset-element",
            isValid: false,
            nativeEvent: "validate",
            target: fieldset,
            validationMessage: "Välj minst ett alternativ.",
            validityMode: "INITIAL",
        });
        expect(validityMock.mock.calls[1][0].detail).toEqual({
            elementId: "test-element1",
            isValid: false,
            nativeEvent: "validate",
            target: input1InFieldset,
            validationMessage: "Välj minst ett alternativ.",
            validityMode: "INITIAL",
        });
    });

    it("should send validity events for fieldset and required radio/checkbox input when checking non-required radio/checkbox input in fieldset", () => {
        input1InFieldset.required = true;
        ValidationService.addValidatorsToElement(input1InFieldset, {
            required: {},
        });

        const nonRequiredInputInFieldset = fieldset.querySelector(
            "#test-element2",
        ) as HTMLInputElement;
        nonRequiredInputInFieldset.checked = true;
        dispatchEvent("focusin", fieldset, nonRequiredInputInFieldset);

        // A validity event for both fieldset and required input should be emitted
        expect(validityMock).toHaveBeenCalledTimes(2);

        expect(validityMock.mock.calls[0][0].detail).toEqual({
            elementId: "fieldset-element",
            isValid: true,
            nativeEvent: "validate",
            target: fieldset,
            validationMessage: "",
            validityMode: "VALID",
        });

        expect(validityMock.mock.calls[1][0].detail).toEqual({
            elementId: "test-element1",
            isValid: false,
            nativeEvent: "validate",
            target: input1InFieldset,
            validationMessage: "Välj minst ett alternativ.",
            validityMode: "INITIAL",
        });
    });
});
