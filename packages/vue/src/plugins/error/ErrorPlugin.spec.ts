/* eslint-disable no-console -- many tests related to console logging triggers this */
import { type ComponentPublicInstance } from "vue";
import flushPromises from "flush-promises";
import { EventBus } from "../../utils";
import {
    errorHandler,
    warnHandler,
    UNHANDLED_ERROR_EVENT,
} from "./ErrorPlugin";

const fakeVm: ComponentPublicInstance = {
    vm: "fake",
} as unknown as ComponentPublicInstance;

beforeEach(() => {
    console.error = jest.fn();
    console.warn = jest.fn();
});

describe("errorHandler", () => {
    it("should emit event", async () => {
        expect.assertions(1);

        // Given
        const error = new Error("My error");
        const info = "unittest";
        EventBus.$emit = jest.fn();
        await flushPromises();

        // When
        errorHandler({}, error, fakeVm, info);

        // Then
        expect(EventBus.$emit).toHaveBeenCalledWith(UNHANDLED_ERROR_EVENT, {
            error,
            vm: fakeVm,
            info,
        });
    });

    it("should log to console if options.logToConsole is set", async () => {
        expect.assertions(3);

        // Given
        const error = new Error("My error");
        const info = "unittest";
        EventBus.$emit = jest.fn();
        await flushPromises();

        // When
        errorHandler({ logToConsole: true }, error, fakeVm, info);

        // Then
        expect(console.error).toHaveBeenCalledTimes(1);
        expect(console.error).toHaveBeenCalledWith(
            "Error in unittest:",
            error,
            fakeVm,
        );
        expect(console.warn).not.toHaveBeenCalled();
    });

    it("should not log to console unless options.logToConsole is set", async () => {
        expect.assertions(2);

        // Given
        const error = new Error("My error");
        const info = "unittest";
        EventBus.$emit = jest.fn();
        await flushPromises();

        // When
        errorHandler({ logToConsole: false }, error, fakeVm, info);

        // Then
        expect(console.error).not.toHaveBeenCalled();
        expect(console.warn).not.toHaveBeenCalled();
    });
});

describe("warnHandler", () => {
    it("should emit event", async () => {
        expect.assertions(1);

        // Given
        const message = "A warning";
        const stack = "stacktrace";
        EventBus.$emit = jest.fn();
        await flushPromises();

        // When
        warnHandler({}, message, fakeVm, stack);

        // Then
        expect(EventBus.$emit).toHaveBeenCalledWith(UNHANDLED_ERROR_EVENT, {
            error: {
                name: "warning",
                message,
                stack,
            },
            vm: fakeVm,
            info: "warning",
        });
    });

    it("should log to console if options.logToConsole is set", async () => {
        expect.assertions(3);

        // Given
        const message = "A warning";
        const stack = "stacktrace";
        EventBus.$emit = jest.fn();
        await flushPromises();

        // When
        warnHandler({ logToConsole: true }, message, fakeVm, stack);

        // Then
        expect(console.error).not.toHaveBeenCalled();
        expect(console.warn).toHaveBeenCalledTimes(1);
        expect(console.warn).toHaveBeenCalledWith("Warning:", message, stack);
    });

    it("should not log to console unless options.logToConsole is set", async () => {
        expect.assertions(2);

        // Given
        const message = "A warning";
        const stack = "stacktrace";
        EventBus.$emit = jest.fn();
        await flushPromises();

        // When
        warnHandler({ logToConsole: false }, message, fakeVm, stack);

        // Then
        expect(console.error).not.toHaveBeenCalled();
        expect(console.warn).not.toHaveBeenCalled();
    });
});
