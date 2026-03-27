import "html-validate/jest";
import { defineComponent } from "vue";
import { VueWrapper, mount } from "@vue/test-utils";
import flushPromises from "flush-promises";
import IPopupMenu from "./IPopupMenu.vue";

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

async function mountPopup(): Promise<
    VueWrapper<InstanceType<typeof TestComponent>>
> {
    const wrapper = mount(TestComponent, {
        global: {
            stubs: ["teleport"],
        },
    });
    await flushPromises();
    return wrapper;
}

async function openPopup(wrapper: VueWrapper): Promise<void> {
    await wrapper.get("#launch-popup").trigger("click");
    await flushPromises();
}

afterEach(() => {
    jest.restoreAllMocks();
});

describe("props", () => {
    it("should not be visible when isOpen is false", async () => {
        const wrapper = await mountPopup();
        expect(wrapper).not.toContain(".ipopupmenu__list");
    });

    it("should have same number of items as in props items when isOpen is true", async () => {
        jest.spyOn(window, "scrollTo").mockReturnValue();

        const wrapper = await mountPopup();
        await openPopup(wrapper);

        const ipopupmenuList = wrapper.get(".ipopupmenu__list");
        const items = ipopupmenuList.findAll(".ipopupmenu__list__item");

        expect(items).toHaveLength(testItems.length);
    });
});

describe("events", () => {
    it("should set gotCloseEvent to true on click item", async () => {
        jest.spyOn(window, "scrollTo").mockReturnValue();

        const wrapper = await mountPopup();
        await openPopup(wrapper);

        const ipopupmenuList = wrapper.get(".ipopupmenu__list");
        const firstItem = ipopupmenuList.findAll(
            ".ipopupmenu__list__item > a",
        )[0];

        await firstItem.trigger("click");
        await wrapper.vm.$nextTick();
        await flushPromises();

        expect(wrapper.vm.$data["gotCloseEvent"]).toBeTruthy();
    });
});

describe("v-model", () => {
    it("should update v-model when item is selected", async () => {
        const testWrapper = await mountPopup();
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
        const testWrapper = await mountPopup();
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
        jest.spyOn(window, "scrollTo").mockReturnValue();

        const wrapper = await mountPopup();
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
    it("should require is-open attribute", () => {
        expect("<i-popup-menu></i-popup-menu>").not.toHTMLValidate({
            ruleId: "element-required-attributes",
            message: '<i-popup-menu> is missing required "is-open" attribute',
        });
    });

    it("should allow setting is-open boolean attribute", () => {
        const markup = /* HTML */ `
            <i-popup-menu is-open items=""></i-popup-menu>
        `;
        expect(markup).toHTMLValidate();
    });

    it("should not allow setting is-open value", () => {
        const markup = /* HTML */ `
            <i-popup-menu is-open="" items=""></i-popup-menu>
        `;
        expect(markup).not.toHTMLValidate({
            ruleId: "attribute-boolean-style",
            message: 'Attribute "is-open" should omit value',
        });
    });

    it("should allow setting anchor attribute", () => {
        const markup = /* HTML */ `
            <i-popup-menu is-open items="" anchor=""></i-popup-menu>
        `;
        expect(markup).toHTMLValidate();
    });

    it("should require items attribute", () => {
        expect("<i-popup-menu></i-popup-menu>").not.toHTMLValidate({
            ruleId: "element-required-attributes",
            message: '<i-popup-menu> is missing required "items" attribute',
        });
    });

    it("should not be allowed in interactive components", () => {
        const markup = /* HTML */ `
            <button type="button">
                <i-popup-menu items=""></i-popup-menu>
            </button>
        `;
        expect(markup).not.toHTMLValidate({
            ruleId: "element-permitted-content",
            message:
                "<i-popup-menu> element is not permitted as content under <button>",
        });
    });

    it("should not allow interactive children", () => {
        const markup = /* HTML */ `
            <i-popup-menu items="">
                <button type="button"></button>
            </i-popup-menu>
        `;
        expect(markup).not.toHTMLValidate({
            ruleId: "element-permitted-content",
            message:
                "<button> element is not permitted as content under <i-popup-menu>",
        });
    });

    it("should not allow child elements", () => {
        const markup = /* HTML */ `
            <i-popup-menu items="">
                <em></em>
            </i-popup-menu>
        `;
        expect(markup).not.toHTMLValidate({
            ruleId: "element-permitted-content",
            message:
                "<em> element is not permitted as content under <i-popup-menu>",
        });
    });

    it("should not allow text", () => {
        const markup = /* HTML */ `
            <i-popup-menu items=""> mjukglass </i-popup-menu>
        `;
        expect(markup).not.toHTMLValidate({
            ruleId: "text-content",
            message: "<i-popup-menu> must not have text content",
        });
    });
});
