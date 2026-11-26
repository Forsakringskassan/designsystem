import "html-validate/vitest";
import { config, mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import FCrudButton from "./FCrudButton.vue";

config.global.provide = {
    delete() {
        /* do nothing */
    },
    modify() {
        /* do nothing */
    },
};
config.global.stubs = {
    FIcon: true,
};

describe("snapshot", () => {
    it("should match snapshot when action = modify", () => {
        expect.assertions(1);
        const wrapper = mount(FCrudButton, {
            props: {
                action: "modify",
                item: { id: 1, name: "test" },
            },
        });
        expect(wrapper.element).toMatchSnapshot();
    });

    it("should match snapshot when action = delete", () => {
        expect.assertions(1);
        const wrapper = mount(FCrudButton, {
            props: {
                action: "delete",
                item: { id: 1, name: "test" },
            },
        });
        expect(wrapper.element).toMatchSnapshot();
    });

    it("should match snapshot when only icon is used", () => {
        expect.assertions(1);
        const wrapper = mount(FCrudButton, {
            props: {
                action: "modify",
                icon: true,
                item: { id: 1, name: "test" },
            },
        });
        expect(wrapper.element).toMatchSnapshot();
    });

    it("should match snapshot when only label is used", () => {
        expect.assertions(1);
        const wrapper = mount(FCrudButton, {
            props: {
                action: "modify",
                label: true,
                item: { id: 1, name: "test" },
            },
        });
        expect(wrapper.element).toMatchSnapshot();
    });

    it("should match snapshot when both label and icon is used", () => {
        expect.assertions(1);
        const wrapper = mount(FCrudButton, {
            props: {
                action: "modify",
                label: true,
                icon: true,
                item: { id: 1, name: "test" },
            },
        });
        expect(wrapper.element).toMatchSnapshot();
    });
});

describe("html-validate", () => {
    it("should require action attribute", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <!-- [html-validate-disable deprecated -- component should still work] -->
            <f-crud-dataset>
                <template #default>
                    <f-crud-button item="test"></f-crud-button>
                </template>
            </f-crud-dataset>
        `;
        await expect(markup).toMatchInlineCodeframe(`
            "error: <f-crud-button> is missing required "action" attribute (element-required-attributes)
              3 |             <f-crud-dataset>
              4 |                 <template #default>
            > 5 |                     <f-crud-button item="test"></f-crud-button>
                |                      ^^^^^^^^^^^^^
              6 |                 </template>
              7 |             </f-crud-dataset>
              8 |
            Selector: f-crud-dataset > template > f-crud-button"
        `);
    });

    it("should require item attribute", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <!-- [html-validate-disable deprecated -- component should still work] -->
            <f-crud-dataset>
                <template #default>
                    <f-crud-button action="modify"></f-crud-button>
                </template>
            </f-crud-dataset>
        `;
        await expect(markup).toMatchInlineCodeframe(`
            "error: <f-crud-button> is missing required "item" attribute (element-required-attributes)
              3 |             <f-crud-dataset>
              4 |                 <template #default>
            > 5 |                     <f-crud-button action="modify"></f-crud-button>
                |                      ^^^^^^^^^^^^^
              6 |                 </template>
              7 |             </f-crud-dataset>
              8 |
            Selector: f-crud-dataset > template > f-crud-button"
        `);
    });

    it("should only allow actions modify and delete", async () => {
        expect.assertions(3);
        const markup = (action: string): string => /* HTML */ `
            <!-- [html-validate-disable deprecated -- component should still work] -->
            <f-crud-dataset>
                <template #default>
                    <f-crud-button
                        action="${action}"
                        item="test"
                    ></f-crud-button>
                </template>
            </f-crud-dataset>
        `;
        await expect(markup("modify")).toBeValid();
        await expect(markup("delete")).toBeValid();
        await expect(markup("foobar")).toMatchInlineCodeframe(`
            "error: Attribute "action" has invalid value "foobar" (attribute-allowed-values)
              4 |                 <template #default>
              5 |                     <f-crud-button
            > 6 |                         action="foobar"
                |                                 ^^^^^^
              7 |                         item="test"
              8 |                     ></f-crud-button>
              9 |                 </template>
            Selector: f-crud-dataset > template > f-crud-button"
        `);
    });

    it("should require f-crud-dataset as ancestor", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <!-- [html-validate-disable deprecated -- component should still work] -->
            <f-crud-button action="modify" item="test"></f-crud-button>
        `;
        await expect(markup).toMatchInlineCodeframe(`
            "error: <f-crud-button> element requires a <f-crud-dataset> ancestor (element-required-ancestor)
              1 |
              2 |             <!-- [html-validate-disable deprecated -- component should still work] -->
            > 3 |             <f-crud-button action="modify" item="test"></f-crud-button>
                |              ^^^^^^^^^^^^^
              4 |
            Selector: f-crud-button"
        `);
    });
});
