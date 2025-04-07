import { defineCustomElement, ref } from "vue";
import { mount } from "@vue/test-utils";
import { createPlaceholderInDocument } from "@fkui/test-utils/vue";
import {
    LayoutAreaAttachPanel,
    LayoutAreaDirection,
    type UseAreaData,
} from "../FPageLayout";
import FResizePane from "./FResizePane.ce.vue";

type Mutable<T> = { -readonly [K in keyof T]: Mutable<T[K]> };

const mockAreaData: Mutable<UseAreaData> = {
    area: ref("mock-area"),
    attachPanel: ref("none"),
    direction: ref("column"),
};

jest.mock("../FPageLayout/use-area-data", () => ({
    useAreaData() {
        return mockAreaData;
    },
}));

const tagName = "ce-resize-pane";
customElements.define(tagName, defineCustomElement(FResizePane));

function setAreaData(options: {
    area?: string;
    attachPanel?: LayoutAreaAttachPanel;
    direction?: LayoutAreaDirection;
}): void {
    if (options.area) {
        mockAreaData.area.value = options.area;
    }
    if (options.attachPanel) {
        mockAreaData.attachPanel.value = options.attachPanel;
    }
    if (options.direction) {
        mockAreaData.direction.value = options.direction;
    }
}

beforeEach(() => {
    setAreaData({
        area: "mock-area",
        attachPanel: "none",
        direction: "column",
    });
});

describe("should set attachment class", () => {
    const attachPanel: LayoutAreaAttachPanel[] = [
        "left",
        "right",
        "top",
        "bottom",
        "none",
    ];

    it.each(attachPanel)("%s", async (attachPanel) => {
        setAreaData({ attachPanel });
        const template = /* HTML */ ` <ce-resize-pane> </ce-resize-pane> `;
        const attachTo = createPlaceholderInDocument();
        const wrapper = mount({ template }, { attachTo });
        await wrapper.vm.$nextTick();
        const shadowRoot = wrapper.get("ce-resize-pane").element.shadowRoot!;
        const element = shadowRoot.querySelector(".resize");
        expect(element?.classList).toContain(`resize--${attachPanel}`);
    });
});

describe("should set direction class", () => {
    const direction: LayoutAreaDirection[] = ["column", "row"];

    it.each(direction)("%s", async (direction) => {
        setAreaData({ direction });
        const template = /* HTML */ ` <ce-resize-pane> </ce-resize-pane> `;
        const attachTo = createPlaceholderInDocument();
        const wrapper = mount({ template }, { attachTo });
        await wrapper.vm.$nextTick();
        const shadowRoot = wrapper.get("ce-resize-pane").element.shadowRoot!;
        const element = shadowRoot.querySelector(".resize");
        expect(element?.classList).toContain(`resize--${direction}`);
    });
});

describe("should set aria-orientation to", () => {
    const oracle: Array<{
        attachPanel: LayoutAreaAttachPanel;
        orientation: "vertical" | "horizontal";
    }> = [
        { attachPanel: "left", orientation: "vertical" },
        { attachPanel: "right", orientation: "vertical" },
        { attachPanel: "top", orientation: "horizontal" },
        { attachPanel: "bottom", orientation: "horizontal" },
        { attachPanel: "none", orientation: "vertical" },
    ];

    it.each(oracle)(
        '"$orientation" when attaching to "$attachPanel"',
        async (entry) => {
            setAreaData({ attachPanel: entry.attachPanel });
            const template = /* HTML */ ` <ce-resize-pane> </ce-resize-pane> `;
            const attachTo = createPlaceholderInDocument();
            const wrapper = mount({ template }, { attachTo });
            await wrapper.vm.$nextTick();
            const shadowRoot =
                wrapper.get("ce-resize-pane").element.shadowRoot!;
            const separator = shadowRoot.querySelector("[role=separator]");
            expect(separator?.getAttribute("aria-orientation")).toBe(
                entry.orientation,
            );
        },
    );
});

it("should have tabindex when not disabled", async () => {
    const template = /* HTML */ ` <ce-resize-pane> </ce-resize-pane> `;
    const attachTo = createPlaceholderInDocument();
    const wrapper = mount({ template }, { attachTo });
    await wrapper.vm.$nextTick();
    const shadowRoot = wrapper.get("ce-resize-pane").element.shadowRoot!;
    const separator = shadowRoot.querySelector<HTMLElement>("[role=separator]");
    expect(separator?.tabIndex).toBe(0);
});

it("should not have tabindex when disabled", async () => {
    const template = /* HTML */ ` <ce-resize-pane disabled> </ce-resize-pane> `;
    const attachTo = createPlaceholderInDocument();
    const wrapper = mount({ template }, { attachTo });
    await wrapper.vm.$nextTick();
    const shadowRoot = wrapper.get("ce-resize-pane").element.shadowRoot!;
    const separator = shadowRoot.querySelector<HTMLElement>("[role=separator]");
    expect(separator?.tabIndex).toBe(-1);
});
