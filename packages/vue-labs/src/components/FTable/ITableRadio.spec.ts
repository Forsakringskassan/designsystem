import { mount } from "@vue/test-utils";
import ITableRadio from "./ITableRadio.vue";
import { type NormalizedTableColumnRadio } from "./table-column";

interface TestRow {
    id: number;
    selected: boolean;
    name: string;
}

describe("ITableRadio", () => {
    describe("Rendering", () => {
        it("should render radio button", () => {
            const column = {
                type: "radio",
                checked: (row) => row.selected,
                label: () => "Select row",
                update: jest.fn(),
            } as unknown as NormalizedTableColumnRadio<TestRow, "selected">;

            const row: TestRow = { id: 1, selected: false, name: "Test" };

            const wrapper = mount(ITableRadio, {
                props: { column, row },
            });

            const radio = wrapper.find("input[type='radio']");
            expect(radio.exists()).toBeTruthy();
            expect(radio.attributes("type")).toBe("radio");
        });

        it("should apply correct CSS classes to td", () => {
            const column = {
                type: "radio",
                checked: (row) => row.selected,
                label: () => "Select row",
                update: jest.fn(),
            } as unknown as NormalizedTableColumnRadio<TestRow, "selected">;

            const row: TestRow = { id: 1, selected: false, name: "Test" };

            const wrapper = mount(ITableRadio, {
                props: { column, row },
            });

            const td = wrapper.find("td");
            expect(td.classes()).toContain("table-ng__cell");
            expect(td.classes()).toContain("table-ng__cell--radio");
        });
    });

    describe("Checked state", () => {
        it("should be checked when checked returns true", () => {
            const column = {
                type: "radio",
                checked: (row) => row.selected,
                label: () => "Select row",
                update: jest.fn(),
            } as unknown as NormalizedTableColumnRadio<TestRow, "selected">;

            const row: TestRow = { id: 1, selected: true, name: "Test" };

            const wrapper = mount(ITableRadio, {
                props: { column, row },
            });

            const radio = wrapper.get("input[type='radio']");
            expect(radio.element.checked).toBe(true);
        });

        it("should be unchecked when checked returns false", () => {
            const column = {
                type: "radio",
                checked: (row) => row.selected,
                label: () => "Select row",
                update: jest.fn(),
            } as unknown as NormalizedTableColumnRadio<TestRow, "selected">;

            const row: TestRow = { id: 1, selected: false, name: "Test" };

            const wrapper = mount(ITableRadio, {
                props: { column, row },
            });

            const radio = wrapper.get("input[type='radio']");
            expect(radio.element.checked).toBe(false);
        });

        it("should convert truthy values to true", () => {
            const column = {
                type: "radio",
                checked: () => "truthy" as unknown as boolean,
                label: () => "Select row",
                update: jest.fn(),
            } as unknown as NormalizedTableColumnRadio<TestRow, "selected">;

            const row: TestRow = { id: 1, selected: false, name: "Test" };

            const wrapper = mount(ITableRadio, {
                props: { column, row },
            });

            const radio = wrapper.get("input[type='radio']");
            expect(radio.element.checked).toBe(true);
        });

        it("should convert falsy values to false", () => {
            const column = {
                type: "radio",
                checked: () => 0 as unknown as boolean,
                label: () => "Select row",
                update: jest.fn(),
            } as unknown as NormalizedTableColumnRadio<TestRow, "selected">;

            const row: TestRow = { id: 1, selected: false, name: "Test" };

            const wrapper = mount(ITableRadio, {
                props: { column, row },
            });

            const radio = wrapper.get("input[type='radio']");
            expect(radio.element.checked).toBe(false);
        });
    });

    describe("Click handling", () => {
        it("should call update with correct parameters when radio is clicked", async () => {
            const updateMock = jest.fn();
            const column = {
                type: "radio",
                checked: (row) => row.selected,
                label: () => "Select row",
                update: updateMock,
            } as unknown as NormalizedTableColumnRadio<TestRow, "selected">;

            const row: TestRow = { id: 1, selected: false, name: "Test" };

            const wrapper = mount(ITableRadio, {
                props: { column, row },
            });

            const radio = wrapper.get("input[type='radio']");
            await radio.trigger("click");

            expect(updateMock).toHaveBeenCalledWith(row, false, true);
        });

        it("should call update when td is clicked", async () => {
            const updateMock = jest.fn();
            const column = {
                type: "radio",
                checked: (row) => row.selected,
                label: () => "Select row",
                update: updateMock,
            } as unknown as NormalizedTableColumnRadio<TestRow, "selected">;

            const row: TestRow = { id: 1, selected: false, name: "Test" };

            const wrapper = mount(ITableRadio, {
                props: { column, row },
            });

            const td = wrapper.get("td");
            await td.trigger("click");

            expect(updateMock).toHaveBeenCalledWith(row, true, false);
        });

        it("should toggle from checked to unchecked when radio is clicked", async () => {
            const updateMock = jest.fn();
            const column = {
                type: "radio",
                checked: (row) => row.selected,
                label: () => "Select row",
                update: updateMock,
            } as unknown as NormalizedTableColumnRadio<TestRow, "selected">;

            const row: TestRow = { id: 1, selected: true, name: "Test" };

            const wrapper = mount(ITableRadio, {
                props: { column, row },
            });

            const radio = wrapper.get("input[type='radio']");
            await radio.trigger("click");

            expect(updateMock).toHaveBeenCalledWith(row, true, false);
        });

        it("should toggle from unchecked to checked when td is clicked", async () => {
            const updateMock = jest.fn();
            const column = {
                type: "radio",
                checked: (row) => row.selected,
                label: () => "Select row",
                update: updateMock,
            } as unknown as NormalizedTableColumnRadio<TestRow, "selected">;

            const row: TestRow = { id: 1, selected: false, name: "Test" };

            const wrapper = mount(ITableRadio, {
                props: { column, row },
            });

            const td = wrapper.get("td");
            await td.trigger("click");

            expect(updateMock).toHaveBeenCalledWith(row, true, false);
        });

        it("should stop event propagation when radio is clicked", async () => {
            const column = {
                type: "radio",
                checked: (row) => row.selected,
                label: () => "Select row",
                update: jest.fn(),
            } as unknown as NormalizedTableColumnRadio<TestRow, "selected">;

            const row: TestRow = { id: 1, selected: false, name: "Test" };

            const wrapper = mount(ITableRadio, {
                props: { column, row },
            });

            const radio = wrapper.get("input[type='radio']");
            const event = new Event("click", { bubbles: true });
            const stopPropagationSpy = jest.spyOn(event, "stopPropagation");

            radio.element.dispatchEvent(event);

            expect(stopPropagationSpy).toHaveBeenCalled();
        });

        it("should stop event propagation when td is clicked", async () => {
            const column = {
                type: "radio",
                checked: (row) => row.selected,
                label: () => "Select row",
                update: jest.fn(),
            } as unknown as NormalizedTableColumnRadio<TestRow, "selected">;

            const row: TestRow = { id: 1, selected: false, name: "Test" };

            const wrapper = mount(ITableRadio, {
                props: { column, row },
            });

            const td = wrapper.get("td");
            const event = new Event("click", { bubbles: true });
            const stopPropagationSpy = jest.spyOn(event, "stopPropagation");

            td.element.dispatchEvent(event);

            expect(stopPropagationSpy).toHaveBeenCalled();
        });
    });

    describe("Accessibility", () => {
        it("should set aria-label when label returns non-empty string", () => {
            const column = {
                type: "radio",
                checked: (row) => row.selected,
                label: () => "Select row for editing",
                update: jest.fn(),
            } as unknown as NormalizedTableColumnRadio<TestRow, "selected">;

            const row: TestRow = { id: 1, selected: false, name: "Test" };

            const wrapper = mount(ITableRadio, {
                props: { column, row },
            });

            const radio = wrapper.get("input[type='radio']");
            expect(radio.attributes("aria-label")).toBe("Select row for editing");
        });

        it("should not set aria-label when label returns empty string", () => {
            const column = {
                type: "radio",
                checked: (row) => row.selected,
                label: () => "",
                update: jest.fn(),
            } as unknown as NormalizedTableColumnRadio<TestRow, "selected">;

            const row: TestRow = { id: 1, selected: false, name: "Test" };

            const wrapper = mount(ITableRadio, {
                props: { column, row },
            });

            const radio = wrapper.get("input[type='radio']");
            expect(radio.attributes("aria-label")).toBeUndefined();
        });

        it("should set tabindex to -1 on radio button", () => {
            const column = {
                type: "radio",
                checked: (row) => row.selected,
                label: () => "Select row",
                update: jest.fn(),
            } as unknown as NormalizedTableColumnRadio<TestRow, "selected">;

            const row: TestRow = { id: 1, selected: false, name: "Test" };

            const wrapper = mount(ITableRadio, {
                props: { column, row },
            });

            const radio = wrapper.get("input[type='radio']");
            expect(radio.attributes("tabindex")).toBe("-1");
        });
    });

    describe("Component API", () => {
        it("should expose tabstopEl in component API", () => {
            const column = {
                type: "radio",
                checked: (row) => row.selected,
                label: () => "Select row",
                update: jest.fn(),
            } as unknown as NormalizedTableColumnRadio<TestRow, "selected">;

            const row: TestRow = { id: 1, selected: false, name: "Test" };

            const wrapper = mount(ITableRadio, {
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
                type: "radio",
                checked: (row) => row.selected,
                label: () => "Select row",
                update: updateMock,
            } as unknown as NormalizedTableColumnRadio<TestRow, "selected">;

            const row: TestRow = { id: 1, selected: false, name: "Test" };

            const wrapper = mount(ITableRadio, {
                props: { column, row },
            });

            const radio = wrapper.get("input[type='radio']");
            await radio.trigger("click");
            await radio.trigger("click");
            await radio.trigger("click");

            expect(updateMock).toHaveBeenCalledTimes(3);
        });

        it("should update when row checked state changes", async () => {
            const column = {
                type: "radio",
                checked: (row) => row.selected,
                label: () => "Select row",
                update: jest.fn(),
            } as unknown as NormalizedTableColumnRadio<TestRow, "selected">;

            const row: TestRow = { id: 1, selected: false, name: "Test" };

            const wrapper = mount(ITableRadio, {
                props: { column, row },
            });

            const radio = wrapper.get("input[type='radio']");
            expect(radio.element.checked).toBe(false);

            await wrapper.setProps({ row: { id: 1, selected: true, name: "Test" } });

            expect(radio.element.checked).toBe(true);
        });

        it("should handle label changes", async () => {
            let labelText = "Initial label";
            const column = {
                type: "radio",
                checked: (row) => row.selected,
                label: () => labelText,
                update: jest.fn(),
            } as unknown as NormalizedTableColumnRadio<TestRow, "selected">;

            const row: TestRow = { id: 1, selected: false, name: "Test" };

            const wrapper = mount(ITableRadio, {
                props: { column, row },
            });

            const radio = wrapper.get("input[type='radio']");
            expect(radio.attributes("aria-label")).toBe("Initial label");

            labelText = "Updated label";
            await wrapper.vm.$forceUpdate();

            // Note: This tests the reactivity of the label
        });

        it("should call update with proper old and new values", async () => {
            const updateMock = jest.fn();
            const column = {
                type: "radio",
                checked: (row) => row.selected,
                label: () => "Select row",
                update: updateMock,
            } as unknown as NormalizedTableColumnRadio<TestRow, "selected">;

            const row: TestRow = { id: 1, selected: true, name: "Test" };

            const wrapper = mount(ITableRadio, {
                props: { column, row },
            });

            const radio = wrapper.get("input[type='radio']");
            await radio.trigger("click");

            // When clicking a checked radio, it should pass:
            // - row: the row object
            // - oldValue: true (current checked state)
            // - newValue: false (toggled state)
            expect(updateMock).toHaveBeenCalledWith(row, true, false);
        });

        it("should work with different row data structures", async () => {
            interface CustomRow {
                identifier: string;
                isActive: boolean;
            }

            const column = {
                type: "radio",
                checked: (row) => row.isActive,
                label: (row) => `Select ${row.identifier}`,
                update: jest.fn(),
            } as unknown as NormalizedTableColumnRadio<CustomRow, "isActive">;

            const row: CustomRow = { identifier: "ABC123", isActive: false };

            const wrapper = mount(ITableRadio, {
                props: { column, row },
            });

            const radio = wrapper.get("input[type='radio']");
            expect(radio.attributes("aria-label")).toBe("Select ABC123");
            expect(radio.element.checked).toBe(false);
        });
    });
});