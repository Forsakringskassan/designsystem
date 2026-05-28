import { defineComponent } from "vue";
import { mount } from "@vue/test-utils";
import { FErrorList } from "../components";
import { FErrorListSelectors } from "./FErrorList.selectors";

const itemsWithLinks = [
    { id: "field1", title: "Field 1 is required" },
    { id: "field2", title: "Field 2 is invalid" },
];

const itemsWithoutLinks = [{ id: "", title: "Something went wrong" }];

const FErrorListComponent = defineComponent({
    template: /* HTML */ `
        <f-error-list :items>
            <template #title> Kolla på felen nedan </template>
        </f-error-list>
    `,
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
    components: {
        FErrorList,
    },
});

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FErrorListComponent, {
        props: { items: itemsWithLinks },
    });
    const { selector } = FErrorListSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(".error-list");
    expect(root.classes()).toContain("error-list");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FErrorListComponent, {
        props: { items: itemsWithLinks },
        attrs: { "data-test": "my-errors" },
    });
    const { selector } = FErrorListSelectors('[data-test="my-errors"]');
    const root = wrapper.get(selector);
    expect(selector).toBe('[data-test="my-errors"]');
    expect(root.classes()).toContain("error-list");
});

it("items() should return all error item links", () => {
    expect.assertions(2);
    const wrapper = mount(FErrorListComponent, {
        props: { items: itemsWithLinks },
    });
    const { items } = FErrorListSelectors();
    const els = wrapper.findAll(items());
    expect(els).toHaveLength(2);
    expect(els[0].text()).toContain("Field 1 is required");
});

it("listItems() should return all error list items", () => {
    expect.assertions(1);
    const wrapper = mount(FErrorListComponent, {
        props: { items: itemsWithLinks },
    });
    const { listItems } = FErrorListSelectors();
    expect(wrapper.findAll(listItems())).toHaveLength(2);
});

it("listItems() should include items without links", () => {
    expect.assertions(1);
    const wrapper = mount(FErrorListComponent, {
        props: { items: itemsWithoutLinks },
    });
    const { listItems } = FErrorListSelectors();
    expect(wrapper.findAll(listItems())).toHaveLength(1);
});

it("items() should not exist when items have no id", () => {
    expect.assertions(1);
    const wrapper = mount(FErrorListComponent, {
        props: { items: itemsWithoutLinks },
    });
    const { items } = FErrorListSelectors();
    expect(wrapper.findAll(items())).toHaveLength(0);
});
