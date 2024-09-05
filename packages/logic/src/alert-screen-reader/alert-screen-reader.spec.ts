import { SCREEN_READER_DELAY } from "../wait-for-screen-reader";
import {
    alertScreenReader,
    createScreenReaderWrapper,
    REMOVE_TEXT_DELAY,
} from "./alert-screen-reader";

jest.useFakeTimers();
createScreenReaderWrapper({ assertive: false });

function getWrapper(): HTMLDivElement {
    return document.querySelector(
        "#fkui-alert-screen-reader",
    ) as HTMLDivElement;
}

afterEach(() => {
    jest.advanceTimersByTime(SCREEN_READER_DELAY + REMOVE_TEXT_DELAY);
});

describe("alertScreenReader", () => {
    alertScreenReader("Screen reader text");

    it("should create wrapper element", () => {
        expect(getWrapper()).toBeTruthy();
    });

    it("should set aria-live attribute", () => {
        expect(getWrapper().getAttribute("aria-live")).toBe("polite");
    });

    it("should be able to change aria-live attribute", () => {
        alertScreenReader("Screen reader text", { assertive: true });
        expect(getWrapper().getAttribute("aria-live")).toBe("assertive");
    });

    it("should add text to wrapper", () => {
        alertScreenReader("Screen reader text");
        expect(getWrapper().textContent).toBe("");

        jest.advanceTimersByTime(SCREEN_READER_DELAY);
        expect(getWrapper().textContent).toBe("Screen reader text");

        jest.advanceTimersByTime(REMOVE_TEXT_DELAY);
        expect(getWrapper().textContent).toBe("");
    });

    it("should remove previous text when new text is added", () => {
        alertScreenReader("Screen reader text");
        jest.advanceTimersByTime(SCREEN_READER_DELAY);
        expect(getWrapper().textContent).toBe("Screen reader text");

        alertScreenReader("May I disturb you for a moment?");
        alertScreenReader("This is a very important message!");
        jest.advanceTimersByTime(SCREEN_READER_DELAY);
        expect(getWrapper().textContent).toBe(
            "This is a very important message!",
        );
    });
});
