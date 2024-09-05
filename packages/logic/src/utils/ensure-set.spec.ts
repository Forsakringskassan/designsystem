import { MissingValueError, ensureSet } from "./ensure-set";

it("should return value if it is defined", () => {
    // Given
    const value = { prop: "foo" };

    // When
    const result = ensureSet(value);

    // Then
    expect(result).toEqual(value);
});

it("should throw an error if value is not defined", () => {
    // Given
    const value: { prop: string } | undefined = undefined;

    // When
    const assurance = (): void => {
        ensureSet(value);
    };

    // Then
    expect(assurance).toThrow(MissingValueError);
});

it("should throw an error if value is null", () => {
    // Given
    const value: { prop: string } | null = null;

    // When
    const assurance = (): void => {
        ensureSet<{ prop: string } | null>(value);
    };

    // Then
    expect(assurance).toThrow(MissingValueError);
});

it("should throw an error, with message, if value is not set and message given", () => {
    //Given
    const value: { prop: string } | null = null;
    const message = "the message";

    // When
    const assurance = (): void => {
        ensureSet<{ prop: string } | null>(value, message);
    };

    // Then
    expect(assurance).toThrowErrorMatchingInlineSnapshot(`"the message"`);
});
