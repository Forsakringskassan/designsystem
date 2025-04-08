import "html-validate/jest";
import { VueWrapper, mount } from "@vue/test-utils";
import { defineComponent } from "vue";
import {
    FSortFilterDatasetInjected,
    FSortFilterDatasetInterface,
} from "./FSortFilterDatasetInterface";
import FSortFilterDataset from "./FSortFilterDataset.vue";
import { type SortOrder } from "./sort-order";

const DATA = [
    { a: 1, b: "ö", c: "dummy", d: {} },
    { a: 3, b: "a", c: "dummy", d: {} },
    { a: 2, b: "k", c: "dummy", d: {} },
];

const CASE_SENSITIVE_DATA = [
    { a: "Ab", b: 1 },
    { a: "ab", b: 1 },
    { a: "AA", b: 1 },
    { a: "aa", b: 1 },
];

const ATTRIBUTES = {
    a: "Column A",
    b: "Column B",
};

function createWrapper({ slots = {} } = {}): VueWrapper {
    return mount(FSortFilterDataset, {
        props: {
            data: DATA,
            sortableAttributes: ATTRIBUTES,
        },
        slots: { ...slots },
        global: {
            stubs: ["f-text-field", "f-icon"],
        },
    });
}

interface UnderlyingComponentData {
    sortableAttributes: string[];
    currentSortAttribute: string;
    currentAscending: boolean;
}

const UnderlyingComponent = defineComponent({
    data(): UnderlyingComponentData {
        return {
            sortableAttributes: [],
            currentSortAttribute: "",
            currentAscending: false,
        };
    },
    mounted() {
        this.registerCallbackOnSort(this.callbackOnSort);
        this.registerCallbackOnMount(this.callbackSortableColumns);
    },
    setup(): FSortFilterDatasetInterface {
        return FSortFilterDatasetInjected();
    },
    methods: {
        testSort(): void {
            this.sort("b", false);
        },
        triggersort(column: string, ascending: boolean): void {
            this.sort(column, ascending);
        },
        callbackSortableColumns(columns: string[]): void {
            this.sortableAttributes = columns;
        },
        callbackOnSort(columnName: string, ascending: boolean): void {
            this.currentSortAttribute = columnName;
            this.currentAscending = ascending;
        },
    },
    template: /* HTML */ `
        <div>
            <table>
                <tr v-for="item in data" :key="item.a">
                    <td>{{ item.a }}</td>
                    <td>{{ item.b }}</td>
                </tr>
            </table>
        </div>
    `,
    props: {
        data: {
            type: Array,
            required: true,
        },
    },
});

function createTableWrapper(
    testData: Array<Record<string, unknown>> = DATA,
): VueWrapper {
    const testComponent = {
        components: { UnderlyingComponent, FSortFilterDataset },
        template: /* HTML */ `
            <f-sort-filter-dataset
                :data="data"
                :sortable-attributes="attributes"
                default-sort-attribute="a"
                :default-sort-ascending="true"
            >
                <template #default="{ sortFilterResult }">
                    <underlying-component
                        :data="sortFilterResult"
                        id="underlying"
                    >
                    </underlying-component>
                </template>
            </f-sort-filter-dataset>
        `,
        data() {
            return {
                data: testData,
                attributes: ATTRIBUTES,
            };
        },
    };
    return mount(testComponent);
}

const tableTestComponentWithOutput = {
    components: { UnderlyingComponent, FSortFilterDataset },
    template: /* HTML */ `
        <f-sort-filter-dataset
            :data="data"
            :sortable-attributes="attributes"
            default-sort-attribute="a"
            :default-sort-ascending="true"
            @used-sort-attributes="usedSortAttributes($event)"
        >
            <template #default="{ sortFilterResult }">
                <underlying-component :data="sortFilterResult" id="underlying">
                </underlying-component>
            </template>
        </f-sort-filter-dataset>
    `,
    data() {
        return {
            data: [],
            attributes: ATTRIBUTES,
        };
    },
    methods: {
        usedSortAttributes(_sortAttributes: SortOrder) {
            /* intentionally empty, used for jest.spyOn */
        },
    },
};

function getUnderlyingComponent(
    wrapper: VueWrapper,
): InstanceType<typeof UnderlyingComponent> {
    return wrapper.getComponent<typeof UnderlyingComponent>("#underlying").vm;
}

describe("snapshots", () => {
    it("should match snapshot with a dropdown with attributes", () => {
        const wrapper = createWrapper();
        expect(wrapper.element).toMatchSnapshot();
    });
});

it("should sort by default values", async () => {
    const wrapper = createTableWrapper();
    await wrapper.vm.$nextTick();
    const rows = wrapper.findAll("tr");

    expect(rows[0].find("td").text()).toBe("1");
    expect(rows[1].find("td").text()).toBe("2");
    expect(rows[2].find("td").text()).toBe("3");
});

it("should emit event with used attributes when sorting using table heading", async () => {
    const spyGetUsedSortAttributes = jest.spyOn(
        tableTestComponentWithOutput.methods,
        "usedSortAttributes",
    );

    const wrapper = mount(tableTestComponentWithOutput);

    getUnderlyingComponent(wrapper).triggersort("b", true);
    await wrapper.vm.$nextTick();

    expect(spyGetUsedSortAttributes).toHaveBeenCalledWith({
        attribute: "b",
        name: "Column B",
        ascendingName: "stigande",
        ascending: true,
        id: 2,
    });

    getUnderlyingComponent(wrapper).triggersort("b", false);

    expect(spyGetUsedSortAttributes).toHaveBeenCalledWith({
        attribute: "b",
        name: "Column B",
        ascendingName: "fallande",
        ascending: false,
        id: 3,
    });

    getUnderlyingComponent(wrapper).triggersort("", true);

    expect(spyGetUsedSortAttributes).toHaveBeenCalledWith({
        attribute: "",
        ascending: false,
    });
});

it("should sort by default values even when data changes", async () => {
    const wrapper = createTableWrapper();

    const newData = [
        { a: 7, b: "o" },
        { a: 5, b: "p" },
        { a: 6, b: "q" },
    ];
    await wrapper.setData({ data: newData });
    await wrapper.vm.$nextTick();

    const rows = wrapper.findAll("tr");
    expect(rows[0].find("td").text()).toBe("5");
    expect(rows[1].find("td").text()).toBe("6");
    expect(rows[2].find("td").text()).toBe("7");
});

it("should give an underlying component access to sort", async () => {
    const wrapper = createTableWrapper();

    getUnderlyingComponent(wrapper).testSort();
    await wrapper.vm.$nextTick();

    const rows = wrapper.findAll("tr");
    expect(rows[0].findAll("td")[1].text()).toBe("ö");
    expect(rows[1].findAll("td")[1].text()).toBe("k");
    expect(rows[2].findAll("td")[1].text()).toBe("a");
});

it("should call the underlying component with available sortable atributes", () => {
    const wrapper = createTableWrapper();
    const sortableAttributes =
        getUnderlyingComponent(wrapper).sortableAttributes;
    expect(sortableAttributes).toEqual(["a", "b"]);
});

it("should call the underlying component when sorting changes", async () => {
    const wrapper = createTableWrapper();

    getUnderlyingComponent(wrapper).testSort();

    await wrapper.vm.$nextTick();
    const currentSortAttribute =
        getUnderlyingComponent(wrapper).currentSortAttribute;
    const currentAscending = getUnderlyingComponent(wrapper).currentAscending;
    expect(currentSortAttribute).toBe("b");
    expect(currentAscending).toBe(false);
});

it("should sort data when dropdown is changed", async () => {
    const wrapper = createTableWrapper();
    const options = wrapper.find("select").findAll("option");

    // Sort by Column B (Stigande)
    await options[3].setValue();
    let rows = wrapper.findAll("tr");
    expect(rows[0].findAll("td")[1].text()).toBe("a");
    expect(rows[1].findAll("td")[1].text()).toBe("k");
    expect(rows[2].findAll("td")[1].text()).toBe("ö");

    // Sort by Column A (Stigande)
    await options[1].setValue();
    rows = wrapper.findAll("tr");
    expect(rows[0].findAll("td")[0].text()).toBe("1");
    expect(rows[1].findAll("td")[0].text()).toBe("2");
    expect(rows[2].findAll("td")[0].text()).toBe("3");
});

it("should emit event when dataset is sorted", async () => {
    const wrapper = createWrapper();
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted()["datasetSorted"]).toBeTruthy();
    expect(wrapper.emitted()["datasetSorted"]).toEqual([[DATA]]);

    // Sort by Column B (Stigande)
    const options = wrapper.find("select").findAll("option");
    await options[3].setValue();
    expect(wrapper.emitted()["datasetSorted"]).toEqual([
        [DATA],
        [
            [
                { a: 3, b: "a", c: "dummy", d: {} },
                { a: 2, b: "k", c: "dummy", d: {} },
                { a: 1, b: "ö", c: "dummy", d: {} },
            ],
        ],
    ]);
});

it("should emit event with used attributes when sorting using dropdown", async () => {
    const wrapper = createWrapper();
    await wrapper.vm.$nextTick();

    const options = wrapper.find("select").findAll("option");
    await options[3].setValue();
    expect(wrapper.emitted()["usedSortAttributes"][0]).toEqual([
        {
            attribute: "b",
            name: "Column B",
            ascendingName: "stigande",
            ascending: true,
            id: 2,
        },
    ]);

    await options[4].setValue();
    expect(wrapper.emitted()["usedSortAttributes"][1]).toEqual([
        {
            attribute: "b",
            name: "Column B",
            ascendingName: "fallande",
            ascending: false,
            id: 3,
        },
    ]);

    await options[0].setValue();
    expect(wrapper.emitted()["usedSortAttributes"][2]).toEqual([
        {
            attribute: "",
            ascending: false,
            ascendingName: "",
            id: 0,
            name: "",
        },
    ]);
});

it("should throw error when sorting objects", () => {
    const mountInvalidSort = (): void => {
        mount(FSortFilterDataset, {
            props: {
                data: DATA,
                sortableAttributes: {
                    d: "Column with objects",
                },
                defaultSortAttribute: "d",
            },
        });
    };
    expect(mountInvalidSort).toThrowErrorMatchingInlineSnapshot(`
        "Sorting is only supported for types number, string and boolean.
                    Attribute 'd' comparsion of types 'object' and 'object' is not supported."
    `);
});

it("should sort strings independent of case", async () => {
    const wrapper = createTableWrapper(CASE_SENSITIVE_DATA);
    const options = wrapper.find("select").findAll("option");
    // Sort by Column A (Stigande)
    await options[1].setValue();
    /* eslint-disable-next-line jest/no-large-snapshots -- easier to test with snapshot */
    expect(wrapper.get("table")).toMatchInlineSnapshot(`
        <table>
          <tr>
            <td>aa</td>
            <td>1</td>
          </tr>
          <tr>
            <td>AA</td>
            <td>1</td>
          </tr>
          <tr>
            <td>ab</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Ab</td>
            <td>1</td>
          </tr>
        </table>
    `);
    // Sort by Column A (Fallande)
    await options[2].setValue();
    /* eslint-disable-next-line jest/no-large-snapshots -- easier to test with snapshot  */
    expect(wrapper.get("table")).toMatchInlineSnapshot(`
        <table>
          <tr>
            <td>Ab</td>
            <td>1</td>
          </tr>
          <tr>
            <td>ab</td>
            <td>1</td>
          </tr>
          <tr>
            <td>AA</td>
            <td>1</td>
          </tr>
          <tr>
            <td>aa</td>
            <td>1</td>
          </tr>
        </table>
    `);
});

describe("html-validate", () => {
    it("should require data attribute", () => {
        expect(
            "<f-sort-filter-dataset></f-sort-filter-dataset>",
        ).not.toHTMLValidate({
            message:
                '<f-sort-filter-dataset> is missing required "data" attribute',
        });
    });

    it("should require sortable-attributes attribute", () => {
        expect(
            "<f-sort-filter-dataset></f-sort-filter-dataset>",
        ).not.toHTMLValidate({
            message:
                '<f-sort-filter-dataset> is missing required "sortable-attributes" attribute',
        });
    });

    it("should require default slot", () => {
        expect(
            "<f-sort-filter-dataset></f-sort-filter-dataset>",
        ).not.toHTMLValidate({
            message:
                '<f-sort-filter-dataset> component requires slot "default" to be implemented',
        });
    });

    it("html should be valid", () => {
        expect(
            '<f-sort-filter-dataset data="test" sortable-attributes="test igen"><template #default></template></f-sort-filter-dataset>',
        ).toHTMLValidate();
    });
});
