import {
    waitForScreenReader,
    SCREEN_READER_DELAY,
} from "./wait-for-screen-reader";

jest.useFakeTimers();

let element: HTMLParagraphElement;

beforeEach(() => {
    element = document.createElement("p");
});

describe("waitForScreenReader", () => {
    it("should run passed function with default delay", () => {
        const text = "I waited!";

        waitForScreenReader(() => {
            element.textContent = text;
        });

        jest.advanceTimersByTime(SCREEN_READER_DELAY - 1);
        expect(element.textContent).toBe("");

        jest.advanceTimersByTime(1);
        expect(element.textContent).toBe(text);
    });

    it("should be able to change delay", () => {
        const NEW_DELAY = 500;
        const text = "I waited longer!";

        waitForScreenReader(() => {
            element.textContent = text;
        }, NEW_DELAY);

        jest.advanceTimersByTime(NEW_DELAY - 1);
        expect(element.textContent).toBe("");

        jest.advanceTimersByTime(1);
        expect(element.textContent).toBe(text);
    });
});
