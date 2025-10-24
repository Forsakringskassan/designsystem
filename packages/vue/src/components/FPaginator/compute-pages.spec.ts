import { computePages } from "./compute-pages";

describe("compute pages", () => {
    it.each`
        numberOfPages | maxPagesShown | currentPage | pages
        ${1}          | ${9}          | ${1}        | ${[1]}
        ${2}          | ${9}          | ${1}        | ${[1, 2]}
        ${3}          | ${9}          | ${1}        | ${[1, 2, 3]}
        ${4}          | ${9}          | ${1}        | ${[1, 2, 3, 4]}
        ${5}          | ${9}          | ${1}        | ${[1, 2, 3, 4, 5]}
        ${6}          | ${9}          | ${1}        | ${[1, 2, 3, 4, 5, 6]}
        ${7}          | ${9}          | ${1}        | ${[1, 2, 3, 4, 5, 6, 7]}
        ${8}          | ${9}          | ${1}        | ${[1, 2, 3, 4, 5, 6, 7, 8]}
        ${9}          | ${9}          | ${1}        | ${[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        ${9}          | ${8}          | ${1}        | ${[1, 2, 3, 4, 5, 6, 7, 9]}
        ${9}          | ${8}          | ${2}        | ${[1, 2, 3, 4, 5, 6, 7, 9]}
        ${9}          | ${8}          | ${3}        | ${[1, 2, 3, 4, 5, 6, 7, 9]}
        ${9}          | ${8}          | ${4}        | ${[1, 2, 3, 4, 5, 6, 7, 9]}
        ${9}          | ${8}          | ${5}        | ${[1, 2, 3, 4, 5, 6, 7, 9]}
        ${9}          | ${8}          | ${6}        | ${[1, 3, 4, 5, 6, 7, 8, 9]}
        ${9}          | ${8}          | ${7}        | ${[1, 3, 4, 5, 6, 7, 8, 9]}
        ${9}          | ${8}          | ${8}        | ${[1, 3, 4, 5, 6, 7, 8, 9]}
        ${9}          | ${8}          | ${9}        | ${[1, 3, 4, 5, 6, 7, 8, 9]}
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
