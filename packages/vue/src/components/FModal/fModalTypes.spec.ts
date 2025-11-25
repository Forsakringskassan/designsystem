import { fModalTypeClass } from "./fModalTypes";

describe("should return correct class for", () => {
    it.each`
        type             | expected
        ${"information"} | ${"modal--information"}
        ${"warning"}     | ${"modal--warning"}
        ${"error"}       | ${"modal--error"}
    `("$type", ({ type, expected }) => {
        expect.assertions(1);
        expect(fModalTypeClass(type)).toEqual([expected]);
    });
});

it("should return empty array if type is empty", () => {
    expect.assertions(1);
    expect(fModalTypeClass("")).toEqual([]);
});
