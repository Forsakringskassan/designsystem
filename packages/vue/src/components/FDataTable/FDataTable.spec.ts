import "html-validate/jest";
import { defineComponent } from "vue";
import { mount } from "@vue/test-utils";
import { FSortFilterDatasetMountCallback } from "../FSortFilterDataset";
import { FTableColumn } from "../FTableColumn";
import { TranslationPlugin } from "../../plugins";
import FDataTable from "./FDataTable.vue";

afterEach(() => {
    jest.restoreAllMocks();
});

describe("should match snapshot", () => {
    const TestComponent = {
        components: { FDataTable, FTableColumn },
        template: /* HTML */ `
            <f-data-table :rows="rows" key-attribute="a">
                <template #default="{ row }">
                    <f-table-column title="A" type="text">
                        {{ row.a }}
                    </f-table-column>
                    <f-table-column title="A" type="numeric">
                        {{ row.b }}
                    </f-table-column>
                </template>
            </f-data-table>
        `,
        data() {
            return {
                rows: [
                    { a: 1, b: 2 },
                    { a: 3, b: 4 },
                ],
            };
        },
        global: {
            plugins: [TranslationPlugin],
        },
    };

    it("thead", async () => {
        expect.assertions(1);
        const wrapper = mount(TestComponent);
        await wrapper.vm.$nextTick();
        expect(wrapper.find("thead")).toMatchSnapshot();
    });

    it("tbody", async () => {
        expect.assertions(1);
        const wrapper = mount(TestComponent);
        await wrapper.vm.$nextTick();
        expect(wrapper.find("tbody")).toMatchSnapshot();
    });

    it("should match snapshot with no items in rows and default text", async () => {
        const wrapper = mount({
            components: { FDataTable, FTableColumn },
            template: TestComponent.template,
            data() {
                return {
                    rows: [],
                };
            },
        });
        await wrapper.vm.$nextTick();
        expect(wrapper.html()).toMatchSnapshot();
    });

    it("should match snapshot with no rows in table and custom text", async () => {
        const wrapper = mount({
            components: { FDataTable, FTableColumn },
            template: /* HTML */ `
                <f-data-table :rows="rows" key-attribute="a">
                    <template #default="{ row }">
                        <f-table-column title="A" type="text">
                            {{ row.a }}
                        </f-table-column>
                        <f-table-column title="A" type="numeric">
                            {{ row.b }}
                        </f-table-column>
                    </template>
                    <template #empty> THE LIST IS EMPTY! </template>
                </f-data-table>
            `,
            data() {
                return {
                    rows: [],
                };
            },
        });
        await wrapper.vm.$nextTick();
        expect(wrapper.html()).toMatchSnapshot();
    });
});

it("should add table colum headers to <thead> with correct classes", async () => {
    expect.assertions(6);
    const TestComponent = {
        components: { FDataTable, FTableColumn },
        template: /* HTML */ `
            <f-data-table :rows="rows" key-attribute="id">
                <template #default="{ row }">
                    <f-table-column title="A"></f-table-column>
                    <f-table-column title="B" shrink></f-table-column>
                </template>
            </f-data-table>
        `,
        data() {
            return {
                rows: [{ id: 1 }],
            };
        },
    };
    const wrapper = mount(TestComponent);
    await wrapper.vm.$nextTick();
    const tr = wrapper.findAll("thead tr");
    const th = tr[0].findAll("th");
    expect(tr).toHaveLength(1); /* should have a single <tr> element */
    expect(th).toHaveLength(2); /* should have one <th> per column */
    expect(th[0].text()).toBe("A");
    expect(th[1].text()).toBe("B");

    expect(th[0].classes().join(" ")).toBe(
        "table__column table__column--text table__column--expand",
    );

    expect(th[1].classes().join(" ")).toBe(
        "table__column table__column--text table__column--shrink",
    );
});

it("should throw error if `FTableColumn.name` is duplicated", async () => {
    expect.assertions(1);
    const TestComponent = {
        components: { FDataTable, FTableColumn },
        template: /* HTML */ `
            <f-data-table :rows="rows" key-attribute="id">
                <template #default="{ row }">
                    <f-table-column name="a" title="A"></f-table-column>
                    <f-table-column name="a" title="A"></f-table-column>
                </template>
            </f-data-table>
        `,
        data() {
            return {
                rows: [{ id: 1 }, { id: 2 }],
            };
        },
    };
    expect(() => {
        mount(TestComponent);
    }).toThrowErrorMatchingInlineSnapshot(
        `"Expected FTableColumn to have a unique name but encountered duplicate of "a""`,
    );
});

it("should set scope on table columns", async () => {
    expect.assertions(1);
    const TestComponent = {
        components: { FDataTable, FTableColumn },
        template: /* HTML */ `
            <f-data-table :rows="rows" key-attribute="id">
                <template #default="{ row }">
                    <f-table-column title="A"></f-table-column>
                </template>
            </f-data-table>
        `,
        data() {
            return {
                rows: [{ id: 1 }],
            };
        },
    };
    const wrapper = mount(TestComponent);
    await wrapper.vm.$nextTick();
    const th = wrapper.find("thead th");
    expect(th.attributes("scope")).toBe("col");
});

it("should throw exception when action is set on column", async () => {
    expect.assertions(1);
    const TestComponent = {
        components: { FDataTable, FTableColumn },
        template: /* HTML */ `
            <f-data-table :rows="rows" key-attribute="id">
                <template #default="{ row }">
                    <f-table-column title="A" type="action"></f-table-column>
                </template>
            </f-data-table>
        `,
        data() {
            return {
                rows: [{ id: 1 }],
            };
        },
    };
    const spy = jest.spyOn(console, "error").mockReturnValue(undefined);
    expect(() => mount(TestComponent)).toThrow(
        "Cannot use action column in FDataTable component",
    );
    spy.mockRestore();
});

it("should add <caption> if caption slot is set", async () => {
    expect.assertions(2);
    const TestComponent = {
        components: { FDataTable, FTableColumn },
        template: /* HTML */ `
            <f-data-table :rows="[]" key-attribute="id">
                <template #caption> My fancy caption </template>
            </f-data-table>
        `,
    };
    const wrapper = mount(TestComponent);
    await wrapper.vm.$nextTick();
    const caption = wrapper.find("caption");
    expect(caption.exists()).toBeTruthy();
    expect(caption.text()).toContain("My fancy caption");
});

it("should add <caption> if caption slot only contains sr-only text", async () => {
    expect.assertions(2);
    const TestComponent = {
        components: { FDataTable, FTableColumn },
        template: /* HTML */ `
            <f-data-table :rows="[]" key-attribute="id">
                <template #caption>
                    <span class="sr-only"> "My fancy caption </span>
                </template>
            </f-data-table>
        `,
    };
    const wrapper = mount(TestComponent);
    await wrapper.vm.$nextTick();
    const caption = wrapper.find("caption");
    expect(caption.exists()).toBeTruthy();
    expect(caption.text()).toContain("My fancy caption");
});

it("should not include caption if no caption slot", async () => {
    expect.assertions(1);
    const TestComponent = {
        components: { FDataTable, FTableColumn },
        template: /* HTML */ `
            <f-data-table :rows="[]" key-attribute="id"></f-data-table>
        `,
    };
    const wrapper = mount(TestComponent);
    await wrapper.vm.$nextTick();
    const caption = wrapper.find("caption");
    expect(caption.exists()).toBeFalsy();
});

it("should not add scroll classes when scroll property is unset", async () => {
    expect.assertions(1);
    const TestComponent = {
        components: { FDataTable, FTableColumn },
        template: /* HTML */ `
            <f-data-table :rows="[]" key-attribute="id"></f-data-table>
        `,
    };
    const wrapper = mount(TestComponent);
    await wrapper.vm.$nextTick();
    expect(wrapper.classes()).toEqual([]);
});

it("should set appropriate scroll class when scroll prop is given", async () => {
    expect.assertions(1);
    const TestComponent = {
        components: { FDataTable, FTableColumn },
        template: /* HTML */ `
            <f-data-table
                :rows="[]"
                key-attribute="id"
                scroll="horizontal"
            ></f-data-table>
        `,
    };
    const wrapper = mount(TestComponent);
    await wrapper.vm.$nextTick();
    expect(wrapper.classes()).toEqual([
        "table__scroll",
        "table__scroll--horizontal",
    ]);
});

it("should not add table--striped class unless striped is set", async () => {
    expect.assertions(1);
    const TestComponent = {
        components: { FDataTable, FTableColumn },
        template: /* HTML */ `
            <f-data-table :rows="[]" key-attribute="id"></f-data-table>
        `,
    };
    const wrapper = mount(TestComponent);
    await wrapper.vm.$nextTick();
    const table = wrapper.find("table");
    expect(table.classes()).not.toContain("table--striped");
});

it("should add table--striped class when striped is set", async () => {
    expect.assertions(1);
    const TestComponent = {
        components: { FDataTable, FTableColumn },
        template: /* HTML */ `
            <f-data-table
                :rows="[]"
                key-attribute="id"
                :striped="true"
            ></f-data-table>
        `,
    };
    const wrapper = mount(TestComponent);
    await wrapper.vm.$nextTick();
    const table = wrapper.find("table");
    expect(table.classes()).toContain("table--striped");
});

it("should be transparent", async () => {
    expect.assertions(1);
    const TestComponent = {
        components: { FDataTable },
        template: /* HTML */ `
            <f-data-table
                :rows="[]"
                key-attribute="id"
                foo="bar"
            ></f-data-table>
        `,
    };
    const wrapper = mount(TestComponent);
    await wrapper.vm.$nextTick();
    const table = wrapper.find("table");
    expect(table.attributes("foo")).toBe("bar");
});

it("should handle nested row objects no rows are present", async () => {
    expect.assertions(2);
    const TestComponent = defineComponent({
        components: { FDataTable, FTableColumn },
        template: /* HTML */ `
            <f-data-table :rows="[]" key-attribute="id">
                <template #caption> My fancy caption </template>
                <template #default="{ row }">
                    <f-table-column title="My Awesome Column">
                        {{ row.some.deeply.nested.prop }}
                    </f-table-column>
                </template>
            </f-data-table>
        `,
    });
    const wrapper = mount(TestComponent);
    await wrapper.vm.$nextTick();
    const th = wrapper.findAll("thead th");
    expect(th).toHaveLength(1);
    expect(th[0].text()).toBe("My Awesome Column");
});

it("should call provided sort method when clicking columnheader that is registrated as sortable", async () => {
    const mockedProvedSort = jest.fn();
    let registerSortableColumnsCallback: FSortFilterDatasetMountCallback;
    const TestComponent = {
        components: { FDataTable, FTableColumn },
        template: /*HTML*/ `
        <f-data-table :rows="[{ id: 1, name: 'some name' }]" key-attribute="id"  >
            <template #caption> My fancy caption </template>
            <template #default="{ row }">
                <f-table-column name="id" title="Id">
                    {{ row.id }}
                </f-table-column>
                <f-table-column name="name" title="Name">
                    {{ row.name }}
                </f-table-column>
            </template>
        </f-data-table>
    `,
        provide() {
            return {
                sort: mockedProvedSort,
                registerCallbackOnMount: (
                    callback: FSortFilterDatasetMountCallback,
                ) => {
                    registerSortableColumnsCallback = callback;
                },
            };
        },
    };
    const wrapper = mount(TestComponent);
    registerSortableColumnsCallback!(["name"]);
    await wrapper.vm.$nextTick();

    const colheaders = wrapper.findAll("thead tr th");
    const idColHeader = colheaders[0];
    const nameColHeader = colheaders[1];

    await idColHeader.trigger("click");
    expect(mockedProvedSort.mock.calls).toMatchInlineSnapshot(`[]`);

    await nameColHeader.trigger("click");
    expect(mockedProvedSort.mock.calls).toMatchInlineSnapshot(`
        [
          [
            "name",
            true,
          ],
        ]
    `);
});

describe("`keyAttribute`", () => {
    it("should not throw if valid and unique", async () => {
        expect.assertions(1);

        expect(() => {
            mount(FDataTable, {
                props: {
                    keyAttribute: "id",
                    rows: [{ id: "a" }, { id: "b" }, { id: "c" }],
                },
            });
        }).not.toThrow();
    });

    it("should throw error if not unique in items", async () => {
        expect.assertions(1);

        expect(() => {
            mount(FDataTable, {
                props: {
                    keyAttribute: "id",
                    rows: [{ id: "a" }, { id: "b" }, { id: "b" }],
                },
            });
        }).toThrowErrorMatchingInlineSnapshot(
            `"Expected each item to have key [id] with unique value but encountered duplicate of "b" in item index 2."`,
        );
    });

    it("should be optional", async () => {
        expect.assertions(1);

        expect(() => {
            mount(FDataTable, {
                props: {
                    rows: [{ id: "a" }, { id: "b" }, { id: "c" }],
                },
            });
        }).not.toThrow();
    });
});

describe("html-validate", () => {
    it("should require `key-attribute` to be non-empty if used", () => {
        expect.assertions(1);
        expect(
            '<f-data-table key-attribute=""></f-data-table>',
        ).not.toHTMLValidate({
            message: 'Attribute "key-attribute" has invalid value ""',
        });
    });

    it("should require row attribute", () => {
        expect.assertions(1);
        expect("<f-data-table></f-data-table>").not.toHTMLValidate({
            message: '<f-data-table> is missing required "rows" attribute',
        });
    });

    it("should require caption slot", () => {
        expect.assertions(1);
        expect("<f-data-table></f-data-table>").not.toHTMLValidate({
            message:
                '<f-data-table> component requires slot "caption" to be implemented',
        });
    });

    it("should require default slot", () => {
        expect.assertions(1);
        expect("<f-data-table></f-data-table>").not.toHTMLValidate({
            message:
                '<f-data-table> component requires slot "default" to be implemented',
        });
    });

    it.each`
        html
        ${'<f-email-text-field type="email" maxlength="80">E-post</f-email-text-field>'}
        ${'<f-email-text-field id="email-input" maxlength="80">E-post</f-email-text-field>'}
        ${'<f-email-text-field id="email-input" maxlength="80" v-validation.required>E-post</f-email-text-field>'}
    `("$html should be valid", ({ html }) => {
        expect.assertions(1);

        expect(html).toHTMLValidate();
    });
});
