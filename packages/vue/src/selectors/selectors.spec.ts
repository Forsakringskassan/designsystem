import { XExampleSelectors } from "./XExample.selectors";

describe("with destructuring", () => {
    it("should return component selector", () => {
        expect.assertions(2);
        const root = `[data-test="foobar"]`;
        const { selector: withSelector } = XExampleSelectors(root);
        const { selector: withoutSelector } = XExampleSelectors();
        expect(withSelector).toBe(root);
        expect(withoutSelector).toBe(".example");
    });

    it("should return selector from method without parameters", () => {
        expect.assertions(1);
        const { label } = XExampleSelectors();
        expect(label()).toBe(".example .example__label");
    });

    it("should return selector from method with parameters", () => {
        expect.assertions(1);
        const { itemByName } = XExampleSelectors();
        expect(itemByName("foobar")).toBe(`.example > [data-item~="foobar"]`);
    });

    it("should return selector from internal method", () => {
        expect.assertions(1);
        const { secret } = XExampleSelectors();
        expect(secret()).toBe(".example .example__secret");
    });
});

describe("without destructuring", () => {
    it("should return selector", () => {
        expect.assertions(2);
        const root = `[data-test="foobar"]`;
        const withSelector = XExampleSelectors(root);
        const withoutSelector = XExampleSelectors();
        expect(withSelector.selector).toBe(root);
        expect(withoutSelector.selector).toBe(".example");
    });

    it("should return selector from method without parameters", () => {
        expect.assertions(1);
        const selectors = XExampleSelectors();
        expect(selectors.label()).toBe(".example .example__label");
    });

    it("should return selector from method with parameters", () => {
        expect.assertions(1);
        const selectors = XExampleSelectors();
        expect(selectors.itemByName("foobar")).toBe(
            `.example > [data-item~="foobar"]`,
        );
    });

    it("should return selector from internal method", () => {
        expect.assertions(1);
        const selectors = XExampleSelectors();
        expect(selectors.secret()).toBe(".example .example__secret");
    });
});
