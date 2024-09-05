import { generateSelector } from "./generate-selector";

beforeEach(() => {
    document.body.innerHTML = "";
});

it("should generate selector", () => {
    expect.assertions(1);
    document.body.innerHTML = /* HTML */ ` <div><p>lorem upsum</p></div> `;
    const element = document.querySelector("p");
    expect(generateSelector(element)).toBe("html > body > div > p");
});

it("should handle detached elements", () => {
    expect.assertions(1);
    const div = document.createElement("div");
    const p = document.createElement("p");
    div.appendChild(p);
    expect(generateSelector(p)).toBe("div > p");
});

it("should handle null", () => {
    expect.assertions(1);
    expect(generateSelector(null)).toBe("<null>");
});

it("should use id if possible", () => {
    expect.assertions(2);
    document.body.innerHTML = /* HTML */ `
        <div id="foo"><p>lorem upsum</p></div>
    `;
    const element1 = document.querySelector("div");
    const element2 = document.querySelector("p");
    expect(generateSelector(element1)).toBe("#foo");
    expect(generateSelector(element2)).toBe("#foo > p");
});

it("should append classes where applicable", () => {
    expect.assertions(2);
    document.body.innerHTML = /* HTML */ `
        <div class="a"><p class="b c">lorem upsum</p></div>
    `;
    const element1 = document.querySelector("div");
    const element2 = document.querySelector("p");
    expect(generateSelector(element1)).toBe("html > body > div.a");
    expect(generateSelector(element2)).toBe("html > body > div.a > p.b.c");
});
