import "html-validate/jest";
import "@fkui/test-utils/jest";
import { defineComponent } from "vue";
import logic from "@fkui/logic";
import { createPlaceholderInDocument } from "@fkui/test-utils/vue";
import { VueWrapper, mount } from "@vue/test-utils";
import flushPromises from "flush-promises";
import {
    FileSystemConfigLoader,
    HtmlValidate,
    cjsResolver,
} from "html-validate/node";
import { IFlexItem } from "../../internal-components/IFlex";
import { ErrorItem } from "../../types";
import { FIcon } from "../FIcon";
import FErrorList from "./FErrorList.vue";

function createWrapper({
    props = {},
    slots = {},
    attrs = {},
} = {}): VueWrapper {
    return mount(FErrorList, {
        attrs: { ...attrs },
        props: { items: [], ...props },
        slots: { ...slots },
        global: {
            stubs: ["FIcon"],
        },
    });
}

describe("snapshots", () => {
    it("should match snapshot when link", () => {
        const wrapper = createWrapper({
            props: {
                items: [{ id: "foo", title: "With link" }],
            },
        });
        expect(wrapper.find("li").element).toMatchSnapshot();
    });

    it("should match snapshot when no link", () => {
        const wrapper = createWrapper({
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
        const wrapper = createWrapper({
            slots: {
                title: "lorem ipsum",
            },
        });
        const item = wrapper.findAllComponents(IFlexItem)[2];
        expect(item.text()).toContain("lorem ipsum");
    });

    it("should contain icon if title is present", () => {
        expect.assertions(1);
        const wrapper = createWrapper({
            slots: {
                title: "lorem ipsum",
            },
        });
        const item = wrapper.findComponent(FIcon);
        expect(item.exists()).toBeTruthy();
    });

    it("should not contain icon if title is not present", () => {
        expect.assertions(1);
        const wrapper = createWrapper();
        const item = wrapper.findComponent(FIcon);
        expect(item.exists()).toBeFalsy();
    });
});

describe("navigation", () => {
    function createWrapperWithErrorListAndInputs(
        items: ErrorItem[],
    ): VueWrapper {
        const TestComponent = defineComponent({
            name: "TestComponent",
            components: {
                FErrorList,
            },
            template: /* HTML */ `
                <div>
                    <f-error-list :items="items"></f-error-list>
                    <input id="id" />
                    <input id="focus-element-id" />
                </div>
            `,
            data() {
                return {
                    items,
                };
            },
        });

        return mount(TestComponent, {
            attachTo: createPlaceholderInDocument(),
        });
    }

    it("should scroll to and focus on id element when focus element is missing", async () => {
        window.scrollTo = jest.fn();
        const logicScrollToMock = jest.spyOn(logic, "scrollTo");

        const wrapper = createWrapperWithErrorListAndInputs([
            {
                title: "Required",
                id: "id",
                focusElementId: "missing-focus-element-id",
            },
        ]);
        await flushPromises();

        const anchor = wrapper.get("a");
        anchor.trigger("click");
        await flushPromises();

        const idElement = wrapper.find("#id").element;
        expect(logicScrollToMock).toHaveBeenCalledWith(
            idElement,
            expect.anything(),
        );
        expect(idElement).toHaveFocus();
    });

    it("should scroll to id element and focus on focus element when both elements exists", async () => {
        window.scrollTo = jest.fn();
        const logicScrollToMock = jest.spyOn(logic, "scrollTo");

        const wrapper = createWrapperWithErrorListAndInputs([
            {
                title: "Required",
                id: "id",
                focusElementId: "focus-element-id",
            },
        ]);
        await flushPromises();

        const anchor = wrapper.get("a");
        anchor.trigger("click");
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
    const loader = new FileSystemConfigLoader([cjsResolver()], {
        extends: [
            "html-validate:recommended",
            "html-validate-vue:recommended",
            "@fkui/vue:recommended",
        ],
        plugins: ["<rootDir>/htmlvalidate", "html-validate-vue"],
    });
    const htmlvalidate = new HtmlValidate(loader);

    describe("items attribute", () => {
        it("should be required", async () => {
            expect.assertions(1);
            const markup = /* HTML */ ` <f-error-list></f-error-list> `;
            const report = await htmlvalidate.validateString(markup);
            expect(report).toMatchInlineCodeframe(`
                "error: <f-error-list> is missing required "items" attribute (element-required-attributes)
                > 1 |  <f-error-list></f-error-list>
                    |   ^^^^^^^^^^^^
                Selector: f-error-list"
            `);
        });
    });
});
