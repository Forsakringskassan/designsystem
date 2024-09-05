import { addFocusListener } from "./add-listener";
import { removeFocusListener } from "./remove-listener";

function setupDomElements(): HTMLElement[] {
    const a = document.createElement("input");
    const b = document.createElement("input");
    document.body.appendChild(a);
    document.body.appendChild(b);
    return [a, b];
}

afterEach(() => {
    document.body.innerHTML = "<div></div>";
});

describe("removeFocusListener", () => {
    let mockEventListener: jest.Mock;
    beforeEach(() => {
        mockEventListener = jest.fn();
    });

    it("should be able to remove focusListener", () => {
        const elements = setupDomElements();
        elements[0].removeEventListener = mockEventListener;
        elements[1].removeEventListener = mockEventListener;

        removeFocusListener(elements, jest.fn());
        expect(mockEventListener).toHaveBeenCalledTimes(2);
    });
});

describe("combination removeFocusListener and addFocusListener", () => {
    it("should not call callback function after listener is removed", () => {
        const mockEventCallback = jest.fn();
        const elements = setupDomElements();

        addFocusListener(elements, mockEventCallback);
        elements[0].focus();
        elements[1].focus();
        removeFocusListener(elements, mockEventCallback);

        elements[0].focus(); // should not generate callback
        expect(mockEventCallback).toHaveBeenCalledTimes(2);
    });
});
