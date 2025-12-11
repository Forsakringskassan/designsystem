import { DOMWrapper, VueWrapper, mount } from "@vue/test-utils";
import { FPaginatorSelectors } from "../../selectors";
import FPaginator from "./FPaginator.vue";

const paginator = FPaginatorSelectors();

describe("page counter", () => {
    describe.each`
        currentPage | numberOfPages | expectedText | expectedAriaText
        ${1}        | ${3}          | ${"1 av 3"}  | ${"Sida 1 av 3"}
        ${2}        | ${3}          | ${"2 av 3"}  | ${"Sida 2 av 3"}
        ${3}        | ${3}          | ${"3 av 3"}  | ${"Sida 3 av 3"}
    `(
        "should display correct texts for page $currentPage of $numberOfPages",
        ({ currentPage, numberOfPages, expectedText, expectedAriaText }) => {
            const wrapper = mount(FPaginator, {
                attrs: {
                    currentPage,
                    numberOfPages,
                },
            });
            const selector = paginator.pageCounter();

            it(`should display "${expectedText}" when "aria-hidden"`, () => {
                expect(wrapper.get(`${selector} [aria-hidden]`).text()).toEqual(
                    expectedText,
                );
            });

            it(`should display "${expectedAriaText}" for screen readers`, () => {
                expect(wrapper.get(`${selector} .sr-only`).text()).toEqual(
                    expectedAriaText,
                );
            });
        },
    );
});

describe("aria-current", () => {
    it.each`
        page | currentPage | expectedValue
        ${1} | ${2}        | ${"false"}
        ${2} | ${2}        | ${"page"}
        ${3} | ${2}        | ${"false"}
    `(
        'should have value "$expectedValue" for page button $page when current page is page $currentPage',
        ({ page, currentPage, expectedValue }) => {
            const wrapper = mount(FPaginator, {
                attrs: {
                    currentPage,
                    numberOfPages: 3,
                },
            });
            const selector = paginator.pageButtonByText(page);
            const button = wrapper.get(selector);
            const ariaCurrent = button.attributes("aria-current");
            expect(ariaCurrent).toEqual(expectedValue);
        },
    );
});

describe("previous button", () => {
    let previousButton: Omit<DOMWrapper<Element>, "exists">;

    beforeAll(() => {
        const wrapper = mount(FPaginator, {
            attrs: {
                currentPage: 1,
                numberOfPages: 10,
            },
        });
        previousButton = wrapper.get(paginator.previousPageButton());
    });

    it("should have the correct label", () => {
        expect(previousButton.text()).toBe("Föregående");
    });

    it("should have the correct value for 'aria-label'", () => {
        expect(previousButton.attributes("aria-label")).toBe("Föregående");
    });
});

describe("next button", () => {
    let nextButton: Omit<DOMWrapper<Element>, "exists">;

    beforeAll(() => {
        const wrapper = mount(FPaginator, {
            attrs: {
                currentPage: 1,
                numberOfPages: 10,
            },
        });
        nextButton = wrapper.get(paginator.nextPageButton());
    });

    it("should have the correct label", () => {
        expect(nextButton.text()).toBe("Nästa");
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
            const selector = paginator.pageButtonByText(page);
            const button = wrapper.get(selector);
            expect(button.text()).toEqual(page.toString());
        }
    });

    it("should have the correct value for 'aria-label'", () => {
        for (let page = 1; page <= numberOfPages; page++) {
            const selector = paginator.pageButtonByText(page);
            const button = wrapper.get(selector);
            expect(button.attributes("aria-label")).toBe(`Sida ${page}`);
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
        const buttons = wrapper.findAll(paginator.pageButtons());
        expect(buttons).toHaveLength(9);
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
            const selector = paginator.pageButtonByIndex(index);
            const button = wrapper.get(selector);
            expect(button.text()).toEqual(expectedPageButton);
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
