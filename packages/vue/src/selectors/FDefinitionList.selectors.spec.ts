import { shallowMount } from "@vue/test-utils";
import { expect, it } from "vitest";
import { FDefinitionList } from "../components";
import { TestDirective } from "../plugins";
import { FDefinitionListSelectors } from "./FDefinitionList.selectors";

const definitions = [
    { term: "Name", definition: "Jane Doe" },
    { term: "Age", definition: "30" },
];

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = shallowMount(FDefinitionList, {
        props: { definitions },
    });
    const { selector } = FDefinitionListSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(":scope");
    expect(root.classes()).toContain("definition-list");
});

it("should handle explicit selector (v-test directive)", () => {
    expect.assertions(2);
    const wrapper = shallowMount(
        {
            template: `<div><f-definition-list v-test="'foo'" :definitions="definitions" /></div>`,
            components: { FDefinitionList },
            data() {
                return {
                    definitions,
                };
            },
        },
        {
            global: {
                stubs: { FDefinitionList: false },
                directives: { test: TestDirective },
            },
        },
    );
    const { selector } = FDefinitionListSelectors('[data-test="foo"]');
    const root = wrapper.get(selector);
    expect(selector).toBe('[data-test="foo"]');
    expect(root.classes()).toContain("definition-list");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = shallowMount(FDefinitionList, {
        attrs: { "data-test": "foo" },
        props: { definitions },
    });
    const { selector } = FDefinitionListSelectors('[data-test="foo"]');
    const root = wrapper.get(selector);
    expect(selector).toBe('[data-test="foo"]');
    expect(root.classes()).toContain("definition-list");
});

it("terms() should return all term elements", () => {
    expect.assertions(2);
    const wrapper = shallowMount(FDefinitionList, { props: { definitions } });
    const { terms } = FDefinitionListSelectors();
    const els = wrapper.findAll(terms());
    expect(els).toHaveLength(2);
    expect(els[0].text()).toBe("Name");
});

it("definitions() should return all definition elements", () => {
    expect.assertions(2);
    const wrapper = shallowMount(FDefinitionList, { props: { definitions } });
    const { definitions: defsSelector } = FDefinitionListSelectors();
    const els = wrapper.findAll(defsSelector());
    expect(els).toHaveLength(2);
    expect(els[0].text()).toBe("Jane Doe");
});
