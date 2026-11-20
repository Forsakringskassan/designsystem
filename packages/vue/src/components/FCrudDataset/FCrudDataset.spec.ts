import "html-validate/vitest";
import { defineComponent, nextTick } from "vue";
import * as logic from "@fkui/logic";
import { type VueWrapper, mount } from "@vue/test-utils";
import { afterEach, describe, expect, it, vi } from "vitest";
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
    return mount(TestComponent, { global: { stubs: ["FIcon"] } });
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
        "At least one of the following props must be set: onAdd, onEdit or onRemove",
    );
    errorSpy.mockRestore();
});

describe("add button", () => {
    it("should not show add button when onAdd is absent", () => {
        expect.assertions(1);
        const wrapper = createWrapper({ onEdit: vi.fn() });
        expect(wrapper.findAll(".crud-dataset__add-button")).toHaveLength(0);
    });

    it("should show add button when onAdd is present", () => {
        expect.assertions(2);
        const wrapper = createWrapper({ onAdd: vi.fn() });
        const buttons = wrapper.findAll(".crud-dataset__add-button");
        expect(buttons).toHaveLength(1);
        expect(buttons.at(0)?.text()).toBe("Lägg till ny");
    });

    it("should show custom buttons when onAdd is present", () => {
        expect.assertions(4);
        const wrapper = createWrapper(
            { onAdd: vi.fn() },
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
            const wrapper = createWrapper({ onAdd: vi.fn(), buttonPosition });
            const addButton = wrapper.find(".crud-dataset__add-button");
            const table = wrapper.find("table");
            expect(addButton.exists()).toBe(true);
            expect(
                addButton.element.compareDocumentPosition(table.element),
            ).toBe(expected);
        },
    );
});

describe("onAdd", () => {
    it("should call onAdd when add button is pressed", async () => {
        expect.assertions(1);
        const onAdd = vi.fn();
        const wrapper = createWrapper({ onAdd });
        await wrapper.get(".crud-dataset__add-button").trigger("click");
        expect(onAdd).toHaveBeenCalledWith(expect.any(Function));
    });

    it("should not add item until commit is called", async () => {
        expect.assertions(1);
        const wrapper = createWrapper({ onAdd: vi.fn() });
        await wrapper.get(".crud-dataset__add-button").trigger("click");
        expect(getItems(wrapper)).toHaveLength(2);
    });

    it("should add item when commit is called", async () => {
        expect.assertions(3);
        const alertScreenReader = vi.spyOn(logic, "alertScreenReader");
        const onAdd = vi.fn<(commit: (item: Item) => void) => void>();
        const wrapper = createWrapper({ onAdd });
        await wrapper.get(".crud-dataset__add-button").trigger("click");
        const [commit] = onAdd.mock.calls[0];
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
        const onAdd =
            vi.fn<(commit: (item: Item, alert?: string) => void) => void>();
        const wrapper = createWrapper({ onAdd });
        await wrapper.get(".crud-dataset__add-button").trigger("click");
        const [commit] = onAdd.mock.calls[0];
        commit({ id: 3, name: "c" }, "Custom add message");
        await nextTick();
        expect(alertScreenReader).toHaveBeenCalledWith("Custom add message", {
            assertive: true,
        });
    });

    it("should use default alert message when not provided", async () => {
        expect.assertions(1);
        const alertScreenReader = vi.spyOn(logic, "alertScreenReader");
        const onAdd =
            vi.fn<(commit: (item: Item, alert?: string) => void) => void>();
        const wrapper = createWrapper({ onAdd });
        await wrapper.get(".crud-dataset__add-button").trigger("click");
        const [commit] = onAdd.mock.calls[0];
        commit({ id: 3, name: "c" });
        await nextTick();
        expect(alertScreenReader).toHaveBeenCalledWith(
            "En rad har lagts till",
            { assertive: true },
        );
    });
});

describe("onEdit", () => {
    it("should call onEdit with item when modify button is pressed", async () => {
        expect.assertions(1);
        const onEdit = vi.fn();
        const wrapper = createWrapper({ onEdit });
        await wrapper.get("#modify-1").trigger("click");
        expect(onEdit).toHaveBeenCalledWith(
            { id: 1, name: "a" },
            expect.any(Function),
        );
    });

    it("should update original item with committed item", async () => {
        expect.assertions(3);
        const alertScreenReader = vi.spyOn(logic, "alertScreenReader");
        const wrapper = createWrapper({
            onEdit: (item: Item, commit: (item: Item) => void) => {
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

    it("should allow committing without an item when modified in place", async () => {
        expect.assertions(1);
        const wrapper = createWrapper({
            onEdit: (item: Item, commit: () => void) => {
                item.name = "modified";
                commit();
            },
        });
        await wrapper.get("#modify-1").trigger("click");
        expect(getItems(wrapper)[0]).toEqual({ id: 1, name: "modified" });
    });

    it("should not modify item until commit is called", async () => {
        expect.assertions(1);
        const wrapper = createWrapper({ onEdit: vi.fn() });
        await wrapper.get("#modify-1").trigger("click");
        expect(getItems(wrapper)[0]).toEqual({ id: 1, name: "a" });
    });

    it("should use custom alert message when provided", async () => {
        expect.assertions(1);
        const alertScreenReader = vi.spyOn(logic, "alertScreenReader");
        const wrapper = createWrapper({
            onEdit: (
                item: Item,
                commit: (modified?: Item, alert?: string) => void,
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
            onEdit: (
                item: Item,
                commit: (modified?: Item, alert?: string) => void,
            ) => {
                commit({ ...item, name: "modified" });
            },
        });
        await wrapper.get("#modify-1").trigger("click");
        expect(alertScreenReader).toHaveBeenCalledWith("Raden har ändrats", {
            assertive: true,
        });
    });
});

describe("onRemove", () => {
    it("should call onRemove with item when delete button is pressed", async () => {
        expect.assertions(1);
        const onRemove = vi.fn();
        const wrapper = createWrapper({ onRemove });
        await wrapper.get("#delete-1").trigger("click");
        expect(onRemove).toHaveBeenCalledWith(
            { id: 1, name: "a" },
            expect.any(Function),
        );
    });

    it("should remove item when commit is called", async () => {
        expect.assertions(2);
        const alertScreenReader = vi.spyOn(logic, "alertScreenReader");
        const wrapper = createWrapper({
            onRemove: (_item: Item, commit: () => void) => {
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
        const wrapper = createWrapper({ onRemove: vi.fn() });
        await wrapper.get("#delete-1").trigger("click");
        expect(getItems(wrapper)).toHaveLength(2);
    });

    it("should use custom alert message when provided", async () => {
        expect.assertions(1);
        const alertScreenReader = vi.spyOn(logic, "alertScreenReader");
        const wrapper = createWrapper({
            onRemove: (_item: Item, commit: (alert?: string) => void) => {
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
            onRemove: (_item: Item, commit: (alert?: string) => void) => {
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

describe("v-model", () => {
    function getEmitted(wrapper: VueWrapper): Item[][] {
        const crud = wrapper.findComponent(FCrudDataset);
        return (crud.emitted("update:modelValue") ?? []) as Item[][];
    }

    it("should emit update:modelValue when item is added", async () => {
        expect.assertions(4);
        const wrapper = createWrapper({
            onAdd: (commit: (item: Item) => void) => {
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
            onEdit: (item: Item, commit: (item: Item) => void) => {
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

    it("should emit update:modelValue when item is edited in place", async () => {
        expect.assertions(2);
        const wrapper = createWrapper({
            onEdit: (item: Item, commit: () => void) => {
                item.name = "modified";
                commit();
            },
        });
        await wrapper.get("#modify-1").trigger("click");
        const emitted = getEmitted(wrapper);
        expect(emitted).toHaveLength(1);
        expect(emitted[0][0]).toEqual([
            { id: 1, name: "modified" },
            { id: 2, name: "b" },
        ]);
    });

    it("should emit update:modelValue when item is removed", async () => {
        expect.assertions(4);
        const wrapper = createWrapper({
            onRemove: (_item: Item, commit: () => void) => {
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
            onAdd: vi.fn(),
            onEdit: vi.fn(),
            onRemove: vi.fn(),
        });
        await wrapper.get(".crud-dataset__add-button").trigger("click");
        await wrapper.get("#modify-1").trigger("click");
        await wrapper.get("#delete-1").trigger("click");
        expect(getEmitted(wrapper)).toHaveLength(0);
    });
});

describe("html-validate", () => {
    it("should require default slot", async () => {
        expect.assertions(1);
        const markup = /* HTML */ ` <f-crud-dataset></f-crud-dataset> `;
        await expect(markup).toMatchInlineCodeframe(`
          "error: <f-crud-dataset> component requires slot "default" to be implemented (vue/required-slots)
          > 1 |  <f-crud-dataset></f-crud-dataset>
              |   ^^^^^^^^^^^^^^
          Selector: f-crud-dataset"
        `);
    });

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
