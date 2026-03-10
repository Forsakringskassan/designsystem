import { mount } from "@vue/test-utils";
import ITableAnchor from "./ITableAnchor.vue";
import { type NormalizedTableColumnAnchor } from "./table-column";

interface TestRow {
    id: number;
    text: string;
}

describe("ITableAnchor", () => {
    describe("Rendering", () => {
        it("should render anchor element when enabled and text is provided", () => {
            const column = {
                type: "anchor",
                enabled: () => true,
                text: (row: TestRow) => row.text,
                href: "https://example.com",
            } as unknown as NormalizedTableColumnAnchor<TestRow, "text">;

            const row: TestRow = { id: 1, text: "Test Link" };

            const wrapper = mount(ITableAnchor, {
                props: { column, row },
            });

            const anchor = wrapper.find("a");
            expect(anchor.exists()).toBeTruthy();
            expect(anchor.text()).toBe("Test Link");
            expect(anchor.attributes("href")).toBe("https://example.com");
            expect(anchor.attributes("target")).toBe("_blank");
        });

        it("should render empty td when enabled returns false", () => {
            const column = {
                type: "anchor",
                enabled: () => false,
                text: (row) => row.text,
                href: "https://example.com",
            } as unknown as NormalizedTableColumnAnchor<TestRow, "text">;

            const row: TestRow = { id: 1, text: "Test Link" };

            const wrapper = mount(ITableAnchor, {
                props: { column, row },
            });

            const anchor = wrapper.find("a");
            expect(anchor.exists()).toBeFalsy();
            expect(wrapper.find("td").exists()).toBeTruthy();
            expect(wrapper.find("td").text()).toBe("");
        });

        it("should render empty td when text returns null", () => {
            const column = {
                type: "anchor",
                enabled: () => true,
                text: () => null,
                href: "https://example.com",
            } as unknown as NormalizedTableColumnAnchor<TestRow, "text">;

            const row: TestRow = { id: 1, text: "Test Link" };

            const wrapper = mount(ITableAnchor, {
                props: { column, row },
            });

            const anchor = wrapper.find("a");
            expect(anchor.exists()).toBeFalsy();
            expect(wrapper.find("td").exists()).toBeTruthy();
        });

        it("should apply correct CSS classes to td", () => {
            const column = {
                type: "anchor",
                enabled: () => true,
                text: (row) => row.text,
                href: "https://example.com",
            } as unknown as NormalizedTableColumnAnchor<TestRow, "text">;

            const row: TestRow = { id: 1, text: "Test Link" };

            const wrapper = mount(ITableAnchor, {
                props: { column, row },
            });

            const td = wrapper.find("td");
            expect(td.classes()).toContain("table-ng__cell");
            expect(td.classes()).toContain("table-ng__cell--anchor");
        });

        it("should apply correct CSS classes to anchor", () => {
            const column = {
                type: "anchor",
                enabled: () => true,
                text: (row) => row.text,
                href: "https://example.com",
            } as unknown as NormalizedTableColumnAnchor<TestRow, "text">;

            const row: TestRow = { id: 1, text: "Test Link" };

            const wrapper = mount(ITableAnchor, {
                props: { column, row },
            });

            const anchor = wrapper.find("a");
            expect(anchor.classes()).toContain("anchor");
            expect(anchor.classes()).toContain("anchor--block");
        });
    });

    describe("Click handling", () => {
        it("should click anchor when td is clicked", async () => {
            const column = {
                type: "anchor",
                enabled: () => true,
                text: (row) => row.text,
                href: "https://example.com",
            } as unknown as NormalizedTableColumnAnchor<TestRow, "text">;

            const row: TestRow = { id: 1, text: "Test Link" };

            const wrapper = mount(ITableAnchor, {
                props: { column, row },
            });

            const anchor = wrapper.get("a");
            const clickSpy = jest.fn();
            anchor.element.click = clickSpy;

            const td = wrapper.get("td");
            await td.trigger("click");

            expect(clickSpy).toHaveBeenCalled();
        });

        it("should not propagate click event when clicking inside anchor", async () => {
            const column = {
                type: "anchor",
                enabled: () => true,
                text: (row) => row.text,
                href: "https://example.com",
            } as unknown as NormalizedTableColumnAnchor<TestRow, "text">;

            const row: TestRow = { id: 1, text: "Test Link" };

            const wrapper = mount(ITableAnchor, {
                props: { column, row },
            });

            const anchor = wrapper.get("a");
            const clickSpy = jest.fn();
            anchor.element.click = clickSpy;

            await anchor.trigger("click");

            // The click should not trigger the td's onClickTd handler
            // which would call click() again
            expect(clickSpy).not.toHaveBeenCalled();
        });
    });

    describe("Accessibility", () => {
        it("should set tabindex to -1 on anchor", () => {
            const column = {
                type: "anchor",
                enabled: () => true,
                text: (row) => row.text,
                href: "https://example.com",
            } as unknown as NormalizedTableColumnAnchor<TestRow, "text">;

            const row: TestRow = { id: 1, text: "Test Link" };

            const wrapper = mount(ITableAnchor, {
                props: { column, row },
            });

            const anchor = wrapper.get("a");
            expect(anchor.attributes("tabindex")).toBe("-1");
        });

        it("should set tabindex to -1 on empty td", () => {
            const column = {
                type: "anchor",
                enabled: () => false,
                text: (row) => row.text,
                href: "https://example.com",
            } as unknown as NormalizedTableColumnAnchor<TestRow, "text">;

            const row: TestRow = { id: 1, text: "Test Link" };

            const wrapper = mount(ITableAnchor, {
                props: { column, row },
            });

            const td = wrapper.get("td");
            expect(td.attributes("tabindex")).toBe("-1");
        });
    });

    describe("Component API", () => {
        it("should expose tabstopEl in component API", () => {
            const column = {
                type: "anchor",
                enabled: () => true,
                text: (row) => row.text,
                href: "https://example.com",
            } as unknown as NormalizedTableColumnAnchor<TestRow, "text">;

            const row: TestRow = { id: 1, text: "Test Link" };

            const wrapper = mount(ITableAnchor, {
                props: { column, row },
            });

            const vm = wrapper.vm as unknown as { tabstopEl: unknown };
            expect(vm.tabstopEl).toBeDefined();
        });
    });

    describe("Edge cases", () => {
        it("should handle empty string text", () => {
            const column = {
                type: "anchor",
                enabled: () => true,
                text: () => "",
                href: "https://example.com",
            } as unknown as NormalizedTableColumnAnchor<TestRow, "text">;

            const row: TestRow = { id: 1, text: "" };

            const wrapper = mount(ITableAnchor, {
                props: { column, row },
            });

            const anchor = wrapper.find("a");
            expect(anchor.exists()).toBeTruthy();
            expect(anchor.text()).toBe("");
        });

        it("should handle different href values", () => {
            const column = {
                type: "anchor",
                enabled: () => true,
                text: (row) => row.text,
                href: "/relative/path",
            } as unknown as NormalizedTableColumnAnchor<TestRow, "text">;

            const row: TestRow = { id: 1, text: "Link" };

            const wrapper = mount(ITableAnchor, {
                props: { column, row },
            });

            const anchor = wrapper.get("a");
            expect(anchor.attributes("href")).toBe("/relative/path");
        });

        it("should update when row text changes", async () => {
            const column = {
                type: "anchor",
                enabled: () => true,
                text: (row) => row.text,
                href: "https://example.com",
            } as unknown as NormalizedTableColumnAnchor<TestRow, "text">;

            const row: TestRow = { id: 1, text: "Original Text" };

            const wrapper = mount(ITableAnchor, {
                props: { column, row },
            });

            expect(wrapper.get("a").text()).toBe("Original Text");

            await wrapper.setProps({ row: { id: 1, text: "Updated Text" } });

            expect(wrapper.get("a").text()).toBe("Updated Text");
        });
    });
});