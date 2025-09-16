import { DOMWrapper, VueWrapper, mount } from "@vue/test-utils";
import FPaginator from "./FPaginator.vue";

describe("page counter", () => {
    it.each`
        currentPage | numberOfPages | expectedText
        ${1}        | ${3}          | ${"Sida 1 av 3"}
        ${2}        | ${3}          | ${"Sida 2 av 3"}
        ${3}        | ${3}          | ${"Sida 3 av 3"}
    `(
        "should display correct text",
        ({ currentPage, numberOfPages, expectedText }) => {
            const wrapper = mount(FPaginator, {
                attrs: {
                    currentPage,
                    numberOfPages,
                },
            });
            expect(
                wrapper.find("[data-test='page-counter']").element.innerHTML,
            ).toEqual(expectedText);
        },
    );
});

describe("aria-current", () => {
    it("should be set to 'page' for the current page", () => {
        const numberOfPages = 9;
        for (let currentPage = 1; currentPage <= numberOfPages; currentPage++) {
            const wrapper = mount(FPaginator, {
                attrs: {
                    currentPage,
                    numberOfPages,
                },
            });
            for (let page = 1; page <= numberOfPages; page++) {
                expect(
                    wrapper
                        .find(`[data-test='page-${page}-button']`)
                        .attributes("aria-current"),
                ).toEqual(page === currentPage ? "page" : "false");
            }
        }
    });
});

describe("previous button", () => {
    let previousButton: DOMWrapper<Element>;

    beforeAll(() => {
        const wrapper = mount(FPaginator, {
            attrs: {
                currentPage: 1,
                numberOfPages: 10,
            },
        });
        previousButton = wrapper.find("[data-test='previous-button']");
    });

    it("should have the correct label", () => {
        expect(
            previousButton.find("[data-test='label']").element.innerHTML,
        ).toBe("Föregående");
    });

    it("should have the correct value for 'aria-label'", () => {
        expect(previousButton.attributes("aria-label")).toBe("Föregående");
    });
});

describe("next button", () => {
    let nextButton: DOMWrapper<Element>;

    beforeAll(() => {
        const wrapper = mount(FPaginator, {
            attrs: {
                currentPage: 1,
                numberOfPages: 10,
            },
        });
        nextButton = wrapper.find("[data-test='next-button']");
    });

    it("should have the correct label", () => {
        expect(nextButton.find("[data-test='label']").element.innerHTML).toBe(
            "Nästa",
        );
    });

    it("should have the correct value for 'aria-label'", () => {
        expect(nextButton.attributes("aria-label")).toBe("Nästa");
    });
});

describe("page buttons", () => {
    const numberOfPages = 5;
    let wrapper: VueWrapper;

    beforeAll(() => {
        wrapper = mount(FPaginator, {
            attrs: {
                currentPage: 1,
                numberOfPages,
            },
        });
    });

    it("should have the correct label", () => {
        for (let page = 1; page <= numberOfPages; page++) {
            expect(
                wrapper.find(`[data-test='page-${page}-button']`).element
                    .innerHTML,
            ).toEqual(page.toString());
        }
    });

    it("should have the correct value for 'aria-label'", () => {
        for (let page = 1; page <= numberOfPages; page++) {
            expect(
                wrapper
                    .find(`[data-test='page-${page}-button']`)
                    .attributes("aria-label"),
            ).toBe(`Sida ${page}`);
        }
    });
});

describe("number of pages to show", () => {
    it("should show 9 pages as default", () => {
        const wrapper = mount(FPaginator, {
            attrs: {
                currentPage: 10,
                numberOfPages: 20,
            },
        });
        expect(wrapper.findAll(".paginator__page")).toHaveLength(9);
    });
});

describe("pages and gaps", () => {
    it("should show the correct pages and gaps", () => {
        const wrapper = mount(FPaginator, {
            attrs: {
                currentPage: 10,
                numberOfPages: 20,
            },
        });
        const expectedPageButtons = [
            "1",
            "...",
            "8",
            "9",
            "10",
            "11",
            "12",
            "...",
            "20",
        ];
        expectedPageButtons.forEach((expectedPageButton, index) => {
            expect(
                wrapper.findAll(".paginator__page").at(index)?.element
                    .innerHTML,
            ).toEqual(expectedPageButton);
        });
    });
});

describe("events", () => {
    it.todo(
        "should emit event 'paginateDataset:previous' when clicking on 'Previous' button",
    );

    it.todo(
        "should emit event 'paginateDataset:next' when clicking on 'Next' button",
    );

    it.todo(
        "should emit event 'paginateDataset:page' when clicking on a page button",
    );
});
