import { provide } from "vue";
import { config, mount, shallowMount } from "@vue/test-utils";
import { afterEach, describe, expect, it, vi } from "vitest";
import FTableColumn from "./FTableColumn.vue";
import "html-validate/vitest";
import { FTableColumnSize, FTableColumnSort } from "./f-table-column-data";

config.global.provide = {
    addColumn() {
        /* do nothing */
    },
    setVisibilityColumn() {
        /* do nothing */
    },
};

describe("should set type class for", () => {
    it.each`
        description  | type         | className
        ${"default"} | ${undefined} | ${"table__column--text"}
        ${"text"}    | ${"text"}    | ${"table__column--text"}
        ${"numeric"} | ${"numeric"} | ${"table__column--numeric"}
        ${"date"}    | ${"date"}    | ${"table__column--date"}
        ${"action"}  | ${"action"}  | ${"table__column--action"}
    `("$description", ({ type, className }) => {
        expect.assertions(1);
        const wrapper = shallowMount(FTableColumn, {
            props: {
                title: "Mock",
                type,
            },
        });
        expect(wrapper.classes()).toContain(className);
    });
});

it("should render as a <td> element by default", () => {
    expect.assertions(1);
    const wrapper = shallowMount(FTableColumn, {
        props: {
            title: "Mock",
        },
    });
    expect(wrapper.element.tagName).toBe("TD");
});

it("should render as a <th> element when rowHeader is set", () => {
    expect.assertions(1);
    const wrapper = shallowMount(FTableColumn, {
        props: {
            title: "Mock",
            rowHeader: true,
        },
    });
    expect(wrapper.element.tagName).toBe("TH");
});

it("should set scope when rowHeader is set", () => {
    expect.assertions(1);
    const wrapper = shallowMount(FTableColumn, {
        props: {
            title: "Mock",
            rowHeader: true,
        },
    });
    expect(wrapper.attributes("scope")).toBe("row");
});

it("should be transparent", () => {
    expect.assertions(1);
    const wrapper = shallowMount(FTableColumn, {
        attrs: {
            foo: "bar",
        },
        props: {
            title: "Mock",
        },
    });
    expect(wrapper.attributes("foo")).toBe("bar");
});

it("should not render any content unless renderColumns is enabled", async () => {
    expect.assertions(1);
    const wrapper = shallowMount(FTableColumn, {
        props: {
            title: "Mock",
        },
        global: {
            provide: {
                renderColumns: false,
            },
        },
    });
    /* eslint-disable-next-line @typescript-eslint/no-unsafe-call -- false positive */
    await wrapper.vm.$nextTick();
    expect(wrapper.find("*").exists()).toBeFalsy();
});

describe("when in `<thead>`", () => {
    afterEach(() => {
        vi.restoreAllMocks();
    });

    it("should only render element on mount", async () => {
        expect.assertions(2);
        const TestComponent = {
            components: { FTableColumn },
            template: /* HTML */ `
                <table>
                    <thead>
                        <tr>
                            <f-table-column
                                title="Mock column"
                            ></f-table-column>
                        </tr>
                    </thead>
                </table>
            `,
            setup() {
                provide("addColumn", vi.fn());
                provide("setVisibilityColumn", vi.fn());
                provide("renderColumns", true);
            },
        };
        const wrapper = mount(TestComponent);
        /* eslint-disable-next-line @typescript-eslint/no-unsafe-call -- technical debt */
        expect(wrapper.element.querySelector("td")).toMatchInlineSnapshot(`
            <td
              class="table__column table__column--text"
            >
              <div
                class="table__column__wrapper"
              >
                <!--v-if-->
              </div>
            </td>
        `);

        await wrapper.vm.$nextTick();
        /* eslint-disable-next-line @typescript-eslint/no-unsafe-call -- technical debt */
        expect(wrapper.element.querySelector("tr")).toMatchInlineSnapshot(`
            <tr>
              <!--v-if-->
            </tr>
        `);
    });

    it("should not throw on undefined object in content", () => {
        expect.assertions(1);
        const TestComponent = {
            components: { FTableColumn },
            template: /* HTML */ `
                <table>
                    <thead>
                        <tr>
                            <f-table-column title="Mock column">
                                {{ row.content.deep }}
                            </f-table-column>
                        </tr>
                    </thead>
                </table>
            `,
            setup() {
                provide("addColumn", vi.fn());
                provide("setVisibilityColumn", vi.fn());
                provide("renderColumns", true);
            },
            data() {
                return {
                    row: {},
                };
            },
        };
        expect(() => {
            mount(TestComponent);
        }).not.toThrow();
    });

    it("should register when mounted", async () => {
        expect.assertions(1);
        const addColumn = vi.fn();
        const TestComponent = {
            components: { FTableColumn },
            template: /* HTML */ `
                <table>
                    <thead>
                        <tr>
                            <f-table-column
                                name="mock"
                                title="Mock column"
                                description="My fancy column"
                                type="numeric"
                                shrink
                            ></f-table-column>
                        </tr>
                    </thead>
                </table>
            `,
            setup() {
                provide("addColumn", addColumn);
                provide("setVisibilityColumn", vi.fn());
            },
        };
        const wrapper = mount(TestComponent);

        await wrapper.vm.$nextTick();
        expect(addColumn).toHaveBeenCalledWith({
            id: "column-vue-element-0001",
            name: "mock",
            title: "Mock column",
            description: "My fancy column",
            size: FTableColumnSize.SHRINK,
            type: "numeric",
            visible: true,
            sortable: false,
            sort: FTableColumnSort.UNSORTED,
        });
    });

    it("should default to size expanded", async () => {
        expect.assertions(1);
        const addColumn = vi.fn();
        const TestComponent = {
            components: { FTableColumn },
            template: /* HTML */ `
                <table>
                    <thead>
                        <tr>
                            <f-table-column
                                title="Mock column"
                            ></f-table-column>
                        </tr>
                    </thead>
                </table>
            `,
            setup() {
                provide("addColumn", addColumn);
                provide("setVisibilityColumn", vi.fn());
            },
        };
        const wrapper = mount(TestComponent);

        await wrapper.vm.$nextTick();
        expect(addColumn).toHaveBeenCalledWith(
            expect.objectContaining({
                size: FTableColumnSize.EXPAND,
            }),
        );
    });

    it("should set size to expanded when expand is enabled", async () => {
        expect.assertions(1);
        const addColumn = vi.fn();
        const TestComponent = {
            components: { FTableColumn },
            template: /* HTML */ `
                <table>
                    <thead>
                        <tr>
                            <f-table-column
                                title="Mock column"
                                expand
                            ></f-table-column>
                        </tr>
                    </thead>
                </table>
            `,
            setup() {
                provide("addColumn", addColumn);
                provide("setVisibilityColumn", vi.fn());
            },
        };
        const wrapper = mount(TestComponent);

        await wrapper.vm.$nextTick();
        expect(addColumn).toHaveBeenCalledWith(
            expect.objectContaining({
                size: FTableColumnSize.EXPAND,
            }),
        );
    });

    it("should set size to shrink when shrink is enabled", async () => {
        expect.assertions(1);
        const addColumn = vi.fn();
        const TestComponent = {
            components: { FTableColumn },
            template: /* HTML */ `
                <table>
                    <thead>
                        <tr>
                            <f-table-column
                                title="Mock"
                                shrink
                            ></f-table-column>
                        </tr>
                    </thead>
                </table>
            `,
            setup() {
                provide("addColumn", addColumn);
                provide("setVisibilityColumn", vi.fn());
            },
        };
        const wrapper = mount(TestComponent);

        await wrapper.vm.$nextTick();
        expect(addColumn).toHaveBeenCalledWith(
            expect.objectContaining({
                size: FTableColumnSize.SHRINK,
            }),
        );
    });

    it("should throw error if both shrink and expand is enabled at the same time", () => {
        expect.assertions(1);
        /* prevent vue from dumping the error on stdout */
        vi.spyOn(console, "error").mockImplementation(() => undefined);
        const TestComponent = {
            components: { FTableColumn },
            template: /* HTML */ `
                <table>
                    <thead>
                        <tr>
                            <f-table-column
                                title="Mock"
                                shrink
                                expand
                            ></f-table-column>
                        </tr>
                    </thead>
                </table>
            `,
            setup() {
                provide("addColumn", vi.fn());
                provide("setVisibilityColumn", vi.fn());
            },
        };
        expect(() => {
            mount(TestComponent);
        }).toThrowErrorMatchingInlineSnapshot(
            `[Error: Table cannot have both shrink and expand enabled at the same time]`,
        );
    });
});

describe("html-validate", () => {
    it("should require title attribute", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-table-column></f-table-column>
            <f-table-column title=""></f-table-column>
        `;
        await expect(markup).toMatchInlineCodeframe(`
          "error: <f-table-column> is missing required "title" attribute (element-required-attributes)
            1 |
          > 2 |             <f-table-column></f-table-column>
              |              ^^^^^^^^^^^^^^
            3 |             <f-table-column title=""></f-table-column>
            4 |
          Selector: f-table-column:nth-child(1)
          error: Attribute "title" has invalid value "" (attribute-allowed-values)
            1 |
            2 |             <f-table-column></f-table-column>
          > 3 |             <f-table-column title=""></f-table-column>
              |                             ^^^^^
            4 |
          Selector: f-table-column:nth-child(2)"
        `);
    });

    it("should not allow invalid types", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-table-column title="Column title" type="foobar"></f-table-column>
        `;
        await expect(markup).toMatchInlineCodeframe(`
          "error: Attribute "type" has invalid value "foobar" (attribute-allowed-values)
            1 |
          > 2 |             <f-table-column title="Column title" type="foobar"></f-table-column>
              |                                                        ^^^^^^
            3 |
          Selector: f-table-column"
        `);
    });

    it("should not allow empty description", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-table-column
                title="Column title"
                description=""
            ></f-table-column>
        `;
        await expect(markup).toMatchInlineCodeframe(`
          "error: Attribute "description" has invalid value "" (attribute-allowed-values)
            2 |             <f-table-column
            3 |                 title="Column title"
          > 4 |                 description=""
              |                 ^^^^^^^^^^^
            5 |             ></f-table-column>
            6 |
          Selector: f-table-column"
        `);
    });

    it("should not allow flow content", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-table-column title="Column title">
                <div></div>
            </f-table-column>
        `;
        await expect(markup).toMatchInlineCodeframe(`
          "error: <div> element is not permitted as content under <f-table-column> (element-permitted-content)
            1 |
            2 |             <f-table-column title="Column title">
          > 3 |                 <div></div>
              |                  ^^^
            4 |             </f-table-column>
            5 |
          Selector: f-table-column > div"
        `);
    });

    it("should allow phrasing content", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-table-column name="foo" title="Foo">
                <span></span>
            </f-table-column>
        `;
        await expect(markup).toBeValid();
    });

    it("should allow button content", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-table-column name="foo" title="Foo">
                <button type="button">Foo</button>
            </f-table-column>
        `;
        await expect(markup).toBeValid();
    });
});
