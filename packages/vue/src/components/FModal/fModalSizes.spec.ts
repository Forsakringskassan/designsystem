import { fModalSizeClass } from "./fModalSizes";

describe("should return correct class for", () => {
    it.each`
        size           | expected
        ${"small"}     | ${"modal__dialog-container--small"}
        ${"large"}     | ${"modal__dialog-container--large"}
        ${"fullwidth"} | ${"modal__dialog-container--fullwidth"}
    `("$size", ({ size, expected }) => {
        expect.assertions(1);
        expect(fModalSizeClass(size)).toEqual([expected]);
    });
});

it("should rewrite fullscreen to fullwidth", () => {
    expect.assertions(1);
    expect(fModalSizeClass("fullscreen")).toEqual([
        "modal__dialog-container--fullwidth",
    ]);
});

it("should return empty array if size is empty", () => {
    expect.assertions(1);
    expect(fModalSizeClass("")).toEqual([]);
});
