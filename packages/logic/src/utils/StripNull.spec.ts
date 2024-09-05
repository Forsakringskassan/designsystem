import { stripNull } from "./StripNull";

interface MockInterface {
    foo: string;
    bar?: string;
}

it("should handle string", () => {
    expect.assertions(1);
    expect(stripNull("foo")).toBe("foo");
});

it("should handle number", () => {
    expect.assertions(1);
    expect(stripNull(1)).toBe(1);
});

it("should handle array", () => {
    expect.assertions(1);
    expect(stripNull(["foo", 1, null])).toEqual(["foo", 1, undefined]);
});

it("should handle object", () => {
    expect.assertions(1);
    expect(stripNull({ foo: "spam", bar: 1, baz: null })).toEqual({
        foo: "spam",
        bar: 1,
    });
});

it("should handle deep object", () => {
    expect.assertions(1);
    const src = {
        foo: {
            fred: "flintstone",
            barney: null,
        },
        bar: {
            duck: ["huey", "dewey", "louie", null],
        },
    };
    expect(stripNull(src)).toEqual({
        foo: {
            fred: "flintstone",
        },
        bar: {
            duck: ["huey", "dewey", "louie", undefined],
        },
    });
});

it("should convert null to undefined", () => {
    expect.assertions(1);
    expect(stripNull(null)).toBeUndefined();
});

it("should not mutate object", () => {
    expect.assertions(2);
    const src = { foo: "spam", bar: 1, baz: null };
    const dst = stripNull(src);
    expect(src).toEqual({ foo: "spam", bar: 1, baz: null });
    expect(dst).toEqual({ foo: "spam", bar: 1 });
});

it("should retain type-safety", () => {
    expect.assertions(2);
    const src: MockInterface = {
        foo: "bar",
        bar: null as unknown as string,
    };
    const dst = stripNull(src);
    expect(dst.foo).toBe("bar");
    expect(dst.bar).toBeUndefined();
});
