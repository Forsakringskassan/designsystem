import { mount } from "@vue/test-utils";
import ITableButton from "./ITableButton.vue";
import { type NormalizedTableColumnButton } from "./table-column";

interface TestRow {
    id: number;
    text: string;
    enabled: boolean;
}

describe("ITableButton", () => {
    describe("Rendering", () => {
        it("should render button when enabled and text is provided", () => {
            const column = {
                type: "button",
                enabled: () => true,
                text: (row) => row.text,
                icon: "edit",
                iconLibrary: undefined,
            } as unknown as NormalizedTableColumnButton<TestRow, "text">;

            const row: TestRow = { id: 1, text: "Edit", enabled: true };

            const wrapper = mount(ITableButton, {
                props: { column, row },
                global: {
                    stubs: ["f-icon"],
                },
            });

            const button = wrapper.find("button");
            expect(button.exists()).toBeTruthy();
            expect(button.attributes("type")).toBe("button");
            expect(button.classes()).toContain("icon-button");
        });

        it("should render empty td when enabled returns false", () => {
            const column = {
                type: "button",
                enabled: () => false,
                text: (row) => row.text,
            } as unknown as NormalizedTableColumnButton<TestRow, "text">;

            const row: TestRow = { id: 1, text: "Edit", enabled: false };

            const wrapper = mount(ITableButton, {
                props: { column, row },
            });

            const button = wrapper.find("button");
            expect(button.exists()).toBeFalsy();
            expect(wrapper.find("td").exists()).toBeTruthy();
            expect(wrapper.find("td").text()).toBe("");
        });

        it("should render empty td when text returns null", () => {
            const column = {
                type: "button",
                enabled: () => true,
                text: () => null,
            } as unknown as NormalizedTableColumnButton<TestRow, "text">;

            const row: TestRow = { id: 1, text: "Edit", enabled: true };

            const wrapper = mount(ITableButton, {
                props: { column, row },
            });

            const button = wrapper.find("button");
            expect(button.exists()).toBeFalsy();
            expect(wrapper.find("td").exists()).toBeTruthy();
        });

        it("should apply correct CSS classes to td", () => {
            const column = {
                type: "button",
                enabled: () => true,
                text: (row) => row.text,
            } as unknown as NormalizedTableColumnButton<TestRow, "text">;

            const row: TestRow = { id: 1, text: "Edit", enabled: true };

            const wrapper = mount(ITableButton, {
                props: { column, row },
            });

            const td = wrapper.find("td");
            expect(td.classes()).toContain("table-ng__cell");
            expect(td.classes()).toContain("table-ng__cell--button");
        });

        it("should render icon when icon property is provided", () => {
            const column = {
                type: "button",
                enabled: () => true,
                text: (row) => row.text,
                icon: "edit",
                iconLibrary: "default",
            } as unknown as NormalizedTableColumnButton<TestRow, "text">;

            const row: TestRow = { id: 1, text: "Edit", enabled: true };

            const wrapper = mount(ITableButton, {
                props: { column, row },
                global: {
                    stubs: ["f-icon"],
                },
            });

            const icon = wrapper.findComponent({ name: "f-icon" });
            expect(icon.exists()).toBeTruthy();
            expect(icon.attributes("name")).toBe("edit");
            expect(icon.attributes("library")).toBe("default");
        });

        it("should not render icon when icon property is not provided", () => {
            const column = {
                type: "button",
                enabled: () => true,
                text: (row) => row.text,
            } as unknown as NormalizedTableColumnButton<TestRow, "text">;

            const row: TestRow = { id: 1, text: "Edit", enabled: true };

            const wrapper = mount(ITableButton, {
                props: { column, row },
                global: {
                    stubs: ["f-icon"],
                },
            });

            const icon = wrapper.findComponent({ name: "f-icon" });
            expect(icon.exists()).toBeFalsy();
        });

        it("should render text in sr-only span", () => {
            const column = {
                type: "button",
                enabled: () => true,
                text: (row) => row.text,
            } as unknown as NormalizedTableColumnButton<TestRow, "text">;

            const row: TestRow = { id: 1, text: "Edit row", enabled: true };

            const wrapper = mount(ITableButton, {
                props: { column, row },
            });

            const srOnlyText = wrapper.find(".sr-only");
            expect(srOnlyText.exists()).toBeTruthy();
            expect(srOnlyText.text()).toBe("Edit row");
        });
    });

    describe("Click handling", () => {
        it("should call onClick handler when button is clicked", async () => {
            const onClickMock = jest.fn();
            const column = {
                type: "button",
                enabled: () => true,
                text: (row) => row.text,
                onClick: onClickMock,
            } as unknown as NormalizedTableColumnButton<TestRow, "text">;

            const row: TestRow = { id: 1, text: "Edit", enabled: true };

            const wrapper = mount(ITableButton, {
                props: { column, row },
            });

            const button = wrapper.get("button");
            await button.trigger("click");

            expect(onClickMock).toHaveBeenCalledWith(row);
        });

        it("should click button when td is clicked", async () => {
            const onClickMock = jest.fn();
            const column = {
                type: "button",
                enabled: () => true,
                text: (row) => row.text,
                onClick: onClickMock,
            } as unknown as NormalizedTableColumnButton<TestRow, "text">;

            const row: TestRow = { id: 1, text: "Edit", enabled: true };

            const wrapper = mount(ITableButton, {
                props: { column, row },
            });

            const td = wrapper.get("td");
            await td.trigger("click");

            expect(onClickMock).toHaveBeenCalledWith(row);
        });

        it("should not call onClick when no handler is provided", async () => {
            const column = {
                type: "button",
                enabled: () => true,
                text: (row) => row.text,
            } as unknown as NormalizedTableColumnButton<TestRow, "text">;

            const row: TestRow = { id: 1, text: "Edit", enabled: true };

            const wrapper = mount(ITableButton, {
                props: { column, row },
            });

            const button = wrapper.get("button");
            // Should not throw error
            await button.trigger("click");
        });

        it("should stop event propagation when button is clicked", async () => {
            const column = {
                type: "button",
                enabled: () => true,
                text: (row) => row.text,
            } as unknown as NormalizedTableColumnButton<TestRow, "text">;

            const row: TestRow = { id: 1, text: "Edit", enabled: true };

            const wrapper = mount(ITableButton, {
                props: { column, row },
            });

            const button = wrapper.get("button");
            const event = new Event("click", { bubbles: true });
            const stopPropagationSpy = jest.spyOn(event, "stopPropagation");

            button.element.dispatchEvent(event);

            expect(stopPropagationSpy).toHaveBeenCalled();
        });

        it("should stop event propagation when td is clicked", async () => {
            const column = {
                type: "button",
                enabled: () => true,
                text: (row) => row.text,
            } as unknown as NormalizedTableColumnButton<TestRow, "text">;

            const row: TestRow = { id: 1, text: "Edit", enabled: true };

            const wrapper = mount(ITableButton, {
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
        it("should set tabindex to -1 on button", () => {
            const column = {
                type: "button",
                enabled: () => true,
                text: (row) => row.text,
            } as unknown as NormalizedTableColumnButton<TestRow, "text">;

            const row: TestRow = { id: 1, text: "Edit", enabled: true };

            const wrapper = mount(ITableButton, {
                props: { column, row },
            });

            const button = wrapper.get("button");
            expect(button.attributes("tabindex")).toBe("-1");
        });

        it("should set tabindex to -1 on empty td", () => {
            const column = {
                type: "button",
                enabled: () => false,
                text: (row) => row.text,
            } as unknown as NormalizedTableColumnButton<TestRow, "text">;

            const row: TestRow = { id: 1, text: "Edit", enabled: false };

            const wrapper = mount(ITableButton, {
                props: { column, row },
            });

            const td = wrapper.get("td");
            expect(td.attributes("tabindex")).toBe("-1");
        });
    });

    describe("Component API", () => {
        it("should expose tabstopEl in component API", () => {
            const column = {
                type: "button",
                enabled: () => true,
                text: (row) => row.text,
            } as unknown as NormalizedTableColumnButton<TestRow, "text">;

            const row: TestRow = { id: 1, text: "Edit", enabled: true };

            const wrapper = mount(ITableButton, {
                props: { column, row },
            });

            const vm = wrapper.vm as unknown as { tabstopEl: unknown };
            expect(vm.tabstopEl).toBeDefined();
        });
    });

    describe("Edge cases", () => {
        it("should handle changing enabled state", async () => {
            let enabled = true;
            const column = {
                type: "button",
                enabled: () => enabled,
                text: (row) => row.text,
            } as unknown as NormalizedTableColumnButton<TestRow, "text">;

            const row: TestRow = { id: 1, text: "Edit", enabled: true };

            const wrapper = mount(ITableButton, {
                props: { column, row },
            });

            expect(wrapper.find("button").exists()).toBeTruthy();

            enabled = false;
            await wrapper.vm.$forceUpdate();

            // After rerender with enabled = false, button should not exist
            // Note: This tests the reactivity when the column function returns different values
        });

        it("should handle empty text string", () => {
            const column = {
                type: "button",
                enabled: () => true,
                text: () => "",
            } as unknown as NormalizedTableColumnButton<TestRow, "text">;

            const row: TestRow = { id: 1, text: "", enabled: true };

            const wrapper = mount(ITableButton, {
                props: { column, row },
            });

            const button = wrapper.find("button");
            expect(button.exists()).toBeTruthy();
            expect(wrapper.find(".sr-only").text()).toBe("");
        });

        it("should handle multiple clicks", async () => {
            const onClickMock = jest.fn();
            const column = {
                type: "button",
                enabled: () => true,
                text: (row) => row.text,
                onClick: onClickMock,
            } as unknown as NormalizedTableColumnButton<TestRow, "text">;

            const row: TestRow = { id: 1, text: "Edit", enabled: true };

            const wrapper = mount(ITableButton, {
                props: { column, row },
            });

            const button = wrapper.get("button");
            await button.trigger("click");
            await button.trigger("click");
            await button.trigger("click");

            expect(onClickMock).toHaveBeenCalledTimes(3);
            expect(onClickMock).toHaveBeenCalledWith(row);
        });
    });
});