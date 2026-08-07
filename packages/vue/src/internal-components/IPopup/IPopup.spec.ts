import "html-validate/vitest";
import "@fkui/test-utils/vitest";
import { defineComponent } from "vue";
import { type VueWrapper, config, mount } from "@vue/test-utils";
import { afterAll, beforeEach, describe, expect, it, vi } from "vitest";
import IPopup from "./IPopup.vue";

config.global.stubs = { teleport: true };

vi.useFakeTimers();

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
