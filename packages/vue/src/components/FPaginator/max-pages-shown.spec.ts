import { maxPagesShown } from "./max-pages-shown";

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
        'should return value "$expectedMaxPagesShown" for "numberOfPagesToShow: $numbersOfPagesToShow"',
        ({ numbersOfPagesToShow, expectedMaxPagesShown }) => {
            const maximumNumberOfPages = maxPagesShown(numbersOfPagesToShow);
            expect(maximumNumberOfPages).toEqual(expectedMaxPagesShown);
        },
    );
});
