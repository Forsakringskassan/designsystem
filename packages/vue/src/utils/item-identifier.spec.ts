import {
    findItemIdentifier,
    getItemIdentifier,
    resetGenerator,
    setItemIdentifier,
    setItemIdentifiers,
} from "./item-identifier";

beforeEach(() => {
    resetGenerator();
});

it("should not be enumerable", () => {
    expect.assertions(1);
    const item = { name: "foo" };
    setItemIdentifier(item, undefined);
    expect(Object.keys(item)).toMatchInlineSnapshot(`
            [
              "name",
            ]
        `);
});

it("should not have key by default", () => {
    expect.assertions(1);
    const item = { name: "foo" };
    expect(findItemIdentifier(item)).toBeUndefined();
});

describe("getItemIdentifier()", () => {
    it("should return previously set identifier", () => {
        expect.assertions(1);
        const item = { name: "foo" };
        setItemIdentifier(item, "1");
        expect(getItemIdentifier(item)).toBe("1");
    });

    it("should throw error when no identifier is set", () => {
        expect.assertions(1);
        const item = { name: "foo" };
        expect(() => {
            getItemIdentifier(item);
        }).toThrowErrorMatchingInlineSnapshot(
            `"Expected item to have an internal key but no key was set"`,
        );
    });
});

describe("findItemIdentifier()", () => {
    it("should return previously set identifier", () => {
        expect.assertions(1);
        const item = { name: "foo" };
        setItemIdentifier(item, "1");
        expect(findItemIdentifier(item)).toBe("1");
    });

    it("should return undefined when no identifier is set", () => {
        expect.assertions(1);
        const item = { name: "foo" };
        expect(findItemIdentifier(item)).toBeUndefined();
    });
});

describe("setItemIdentifier()", () => {
    it("should generate internal identifier when no specific identifier is provided", () => {
        expect.assertions(1);
        const item = { name: "foo" };
        setItemIdentifier(item);
        expect(getItemIdentifier(item)).toBeDefined();
    });

    it("should use specific identifier when provided", () => {
        expect.assertions(1);
        const item = { name: "foo", id: "a" };
        setItemIdentifier(item, item.id);
        expect(getItemIdentifier(item)).toBe("a");
    });

    it("should not overwrite existing identifier", () => {
        expect.assertions(1);
        const item = { name: "foo" };
        setItemIdentifier(item, 0);
        setItemIdentifier(item, 1);
        expect(getItemIdentifier(item)).toBe(0);
    });
});

describe("setItemIdentifiers()", () => {
    it("should generate internal identifiers on all items", () => {
        expect.assertions(2);
        const items = [{ name: "foo" }, { name: "bar" }];
        setItemIdentifiers(items);
        expect(getItemIdentifier(items[0])).toBeDefined();
        expect(getItemIdentifier(items[1])).toBeDefined();
    });

    it("should generate internal identifiers on all nested items", () => {
        expect.assertions(3);
        const items = [
            { name: "foo", nested: [{ name: "bar" }, { name: "baz" }] },
        ];
        setItemIdentifiers(items, undefined, "nested");
        expect(getItemIdentifier(items[0])).toBeDefined();
        expect(getItemIdentifier(items[0].nested[0])).toBeDefined();
        expect(getItemIdentifier(items[0].nested[1])).toBeDefined();
    });

    it("should use specific identifiers on all items when provided", () => {
        expect.assertions(2);
        const items = [
            { id: "a", name: "foo" },
            { id: "b", name: "bar" },
        ];
        setItemIdentifiers(items, "id");
        expect(getItemIdentifier(items[0])).toBe("a");
        expect(getItemIdentifier(items[1])).toBe("b");
    });

    it("should use specific identifiers on all nested items when provided", () => {
        expect.assertions(3);
        const items = [{ id: "1", nested: [{ id: "1a" }, { id: "1b" }] }];
        setItemIdentifiers(items, "id", "nested");
        expect(getItemIdentifier(items[0])).toBe("1");
        expect(getItemIdentifier(items[0].nested[0])).toBe("1a");
        expect(getItemIdentifier(items[0].nested[1])).toBe("1b");
    });

    it("should not overwrite existing identifier", () => {
        expect.assertions(5);
        const items = [
            { id: "a", name: "foo" },
            { id: "b", name: "bar" },
        ];
        setItemIdentifiers(items, "id");
        expect(getItemIdentifier(items[0])).toBe("a");
        expect(getItemIdentifier(items[1])).toBe("b");
        items.push({ id: "c", name: "baz" });
        setItemIdentifiers(items, "id");
        expect(getItemIdentifier(items[0])).toBe("a");
        expect(getItemIdentifier(items[1])).toBe("b");
        expect(getItemIdentifier(items[2])).toBe("c");
    });

    it("should throw error if specific identifier is not unique", () => {
        expect.assertions(1);
        const items = [{ id: "a" }, { id: "b" }, { id: "b" }];
        expect(() => {
            setItemIdentifiers(items, "id");
        }).toThrowErrorMatchingInlineSnapshot(
            `"Expected each item to have identifier [id] with unique value but encountered duplicate of "b" in item index 2."`,
        );
    });

    it("should throw error if item is missing specific identifier property", () => {
        expect.assertions(1);
        const items = [{ id: "a" }, { id: "b" }, { name: "foo" }];
        expect(() => {
            setItemIdentifiers(items, "id");
        }).toThrowErrorMatchingInlineSnapshot(
            `"Key [id] is missing or has invalid value in item index 2"`,
        );
    });

    it("should throw error if specific identifier is invalid", () => {
        expect.assertions(2);
        const itemsEmpty = [{ id: "a" }, { id: "b" }, { id: "" }];
        const itemsNull = [{ id: "a" }, { id: "b" }, { id: null }];
        expect(() => {
            setItemIdentifiers(itemsEmpty, "id");
        }).toThrowErrorMatchingInlineSnapshot(
            `"Key [id] is missing or has invalid value in item index 2"`,
        );
        expect(() => {
            setItemIdentifiers(itemsNull, "id");
        }).toThrowErrorMatchingInlineSnapshot(
            `"Key [id] is missing or has invalid value in item index 2"`,
        );
    });
});
