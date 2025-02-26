import "html-validate/jest";
import { VueWrapper, mount } from "@vue/test-utils";
import { defineComponent } from "vue";
import { ListArray, UnknownItem } from "../../types";
import * as ListUtils from "../../utils/ListUtils";
import { TranslationPlugin } from "../../plugins";
import FList from "./FList.vue";

const items = [
    { id: "1", name: "TEST 1", permission: "Read" },
    { id: "2", name: "TEST 2", permission: "Write" },
    { id: "3", name: "TEST 3", permission: "Read" },
];

const oneItem = [{ id: "1", name: "TEST 1", permission: "Read" }];

function createWrapper({
    props = {},
    slots = {},
    screenReaderSlot = true,
    stubs = [] as string[],
}): VueWrapper {
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any -- technical debt
    const preDefinedSlots: any = {
        default: `<p>{{ params.item.id }}, {{ params.item.name }}, {{ params.item.permission }}</p>`,
        screenreader: /* HTML */ `<span>{{ params.item.name }}</span>`,
    };

    if (!screenReaderSlot) {
        delete preDefinedSlots.screenreader;
    }

    return mount(FList, {
        props: {
            items: [],
            keyAttribute: "id",
            ...props,
        },
        slots: { ...preDefinedSlots, ...slots },
        global: {
            plugins: [TranslationPlugin],
            stubs: stubs,
        },
    });
}

afterEach(() => {
    jest.restoreAllMocks();
});

describe("snapshots", () => {
    it("should match snapshot with a list containg three items", () => {
        const wrapper = createWrapper({
            props: {
                items,
            },
        });

        expect(wrapper.element).toMatchSnapshot();
    });

    it("should match snapshot with list being selectable with second item active", async () => {
        const wrapper = createWrapper({
            props: {
                items,
                selectable: true,
            },
            stubs: ["f-checkbox-field"],
        });

        await wrapper
            .findAll("li")[1]
            .findAll(".list__item__itempane")[0]
            .trigger("click");

        expect(wrapper.element).toMatchSnapshot();
    });

    it("should match snapshot with list being selectable with first and second item selected", () => {
        const preSelectedItems = [items[0], items[1]];
        const wrapper = createWrapper({
            props: {
                items,
                selectable: true,
                modelValue: preSelectedItems,
            },
            stubs: ["f-checkbox-field"],
        });

        expect(wrapper.element).toMatchSnapshot();
    });

    it("should match snapshot with no items in list and default text", () => {
        const wrapper = createWrapper({
            props: {
                items: [],
            },
        });

        expect(wrapper.element).toMatchSnapshot();
    });

    it("should match snapshot with no items in list and custom text", () => {
        const wrapper = createWrapper({
            props: {
                items: [],
            },
            slots: {
                empty: "THE LIST IS EMPTY!",
            },
        });

        expect(wrapper.element).toMatchSnapshot();
    });
});

describe("active element", () => {
    it("should activate element and emit change event when clicking item", async () => {
        const wrapper = createWrapper({
            props: {
                items,
                selectable: true,
            },
        });
        const item = wrapper.findAll(".list__item__itempane")[1];
        await item.trigger("click");
        const li = item.element.closest("li")!;
        expect(Array.from(li.classList.values())).toMatchInlineSnapshot(`
            [
              "list__item--active",
              "list__item",
            ]
        `);

        expect(wrapper.emitted("change")![0][0]).toMatchInlineSnapshot(`
            {
              "id": "2",
              "name": "TEST 2",
              "permission": "Write",
            }
        `);
    });

    it.each([" ", "Spacebar"])(
        "should activate element and emit change event when item getting space key (%s) down event",
        async (key: string) => {
            const wrapper = createWrapper({
                props: {
                    items,
                    selectable: true,
                },
            });
            const li = wrapper.findAll("li")[1];
            await li.trigger("keydown", { key });

            expect(Array.from(li.element.classList.values())).toMatchSnapshot();
            expect(wrapper.emitted("change")![0][0]).toMatchSnapshot();
        },
    );

    it("should activate element and emit click event when clicking item", async () => {
        const wrapper = createWrapper({
            props: {
                items,
                selectable: true,
            },
        });
        const item = wrapper.findAll(".list__item__itempane")[1];
        await item.trigger("click");
        const li = item.element.closest("li")!;
        expect(Array.from(li.classList.values())).toMatchInlineSnapshot(`
            [
              "list__item--active",
              "list__item",
            ]
        `);

        expect(wrapper.emitted("click")![0][0]).toMatchInlineSnapshot(`
            {
              "id": "2",
              "name": "TEST 2",
              "permission": "Write",
            }
        `);
        expect(wrapper.emitted("click")).toHaveLength(1);
    });

    it.each([" ", "Spacebar"])(
        "should activate element and emit click event when item getting space key (%s) down event",
        async (key: string) => {
            const wrapper = createWrapper({
                props: {
                    items,
                    selectable: true,
                },
            });
            const li = wrapper.findAll("li")[1];
            await li.trigger("keydown", { key });

            expect(Array.from(li.element.classList.values())).toMatchSnapshot();
            expect(wrapper.emitted("click")![0][0]).toMatchSnapshot();
            expect(wrapper.emitted("click")!).toHaveLength(1);
        },
    );

    it("should emit click event when clicking on active item", async () => {
        const wrapper = createWrapper({
            props: {
                items,
                selectable: true,
            },
        });
        const item = wrapper.findAll(".list__item__itempane")[1];
        await item.trigger("click");
        await item.trigger("click");
        expect(wrapper.emitted("click")!).toHaveLength(2);
    });

    it.each([" ", "Spacebar"])(
        "should emit click event when active item getting space key (%s) down event",
        async (key: string) => {
            const wrapper = createWrapper({
                props: {
                    items,
                    selectable: true,
                },
            });
            const li = wrapper.findAll("li")[1];
            await li.trigger("keydown", { key });
            await li.trigger("keydown", { key });
            expect(wrapper.emitted("click")!).toHaveLength(2);
        },
    );

    it("should emit update:active when clicking on item", async () => {
        const wrapper = createWrapper({
            props: {
                items,
                selectable: true,
            },
        });
        const item = wrapper.findAll(".list__item__itempane")[1];
        await item.trigger("click");
        expect(wrapper.emitted("update:active")![0][0]).toMatchInlineSnapshot(`
            {
              "id": "2",
              "name": "TEST 2",
              "permission": "Write",
            }
        `);
    });

    it("should reset active item", async () => {
        let activeItem: UnknownItem | undefined;
        const TestComponent = defineComponent({
            name: "TestComponent",
            components: { FList },
            data() {
                return { items, activeItem, selectedItems: [] };
            },
            template: /* HTML */ `
                <f-list
                    v-model="selectedItems"
                    v-model:active="activeItem"
                    :items="items"
                    key-attribute="id"
                    selectable
                >
                    <template #default="{ item }">
                        <h3>{{ item.frukt }}</h3>
                    </template>
                    <template #screenreader="{ item }">
                        Frukt {{ item.frukt }}
                    </template>
                </f-list>
            `,
        });
        const wrapper = mount(TestComponent);
        wrapper.vm.$data.activeItem = items[1];
        await wrapper.vm.$nextTick();
        const listItem = wrapper.findAll(".list__item")[1];
        expect(listItem.classes()).toContain("list__item--active");
        wrapper.vm.$data.activeItem = undefined;
        await wrapper.vm.$nextTick();
        expect(listItem.classes()).not.toContain("list__item--active");
    });
});

describe("select events", () => {
    it("should emit select event when items selectpane is clicked", async () => {
        const wrapper = createWrapper({
            props: {
                items,
                selectable: true,
            },
        });

        await wrapper.findAll("div.list__item__selectpane")[1].trigger("click");
        expect(wrapper.emitted()["select"]).toEqual([[items[1]]]);
    });

    it("should emit select event when items checkbox is clicked", async () => {
        const wrapper = createWrapper({
            props: {
                items,
                selectable: true,
                keyAttribute: "id",
            },
        });

        await wrapper.findAll("input")[1].trigger("click");
        expect(wrapper.emitted()["select"]).toEqual([[items[1]]]);
    });

    it("should emit unselect event when items checkbox is clicked", async () => {
        const preSelected = [items[1]];
        const wrapper = createWrapper({
            props: {
                items,
                selectable: true,
                modelValue: preSelected,
            },
        });

        await wrapper.findAll("input")[1].trigger("click");
        expect(wrapper.emitted()["unselect"]).toEqual([[items[1]]]);
    });
});

describe("v-model (update event)", () => {
    it("should update v-model when selecting and unselecting same item", async () => {
        const modelValue: ListArray = [];
        const wrapper = createWrapper({
            props: {
                items,
                selectable: true,
                modelValue,
            },
        });
        const secondCheckbox = wrapper.findAll("input")[1];

        await secondCheckbox.trigger("click");
        expect(wrapper.emitted("update:modelValue")![0][0])
            .toMatchInlineSnapshot(`
            [
              {
                "id": "2",
                "name": "TEST 2",
                "permission": "Write",
              },
            ]
        `);

        await secondCheckbox.trigger("click");
        expect(
            wrapper.emitted("update:modelValue")![1][0],
        ).toMatchInlineSnapshot(`[]`);
    });

    it("should update v-model when selecting two different items", async () => {
        const modelValue: ListArray = [];
        const wrapper = createWrapper({
            props: {
                items,
                selectable: true,
                modelValue,
            },
        });
        const firstCheckbox = wrapper.findAll("input")[0];
        const secondCheckbox = wrapper.findAll("input")[1];

        await firstCheckbox.trigger("click");
        expect(wrapper.emitted("update:modelValue")![0][0]).toEqual([
            {
                id: "1",
                name: "TEST 1",
                permission: "Read",
            },
        ]);

        await secondCheckbox.trigger("click");
        expect(wrapper.emitted("update:modelValue")![1][0]).toEqual([
            {
                id: "1",
                name: "TEST 1",
                permission: "Read",
            },
            {
                id: "2",
                name: "TEST 2",
                permission: "Write",
            },
        ]);
    });

    it("should update v-model when selecting and unselecting two items", async () => {
        const modelValue: ListArray = [];
        const wrapper = createWrapper({
            props: {
                items,
                selectable: true,
                modelValue,
            },
        });
        const firstCheckbox = wrapper.findAll("input")[0];
        const secondCheckbox = wrapper.findAll("input")[1];

        await firstCheckbox.trigger("click");
        await secondCheckbox.trigger("click");

        expect(wrapper.emitted("update:modelValue")![0][0]).toEqual([
            {
                id: "1",
                name: "TEST 1",
                permission: "Read",
            },
            {
                id: "2",
                name: "TEST 2",
                permission: "Write",
            },
        ]);

        await firstCheckbox.trigger("click");
        await secondCheckbox.trigger("click");

        expect(
            wrapper.emitted("update:modelValue")![3][0],
        ).toMatchInlineSnapshot(`[]`);
    });

    it("should select items when updating v-model", async () => {
        const wrapper = createWrapper({
            props: {
                items,
                selectable: true,
            },
        });

        let allInputs = wrapper.element.querySelectorAll("input");
        expect(allInputs[0].checked).toBeFalsy();
        expect(allInputs[1].checked).toBeFalsy();
        expect(allInputs[2].checked).toBeFalsy();

        await wrapper.setProps({ modelValue: [items[0], items[2]] });
        await wrapper.vm.$nextTick();

        allInputs = wrapper.element.querySelectorAll("input");
        expect(allInputs[0].checked).toBeTruthy();
        expect(allInputs[1].checked).toBeFalsy();
        expect(allInputs[2].checked).toBeTruthy();
    });

    it("should update activeItem from v-model if provided or changed", async () => {
        const active = items[1];
        const wrapper = createWrapper({
            props: {
                items,
                selectable: true,
                active,
            },
        });

        const liItems = wrapper.findAll("li");
        expect(Array.from(liItems[1].element.classList.values())).toContain(
            "list__item--active",
        );

        wrapper.setProps({ active: items[2] });
        await wrapper.vm.$nextTick();

        expect(Array.from(liItems[2].element.classList.values())).toContain(
            "list__item--active",
        );
    });

    it("should be able to preselect items", () => {
        const wrapper = createWrapper({
            props: {
                items,
                selectable: true,
                modelValue: [items[0], items[2]],
            },
        });

        const allInputs = wrapper.element.querySelectorAll("input");
        expect(allInputs[0].checked).toBeTruthy();
        expect(allInputs[1].checked).toBeFalsy();
        expect(allInputs[2].checked).toBeTruthy();
    });
});

describe("`keyAttribute`", () => {
    it("should not throw if valid and unique", async () => {
        expect.assertions(1);

        expect(() => {
            mount(FList, {
                props: {
                    keyAttribute: "id",
                    items: [{ id: "a" }, { id: "b" }, { id: "c" }],
                },
            });
        }).not.toThrow();
    });

    it("should throw error if not unique in items", async () => {
        expect.assertions(1);

        expect(() => {
            mount(FList, {
                props: {
                    keyAttribute: "id",
                    items: [{ id: "a" }, { id: "b" }, { id: "b" }],
                },
            });
        }).toThrowErrorMatchingInlineSnapshot(
            `"Expected each item to have key [id] with unique value but encountered duplicate of "b" in item index 2."`,
        );
    });

    it("should be optional", async () => {
        expect.assertions(1);

        expect(() => {
            mount(FList, {
                props: {
                    items: [{ id: "a" }, { id: "b" }, { id: "c" }],
                },
            });
        }).not.toThrow();
    });
});

describe("keyboard navigation", () => {
    it.each(["Up", "Down", "ArrowUp", "ArrowDown"])(
        "should pass key '%s' to handleKeyboardFocusNavigation method",
        async (key: string) => {
            const methodSpy = jest.spyOn(
                ListUtils,
                "handleKeyboardFocusNavigation",
            );

            const wrapper = createWrapper({
                props: {
                    items: oneItem,
                    selectable: true,
                },
            });
            // Need to use setProps to trigger Updated() on the component
            await wrapper.setProps({ items: items });
            const li = wrapper.findAll("li")[1];
            await li.trigger("keydown", { key });

            expect(methodSpy).toHaveBeenCalledWith(
                key,
                expect.anything(),
                expect.anything(),
            );
        },
    );
});

describe("screenreader slot", () => {
    /* eslint-disable-next-line no-console -- technical debt, bad practice and
     * the mock is not restored so leaking to other tests */
    console.error = jest.fn();
    const modelValue: ListArray = [];

    it("should throw exception if missing screenreader slot and selectable option", async () => {
        expect(() => {
            createWrapper({
                props: {
                    items,
                    selectable: true,
                    modelValue,
                },
                screenReaderSlot: false,
            });
        }).toThrowErrorMatchingInlineSnapshot(
            `"Slot "screenreader" is required when having "selectable" & "checkbox" option."`,
        );
    });
});

describe("html-validate", () => {
    it("should require `key-attribute` to be non-empty if used", () => {
        expect.assertions(1);
        expect('<f-list key-attribute=""></f-list>').not.toHTMLValidate({
            message: 'Attribute "key-attribute" has invalid value ""',
        });
    });

    it("should require items attribute", () => {
        expect.assertions(1);
        expect("<f-list></f-list>").not.toHTMLValidate({
            message: '<f-list> is missing required "items" attribute',
        });
    });
});
