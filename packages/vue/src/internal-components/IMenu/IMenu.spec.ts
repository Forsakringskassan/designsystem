import "html-validate/jest";
import { VueWrapper, mount, shallowMount } from "@vue/test-utils";
import { defineComponent } from "vue";
import IMenu from "./IMenu.vue";
import * as imenuUtilsModule from "./imenu-utils";

jest.useFakeTimers();

/* Mock ResizeObserver used in IMenu */
const resizeObserverMock = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
}));
global.ResizeObserver = resizeObserverMock;

const testItems = [
    { label: "label1", key: "MENU_1", href: "#href-1" },
    { label: "label2", key: "MENU_2", href: "#href-2" },
    { label: "label3", key: "MENU_3", href: "#href-3" },
];

function createWrapper({
    props = {},
    slots = {},
    attrs = {},
} = {}): VueWrapper {
    return shallowMount(IMenu, {
        attrs: { ...attrs },
        props: { items: [], ...props },
        slots: { ...slots },
    });
}

function simulateResize(): void {
    // Get the first argument of the call to ResizeObserver
    const onResizeFn = resizeObserverMock.mock.calls[0][0];
    onResizeFn();
    // The next line is due to debounce(this.onResize, 100)
    jest.advanceTimersByTime(200);
}

beforeEach(() => {
    jest.clearAllMocks();
});

describe("props", () => {
    it("should have same number of items as in props items", () => {
        const wrapper = createWrapper({
            props: {
                items: testItems,
            },
        });
        const imenuList = wrapper.get(".imenu__list");
        const items = imenuList.findAll(".imenu__list__item");

        expect(items).toHaveLength(testItems.length);
    });

    it.each`
        verticalValue | klass
        ${false}      | ${"imenu--horizontal"}
        ${true}       | ${"imenu--vertical"}
    `(
        "should have class $klass when vertical prop is $verticalValue",
        async ({ verticalValue, klass }) => {
            const wrapper = createWrapper({
                props: {
                    items: testItems,
                    vertical: verticalValue,
                },
            });
            await wrapper.vm.$nextTick();

            const nav = wrapper.get("nav");
            expect(nav.classes()).toContain(klass);
        },
    );
});

describe("events", () => {
    it("should emit select on select", async () => {
        const wrapper = createWrapper({
            props: {
                items: testItems,
            },
        });
        await wrapper.vm.$nextTick();
        const imenuList = wrapper.get(".imenu__list");
        const firstItem = imenuList.findAll(
            ".imenu__list__item > .imenu__list__anchor-container > a",
        )[0];
        await firstItem.trigger("click");
        expect(wrapper.emitted().select).toEqual([[testItems[0].key]]);
    });

    it("should set imenu__list__item--highlight class on selected item", async () => {
        // given
        const wrapper = mount({
            template: /* HTML */ `
                <i-menu v-model="selectedItem" :items="items"></i-menu>
            `,
            components: { IMenu },
            data() {
                return {
                    selectedItem: "",
                    items: testItems,
                };
            },
        });
        await wrapper.vm.$nextTick();

        const li = wrapper.findAll(".imenu__list__item")[0];
        const a = li.get("a");

        // when
        await a.trigger("click");
        await wrapper.vm.$nextTick();

        // then
        expect(li.classes()).toContain("imenu__list__item--highlight");
    });

    it("should emit overflow on overflow", async () => {
        // given
        const mockOverflowIndexValue = 10;
        jest.spyOn(imenuUtilsModule, "findOverflowIndex").mockReturnValue(
            mockOverflowIndexValue,
        );
        const wrapper = createWrapper({
            props: {
                items: testItems,
            },
        });
        await wrapper.vm.$nextTick();

        // when
        simulateResize();
        await wrapper.vm.$nextTick();

        // then
        // (when the component is mounted it will emit `overflow`, that is why the value
        // `mockOverflowIndexValue` appears 2 times in the expected event payload array)
        expect(wrapper.emitted().overflow).toEqual([
            [mockOverflowIndexValue],
            [mockOverflowIndexValue],
        ]);
    });
});

describe("v-model", () => {
    it("should test that v-model is set when item is highlighted", async () => {
        const TestComponent = defineComponent({
            template: /* HTML */ `
                <i-menu v-model="selectedItem" :items="items"></i-menu>
            `,
            components: { IMenu },
            data() {
                return {
                    selectedItem: "",
                    items: testItems,
                };
            },
        });
        const wrapper = mount(TestComponent);
        await wrapper.vm.$nextTick();
        const imenuList = wrapper.get(".imenu__list");
        const secondItem = imenuList.findAll(
            ".imenu__list__item > .imenu__list__anchor-container > a",
        )[1];

        await secondItem.trigger("click");
        await wrapper.vm.$nextTick();

        const secondTestItemKey = testItems[1].key;
        expect(wrapper.vm.$data.selectedItem).toBe(secondTestItemKey);
    });
});

describe("html-validate", () => {
    it("should require items attribute", () => {
        const markup = /* HTML */ ` <i-menu></i-menu> `;
        expect(markup).toMatchInlineCodeframe(`
            "error: <i-menu> is missing required "items" attribute (element-required-attributes) at inline:1:3:
            > 1 |  <i-menu></i-menu>
                |   ^^^^^^
            Selector: i-menu"
        `);
    });

    it("should allow setting vertical boolean attribute", () => {
        const markup = /* HTML */ ` <i-menu items="" vertical></i-menu> `;
        expect(markup).toHTMLValidate();
    });

    it("should not allow setting vertical value", () => {
        const markup = /* HTML */ ` <i-menu items="" vertical=""></i-menu> `;
        expect(markup).not.toHTMLValidate({
            ruleId: "attribute-boolean-style",
            message: 'Attribute "vertical" should omit value',
        });
    });

    it("should not be allowed in interactive components", () => {
        const markup = /* HTML */ `
            <button type="button">
                <i-menu items=""></i-menu>
            </button>
        `;
        expect(markup).not.toHTMLValidate({
            ruleId: "element-permitted-content",
            message:
                "<i-menu> element is not permitted as content under <button>",
        });
    });

    it("should not allow interactive children", () => {
        const markup = /* HTML */ `
            <i-menu items="">
                <button type="button"></button>
            </i-menu>
        `;
        expect(markup).not.toHTMLValidate({
            ruleId: "element-permitted-content",
            message:
                "<button> element is not permitted as content under <i-menu>",
        });
    });

    it("should not allow child elements", () => {
        const markup = /* HTML */ `
            <i-menu items="">
                <em></em>
            </i-menu>
        `;
        expect(markup).not.toHTMLValidate({
            ruleId: "element-permitted-content",
            message: "<em> element is not permitted as content under <i-menu>",
        });
    });

    it("should not allow text", () => {
        const markup = /* HTML */ ` <i-menu items=""> mjukglass </i-menu> `;
        expect(markup).not.toHTMLValidate({
            ruleId: "text-content",
            message: "<i-menu> must not have text content",
        });
    });
});
