import { defineComponent } from "vue";
import { mount } from "@vue/test-utils";
import { FExpandableParagraph } from "../components";
import { FExpandableParagraphSelectors } from "./FExpandableParagraph.selectors";

const FExpandableParagraphComponent = defineComponent({
    template: /* HTML */ `
        <f-expandable-paragraph :expanded>
            <template #title> Titel </template>
            <template #default> Innehåll </template>
            <template #related> 2026-01-01 </template>
        </f-expandable-paragraph>
    `,
    props: {
        expanded: {
            type: Boolean,
            default: true,
        },
    },
    components: {
        FExpandableParagraph,
    },
});

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FExpandableParagraphComponent);
    const { selector } = FExpandableParagraphSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(".expandable-paragraph");
    expect(root.classes()).toContain("expandable-paragraph");
});

it("header() should return the header element", () => {
    expect.assertions(1);
    const wrapper = mount(FExpandableParagraphComponent);
    const { header } = FExpandableParagraphSelectors();
    const el = wrapper.get(header());
    expect(el.text()).toBe("Titel");
});

it("body() should return the body element", () => {
    expect.assertions(1);
    const wrapper = mount(FExpandableParagraphComponent);
    const { body } = FExpandableParagraphSelectors();
    const el = wrapper.get(body());
    expect(el.text()).toContain("Innehåll");
});

it("relatedInfo() should return the related info element", () => {
    expect.assertions(1);
    const wrapper = mount(FExpandableParagraphComponent);
    const { relatedInfo } = FExpandableParagraphSelectors();
    const el = wrapper.get(relatedInfo());
    expect(el.text()).toContain("2026-01-01");
});

it("expandCollapseIcon() should return the expand/collapse icon element", () => {
    expect.assertions(1);
    const wrapper = mount(FExpandableParagraphComponent);
    const { expandCollapseIcon } = FExpandableParagraphSelectors();
    const el = wrapper.find(expandCollapseIcon());
    expect(el.exists()).toBeTruthy();
});
