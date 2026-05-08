import { mount } from "@vue/test-utils";
import { FPageHeader } from "../components";
import { FPageHeaderSelectors } from "./FPageHeader.selectors";

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FPageHeader, {
        slots: { default: "My App" },
    });
    const { selector } = FPageHeaderSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(".page-header__root");
    expect(root.classes()).toContain("page-header__root");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FPageHeader, {
        slots: { default: "My App" },
        attrs: { "data-test": "header" },
    });
    const { selector } = FPageHeaderSelectors('[data-test="header"]');
    expect(selector).toBe('[data-test="header"]');
    expect(wrapper.find(selector).exists()).toBeTruthy();
});

it("skipLink() should exist when skipLink prop is set", () => {
    expect.assertions(1);
    const wrapper = mount(FPageHeader, {
        props: { skipLink: "main-content" },
        slots: { default: "My App" },
    });
    const { skipLink } = FPageHeaderSelectors();
    expect(wrapper.find(skipLink()).exists()).toBeTruthy();
});

it("skipLink() should not exist when skipLink prop is not set", () => {
    expect.assertions(1);
    const wrapper = mount(FPageHeader, {
        slots: { default: "My App" },
    });
    const { skipLink } = FPageHeaderSelectors();
    expect(wrapper.find(skipLink()).exists()).toBeFalsy();
});

it("appName() should return the application name element", () => {
    expect.assertions(1);
    const wrapper = mount(FPageHeader, {
        slots: { default: "My App" },
    });
    const { appName } = FPageHeaderSelectors();
    expect(wrapper.get(appName()).text()).toContain("My App");
});

it("logo() should exist when logo slot is used", () => {
    expect.assertions(1);
    const wrapper = mount(FPageHeader, {
        slots: { default: "My App", logo: "<div>Logo</div>" },
    });
    const { logo } = FPageHeaderSelectors();
    expect(wrapper.find(logo()).exists()).toBeTruthy();
});

it("right() should exist when right slot is used", () => {
    expect.assertions(1);
    const wrapper = mount(FPageHeader, {
        slots: { default: "My App", right: "<button>Login</button>" },
    });
    const { right } = FPageHeaderSelectors();
    expect(wrapper.find(right()).exists()).toBeTruthy();
});
