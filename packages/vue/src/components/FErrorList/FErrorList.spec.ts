import "html-validate/jest";
import "@fkui/test-utils/jest";
import { VueWrapper, mount } from "@vue/test-utils";
import { createPlaceholderInDocument } from "@fkui/test-utils/vue";
import { defineComponent } from "vue";
import flushPromises from "flush-promises";
import logic from "@fkui/logic";
import {
    cjsResolver,
    FileSystemConfigLoader,
    HtmlValidate,
} from "html-validate/node";
import { ErrorItem } from "../../types";
import { FIcon } from "../FIcon";
import { IFlexItem } from "../../internal-components/IFlex";
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
    it("should match snapshot when link and no bullets (default)", () => {
        const wrapper = createWrapper({
            props: {
                items: [{ id: "foo", title: "No bullets" }],
            },
        });
        /* eslint-disable-next-line jest/no-large-snapshots -- technical debt */
        expect(wrapper.find("li").element).toMatchInlineSnapshot(`
            <li
              class="error-list__link"
            >
              <a
                href="javascript:"
              >
                
                No bullets
                
              </a>
            </li>
        `);
    });

    it("should match snapshot when no link and no bullets (default)", () => {
        const wrapper = createWrapper({
            props: {
                items: [{ title: "No bullets" }],
            },
        });
        expect(wrapper.find("li").element).toMatchInlineSnapshot(`
            <li
              class=""
            >
              
              
              No bullets
              
              
            </li>
        `);
    });

    it("should match snapshot when link and bullets", () => {
        const wrapper = createWrapper({
            props: {
                items: [{ id: "foo", title: "Bullet proof" }],
                bullets: true,
            },
        });
        /* eslint-disable-next-line jest/no-large-snapshots -- technical debt,
         * should add explicit tests for expected attributes or elements */
        expect(wrapper.find("li").element).toMatchInlineSnapshot(`
            <li
              class=""
            >
              <a
                href="javascript:"
              >
                
                <span
                  aria-hidden="true"
                  class="error-list__bullet"
                />
                <span
                  class="error-list__link"
                >
                  Bullet proof
                </span>
                
              </a>
            </li>
        `);
    });

    it("should match snapshot when no link and bullets", () => {
        const wrapper = createWrapper({
            props: {
                items: [{ title: "Bullet proof" }],
                bullets: true,
            },
        });
        /* eslint-disable-next-line jest/no-large-snapshots -- technical debt,
         * should add explicit tests for expected attributes or elements */
        expect(wrapper.find("li").element).toMatchInlineSnapshot(`
            <li
              class=""
            >
              
              
              <span
                aria-hidden="true"
                class="error-list__bullet"
              />
              <span>
                Bullet proof
              </span>
              
              
            </li>
        `);
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
                "error: <f-error-list> is missing required "items" attribute (element-required-attributes) at inline:1:3:
                > 1 |  <f-error-list></f-error-list>
                    |   ^^^^^^^^^^^^
                Selector: f-error-list"
            `);
        });
    });

    describe("bullets attribute", () => {
        it.each`
            bullets
            ${"true"}
            ${"false"}
        `("valid when value is $bullets", async ({ bullets }) => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-error-list items="[]" bullets="${bullets}"></f-error-list>
            `;
            const report = await htmlvalidate.validateString(markup);
            expect(report).toBeValid();
        });

        it("invalid", async () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-error-list items="[]" bullets="invalid"></f-error-list>
            `;
            const report = await htmlvalidate.validateString(markup);
            expect(report).toMatchInlineCodeframe(`
                "error: Attribute "bullets" has invalid value "invalid" (attribute-allowed-values) at inline:2:51:
                  1 |
                > 2 |                 <f-error-list items="[]" bullets="invalid"></f-error-list>
                    |                                                   ^^^^^^^
                  3 |
                Selector: f-error-list"
            `);
        });
    });
});
