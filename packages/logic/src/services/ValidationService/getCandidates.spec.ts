import { getCandidates } from "./getCandidates";

it("should return validator when no combined validators or type", () => {
    expect(getCandidates("foo", [])).toMatchObject(["foo"]);
});

it("should return prioritized list when combined validators", () => {
    expect(
        getCandidates("foo", [{ name: "bar" }, { name: "baz" }]),
    ).toMatchObject(["foo.bar", "foo.baz", "foo"]);
});

it("should return prioritized list when type", () => {
    expect(getCandidates("foo", [], "select")).toMatchObject([
        "foo.select",
        "foo",
    ]);
});

it("should return prioritized list when combined validators and type", () => {
    expect(
        getCandidates("foo", [{ name: "bar" }, { name: "baz" }], "text"),
    ).toMatchObject([
        "foo.bar.text",
        "foo.baz.text",
        "foo.bar",
        "foo.baz",
        "foo.text",
        "foo",
    ]);
});
