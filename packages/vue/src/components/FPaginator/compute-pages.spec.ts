import { computePages } from "./compute-pages";

describe("compute pages", () => {
    it.each`
        numberOfPages | maxPagesShown | currentPage | pages
        ${1}          | ${5}          | ${1}        | ${[1]}
        ${2}          | ${5}          | ${1}        | ${[1, 2]}
        ${3}          | ${5}          | ${1}        | ${[1, 2, 3]}
        ${4}          | ${5}          | ${1}        | ${[1, 2, 3, 4]}
        ${5}          | ${5}          | ${1}        | ${[1, 2, 3, 4, 5]}
        ${6}          | ${6}          | ${1}        | ${[1, 2, 3, 4, 5, 6]}
        ${7}          | ${7}          | ${1}        | ${[1, 2, 3, 4, 5, 6, 7]}
        ${8}          | ${8}          | ${1}        | ${[1, 2, 3, 4, 5, 6, 7, 8]}
        ${9}          | ${9}          | ${1}        | ${[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        ${9}          | ${8}          | ${5}        | ${[1, 2, 3, 4, 5, 6, 7, 9]}
        ${9}          | ${8}          | ${6}        | ${[1, 3, 4, 5, 6, 7, 8, 9]}
        ${9}          | ${7}          | ${4}        | ${[1, 2, 3, 4, 5, 6, 9]}
        ${9}          | ${7}          | ${5}        | ${[1, 3, 4, 5, 6, 7, 9]}
        ${9}          | ${7}          | ${6}        | ${[1, 4, 5, 6, 7, 8, 9]}
    `(
        'compute pages from list of $numberOfPages pages (max $maxPagesShown pages) with current page "$currentPage"',
        ({ numberOfPages, maxPagesShown, currentPage, pages }) => {
            // Compute pages
            const computedPages = computePages({
                numberOfPages,
                maxPagesShown,
                currentPage,
            });

            // Check pages
            expect(computedPages).toEqual(pages);
        },
    );
});
