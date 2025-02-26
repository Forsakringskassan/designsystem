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
    it("should set value of provided `key`to item", () => {
        expect.assertions(2);

        const internalKey = getInternalKey();
        const items = [
            { id: "a", name: "foo" },
            { id: "b", name: "foo" },
        ];
        for (const item of items) {
            setInternalKey(item, item.id);
        }

        expect(items[0][internalKey]).toBe("a");
        expect(items[1][internalKey]).toBe("b");
    });
});

describe("`setInternalKeys`", () => {
    it("should throw error if value of `key` in item is not unique", async () => {
        expect.assertions(1);

        const items = [{ id: "a" }, { id: "b" }, { id: "b" }];

        expect(() => {
            setInternalKeys(items, "id");
        }).toThrowErrorMatchingInlineSnapshot(
            `"Expected each item to have key [id] with unique value but encountered duplicate of "b" in item index 2."`,
        );
    });

    it("should throw error if item is missing `key` property", async () => {
        expect.assertions(1);

        const items = [{ id: "a" }, { id: "b" }, { name: "foo" }];

        expect(() => {
            setInternalKeys(items, "id");
        }).toThrowErrorMatchingInlineSnapshot(
            `"Key [id] is missing or has invalid value in item index 2"`,
        );
    });

    it("should throw error if value of `key` is invalid in item", async () => {
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

    it("should not throw error if `key` is not provided", async () => {
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
