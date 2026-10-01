import "html-validate/vitest";
import "@fkui/test-utils/vitest";
import { defineComponent, h, nextTick } from "vue";
import { type VueWrapper, config, mount } from "@vue/test-utils";
import { afterAll, beforeEach, describe, expect, it, vi } from "vitest";
import IPopup from "./IPopup.vue";
import { Placement } from "./i-popup-utils";

config.global.stubs = { teleport: true };

vi.useFakeTimers();

type IPopupWrapper = ReturnType<typeof mount<typeof IPopup>>;

afterAll(() => {
    vi.useRealTimers();
});

const TestComponent = defineComponent({
    name: "TestComponent",
    components: {
        IPopup,
    },
    data() {
        return { isOpen: false, gotOpenEvent: false, gotCloseEvent: false };
    },
    template: /* HTML */ `
        <div id="outside">
            <button
                id="launch-popup"
                ref="anchor"
                @click="isOpen=true"
            ></button>
            <i-popup
                :isOpen="isOpen"
                :anchor="$refs.anchor"
                @open="gotOpenEvent = true"
                @close="isOpen = false; gotCloseEvent = true;"
            >
                <span> POPUP CONTENT </span>
            </i-popup>
        </div>
    `,
});

async function openPopup(wrapper: VueWrapper): Promise<void> {
    await wrapper.get("#launch-popup").trigger("click");
    vi.runAllTimers();
}

function getRect(x: number, y: number, width: number, height: number): DOMRect {
    return {
        x,
        y,
        width,
        height,
        top: y,
        right: x + width,
        bottom: y + height,
        left: x,
        toJSON: () => ({}),
    };
}

function mockAnchorOverlapGeometry(): void {
    vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockImplementation(
        function (this: HTMLElement): DOMRect {
            if (this.classList.contains("anchor-overlap-anchor")) {
                return getRect(95, 65, 10, 10);
            }
            if (this.classList.contains("anchor-overlap-container")) {
                return getRect(0, 0, 200, 140);
            }
            if (this.classList.contains("popup__wrapper")) {
                return getRect(0, 0, 180, 120);
            }
            return getRect(0, 0, 0, 0);
        },
    );
}

function mountPopupWithAnchorOverlap(
    anchorOverlap?: "allow" | "never",
    isOpen: boolean = true,
): IPopupWrapper {
    const anchor = document.createElement("button");
    const container = document.createElement("div");
    anchor.classList.add("anchor-overlap-anchor");
    container.classList.add("anchor-overlap-container");

    return mount(IPopup, {
        props: {
            isOpen,
            anchor,
            container,
            viewport: container,
            anchorOverlap,
        },
        slots: {
            default: ({ placement }: { placement: Placement }) =>
                h("span", { "data-placement": placement }),
        },
    });
}

async function waitForPlacementCalculation(): Promise<void> {
    await nextTick();
    await nextTick();
}

beforeEach(() => {
    vi.restoreAllMocks();
});

describe("snapshots", () => {
    it("should match snapshot when open", async () => {
        expect.assertions(1);
        vi.spyOn(window, "scrollTo").mockReturnValue();
        const wrapper = mount(TestComponent);
        await openPopup(wrapper);
        expect(wrapper.element).toMatchSnapshot();
    });

    it("should match snapshot when closed", () => {
        expect.assertions(1);
        const wrapper = mount(TestComponent);
        expect(wrapper.element).toMatchSnapshot();
    });
});

describe("events", () => {
    it('should emit "open" event after popup has opened', async () => {
        expect.assertions(1);
        vi.spyOn(window, "scrollTo").mockReturnValue();

        const wrapper = mount(TestComponent, {
            attachTo: document.body,
        });
        await openPopup(wrapper);

        expect(wrapper.vm.$data.gotOpenEvent).toBeTruthy();
    });

    it('should emit "close" event on escape key pressed', async () => {
        expect.assertions(1);
        vi.spyOn(window, "scrollTo").mockReturnValue();

        const wrapper = mount(TestComponent, {
            attachTo: document.body,
        });
        await openPopup(wrapper);

        const closeElement = wrapper.get(".popup__wrapper");
        await closeElement.trigger("keyup.esc");
        await wrapper.vm.$nextTick();

        expect(wrapper.vm.$data.gotCloseEvent).toBeTruthy();
    });

    it('should emit "close" event when clicked outside an open popup', async () => {
        expect.assertions(1);
        vi.spyOn(window, "scrollTo").mockReturnValue();

        const wrapper = mount(TestComponent, {
            attachTo: document.body,
        });
        await openPopup(wrapper);

        await wrapper.get("#outside").trigger("click");
        await wrapper.vm.$nextTick();

        expect(wrapper.vm.$data.gotCloseEvent).toBeTruthy();
    });

    it('should not emit "close" event when clicked outside a closed popup', async () => {
        expect.assertions(1);
        const wrapper = mount(TestComponent, {
            attachTo: document.body,
        });

        await wrapper.get("#outside").trigger("click");

        expect(wrapper.vm.$data.gotCloseEvent).toBeFalsy();
    });
});

describe("`anchorOverlap` prop", () => {
    it("should preserve the default placement and reject overlap only when set to never", async () => {
        expect.assertions(3);
        vi.spyOn(window, "scrollTo").mockReturnValue();
        mockAnchorOverlapGeometry();

        const defaultPopup = mountPopupWithAnchorOverlap();
        await waitForPlacementCalculation();
        expect(
            defaultPopup.get("[data-placement]").attributes("data-placement"),
        ).toBe(Placement.I);

        const allowPopup = mountPopupWithAnchorOverlap("allow");
        await waitForPlacementCalculation();
        expect(
            allowPopup.get("[data-placement]").attributes("data-placement"),
        ).toBe(Placement.I);

        const neverPopup = mountPopupWithAnchorOverlap("never");
        await waitForPlacementCalculation();
        expect(
            neverPopup.get("[data-placement]").attributes("data-placement"),
        ).toBe(Placement.Fallback);

        await vi.runAllTimersAsync();
        defaultPopup.unmount();
        allowPopup.unmount();
        neverPopup.unmount();
    });

    it("should recalculate both changes while open", async () => {
        expect.assertions(3);
        vi.spyOn(window, "scrollTo").mockReturnValue();
        mockAnchorOverlapGeometry();
        const wrapper = mountPopupWithAnchorOverlap("allow");

        await waitForPlacementCalculation();
        expect(
            wrapper.get("[data-placement]").attributes("data-placement"),
        ).toBe(Placement.I);

        await wrapper.setProps({ anchorOverlap: "never" });
        await waitForPlacementCalculation();
        expect(
            wrapper.get("[data-placement]").attributes("data-placement"),
        ).toBe(Placement.Fallback);
        await vi.runAllTimersAsync();

        await wrapper.setProps({ anchorOverlap: "allow" });
        await waitForPlacementCalculation();
        expect(
            wrapper.get("[data-placement]").attributes("data-placement"),
        ).toBe(Placement.I);

        wrapper.unmount();
    });

    it("should not recalculate when changed while closed", async () => {
        expect.assertions(1);
        const wrapper = mountPopupWithAnchorOverlap("allow", false);
        const recalculatePlacement = vi.spyOn(
            wrapper.vm,
            "recalculatePlacement",
        );

        await wrapper.setProps({ anchorOverlap: "never" });

        expect(recalculatePlacement).not.toHaveBeenCalled();
        wrapper.unmount();
    });

    it("should use the opening calculation when opened with overlap disabled", async () => {
        expect.assertions(2);
        vi.spyOn(window, "scrollTo").mockReturnValue();
        mockAnchorOverlapGeometry();
        const wrapper = mountPopupWithAnchorOverlap("allow", false);
        const recalculatePlacement = vi.spyOn(
            wrapper.vm,
            "recalculatePlacement",
        );

        await wrapper.setProps({ isOpen: true, anchorOverlap: "never" });
        await waitForPlacementCalculation();

        expect(
            wrapper.get("[data-placement]").attributes("data-placement"),
        ).toBe(Placement.Fallback);
        expect(recalculatePlacement).not.toHaveBeenCalled();

        await vi.runAllTimersAsync();
        wrapper.unmount();
    });
});

describe("html-validate", () => {
    it("should require is-open attribute", async () => {
        expect.assertions(1);
        const markup = /* HTML */ ` <i-popup anchor></i-popup> `;
        await expect(markup).toMatchInlineCodeframe(`
          "error: <i-popup> is missing required "is-open" attribute (element-required-attributes)
          > 1 |  <i-popup anchor></i-popup>
              |   ^^^^^^^
          Selector: i-popup"
        `);
    });

    it("should require anchor attribute", async () => {
        expect.assertions(1);
        const markup = /* HTML */ ` <i-popup is-open></i-popup> `;
        await expect(markup).toMatchInlineCodeframe(`
          "error: <i-popup> is missing required "anchor" attribute (element-required-attributes)
          > 1 |  <i-popup is-open></i-popup>
              |   ^^^^^^^
          Selector: i-popup"
        `);
    });

    it("should only allow setting valid `inline` values", async () => {
        expect.assertions(2);
        const markupValid = /* HTML */ `
            <i-popup anchor="anchorref" is-open inline="always"></i-popup>
            <i-popup anchor="anchorref" is-open inline="never"></i-popup>
            <i-popup anchor="anchorref" is-open inline="auto"></i-popup>
        `;
        const markupInvalid = /* HTML */ `
            <i-popup anchor="anchorref" is-open inline="foo"></i-popup>
        `;
        await expect(markupValid).toBeValid();
        await expect(markupInvalid).toMatchInlineCodeframe(`
          "error: Attribute "inline" has invalid value "foo" (attribute-allowed-values)
            1 |
          > 2 |             <i-popup anchor="anchorref" is-open inline="foo"></i-popup>
              |                                                         ^^^
            3 |
          Selector: i-popup"
        `);
    });

    it("should only allow setting valid `anchor-overlap` values", async () => {
        expect.assertions(2);
        const markupValid = /* HTML */ `
            <i-popup
                anchor="anchorref"
                is-open
                anchor-overlap="allow"
            ></i-popup>
            <i-popup
                anchor="anchorref"
                is-open
                anchor-overlap="never"
            ></i-popup>
        `;
        const markupInvalid = /* HTML */ `
            <i-popup anchor="anchorref" is-open anchor-overlap="foo"></i-popup>
        `;
        await expect(markupValid).toBeValid();
        await expect(markupInvalid).toMatchInlineCodeframe(`
          "error: Attribute "anchor-overlap" has invalid value "foo" (attribute-allowed-values)
            1 |
          > 2 |             <i-popup anchor="anchorref" is-open anchor-overlap="foo"></i-popup>
              |                                                                 ^^^
            3 |
          Selector: i-popup"
        `);
    });

    it("should allow setting viewport value", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <i-popup
                anchor="anchorref"
                is-open
                viewport="viewportref"
            ></i-popup>
        `;
        await expect(markup).toBeValid();
    });

    it("should allow setting focus-element value", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <i-popup
                anchor="anchorref"
                is-open
                focus-element="focuselementref"
            ></i-popup>
        `;
        await expect(markup).toBeValid();
    });
});
