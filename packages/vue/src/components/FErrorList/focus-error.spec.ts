import logic from "@fkui/logic";
import { ErrorItem } from "../../types";
import { focusError } from "./focus-error";

jest.mock("@fkui/logic");

const mockElement = document.createElement("a");
const mockInput = document.createElement("input");
const scrollTo = jest.spyOn(logic, "scrollTo");
const focus = jest.spyOn(logic, "focus");

beforeAll(() => {
    mockElement.id = "foo";
    mockElement.href = "#";
    mockInput.id = "bar";
    document.body.appendChild(mockElement);
    document.body.appendChild(mockInput);
});

it("should scroll and move focus to element (by id)", () => {
    expect.assertions(2);
    const error: ErrorItem = {
        title: "Mock error",
        id: mockElement.id,
    };
    focusError(error);
    expect(scrollTo).toHaveBeenCalledWith(mockElement, expect.any(Number));
    expect(focus).toHaveBeenCalledWith(mockElement);
});

it("should prefer to focus on focusElementId if given", () => {
    expect.assertions(2);
    const scrollTo = jest.spyOn(logic, "scrollTo");
    const error: ErrorItem = {
        title: "Mock error",
        id: mockElement.id,
        focusElementId: mockInput.id,
    };
    focusError(error);
    expect(scrollTo).toHaveBeenCalledWith(mockElement, expect.any(Number));
    expect(focus).toHaveBeenCalledWith(mockInput);
});

it("should throw error when id element is missing", () => {
    const error: ErrorItem = {
        title: "Mock error",
        id: "missing",
    };
    expect(() => focusError(error)).toThrow(
        `Can not find element with id "missing"`,
    );
});

it("should fallback on id when focusElementId is missing", () => {
    expect.assertions(1);
    const error: ErrorItem = {
        title: "Mock error",
        id: mockElement.id,
        focusElementId: "missing",
    };
    focusError(error);
    expect(focus).toHaveBeenCalledWith(mockElement);
});
