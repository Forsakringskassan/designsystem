import { getSortable } from "./get-sortable";

describe("getSortable()", () => {
    it("should return key when sort is true and key is provided", () => {
        const column = { sort: true, key: "name" };
        const sortable = getSortable(column);
        expect(sortable).toBe("name");
    });

    it("should return null when sort is true but no key is provided", () => {
        const column = { sort: true as const };
        const sortable = getSortable<{ foo?: string }>(column);
        expect(sortable).toBeNull();
    });

    it("should return null when sort is false even if key is provided", () => {
        const column = { sort: false, key: 123 };
        const sortable = getSortable(column);
        expect(sortable).toBeNull();
    });

    it("should default to true when sort is undefined and key exists", () => {
        const column = { key: "id" };
        const sortable = getSortable(column);
        expect(sortable).toBe("id");
    });

    it("should default to false when sort is undefined and no key is provided", () => {
        const column: { sort?: boolean; key?: string } = {};
        const sortable = getSortable(column);
        expect(sortable).toBeNull();
    });
});
