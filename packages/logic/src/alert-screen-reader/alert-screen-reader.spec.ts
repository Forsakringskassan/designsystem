import { afterEach, describe, expect, it, vi } from "vitest";
import { SCREEN_READER_DELAY } from "../wait-for-screen-reader";
import {
    REMOVE_TEXT_DELAY,
    alertScreenReader,
    createScreenReaderWrapper,
} from "./alert-screen-reader";

vi.useFakeTimers();
createScreenReaderWrapper({ assertive: false });

function getWrapper(): HTMLDivElement {
    return document.querySelector(
        "#fkui-alert-screen-reader",
    ) as HTMLDivElement;
}

afterEach(() => {
    vi.advanceTimersByTime(SCREEN_READER_DELAY + REMOVE_TEXT_DELAY);
});

describe("alertScreenReader", () => {
    alertScreenReader("Screen reader text");

    it("should create wrapper element", () => {
        expect.assertions(1);
        expect(getWrapper()).toBeTruthy();
    });

    it("should set aria-live attribute", () => {
        expect.assertions(1);
        expect(getWrapper().getAttribute("aria-live")).toBe("polite");
    });

    it("should be able to change aria-live attribute", () => {
        expect.assertions(1);
        alertScreenReader("Screen reader text", { assertive: true });
        expect(getWrapper().getAttribute("aria-live")).toBe("assertive");
    });

    it("should add text to wrapper", () => {
        expect.assertions(3);
        alertScreenReader("Screen reader text");
        expect(getWrapper().textContent).toBe("");

        vi.advanceTimersByTime(SCREEN_READER_DELAY);
        expect(getWrapper().textContent).toBe("Screen reader text");

        vi.advanceTimersByTime(REMOVE_TEXT_DELAY);
        expect(getWrapper().textContent).toBe("");
    });

    it("should remove previous text when new text is added", () => {
        expect.assertions(2);
        alertScreenReader("Screen reader text");
        vi.advanceTimersByTime(SCREEN_READER_DELAY);
        expect(getWrapper().textContent).toBe("Screen reader text");

        alertScreenReader("May I disturb you for a moment?");
        alertScreenReader("This is a very important message!");
        vi.advanceTimersByTime(SCREEN_READER_DELAY);
        expect(getWrapper().textContent).toBe(
            "This is a very important message!",
        );
    });
});
