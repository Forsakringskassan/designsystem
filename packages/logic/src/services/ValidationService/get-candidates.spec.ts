import { expect, it } from "vitest";
import { getCandidates } from "./get-candidates";

it("should return validator when no combined validators or type", () => {
    expect.assertions(1);
    expect(getCandidates("foo", [])).toMatchObject(["foo"]);
});

it("should return prioritized list when combined validators", () => {
    expect.assertions(1);
    expect(
        getCandidates("foo", [{ name: "bar" }, { name: "baz" }]),
    ).toMatchObject(["foo.bar", "foo.baz", "foo"]);
});

it("should return prioritized list when type", () => {
    expect.assertions(1);
    expect(getCandidates("foo", [], "select")).toMatchObject([
        "foo.select",
        "foo",
    ]);
});

it("should return prioritized list when combined validators and type", () => {
    expect.assertions(1);
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
