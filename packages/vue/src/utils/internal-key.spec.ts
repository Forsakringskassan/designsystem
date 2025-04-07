import {
    setInternalKey,
    setInternalKeys,
    getInternalKey,
} from "./internal-key";

describe("`internalKey`", () => {
    it("should not be enumerable", () => {
        expect.assertions(1);

        const item = {
            name: "foo",
        };
        setInternalKey(item);

        expect(Object.keys(item)).toMatchInlineSnapshot(`
            [
              "name",
            ]
        `);
    });
});

describe("`setInternalKey`", () => {
    it("should set provided value for `internalKey` on item", () => {
        expect.assertions(2);

        const internalKey = getInternalKey();
        const items = [
            { id: "a", name: "foo" },
            { id: "b", name: "bar" },
        ];
        for (const item of items) {
            setInternalKey(item, item.id);
        }

        expect(items[0][internalKey]).toBe("a");
        expect(items[1][internalKey]).toBe("b");
    });

    it("should set `internalKey` on item if value not provided", () => {
        expect.assertions(2);

        const internalKey = getInternalKey();
        const items = [{ name: "foo" }, { name: "bar" }];
        for (const item of items) {
            setInternalKey(item);
        }

        expect(items[0]).toHaveProperty([internalKey]);
        expect(items[1]).toHaveProperty([internalKey]);
    });
});

describe("`setInternalKeys`", () => {
    it("should set value of provided `key` on all items", () => {
        expect.assertions(2);

        const internalKey = getInternalKey();
        const items = [
            { id: "a", name: "foo" },
            { id: "b", name: "bar" },
        ];
        setInternalKeys(items, "id");

        expect(items[0][internalKey]).toBe("a");
        expect(items[1][internalKey]).toBe("b");
    });

    it("should set `internalKey` on all items if `key` not provided", () => {
        expect.assertions(2);

        const internalKey = getInternalKey();
        const items = [{ name: "foo" }, { name: "bar" }];
        setInternalKeys(items);

        expect(items[0]).toHaveProperty([internalKey]);
        expect(items[1]).toHaveProperty([internalKey]);
    });

    it("should set value of `key` on nested items if `nestedKey` is provided", () => {
        expect.assertions(2);

        const internalKey = getInternalKey();
        const items = [{ id: "1", nested: [{ id: "1a" }, { id: "1b" }] }];
        const nestedItems = items[0].nested;
        setInternalKeys(items, "id", "nested");

        expect(nestedItems[0][internalKey]).toBe("1a");
        expect(nestedItems[1][internalKey]).toBe("1b");
    });

    it("should set `internalKey` on nested items if `key` not provided", () => {
        expect.assertions(2);

        const internalKey = getInternalKey();
        const items = [
            { name: "foo", nested: [{ name: "bar" }, { name: "baz" }] },
        ];
        const nestedItems = items[0].nested;
        setInternalKeys(items, undefined, "nested");

        expect(nestedItems[0]).toHaveProperty([internalKey]);
        expect(nestedItems[1]).toHaveProperty([internalKey]);
    });

    it("should throw error if value of `key` in item is not unique", () => {
        expect.assertions(1);

        const items = [{ id: "a" }, { id: "b" }, { id: "b" }];

        expect(() => {
            setInternalKeys(items, "id");
        }).toThrowErrorMatchingInlineSnapshot(
            `"Expected each item to have key [id] with unique value but encountered duplicate of "b" in item index 2."`,
        );
    });

    it("should throw error if item is missing `key` property", () => {
        expect.assertions(1);

        const items = [{ id: "a" }, { id: "b" }, { name: "foo" }];

        expect(() => {
            setInternalKeys(items, "id");
        }).toThrowErrorMatchingInlineSnapshot(
            `"Key [id] is missing or has invalid value in item index 2"`,
        );
    });

    it("should throw error if value of `key` is invalid in item", () => {
        expect.assertions(2);

        const itemsEmpty = [{ id: "a" }, { id: "b" }, { id: "" }];
        const itemsNull = [{ id: "a" }, { id: "b" }, { id: null }];

        expect(() => {
            setInternalKeys(itemsEmpty, "id");
        }).toThrowErrorMatchingInlineSnapshot(
            `"Key [id] is missing or has invalid value in item index 2"`,
        );
        expect(() => {
            setInternalKeys(itemsNull, "id");
        }).toThrowErrorMatchingInlineSnapshot(
            `"Key [id] is missing or has invalid value in item index 2"`,
        );
    });

    it("should not throw error if `key` is not provided", () => {
        expect.assertions(1);

        const items = [
            { id: "a" },
            { id: "a" },
            { id: "" },
            { id: null },
            { name: "b" },
        ];

        expect(() => {
            setInternalKeys(items);
        }).not.toThrow();
    });
});
