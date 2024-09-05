import { debounce } from "./debounce";

let func: jest.Mock;
let debouncedFunction: () => void;

beforeEach(() => {
    func = jest.fn();
    debouncedFunction = debounce(func, 100);
});

it("should call function after delay-period", () => {
    jest.useFakeTimers();

    debouncedFunction();
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(50);
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(50);
    expect(func).toHaveBeenCalledTimes(1);
});

it("should only call function once and delayed if debouncedFunction is called during delay-period", () => {
    jest.useFakeTimers();

    debouncedFunction();
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(50);
    expect(func).not.toHaveBeenCalled();

    debouncedFunction();

    jest.advanceTimersByTime(50);
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(50);
    expect(func).toHaveBeenCalledTimes(1);
});

it("should call function before timeout with immediate set to true", () => {
    jest.useFakeTimers();

    debouncedFunction = debounce(func, 100, true);

    debouncedFunction();
    expect(func).toHaveBeenCalled();
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(50);
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(50);
    expect(func).toHaveBeenCalledTimes(1);
});
