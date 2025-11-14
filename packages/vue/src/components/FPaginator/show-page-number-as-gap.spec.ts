import { showPageNumberAsGap } from "./show-page-number-as-gap";

describe("show page number as gap", () => {
    it.each`
        pages              | gapForSecondPage | gapForSecondToLastPage
        ${[1]}             | ${false}         | ${false}
        ${[1, 2]}          | ${false}         | ${false}
        ${[1, 3]}          | ${true}          | ${true}
        ${[1, 2, 3]}       | ${false}         | ${false}
        ${[1, 3, 4]}       | ${true}          | ${false}
        ${[1, 2, 4]}       | ${false}         | ${true}
        ${[1, 3, 5]}       | ${true}          | ${true}
        ${[1, 2, 3, 4]}    | ${false}         | ${false}
        ${[1, 3, 4, 5]}    | ${true}          | ${false}
        ${[1, 2, 3, 5]}    | ${false}         | ${true}
        ${[1, 3, 4, 6]}    | ${true}          | ${true}
        ${[1, 2, 3, 4, 5]} | ${false}         | ${false}
        ${[1, 3, 4, 5, 6]} | ${true}          | ${false}
        ${[1, 2, 3, 4, 6]} | ${false}         | ${true}
        ${[1, 3, 4, 5, 7]} | ${true}          | ${true}
    `(
        "check gaps for pages: $pages",
        ({ pages, gapForSecondPage, gapForSecondToLastPage }) => {
            pages.forEach((page: number, id: number) => {
                // Get gap status
                const isGap = showPageNumberAsGap({ page, pages });

                // Get expected gap status
                const isSecondPage = id === 1;
                const isSecondToLastPage = id === pages.length - 2;
                const expectedGap =
                    (isSecondPage && gapForSecondPage) ||
                    (isSecondToLastPage && gapForSecondToLastPage);

                // Check gap
                expect(isGap).toEqual(expectedGap);
            });
        },
    );
});
