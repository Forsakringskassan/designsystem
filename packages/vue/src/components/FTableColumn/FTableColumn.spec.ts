import { provide } from "vue";
import { mount, VueWrapper } from "@vue/test-utils";
import FTableColumn from "./FTableColumn.vue";
import "html-validate/jest";
import { FTableColumnSize, FTableColumnSort } from "./FTableColumnData";

function createWrapper({
    props = {},
    slots = {},
    attrs = {},
    provide = {},
    options = {},
} = {}): VueWrapper {
    return mount(FTableColumn, {
        attrs: { ...attrs },
        props: {
            name: "mock",
            title: "Mock",
            ...props,
        },
        slots: { ...slots },
        global: {
            provide: {
                addColumn: jest.fn(),
                setVisibilityColumn: jest.fn(),
                renderColumns: true,
                ...provide,
            },
        },
        ...options,
    });
}

describe("should set type class for", () => {
    it.each`
        description  | type         | className
        ${"default"} | ${undefined} | ${"table__column--text"}
        ${"text"}    | ${"text"}    | ${"table__column--text"}
        ${"numeric"} | ${"numeric"} | ${"table__column--numeric"}
        ${"date"}    | ${"date"}    | ${"table__column--date"}
        ${"action"}  | ${"action"}  | ${"table__column--action"}
    `("$description", async ({ type, className }) => {
        expect.assertions(1);
        const wrapper = createWrapper({
            props: {
                type,
            },
        });
        await wrapper.vm.$nextTick();
        expect(wrapper.classes()).toContain(className);
    });
});

it("should render as a <td> element by default", async () => {
    expect.assertions(1);
    const wrapper = createWrapper();
    await wrapper.vm.$nextTick();
    expect(wrapper.element.tagName).toBe("TD");
});

it("should render as a <th> element when rowHeader is set", async () => {
    expect.assertions(1);
    const wrapper = createWrapper({
        props: {
            rowHeader: true,
        },
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.element.tagName).toBe("TH");
});

it("should set scope when rowHeader is set", async () => {
    expect.assertions(1);
    const wrapper = createWrapper({
        props: {
            rowHeader: true,
        },
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.attributes("scope")).toBe("row");
});

it("should be transparent", async () => {
    expect.assertions(1);
    const wrapper = createWrapper({
        props: {
            foo: "bar",
        },
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.attributes("foo")).toBe("bar");
});

it("should not render any content unless renderColumns is enabled", async () => {
    expect.assertions(1);
    const wrapper = createWrapper({
        provide: {
            renderColumns: false,
        },
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.find("*").exists()).toBeFalsy();
});

describe("when in `<thead>`", () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    it("should not render", async () => {
        expect.assertions(1);
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
                provide("addColumn", jest.fn());
                provide("setVisibilityColumn", jest.fn());
                provide("renderColumns", true);
            },
        };
        const wrapper = mount(TestComponent);
        await wrapper.vm.$nextTick();
        expect(wrapper.element.querySelector("tr")).toMatchInlineSnapshot(`
            <tr>
              <!--v-if-->
            </tr>
        `);
    });

    it("should register when mounted", async () => {
        expect.assertions(1);
        const addColumn = jest.fn();
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
                provide("setVisibilityColumn", jest.fn());
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
        const addColumn = jest.fn();
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
                provide("setVisibilityColumn", jest.fn());
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
        const addColumn = jest.fn();
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
                provide("setVisibilityColumn", jest.fn());
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
        const addColumn = jest.fn();
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
                provide("setVisibilityColumn", jest.fn());
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

    it("should throw error if both shrink and expand is enabled at the same time", async () => {
        expect.assertions(1);
        /* prevent vue from dumping the error on stdout */
        jest.spyOn(console, "error").mockImplementation(() => undefined);
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
                provide("addColumn", jest.fn());
                provide("setVisibilityColumn", jest.fn());
            },
        };
        expect(() => {
            mount(TestComponent);
        }).toThrowErrorMatchingInlineSnapshot(
            `"Table cannot have both shrink and expand enabled at the same time"`,
        );
    });
});

describe("html-validate", () => {
    it("should require title attribute", () => {
        expect.assertions(2);
        expect("<f-table-column></f-table-column>").not.toHTMLValidate({
            message: '<f-table-column> is missing required "title" attribute',
        });
        expect('<f-table-column title=""></f-table-column>').not.toHTMLValidate(
            {
                message: 'Attribute "title" has invalid value ""',
            },
        );
    });

    it("should not allow invalid types", () => {
        expect.assertions(1);
        expect(
            '<f-table-column type="foobar"></f-table-column>',
        ).not.toHTMLValidate({
            message: 'Attribute "type" has invalid value "foobar"',
        });
    });

    it("should not allow empty description", () => {
        expect.assertions(1);
        expect(
            '<f-table-column description=""></f-table-column>',
        ).not.toHTMLValidate({
            message: 'Attribute "description" has invalid value ""',
        });
    });

    it("should not allow flow content", () => {
        expect.assertions(1);
        expect(
            "<f-table-column><div></div></f-table-column>",
        ).not.toHTMLValidate({
            message:
                "<div> element is not permitted as content under <f-table-column>",
        });
    });

    it("should allow phrasing content", () => {
        expect.assertions(1);
        expect(
            '<f-table-column name="foo" title="Foo"><span></span></f-table-column>',
        ).toHTMLValidate();
    });

    it("should allow button content", () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-table-column name="foo" title="Foo">
                <button type="button">Foo</button>
            </f-table-column>
        `;
        expect(markup).toHTMLValidate();
    });
});
