import { h } from "vue";
import { mount } from "@vue/test-utils";
import { FList } from "../components";
import { FListSelectors } from "./FList.selectors";

interface Item {
    frukt: string;
    nested?: NestedItem[];
}

interface NestedItem {
    id: number;
}

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FList, {
        props: { items: [] },
    });
    const { selector } = FListSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(".list");
    expect(root.classes()).toContain("list");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FList, {
        props: { items: [] },
        attrs: { "data-test": "foo" },
    });
    const { selector } = FListSelectors('[data-test="foo"]');
    const root = wrapper.get(selector);
    expect(selector).toBe('[data-test="foo"]');
    expect(root.classes()).toContain("list");
});

it("listItems() should select each list item", () => {
    expect.assertions(4);
    const items: Item[] = [
        { frukt: "Banan" },
        { frukt: "Äpple" },
        { frukt: "Apelsin" },
    ];
    const wrapper = mount(FList<Item>, {
        props: {
            items,
        },
        slots: {
            default({ item }: { item: Item }) {
                return item.frukt;
            },
        },
    });
    const { listItems } = FListSelectors();
    const elements = wrapper.findAll(listItems());
    expect(elements).toHaveLength(3);
    expect(elements[0].text()).toBe("Banan");
    expect(elements[1].text()).toBe("Äpple");
    expect(elements[2].text()).toBe("Apelsin");
});

it("listItems() should handle empty list", () => {
    expect.assertions(1);
    const items: Item[] = [];
    const wrapper = mount(FList<Item>, {
        props: {
            items,
        },
        slots: {
            default({ item }: { item: Item }) {
                return item.frukt;
            },
        },
    });
    const { listItems } = FListSelectors();
    const elements = wrapper.findAll(listItems());
    expect(elements).toHaveLength(0);
});

it("listItems() should handle nested lists", () => {
    expect.assertions(1);
    const items: Item[] = [
        { frukt: "Banan", nested: [{ id: 1 }] },
        { frukt: "Äpple", nested: [{ id: 2 }, { id: 3 }] },
        { frukt: "Apelsin", nested: [{ id: 4 }] },
    ];
    const wrapper = mount(FList<Item>, {
        props: {
            items,
        },
        attrs: {
            id: "outer",
        },
        slots: {
            default({ item }: { item: Item }) {
                return [
                    item.frukt,
                    h(
                        FList,
                        { items: item.nested },
                        {
                            default({ item }: { item: NestedItem }) {
                                return item.id;
                            },
                        },
                    ),
                ];
            },
        },
    });
    const { listItems } = FListSelectors("#outer");
    const elements = wrapper.findAll(listItems());
    expect(elements).toHaveLength(3);
});

it("listItemByIndex() should select only the item with given index", () => {
    expect.assertions(7);
    const items: Item[] = [
        { frukt: "Banan" },
        { frukt: "Äpple" },
        { frukt: "Apelsin" },
    ];
    const wrapper = mount(FList<Item>, {
        props: {
            items,
        },
        slots: {
            default({ item }: { item: Item }) {
                return item.frukt;
            },
        },
    });
    const { listItemByIndex } = FListSelectors();
    const first = wrapper.find(listItemByIndex(0));
    const second = wrapper.find(listItemByIndex(1));
    const third = wrapper.find(listItemByIndex(2));
    const fourth = wrapper.find(listItemByIndex(3));
    expect(first.exists()).toBeTruthy();
    expect(first.text()).toBe("Banan");
    expect(second.exists()).toBeTruthy();
    expect(second.text()).toBe("Äpple");
    expect(third.exists()).toBeTruthy();
    expect(third.text()).toBe("Apelsin");
    expect(fourth.exists()).toBeFalsy();
});

it("listItemByIndex() should not return any element when list is empty", () => {
    expect.assertions(1);
    const items: Item[] = [];
    const wrapper = mount(FList<Item>, {
        props: {
            items,
        },
        slots: {
            default({ item }: { item: Item }) {
                return item.frukt;
            },
        },
    });
    const { listItemByIndex } = FListSelectors();
    const element = wrapper.find(listItemByIndex(0));
    expect(element.exists()).toBeFalsy();
});

it("emptyMessage() should select message for empty lists", () => {
    expect.assertions(2);
    const items: Item[] = [];
    const wrapper = mount(FList<Item>, {
        props: {
            items,
        },
        slots: {
            default({ item }: { item: Item }) {
                return item.frukt;
            },
            empty() {
                return "lorem ipsum";
            },
        },
    });
    const { emptyMessage } = FListSelectors();
    const element = wrapper.find(emptyMessage());
    expect(element.exists()).toBeTruthy();
    expect(element.text()).toBe("lorem ipsum");
});

it("emptyMessage() should not exist when list have items", () => {
    expect.assertions(1);
    const items: Item[] = [
        { frukt: "Banan" },
        { frukt: "Äpple" },
        { frukt: "Apelsin" },
    ];
    const wrapper = mount(FList<Item>, {
        props: {
            items,
        },
        slots: {
            default({ item }: { item: Item }) {
                return item.frukt;
            },
            empty() {
                return "lorem ipsum";
            },
        },
    });
    const { emptyMessage } = FListSelectors();
    const element = wrapper.find(emptyMessage());
    expect(element.exists()).toBeFalsy();
});
