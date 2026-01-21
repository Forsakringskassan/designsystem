import { getFormattedValueFn } from "./get-value-fn";

interface TableRow {
    id: string;
    text: string;
}

describe("With formatter", () => {
    it("should return and call provided value-function with formatted value", () => {
        const valueFnMock = jest.fn((_row: TableRow): string => {
            return "myValue";
        });

        const formatterMock = jest.fn((value: string): string | undefined => {
            return value.toUpperCase();
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

        const myFormattedValueFn = getFormattedValueFn(
            valueFnMock,
            undefined,
            formatterMock,
            "my default value",
        );

        const value = myFormattedValueFn(rows[0]);
        expect(value).toBe("MYVALUE");
        expect(valueFnMock).toHaveBeenCalledWith({
            id: "1",
            text: "aaa",
        });
        expect(formatterMock).toHaveBeenCalledWith("myValue");
    });

    it("should return unformatted value from value-function if formatter returns undefined", () => {
        const valueFnMock = jest.fn((_row: TableRow): string => {
            return "myValue";
        });

        const formatterMock = jest.fn((_value: string): string | undefined => {
            return undefined;
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

        const myFormattedValueFn = getFormattedValueFn(
            valueFnMock,
            undefined,
            formatterMock,
            "my default value",
        );

        const value = myFormattedValueFn(rows[0]);
        expect(value).toBe("myValue");
        expect(valueFnMock).toHaveBeenCalledWith({
            id: "1",
            text: "aaa",
        });
        expect(formatterMock).toHaveBeenCalledWith("myValue");
    });

    it("should create and call value-function which returns formatted value", () => {
        const formatterMock = jest.fn((value: string): string | undefined => {
            return value.toUpperCase();
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

        const myFormattedValueFn = getFormattedValueFn(
            undefined,
            "text",
            formatterMock,
            "my default value",
        );

        const value = myFormattedValueFn(rows[0]);
        expect(value).toBe("AAA");
        expect(formatterMock).toHaveBeenCalledWith("aaa");
    });

    it("should create and call value-function which returns unformatted value when formatter returns undefined", () => {
        const formatterMock = jest.fn((_value: string): string | undefined => {
            return undefined;
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

        const myFormattedValueFn = getFormattedValueFn(
            undefined,
            "text",
            formatterMock,
            "my default value",
        );

        const value = myFormattedValueFn(rows[0]);
        expect(value).toBe("aaa");
        expect(formatterMock).toHaveBeenCalledWith("aaa");
    });

    it("should return a function that returns undefined, when fn and key is undefined", () => {
        const formatterMock = jest.fn((value: string): string | undefined => {
            return value.toUpperCase();
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

        const myFormattedValueFn = getFormattedValueFn(
            undefined,
            undefined,
            formatterMock,
            "my default value",
        );

        const value = myFormattedValueFn(rows[0]);
        expect(value).toBe("my default value");
        expect(formatterMock).toHaveBeenCalledTimes(0);
    });
});
