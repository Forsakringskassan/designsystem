import { expect, it } from "vitest";
import { type NestedStringRecord } from "../types";
import { flatten } from "./flatten";

it.each`
    src                                                               | expected
    ${{}}                                                             | ${{}}
    ${{ key: "value" }}                                               | ${{ key: "value" }}
    ${{ key: { key: "value" } }}                                      | ${{ "key.key": "value" }}
    ${{ key: { key: "value" }, another: { deep: { key: "value" } } }} | ${{ "key.key": "value", "another.deep.key": "value" }}
    ${{ "key.key": "value", "another.another": "value" }}             | ${{ "key.key": "value", "another.another": "value" }}
`(
    "should flatten $src to $expected",
    ({
        src,
        expected,
    }: {
        src: NestedStringRecord;
        expected: Record<string, string>;
    }) => {
        expect.assertions(1);
        const result = flatten(src);

        expect(result).toEqual(expected);
    },
);
