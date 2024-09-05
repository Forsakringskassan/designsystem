import { TranslationService } from "./TranslationService";

/* eslint-disable-next-line no-console -- technical debt, bad practice and
 * console is not restored so it leaks to other tests, should use jest.spyOn(..)
 * at least and for tests expected to log should have explicit tests for this */
console.log = jest.fn();

describe("translate", () => {
    it("should throw error if translate function is unset and no proper default value is passed", () => {
        expect.assertions(1);
        expect(() =>
            TranslationService.provider.translate("someKey"),
        ).toThrowErrorMatchingInlineSnapshot(
            `"Translation failed: No default value specified (key translation is not supported by the default provider)"`,
        );
    });

    it.each`
        defaultValue                                                 | args                          | expected
        ${"Du har {{count}} notifiering"}                            | ${{ count: 1 }}               | ${"Du har 1 notifiering"}
        ${"Du har {{ count}} notifieringar"}                         | ${{ count: 2 }}               | ${"Du har 2 notifieringar"}
        ${"Du har {{count }} notifieringar"}                         | ${{ count: 3 }}               | ${"Du har 3 notifieringar"}
        ${"Du har {{ count }} notifieringar"}                        | ${{ count: 4 }}               | ${"Du har 4 notifieringar"}
        ${"Du har {{  count  }} notifieringar"}                      | ${{ count: 5 }}               | ${"Du har 5 notifieringar"}
        ${"Du har läst {{ reviewed }} av {{ total }} notifieringar"} | ${{ reviewed: 6, total: 10 }} | ${"Du har läst 6 av 10 notifieringar"}
    `(
        'should translate default "$defaultValue" with args "$args" as "$expected"',
        ({ defaultValue, args, expected }) => {
            expect(
                TranslationService.provider.translate(
                    "someKey",
                    defaultValue,
                    args,
                ),
            ).toBe(expected);
        },
    );
});
