import { beforeEach, describe, expect, it, vi } from "vitest";
import {
    SCREEN_READER_DELAY,
    waitForScreenReader,
} from "./wait-for-screen-reader";

vi.useFakeTimers();

let element: HTMLParagraphElement;

beforeEach(() => {
    element = document.createElement("p");
});

describe("waitForScreenReader", () => {
    it("should run passed function with default delay", () => {
        expect.assertions(2);
        const text = "I waited!";

        void waitForScreenReader(() => {
            element.textContent = text;
        });

        vi.advanceTimersByTime(SCREEN_READER_DELAY - 1);
        expect(element.textContent).toBe("");

        vi.advanceTimersByTime(1);
        expect(element.textContent).toBe(text);
    });

    it("should be able to change delay", () => {
        expect.assertions(2);
        const NEW_DELAY = 500;
        const text = "I waited longer!";

        void waitForScreenReader(() => {
            element.textContent = text;
        }, NEW_DELAY);

        vi.advanceTimersByTime(NEW_DELAY - 1);
        expect(element.textContent).toBe("");

        vi.advanceTimersByTime(1);
        expect(element.textContent).toBe(text);
    });
});
