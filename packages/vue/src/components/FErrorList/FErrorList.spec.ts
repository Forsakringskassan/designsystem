import "html-validate/vitest";
import "@fkui/test-utils/vitest";
import { type PropType, defineComponent } from "vue";
import * as logic from "@fkui/logic";
import { mount } from "@vue/test-utils";
import flushPromises from "flush-promises";
import { describe, expect, it, vi } from "vitest";
import { IFlexItem } from "../../internal-components/IFlex";
import { type ErrorItem } from "../../types";
import { FIcon } from "../FIcon";
import FErrorList from "./FErrorList.vue";

describe("snapshots", () => {
    it("should match snapshot when link", () => {
        expect.assertions(1);
        const wrapper = mount(FErrorList, {
            props: {
                items: [{ id: "foo", title: "With link" }],
            },
        });
        expect(wrapper.find("li").element).toMatchSnapshot();
    });

    it("should match snapshot when no link", () => {
        expect.assertions(1);
        const wrapper = mount(FErrorList, {
            props: {
                items: [{ title: "With no link" }],
            },
        });
        expect(wrapper.find("li").element).toMatchSnapshot();
    });
});

describe("title slot", () => {
    it("should contain text if title is present", () => {
        expect.assertions(1);
        const wrapper = mount(FErrorList, {
            props: { items: [] },
            slots: {
                title: "lorem ipsum",
            },
        });
        const item = wrapper.findAllComponents(IFlexItem)[2];
        expect(item.text()).toContain("lorem ipsum");
    });

    it("should contain icon if title is present", () => {
        expect.assertions(1);
        const wrapper = mount(FErrorList, {
            props: { items: [] },
            slots: {
                title: "lorem ipsum",
            },
        });
        const item = wrapper.findComponent(FIcon);
        expect(item.exists()).toBeTruthy();
    });

    it("should not contain icon if title is not present", () => {
        expect.assertions(1);
        const wrapper = mount(FErrorList, {
            props: { items: [] },
        });
        const item = wrapper.findComponent(FIcon);
        expect(item.exists()).toBeFalsy();
    });
});

describe("navigation", () => {
    const TestComponent = defineComponent({
        name: "TestComponent",
        components: {
            FErrorList,
        },
        props: {
            items: {
                type: Array as PropType<ErrorItem[]>,
                required: true,
            },
        },
        template: /* HTML */ `
            <div>
                <f-error-list :items="items"></f-error-list>
                <input id="id" />
                <input id="focus-element-id" />
            </div>
        `,
    });

    it("should scroll to and focus on id element when focus element is missing", async () => {
        expect.assertions(2);
        vi.spyOn(window, "scrollTo").mockImplementation(() => {
            //Empty
        });
        const logicScrollToMock = vi.spyOn(logic, "scrollTo");

        const wrapper = mount(TestComponent, {
            props: {
                items: [
                    {
                        title: "Required",
                        id: "id",
                        focusElementId: "missing-focus-element-id",
                    },
                ],
            },
            attachTo: document.body,
        });
        await flushPromises();

        const anchor = wrapper.get("a");
        await anchor.trigger("click");
        await flushPromises();

        const idElement = wrapper.find("#id").element;
        expect(logicScrollToMock).toHaveBeenCalledWith(
            idElement,
            expect.anything(),
        );
        expect(idElement).toHaveFocus();
    });

    it("should scroll to id element and focus on focus element when both elements exists", async () => {
        expect.assertions(2);
        vi.spyOn(window, "scrollTo").mockImplementation(() => {
            //Empty
        });
        const logicScrollToMock = vi.spyOn(logic, "scrollTo");

        const wrapper = mount(TestComponent, {
            props: {
                items: [
                    {
                        title: "Required",
                        id: "id",
                        focusElementId: "focus-element-id",
                    },
                ],
            },
            attachTo: document.body,
        });
        await flushPromises();

        const anchor = wrapper.get("a");
        await anchor.trigger("click");
        await flushPromises();

        const idElement = wrapper.find("#id").element;
        expect(logicScrollToMock).toHaveBeenCalledWith(
            idElement,
            expect.anything(),
        );

        const focusIdElement = wrapper.find("#focus-element-id").element;
        expect(focusIdElement).toHaveFocus();
    });
});

describe("htmlvalidate", () => {
    describe("items attribute", () => {
        it("should be required", async () => {
            expect.assertions(1);
            const markup = /* HTML */ ` <f-error-list></f-error-list> `;
            await expect(markup).toMatchInlineCodeframe(`
                "error: <f-error-list> is missing required "items" attribute (element-required-attributes)
                > 1 |  <f-error-list></f-error-list>
                    |   ^^^^^^^^^^^^
                Selector: f-error-list"
            `);
        });
    });
});
