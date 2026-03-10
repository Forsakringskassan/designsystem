import { mount } from "@vue/test-utils";
import ITableExpandButton from "./ITableExpandButton.vue";

describe("ITableExpandButton", () => {
    describe("Rendering", () => {
        it("should render button when row is expandable", () => {
            const wrapper = mount(ITableExpandButton, {
                props: {
                    isExpandable: true,
                    isExpanded: false,
                    rowKey: "row-1",
                },
                global: {
                    stubs: ["f-icon"],
                },
            });

            const button = wrapper.find("button");
            expect(button.exists()).toBeTruthy();
            expect(button.attributes("type")).toBe("button");
        });

        it("should render empty td when row is not expandable", () => {
            const wrapper = mount(ITableExpandButton, {
                props: {
                    isExpandable: false,
                    isExpanded: false,
                    rowKey: "row-1",
                },
            });

            const button = wrapper.find("button");
            expect(button.exists()).toBeFalsy();
            expect(wrapper.find("td").exists()).toBeTruthy();
            expect(wrapper.find("td").text()).toBe("");
        });

        it("should apply correct CSS classes to td", () => {
            const wrapper = mount(ITableExpandButton, {
                props: {
                    isExpandable: true,
                    isExpanded: false,
                    rowKey: "row-1",
                },
                global: {
                    stubs: ["f-icon"],
                },
            });

            const td = wrapper.find("td");
            expect(td.classes()).toContain("table-ng__cell");
            expect(td.classes()).toContain("table-ng__cell--expand");
        });

        it("should render arrow-right icon when collapsed", () => {
            const wrapper = mount(ITableExpandButton, {
                props: {
                    isExpandable: true,
                    isExpanded: false,
                    rowKey: "row-1",
                },
                global: {
                    stubs: ["f-icon"],
                },
            });

            const icon = wrapper.findComponent({ name: "f-icon" });
            expect(icon.exists()).toBeTruthy();
            expect(icon.attributes("name")).toBe("arrow-right");
        });

        it("should render arrow-down icon when expanded", () => {
            const wrapper = mount(ITableExpandButton, {
                props: {
                    isExpandable: true,
                    isExpanded: true,
                    rowKey: "row-1",
                },
                global: {
                    stubs: ["f-icon"],
                },
            });

            const icon = wrapper.findComponent({ name: "f-icon" });
            expect(icon.exists()).toBeTruthy();
            expect(icon.attributes("name")).toBe("arrow-down");
        });

        it("should apply button__icon class to icon", () => {
            const wrapper = mount(ITableExpandButton, {
                props: {
                    isExpandable: true,
                    isExpanded: false,
                    rowKey: "row-1",
                },
                global: {
                    stubs: ["f-icon"],
                },
            });

            const icon = wrapper.findComponent({ name: "f-icon" });
            expect(icon.classes()).toContain("button__icon");
        });
    });

    describe("Expand/collapse functionality", () => {
        it("should emit toggle event with rowKey when button is clicked", async () => {
            const wrapper = mount(ITableExpandButton, {
                props: {
                    isExpandable: true,
                    isExpanded: false,
                    rowKey: "row-123",
                },
                global: {
                    stubs: ["f-icon"],
                },
            });

            const button = wrapper.get("button");
            await button.trigger("click");

            expect(wrapper.emitted("toggle")).toBeTruthy();
            expect(wrapper.emitted("toggle")?.[0]).toEqual(["row-123"]);
        });

        it("should emit toggle event when td is clicked", async () => {
            const wrapper = mount(ITableExpandButton, {
                props: {
                    isExpandable: true,
                    isExpanded: false,
                    rowKey: "row-456",
                },
                global: {
                    stubs: ["f-icon"],
                },
            });

            const td = wrapper.get("td");
            await td.trigger("click");

            expect(wrapper.emitted("toggle")).toBeTruthy();
            expect(wrapper.emitted("toggle")?.[0]).toEqual(["row-456"]);
        });

        it("should emit toggle event multiple times on repeated clicks", async () => {
            const wrapper = mount(ITableExpandButton, {
                props: {
                    isExpandable: true,
                    isExpanded: false,
                    rowKey: "row-789",
                },
                global: {
                    stubs: ["f-icon"],
                },
            });

            const button = wrapper.get("button");
            await button.trigger("click");
            await button.trigger("click");
            await button.trigger("click");

            expect(wrapper.emitted("toggle")).toHaveLength(3);
            expect(wrapper.emitted("toggle")?.[0]).toEqual(["row-789"]);
            expect(wrapper.emitted("toggle")?.[1]).toEqual(["row-789"]);
            expect(wrapper.emitted("toggle")?.[2]).toEqual(["row-789"]);
        });

        it("should stop event propagation when button is clicked", async () => {
            const wrapper = mount(ITableExpandButton, {
                props: {
                    isExpandable: true,
                    isExpanded: false,
                    rowKey: "row-1",
                },
                global: {
                    stubs: ["f-icon"],
                },
            });

            const button = wrapper.get("button");
            const event = new Event("click", { bubbles: true });
            const stopPropagationSpy = jest.spyOn(event, "stopPropagation");

            button.element.dispatchEvent(event);

            expect(stopPropagationSpy).toHaveBeenCalled();
        });

        it("should stop event propagation when td is clicked", async () => {
            const wrapper = mount(ITableExpandButton, {
                props: {
                    isExpandable: true,
                    isExpanded: false,
                    rowKey: "row-1",
                },
                global: {
                    stubs: ["f-icon"],
                },
            });

            const td = wrapper.get("td");
            const event = new Event("click", { bubbles: true });
            const stopPropagationSpy = jest.spyOn(event, "stopPropagation");

            td.element.dispatchEvent(event);

            expect(stopPropagationSpy).toHaveBeenCalled();
        });
    });

    describe("Accessibility", () => {
        it("should have aria-label for expand when collapsed", () => {
            const wrapper = mount(ITableExpandButton, {
                props: {
                    isExpandable: true,
                    isExpanded: false,
                    rowKey: "row-1",
                },
                global: {
                    stubs: ["f-icon"],
                },
            });

            const button = wrapper.get("button");
            expect(button.attributes("aria-label")).toBe("Expandera rad");
        });

        it("should have aria-label for collapse when expanded", () => {
            const wrapper = mount(ITableExpandButton, {
                props: {
                    isExpandable: true,
                    isExpanded: true,
                    rowKey: "row-1",
                },
                global: {
                    stubs: ["f-icon"],
                },
            });

            const button = wrapper.get("button");
            expect(button.attributes("aria-label")).toBe("Stäng rad");
        });

        it("should set aria-expanded to false when collapsed", () => {
            const wrapper = mount(ITableExpandButton, {
                props: {
                    isExpandable: true,
                    isExpanded: false,
                    rowKey: "row-1",
                },
                global: {
                    stubs: ["f-icon"],
                },
            });

            const button = wrapper.get("button");
            expect(button.attributes("aria-expanded")).toBe("false");
        });

        it("should set aria-expanded to true when expanded", () => {
            const wrapper = mount(ITableExpandButton, {
                props: {
                    isExpandable: true,
                    isExpanded: true,
                    rowKey: "row-1",
                },
                global: {
                    stubs: ["f-icon"],
                },
            });

            const button = wrapper.get("button");
            expect(button.attributes("aria-expanded")).toBe("true");
        });

        it("should set tabindex to -1 on button", () => {
            const wrapper = mount(ITableExpandButton, {
                props: {
                    isExpandable: true,
                    isExpanded: false,
                    rowKey: "row-1",
                },
                global: {
                    stubs: ["f-icon"],
                },
            });

            const button = wrapper.get("button");
            expect(button.attributes("tabindex")).toBe("-1");
        });

        it("should set tabindex to -1 on empty td when not expandable", () => {
            const wrapper = mount(ITableExpandButton, {
                props: {
                    isExpandable: false,
                    isExpanded: false,
                    rowKey: "row-1",
                },
            });

            const td = wrapper.get("td");
            expect(td.attributes("tabindex")).toBe("-1");
        });

        it("should update aria-label when isExpanded changes", async () => {
            const wrapper = mount(ITableExpandButton, {
                props: {
                    isExpandable: true,
                    isExpanded: false,
                    rowKey: "row-1",
                },
                global: {
                    stubs: ["f-icon"],
                },
            });

            const button = wrapper.get("button");
            expect(button.attributes("aria-label")).toBe("Expandera rad");

            await wrapper.setProps({ isExpanded: true });

            expect(button.attributes("aria-label")).toBe("Stäng rad");
        });

        it("should update aria-expanded when isExpanded changes", async () => {
            const wrapper = mount(ITableExpandButton, {
                props: {
                    isExpandable: true,
                    isExpanded: false,
                    rowKey: "row-1",
                },
                global: {
                    stubs: ["f-icon"],
                },
            });

            const button = wrapper.get("button");
            expect(button.attributes("aria-expanded")).toBe("false");

            await wrapper.setProps({ isExpanded: true });

            expect(button.attributes("aria-expanded")).toBe("true");
        });
    });

    describe("Component API", () => {
        it("should expose tabstopEl in component API", () => {
            const wrapper = mount(ITableExpandButton, {
                props: {
                    isExpandable: true,
                    isExpanded: false,
                    rowKey: "row-1",
                },
                global: {
                    stubs: ["f-icon"],
                },
            });

            const vm = wrapper.vm as unknown as { tabstopEl: unknown };
            expect(vm.tabstopEl).toBeDefined();
        });
    });

    describe("Edge cases", () => {
        it("should handle different rowKey types", async () => {
            const wrapper = mount(ITableExpandButton, {
                props: {
                    isExpandable: true,
                    isExpanded: false,
                    rowKey: 123 as unknown as string,
                },
                global: {
                    stubs: ["f-icon"],
                },
            });

            const button = wrapper.get("button");
            await button.trigger("click");

            expect(wrapper.emitted("toggle")).toBeTruthy();
            expect(wrapper.emitted("toggle")?.[0]).toEqual([123]);
        });

        it("should update icon when isExpanded changes", async () => {
            const wrapper = mount(ITableExpandButton, {
                props: {
                    isExpandable: true,
                    isExpanded: false,
                    rowKey: "row-1",
                },
                global: {
                    stubs: ["f-icon"],
                },
            });

            let icon = wrapper.findComponent({ name: "f-icon" });
            expect(icon.attributes("name")).toBe("arrow-right");

            await wrapper.setProps({ isExpanded: true });

            icon = wrapper.findComponent({ name: "f-icon" });
            expect(icon.attributes("name")).toBe("arrow-down");
        });

        it("should not render button when isExpandable becomes false", async () => {
            const wrapper = mount(ITableExpandButton, {
                props: {
                    isExpandable: true,
                    isExpanded: false,
                    rowKey: "row-1",
                },
                global: {
                    stubs: ["f-icon"],
                },
            });

            expect(wrapper.find("button").exists()).toBeTruthy();

            await wrapper.setProps({ isExpandable: false });

            expect(wrapper.find("button").exists()).toBeFalsy();
            expect(wrapper.find("td").exists()).toBeTruthy();
        });

        it("should render button when isExpandable becomes true", async () => {
            const wrapper = mount(ITableExpandButton, {
                props: {
                    isExpandable: false,
                    isExpanded: false,
                    rowKey: "row-1",
                },
                global: {
                    stubs: ["f-icon"],
                },
            });

            expect(wrapper.find("button").exists()).toBeFalsy();

            await wrapper.setProps({ isExpandable: true });

            expect(wrapper.find("button").exists()).toBeTruthy();
        });
    });
});