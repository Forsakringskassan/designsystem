import { getUpdateFn } from "./get-update-fn";

interface TableRow {
    id: string;
    text: string;
}

describe("getUpdateFn()", () => {
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
