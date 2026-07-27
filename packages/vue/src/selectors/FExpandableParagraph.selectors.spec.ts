import { mount } from "@vue/test-utils";
import { expect, it } from "vitest";
import { FExpandableParagraph } from "../components";
import { TestDirective } from "../plugins";
import { FExpandableParagraphSelectors } from "./FExpandableParagraph.selectors";

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FExpandableParagraph);
    const { selector } = FExpandableParagraphSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(":scope");
    expect(root.classes()).toContain("expandable-paragraph");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = mount({
        components: { FExpandableParagraph },
        template: /* HTML */ `
            <div>
                <f-expandable-paragraph v-test="'my-expandable-paragraph'">
                </f-expandable-paragraph>
            </div>
        `,
        directives: { test: TestDirective },
    });
    const { selector } = FExpandableParagraphSelectors(
        '[data-test="my-expandable-paragraph"]',
    );
    const root = wrapper.get(selector);
    expect(selector).toBe('[data-test="my-expandable-paragraph"]');
    expect(root.classes()).toContain("expandable-paragraph");
});

it("header() should return the header element", () => {
    expect.assertions(1);
    const wrapper = mount(FExpandableParagraph, {
        slots: {
            title: "Lorem title ipsum",
        },
    });
    const { header } = FExpandableParagraphSelectors();
    const el = wrapper.get(header());
    expect(el.text()).toBe("Lorem title ipsum");
});

it("body() should return the body element", () => {
    expect.assertions(1);
    const wrapper = mount(FExpandableParagraph, {
        slots: {
            default: "Lorem body ipsum",
        },
    });
    const { body } = FExpandableParagraphSelectors();
    const el = wrapper.get(body());
    expect(el.text()).toContain("Lorem body ipsum");
});

it("relatedInfo() should return the related info element", () => {
    expect.assertions(1);
    const wrapper = mount(FExpandableParagraph, {
        slots: {
            related: "Lorem related ipsum",
        },
    });
    const { relatedInfo } = FExpandableParagraphSelectors();
    const el = wrapper.get(relatedInfo());
    expect(el.text()).toContain("Lorem related ipsum");
});

it("expandCollapseIcon() should return the expand/collapse icon element", () => {
    expect.assertions(1);
    const wrapper = mount(FExpandableParagraph);
    const { expandCollapseIcon } = FExpandableParagraphSelectors();
    const el = wrapper.find(expandCollapseIcon());
    expect(el.exists()).toBeTruthy();
});
