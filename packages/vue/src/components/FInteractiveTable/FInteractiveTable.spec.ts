import "html-validate/jest";
import { mount, VueWrapper } from "@vue/test-utils";
import { type ComponentOptions, defineComponent } from "vue";
import { FSortFilterDatasetMountCallback } from "../FSortFilterDataset";
import { FTableColumn } from "../FTableColumn";
import FInteractiveTable from "./FInteractiveTable.vue";

function createWrapper(
    component: ComponentOptions,
    { props = {}, slots = {}, attrs = {}, provide = {}, options = {} } = {},
): VueWrapper {
    return mount(component, {
        attrs: { ...attrs },
        props: {
            ...props,
        },
        slots: { ...slots },
        global: {
            provide: {
                addColumn: jest.fn(),
                setVisibilityColumn: jest.fn(),
                ...provide,
            },
        },
        ...options,
    });
}

afterEach(() => {
    jest.restoreAllMocks();
});

describe("should have correct colspan", () => {
    it.each`
        selectable | colspan | description
        ${true}    | ${"3"}  | ${"with selectable"}
        ${false}   | ${"2"}  | ${"without selectable"}
    `(
        "should have colspan=$colspan with no items in rows and $description and with custom empty text",
        async ({ selectable, colspan }) => {
            const emptyText = "EMPTY!";
            const testComponent = defineComponent({
                name: "TestComponent",
                components: {
                    FInteractiveTable,
                    FTableColumn,
                },
                template: /* HTML */ `
                    <f-interactive-table
                        v-model="selected"
                        :rows="rows"
                        scroll="horizontal"
                        hover
                        striped
                        ${selectable ? "selectable" : ""}
                        key-attribute="id"
                    >
                        <template #caption> Kända ankeborgare </template>
                        <template #row-description="{ row }">
                            {{ row.name.sv }}
                        </template>
                        <template #checkbox-description>
                            Välj denna raden
                        </template>
                        <template #default="{ row }">
                            <f-table-column
                                name="name.en"
                                title="Namn"
                                description="(engelska)"
                                :row-header="true"
                                type="text"
                            >
                                {{ row.name.en }}
                            </f-table-column>
                            <f-table-column
                                name="name.sv"
                                title="Namn"
                                description="(svenska)"
                                type="text"
                            >
                                {{ row.name.sv }}
                            </f-table-column>
                        </template>
                        <template #empty> ${emptyText} </template>
                    </f-interactive-table>
                `,
                data() {
                    return {
                        rows: [],
                        selected: [],
                    };
                },
            });

            const wrapper = mount(testComponent);
            await wrapper.vm.$nextTick();

            const td = wrapper.find("table tbody tr:last-child td");
            expect(td.attributes("colspan")).toBe(colspan);
            expect(td.text()).toMatch(emptyText);
        },
    );

    it.each`
        selectable | colspan | description
        ${true}    | ${"3"}  | ${"with selectable"}
        ${false}   | ${"2"}  | ${"without selectable"}
    `(
        "should have colspan=$colspan with no items in rows and $description and with default empty text",
        async ({ selectable, colspan }) => {
            const defaultEmptyText = "Tabellen är tom";
            const testComponent = defineComponent({
                name: "TestComponent",
                components: {
                    FInteractiveTable,
                    FTableColumn,
                },
                template: /* HTML */ `
                    <f-interactive-table
                        v-model="selected"
                        :rows="rows"
                        scroll="horizontal"
                        hover
                        striped
                        ${selectable ? "selectable" : ""}
                        key-attribute="id"
                    >
                        <template #caption> Kända ankeborgare </template>
                        <template #row-description="{ row }">
                            {{ row.name.sv }}
                        </template>
                        <template #checkbox-description>
                            Välj denna raden
                        </template>
                        <template #default="{ row }">
                            <f-table-column
                                name="name.en"
                                title="Namn"
                                description="(engelska)"
                                :row-header="true"
                                type="text"
                            >
                                {{ row.name.en }}
                            </f-table-column>
                            <f-table-column
                                name="name.sv"
                                title="Namn"
                                description="(svenska)"
                                type="text"
                            >
                                {{ row.name.sv }}
                            </f-table-column>
                        </template>
                    </f-interactive-table>
                `,
                data() {
                    return {
                        rows: [],
                        selected: [],
                    };
                },
            });

            const wrapper = mount(testComponent);
            await wrapper.vm.$nextTick();

            const td = wrapper.find("table tbody tr:last-child td");
            expect(td.attributes("colspan")).toBe(colspan);
            expect(td.text()).toMatch(defaultEmptyText);
        },
    );
});

describe("should hide or show column even when table is empty", () => {
    it.each`
        visible  | nbCol  | description
        ${true}  | ${"2"} | ${"with visible"}
        ${false} | ${"1"} | ${"without visible"}
    `(
        "should have nb of columns=$nbCol with no items in rows and $description set on one column",
        async ({ visible, nbCol }) => {
            const testComponent = defineComponent({
                name: "TestComponent",
                components: {
                    FInteractiveTable,
                    FTableColumn,
                },
                template: /* HTML */ `
                    <f-interactive-table
                        v-model="selected"
                        :rows="rows"
                        scroll="horizontal"
                        hover
                        striped
                        key-attribute="id"
                    >
                        <template #caption> Kända ankeborgare </template>
                        <template #row-description="{ row }">
                            {{ row.name.sv }}
                        </template>
                        <template #checkbox-description>
                            Välj denna raden
                        </template>
                        <template #default="{ row }">
                            <f-table-column
                                name="name.sv"
                                title="Namn"
                                description="(svenska)"
                                type="text"
                            >
                                {{ row.name.sv }}
                            </f-table-column>
                            <f-table-column
                                :visible="${visible ? "true" : "false"}"
                                name="name.en"
                                title="Namn"
                                description="(engelska)"
                                :row-header="true"
                                type="text"
                            >
                                {{ row.name.en }}
                            </f-table-column>
                        </template>
                    </f-interactive-table>
                `,
                data() {
                    return {
                        rows: [],
                        selected: [],
                    };
                },
            });

            const wrapper = mount(testComponent);
            await wrapper.vm.$nextTick();

            const ths = wrapper.findAll("table thead tr th");
            expect(ths).toHaveLength(Number(nbCol));
        },
    );
});

describe("should match snapshot", () => {
    const TestComponent = {
        components: { FInteractiveTable, FTableColumn },
        template: /* HTML */ `
            <f-interactive-table :rows="rows" key-attribute="a">
                <template #default="{ row }">
                    <f-table-column name="a" title="A" type="text">
                        {{ row.a }}
                    </f-table-column>
                    <f-table-column name="b" title="A" type="numeric">
                        {{ row.b }}
                    </f-table-column>
                </template>
            </f-interactive-table>
        `,
        data() {
            return {
                rows: [
                    { a: 1, b: 2 },
                    { a: 3, b: 4 },
                ],
            };
        },
    };

    it("thead", async () => {
        expect.assertions(1);
        const wrapper = createWrapper(TestComponent);
        await wrapper.vm.$nextTick();
        expect(wrapper.find("thead")).toMatchSnapshot();
    });

    it("tbody", async () => {
        expect.assertions(1);
        const wrapper = createWrapper(TestComponent);
        await wrapper.vm.$nextTick();
        expect(wrapper.find("tbody")).toMatchSnapshot();
    });
});

it("should add table colum headers to <thead> with correct classes", async () => {
    expect.assertions(6);
    const TestComponent = {
        components: { FInteractiveTable, FTableColumn },
        template: /* HTML */ `
            <f-interactive-table :rows="rows" key-attribute="id">
                <template #default="{ row }">
                    <f-table-column name="a" title="A" shrink></f-table-column>
                    <f-table-column name="b" title="B"></f-table-column>
                </template>
            </f-interactive-table>
        `,
        data() {
            return {
                rows: [{ id: 1 }],
            };
        },
    };
    const wrapper = createWrapper(TestComponent);
    await wrapper.vm.$nextTick();
    const tr = wrapper.findAll("thead tr");
    const th = tr[0].findAll("th");
    expect(tr).toHaveLength(1); /* should have a single <tr> element */
    expect(th).toHaveLength(2); /* should have one <th> per column */
    expect(th[0].text()).toBe("A");
    expect(th[1].text()).toBe("B");

    expect(th[0].classes().join(" ")).toBe(
        "table__column table__column--text table__column--shrink",
    );

    expect(th[1].classes().join(" ")).toBe(
        "table__column table__column--text table__column--expand",
    );
});

it("should not add duplicate table colums", async () => {
    expect.assertions(2);
    const TestComponent = {
        components: { FInteractiveTable, FTableColumn },
        template: /* HTML */ `
            <f-interactive-table :rows="rows" key-attribute="id">
                <template #default="{ row }">
                    <f-table-column name="a" title="A"></f-table-column>
                    <f-table-column name="a" title="A"></f-table-column>
                </template>
            </f-interactive-table>
        `,
        data() {
            return {
                rows: [{ id: 1 }, { id: 2 }],
            };
        },
    };
    const wrapper = createWrapper(TestComponent);
    await wrapper.vm.$nextTick();
    const th = wrapper.findAll("thead th");
    expect(th).toHaveLength(1); /* should only be added once */
    expect(th[0].text()).toBe("A");
});

it("should set scope on table columns", async () => {
    expect.assertions(1);
    const TestComponent = {
        components: { FInteractiveTable, FTableColumn },
        template: /* HTML */ `
            <f-interactive-table :rows="rows" key-attribute="id">
                <template #default="{ row }">
                    <f-table-column name="a" title="A"></f-table-column>
                </template>
            </f-interactive-table>
        `,
        data() {
            return {
                rows: [{ id: 1 }],
            };
        },
    };
    const wrapper = createWrapper(TestComponent);
    await wrapper.vm.$nextTick();
    const th = wrapper.find("thead th");
    expect(th.attributes("scope")).toBe("col");
});

it("should add <caption> if caption slot is set", async () => {
    expect.assertions(2);
    const TestComponent = {
        components: { FInteractiveTable, FTableColumn },
        template: /* HTML */ `
            <f-interactive-table :rows="[]" key-attribute="id">
                <template #caption> My fancy caption </template>
            </f-interactive-table>
        `,
    };
    const wrapper = createWrapper(TestComponent);
    await wrapper.vm.$nextTick();
    const caption = wrapper.find("caption");
    expect(caption.exists()).toBeTruthy();
    expect(caption.text()).toContain("My fancy caption");
});

it("should add <caption> if caption slot only contains sr-only text", async () => {
    expect.assertions(2);
    const TestComponent = {
        components: { FInteractiveTable, FTableColumn },
        template: /* HTML */ `
            <f-interactive-table :rows="[]" key-attribute="id">
                <template #caption>
                    <span class="sr-only"> My fancy caption </span>
                </template>
            </f-interactive-table>
        `,
    };
    const wrapper = createWrapper(TestComponent);
    await wrapper.vm.$nextTick();
    const caption = wrapper.find("caption");
    expect(caption.exists()).toBeTruthy();
    expect(caption.text()).toContain("My fancy caption");
});

it("should not include caption if no caption slot", async () => {
    expect.assertions(1);
    const TestComponent = {
        components: { FInteractiveTable, FTableColumn },
        template: /* HTML */ `
            <f-interactive-table
                :rows="[]"
                key-attribute="id"
            ></f-interactive-table>
        `,
    };
    const wrapper = createWrapper(TestComponent);
    await wrapper.vm.$nextTick();
    const caption = wrapper.find("caption");
    expect(caption.exists()).toBeFalsy();
});

it("should not add scroll classes when scroll property is unset", async () => {
    expect.assertions(1);
    const TestComponent = {
        components: { FInteractiveTable, FTableColumn },
        template: /* HTML */ `
            <f-interactive-table
                :rows="[]"
                key-attribute="id"
            ></f-interactive-table>
        `,
    };
    const wrapper = createWrapper(TestComponent);
    await wrapper.vm.$nextTick();
    expect(wrapper.classes()).toEqual([]);
});

it("should set appropriate scroll class when scroll prop is given", async () => {
    expect.assertions(1);
    const TestComponent = {
        components: { FInteractiveTable, FTableColumn },
        template: /* HTML */ `
            <f-interactive-table
                :rows="[]"
                key-attribute="id"
                scroll="horizontal"
            ></f-interactive-table>
        `,
    };
    const wrapper = createWrapper(TestComponent);
    await wrapper.vm.$nextTick();
    expect(wrapper.classes()).toEqual([
        "table__scroll",
        "table__scroll--horizontal",
    ]);
});

it("should not add table__row--striped class unless striped is set", async () => {
    expect.assertions(1);
    const TestComponent = {
        components: { FInteractiveTable, FTableColumn },
        template: /* HTML */ `
            <f-interactive-table :rows="rows" key-attribute="id">
                <template #default="{ row }">
                    <f-table-column name="a" title="A"></f-table-column>
                </template>
            </f-interactive-table>
        `,
        data() {
            return {
                rows: [{ id: 1 }, { id: 2 }],
            };
        },
    };
    const wrapper = createWrapper(TestComponent);
    await wrapper.vm.$nextTick();
    const table = wrapper.find("table");
    const rows = table.findAll("tbody tr");

    expect(rows[1].classes()).not.toContain("table--striped");
});

it("should add table__row--striped class to every other row when striped is set", async () => {
    expect.assertions(2);
    const TestComponent = {
        components: { FInteractiveTable, FTableColumn },
        template: /* HTML */ `
            <f-interactive-table :rows="rows" key-attribute="id" striped>
                <template #default="{ row }">
                    <f-table-column name="a" title="A"></f-table-column>
                </template>
            </f-interactive-table>
        `,
        data() {
            return {
                rows: [{ id: 1 }, { id: 2 }],
            };
        },
    };
    const wrapper = createWrapper(TestComponent);
    await wrapper.vm.$nextTick();
    const table = wrapper.find("table");
    const rows = table.findAll("tbody tr");

    expect(rows[0].classes()).not.toContain("table__row--striped");
    expect(rows[1].classes()).toContain("table__row--striped");
});

it("should not add table--hover class unless hover is set", async () => {
    expect.assertions(1);
    const TestComponent = {
        components: { FInteractiveTable, FTableColumn },
        template: /* HTML */ `
            <f-interactive-table
                :rows="[]"
                key-attribute="id"
            ></f-interactive-table>
        `,
    };
    const wrapper = createWrapper(TestComponent);
    await wrapper.vm.$nextTick();
    const table = wrapper.find("table");
    expect(table.classes()).not.toContain("table--hover");
});

it("should add table--hover class when hover is set", async () => {
    expect.assertions(1);
    const TestComponent = {
        components: { FInteractiveTable, FTableColumn },
        template: /* HTML */ `
            <f-interactive-table
                :rows="[]"
                key-attribute="id"
                hover
            ></f-interactive-table>
        `,
    };
    const wrapper = createWrapper(TestComponent);
    await wrapper.vm.$nextTick();
    const table = wrapper.find("table");
    expect(table.classes()).toContain("table--hover");
});

it("should add an extra column when selectable is enabled", async () => {
    expect.assertions(6);
    const TestComponent = {
        components: { FInteractiveTable, FTableColumn },
        template: /* HTML */ `
            <f-interactive-table :rows="rows" key-attribute="id" selectable>
                <template #default="{ row }">
                    <f-table-column name="a" title="A"></f-table-column>
                </template>
            </f-interactive-table>
        `,
        data() {
            return {
                rows: [{ id: 1 }],
            };
        },
    };
    const wrapper = mount(TestComponent, {
        global: {
            stubs: ["f-checkbox-field"],
        },
    });
    await wrapper.vm.$nextTick();
    const col = wrapper.findAll("colgroup col");
    const th = wrapper.findAll("thead th");
    const td = wrapper.findAll("tbody td");
    expect(col).toHaveLength(2);
    expect(th).toHaveLength(2);
    expect(td).toHaveLength(2);
    expect(col[0]).toMatchInlineSnapshot(`<col class="table__column--shrink">`);
    expect(th[0]).toMatchInlineSnapshot(
        `<th scope="col"><span class="sr-only">Markera</span></th>`,
    );
    expect(td[0]).toMatchInlineSnapshot(`
        <td class="table__column--selectable">
          <div class="table__input">
            <f-checkbox-field-stub disabled="false" id="fkui-vue-element-0001" modelvalue="false" value="true"></f-checkbox-field-stub>
          </div>
        </td>
    `);
});

it("should mark initial rows as selected", async () => {
    expect.assertions(2);
    const TestComponent = {
        components: { FInteractiveTable, FTableColumn },
        template: /* HTML */ `
            <f-interactive-table
                :rows="rows"
                key-attribute="id"
                v-model="selected"
                selectable
            ></f-interactive-table>
        `,
        data() {
            return {
                rows: [{ id: 1 }, { id: 2 }],
                selected: [{ id: 1 }],
            };
        },
    };
    const wrapper = mount(TestComponent, {
        global: {
            stubs: ["f-checkbox-field"],
        },
    });
    await wrapper.vm.$nextTick();
    const rows = wrapper.findAll("tbody tr");
    expect(rows[0].classes()).toContain("table__row--selected");
    expect(rows[1].classes()).not.toContain("table__row--selected");
});

it("should set row-description as aria-label", async () => {
    expect.assertions(1);
    const TestComponent = {
        components: { FInteractiveTable },
        template: /* HTML */ `
            <f-interactive-table :rows="rows" key-attribute="id" selectable>
                <template #row-description="{ row }">
                    {{ row.name }} (id: {{ row.id }})
                </template>
            </f-interactive-table>
        `,
        data() {
            return {
                rows: [{ id: 1, name: "Fred" }],
            };
        },
    };
    const wrapper = mount(TestComponent, {
        global: {
            stubs: ["f-checkbox-field"],
        },
    });
    await wrapper.vm.$nextTick();
    const tr = wrapper.findAll("tbody tr")[0];
    expect(tr.attributes("aria-label")).toBe("Fred (id: 1)");
});

it("should set checkbox-description as label on checkbox", async () => {
    expect.assertions(1);
    const TestComponent = {
        components: { FInteractiveTable },
        template: /* HTML */ `
            <f-interactive-table :rows="rows" key-attribute="id" selectable>
                <template #checkbox-description="{ row }">
                    {{ row.name }} (id: {{ row.id }})
                </template>
            </f-interactive-table>
        `,
        data() {
            return {
                rows: [{ id: 1, name: "Fred" }],
            };
        },
    };
    const wrapper = mount(TestComponent);
    await wrapper.vm.$nextTick();
    const label = wrapper.findAll("tbody td")[0];
    expect(label.text()).toContain("Fred (id: 1)");
});

it("should be transparent", async () => {
    expect.assertions(1);
    const TestComponent = {
        components: { FInteractiveTable },
        template: /* HTML */ `
            <f-interactive-table
                :rows="[]"
                key-attribute="id"
                foo="bar"
            ></f-interactive-table>
        `,
    };
    const wrapper = mount(TestComponent);
    await wrapper.vm.$nextTick();
    const table = wrapper.get("table");
    expect(table.attributes("foo")).toBe("bar");
});

describe("events", () => {
    const TestComponent = {
        components: { FInteractiveTable, FTableColumn },
        template: /* HTML */ `
            <f-interactive-table
                :rows="rows"
                key-attribute="id"
                v-model="selected"
                selectable
            ></f-interactive-table>
        `,
        data() {
            return {
                rows: [{ id: 1 }, { id: 2 }],
                selected: [{ id: 1 }],
            };
        },
    };

    it("should emit select event when checkbox is clicked", async () => {
        expect.assertions(2);
        const wrapper = mount(FInteractiveTable, {
            props: {
                rows: [{ id: 1 }, { id: 2 }],
                modelValue: [{ id: 1 }],
                selectable: true,
                keyAttribute: "id",
            },
        });
        await wrapper.vm.$nextTick();
        const checkboxes = wrapper.findAll("tbody tr input");
        await checkboxes[1].trigger("click");
        await wrapper.vm.$nextTick();
        const select = wrapper.emitted("select")!;
        expect(select).toHaveLength(1);
        expect(select[0]).toEqual([
            {
                id: 2,
            },
        ]);
    });

    it("should emit click event when row is clicked", async () => {
        const wrapper = mount(TestComponent);
        const table = wrapper.getComponent(FInteractiveTable);
        const row = table.findAll("tbody tr td")[0];
        await row.trigger("click");
        await table.vm.$nextTick();
        expect(table.emitted("click")).toHaveLength(1);
    });

    it.each([" ", "Spacebar"])(
        "should activate row and emit click event when item getting space key (%s) down event",
        async (key: string) => {
            const wrapper = mount(TestComponent);
            const table = wrapper.getComponent(FInteractiveTable);
            const row = table.findAll("tbody tr")[0];
            await row.trigger("keydown", { key });
            expect(table.emitted("click")).toHaveLength(1);
        },
    );

    describe("active row", () => {
        it("should emit click event when clicking on active item", async () => {
            const wrapper = mount(TestComponent);
            const table = wrapper.getComponent(FInteractiveTable);
            const column = table.findAll("tbody tr td")[0];
            await column.trigger("click");
            await column.trigger("click");
            await table.vm.$nextTick();
            expect(table.emitted("click")).toHaveLength(2);
        });

        it.each([" ", "Spacebar"])(
            "should emit click event when active item getting space key (%s) down event",
            async (key: string) => {
                const wrapper = mount(TestComponent);
                const table = wrapper.getComponent(FInteractiveTable);
                const row = table.findAll("tbody tr")[0];
                await row.trigger("keydown", { key });
                await row.trigger("keydown", { key });
                expect(table.emitted("click")).toHaveLength(2);
            },
        );
    });
});

it("should handle nestled row objects when no rows are present", async () => {
    expect.assertions(2);
    const TestComponent = defineComponent({
        components: { FInteractiveTable, FTableColumn },
        template: /* HTML */ `
            <f-interactive-table :rows="[]" key-attribute="id">
                <template #caption> My fancy caption </template>
                <template #default="{ row }">
                    <f-table-column name="test" title="My Awesome Column">
                        {{ row.some.deeply.nested.prop }}
                    </f-table-column>
                </template>
            </f-interactive-table>
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
        components: { FInteractiveTable, FTableColumn },
        template: /*HTML*/ `
        <f-interactive-table :rows="[{ id: 1, name: 'some name' }]" key-attribute="id"  >
            <template #caption> My fancy caption </template>
            <template #default="{ row }">
                <f-table-column name="id" title="Id">
                    {{ row.id }}
                </f-table-column>
                <f-table-column name="name" title="Name">
                    {{ row.name }}
                </f-table-column>
            </template>
        </f-interactive-table>
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
    const wrapper = createWrapper(TestComponent);
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

describe("html-validate", () => {
    it("should require non-empty key-attribute attribute", () => {
        expect.assertions(2);
        expect(
            "<f-interactive-table></f-interactive-table>",
        ).not.toHTMLValidate({
            message:
                '<f-interactive-table> is missing required "key-attribute" attribute',
        });
        expect(
            '<f-interactive-table key-attribute=""></f-interactive-table>',
        ).not.toHTMLValidate({
            message: 'Attribute "key-attribute" has invalid value ""',
        });
    });

    it("should require row attribute", () => {
        expect.assertions(1);
        expect(
            "<f-interactive-table></f-interactive-table>",
        ).not.toHTMLValidate({
            message:
                '<f-interactive-table> is missing required "rows" attribute',
        });
    });

    it("should require caption slot", () => {
        expect.assertions(1);
        expect(
            "<f-interactive-table></f-interactive-table>",
        ).not.toHTMLValidate({
            message:
                '<f-interactive-table> component requires slot "caption" to be implemented',
        });
    });

    it("should require default slot", () => {
        expect.assertions(1);
        expect(
            "<f-interactive-table></f-interactive-table>",
        ).not.toHTMLValidate({
            message:
                '<f-interactive-table> component requires slot "default" to be implemented',
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
