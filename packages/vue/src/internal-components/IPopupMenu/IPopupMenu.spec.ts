import "html-validate/vitest";
import { defineComponent } from "vue";
import { type VueWrapper, config, mount } from "@vue/test-utils";
import { afterEach, describe, expect, it, vi } from "vitest";
import IPopupMenu from "./IPopupMenu.vue";

config.global.stubs = { teleport: true };

const testItems = [
    { label: "label1", key: "MENU_1", href: "#href-1" },
    { label: "label2", key: "MENU_2", href: "#href-2" },
    { label: "label3", key: "MENU_3", href: "#href-3" },
];

const TestComponent = defineComponent({
    name: "TestComponent",
    components: {
        IPopupMenu,
    },
    data() {
        return {
            isOpen: false,
            gotCloseEvent: false,
            items: testItems,
            selectedItem: "",
        };
    },
    template: /* HTML */ `
        <div id="outside">
            <button
                id="launch-popup"
                ref="anchor"
                @click="isOpen=true"
            ></button>
            <i-popup-menu
                v-model="selectedItem"
                :isOpen="isOpen"
                :anchor="$refs.anchor"
                @close="isOpen=false; gotCloseEvent=true;"
                :items="items"
                :enable-keyboard-navigation="true"
            >
            </i-popup-menu>
        </div>
    `,
});

async function openPopup(wrapper: VueWrapper): Promise<void> {
    await wrapper.get("#launch-popup").trigger("click");
}

afterEach(() => {
    vi.restoreAllMocks();
});

describe("props", () => {
    it("should not be visible when isOpen is false", () => {
        expect.assertions(1);
        const wrapper = mount(TestComponent);
        expect(wrapper).not.toContain(".ipopupmenu__list");
    });

    it("should have same number of items as in props items when isOpen is true", async () => {
        expect.assertions(1);
        vi.spyOn(window, "scrollTo").mockReturnValue();

        const wrapper = mount(TestComponent);
        await openPopup(wrapper);

        const ipopupmenuList = wrapper.get(".ipopupmenu__list");
        const items = ipopupmenuList.findAll(".ipopupmenu__list__item");

        expect(items).toHaveLength(testItems.length);
    });
});

describe("events", () => {
    it("should set gotCloseEvent to true on click item", async () => {
        expect.assertions(1);
        vi.spyOn(window, "scrollTo").mockReturnValue();

        const wrapper = mount(TestComponent);
        await openPopup(wrapper);

        const ipopupmenuList = wrapper.get(".ipopupmenu__list");
        const firstItem = ipopupmenuList.findAll(
            ".ipopupmenu__list__item > a",
        )[0];

        await firstItem.trigger("click");
        await wrapper.vm.$nextTick();

        expect(wrapper.vm.$data.gotCloseEvent).toBeTruthy();
    });
});

describe("v-model", () => {
    it("should update v-model when item is selected", async () => {
        expect.assertions(1);
        const testWrapper = mount(TestComponent);
        await openPopup(testWrapper);

        const wrapper = testWrapper.getComponent(IPopupMenu);
        const items = wrapper.findAll("a");
        await items.at(1)!.trigger("click");

        expect(wrapper.emitted("update:modelValue")).toMatchInlineSnapshot(`
            [
              [
                "MENU_2",
              ],
            ]
        `);
    });

    it("should emit select event when item is selected", async () => {
        expect.assertions(1);
        const testWrapper = mount(TestComponent);
        await openPopup(testWrapper);

        const wrapper = testWrapper.getComponent(IPopupMenu);
        const items = wrapper.findAll("a");
        await items.at(0)!.trigger("click");

        expect(wrapper.emitted("select")).toMatchInlineSnapshot(`
            [
              [
                "MENU_1",
              ],
            ]
        `);
    });

    it("should test that focus is set on first item and not on previously highlighted item", async () => {
        expect.assertions(3);
        vi.spyOn(window, "scrollTo").mockReturnValue();

        const wrapper = mount(TestComponent);
        await openPopup(wrapper);

        const imenuList = wrapper.get(".ipopupmenu__list");
        const secondItem = imenuList.findAll(".ipopupmenu__list__item > a")[1];

        // this will close the popup
        await secondItem.trigger("click");
        await wrapper.vm.$nextTick();

        const secondTestItemKey = testItems[1].key;
        expect(wrapper.vm.$data.selectedItem).toBe(secondTestItemKey);

        // reopen the popup
        await openPopup(wrapper);

        // check that the selected item is still the second item
        expect(wrapper.vm.$data.selectedItem).toBe(secondTestItemKey);
        // but the current focused item is the first one (see component requirements)
        expect(
            wrapper.getComponent(IPopupMenu).vm.$data.currentFocusedItemIndex,
        ).toBe(0);
    });
});

describe("html-validate", () => {
    it("should require is-open attribute", async () => {
        expect.assertions(1);
        const markup = /* HTML */ ` <i-popup-menu items></i-popup-menu> `;
        await expect(markup).toMatchInlineCodeframe(`
          "error: <i-popup-menu> is missing required "is-open" attribute (element-required-attributes)
          > 1 |  <i-popup-menu items></i-popup-menu>
              |   ^^^^^^^^^^^^
          Selector: i-popup-menu"
        `);
    });

    it("should allow setting is-open boolean attribute", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <i-popup-menu is-open items=""></i-popup-menu>
        `;
        await expect(markup).toBeValid();
    });

    it("should not allow setting is-open value", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <i-popup-menu is-open="" items=""></i-popup-menu>
        `;
        await expect(markup).toMatchInlineCodeframe(`
          "error: Attribute "is-open" should omit value (attribute-boolean-style)
            1 |
          > 2 |             <i-popup-menu is-open="" items=""></i-popup-menu>
              |                           ^^^^^^^
            3 |
          Selector: i-popup-menu"
        `);
    });

    it("should allow setting anchor attribute", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <i-popup-menu is-open items="" anchor=""></i-popup-menu>
        `;
        await expect(markup).toBeValid();
    });

    it("should require items attribute", async () => {
        expect.assertions(1);
        const markup = /* HTML */ ` <i-popup-menu is-open></i-popup-menu> `;
        await expect(markup).toMatchInlineCodeframe(`
          "error: <i-popup-menu> is missing required "items" attribute (element-required-attributes)
          > 1 |  <i-popup-menu is-open></i-popup-menu>
              |   ^^^^^^^^^^^^
          Selector: i-popup-menu"
        `);
    });

    it("should not be allowed in interactive components", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <button type="button">
                <i-popup-menu is-open items></i-popup-menu>
                button text
            </button>
        `;
        await expect(markup).toMatchInlineCodeframe(`
          "error: <i-popup-menu> element is not permitted as content under <button> (element-permitted-content)
            1 |
            2 |             <button type="button">
          > 3 |                 <i-popup-menu is-open items></i-popup-menu>
              |                  ^^^^^^^^^^^^
            4 |                 button text
            5 |             </button>
            6 |
          Selector: button > i-popup-menu"
        `);
    });

    it("should not allow interactive children", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <i-popup-menu is-open items>
                <button type="button">button text</button>
            </i-popup-menu>
        `;
        await expect(markup).toMatchInlineCodeframe(`
          "error: <i-popup-menu> must not have text content (text-content)
            1 |
          > 2 |             <i-popup-menu is-open items>
              |              ^^^^^^^^^^^^
            3 |                 <button type="button">button text</button>
            4 |             </i-popup-menu>
            5 |
          Selector: i-popup-menu
          error: <button> element is not permitted as content under <i-popup-menu> (element-permitted-content)
            1 |
            2 |             <i-popup-menu is-open items>
          > 3 |                 <button type="button">button text</button>
              |                  ^^^^^^
            4 |             </i-popup-menu>
            5 |
          Selector: i-popup-menu > button"
        `);
    });

    it("should not allow child elements", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <i-popup-menu is-open items>
                <em></em>
            </i-popup-menu>
        `;
        await expect(markup).toMatchInlineCodeframe(`
          "error: <em> element is not permitted as content under <i-popup-menu> (element-permitted-content)
            1 |
            2 |             <i-popup-menu is-open items>
          > 3 |                 <em></em>
              |                  ^^
            4 |             </i-popup-menu>
            5 |
          Selector: i-popup-menu > em"
        `);
    });

    it("should not allow text", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <i-popup-menu is-open items> mjukglass </i-popup-menu>
        `;
        await expect(markup).toMatchInlineCodeframe(`
          "error: <i-popup-menu> must not have text content (text-content)
            1 |
          > 2 |             <i-popup-menu is-open items> mjukglass </i-popup-menu>
              |              ^^^^^^^^^^^^
            3 |
          Selector: i-popup-menu"
        `);
    });
});
