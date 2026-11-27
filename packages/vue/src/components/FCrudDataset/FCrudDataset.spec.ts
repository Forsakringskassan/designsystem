import "html-validate/vitest";
import { defineComponent, nextTick } from "vue";
import * as logic from "@fkui/logic";
import { type VueWrapper, flushPromises, mount } from "@vue/test-utils";
import { afterEach, describe, expect, it, vi } from "vitest";
import { FSortFilterDataset } from "../FSortFilterDataset";
import { FTableButton } from "../FTableButton";
import FCrudDataset from "./FCrudDataset.vue";

interface Item {
    id: number;
    name: string;
}

afterEach(() => {
    vi.clearAllMocks();
});

const TABLE = /* HTML */ `
    <table>
        <tbody>
            <tr v-for="item in items" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>
                    <f-table-button
                        :id="'modify-' + item.id"
                        icon="pen"
                        label
                        @click="updateItem(item)"
                    >
                        Ändra
                    </f-table-button>
                </td>
                <td>
                    <f-table-button
                        :id="'delete-' + item.id"
                        icon="trashcan"
                        label
                        @click="deleteItem(item)"
                    >
                        Ta bort
                    </f-table-button>
                </td>
            </tr>
        </tbody>
    </table>
`;

function createWrapper(
    props: Record<string, unknown> = {},
    slots = "",
    errorHandler?: (err: unknown) => void,
): VueWrapper {
    const TestComponent = defineComponent({
        components: { FCrudDataset, FTableButton },
        data() {
            return {
                items: [
                    { id: 1, name: "a" },
                    { id: 2, name: "b" },
                ] as Item[],
                props,
            };
        },
        template: /* HTML */ `
            <f-crud-dataset v-model="items" v-bind="props">
                <template #default="{ updateItem, deleteItem }"
                    >${TABLE}</template
                >
                ${slots}
            </f-crud-dataset>
        `,
    });
    return mount(TestComponent, {
        global: { stubs: ["FIcon"], config: { errorHandler } },
    });
}

function getItems(wrapper: VueWrapper): Item[] {
    return (wrapper.vm as unknown as { items: Item[] }).items;
}

it("should throw if no callback is given", () => {
    expect.assertions(1);
    const errorSpy = vi.spyOn(console, "warn").mockImplementation(() => {
        /* do nothing */
    });
    expect(() => createWrapper()).toThrow(
        "At least one of the following props must be set: onCreate, onUpdate or onDelete",
    );
    errorSpy.mockRestore();
});

describe("add button", () => {
    it("should not show add button when onCreate is absent", () => {
        expect.assertions(1);
        const wrapper = createWrapper({ onUpdate: vi.fn() });
        expect(wrapper.findAll(".crud-dataset__add-button")).toHaveLength(0);
    });

    it("should show add button when onCreate is present", () => {
        expect.assertions(2);
        const wrapper = createWrapper({ onCreate: vi.fn() });
        const buttons = wrapper.findAll(".crud-dataset__add-button");
        expect(buttons).toHaveLength(1);
        expect(buttons.at(0)?.text()).toBe("Lägg till ny");
    });

    it("should show custom buttons when onCreate is present", () => {
        expect.assertions(4);
        const wrapper = createWrapper(
            { onCreate: vi.fn() },
            /* HTML */ `
                <template #buttons="{ buttonClasses }">
                    <button type="button" :class="buttonClasses">Foo</button>
                    <button type="button" :class="buttonClasses">Bar</button>
                </template>
            `,
        );
        const buttons = wrapper.findAll(".crud-dataset__add-button");
        expect(buttons).toHaveLength(3);
        expect(buttons.at(0)?.text()).toBe("Lägg till ny");
        expect(buttons.at(1)?.text()).toBe("Foo");
        expect(buttons.at(2)?.text()).toBe("Bar");
    });
});

describe("buttonPosition", () => {
    it.each`
        buttonPosition | expected
        ${"top"}       | ${Node.DOCUMENT_POSITION_FOLLOWING}
        ${"bottom"}    | ${Node.DOCUMENT_POSITION_PRECEDING}
        ${undefined}   | ${Node.DOCUMENT_POSITION_PRECEDING}
    `(
        "should render add button relative to content when position is $buttonPosition",
        ({ buttonPosition, expected }) => {
            expect.assertions(2);
            const wrapper = createWrapper({
                onCreate: vi.fn(),
                buttonPosition,
            });
            const addButton = wrapper.find(".crud-dataset__add-button");
            const table = wrapper.find("table");
            expect(addButton.exists()).toBe(true);
            expect(
                addButton.element.compareDocumentPosition(table.element),
            ).toBe(expected);
        },
    );
});

describe("onCreate", () => {
    it("should call onCreate when add button is pressed", async () => {
        expect.assertions(1);
        const onCreate = vi.fn();
        const wrapper = createWrapper({ onCreate });
        await wrapper.get(".crud-dataset__add-button").trigger("click");
        expect(onCreate).toHaveBeenCalledWith(expect.any(Function));
    });

    it("should not add item until commit is called", async () => {
        expect.assertions(1);
        const wrapper = createWrapper({ onCreate: vi.fn() });
        await wrapper.get(".crud-dataset__add-button").trigger("click");
        expect(getItems(wrapper)).toHaveLength(2);
    });

    it("should add item when commit is called", async () => {
        expect.assertions(3);
        const alertScreenReader = vi.spyOn(logic, "alertScreenReader");
        const onCreate = vi.fn<(commit: (item: Item) => void) => void>();
        const wrapper = createWrapper({ onCreate });
        await wrapper.get(".crud-dataset__add-button").trigger("click");
        const [commit] = onCreate.mock.calls[0];
        commit({ id: 3, name: "c" });
        await nextTick();
        expect(getItems(wrapper)).toEqual([
            { id: 1, name: "a" },
            { id: 2, name: "b" },
            { id: 3, name: "c" },
        ]);
        expect(wrapper.text()).toContain("c");
        expect(alertScreenReader).toHaveBeenCalledWith(
            "En rad har lagts till",
            {
                assertive: true,
            },
        );
    });

    it("should use custom alert message when provided", async () => {
        expect.assertions(1);
        const alertScreenReader = vi.spyOn(logic, "alertScreenReader");
        const onCreate =
            vi.fn<(commit: (item: Item, alert?: string) => void) => void>();
        const wrapper = createWrapper({ onCreate });
        await wrapper.get(".crud-dataset__add-button").trigger("click");
        const [commit] = onCreate.mock.calls[0];
        commit({ id: 3, name: "c" }, "Custom add message");
        await nextTick();
        expect(alertScreenReader).toHaveBeenCalledWith("Custom add message", {
            assertive: true,
        });
    });

    it("should use default alert message when not provided", async () => {
        expect.assertions(1);
        const alertScreenReader = vi.spyOn(logic, "alertScreenReader");
        const onCreate =
            vi.fn<(commit: (item: Item, alert?: string) => void) => void>();
        const wrapper = createWrapper({ onCreate });
        await wrapper.get(".crud-dataset__add-button").trigger("click");
        const [commit] = onCreate.mock.calls[0];
        commit({ id: 3, name: "c" });
        await nextTick();
        expect(alertScreenReader).toHaveBeenCalledWith(
            "En rad har lagts till",
            { assertive: true },
        );
    });
});

describe("onUpdate", () => {
    it("should call onUpdate with item when modify button is pressed", async () => {
        expect.assertions(1);
        const onUpdate = vi.fn();
        const wrapper = createWrapper({ onUpdate });
        await wrapper.get("#modify-1").trigger("click");
        expect(onUpdate).toHaveBeenCalledWith(
            { id: 1, name: "a" },
            expect.any(Function),
        );
    });

    it("should update original item with committed item", async () => {
        expect.assertions(3);
        const alertScreenReader = vi.spyOn(logic, "alertScreenReader");
        const wrapper = createWrapper({
            onUpdate: (item: Item, commit: (item: Item) => void) => {
                commit({ ...item, name: "modified" });
            },
        });
        const original = getItems(wrapper)[0];
        await wrapper.get("#modify-1").trigger("click");
        expect(getItems(wrapper)[0]).toBe(original);
        expect(original).toEqual({ id: 1, name: "modified" });
        expect(alertScreenReader).toHaveBeenCalledWith("Raden har ändrats", {
            assertive: true,
        });
    });

    it("should call onUpdate with a copy of the item", async () => {
        expect.assertions(2);
        const onUpdate = vi.fn();
        const wrapper = createWrapper({ onUpdate });
        const original = getItems(wrapper)[0];
        await wrapper.get("#modify-1").trigger("click");
        const [received] = onUpdate.mock.calls[0] as [Item];
        expect(received).toEqual(original);
        expect(received).not.toBe(original);
    });

    it("should leave original item untouched when copy is modified without commit", async () => {
        expect.assertions(1);
        const wrapper = createWrapper({
            onUpdate: (item: Item) => {
                item.name = "modified";
            },
        });
        await wrapper.get("#modify-1").trigger("click");
        expect(getItems(wrapper)[0]).toEqual({ id: 1, name: "a" });
    });

    it("should update original item when modified copy is committed", async () => {
        expect.assertions(2);
        const wrapper = createWrapper({
            onUpdate: (item: Item, commit: (item: Item) => void) => {
                item.name = "modified";
                commit(item);
            },
        });
        const original = getItems(wrapper)[0];
        await wrapper.get("#modify-1").trigger("click");
        expect(getItems(wrapper)[0]).toBe(original);
        expect(original).toEqual({ id: 1, name: "modified" });
    });

    it("should not modify item until commit is called", async () => {
        expect.assertions(1);
        const wrapper = createWrapper({ onUpdate: vi.fn() });
        await wrapper.get("#modify-1").trigger("click");
        expect(getItems(wrapper)[0]).toEqual({ id: 1, name: "a" });
    });

    it("should use custom alert message when provided", async () => {
        expect.assertions(1);
        const alertScreenReader = vi.spyOn(logic, "alertScreenReader");
        const wrapper = createWrapper({
            onUpdate: (
                item: Item,
                commit: (modified: Item, alert?: string) => void,
            ) => {
                commit({ ...item, name: "modified" }, "Custom edit message");
            },
        });
        await wrapper.get("#modify-1").trigger("click");
        expect(alertScreenReader).toHaveBeenCalledWith("Custom edit message", {
            assertive: true,
        });
    });

    it("should use default alert message when not provided", async () => {
        expect.assertions(1);
        const alertScreenReader = vi.spyOn(logic, "alertScreenReader");
        const wrapper = createWrapper({
            onUpdate: (
                item: Item,
                commit: (modified: Item, alert?: string) => void,
            ) => {
                commit({ ...item, name: "modified" });
            },
        });
        await wrapper.get("#modify-1").trigger("click");
        expect(alertScreenReader).toHaveBeenCalledWith("Raden har ändrats", {
            assertive: true,
        });
    });

    it("should throw when committing a primitive item", () => {
        expect.assertions(3);
        const alertScreenReader = vi.spyOn(logic, "alertScreenReader");
        const wrapper = mount(FCrudDataset, {
            props: {
                modelValue: [1, 2],
                onUpdate: (
                    item: unknown,
                    commit: (modified: unknown) => void,
                ) => {
                    commit(3);
                },
            },
            global: { stubs: ["FIcon"] },
        });
        const crud = wrapper.vm as unknown as {
            updateItem(item: number): void;
        };
        expect(() => {
            crud.updateItem(1);
        }).toThrow("FCrudDataset can only modify object items");
        expect(wrapper.emitted("update:modelValue")).toBeUndefined();
        expect(alertScreenReader).not.toHaveBeenCalled();
    });
});

describe("onDelete", () => {
    it("should call onDelete with item when delete button is pressed", async () => {
        expect.assertions(1);
        const onDelete = vi.fn();
        const wrapper = createWrapper({ onDelete });
        await wrapper.get("#delete-1").trigger("click");
        expect(onDelete).toHaveBeenCalledWith(
            { id: 1, name: "a" },
            expect.any(Function),
        );
    });

    it("should remove item when commit is called", async () => {
        expect.assertions(2);
        const alertScreenReader = vi.spyOn(logic, "alertScreenReader");
        const wrapper = createWrapper({
            onDelete: (_item: Item, commit: () => void) => {
                commit();
            },
        });
        await wrapper.get("#delete-1").trigger("click");
        expect(getItems(wrapper)).toEqual([{ id: 2, name: "b" }]);
        expect(alertScreenReader).toHaveBeenCalledWith(
            "Raden har tagits bort",
            {
                assertive: true,
            },
        );
    });

    it("should not remove item until commit is called", async () => {
        expect.assertions(1);
        const wrapper = createWrapper({ onDelete: vi.fn() });
        await wrapper.get("#delete-1").trigger("click");
        expect(getItems(wrapper)).toHaveLength(2);
    });

    it("should use custom alert message when provided", async () => {
        expect.assertions(1);
        const alertScreenReader = vi.spyOn(logic, "alertScreenReader");
        const wrapper = createWrapper({
            onDelete: (_item: Item, commit: (alert?: string) => void) => {
                commit("Custom delete message");
            },
        });
        await wrapper.get("#delete-1").trigger("click");
        expect(alertScreenReader).toHaveBeenCalledWith(
            "Custom delete message",
            { assertive: true },
        );
    });

    it("should use default alert message when not provided", async () => {
        expect.assertions(1);
        const alertScreenReader = vi.spyOn(logic, "alertScreenReader");
        const wrapper = createWrapper({
            onDelete: (_item: Item, commit: (alert?: string) => void) => {
                commit();
            },
        });
        await wrapper.get("#delete-1").trigger("click");
        expect(alertScreenReader).toHaveBeenCalledWith(
            "Raden har tagits bort",
            { assertive: true },
        );
    });
});

describe("missing callback", () => {
    interface Exposed {
        createItem(): void;
        updateItem(item: Item): void;
        deleteItem(item: Item): void;
    }

    function getExposed(wrapper: VueWrapper): Exposed {
        const vm: unknown = wrapper.findComponent(FCrudDataset).vm;
        return vm as Exposed;
    }

    it("should throw when adding without onCreate", () => {
        expect.assertions(1);
        const wrapper = createWrapper({ onDelete: vi.fn() });
        expect(() => {
            getExposed(wrapper).createItem();
        }).toThrow("No onCreate callback is defined");
    });

    it("should throw when modifying without onUpdate", () => {
        expect.assertions(1);
        const wrapper = createWrapper({ onCreate: vi.fn() });
        const item = getItems(wrapper)[0];
        expect(() => {
            getExposed(wrapper).updateItem(item);
        }).toThrow("No onUpdate callback is defined");
    });

    it("should throw when removing without onDelete", () => {
        expect.assertions(1);
        const wrapper = createWrapper({ onCreate: vi.fn() });
        const item = getItems(wrapper)[0];
        expect(() => {
            getExposed(wrapper).deleteItem(item);
        }).toThrow("No onDelete callback is defined");
    });
});

describe("rejected callbacks", () => {
    it("should report rejection from onCreate to errorHandler", async () => {
        expect.assertions(2);
        const error = new Error("add failed");
        const errorHandler = vi.fn();
        const onCreate = vi.fn(() => Promise.reject(error));
        const wrapper = createWrapper({ onCreate }, "", errorHandler);
        await wrapper.get(".crud-dataset__add-button").trigger("click");
        await flushPromises();
        expect(errorHandler).toHaveBeenCalledWith(
            error,
            expect.anything(),
            expect.anything(),
        );
        expect(getItems(wrapper)).toHaveLength(2);
    });

    it("should report rejection from onUpdate to errorHandler", async () => {
        expect.assertions(2);
        const error = new Error("edit failed");
        const errorHandler = vi.fn();
        const onUpdate = vi.fn(() => Promise.reject(error));
        const wrapper = createWrapper({ onUpdate }, "", errorHandler);
        await wrapper.get("#modify-1").trigger("click");
        await flushPromises();
        expect(errorHandler).toHaveBeenCalledWith(
            error,
            expect.anything(),
            expect.anything(),
        );
        expect(getItems(wrapper)[0]).toEqual({ id: 1, name: "a" });
    });

    it("should report rejection from onDelete to errorHandler", async () => {
        expect.assertions(2);
        const error = new Error("remove failed");
        const errorHandler = vi.fn();
        const onDelete = vi.fn(() => Promise.reject(error));
        const wrapper = createWrapper({ onDelete }, "", errorHandler);
        await wrapper.get("#delete-1").trigger("click");
        await flushPromises();
        expect(errorHandler).toHaveBeenCalledWith(
            error,
            expect.anything(),
            expect.anything(),
        );
        expect(getItems(wrapper)).toHaveLength(2);
    });

    it("should return the promise from exposed methods", async () => {
        expect.assertions(3);
        const error = new Error("failed");
        const wrapper = createWrapper({
            onCreate: () => Promise.reject(error),
            onUpdate: () => Promise.reject(error),
            onDelete: () => Promise.reject(error),
        });
        const crud = wrapper.findComponent(FCrudDataset).vm as unknown as {
            createItem(): Promise<void>;
            updateItem(item: Item): Promise<void>;
            deleteItem(item: Item): Promise<void>;
        };
        const item = getItems(wrapper)[0];
        await expect(crud.createItem()).rejects.toBe(error);
        await expect(crud.updateItem(item)).rejects.toBe(error);
        await expect(crud.deleteItem(item)).rejects.toBe(error);
    });

    it("should return undefined from exposed methods for synchronous callbacks", () => {
        expect.assertions(1);
        const wrapper = createWrapper({ onCreate: () => undefined });
        const crud = wrapper.findComponent(FCrudDataset).vm as unknown as {
            createItem(): unknown;
        };
        expect(crud.createItem()).toBeUndefined();
    });
});

describe("commit after unmount", () => {
    it("should ignore onCreate commit after unmount", async () => {
        expect.assertions(3);
        const alertScreenReader = vi.spyOn(logic, "alertScreenReader");
        const onCreate = vi.fn<(commit: (item: Item) => void) => void>();
        const wrapper = createWrapper({ onCreate });
        await wrapper.get(".crud-dataset__add-button").trigger("click");
        const [commit] = onCreate.mock.calls[0];
        const crud = wrapper.findComponent(FCrudDataset);
        wrapper.unmount();
        commit({ id: 3, name: "c" });
        expect(getItems(wrapper)).toHaveLength(2);
        expect(crud.emitted("update:modelValue")).toBeUndefined();
        expect(alertScreenReader).not.toHaveBeenCalled();
    });

    it("should ignore onUpdate commit after unmount", async () => {
        expect.assertions(3);
        const alertScreenReader = vi.spyOn(logic, "alertScreenReader");
        const onUpdate =
            vi.fn<(item: Item, commit: (item: Item) => void) => void>();
        const wrapper = createWrapper({ onUpdate });
        const original = getItems(wrapper)[0];
        await wrapper.get("#modify-1").trigger("click");
        const [item, commit] = onUpdate.mock.calls[0];
        const crud = wrapper.findComponent(FCrudDataset);
        wrapper.unmount();
        commit({ ...item, name: "modified" });
        expect(original).toEqual({ id: 1, name: "a" });
        expect(crud.emitted("update:modelValue")).toBeUndefined();
        expect(alertScreenReader).not.toHaveBeenCalled();
    });

    it("should ignore onDelete commit after unmount", async () => {
        expect.assertions(3);
        const alertScreenReader = vi.spyOn(logic, "alertScreenReader");
        const onDelete = vi.fn<(item: Item, commit: () => void) => void>();
        const wrapper = createWrapper({ onDelete });
        await wrapper.get("#delete-1").trigger("click");
        const [, commit] = onDelete.mock.calls[0];
        const crud = wrapper.findComponent(FCrudDataset);
        wrapper.unmount();
        commit();
        expect(getItems(wrapper)).toHaveLength(2);
        expect(crud.emitted("update:modelValue")).toBeUndefined();
        expect(alertScreenReader).not.toHaveBeenCalled();
    });
});

describe("v-model", () => {
    function getEmitted(wrapper: VueWrapper): Item[][] {
        const crud = wrapper.findComponent(FCrudDataset);
        return (crud.emitted("update:modelValue") ?? []) as Item[][];
    }

    it("should emit update:modelValue when item is added", async () => {
        expect.assertions(4);
        const wrapper = createWrapper({
            onCreate: (commit: (item: Item) => void) => {
                commit({ id: 3, name: "c" });
            },
        });
        const original = getItems(wrapper);
        await wrapper.get(".crud-dataset__add-button").trigger("click");
        const emitted = getEmitted(wrapper);
        expect(emitted).toHaveLength(1);
        expect(emitted[0][0]).toEqual([
            { id: 1, name: "a" },
            { id: 2, name: "b" },
            { id: 3, name: "c" },
        ]);
        expect(getItems(wrapper)).toEqual(emitted[0][0]);
        expect(original).toHaveLength(2);
    });

    it("should emit update:modelValue when item is edited", async () => {
        expect.assertions(3);
        const wrapper = createWrapper({
            onUpdate: (item: Item, commit: (item: Item) => void) => {
                commit({ ...item, name: "modified" });
            },
        });
        await wrapper.get("#modify-1").trigger("click");
        const emitted = getEmitted(wrapper);
        expect(emitted).toHaveLength(1);
        expect(emitted[0][0]).toEqual([
            { id: 1, name: "modified" },
            { id: 2, name: "b" },
        ]);
        expect(getItems(wrapper)).toEqual(emitted[0][0]);
    });

    it("should emit update:modelValue when item is removed", async () => {
        expect.assertions(4);
        const wrapper = createWrapper({
            onDelete: (_item: Item, commit: () => void) => {
                commit();
            },
        });
        const original = getItems(wrapper);
        await wrapper.get("#delete-1").trigger("click");
        const emitted = getEmitted(wrapper);
        expect(emitted).toHaveLength(1);
        expect(emitted[0][0]).toEqual([{ id: 2, name: "b" }]);
        expect(getItems(wrapper)).toEqual(emitted[0][0]);
        expect(original).toHaveLength(2);
    });

    it("should not emit update:modelValue until commit is called", async () => {
        expect.assertions(1);
        const wrapper = createWrapper({
            onCreate: vi.fn(),
            onUpdate: vi.fn(),
            onDelete: vi.fn(),
        });
        await wrapper.get(".crud-dataset__add-button").trigger("click");
        await wrapper.get("#modify-1").trigger("click");
        await wrapper.get("#delete-1").trigger("click");
        expect(getEmitted(wrapper)).toHaveLength(0);
    });
});

describe("html-validate", () => {
    it("should html-validate", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-crud-dataset>
                <template #default></template>
            </f-crud-dataset>
        `;
        await expect(markup).toBeValid();
    });
});

describe("with FSortFilterDataset", () => {
    interface Fruit {
        id: number;
        name: string;
    }

    function createSortFilterWrapper(): VueWrapper {
        return mount(
            defineComponent({
                components: { FCrudDataset, FSortFilterDataset },
                data() {
                    return {
                        items: [
                            { id: 1, name: "banana" },
                            { id: 2, name: "apple" },
                            { id: 3, name: "bandana" },
                        ] as Fruit[],
                    };
                },
                methods: {
                    onCreate(commit: (item: Fruit) => void): void {
                        commit({ id: 4, name: "kiwi" });
                    },
                    onUpdate(item: Fruit, commit: (item: Fruit) => void): void {
                        commit({ ...item, name: `${item.name}!` });
                    },
                    onDelete(_item: Fruit, commit: () => void): void {
                        commit();
                    },
                },
                template: /* HTML */ `
                    <f-crud-dataset
                        v-model="items"
                        :on-create
                        :on-update
                        :on-delete
                    >
                        <template #default="{ updateItem, deleteItem }">
                            <f-sort-filter-dataset
                                :data="items"
                                show-filter
                                show-sort
                                :sortable-attributes="{ name: 'Namn' }"
                            >
                                <template #default="{ sortFilterResult }">
                                    <ul>
                                        <li
                                            v-for="item in sortFilterResult"
                                            :key="item.id"
                                        >
                                            {{ item.name }}
                                            <button
                                                :id="'modify-' + item.id"
                                                type="button"
                                                @click="updateItem(item)"
                                            >
                                                Ändra
                                            </button>
                                            <button
                                                :id="'delete-' + item.id"
                                                type="button"
                                                @click="deleteItem(item)"
                                            >
                                                Ta bort
                                            </button>
                                        </li>
                                    </ul>
                                </template>
                            </f-sort-filter-dataset>
                        </template>
                    </f-crud-dataset>
                `,
            }),
        );
    }

    async function filterAndSort(wrapper: VueWrapper): Promise<void> {
        /* "Namn (fallande)" */
        await wrapper
            .get(".sort-filter-dataset__sort option:nth-child(3)")
            .setValue();
        await wrapper
            .find(".sort-filter-dataset__search input")
            .setValue("ban");
        await flushPromises();
    }

    function searchString(wrapper: VueWrapper): string {
        return wrapper.get<HTMLInputElement>(
            ".sort-filter-dataset__search input",
        ).element.value;
    }

    function names(wrapper: VueWrapper): string[] {
        return wrapper.findAll("li").map((it) => it.text().split(" ", 1)[0]);
    }

    it("should keep search and row order when an item is created", async () => {
        expect.assertions(3);
        const wrapper = createSortFilterWrapper();
        await filterAndSort(wrapper);
        expect(names(wrapper)).toEqual(["bandana", "banana"]);

        await wrapper
            .get("[data-test='f-crud-dataset-add-button']")
            .trigger("click");
        await flushPromises();

        expect(searchString(wrapper)).toBe("ban");
        expect(names(wrapper)).toEqual(["bandana", "banana", "kiwi"]);
    });

    it("should keep search and row order when an item is modified", async () => {
        expect.assertions(2);
        const wrapper = createSortFilterWrapper();
        await filterAndSort(wrapper);

        await wrapper.get("#modify-1").trigger("click");
        await flushPromises();

        expect(searchString(wrapper)).toBe("ban");
        expect(names(wrapper)).toEqual(["bandana", "banana!"]);
    });

    it("should keep search and row order when an item is removed", async () => {
        expect.assertions(2);
        const wrapper = createSortFilterWrapper();
        await filterAndSort(wrapper);

        await wrapper.get("#delete-3").trigger("click");
        await flushPromises();

        expect(searchString(wrapper)).toBe("ban");
        expect(names(wrapper)).toEqual(["banana"]);
    });
});
