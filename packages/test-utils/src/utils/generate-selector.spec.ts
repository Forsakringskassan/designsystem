import { beforeEach, describe, expect, it } from "vitest";
import { generateSelector } from "./generate-selector";

describe("generateSelector (vitest)", () => {
    beforeEach(() => {
        document.body.innerHTML = "";
    });

    it("should generate selector", () => {
        document.body.innerHTML = "<div><p>lorem upsum</p></div>";
        const element = document.querySelector("p");
        expect(generateSelector(element)).toBe("html > body > div > p");
    });

    it("should handle detached elements", () => {
        const div = document.createElement("div");
        const p = document.createElement("p");
        div.append(p);
        expect(generateSelector(p)).toBe("div > p");
    });

    it("should handle null", () => {
        expect(generateSelector(null)).toBe("<null>");
    });

    it("should use id if possible", () => {
        document.body.innerHTML = '<div id="foo"><p>lorem upsum</p></div>';
        const element1 = document.querySelector("div");
        const element2 = document.querySelector("p");
        expect(generateSelector(element1)).toBe("#foo");
        expect(generateSelector(element2)).toBe("#foo > p");
    });

    it("should append classes where applicable", () => {
        document.body.innerHTML =
            '<div class="a"><p class="b c">lorem upsum</p></div>';
        const element1 = document.querySelector("div");
        const element2 = document.querySelector("p");
        expect(generateSelector(element1)).toBe("html > body > div.a");
        expect(generateSelector(element2)).toBe("html > body > div.a > p.b.c");
    });
});
