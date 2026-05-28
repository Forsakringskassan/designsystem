import { mount } from "@vue/test-utils";
import { FDefinitionList } from "../components";
import { FDefinitionListSelectors } from "./FDefinitionList.selectors";

const definitions = [
    { term: "Name", definition: "Jane Doe" },
    { term: "Age", definition: "30" },
];

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FDefinitionList, {
        props: { definitions },
    });
    const { selector } = FDefinitionListSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(".definition-list");
    expect(root.classes()).toContain("definition-list");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FDefinitionList, {
        attrs: { "data-test": "my-list" },
        props: { definitions },
    });
    const { selector } = FDefinitionListSelectors('[data-test="my-list"]');
    const root = wrapper.get(selector);
    expect(selector).toBe('[data-test="my-list"]');
    expect(root.classes()).toContain("definition-list");
});

it("terms() should return all term elements", () => {
    expect.assertions(2);
    const wrapper = mount(FDefinitionList, { props: { definitions } });
    const { terms } = FDefinitionListSelectors();
    const els = wrapper.findAll(terms());
    expect(els).toHaveLength(2);
    expect(els[0].text()).toBe("Name");
});

it("definitions() should return all definition elements", () => {
    expect.assertions(2);
    const wrapper = mount(FDefinitionList, { props: { definitions } });
    const { definitions: defsSelector } = FDefinitionListSelectors();
    const els = wrapper.findAll(defsSelector());
    expect(els).toHaveLength(2);
    expect(els[0].text()).toBe("Jane Doe");
});
