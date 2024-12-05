import { filterOptions } from "./filter-options";

it("should not filter options when select mode is true", () => {
    expect(filterOptions(["foo", "bar", "baz"], "f", true)).toEqual([
        "foo",
        "bar",
        "baz",
    ]);
});

it("should filter options when select mode is false", () => {
    expect(filterOptions(["foo", "bar", "baz"], "f", false)).toEqual(["foo"]);
});

it("should not filter options when filter is empty", () => {
    expect(filterOptions(["foo", "bar", "baz"], "", false)).toEqual([
        "foo",
        "bar",
        "baz",
    ]);
});

it("should ignore casing", () => {
    expect(filterOptions(["foo", "bar", "baz"], "Z", false)).toEqual(["baz"]);
});

it("should match exact", () => {
    expect(filterOptions(["foo", "bar", "baz"], "baz", false)).toEqual(["baz"]);
});

it("should match partial", () => {
    expect(filterOptions(["foo", "bar", "baz"], "a", false)).toEqual([
        "bar",
        "baz",
    ]);
});

it("should match none", () => {
    expect(filterOptions(["foo", "bar", "baz"], "c", false)).toEqual([]);
});
