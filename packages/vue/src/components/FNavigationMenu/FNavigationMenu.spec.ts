import "html-validate/jest";
import { mount } from "@vue/test-utils";
import flushPromises from "flush-promises";
import FNavigationMenu from "./FNavigationMenu.vue";
import { NavigationMenuItem } from "./navigation-menu-item";

const resizeObserverMock = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
}));
global.ResizeObserver = resizeObserverMock;

const testItems: NavigationMenuItem[] = [
    { label: "label1", route: "ROUTE_1" },
    { label: "label2", route: "ROUTE_2" },
    { label: "label3", route: "ROUTE_3" },
    { label: "label4", route: "", href: "/", target: "_blank" },
];

beforeEach(() => {
    jest.clearAllMocks();
});

describe("props", () => {
    describe("routes", () => {
        it("should have same number of items as in props routes", () => {
            const wrapper = mount(FNavigationMenu, {
                props: {
                    route: "",
                    routes: testItems,
                },
            });
            const imenuList = wrapper.get(".imenu__list");
            const items = imenuList.findAll(".imenu__list__item");
            expect(items).toHaveLength(testItems.length);
        });

        it("should add href attribute to item element if used in route", () => {
            const wrapper = mount(FNavigationMenu, {
                props: {
                    route: "",
                    routes: testItems,
                },
            });

            const itemLink = wrapper.findAll(".imenu__list__anchor")[3];
            expect(itemLink.element.getAttribute("href")).toBe("/");
        });

        it("should add target attribute to item element if used in route", () => {
            const wrapper = mount(FNavigationMenu, {
                props: {
                    route: "",
                    routes: testItems,
                },
            });

            const itemLink = wrapper.findAll(".imenu__list__anchor")[3];
            expect(itemLink.element.getAttribute("target")).toBe("_blank");
        });
    });

    describe("vertical", () => {
        it("should set horizontal class when `vertical` is not used (default)", async () => {
            const wrapper = mount(FNavigationMenu, {
                props: {
                    route: "",
                    routes: testItems,
                },
            });
            await wrapper.vm.$nextTick();

            const nav = wrapper.get("nav");
            expect(nav.classes()).toContain("imenu--horizontal");
        });

        it("should set vertical class when `vertical` is used", async () => {
            const wrapper = mount(FNavigationMenu, {
                props: {
                    route: "",
                    routes: testItems,
                    vertical: true,
                },
            });
            await wrapper.vm.$nextTick();

            const nav = wrapper.get("nav");
            expect(nav.classes()).toContain("imenu--vertical");
        });
    });
});

describe("events", () => {
    it("should emit selectedRoute on select", async () => {
        const wrapper = mount(FNavigationMenu, {
            props: {
                route: "",
                routes: testItems,
            },
        });
        await wrapper.vm.$nextTick();
        const imenuList = wrapper.get(".imenu__list");
        const firstItem = imenuList.findAll(
            ".imenu__list__item > .imenu__list__anchor-container > a",
        )[0];
        await firstItem.trigger("click");
        expect(wrapper.emitted().selectedRoute).toEqual([[testItems[0].route]]);
    });

    it("should select the current route passed with props directly after mount", async () => {
        // Given
        const wrapper = mount(FNavigationMenu, {
            propsData: {
                route: testItems[1].route,
                routes: testItems,
            },
        });
        // When directly after mount
        await wrapper.vm.$nextTick();
        await flushPromises();

        const li = wrapper.findAll(".imenu__list__item").at(1);
        // Then highlight is on preselected route item
        expect(li?.classes()).toContain("imenu__list__item--highlight");
    });

    it("should set imenu__list__item--highlight class on selected item", async () => {
        // given
        const wrapper = mount(FNavigationMenu, {
            props: {
                route: "",
                routes: testItems,
            },
        });
        await wrapper.vm.$nextTick();
        await flushPromises();

        const li = wrapper.findAll(".imenu__list__item")[0];
        const a = li.get("a");

        // when
        await a.trigger("click");
        await wrapper.vm.$nextTick();
        await flushPromises();

        // then
        expect(li.classes()).toContain("imenu__list__item--highlight");
    });
});

describe("html-validate", () => {
    it("should require routes attribute", () => {
        const markup = /* HTML */ ` <f-navigation-menu></f-navigation-menu> `;
        expect(markup).toMatchInlineCodeframe(`
            "error: <f-navigation-menu> is missing required "routes" attribute (element-required-attributes) at inline:1:3:
            > 1 |  <f-navigation-menu></f-navigation-menu>
                |   ^^^^^^^^^^^^^^^^^
            Selector: f-navigation-menu"
        `);
    });

    it("should allow setting vertical boolean attribute", () => {
        const markup = /* HTML */ `
            <f-navigation-menu routes="" vertical></f-navigation-menu>
        `;
        expect(markup).toHTMLValidate();
    });

    it("should not allow setting vertical value", () => {
        const markup = /* HTML */ `
            <f-navigation-menu routes="" vertical=""></f-navigation-menu>
        `;
        expect(markup).not.toHTMLValidate({
            ruleId: "attribute-boolean-style",
            message: 'Attribute "vertical" should omit value',
        });
    });

    it("should not be allowed in interactive components", () => {
        const markup = /* HTML */ `
            <button type="button">
                <f-navigation-menu routes=""></f-navigation-menu>
            </button>
        `;
        expect(markup).not.toHTMLValidate({
            ruleId: "element-permitted-content",
            message:
                "<f-navigation-menu> element is not permitted as content under <button>",
        });
    });

    it("should not allow interactive children", () => {
        const markup = /* HTML */ `
            <f-navigation-menu routes="">
                <button type="button"></button>
            </f-navigation-menu>
        `;
        expect(markup).not.toHTMLValidate({
            ruleId: "element-permitted-content",
            message:
                "<button> element is not permitted as content under <f-navigation-menu>",
        });
    });

    it("should not allow child elements", () => {
        const markup = /* HTML */ `
            <f-navigation-menu routes="">
                <em></em>
            </f-navigation-menu>
        `;
        expect(markup).not.toHTMLValidate({
            ruleId: "element-permitted-content",
            message:
                "<em> element is not permitted as content under <f-navigation-menu>",
        });
    });

    it("should not allow text", () => {
        const markup = /* HTML */ `
            <f-navigation-menu routes=""> mjukglass </f-navigation-menu>
        `;
        expect(markup).not.toHTMLValidate({
            ruleId: "text-content",
            message: "<f-navigation-menu> must not have text content",
        });
    });
});
