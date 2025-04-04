import { requiredValidator } from "./Validators/RequiredValidator";
import { ValidationService } from "./ValidationService";

ValidationService.registerValidator(requiredValidator);

it("should set isTouched on blur", async () => {
    expect.assertions(2);
    const element = document.createElement("input");
    element.id = "mock-id";
    element.value = "foobar";
    ValidationService.addValidatorsToElement(element, { required: {} });
    const pre = await ValidationService.validateElement(element);
    expect(pre).toEqual(
        expect.objectContaining({
            isTouched: false,
        }),
    );
    element.dispatchEvent(new FocusEvent("blur"));
    const post = await ValidationService.validateElement(element);
    expect(post).toEqual(
        expect.objectContaining({
            isTouched: true,
        }),
    );
});

describe("validateElement()", () => {
    it("should return valid when element is valid", async () => {
        expect.assertions(2);
        const element = document.createElement("input");
        element.id = "mock-id";
        element.value = "foobar";
        ValidationService.addValidatorsToElement(element, { required: {} });
        const state = await ValidationService.validateElement(element);
        expect(element.matches(":valid")).toBeTruthy();
        expect(state).toEqual(
            expect.objectContaining({
                isValid: true,
                error: null,
            }),
        );
    });

    it("should return invalid when element is invalid", async () => {
        expect.assertions(4);
        const element = document.createElement("input");
        element.type = "text";
        element.id = "mock-id";
        ValidationService.addValidatorsToElement(element, { required: {} });
        const invalid = await ValidationService.validateElement(element);
        expect(element.matches(":invalid")).toBeTruthy();
        expect(invalid).toEqual(
            expect.objectContaining({
                isValid: false,
                error: "Fyll i text.",
            }),
        );
        element.value = "foobar";
        const valid = await ValidationService.validateElement(element);
        expect(element.matches(":valid")).toBeTruthy();
        expect(valid).toEqual(
            expect.objectContaining({
                isValid: true,
                error: null,
            }),
        );
    });

    it("should return valid when disabled element is invalid", async () => {
        expect.assertions(1);
        const element = document.createElement("input");
        element.id = "mock-id";
        element.disabled = true;
        ValidationService.addValidatorsToElement(element, { required: {} });
        const state = await ValidationService.validateElement(element);
        expect(state).toEqual(
            expect.objectContaining({
                isValid: true,
                error: null,
            }),
        );
    });

    it("should support validating by id", async () => {
        expect.assertions(2);
        const element = document.createElement("input");
        element.id = "mock-id";
        element.value = "foobar";
        document.body.appendChild(element);
        ValidationService.addValidatorsToElement(element, { required: {} });
        const state = await ValidationService.validateElement(element.id);
        expect(element.matches(":valid")).toBeTruthy();
        expect(state).toEqual(
            expect.objectContaining({
                isValid: true,
                error: null,
            }),
        );
    });

    it("should return valid for elements without any registered validator", async () => {
        expect.assertions(2);
        const element = document.createElement("input");
        const state = await ValidationService.validateElement(element);
        expect(element.matches(":valid")).toBeTruthy();
        expect(state).toEqual(
            expect.objectContaining({
                isValid: true,
                error: null,
            }),
        );
    });

    it("should handle null", async () => {
        expect.assertions(1);
        const state = await ValidationService.validateElement(null);
        expect(state).toEqual(
            expect.objectContaining({
                isValid: true,
                error: null,
            }),
        );
    });

    describe("should handle", () => {
        it('<input type="checkbox"> fields', async () => {
            expect.assertions(4);
            const element = document.createElement("input");
            element.type = "checkbox";
            element.id = "mock-id";
            ValidationService.addValidatorsToElement(element, { required: {} });
            const invalid = await ValidationService.validateElement(element);
            expect(element.matches(":invalid")).toBeTruthy();
            expect(invalid).toEqual(
                expect.objectContaining({
                    isValid: false,
                    error: "Välj minst ett alternativ.",
                }),
            );
            element.checked = true;
            const valid = await ValidationService.validateElement(element);
            expect(element.matches(":valid")).toBeTruthy();
            expect(valid).toEqual(
                expect.objectContaining({
                    isValid: true,
                    error: null,
                }),
            );
        });

        it('<input type="radio"> fields', async () => {
            expect.assertions(4);
            const element = document.createElement("input");
            element.type = "radio";
            element.id = "mock-id";
            ValidationService.addValidatorsToElement(element, { required: {} });
            const invalid = await ValidationService.validateElement(element);
            expect(element.matches(":invalid")).toBeTruthy();
            expect(invalid).toEqual(
                expect.objectContaining({
                    isValid: false,
                    error: "Välj ett av alternativen.",
                }),
            );
            element.checked = true;
            const valid = await ValidationService.validateElement(element);
            expect(element.matches(":valid")).toBeTruthy();
            expect(valid).toEqual(
                expect.objectContaining({
                    isValid: true,
                    error: null,
                }),
            );
        });

        it("<textarea> fields", async () => {
            expect.assertions(4);
            const element = document.createElement("textarea");
            element.id = "mock-id";
            ValidationService.addValidatorsToElement(element, { required: {} });
            const invalid = await ValidationService.validateElement(element);
            expect(element.matches(":invalid")).toBeTruthy();
            expect(invalid).toEqual(
                expect.objectContaining({
                    isValid: false,
                    error: "Fyll i text.",
                }),
            );
            element.value = "foobar";
            const valid = await ValidationService.validateElement(element);
            expect(element.matches(":valid")).toBeTruthy();
            expect(valid).toEqual(
                expect.objectContaining({
                    isValid: true,
                    error: null,
                }),
            );
        });

        it("<select> fields", async () => {
            expect.assertions(4);
            const select = document.createElement("select");
            const option1 = document.createElement("option");
            const option2 = document.createElement("option");
            option1.value = "";
            option1.selected = true;
            option2.value = "foobar";
            option2.selected = false;
            select.id = "mock-id";
            select.appendChild(option1);
            select.appendChild(option2);
            ValidationService.addValidatorsToElement(select, { required: {} });
            const invalid = await ValidationService.validateElement(select);
            expect(select.matches(":invalid")).toBeTruthy();
            expect(invalid).toEqual(
                expect.objectContaining({
                    isValid: false,
                    error: "Välj ett av alternativen.",
                }),
            );
            option2.selected = true;
            const valid = await ValidationService.validateElement(select);
            expect(select.matches(":valid")).toBeTruthy();
            expect(valid).toEqual(
                expect.objectContaining({
                    isValid: true,
                    error: null,
                }),
            );
        });

        it("<fieldset>", async () => {
            expect.assertions(4);
            const fieldset = document.createElement("fieldset");
            const radio = document.createElement("input");
            radio.type = "radio";
            radio.id = "mock-id";
            fieldset.id = "fieldset-id";
            fieldset.appendChild(radio);
            ValidationService.addValidatorsToElement(fieldset, {
                required: {},
            });
            const invalid = await ValidationService.validateElement(fieldset);
            expect(fieldset.matches(":invalid")).toBeTruthy();
            expect(invalid).toEqual(
                expect.objectContaining({
                    isValid: false,
                    error: "Välj ett av alternativen.",
                }),
            );
            radio.checked = true;
            const valid = await ValidationService.validateElement(fieldset);
            expect(fieldset.matches(":valid")).toBeTruthy();
            expect(valid).toEqual(
                expect.objectContaining({
                    isValid: true,
                    error: null,
                }),
            );
        });
    });
});
