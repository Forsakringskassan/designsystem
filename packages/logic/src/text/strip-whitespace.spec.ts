import { stripWhitespace } from "./strip-whitespace";

it("should remove space", () => {
    expect.assertions(1);
    expect(stripWhitespace("foo bar")).toBe("foobar");
});

it("should remove tab", () => {
    expect.assertions(1);
    expect(stripWhitespace("foo\tbar")).toBe("foobar");
});

it("should remove newline", () => {
    expect.assertions(1);
    expect(stripWhitespace("foo\r\nbar")).toBe("foobar");
});

it("should remove leading whitespace", () => {
    expect.assertions(1);
    expect(stripWhitespace(" foobar")).toBe("foobar");
});

it("should remove trailing whitespace", () => {
    expect.assertions(1);
    expect(stripWhitespace("foobar ")).toBe("foobar");
});

it("should remove multiple whitespace", () => {
    expect.assertions(1);
    expect(stripWhitespace("  foo  bar  ")).toBe("foobar");
});
