import "html-validate/jest";
import { sort } from "./FSortFilterSorter";

describe("FSortFilterSorter", () => {
    it("should sort alphabetically", () => {
        const data = [
            { text: "aAc" },
            { text: "aba" },
            { text: "Aab" },
            { text: "bbb" },
        ];
        const result = sort(data, "text", true);
        expect(result[0].text).toBe("Aab");
        expect(result[1].text).toBe("aAc");
        expect(result[2].text).toBe("aba");
        expect(result[3].text).toBe("bbb");
    });

    it("should sort numerically", () => {
        const data = [
            { number: 9.01 },
            { number: 0 },
            { number: 9 },
            { number: 2 },
            { number: 100 },
        ];
        const result = sort(data, "number", true);
        expect(result[0].number).toBe(0);
        expect(result[1].number).toBe(2);
        expect(result[2].number).toBe(9);
        expect(result[3].number).toBe(9.01);
        expect(result[4].number).toBe(100);
    });

    it("should sort booleans", () => {
        const data = [
            { val: false },
            { val: true },
            { val: true },
            { val: false },
        ];
        const result = sort(data, "val", true);
        expect(result[0].val).toBe(false);
        expect(result[1].val).toBe(false);
        expect(result[2].val).toBe(true);
        expect(result[3].val).toBe(true);
    });

    it("should sort data containing null or undefined values", () => {
        const data = [{ val: "bbb" }, { val: null }, {}, { val: "aaa" }];
        let result = sort(data, "val", true);
        expect(result[0].val).toBe("aaa");
        expect(result[1].val).toBe("bbb");
        expect(result[2].val).toBeNull();
        expect(result[3].val).toBeUndefined();

        result = sort(data, "val", false);
        expect(result[0].val).toBe("bbb");
        expect(result[1].val).toBe("aaa");
        expect(result[2].val).toBeNull();
        expect(result[3].val).toBeUndefined();
    });

    it("should trow error when trying to sort objects", () => {
        const data = [{ myObject: { number: 1 } }, { myObject: { number: 2 } }];
        expect(() => sort(data, "myObject", true)).toThrow(
            `Sorting is only supported for types number, string and boolean.
            Attribute 'myObject' comparsion of types 'object' and 'object' is not supported.`,
        );
    });

    it("should sort type string first if mixed types", () => {
        const data = [
            { val: 2 },
            { val: 3 },
            { val: "two" },
            { val: "one" },
            { val: 1 },
        ];
        const result = sort(data, "val", true);
        expect(result[0].val).toBe("one");
        expect(result[1].val).toBe("two");
        expect(result[2].val).toBe(1);
        expect(result[3].val).toBe(2);
        expect(result[4].val).toBe(3);
    });

    it("shold throw error for unhandled types", () => {
        interface CustomType {
            a: string;
            b: number;
        }
        const unsupportedType: CustomType = { a: "one", b: 1 };
        const data = [{ val: 1 }, { val: "text" }, { val: unsupportedType }];

        expect(() => sort(data, "val", true)).toThrow(
            `Sorting is only supported for types number, string and boolean.
            Attribute 'val' comparsion of types 'object' and 'string' is not supported.`,
        );
    });
});
