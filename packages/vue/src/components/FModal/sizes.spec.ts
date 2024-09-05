import { sizeClass } from "./sizes";

describe("should return correct class for", () => {
    it.each`
        size           | expected
        ${"small"}     | ${"modal__dialog-container--small"}
        ${"large"}     | ${"modal__dialog-container--large"}
        ${"fullwidth"} | ${"modal__dialog-container--fullwidth"}
    `("$size", ({ size, expected }) => {
        expect.assertions(1);
        expect(sizeClass(size)).toEqual([expected]);
    });
});

it("should rewrite fullscreen to fullwidth", () => {
    expect.assertions(1);
    expect(sizeClass("fullscreen")).toEqual([
        "modal__dialog-container--fullwidth",
    ]);
});

it("should return empty array if size is empty", () => {
    expect.assertions(1);
    expect(sizeClass("")).toEqual([]);
});

it("should throw error on invalid sizes", () => {
    expect.assertions(1);
    expect(() => sizeClass("invalid")).toThrow(`"invalid" is not a valid size`);
});
