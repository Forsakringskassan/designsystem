import {
    FTableColumnData,
    FTableColumnType,
    FTableColumnSize,
    FTableColumnSort,
    addColumn,
    setVisibilityColumn,
    updateSortOrder,
    setSortableColumns,
    getSortableIconName,
    getSortableIconClasses,
} from "./FTableColumnData";

function createColumns(sortable: boolean): FTableColumnData[] {
    let src: FTableColumnData[] = [];
    src = addColumn(src, {
        id: "column-test-id-1",
        name: "1",
        title: "a",
        size: FTableColumnSize.EXPAND,
        type: FTableColumnType.TEXT,
        visible: true,
        sortable: sortable,
        sort: FTableColumnSort.DESCENDING,
    });
    src = addColumn(src, {
        id: "column-test-id-2",
        name: "2",
        title: "b",
        size: FTableColumnSize.EXPAND,
        type: FTableColumnType.TEXT,
        visible: true,
        sortable: sortable,
        sort: FTableColumnSort.UNSORTED,
    });
    src = addColumn(src, {
        id: "column-test-id-3",
        name: "3",
        title: "c",
        size: FTableColumnSize.EXPAND,
        type: FTableColumnType.TEXT,
        visible: true,
        sortable: sortable,
        sort: FTableColumnSort.UNSORTED,
    });
    return src;
}

describe("addColumn()", () => {
    it("should add column", () => {
        expect.assertions(1);
        const src: FTableColumnData[] = [];
        const dst = addColumn(src, {
            id: "column-test-id-1",
            name: "1",
            title: "foo",
            size: FTableColumnSize.EXPAND,
            type: FTableColumnType.TEXT,
            visible: true,
            sortable: false,
            sort: FTableColumnSort.UNSORTED,
        });
        expect(dst).toEqual([
            {
                id: "column-test-id-1",
                name: "1",
                title: "foo",
                size: FTableColumnSize.EXPAND,
                type: FTableColumnType.TEXT,
                visible: true,
                sortable: false,
                sort: FTableColumnSort.UNSORTED,
            },
        ]);
    });

    it("should throw error if name already exists", () => {
        expect.assertions(1);
        const src: FTableColumnData[] = [
            {
                id: "column-test-id-1",
                name: "1",
                title: "foo",
                size: FTableColumnSize.EXPAND,
                type: FTableColumnType.TEXT,
                visible: true,
                sortable: false,
                sort: FTableColumnSort.UNSORTED,
            },
        ];
        expect(() => {
            addColumn(src, {
                id: "column-test-id-1",
                name: "1",
                title: "bar",
                size: FTableColumnSize.EXPAND,
                type: FTableColumnType.NUMERIC,
                visible: true,
                sortable: false,
                sort: FTableColumnSort.UNSORTED,
            });
        }).toThrowErrorMatchingInlineSnapshot(
            `"Expected FTableColumn to have a unique name but encountered duplicate of "1""`,
        );
    });
});

it("should hide column", async () => {
    expect.assertions(1);
    const src: FTableColumnData[] = [
        {
            id: "column-test-id-1",
            name: "1",
            title: "foo",
            size: FTableColumnSize.EXPAND,
            type: FTableColumnType.TEXT,
            visible: true,
            sortable: false,
            sort: FTableColumnSort.UNSORTED,
        },
    ];
    setVisibilityColumn(src, "column-test-id-1", false);

    expect(src).toEqual([
        {
            id: "column-test-id-1",
            name: "1",
            title: "foo",
            size: FTableColumnSize.EXPAND,
            type: FTableColumnType.TEXT,
            visible: false,
            sortable: false,
            sort: FTableColumnSort.UNSORTED,
        },
    ]);
});

describe("updateSort()", () => {
    it("should update sort order", () => {
        expect.assertions(1);
        const columns = createColumns(true);
        updateSortOrder(columns, "2", true);
        expect(columns).toEqual([
            {
                id: "column-test-id-1",
                name: "1",
                title: "a",
                size: FTableColumnSize.EXPAND,
                type: FTableColumnType.TEXT,
                visible: true,
                sortable: true,
                sort: FTableColumnSort.UNSORTED,
            },
            {
                id: "column-test-id-2",
                name: "2",
                title: "b",
                size: FTableColumnSize.EXPAND,
                type: FTableColumnType.TEXT,
                visible: true,
                sortable: true,
                sort: FTableColumnSort.ASCENDING,
            },
            {
                id: "column-test-id-3",
                name: "3",
                title: "c",
                size: FTableColumnSize.EXPAND,
                type: FTableColumnType.TEXT,
                visible: true,
                sortable: true,
                sort: FTableColumnSort.UNSORTED,
            },
        ]);
    });
});

describe("setSortableColumns()", () => {
    it("should set sortable columns", () => {
        expect.assertions(1);
        const columns = createColumns(false);
        setSortableColumns(columns, ["1", "3"]);
        expect(columns).toEqual([
            {
                id: "column-test-id-1",
                name: "1",
                title: "a",
                size: FTableColumnSize.EXPAND,
                type: FTableColumnType.TEXT,
                visible: true,
                sortable: true,
                sort: FTableColumnSort.DESCENDING,
            },
            {
                id: "column-test-id-2",
                name: "2",
                title: "b",
                size: FTableColumnSize.EXPAND,
                type: FTableColumnType.TEXT,
                visible: true,
                sortable: false,
                sort: FTableColumnSort.UNSORTED,
            },
            {
                id: "column-test-id-3",
                name: "3",
                title: "c",
                size: FTableColumnSize.EXPAND,
                type: FTableColumnType.TEXT,
                visible: true,
                sortable: true,
                sort: FTableColumnSort.UNSORTED,
            },
        ]);
    });
});

describe("getSortableIconName()", () => {
    it("should get sortable icon name", () => {
        const column: FTableColumnData = {
            id: "column-test-id-1",
            name: "1",
            title: "a",
            size: FTableColumnSize.EXPAND,
            type: FTableColumnType.TEXT,
            visible: true,
            sortable: true,
            sort: FTableColumnSort.DESCENDING,
        };
        expect(getSortableIconName(column)).toBe("caret-down");
        column.sort = FTableColumnSort.ASCENDING;
        expect(getSortableIconName(column)).toBe("caret-up");
        column.sort = FTableColumnSort.UNSORTED;
        expect(getSortableIconName(column)).toBe("sort");
    });
});

describe("getSortableIconClasses()", () => {
    it("should get sortable icon classes", () => {
        const column: FTableColumnData = {
            id: "column-test-id-1",
            name: "1",
            title: "a",
            size: FTableColumnSize.EXPAND,
            type: FTableColumnType.TEXT,
            visible: true,
            sortable: true,
            sort: FTableColumnSort.DESCENDING,
        };
        expect(getSortableIconClasses(column)).toMatchInlineSnapshot(`
            [
              "table__column__header__icon",
            ]
        `);
        column.sort = FTableColumnSort.ASCENDING;
        expect(getSortableIconClasses(column)).toMatchInlineSnapshot(`
            [
              "table__column__header__icon",
            ]
        `);
        column.sort = FTableColumnSort.UNSORTED;
        expect(getSortableIconClasses(column)).toMatchInlineSnapshot(`
            [
              "table__column__header__icon",
              "table__column__header__icon--discrete",
            ]
        `);
    });
});
