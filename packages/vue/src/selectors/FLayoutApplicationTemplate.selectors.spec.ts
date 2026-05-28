import { mount } from "@vue/test-utils";
import { FLayoutApplicationTemplate } from "../components";
import { FLayoutApplicationTemplateSelectors } from "./FLayoutApplicationTemplate.selectors";

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FLayoutApplicationTemplate, {
        slots: { default: "Content" },
    });
    const { selector } = FLayoutApplicationTemplateSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(".layout-application-template");
    expect(root.classes()).toContain("layout-application-template");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FLayoutApplicationTemplate, {
        slots: { default: "Content" },
        attrs: { "data-test": "app" },
    });
    const { selector } =
        FLayoutApplicationTemplateSelectors('[data-test="app"]');
    expect(selector).toBe('[data-test="app"]');
    expect(wrapper.find(selector).exists()).toBeTruthy();
});

it("header() should exist when header slot is used", () => {
    expect.assertions(1);
    const wrapper = mount(FLayoutApplicationTemplate, {
        slots: { header: "<nav>Nav</nav>", default: "Content" },
    });
    const { header } = FLayoutApplicationTemplateSelectors();
    expect(wrapper.find(header()).exists()).toBeTruthy();
});

it("main() should return the main content element", () => {
    expect.assertions(1);
    const wrapper = mount(FLayoutApplicationTemplate, {
        slots: { default: "Main content" },
    });
    const { main } = FLayoutApplicationTemplateSelectors();
    expect(wrapper.get(main()).text()).toContain("Main content");
});

it("footer() should exist when footer slot is used", () => {
    expect.assertions(1);
    const wrapper = mount(FLayoutApplicationTemplate, {
        slots: { default: "Content", footer: "Footer text" },
    });
    const { footer } = FLayoutApplicationTemplateSelectors();
    expect(wrapper.find(footer()).exists()).toBeTruthy();
});
