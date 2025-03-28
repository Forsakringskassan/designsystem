import { ValidationService } from "./ValidationService";
import {
    type ValidatableHTMLElement,
    type ValidationState,
    type ValidatorConfig,
    type ValidatorConfigs,
    type ValidatorOptions,
    type ValidityEvent,
} from "./ValidationServiceInterface";
import { type Validator, type ValidatorName } from "./Validator";
import { dateValidator } from "./Validators/DateValidator";
import { emailValidator } from "./Validators/EmailValidator";
import { maxLengthValidator } from "./Validators/MaxLengthValidator";
import { minLengthValidator } from "./Validators/MinLengthValidator";
import { requiredValidator } from "./Validators/RequiredValidator";
import { whitelistValidator } from "./Validators/WhitelistValidator";
import { registry } from "./registry";

ValidationService.registerValidator(dateValidator);
ValidationService.registerValidator(emailValidator);
ValidationService.registerValidator(requiredValidator);
ValidationService.registerValidator(maxLengthValidator);
ValidationService.registerValidator(minLengthValidator);
ValidationService.registerValidator(whitelistValidator);

function setBodyInnerHTML(html: string): void {
    document.body.innerHTML = html;
}

const lazyValidatorConfigs: ValidatorConfigs = {
    required: {},
    minLength: {
        length: 2,
        errorMessage: "An overridden message in minLength validator",
    },
};

const emailValidatorConfig: ValidatorConfigs = {
    email: {
        maxLength: 70,
        errorMessage: "An overridden message in email validator",
    },
};

const instantValidatorConfigs: ValidatorConfigs = {
    required: {},
    minLength: {
        length: 2,
        errorMessage: "An overridden message in minLength validator",
    },
    whitelist: {},
};

function enabledValidatorConfig(enabled?: boolean): ValidatorConfigs {
    const configs: ValidatorConfigs = { required: {} };
    if (enabled !== undefined) {
        configs.required!.enabled = enabled;
    }
    return configs;
}

function mountInputElementAndAddValidators(
    type: "text" | "radio",
    validatorConfigs = lazyValidatorConfigs,
): HTMLInputElement {
    const markup = /* HTML */ `
        <div id="wrapping-div">
            <input id="test-element" type="${type}" />
        </div>
    `;
    document.body.innerHTML = markup;
    const element = document.querySelector("input")!;
    ValidationService.addValidatorsToElement(element, validatorConfigs);

    return element;
}

function mountFieldsetAndAddValidators(
    validatorConfigs = lazyValidatorConfigs,
): HTMLFieldSetElement {
    const markup = /* HTML */ `
        <div id="wrapping-div">
            <fieldset id="test-element">
                <input type="radio" /> Ja <input type="radio" /> Nej
                <fieldset>
                    <input type="radio" /> Ja <input type="radio" /> Nej
                </fieldset>
            </fieldset>
        </div>
    `;
    document.body.innerHTML = markup;
    const element = document.getElementById(
        "test-element",
    ) as HTMLFieldSetElement;
    ValidationService.addValidatorsToElement(element, validatorConfigs);

    return element;
}

function dispatchEvent(
    eventName: string,
    element: ValidatableHTMLElement,
): void {
    element.dispatchEvent(
        new Event(eventName, {
            bubbles: true,
            cancelable: true,
        }),
    );
}

function triggerValidityEvent(
    eventName: string,
    inputValue: string | boolean,
    type: "text" | "radio" = "text",
    validityConfigs = lazyValidatorConfigs,
    initialState: ValidationState = { touched: false, submitted: false },
): ValidityEvent | undefined {
    const element = mountInputElementAndAddValidators(type, validityConfigs);
    ValidationService.setState("test-element", initialState);
    const listener = jest.fn<undefined, [CustomEvent<ValidityEvent>]>();
    element.addEventListener("validity", listener);

    if (type === "radio" && typeof inputValue === "boolean") {
        element.checked = inputValue;
    }

    element.value = inputValue as string;
    dispatchEvent(eventName, element);

    if (listener.mock.calls.length === 0) {
        return undefined;
    }

    const args = listener.mock.calls[listener.mock.calls.length - 1];
    return args[0].detail;
}

afterEach(() => {
    document.body.innerHTML = "";
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any -- technical
     * debt, should not access private variables, rather expose an @internal
     * method to clear up the states */
    (ValidationService as any).validationStates = {};
    jest.resetAllMocks();
    jest.restoreAllMocks();
});

describe("setState", () => {
    it("should update state on all child elements", () => {
        setBodyInnerHTML(/* HTML */ `
            <div id="top-element">
                <form id="form-element">
                    <div id="group-element">
                        <input id="input-element" />
                        <div id="div-element">
                            <select id="select-element"></select>
                            <textarea id="textarea-element"></textarea>
                        </div>
                    </div>
                    <input id="another-input-element" />
                </form>
            </div>
        `);

        ValidationService.setState("group-element", {
            touched: true,
        });

        expect(
            /* eslint-disable-next-line @typescript-eslint/no-explicit-any --
             * technical debt, should not access private variables, rather
             * expose an @internal method to fetch the states */
            (ValidationService as any).validationStates,
        ).toEqual({
            "input-element": { touched: true },
            "select-element": { touched: true },
            "textarea-element": { touched: true },
        });
    });
});

it("setSubmitted() should flag that element is submitted", () => {
    expect.assertions(1);
    const setState = jest.spyOn(ValidationService, "setState");
    const element = document.createElement("input");
    element.id = "mock-id";
    ValidationService.setSubmitted(element);
    expect(setState).toHaveBeenCalledWith(element, { submitted: true });
});

it("setTouched() should flag that element is touched", () => {
    expect.assertions(1);
    const setState = jest.spyOn(ValidationService, "setState");
    const element = document.createElement("input");
    element.id = "mock-id";
    ValidationService.setTouched(element);
    expect(setState).toHaveBeenCalledWith(element, { touched: true });
});

it("setError() should set validation error on element", () => {
    expect.assertions(1);
    const setState = jest.spyOn(ValidationService, "setState");
    const element = document.createElement("input");
    element.id = "mock-id";
    ValidationService.setError(element, "server error");
    expect(setState).toHaveBeenCalledWith(element, {
        serverError: "server error",
    });
});

describe("isValid()", () => {
    function createElement(options: {
        valid?: boolean;
        id?: string;
        tagName?: string;
    }): HTMLElement {
        const { valid, id, tagName = "input" } = options;
        const element = document.createElement(tagName);
        if (element instanceof HTMLInputElement) {
            element.setCustomValidity(valid ? "" : "custom error");
            element.reportValidity();
        }
        element.id = id ?? "";
        return element;
    }

    it("should return true if element is valid", async () => {
        expect.assertions(1);
        const element = createElement({ valid: true });
        expect(await ValidationService.isValid(element)).toBeTruthy();
    });

    it("should return false if element has error", async () => {
        expect.assertions(1);
        const element = createElement({ valid: false });
        expect(await ValidationService.isValid(element)).toBeFalsy();
    });

    it("should return true if <fieldset> descendants are valid", async () => {
        expect.assertions(1);
        const fieldset = document.createElement("fieldset");
        const a = createElement({ valid: true });
        const b = createElement({ valid: true });
        fieldset.appendChild(a);
        fieldset.appendChild(b);
        expect(await ValidationService.isValid(fieldset)).toBeTruthy();
    });

    it("should return false if any <fieldset> descendant is invalid", async () => {
        expect.assertions(1);
        const fieldset = document.createElement("fieldset");
        const a = createElement({ valid: true });
        const b = createElement({ valid: false });
        fieldset.appendChild(a);
        fieldset.appendChild(b);
        expect(await ValidationService.isValid(fieldset)).toBeFalsy();
    });

    it("should return true if <div> descendants are valid", async () => {
        expect.assertions(1);
        const div = document.createElement("div");
        const a = createElement({ valid: true });
        const b = createElement({ valid: true });
        div.appendChild(a);
        div.appendChild(b);
        expect(await ValidationService.isValid(div)).toBeTruthy();
    });

    it("should return false if any <div> descendant is invalid", async () => {
        expect.assertions(1);
        const div = document.createElement("div");
        const a = createElement({ valid: true });
        const b = createElement({ valid: false });
        div.appendChild(a);
        div.appendChild(b);
        expect(await ValidationService.isValid(div)).toBeFalsy();
    });

    it("should return true if all elements are valid", async () => {
        expect.assertions(1);
        const a = createElement({ valid: true });
        const b = createElement({ valid: true });
        expect(await ValidationService.isValid([a, b])).toBeTruthy();
    });

    it("should return false if not all elements are valid", async () => {
        expect.assertions(1);
        const a = createElement({ valid: true });
        const b = createElement({ valid: false });
        expect(await ValidationService.isValid([a, b])).toBeFalsy();
    });

    it("should lookup element by id if passing string", async () => {
        expect.assertions(2);
        const root = document.createElement("div");
        const foo = createElement({ valid: true, id: "foo" });
        const bar = createElement({ valid: false, id: "bar" });
        root.appendChild(foo);
        root.appendChild(bar);
        expect(await ValidationService.isValid("foo", root)).toBeTruthy();
        expect(await ValidationService.isValid("bar", root)).toBeFalsy();
    });

    it("should lookup multiple elements by id if passing multiple strings", async () => {
        expect.assertions(1);
        const root = document.createElement("div");
        const foo = createElement({ valid: true, id: "foo" });
        const bar = createElement({ valid: true, id: "bar" });
        root.appendChild(foo);
        root.appendChild(bar);
        expect(
            await ValidationService.isValid(["foo", "bar"], root),
        ).toBeTruthy();
    });

    it("should return true for empty array", async () => {
        expect.assertions(1);
        expect(await ValidationService.isValid([])).toBeTruthy();
    });

    it("should return true for null", async () => {
        expect.assertions(1);
        expect(await ValidationService.isValid(null)).toBeFalsy();
    });
});

describe("validateElement", () => {
    let inputElement: HTMLInputElement;

    beforeEach(() => {
        inputElement = document.createElement("input");
        inputElement.id = "test-element";
    });

    it("should dispatch ValidityEvent to element by reference", async () => {
        expect.assertions(1);
        const validateEventHandler = jest.fn();
        inputElement.addEventListener("validate", validateEventHandler);
        await ValidationService.validateElement(inputElement);
        expect(validateEventHandler).toHaveBeenCalled();
    });

    it("should dispatch ValidityEvent to element by id", async () => {
        expect.assertions(1);
        document.body.appendChild(inputElement);
        const validateEventHandler = jest.fn();
        inputElement.addEventListener("validate", validateEventHandler);
        await ValidationService.validateElement(inputElement.id);
        expect(validateEventHandler).toHaveBeenCalled();
    });

    it("should throw exception if element not found", async () => {
        expect.assertions(1);
        await expect(() => {
            return ValidationService.validateElement("non-existing-id");
        }).rejects.toThrowErrorMatchingInlineSnapshot(
            `"Element with id "non-existing-id" not found when calling validateElement(..)"`,
        );
    });

    it("should throw exception if unsupported element type", async () => {
        expect.assertions(1);
        const element = document.createElement("div");
        element.id = "not-supported-element";
        await expect(
            ValidationService.validateElement(element),
        ).rejects.toThrowErrorMatchingInlineSnapshot(
            `"Element "div#not-supported-element" is not a validatable element"`,
        );
    });
});

describe("validateAllElements", () => {
    function addValidateEventHandler(
        id: string,
        validateEventHandler: () => void,
    ): HTMLElement {
        const element = document.getElementById(id) as HTMLInputElement;
        element.addEventListener("validate", validateEventHandler);
        return element;
    }

    it("should dispatch ValidityEvent to all nestled input, select & textarea elements", async () => {
        setBodyInnerHTML(/* HTML */ `
            <div id="top-element">
                <form id="form-element">
                    <input id="input-element" />
                    <div id="div-element">
                        <select id="select-element"></select>
                        <textarea id="textarea-element"></textarea>
                    </div>
                    <button id="button-element"></button>
                </form>
            </div>
        `);

        const validateEventHandler = jest.fn();
        const notSupportedEventHandler = jest.fn();

        addValidateEventHandler("top-element", notSupportedEventHandler);
        addValidateEventHandler("form-element", notSupportedEventHandler);
        addValidateEventHandler("input-element", validateEventHandler);
        addValidateEventHandler("div-element", notSupportedEventHandler);
        addValidateEventHandler("select-element", validateEventHandler);
        addValidateEventHandler("textarea-element", validateEventHandler);
        addValidateEventHandler("button-element", notSupportedEventHandler);

        await ValidationService.validateAllElements("top-element");

        expect(validateEventHandler).toHaveBeenCalledTimes(3);
        expect(notSupportedEventHandler).not.toHaveBeenCalled();
    });
});

describe("ValidatorOption.enabled", () => {
    it("should call validation on validator if ValidatorOption.enabled === undefined", () => {
        const element = mountInputElementAndAddValidators(
            "text",
            enabledValidatorConfig(undefined),
        );
        const requiredSpy = jest.spyOn(registry.required, "validation");
        dispatchEvent("input", element);
        dispatchEvent("blur", element);
        expect(requiredSpy).toHaveBeenCalledTimes(1);
    });

    it("should call validation on validator if ValidatorOption.enabled === true", () => {
        const element = mountInputElementAndAddValidators(
            "text",
            enabledValidatorConfig(true),
        );
        const requiredSpy = jest.spyOn(registry.required, "validation");
        dispatchEvent("input", element);
        dispatchEvent("blur", element);
        expect(requiredSpy).toHaveBeenCalledTimes(1);
    });

    it("should not validate validator if ValidatorOption.enabled === false", () => {
        const element = mountInputElementAndAddValidators(
            "text",
            enabledValidatorConfig(false),
        );
        const requiredSpy = jest.spyOn(registry.required, "validation");
        dispatchEvent("input", element);
        dispatchEvent("blur", element);
        expect(requiredSpy).not.toHaveBeenCalled();
    });
});

describe("addValidatorsToElement", () => {
    it("should add event handlers for change, blur, input and validate events to element", () => {
        document.body.innerHTML = /* HTML */ `
            <div id="wrapping-div">
                <input id="test-element" type="textfield" />
            </div>
        `;
        const element = document.querySelector("input")!;
        const addEventListener = jest.fn();
        element.addEventListener = addEventListener;

        ValidationService.addValidatorsToElement(element, lazyValidatorConfigs);

        expect(addEventListener).toHaveBeenCalledWith(
            "input",
            expect.any(Function),
        );
        expect(addEventListener).toHaveBeenCalledWith(
            "change",
            expect.any(Function),
        );
        expect(addEventListener).toHaveBeenCalledWith(
            "blur",
            expect.any(Function),
        );
        expect(addEventListener).toHaveBeenCalledWith(
            "validate",
            expect.any(Function),
        );
    });

    it.each`
        validatorConfigs                     | description                                                       | expected
        ${{ required: {} }}                  | ${"using a non-instant validator without config"}                 | ${false}
        ${{ required: { instant: false } }}  | ${"using a non-instant validator configured with instant: false"} | ${false}
        ${{ required: { instant: true } }}   | ${"using a non-instant validator configured with instant: true"}  | ${true}
        ${{ whitelist: {} }}                 | ${"using an instant validator without config"}                    | ${true}
        ${{ whitelist: { instant: false } }} | ${"using an instant validator configured with instant: false"}    | ${false}
        ${{ whitelist: { instant: true } }}  | ${"using an instant validator configured with instant: true"}     | ${true}
    `(
        `should dispatch event instantly: $expected when $description`,
        ({ validatorConfigs, expected }) => {
            const element = mountInputElementAndAddValidators(
                "text",
                validatorConfigs,
            );
            const listener = jest.fn();
            element.addEventListener("validity", listener);
            element.value = "x";
            dispatchEvent("input", element);

            expect(listener.mock.calls).toHaveLength(expected ? 1 : 0);
        },
    );

    it("should update existing eventHandlers when applying new validators", () => {
        document.body.innerHTML = /* HTML */ `
            <div id="wrapping-div">
                <input id="test-element" type="textfield" />
            </div>
        `;
        const element = document.querySelector("input")!;
        const listener = jest.fn();
        element.addEventListener("validity", listener);

        ValidationService.addValidatorsToElement(element, { date: {} });
        ValidationService.addValidatorsToElement(element, {
            minLength: { value: 2 },
            maxLength: { value: 10 },
        });
        ValidationService.addValidatorsToElement(element, { required: {} });

        element.focus();
        element.blur();

        expect(listener).toHaveBeenCalledTimes(1);

        const event = listener.mock.calls[0][0];
        expect(event.detail).toEqual({
            elementId: "test-element",
            isValid: false,
            nativeEvent: "blur",
            target: element,
            validationMessage: "Fyll i text.",
            validityMode: "INITIAL",
        });
    });

    it("should silently handle removing of event handlers belonging to another element but with same id", () => {
        document.body.innerHTML = /* HTML */ `
            <input id="test-element" type="textfield" />
        `;
        const input = document.querySelector("input")!;
        ValidationService.addValidatorsToElement(input, { date: {} });

        document.body.innerHTML = /* HTML */ `
            <textarea id="test-element"></textarea>
        `;
        const textarea = document.querySelector("textarea")!;
        const listener = jest.fn();
        textarea.addEventListener("validity", listener);
        ValidationService.addValidatorsToElement(textarea, { required: {} });

        textarea.focus();
        textarea.blur();

        expect(listener).toHaveBeenCalledTimes(1);

        const event = listener.mock.calls[0][0];
        expect(event.detail).toEqual({
            elementId: "test-element",
            isValid: false,
            nativeEvent: "blur",
            target: textarea,
            validationMessage: "Fyll i text.",
            validityMode: "INITIAL",
        });
    });

    it("should not add required attribute when no required validator config exists", () => {
        const element = mountInputElementAndAddValidators("text", {
            whitelist: {},
        });
        expect(element.hasAttribute("required")).toBeFalsy();
        expect(element.hasAttribute("data-required")).toBeFalsy();
    });

    it("should add required attribute when required validator config exists and enabled option is undefined", () => {
        const element = mountInputElementAndAddValidators("text", {
            required: {},
        });
        expect(element.hasAttribute("required")).toBeTruthy();
        expect(element.hasAttribute("data-required")).toBeTruthy();
    });

    it("should add required attribute when required validator config exists and enabled option is true", () => {
        const element = mountInputElementAndAddValidators(
            "text",
            enabledValidatorConfig(true),
        );
        expect(element.hasAttribute("required")).toBeTruthy();
        expect(element.hasAttribute("data-required")).toBeTruthy();
    });

    it("should not add required attribute when required validator config exists and enabled option is false", () => {
        const element = mountInputElementAndAddValidators(
            "text",
            enabledValidatorConfig(false),
        );
        expect(element.hasAttribute("required")).toBeFalsy();
        expect(element.hasAttribute("data-required")).toBeFalsy();
    });

    it("should only add data-required attribute for fieldset when required validator config exists and enabled option is true", () => {
        document.body.innerHTML = /* HTML */ `
            <fieldset id="fieldset-element">
                <input id="test-element" type="radio" />
            </fieldset>
        `;
        const fieldsetElement = document.querySelector("fieldset")!;

        ValidationService.addValidatorsToElement(
            fieldsetElement,
            enabledValidatorConfig(true),
        );

        expect(fieldsetElement.hasAttribute("required")).toBeFalsy();
        expect(fieldsetElement.hasAttribute("data-required")).toBeTruthy();
    });

    it("should remove data-required attribute for fieldset when required validator config exists and enabled option toggles from true to false", () => {
        document.body.innerHTML = /* HTML */ `
            <fieldset id="fieldset-element">
                <input id="test-element" type="radio" />
            </fieldset>
        `;
        const fieldsetElement = document.querySelector("fieldset")!;
        ValidationService.addValidatorsToElement(
            fieldsetElement,
            enabledValidatorConfig(true),
        );

        expect(fieldsetElement.hasAttribute("required")).toBeFalsy();
        expect(fieldsetElement.hasAttribute("data-required")).toBeTruthy();

        ValidationService.addValidatorsToElement(
            fieldsetElement,
            enabledValidatorConfig(false),
        );

        expect(fieldsetElement.hasAttribute("required")).toBeFalsy();
        expect(fieldsetElement.hasAttribute("data-required")).toBeFalsy();
    });

    it("should place required validator first then keep base config order and add new validators last", () => {
        const baseConfig = { integer: {}, minLength: { length: 10 } };

        const newConfig = {
            required: {},
            newCustom: {},
            minLength: { length: 20 },
        };

        /* eslint-disable-next-line @typescript-eslint/no-explicit-any --
         * technical debt, should not access private members, rather they could
         * be made @internal and public */
        const result = (ValidationService as any).mergeValidatorConfigs(
            baseConfig,
            newConfig,
        );

        expect(Object.keys(result)).toEqual([
            "required",
            "integer",
            "minLength",
            "newCustom",
        ]);

        expect(result).toEqual({
            integer: {},
            minLength: {
                length: 20,
            },
            newCustom: {},
            required: {},
        });
    });

    it("should be possible to append validator to element with existing baseConfig", () => {
        document.body.innerHTML = /* HTML */ `
            <div id="wrapping-div">
                <input id="email-test-element" type="textfield" />
            </div>
        `;
        const element = document.querySelector("input")!;

        ValidationService.addValidatorsToElement(
            element,
            emailValidatorConfig,
            true,
        );

        const internalState = ValidationService.getElementsAndValidators();
        const dangerous = internalState["email-test-element"];

        expect(dangerous).toEqual({
            baseValidatorConfigs: {
                email: {
                    errorMessage: "An overridden message in email validator",
                    maxLength: 70,
                },
            },
            element: element,
            instant: false,
            validatorConfigs: {
                email: {
                    errorMessage: "An overridden message in email validator",
                    maxLength: 70,
                },
            },
            validators: [
                {
                    name: "email",
                    validation: expect.any(Function),
                },
            ],
        });

        ValidationService.addValidatorsToElement(element, lazyValidatorConfigs);
        expect(dangerous).toEqual({
            baseValidatorConfigs: {
                email: {
                    errorMessage: "An overridden message in email validator",
                    maxLength: 70,
                },
            },
            element: element,
            instant: false,
            validatorConfigs: {
                email: {
                    errorMessage: "An overridden message in email validator",
                    maxLength: 70,
                },
                minLength: {
                    errorMessage:
                        "An overridden message in minLength validator",
                    length: 2,
                },
                required: {},
            },
            validators: [
                {
                    name: "required",
                    validation: expect.any(Function),
                },
                {
                    name: "email",
                    validation: expect.any(Function),
                },
                {
                    name: "minLength",
                    validation: expect.any(Function),
                },
            ],
        });
    });

    it("should be possible to append validator to element", () => {
        document.body.innerHTML = /* HTML */ `
            <div id="wrapping-div">
                <input id="email-test-element" type="textfield" />
            </div>
        `;
        const element = document.querySelector("input")!;
        ValidationService.addValidatorsToElement(element, lazyValidatorConfigs);

        const internalState = ValidationService.getElementsAndValidators();
        const dangerous = internalState["email-test-element"];

        expect(dangerous).toEqual({
            baseValidatorConfigs: undefined,
            element: element,
            instant: false,
            validatorConfigs: {
                minLength: {
                    errorMessage:
                        "An overridden message in minLength validator",
                    length: 2,
                },
                required: {},
            },
            validators: [
                {
                    name: "required",
                    validation: expect.any(Function),
                },
                {
                    name: "minLength",
                    validation: expect.any(Function),
                },
            ],
        });

        ValidationService.addValidatorsToElement(
            element,
            emailValidatorConfig,
            true,
        );

        expect(dangerous).toEqual({
            baseValidatorConfigs: {
                email: {
                    errorMessage: "An overridden message in email validator",
                    maxLength: 70,
                },
            },
            element: element,
            instant: false,
            validatorConfigs: {
                email: {
                    errorMessage: "An overridden message in email validator",
                    maxLength: 70,
                },
                minLength: {
                    errorMessage:
                        "An overridden message in minLength validator",
                    length: 2,
                },
                required: {},
            },
            validators: [
                {
                    name: "required",
                    validation: expect.any(Function),
                },
                {
                    name: "email",
                    validation: expect.any(Function),
                },
                {
                    name: "minLength",
                    validation: expect.any(Function),
                },
            ],
        });
    });

    it("should emit `validation-config-update` event", () => {
        document.body.innerHTML = /* HTML */ `
            <div id="wrapping-div">
                <input id="test-element" type="text" />
            </div>
        `;
        const element = document.querySelector("input")!;

        const listener = jest.fn();
        element.addEventListener("validation-config-update", listener);

        ValidationService.addValidatorsToElement(element, lazyValidatorConfigs);

        expect(listener.mock.calls[0][0].detail).toEqual({
            config: {
                minLength: {
                    errorMessage:
                        "An overridden message in minLength validator",
                    length: 2,
                },
                required: {},
            },
        });
    });
});

describe("ValidityEvents", () => {
    it("should dispatch a validity event on change with required validation message", () => {
        const element = mountInputElementAndAddValidators("text");
        const listener = jest.fn();

        element.addEventListener("validity", listener);
        dispatchEvent("change", element);

        const validityEvent = listener.mock.calls[0][0].detail;

        expect(validityEvent.validityMode).toBe("INITIAL");
        expect(validityEvent.validationMessage).toBe("Fyll i text.");
    });

    it("should not validate field continuously during input when instant is false and never touched", () => {
        const element = mountInputElementAndAddValidators("text");
        const listener = jest.fn();
        element.addEventListener("validity", listener);

        element.value = "x";
        dispatchEvent("input", element);
        element.value = "xy";
        dispatchEvent("input", element);

        expect(listener.mock.calls).toHaveLength(0);
    });

    it("should apply custom validity to inputs in fieldset", () => {
        const element = mountFieldsetAndAddValidators();
        dispatchEvent("blur", element);

        /* eslint-disable-next-line jest/no-large-snapshots -- technical debt,
         * i'm not even sure what this is teseting, if it is just about testing
         * the presence of :invalid on the elements the test should be rewritten
         * to explicitly test if that pseudoclass is present */
        expect(element.querySelectorAll(":invalid")).toMatchInlineSnapshot(`
            NodeList [
              <input
                required=""
                type="radio"
              />,
              <input
                required=""
                type="radio"
              />,
            ]
        `);
    });

    it('should dispatch "pending-validation" events but no "validation" events during input when instant is false', () => {
        const element = mountInputElementAndAddValidators("text");
        const validity = jest.fn();
        const pending = jest.fn();
        element.addEventListener("validity", validity);
        element.addEventListener("pending-validity", pending);

        element.focus();
        element.value = "x";
        dispatchEvent("input", element);
        element.value = "xy";
        dispatchEvent("input", element);

        expect(validity.mock.calls).toHaveLength(0);
        expect(pending.mock.calls[0][0].bubbles).toBe(false);

        /* eslint-disable-next-line jest/no-large-snapshots -- this isn't really testing anything but not sure what it should do */
        expect(pending.mock.calls).toMatchInlineSnapshot(`
            [
              [
                CustomEvent {
                  "isTrusted": false,
                },
              ],
              [
                CustomEvent {
                  "isTrusted": false,
                },
              ],
            ]
        `);
    });

    it("should dispatch a validity event during input that is invalid with ERROR validityMode when instant is true", () => {
        const element = mountInputElementAndAddValidators(
            "text",
            instantValidatorConfigs,
        );
        const listener = jest.fn();
        element.addEventListener("validity", listener);

        element.value = "x";
        dispatchEvent("input", element);

        const validityEvent = listener.mock.calls[0][0].detail;
        expect(validityEvent).toEqual({
            elementId: "test-element",
            isValid: false,
            nativeEvent: "input",
            target: element,
            validationMessage: "An overridden message in minLength validator",
            validityMode: "ERROR",
        });
    });

    it("should validate field continuously during input when instant is true", () => {
        const element = mountInputElementAndAddValidators(
            "text",
            instantValidatorConfigs,
        );
        const listener = jest.fn();
        element.addEventListener("validity", listener);

        element.value = "x";
        dispatchEvent("input", element);
        element.value = "xy";
        dispatchEvent("input", element);

        expect(listener.mock.calls[0][0].detail).toEqual({
            elementId: "test-element",
            isValid: false,
            nativeEvent: "input",
            target: element,
            validationMessage: "An overridden message in minLength validator",
            validityMode: "ERROR",
        });
        expect(listener.mock.calls[1][0].detail).toEqual({
            elementId: "test-element",
            isValid: true,
            nativeEvent: "input",
            target: element,
            validationMessage: "",
            validityMode: "VALID",
        });
    });
});

describe("Error message", () => {
    it("should fallback to the validator name if no translations are defined", () => {
        const validityEvent = triggerValidityEvent("change", "");
        expect(validityEvent?.validationMessage).toBe("Fyll i text.");
    });

    it("should use message defined in validation error messages", () => {
        ValidationService.validationErrorMessages = {
            required: "The field is required",
        };
        const validityEvent = triggerValidityEvent("change", "");
        expect(validityEvent?.validationMessage).toBe("The field is required");
    });

    it("should use type-specific message defined in validation error messages", () => {
        ValidationService.validationErrorMessages = {
            required: "The field is required",
            "required.text": "My required textfield",
            "required.radio": "My required radiofield",
        };

        const validityEventText = triggerValidityEvent("change", "", "text");
        expect(validityEventText?.validationMessage).toBe(
            "My required textfield",
        );

        const validityEventRadio = triggerValidityEvent("change", "", "radio");
        expect(validityEventRadio?.validationMessage).toBe(
            "My required radiofield",
        );
    });

    it("should use errorMessage in validatorconfig", () => {
        const validityEvent = triggerValidityEvent("change", "x");
        expect(validityEvent?.validationMessage).toBe(
            "An overridden message in minLength validator",
        );
    });

    it("should merge translations if already set", () => {
        ValidationService.validationErrorMessages = {
            required: "REQUIRED",
            percent: "PERCENT",
        };
        ValidationService.addValidationErrorMessages({
            required: "OVERRIDEN",
            date: "DATE",
        });

        expect(ValidationService.validationErrorMessages).toEqual({
            date: "DATE",
            percent: "PERCENT",
            required: "OVERRIDEN",
        });
    });
});

describe("ValidityMode", () => {
    it.each`
        value   | required | expected
        ${""}   | ${true}  | ${"INITIAL"}
        ${"1"}  | ${true}  | ${"ERROR"}
        ${"12"} | ${true}  | ${"VALID"}
        ${""}   | ${false} | ${"INITIAL"}
        ${"1"}  | ${false} | ${"ERROR"}
        ${"12"} | ${false} | ${"VALID"}
    `(
        `should be $expected when required is $required and leaving field with "$value" value`,
        ({ value, required, expected }) => {
            const validatorConfigs: ValidatorConfigs = {
                required: { enabled: required },
                minLength: {
                    length: 2,
                    errorMessage:
                        "An overridden message in minLength validator",
                },
            };

            const validityEvent = triggerValidityEvent(
                "blur",
                value,
                "text",
                validatorConfigs,
            );
            expect(validityEvent?.validityMode).toBe(expected);
        },
    );

    it("should not trigger event on first input when instant is false", () => {
        const validityEvent = triggerValidityEvent("input", "x");
        expect(validityEvent).toBeUndefined();
    });

    it("should be ERROR on first input when instant is true", () => {
        const validityEvent = triggerValidityEvent(
            "input",
            "x",
            "text",
            instantValidatorConfigs,
        );
        expect(validityEvent).toEqual({
            elementId: "test-element",
            isValid: false,
            nativeEvent: "input",
            target: expect.any(HTMLInputElement),
            validationMessage: "An overridden message in minLength validator",
            validityMode: "ERROR",
        });
    });

    describe("resolveValidityModeWhenError", () => {
        it.each`
            value    | touched  | submitted | validityMode
            ${""}    | ${false} | ${false}  | ${"INITIAL"}
            ${""}    | ${true}  | ${false}  | ${"INITIAL"}
            ${""}    | ${false} | ${true}   | ${"ERROR"}
            ${""}    | ${true}  | ${true}   | ${"ERROR"}
            ${"foo"} | ${false} | ${false}  | ${"ERROR"}
            ${"foo"} | ${true}  | ${false}  | ${"ERROR"}
            ${"foo"} | ${false} | ${true}   | ${"ERROR"}
            ${"foo"} | ${true}  | ${true}   | ${"ERROR"}
        `(
            `should return $validityMode for input with value "$value", touched=$touched and submitted=$submitted`,
            ({ value, touched, submitted, validityMode }) => {
                const element = document.createElement("input");
                element.value = value;
                expect(
                    ValidationService.resolveValidityModeWhenError(
                        element,
                        touched,
                        submitted,
                    ),
                ).toBe(validityMode);
            },
        );
    });
});

describe("initial state", () => {
    it("should have validityMode VALID if input of type radio is checked and untouched", () => {
        ValidationService.setState("test-element", {
            submitted: false,
            touched: false,
        });
        const validityEvent = triggerValidityEvent("validate", true, "radio");
        expect(validityEvent).toEqual({
            elementId: "test-element",
            isValid: true,
            nativeEvent: "validate",
            target: expect.any(HTMLElement),
            validationMessage: "",
            validityMode: "VALID",
        });
    });

    it("should have validityMode INITIAL if input of type radio is not checked and untouched", () => {
        ValidationService.validationErrorMessages = { required: "REQUIRED" };
        ValidationService.setState("test-element", {
            submitted: false,
            touched: false,
        });
        const validityEvent = triggerValidityEvent("validate", false, "radio");
        expect(validityEvent).toEqual({
            elementId: "test-element",
            isValid: false,
            nativeEvent: "validate",
            target: expect.any(HTMLElement),
            validationMessage: "REQUIRED",
            validityMode: "INITIAL",
        });
    });

    it("should have validityMode INITIAL if input of type radio is touched, not checked and event has been sent (Simulates leaving the radio-group)", () => {
        const validityEvent = triggerValidityEvent(
            "validate",
            false,
            "radio",
            lazyValidatorConfigs,
            {
                submitted: false,
                touched: true,
            },
        );
        expect(validityEvent).toEqual({
            elementId: "test-element",
            isValid: false,
            nativeEvent: "validate",
            target: expect.any(HTMLElement),
            validationMessage: "REQUIRED",
            validityMode: "INITIAL",
        });
    });

    it("should invalidate field and use server error from state when triggering validate", () => {
        const validityEvent = triggerValidityEvent(
            "validate",
            "text",
            "text",
            lazyValidatorConfigs,
            { serverError: "Some backend error" },
        );
        expect(validityEvent?.validityMode).toBe("ERROR");
        expect(validityEvent?.validationMessage).toBe("Some backend error");
    });

    describe("validityMode", () => {
        it.each`
            state                                                           | inputValue | validityMode
            ${{ touched: true, submitted: false, serverError: undefined }}  | ${"VALUE"} | ${"VALID"}
            ${{ touched: false, submitted: true, serverError: undefined }}  | ${"VALUE"} | ${"VALID"}
            ${{ touched: false, submitted: false, serverError: undefined }} | ${""}      | ${"INITIAL"}
            ${{ touched: false, submitted: false, serverError: undefined }} | ${"VALUE"} | ${"VALID"}
            ${{ touched: false, submitted: false, serverError: undefined }} | ${"V"}     | ${"ERROR"}
        `(
            `should have validityMode $validityMode if state is $state and input value is $inputValue`,
            ({ state, inputValue, validityMode }) => {
                ValidationService.setState("test-element", state);
                const validityEvent = triggerValidityEvent(
                    "validate",
                    inputValue,
                );
                expect(validityEvent?.validityMode).toBe(validityMode);
            },
        );
    });

    it("should not trigger validity event on first input when instant is false", () => {
        ValidationService.setState("test-element", {
            serverError: "Some backend error",
        });
        const validityEvent = triggerValidityEvent("input", "X");
        expect(validityEvent).toBeUndefined();
    });

    it("should invalidate field and use validation error on input when instant is true", () => {
        const validityEvent = triggerValidityEvent(
            "input",
            "X",
            "text",
            instantValidatorConfigs,
            { serverError: "Some backend error" },
        );
        expect(validityEvent).toEqual({
            elementId: "test-element",
            isValid: false,
            nativeEvent: "input",
            target: expect.any(HTMLElement),
            validationMessage: "An overridden message in minLength validator",
            validityMode: "ERROR",
        });
    });

    it("should have validityMode ERROR if textfield has value but is untouched when instant is true", () => {
        const validityEvent = triggerValidityEvent(
            "validate",
            "X",
            "text",
            instantValidatorConfigs,
            {
                submitted: false,
                touched: false,
            },
        );
        expect(validityEvent).toEqual({
            elementId: "test-element",
            isValid: false,
            nativeEvent: "validate",
            target: expect.any(HTMLElement),
            validationMessage: "An overridden message in minLength validator",
            validityMode: "ERROR",
        });
    });
});

describe("clearAllStates", () => {
    it("should clear all validation states", () => {
        const input = mountInputElementAndAddValidators("text");
        const validityMock = jest.fn();
        input.addEventListener("validity", validityMock);

        ValidationService.setState("test-element", {
            submitted: true,
            touched: true,
        });
        ValidationService.validateElement("test-element");
        expect(validityMock.mock.calls[0][0].detail.validityMode).toBe("ERROR");

        ValidationService.clearAllStates();
        ValidationService.validateElement("test-element");
        expect(validityMock.mock.calls[1][0].detail.validityMode).toBe(
            "INITIAL",
        );
    });
});

describe("isAnyTouched", () => {
    function setupTwoInputFields(): void {
        document.body.innerHTML = /* HTML */ `
            <div id="wrapping-div">
                <input id="test-element" type="text" />
                <input id="test-element2" type="text" />
            </div>
        `;

        for (const id of ["test-element", "test-element2"]) {
            const element = document.getElementById(id) as HTMLInputElement;
            ValidationService.addValidatorsToElement(
                element,
                lazyValidatorConfigs,
            );
        }
    }

    it("should be false if no element is touched", () => {
        setupTwoInputFields();

        ValidationService.setState("test-element", {
            submitted: false,
            touched: false,
        });
        ValidationService.setState("test-element2", {
            submitted: false,
            touched: false,
        });

        expect(ValidationService.isAnyTouched).toBe(false);
    });

    it("should find if any one field is touched", () => {
        setupTwoInputFields();

        ValidationService.setState("test-element", {
            submitted: false,
            touched: false,
        });
        ValidationService.setState("test-element2", {
            submitted: false,
            touched: true,
        });

        expect(ValidationService.isAnyTouched).toBe(true);
    });
});

describe("getValidatorByName", () => {
    it("should return the validator by that name if it has been registered", () => {
        // Given
        const validatorName: ValidatorName = "myValidator";
        const validator: Validator = {
            name: validatorName,
            validation: jest.fn(),
        };
        ValidationService.registerValidator(validator);

        // When
        const result = ValidationService.getValidatorByName(validatorName);

        // Then
        expect(result).toBe(validator);
    });

    it("should throw an error if no validator has been registered with that name", () => {
        // When
        const getValidatorCall = (): Validator =>
            ValidationService.getValidatorByName("nonExistentValidator");

        // Then
        expect(getValidatorCall).toThrow(
            `Validator 'nonExistentValidator' does not exist or is not registered, see ValidatorService.registerValidator.`,
        );
    });
});

/* compile test only, it is too difficult and unstable to test a validator from
 * end to end */
ValidationService.registerValidator({
    name: "new-custom-no-config",
    validation(value: string): boolean {
        return value === "foo";
    },
});
ValidationService.registerValidator({
    name: "new-custom-untyped-config",
    validation(
        value: string,
        element: ValidatableHTMLElement,
        config: ValidatorConfig,
    ): boolean {
        return value === config.anything;
    },
});
interface MyAwesomeConfig extends ValidatorOptions {
    something: string;
}
ValidationService.registerValidator({
    name: "new-custom-untyped-config",
    validation(
        value: string,
        element: ValidatableHTMLElement,
        config: MyAwesomeConfig,
    ): boolean {
        return value === config.something;
    },
});
