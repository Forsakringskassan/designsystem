import { type Mock, beforeEach, expect, it, vi } from "vitest";
import { debounce } from "./debounce";

let func: Mock;
let debouncedFunction: () => void;

beforeEach(() => {
    func = vi.fn();
    debouncedFunction = debounce(func, 100);
});

it("should call function after delay-period", () => {
    vi.useFakeTimers();

    debouncedFunction();
    expect(func).not.toHaveBeenCalled();

    vi.advanceTimersByTime(50);
    expect(func).not.toHaveBeenCalled();

    vi.advanceTimersByTime(50);
    expect(func).toHaveBeenCalledTimes(1);
});

it("should only call function once and delayed if debouncedFunction is called during delay-period", () => {
    vi.useFakeTimers();

    debouncedFunction();
    expect(func).not.toHaveBeenCalled();

    vi.advanceTimersByTime(50);
    expect(func).not.toHaveBeenCalled();

    debouncedFunction();

    vi.advanceTimersByTime(50);
    expect(func).not.toHaveBeenCalled();

    vi.advanceTimersByTime(50);
    expect(func).toHaveBeenCalledTimes(1);
});

it("should call function before timeout with immediate set to true", () => {
    vi.useFakeTimers();

    debouncedFunction = debounce(func, 100, true);

    debouncedFunction();
    expect(func).toHaveBeenCalled();
    expect(func).toHaveBeenCalledTimes(1);

    vi.advanceTimersByTime(50);
    expect(func).toHaveBeenCalledTimes(1);

    vi.advanceTimersByTime(50);
    expect(func).toHaveBeenCalledTimes(1);
});
