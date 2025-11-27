import { showPageNumberAsGap } from "./show-page-number-as-gap";

describe("show page number as gap", () => {
    describe.each`
        pages              | expectedPageNumbers
        ${[1]}             | ${["1"]}
        ${[1, 2]}          | ${["1", "2"]}
        ${[1, 2, 3]}       | ${["1", "2", "3"]}
        ${[1, 2, 3, 4]}    | ${["1", "2", "3", "4"]}
        ${[1, 2, 3, 4, 5]} | ${["1", "2", "3", "4", "5"]}
        ${[1, 3, 4, 5, 6]} | ${["1", "...", "4", "5", "6"]}
        ${[1, 2, 3, 4, 6]} | ${["1", "2", "3", "...", "6"]}
        ${[1, 3, 4, 5, 7]} | ${["1", "...", "4", "...", "7"]}
    `(
        'should return page numbers "$expectedPageNumbers" for pages "$pages"',
        ({ pages, expectedPageNumbers }) => {
            pages.forEach((page: number, id: number) => {
                const gap = showPageNumberAsGap({
                    page,
                    pages,
                });
                const expectedGap = expectedPageNumbers[id] === "...";

                it(`should show page ${page} as "${expectedPageNumbers[id]}"`, () => {
                    expect(gap).toEqual(expectedGap);
                });
            });
        },
    );
});
