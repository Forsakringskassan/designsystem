import { maxPagesShown, pageClasses } from "./FPaginator.logic";

describe("maxPagesShown", () => {
    it.each`
        numbersOfPagesToShow | expectedMaxPagesShown
        ${4}                 | ${5}
        ${5}                 | ${5}
        ${6}                 | ${6}
        ${7}                 | ${7}
        ${8}                 | ${8}
        ${9}                 | ${9}
        ${10}                | ${9}
    `(
        "should return the maximum number of pages shown",
        ({ numbersOfPagesToShow, expectedMaxPagesShown }) => {
            const maximumNumberOfPages = maxPagesShown(numbersOfPagesToShow);
            expect(maximumNumberOfPages).toEqual(expectedMaxPagesShown);
        },
    );
});

describe("pageClasses", () => {
    it.each`
        page | currentPage | expectedClasses
        ${1} | ${2}        | ${["paginator__page"]}
        ${1} | ${1}        | ${["paginator__page", "paginator__page--active"]}
    `(
        "should return the expected classes",
        ({ page, currentPage, expectedClasses }) => {
            const classes = pageClasses(page, currentPage);
            expect(classes).toEqual(expectedClasses);
        },
    );
});
