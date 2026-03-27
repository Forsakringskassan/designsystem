import { stringifyObject } from "./stringify-object";

it("should stringify object", () => {
    expect(
        stringifyObject({
            title: "foo",
            id: 42,
            active: true,
            options: ["bar", "baz"],
            func: () => "hello func",
            actions: [
                { prop1: "value1" },
                { prop2: "value2" },
                { func: () => "array func" },
            ],
        }),
    ).toMatchInlineSnapshot(
        `"{ title: 'foo', id: 42, active: true, options: ['bar', 'baz'], func: () => 'hello func', actions: [{ prop1: 'value1' }, { prop2: 'value2' }, { func: () => 'array func' }] }"`,
    );
});
