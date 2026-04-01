import { getSize } from "./get-size";

interface Row {
    id: number;
    children?: Row[];
}

describe("getSize()", () => {
    it("should return the size of an array", () => {
        expect.assertions(1);
        const rows: Row[] = [{ id: 1 }, { id: 2 }, { id: 3 }];
        const result = getSize(rows, undefined);
        expect(result).toBe(3);
    });

    it("should return the size of an nested array", () => {
        expect.assertions(1);
        const rows: Row[] = [
            { id: 1, children: [{ id: 2 }, { id: 3 }] },
            { id: 4, children: [{ id: 5 }, { id: 6 }] },
            { id: 7, children: [{ id: 8 }, { id: 9 }] },
        ];
        const result = getSize(rows, "children");
        expect(result).toBe(9);
    });

    it("should handle deep nested arrays", () => {
        expect.assertions(1);
        const rows: Row[] = [
            {
                id: 1,
                children: [
                    {
                        id: 2,
                        children: [{ id: 3, children: [{ id: 4 }] }],
                    },
                ],
            },
        ];
        const result = getSize(rows, "children");
        expect(result).toBe(4);
    });
});
