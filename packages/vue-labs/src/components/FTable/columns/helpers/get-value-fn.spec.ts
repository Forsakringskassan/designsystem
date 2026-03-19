import { getValueFn } from "./get-value-fn";

interface TableRow {
    id: string;
    text: string;
}

describe("getValueFn()", () => {
    it("should return and call provided value-function", () => {
        const valueFnMock = jest.fn((_row: TableRow): string => {
            return "myValue";
        });

        const rows: TableRow[] = [
            {
                id: "1",
                text: "aaa",
            },
            {
                id: "2",
                text: "bbb",
            },
        ];
        const myValueFn = getValueFn<TableRow, string>(
            valueFnMock,
            undefined,
            String,
            "",
        );
        const value = myValueFn(rows[0]);
        expect(value).toBe("myValue");
        expect(valueFnMock).toHaveBeenCalledWith({
            id: "1",
            text: "aaa",
        });
    });

    it("should create and call created value-function", () => {
        const rows: TableRow[] = [
            {
                id: "1",
                text: "aaa",
            },
            {
                id: "2",
                text: "bbb",
            },
        ];
        const myValueFn = getValueFn<TableRow, string>(
            undefined,
            "text",
            String,
            "",
        );
        const value = myValueFn(rows[0]);
        expect(value).toBe("aaa");
    });

    it("should return a function that returns the default value, when fn and key is undefined", () => {
        const rows: TableRow[] = [
            {
                id: "1",
                text: "aaa",
            },
            {
                id: "2",
                text: "bbb",
            },
        ];
        const myValueFn = getValueFn<TableRow, string>(
            undefined,
            undefined,
            String,
            "my default value",
        );
        const value = myValueFn(rows[0]);
        expect(value).toBe("my default value");
    });
});
