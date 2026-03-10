import { mount } from "@vue/test-utils";
import ITableCheckbox from "./ITableCheckbox.vue";
import { type NormalizedTableColumnCheckbox } from "./table-column";

interface TestRow {
    id: number;
    selected: boolean;
    name: string;
}

describe("ITableCheckbox", () => {
    describe("Rendering", () => {
        it("should render checkbox when editable", () => {
            const column = {
                type: "checkbox",
                editable: () => true,
                checked: (row) => row.selected,
                label: () => "Select row",
                update: jest.fn(),
            } as unknown as NormalizedTableColumnCheckbox<TestRow, "selected">;

            const row: TestRow = { id: 1, selected: false, name: "Test" };

            const wrapper = mount(ITableCheckbox, {
                props: { column, row },
            });

            const checkbox = wrapper.find("input[type='checkbox']");
            expect(checkbox.exists()).toBeTruthy();
            expect(checkbox.attributes("type")).toBe("checkbox");
        });

        it("should render checkbox when not editable", () => {
            const column = {
                type: "checkbox",
                editable: () => false,
                checked: (row) => row.selected,
                label: () => "Select row",
                update: jest.fn(),
            } as unknown as NormalizedTableColumnCheckbox<TestRow, "selected">;

            const row: TestRow = { id: 1, selected: false, name: "Test" };

            const wrapper = mount(ITableCheckbox, {
                props: { column, row },
            });

            const checkbox = wrapper.find("input[type='checkbox']");
            expect(checkbox.exists()).toBeTruthy();
        });

        it("should apply correct CSS classes to td when editable", () => {
            const column = {
                type: "checkbox",
                editable: () => true,
                checked: (row) => row.selected,
                label: () => "Select row",
                update: jest.fn(),
            } as unknown as NormalizedTableColumnCheckbox<TestRow, "selected">;

            const row: TestRow = { id: 1, selected: false, name: "Test" };

            const wrapper = mount(ITableCheckbox, {
                props: { column, row },
            });

            const td = wrapper.find("td");
            expect(td.classes()).toContain("table-ng__cell");
            expect(td.classes()).toContain("table-ng__cell--checkbox");
        });

        it("should apply correct CSS classes to td when not editable", () => {
            const column = {
                type: "checkbox",
                editable: () => false,
                checked: (row) => row.selected,
                label: () => "Select row",
                update: jest.fn(),
            } as unknown as NormalizedTableColumnCheckbox<TestRow, "selected">;

            const row: TestRow = { id: 1, selected: false, name: "Test" };

            const wrapper = mount(ITableCheckbox, {
                props: { column, row },
            });

            const td = wrapper.find("td");
            expect(td.classes()).toContain("table-ng__cell");
            expect(td.classes()).toContain("table-ng__cell--checkbox");
        });
    });

    describe("Checked state", () => {
        it("should be checked when checked returns true", () => {
            const column = {
                type: "checkbox",
                editable: () => true,
                checked: (row) => row.selected,
                label: () => "Select row",
                update: jest.fn(),
            } as unknown as NormalizedTableColumnCheckbox<TestRow, "selected">;

            const row: TestRow = { id: 1, selected: true, name: "Test" };

            const wrapper = mount(ITableCheckbox, {
                props: { column, row },
            });

            const checkbox = wrapper.get("input[type='checkbox']");
            expect(checkbox.element.checked).toBe(true);
        });

        it("should be unchecked when checked returns false", () => {
            const column = {
                type: "checkbox",
                editable: () => true,
                checked: (row) => row.selected,
                label: () => "Select row",
                update: jest.fn(),
            } as unknown as NormalizedTableColumnCheckbox<TestRow, "selected">;

            const row: TestRow = { id: 1, selected: false, name: "Test" };

            const wrapper = mount(ITableCheckbox, {
                props: { column, row },
            });

            const checkbox = wrapper.get("input[type='checkbox']");
            expect(checkbox.element.checked).toBe(false);
        });

        it("should convert truthy values to true", () => {
            const column = {
                type: "checkbox",
                editable: () => true,
                checked: () => "truthy" as unknown as boolean,
                label: () => "Select row",
                update: jest.fn(),
            } as unknown as NormalizedTableColumnCheckbox<TestRow, "selected">;

            const row: TestRow = { id: 1, selected: false, name: "Test" };

            const wrapper = mount(ITableCheckbox, {
                props: { column, row },
            });

            const checkbox = wrapper.get("input[type='checkbox']");
            expect(checkbox.element.checked).toBe(true);
        });

        it("should convert falsy values to false", () => {
            const column = {
                type: "checkbox",
                editable: () => true,
                checked: () => 0 as unknown as boolean,
                label: () => "Select row",
                update: jest.fn(),
            } as unknown as NormalizedTableColumnCheckbox<TestRow, "selected">;

            const row: TestRow = { id: 1, selected: false, name: "Test" };

            const wrapper = mount(ITableCheckbox, {
                props: { column, row },
            });

            const checkbox = wrapper.get("input[type='checkbox']");
            expect(checkbox.element.checked).toBe(false);
        });
    });

    describe("Click handling - editable", () => {
        it("should call update with correct parameters when checkbox is clicked", async () => {
            const updateMock = jest.fn();
            const column = {
                type: "checkbox",
                editable: () => true,
                checked: (row) => row.selected,
                label: () => "Select row",
                update: updateMock,
            } as unknown as NormalizedTableColumnCheckbox<TestRow, "selected">;

            const row: TestRow = { id: 1, selected: false, name: "Test" };

            const wrapper = mount(ITableCheckbox, {
                props: { column, row },
            });

            const checkbox = wrapper.get("input[type='checkbox']");
            await checkbox.trigger("click");

            expect(updateMock).toHaveBeenCalledWith(row, false, true);
        });

        it("should call update when td is clicked", async () => {
            const updateMock = jest.fn();
            const column = {
                type: "checkbox",
                editable: () => true,
                checked: (row) => row.selected,
                label: () => "Select row",
                update: updateMock,
            } as unknown as NormalizedTableColumnCheckbox<TestRow, "selected">;

            const row: TestRow = { id: 1, selected: false, name: "Test" };

            const wrapper = mount(ITableCheckbox, {
                props: { column, row },
            });

            const td = wrapper.get("td");
            await td.trigger("click");

            expect(updateMock).toHaveBeenCalledWith(row, true, false);
        });

        it("should toggle from checked to unchecked", async () => {
            const updateMock = jest.fn();
            const column = {
                type: "checkbox",
                editable: () => true,
                checked: (row) => row.selected,
                label: () => "Select row",
                update: updateMock,
            } as unknown as NormalizedTableColumnCheckbox<TestRow, "selected">;

            const row: TestRow = { id: 1, selected: true, name: "Test" };

            const wrapper = mount(ITableCheckbox, {
                props: { column, row },
            });

            const checkbox = wrapper.get("input[type='checkbox']");
            await checkbox.trigger("click");

            expect(updateMock).toHaveBeenCalledWith(row, true, false);
        });

        it("should stop event propagation when checkbox is clicked", async () => {
            const column = {
                type: "checkbox",
                editable: () => true,
                checked: (row) => row.selected,
                label: () => "Select row",
                update: jest.fn(),
            } as unknown as NormalizedTableColumnCheckbox<TestRow, "selected">;

            const row: TestRow = { id: 1, selected: false, name: "Test" };

            const wrapper = mount(ITableCheckbox, {
                props: { column, row },
            });

            const checkbox = wrapper.get("input[type='checkbox']");
            const event = new Event("click", { bubbles: true });
            const stopPropagationSpy = jest.spyOn(event, "stopPropagation");

            checkbox.element.dispatchEvent(event);

            expect(stopPropagationSpy).toHaveBeenCalled();
        });

        it("should stop event propagation when td is clicked", async () => {
            const column = {
                type: "checkbox",
                editable: () => true,
                checked: (row) => row.selected,
                label: () => "Select row",
                update: jest.fn(),
            } as unknown as NormalizedTableColumnCheckbox<TestRow, "selected">;

            const row: TestRow = { id: 1, selected: false, name: "Test" };

            const wrapper = mount(ITableCheckbox, {
                props: { column, row },
            });

            const td = wrapper.get("td");
            const event = new Event("click", { bubbles: true });
            const stopPropagationSpy = jest.spyOn(event, "stopPropagation");

            td.element.dispatchEvent(event);

            expect(stopPropagationSpy).toHaveBeenCalled();
        });
    });

    describe("Click handling - not editable", () => {
        it("should not respond to td clicks when not editable", async () => {
            const updateMock = jest.fn();
            const column = {
                type: "checkbox",
                editable: () => false,
                checked: (row) => row.selected,
                label: () => "Select row",
                update: updateMock,
            } as unknown as NormalizedTableColumnCheckbox<TestRow, "selected">;

            const row: TestRow = { id: 1, selected: false, name: "Test" };

            const wrapper = mount(ITableCheckbox, {
                props: { column, row },
            });

            const td = wrapper.get("td");
            await td.trigger("click");

            expect(updateMock).not.toHaveBeenCalled();
        });

        it("should not respond to checkbox clicks when not editable", async () => {
            const updateMock = jest.fn();
            const column = {
                type: "checkbox",
                editable: () => false,
                checked: (row) => row.selected,
                label: () => "Select row",
                update: updateMock,
            } as unknown as NormalizedTableColumnCheckbox<TestRow, "selected">;

            const row: TestRow = { id: 1, selected: false, name: "Test" };

            const wrapper = mount(ITableCheckbox, {
                props: { column, row },
            });

            const checkbox = wrapper.get("input[type='checkbox']");
            await checkbox.trigger("click");

            expect(updateMock).not.toHaveBeenCalled();
        });
    });

    describe("Accessibility", () => {
        it("should set aria-label when label returns non-empty string", () => {
            const column = {
                type: "checkbox",
                editable: () => true,
                checked: (row) => row.selected,
                label: () => "Select row for editing",
                update: jest.fn(),
            } as unknown as NormalizedTableColumnCheckbox<TestRow, "selected">;

            const row: TestRow = { id: 1, selected: false, name: "Test" };

            const wrapper = mount(ITableCheckbox, {
                props: { column, row },
            });

            const checkbox = wrapper.get("input[type='checkbox']");
            expect(checkbox.attributes("aria-label")).toBe("Select row for editing");
        });

        it("should not set aria-label when label returns empty string", () => {
            const column = {
                type: "checkbox",
                editable: () => true,
                checked: (row) => row.selected,
                label: () => "",
                update: jest.fn(),
            } as unknown as NormalizedTableColumnCheckbox<TestRow, "selected">;

            const row: TestRow = { id: 1, selected: false, name: "Test" };

            const wrapper = mount(ITableCheckbox, {
                props: { column, row },
            });

            const checkbox = wrapper.get("input[type='checkbox']");
            expect(checkbox.attributes("aria-label")).toBeUndefined();
        });

        it("should set tabindex to -1 when editable", () => {
            const column = {
                type: "checkbox",
                editable: () => true,
                checked: (row) => row.selected,
                label: () => "Select row",
                update: jest.fn(),
            } as unknown as NormalizedTableColumnCheckbox<TestRow, "selected">;

            const row: TestRow = { id: 1, selected: false, name: "Test" };

            const wrapper = mount(ITableCheckbox, {
                props: { column, row },
            });

            const checkbox = wrapper.get("input[type='checkbox']");
            expect(checkbox.attributes("tabindex")).toBe("-1");
        });

        it("should set tabindex to -1 on td when not editable", () => {
            const column = {
                type: "checkbox",
                editable: () => false,
                checked: (row) => row.selected,
                label: () => "Select row",
                update: jest.fn(),
            } as unknown as NormalizedTableColumnCheckbox<TestRow, "selected">;

            const row: TestRow = { id: 1, selected: false, name: "Test" };

            const wrapper = mount(ITableCheckbox, {
                props: { column, row },
            });

            const td = wrapper.get("td");
            expect(td.attributes("tabindex")).toBe("-1");
        });
    });

    describe("Component API", () => {
        it("should expose tabstopEl in component API", () => {
            const column = {
                type: "checkbox",
                editable: () => true,
                checked: (row) => row.selected,
                label: () => "Select row",
                update: jest.fn(),
            } as unknown as NormalizedTableColumnCheckbox<TestRow, "selected">;

            const row: TestRow = { id: 1, selected: false, name: "Test" };

            const wrapper = mount(ITableCheckbox, {
                props: { column, row },
            });

            const vm = wrapper.vm as unknown as { tabstopEl: unknown };
            expect(vm.tabstopEl).toBeDefined();
        });
    });

    describe("Edge cases", () => {
        it("should handle rapid clicks", async () => {
            const updateMock = jest.fn();
            const column = {
                type: "checkbox",
                editable: () => true,
                checked: (row) => row.selected,
                label: () => "Select row",
                update: updateMock,
            } as unknown as NormalizedTableColumnCheckbox<TestRow, "selected">;

            const row: TestRow = { id: 1, selected: false, name: "Test" };

            const wrapper = mount(ITableCheckbox, {
                props: { column, row },
            });

            const checkbox = wrapper.get("input[type='checkbox']");
            await checkbox.trigger("click");
            await checkbox.trigger("click");
            await checkbox.trigger("click");

            expect(updateMock).toHaveBeenCalledTimes(3);
        });

        it("should update when row checked state changes", async () => {
            const column = {
                type: "checkbox",
                editable: () => true,
                checked: (row) => row.selected,
                label: () => "Select row",
                update: jest.fn(),
            } as unknown as NormalizedTableColumnCheckbox<TestRow, "selected">;

            const row: TestRow = { id: 1, selected: false, name: "Test" };

            const wrapper = mount(ITableCheckbox, {
                props: { column, row },
            });

            const checkbox = wrapper.get("input[type='checkbox']");
            expect(checkbox.element.checked).toBe(false);

            await wrapper.setProps({ row: { id: 1, selected: true, name: "Test" } });

            expect(checkbox.element.checked).toBe(true);
        });
    });
});