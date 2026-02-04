import { EffectScope, effectScope, nextTick } from "vue";
import { getRowAriaData, isReactiveDataset, reactiveDataset } from "./row-meta";

interface Row {
    foo: number;
}

interface NestedRow extends Row {
    nested: Row[];
}

function formatRowMeta(row: Row): string {
    const meta = getRowAriaData(row);
    const indent = `    `.repeat(meta.ariaLevel - 1);
    return `${indent}row #${meta.ariaRowIndex} pos=(${meta.ariaPosInSet}/${meta.ariaSetSize}) value=${row.foo}`;
}

function formatRows(rows: Array<Row | NestedRow>): string {
    const flat = rows.reduce((result, it) => {
        const nested = "nested" in it ? it.nested : [];
        return [...result, it, ...nested];
    }, [] as Row[]);
    return flat.flatMap(formatRowMeta).join("\n");
}

expect.addSnapshotSerializer({
    test(value) {
        return typeof value === "string";
    },
    serialize(value) {
        return value;
    },
});

let scope: EffectScope;

beforeEach(() => {
    scope = effectScope();
});

afterEach(() => {
    scope.stop();
});

it("should add row metadata", () => {
    expect.assertions(4);
    const array = reactiveDataset<Row>([{ foo: 1 }, { foo: 2 }, { foo: 3 }]);
    expect(formatRows(array)).toMatchInlineSnapshot(`
        row #1 pos=(1/3) value=1
        row #2 pos=(2/3) value=2
        row #3 pos=(3/3) value=3
    `);
    expect(getRowAriaData(array[0])).toEqual({
        ariaRowIndex: 1,
        ariaLevel: 1,
        ariaSetSize: 3,
        ariaPosInSet: 1,
    });
    expect(getRowAriaData(array[1])).toEqual({
        ariaRowIndex: 2,
        ariaLevel: 1,
        ariaSetSize: 3,
        ariaPosInSet: 2,
    });
    expect(getRowAriaData(array[2])).toEqual({
        ariaRowIndex: 3,
        ariaLevel: 1,
        ariaSetSize: 3,
        ariaPosInSet: 3,
    });
});

it("should add row metadata with nested rows", () => {
    expect.assertions(7);
    const array = reactiveDataset<NestedRow>(
        [
            { foo: 1, nested: [] },
            { foo: 2, nested: [{ foo: 20 }, { foo: 21 }] },
            { foo: 3, nested: [{ foo: 30 }] },
        ],
        "nested",
    );
    expect(formatRows(array)).toMatchInlineSnapshot(`
        row #1 pos=(1/3) value=1
        row #2 pos=(2/3) value=2
            row #3 pos=(1/2) value=20
            row #4 pos=(2/2) value=21
        row #5 pos=(3/3) value=3
            row #6 pos=(1/1) value=30
    `);
    expect(getRowAriaData(array[0])).toEqual({
        ariaRowIndex: 1,
        ariaLevel: 1,
        ariaSetSize: 3,
        ariaPosInSet: 1,
    });
    expect(getRowAriaData(array[1])).toEqual({
        ariaRowIndex: 2,
        ariaLevel: 1,
        ariaSetSize: 3,
        ariaPosInSet: 2,
    });
    expect(getRowAriaData(array[1].nested[0])).toEqual({
        ariaRowIndex: 3,
        ariaLevel: 2,
        ariaSetSize: 2,
        ariaPosInSet: 1,
    });
    expect(getRowAriaData(array[1].nested[1])).toEqual({
        ariaRowIndex: 4,
        ariaLevel: 2,
        ariaSetSize: 2,
        ariaPosInSet: 2,
    });
    expect(getRowAriaData(array[2])).toEqual({
        ariaRowIndex: 5,
        ariaLevel: 1,
        ariaSetSize: 3,
        ariaPosInSet: 3,
    });
    expect(getRowAriaData(array[2].nested[0])).toEqual({
        ariaRowIndex: 6,
        ariaLevel: 2,
        ariaSetSize: 1,
        ariaPosInSet: 1,
    });
});

it("should handle insertion", async () => {
    expect.assertions(5);
    const array = reactiveDataset<Row>([{ foo: 1 }, { foo: 2 }, { foo: 3 }]);

    /* insert new row between 2 and 3 */
    scope.run(() => {
        array.splice(2, 0, { foo: 4 });
    });
    await nextTick();

    expect(formatRows(array)).toMatchInlineSnapshot(`
        row #1 pos=(1/4) value=1
        row #2 pos=(2/4) value=2
        row #3 pos=(3/4) value=4
        row #4 pos=(4/4) value=3
    `);
    expect(getRowAriaData(array[0])).toEqual(
        expect.objectContaining({
            ariaRowIndex: 1,
            ariaPosInSet: 1,
            ariaSetSize: 4,
        }),
    );
    expect(getRowAriaData(array[1])).toEqual(
        expect.objectContaining({
            ariaRowIndex: 2,
            ariaPosInSet: 2,
            ariaSetSize: 4,
        }),
    );
    expect(getRowAriaData(array[2])).toEqual(
        expect.objectContaining({
            ariaRowIndex: 3,
            ariaPosInSet: 3,
            ariaSetSize: 4,
        }),
    );
    expect(getRowAriaData(array[3])).toEqual(
        expect.objectContaining({
            ariaRowIndex: 4,
            ariaPosInSet: 4,
            ariaSetSize: 4,
        }),
    );
});

it("should handle insertion of nested row", async () => {
    expect.assertions(5);
    const array = reactiveDataset<NestedRow>(
        [
            { foo: 1, nested: [] },
            { foo: 2, nested: [] },
            { foo: 3, nested: [] },
        ],
        "nested",
    );

    /* add a nested row */
    scope.run(() => {
        array[1].nested.push({
            foo: 20,
        });
    });
    await nextTick();

    expect(formatRows(array)).toMatchInlineSnapshot(`
        row #1 pos=(1/3) value=1
        row #2 pos=(2/3) value=2
            row #3 pos=(1/1) value=20
        row #4 pos=(3/3) value=3
    `);
    expect(getRowAriaData(array[0])).toEqual(
        expect.objectContaining({
            ariaRowIndex: 1,
            ariaPosInSet: 1,
            ariaSetSize: 3,
        }),
    );
    expect(getRowAriaData(array[1])).toEqual(
        expect.objectContaining({
            ariaRowIndex: 2,
            ariaPosInSet: 2,
            ariaSetSize: 3,
        }),
    );
    expect(getRowAriaData(array[1].nested[0])).toEqual(
        expect.objectContaining({
            ariaRowIndex: 3,
            ariaPosInSet: 1,
            ariaSetSize: 1,
        }),
    );
    expect(getRowAriaData(array[2])).toEqual(
        expect.objectContaining({
            ariaRowIndex: 4,
            ariaPosInSet: 3,
            ariaSetSize: 3,
        }),
    );
});

it("should handle removal", async () => {
    expect.assertions(3);
    const array = reactiveDataset<Row>([{ foo: 1 }, { foo: 2 }, { foo: 3 }]);

    /* remove row 2 */
    scope.run(() => {
        array.splice(1, 1);
    });
    await nextTick();

    expect(formatRows(array)).toMatchInlineSnapshot(`
        row #1 pos=(1/2) value=1
        row #2 pos=(2/2) value=3
    `);
    expect(getRowAriaData(array[0])).toEqual(
        expect.objectContaining({
            ariaRowIndex: 1,
            ariaPosInSet: 1,
            ariaSetSize: 2,
        }),
    );
    expect(getRowAriaData(array[1])).toEqual(
        expect.objectContaining({
            ariaRowIndex: 2,
            ariaPosInSet: 2,
            ariaSetSize: 2,
        }),
    );
});

describe("isReactiveDataset", () => {
    it("should return true if array is reactive dataset", () => {
        const array = reactiveDataset<Row>([]);
        expect(isReactiveDataset(array)).toBeTruthy();
    });

    it("should return false if array is not reactive dataset", () => {
        const array: Row[] = [];
        expect(isReactiveDataset(array)).toBeFalsy();
    });
});
