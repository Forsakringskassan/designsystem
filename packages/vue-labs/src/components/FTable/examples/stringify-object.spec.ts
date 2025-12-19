import { stringifyObject } from "./stringify-object";

it("should stringify object", () => {
    expect(
        stringifyObject({
            title: "foo",
            id: 42,
            active: true,
            options: ["bar", "baz"],
        }),
    ).toMatchInlineSnapshot(
        `"{ title: 'foo', id: 42, active: true, options: ['bar', 'baz'] }"`,
    );
});
