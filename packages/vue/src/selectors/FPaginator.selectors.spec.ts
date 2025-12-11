import { mount } from "@vue/test-utils";
import { FPaginator } from "../components";
import { FPaginatorSelectors } from "./FPaginator.selectors";

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FPaginator, {
        props: { currentPage: 3, numberOfPages: 10 },
    });
    const { selector } = FPaginatorSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(".paginator");
    expect(root.classes()).toContain("paginator");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FPaginator, {
        props: { currentPage: 3, numberOfPages: 10 },
        attrs: { "data-test": "foo" },
    });
    const { selector } = FPaginatorSelectors('[data-test="foo"]');
    const root = wrapper.get(selector);
    expect(selector).toBe('[data-test="foo"]');
    expect(root.classes()).toContain("paginator");
});

it("currentPageButton() should return the current page button", () => {
    expect.assertions(2);
    const wrapper = mount(FPaginator, {
        props: {
            currentPage: 3,
            numberOfPages: 10,
        },
    });
    const { currentPageButton } = FPaginatorSelectors();
    const button = wrapper.get(currentPageButton());
    expect(button.text()).toBe("3");
    expect(button.classes()).toContain("paginator__page--active");
});

it("firstPageButton() should return the first page button", () => {
    expect.assertions(1);
    const wrapper = mount(FPaginator, {
        props: {
            currentPage: 3,
            numberOfPages: 10,
        },
    });
    const { firstPageButton } = FPaginatorSelectors();
    const first = wrapper.get(firstPageButton());
    expect(first.text()).toBe("1");
});

it("lastPageButton() should return the last page button", () => {
    expect.assertions(1);
    const wrapper = mount(FPaginator, {
        props: {
            currentPage: 3,
            numberOfPages: 10,
        },
    });
    const { lastPageButton } = FPaginatorSelectors();
    const last = wrapper.get(lastPageButton());
    expect(last.text()).toBe("10");
});

it("previousPageButton() should return the previous button", () => {
    expect.assertions(1);
    const wrapper = mount(FPaginator, {
        props: {
            currentPage: 3,
            numberOfPages: 10,
        },
    });
    const { previousPageButton } = FPaginatorSelectors();
    const previous = wrapper.get(previousPageButton());
    expect(previous.text()).toBe("Föregående");
});

it("nextPageButton() should return the next button", () => {
    expect.assertions(1);
    const wrapper = mount(FPaginator, {
        props: {
            currentPage: 3,
            numberOfPages: 10,
        },
    });
    const { nextPageButton } = FPaginatorSelectors();
    const next = wrapper.get(nextPageButton());
    expect(next.text()).toBe("Nästa");
});

it("pageButtonByText() should return a page button by displayed text (number)", () => {
    expect.assertions(1);
    const wrapper = mount(FPaginator, {
        props: {
            currentPage: 3,
            numberOfPages: 10,
        },
    });
    const { pageButtonByText } = FPaginatorSelectors();
    const byText = wrapper.get(pageButtonByText(5));
    expect(byText.text()).toBe("5");
});

it("pageButtonByText() should return a page button by displayed text (string)", () => {
    expect.assertions(1);
    const wrapper = mount(FPaginator, {
        props: {
            currentPage: 3,
            numberOfPages: 10,
        },
    });
    const { pageButtonByText } = FPaginatorSelectors();
    const byText = wrapper.get(pageButtonByText("5"));
    expect(byText.text()).toBe("5");
});

it("pageButtonByIndex() should return a page button by index (first)", () => {
    expect.assertions(1);
    const wrapper = mount(FPaginator, {
        props: {
            currentPage: 3,
            numberOfPages: 10,
        },
    });
    const { pageButtonByIndex } = FPaginatorSelectors();
    const byIndexFirst = wrapper.get(pageButtonByIndex(0));
    expect(byIndexFirst.text()).toBe("1");
});

it("pageButtonByIndex() should return a page button by index (last)", () => {
    expect.assertions(1);
    const wrapper = mount(FPaginator, {
        props: {
            currentPage: 3,
            numberOfPages: 10,
        },
    });
    const { pageButtonByIndex } = FPaginatorSelectors();
    const byIndexLast = wrapper.get(pageButtonByIndex(-1));
    expect(byIndexLast.text()).toBe("10");
});

it("pageButtons() should return the displayed page buttons", () => {
    expect.assertions(3);
    const wrapper = mount(FPaginator, {
        props: {
            currentPage: 3,
            numberOfPages: 10,
        },
    });
    const { pageButtons } = FPaginatorSelectors();
    const buttons = wrapper.findAll(pageButtons());
    expect(buttons).toHaveLength(9);
    expect(buttons[0].text()).toBe("1");
    expect(buttons[buttons.length - 1].text()).toBe("10");
});

it("pageCounter() should return the page counter element", () => {
    expect.assertions(1);
    const wrapper = mount(FPaginator, {
        props: {
            currentPage: 3,
            numberOfPages: 10,
        },
    });
    const { pageCounter } = FPaginatorSelectors();
    const counter = wrapper.get(pageCounter());
    expect(counter.get("[aria-hidden]").text()).toContain("3 av 10");
});
