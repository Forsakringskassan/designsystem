import { addFocusListener } from "./add-listener";

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

describe("addFocusListener", () => {
    let mockEventListener: jest.Mock;
    beforeEach(() => {
        mockEventListener = jest.fn();
    });

    it("should be able to add focusListener", () => {
        const elements = setupDomElements();
        elements[0].addEventListener = mockEventListener;
        elements[1].addEventListener = mockEventListener;

        addFocusListener(elements, jest.fn());
        expect(mockEventListener).toHaveBeenCalledTimes(2);
    });

    it("should call callback function when focus is changed", () => {
        const mockEventCallback = jest.fn();
        const elements = setupDomElements();
        addFocusListener(elements, mockEventCallback);
        elements[0].focus();
        expect(mockEventCallback).toHaveBeenCalled();
    });
});
