import { getParsedUpdateFn, getUpdateFn } from "./get-update-fn";

interface TableRow {
    id: string;
    text: string;
}

describe("Without parser", () => {
    it("should return and call provided update-function", () => {
        const fnMock = jest.fn(
            (_row: TableRow, _newValue: string, _oldValue: string) => {
                /* empty */
            },
        );

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
        const myUpdateFn = getUpdateFn(fnMock, undefined);
        myUpdateFn(rows[0], "ccc", "ddd");
        expect(fnMock).toHaveBeenNthCalledWith(1, rows[0], "ccc", "ddd");
    });

    it("should create and call created update-function", () => {
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
        const key = "text";
        const myUpdateFn = getUpdateFn<TableRow, string, keyof TableRow>(
            undefined,
            key,
        );
        myUpdateFn(rows[0], "new value", "aaa");
        expect(rows).toStrictEqual([
            {
                id: "1",
                text: "new value",
            },
            {
                id: "2",
                text: "bbb",
            },
        ]);
    });

    it("should return a function that returns undefined, when fn and key is undefined", () => {
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
        const myUpdateFn = getUpdateFn(undefined, undefined);

        expect(myUpdateFn(rows[0], "new value", "aaa")).toBeUndefined();

        //rows should be untouched
        expect(rows).toStrictEqual([
            {
                id: "1",
                text: "aaa",
            },
            {
                id: "2",
                text: "bbb",
            },
        ]);
    });
});

describe("With parser", () => {
    it("should return and call provided update-function with parsed value", () => {
        const fnMock = jest.fn(
            (_row: TableRow, _newValue: string, _oldValue: string) => {
                /* empty */
            },
        );

        const parserMock = jest.fn((value: string) => {
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
        const myParsedUpdateFn = getParsedUpdateFn(
            fnMock,
            undefined,
            parserMock,
        );
        myParsedUpdateFn(rows[0], "ccc", "ddd");
        expect(parserMock).toHaveBeenNthCalledWith(1, "ccc");
        expect(parserMock).toHaveBeenNthCalledWith(2, "ddd");
        expect(fnMock).toHaveBeenNthCalledWith(1, rows[0], "CCC", "DDD");
    });

    it("should call provided update function with unparsed value if parser returns undefined", () => {
        const fnMock = jest.fn(
            (_row: TableRow, _newValue: string, _oldValue: string) => {
                /* empty */
            },
        );

        const parserMock = jest.fn((_value: string) => {
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
        const myParsedUpdateFn = getParsedUpdateFn(
            fnMock,
            undefined,
            parserMock,
        );
        myParsedUpdateFn(rows[0], "ccc", "ddd");
        expect(parserMock).toHaveBeenNthCalledWith(1, "ccc");
        expect(parserMock).toHaveBeenNthCalledWith(2, "ddd");
        expect(fnMock).toHaveBeenNthCalledWith(1, rows[0], "ccc", "ddd");
    });

    it("should create and call update-function with parsed value", () => {
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
        const parserMock = jest.fn((value: string) => {
            return value.toUpperCase();
        });
        const key = "text";
        const myParsedUpdateFn = getParsedUpdateFn<TableRow, keyof TableRow>(
            undefined,
            key,
            parserMock,
        );
        myParsedUpdateFn(rows[0], "new value", "aaa");
        expect(parserMock).toHaveBeenNthCalledWith(1, "new value");
        expect(rows).toStrictEqual([
            {
                id: "1",
                text: "NEW VALUE",
            },
            {
                id: "2",
                text: "bbb",
            },
        ]);
    });

    it("should create and call update-function with unparsed value if parser returns undefined", () => {
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
        const parserMock = jest.fn((_value: string) => {
            return undefined;
        });
        const key = "text";
        const myParsedUpdateFn = getParsedUpdateFn<TableRow, keyof TableRow>(
            undefined,
            key,
            parserMock,
        );
        myParsedUpdateFn(rows[0], "new value", "aaa");
        expect(parserMock).toHaveBeenNthCalledWith(1, "new value");
        expect(rows).toStrictEqual([
            {
                id: "1",
                text: "new value",
            },
            {
                id: "2",
                text: "bbb",
            },
        ]);
    });

    it("should return a function that returns undefined, when fn and key is undefined", () => {
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

        const parserMock = jest.fn((value: string) => {
            return value.toUpperCase();
        });

        const myParsedUpdateFn = getParsedUpdateFn(
            undefined,
            undefined,
            parserMock,
        );

        expect(myParsedUpdateFn(rows[0], "new value", "aaa")).toBeUndefined();
        expect(parserMock).toHaveBeenCalledTimes(0);

        //rows should be untouched
        expect(rows).toStrictEqual([
            {
                id: "1",
                text: "aaa",
            },
            {
                id: "2",
                text: "bbb",
            },
        ]);
    });
});
