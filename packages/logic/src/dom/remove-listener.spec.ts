import {
    type Mock,
    afterEach,
    beforeEach,
    describe,
    expect,
    it,
    vi,
} from "vitest";
import { addFocusListener } from "./add-listener";
import { removeFocusListener } from "./remove-listener";

function setupDomElements(): HTMLElement[] {
    const a = document.createElement("input");
    const b = document.createElement("input");
    document.body.append(a);
    document.body.append(b);
    return [a, b];
}

afterEach(() => {
    document.body.innerHTML = "<div></div>";
});

describe("removeFocusListener", () => {
    let mockEventListener: Mock;
    beforeEach(() => {
        mockEventListener = vi.fn();
    });

    it("should be able to remove focusListener", () => {
        const elements = setupDomElements();
        elements[0].removeEventListener = mockEventListener;
        elements[1].removeEventListener = mockEventListener;

        removeFocusListener(elements, vi.fn());
        expect(mockEventListener).toHaveBeenCalledTimes(2);
    });
});

describe("combination removeFocusListener and addFocusListener", () => {
    it("should not call callback function after listener is removed", () => {
        const mockEventCallback = vi.fn();
        const elements = setupDomElements();

        addFocusListener(elements, mockEventCallback);
        elements[0].focus();
        elements[1].focus();
        removeFocusListener(elements, mockEventCallback);

        elements[0].focus(); // should not generate callback
        expect(mockEventCallback).toHaveBeenCalledTimes(2);
    });
});
