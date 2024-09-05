import { flatten } from "./flatten";

it.each`
    src                                                               | expected
    ${{}}                                                             | ${{}}
    ${{ key: "value" }}                                               | ${{ key: "value" }}
    ${{ key: { key: "value" } }}                                      | ${{ "key.key": "value" }}
    ${{ key: { key: "value" }, another: { deep: { key: "value" } } }} | ${{ "key.key": "value", "another.deep.key": "value" }}
    ${{ "key.key": "value", "another.another": "value" }}             | ${{ "key.key": "value", "another.another": "value" }}
`("should flatten $src to $expected", ({ src, expected }) => {
    const result = flatten(src);

    expect(result).toEqual(expected);
});
