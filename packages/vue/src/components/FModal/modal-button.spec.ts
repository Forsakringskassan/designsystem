import { FModalButton, FModalButtonDescriptor, normalizeButtonList } from "./modal-button";

function isSubmit(button: FModalButton): boolean {
    return button.buttonType === 'submit';
}

it('should set button type to "submit" when submitButton is explicitly enabled', () => {
    expect.assertions(3);
    const buttons: FModalButtonDescriptor[] = [
        {
            label: "foo",
            type: "primary",
            submitButton: true,
        },
        {
            label: "bar",
            type: "secondary",
            submitButton: true,
        },
        {
            label: "baz",
            type: "primary",
            submitButton: false,
        },
    ];
    const normalized = normalizeButtonList(buttons);
    expect(normalized[0].buttonType).toBe("submit");
    expect(normalized[1].buttonType).toBe("submit");
    expect(normalized[2].buttonType).toBe("button");
});

it('should set button type to "button" when submitButton is explicitly disabled', () => {
    expect.assertions(3);
    const buttons: FModalButtonDescriptor[] = [
        {
            label: "foo",
            type: "primary",
            submitButton: false,
        },
        {
            label: "bar",
            type: "secondary",
            submitButton: false,
        },
        {
            label: "baz",
            type: "primary",
            submitButton: false,
        },
    ];
    const normalized = normalizeButtonList(buttons);
    expect(normalized[0].buttonType).toBe("button");
    expect(normalized[1].buttonType).toBe("button");
    expect(normalized[2].buttonType).toBe("button");
});

describe("with explicit submit button", () => {
    it('should not set button type to "submit" when only one primary button is present', () => {
        expect.assertions(3);
        const buttons: FModalButtonDescriptor[] = [
            {
                label: "foo",
                type: "secondary",
            },
            {
                label: "bar",
                type: "primary",
            },
            {
                label: "baz",
                type: "secondary",
            },
        ];
        const normalized = normalizeButtonList(buttons, { submit: "explicit" });
        expect(normalized[0].buttonType).toBe("button");
        expect(normalized[1].buttonType).toBe("button");
        expect(normalized[2].buttonType).toBe("button");
    });
});

describe("with auto submit button", () => {
    it('should set unique primary button as submit button', () => {
        expect.assertions(4);
        const buttons: FModalButtonDescriptor[] = [
            {
                label: "foo",
                type: "secondary",
            },
            {
                label: "bar",
                type: "primary",
            },
            {
                label: "baz",
                type: "secondary",
            },
        ];
        const normalized = normalizeButtonList(buttons, { submit: "auto" });
        expect(normalized.filter(isSubmit)).toHaveLength(1);
        expect(normalized[0].buttonType).toBe("button");
        expect(normalized[1].buttonType).toBe("submit");
        expect(normalized[2].buttonType).toBe("button");
    });

    it('should set first button as submit button when no primary button is present', () => {
        expect.assertions(4);
        const buttons: FModalButtonDescriptor[] = [
            {
                label: "foo",
                type: "secondary",
            },
            {
                label: "bar",
                type: "secondary",
            },
            {
                label: "baz",
                type: "secondary",
            },
        ];
        const normalized = normalizeButtonList(buttons, { submit: "auto" });
        expect(normalized.filter(isSubmit)).toHaveLength(1);
        expect(normalized[0].buttonType).toBe("submit");
        expect(normalized[1].buttonType).toBe("button");
        expect(normalized[2].buttonType).toBe("button");
    });

    it('should not set submit button when multiple primary buttons are present', () => {
        expect.assertions(4);
        const buttons: FModalButtonDescriptor[] = [
            {
                label: "foo",
                type: "secondary",
            },
            {
                label: "bar",
                type: "primary",
            },
            {
                label: "baz",
                type: "primary",
            },
        ];
        const normalized = normalizeButtonList(buttons, { submit: "auto" });
        expect(normalized.filter(isSubmit)).toHaveLength(1);
        expect(normalized[0].buttonType).toBe("submit"); // first button becomes submit
        expect(normalized[1].buttonType).toBe("button");
        expect(normalized[2].buttonType).toBe("button");
    });

    it('should not set submit button when one button has been explicitly set as submit button', () => {
        expect.assertions(4);
        const buttons: FModalButtonDescriptor[] = [
            {
                label: "foo",
                type: "secondary",
                submitButton: true,
            },
            {
                label: "bar",
                type: "primary",
            },
            {
                label: "baz",
                type: "secondary",
            },
        ];
        const normalized = normalizeButtonList(buttons, { submit: "auto" });
        expect(normalized.filter(isSubmit)).toHaveLength(1);
        expect(normalized[0].buttonType).toBe("submit");
        expect(normalized[1].buttonType).toBe("button");
        expect(normalized[2].buttonType).toBe("button");
    });
});
