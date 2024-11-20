import { allowListValidator as validator } from "./AllowListValidator";

const element = document.createElement("input");
const config = { list: ["Foo", "Bar", "Baz"] };

describe("validation", () => {
    it("should be valid when list is undefined", () => {
        expect(validator.validation("Foo", element, {})).toBeTruthy();
    });

    it("should be valid when list is empty", () => {
        expect(validator.validation("Foo", element, { list: [] })).toBeTruthy();
    });

    it("should be valid when value is empty string", () => {
        expect(validator.validation("", element, config)).toBeTruthy();
    });

    it("should be invalid when no exact match in list", () => {
        expect(validator.validation("Lorem", element, config)).toBeFalsy();
    });

    it("should be invalid when case-sensitive partial match in list", () => {
        expect(validator.validation("az", element, config)).toBeFalsy();
    });

    it("should be invalid when no case-sensitive match in list", () => {
        expect(validator.validation("bar", element, config)).toBeFalsy();
    });

    it("should be valid when case-sensitive match in list", () => {
        expect(validator.validation("Bar", element, config)).toBeTruthy();
    });
});
