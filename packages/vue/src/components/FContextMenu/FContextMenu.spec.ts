import { defineComponent } from "vue";
import "html-validate/jest";
import "@fkui/test-utils/jest";
import { VueWrapper, mount } from "@vue/test-utils";
import { createPlaceholderInDocument } from "@fkui/test-utils/vue";
import flushPromises from "flush-promises";
import { config } from "../../config";
import { type ContextMenuItem, isContextMenuTextItem } from "./contextmenuitem";
import FContextMenu from "./FContextMenu.vue";

config.teleportTarget = "#popup-target";

let wrapper: VueWrapper;

/**
 * The test data contains real items and separator(s)
 * 3 real items and 1 separator at the expected position
 * between label2 and label3
 */
const testItems1: ContextMenuItem[] = [
    { label: "label1", key: "MENU_1" },
    { label: "label2", key: "MENU_2", icon: "bell" },
    { separator: true },
    { label: "label3", key: "MENU_3", icon: "pen" },
];

// Returns the number of real menu items (without counting item separators)
function nbTextMenuItems(items: ContextMenuItem[]): number {
    return items.filter((it) => isContextMenuTextItem(it)).length;
}

async function mountPopup(testItems: ContextMenuItem[]): Promise<void> {
    const TestComponent = defineComponent({
        name: "TestComponent",
        components: {
            FContextMenu,
        },
        data() {
            return {
                isOpen: false,
                items: testItems,
                selectedItem: "",
                // separators after first and second item
                separatorPos: [0, 1],
            };
        },
        template: /* HTML */ `
            <div id="outside">
                <button
                    id="launch-popup"
                    ref="anchor"
                    @click="isOpen=true"
                ></button>
                <div id="popup-target"></div>
                <f-context-menu
                    :isOpen="isOpen"
                    :items="items"
                    :anchor="$refs.anchor"
                    @close="isOpen=false"
                    @select="selectedItem=$event"
                >
                </f-context-menu>
            </div>
        `,
    });
    wrapper = mount(TestComponent, {
        attachTo: createPlaceholderInDocument(), // for working with toHaveFocus
    });
    await flushPromises();
}

async function openPopup(): Promise<void> {
    await wrapper.get("#launch-popup").trigger("click");
    await flushPromises();
}

afterEach(() => {
    jest.restoreAllMocks();
});

describe("props", () => {
    it("should not be visible when isOpen is false", async () => {
        await mountPopup(testItems1);

        expect(wrapper).not.toContain(".contextmenu__list");
    });

    it("should have same number of items that are passed in with props", async () => {
        jest.spyOn(window, "scrollTo").mockReturnValue();

        await mountPopup(testItems1);
        await openPopup();

        const items = wrapper.findAll(".contextmenu__list__item");

        expect(items).toHaveLength(nbTextMenuItems(testItems1));
    });

    it("should contain 2 separators at correct positions", async () => {
        jest.spyOn(window, "scrollTo").mockReturnValue();

        /**
         * 3 text items and 2 separators at the expected position
         * between label1 and label2, between label2 and label3
         */
        const testItems2: ContextMenuItem[] = [
            { label: "label1", key: "MENU_1" },
            { separator: true },
            { label: "label2", key: "MENU_2", icon: "bell" },
            { separator: true },
            { label: "label3", key: "MENU_3", icon: "pen" },
        ];
        await mountPopup(testItems2);
        await openPopup();

        const listItems = wrapper.findAll("li");
        const separators = [
            listItems[0].get(".contextmenu__separator").element,
            listItems[1].get(".contextmenu__separator").element,
        ];
        expect(separators).toHaveLength(2);
    });
});

describe("events", () => {
    it("should emit close after select on item click", async () => {
        jest.spyOn(window, "scrollTo").mockReturnValue();

        await mountPopup(testItems1);
        await openPopup();

        const contextmenuList = wrapper.get(".contextmenu__list");
        const firstItem = contextmenuList.findAll(
            ".contextmenu__list__item > a",
        )[0];

        await firstItem.trigger("click");
        await wrapper.vm.$nextTick();
        await flushPromises();

        expect(wrapper.getComponent(FContextMenu).emitted().close).toBeTruthy();
    });

    it("should emit select for given item on item click", async () => {
        jest.spyOn(window, "scrollTo").mockReturnValue();

        await mountPopup(testItems1);
        await openPopup();

        const contextmenuList = wrapper.get(".contextmenu__list");
        const firstItem = contextmenuList.findAll(
            ".contextmenu__list__item > a",
        )[0];

        await firstItem.trigger("click");
        await wrapper.vm.$nextTick();
        await flushPromises();

        expect(
            wrapper.getComponent(FContextMenu).emitted().select,
        ).toStrictEqual([["MENU_1"]]);
    });

    it("should test that focus is not set on any item after being mounted", async () => {
        jest.spyOn(window, "scrollTo").mockReturnValue();

        await mountPopup(testItems1);
        await openPopup();

        const imenuList = wrapper.get(".contextmenu__list");
        const secondItem = imenuList.findAll(".contextmenu__list__item > a")[1];

        // Click on the second item, this will close the popup
        await secondItem.trigger("click");
        await wrapper.vm.$nextTick();
        await flushPromises();

        expect(
            wrapper.getComponent(FContextMenu).emitted().select,
        ).toStrictEqual([["MENU_2"]]);

        // reopen the popup
        await openPopup();

        expect(secondItem.element).not.toHaveFocus();
    });
});

describe("keyboard navigation", () => {
    it("should focus on first element after Tab is pressed", async () => {
        jest.spyOn(window, "scrollTo").mockReturnValue();

        // Given
        await mountPopup(testItems1);
        await openPopup();

        // after opening the popup the list has focus
        const imenuList = wrapper.get(".contextmenu__list");
        expect(imenuList.element).toHaveFocus();

        // When sending Tab to the element
        await imenuList.trigger("keydown", { key: "Tab" });
        await wrapper.vm.$nextTick();
        await flushPromises();

        // Then the first element will have focus
        const firstItem = imenuList.findAll(".contextmenu__list__item")[0];
        expect(firstItem.element).toHaveFocus();
    });

    it("should close popup after shift Tab is pressed directly after opening the popup", async () => {
        jest.spyOn(window, "scrollTo").mockReturnValue();

        // Given
        await mountPopup(testItems1);
        await openPopup();

        // after opening the popup the list has focus
        const imenuList = wrapper.get(".contextmenu__list");
        expect(imenuList.element).toHaveFocus();

        // When sending Shift+Tab to the element
        await imenuList.trigger("keydown", { key: "Tab", shiftKey: true });
        await wrapper.vm.$nextTick();
        await flushPromises();

        // the close event is received
        expect(wrapper.getComponent(FContextMenu).emitted().close).toBeTruthy();
    });

    it("should close popup after escape is pressed when popup is open", async () => {
        jest.spyOn(window, "scrollTo").mockReturnValue();

        // Given
        await mountPopup(testItems1);
        await openPopup();

        // after opening the popup the list has focus
        const imenuList = wrapper.get(".contextmenu__list");
        expect(imenuList.element).toHaveFocus();

        // When sending Esc to the element
        await imenuList.trigger("keydown", { key: "Escape" });
        await wrapper.vm.$nextTick();
        await flushPromises();

        // the close event is received
        expect(wrapper.getComponent(FContextMenu).emitted().close).toBeTruthy();
    });

    it("should wrap focus on arrow up when on first element", async () => {
        jest.spyOn(window, "scrollTo").mockReturnValue();

        // Given
        await mountPopup(testItems1);
        await openPopup();

        // after opening the popup the list has focus
        const imenuList = wrapper.get(".contextmenu__list");
        expect(imenuList.element).toHaveFocus();

        // When sending arrow up
        await imenuList.trigger("keydown", { key: "Up" });
        await wrapper.vm.$nextTick();
        await flushPromises();

        // Then the last item should have focus
        const listItems = wrapper.findAll(".contextmenu__list__item");
        expect(listItems[listItems.length - 1].element).toHaveFocus();
    });
});

describe("html-validate", () => {
    it("should require is-open and items attributes", () => {
        const markup = /* HTML */ ` <f-context-menu></f-context-menu> `;
        expect(markup).toMatchInlineCodeframe(`
            "error: <f-context-menu> is missing required "is-open" attribute (element-required-attributes) at inline:1:3:
            > 1 |  <f-context-menu></f-context-menu>
                |   ^^^^^^^^^^^^^^
            Selector: f-context-menu
            error: <f-context-menu> is missing required "items" attribute (element-required-attributes) at inline:1:3:
            > 1 |  <f-context-menu></f-context-menu>
                |   ^^^^^^^^^^^^^^
            Selector: f-context-menu"
        `);
    });

    it("should not be allowed in interactive components", () => {
        const markup = /* HTML */ `
            <button type="button">
                <f-context-menu anchor="" is-open items=""></f-context-menu>
            </button>
        `;
        expect(markup).not.toHTMLValidate({
            ruleId: "element-permitted-content",
            message:
                "<f-context-menu> element is not permitted as content under <button>",
        });
    });

    it("should not allow interactive children", () => {
        const markup = /* HTML */ `
            <f-context-menu anchor="" is-open items="">
                <button type="button"></button>
            </f-context-menu>
        `;
        expect(markup).not.toHTMLValidate({
            ruleId: "element-permitted-content",
            message:
                "<button> element is not permitted as content under <f-context-menu>",
        });
    });

    it("should not allow child elements", () => {
        const markup = /* HTML */ `
            <f-context-menu anchor="" is-open items="">
                <em></em>
            </f-context-menu>
        `;
        expect(markup).not.toHTMLValidate({
            ruleId: "element-permitted-content",
            message:
                "<em> element is not permitted as content under <f-context-menu>",
        });
    });

    it("should not allow text", () => {
        const markup = /* HTML */ `
            <f-context-menu anchor="" is-open items="">
                mjukglass
            </f-context-menu>
        `;
        expect(markup).not.toHTMLValidate({
            ruleId: "text-content",
            message: "<f-context-menu> must not have text content",
        });
    });
});
