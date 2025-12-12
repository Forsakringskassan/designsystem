import { mount } from "@vue/test-utils";
import FPaginator from "./FPaginator.vue";

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
            const selector = "[data-test='page-counter']";

            it(`should display "${expectedText}" when "aria-hidden"`, () => {
                expect(
                    wrapper.find(`${selector} [aria-hidden]`).text(),
                ).toEqual(expectedText);
            });

            it(`should display "${expectedAriaText}" for screen readers`, () => {
                expect(wrapper.find(`${selector} .sr-only`).text()).toEqual(
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
            const selector = `[data-test='page-${page}-button']`;
            const ariaCurrent = wrapper
                .find(selector)
                .attributes("aria-current");
            expect(ariaCurrent).toEqual(expectedValue);
        },
    );
});

describe.each`
    action        | label
    ${"previous"} | ${"Föregående"}
    ${"next"}     | ${"Nästa"}
`("$action button", ({ action, label }) => {
    const listener = jest.fn();
    const wrapper = mount(FPaginator, {
        attrs: {
            currentPage: 1,
            numberOfPages: 10,
        },
    });
    const button = wrapper.find(`[data-test='${action}-button']`);
    button.element.addEventListener(`paginateDataset:${action}`, listener);

    it(`should have label '${label}'`, () => {
        expect(button.find("[data-test='label']").text()).toBe(label);
    });

    it(`should have aria-label '${label}'`, () => {
        expect(button.attributes("aria-label")).toBe(label);
    });

    it(`should emit 'paginateDataset:${action}' event on click`, async () => {
        await button.trigger("click");
        expect(listener).toHaveBeenCalled();
    });
});

describe("page button (1 page)", () => {
    const listener = jest.fn();
    const wrapper = mount(FPaginator, {
        attrs: {
            currentPage: 1,
            numberOfPages: 1,
        },
    });
    wrapper.element.addEventListener("paginateDataset:page", listener);
    const button = wrapper.find(`[data-test='page-1-button']`);

    it("should have label '1'", () => {
        expect(button.text()).toBe("1");
    });

    it("should have aria-label 'Sida 1'", () => {
        expect(button.attributes("aria-label")).toBe(`Sida 1`);
    });

    describe("on click", () => {
        it(`should emit 'paginateDataset:page' event on click`, async () => {
            await button.trigger("click");
            expect(listener).toHaveBeenCalled();
        });

        it.todo("should emit '1' as event detail");
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
                wrapper.findAll(".paginator__page").at(index)?.text(),
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
