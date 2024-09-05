import { deepClone } from "./deep-clone";

it("should return a deep clone", () => {
    const original = { value: new String("parent"), child: { value: "child" } };
    const clone = deepClone(original);

    expect(original === clone).toBeFalsy();
    expect(original.value === clone.value).toBeFalsy();
    expect(original.child === clone.child).toBeFalsy();
    expect(original.child.value === clone.child.value).toBeTruthy();
});

it.each`
    value        | description
    ${false}     | ${"boolean"}
    ${0}         | ${"number"}
    ${"0"}       | ${"string"}
    ${null}      | ${"null"}
    ${undefined} | ${"undefined"}
`("should copy primitive $description ($value)", ({ value }) => {
    const clone = deepClone(value);
    expect(value === clone).toBeTruthy();
});

class Person {
    protected internalName: string;

    public constructor(name: string) {
        this.internalName = name;
    }

    public get name(): string {
        return this.internalName;
    }
}

class Greeter extends Person {
    public getGreeting(salute: string = "Hello"): string {
        return `${salute} ${this.name}`;
    }
}

it.each`
    value                                | description
    ${["a", ""]}                         | ${"array"}
    ${{ "0": "a", length: 1 }}           | ${"array-like object"}
    ${new Boolean(false)}                | ${"boolean object"}
    ${new Date()}                        | ${"date object"}
    ${{ a: 0, b: 1, c: 2 }}              | ${"object"}
    ${{ a: /a/, b: ["B"], c: { C: 1 } }} | ${"object with object values"}
    ${new Map([["a", 1]])}               | ${"map"}
    ${new Set([1, 2, 3])}                | ${"set"}
    ${new Number(0)}                     | ${"number object"}
    ${new String("a")}                   | ${"string object"}
`("should clone $description ($value)", ({ value }) => {
    const clone = deepClone(value);
    expect(value === clone).toBeFalsy();
    expect(clone).toEqual(value);
    expect(typeof clone).toBe(typeof value);
});

it("should clone regular expression", () => {
    expect.assertions(4);
    const value = /a/gim;
    const clone = deepClone(value);
    expect(value === clone).toBeFalsy();
    expect(clone).toEqual(value);
    expect(clone.flags).toBe("gim");
    expect(clone.source).toBe("a");
});

it("should clone class instance", () => {
    expect.assertions(7);
    const value = new Greeter("Kalle Anka");
    const clone = deepClone(value);
    expect(clone).toBeInstanceOf(Person);
    expect(clone).toBeInstanceOf(Greeter);
    expect(clone).not.toBe(value);
    expect(clone).toEqual(value);
    expect(clone.constructor.name).toBe(value.constructor.name);
    expect(typeof value).toBe(typeof clone);
    expect(clone.getGreeting("Kvack kvack")).toBe("Kvack kvack Kalle Anka");
});

it("should keep reference to DOM node but not clone it", () => {
    expect.assertions(1);
    const element = document.createElement("div");
    const value = { element };
    const clone = deepClone(value);
    expect(value.element.isSameNode(clone.element)).toBeTruthy();
});

it("should not clone Error", () => {
    expect.assertions(1);
    const error = new Error("foobar");
    const value = { error };
    const clone = deepClone(value);
    expect(clone.error).toBe(value.error);
});

it("should replace function with empty object", () => {
    expect.assertions(1);
    function value(): void {
        /* do nothing */
    }
    const clone = deepClone(value);
    expect(clone).toEqual({});
});

it("should replace arrow with empty object function", () => {
    expect.assertions(1);
    const value = (): void => {
        /* do nothing */
    };
    const clone = deepClone(value);
    expect(clone).toEqual({});
});
