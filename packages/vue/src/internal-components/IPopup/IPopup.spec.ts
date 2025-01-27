import "html-validate/jest";
import "@fkui/test-utils/jest";
import { VueWrapper, mount } from "@vue/test-utils";
import { defineComponent } from "vue";
import flushPromises from "flush-promises";
import { createPlaceholderInDocument } from "@fkui/test-utils/vue";
import IPopup from "./IPopup.vue";

jest.useFakeTimers();

function createWrapper(
    template: string,
): VueWrapper<InstanceType<typeof TestComponent>> {
    const TestComponent = defineComponent({
        name: "TestComponent",
        components: {
            IPopup,
        },
        data() {
            return { isOpen: false, gotOpenEvent: false, gotCloseEvent: false };
        },
        template,
    });

    return mount(TestComponent, {
        attachTo: createPlaceholderInDocument(),
        global: {
            stubs: ["teleport"],
        },
    });
}

async function mountPopup(
    template: string = defaultTemplate,
): Promise<ReturnType<typeof createWrapper>> {
    const wrapper = createWrapper(template);
    await flushPromises();
    return wrapper;
}

async function openPopup(wrapper: VueWrapper): Promise<void> {
    await wrapper.get("#launch-popup").trigger("click");
    await jest.runAllTimers();
    await flushPromises();
}

const defaultTemplate = /* HTML */ `
    <div id="outside">
        <button id="launch-popup" ref="anchor" @click="isOpen=true"></button>
        <i-popup
            :isOpen="isOpen"
            :anchor="$refs.anchor"
            @open="gotOpenEvent = true"
            @close="isOpen = false; gotCloseEvent = true;"
        >
            <span> POPUP CONTENT </span>
        </i-popup>
    </div>
`;

beforeEach(() => {
    jest.restoreAllMocks();
});

describe("snapshots", () => {
    it("should match snapshot when open", async () => {
        jest.spyOn(window, "scrollTo").mockReturnValue();
        const wrapper = await mountPopup();
        await openPopup(wrapper);
        expect(wrapper.element).toMatchSnapshot();
    });

    it("should match snapshot when closed", async () => {
        const wrapper = await mountPopup();
        expect(wrapper.element).toMatchSnapshot();
    });
});

describe("events", () => {
    it('should emit "open" event after popup has opened', async () => {
        jest.spyOn(window, "scrollTo").mockReturnValue();

        const wrapper = await mountPopup();
        await openPopup(wrapper);

        expect(wrapper.vm.$data["gotOpenEvent"]).toBeTruthy();
    });

    it('should emit "close" event on escape key pressed', async () => {
        jest.spyOn(window, "scrollTo").mockReturnValue();

        const wrapper = await mountPopup();
        await openPopup(wrapper);

        const closeElement = wrapper.get(".popup__wrapper");
        await closeElement.trigger("keyup.esc");
        await wrapper.vm.$nextTick();
        await flushPromises();

        expect(wrapper.vm.$data["gotCloseEvent"]).toBeTruthy();
    });

    it('should emit "close" event when clicked outside an open popup', async () => {
        jest.spyOn(window, "scrollTo").mockReturnValue();

        const wrapper = await mountPopup();
        await openPopup(wrapper);

        await wrapper.get("#outside").trigger("click");
        await wrapper.vm.$nextTick();
        await flushPromises();

        expect(wrapper.vm.$data["gotCloseEvent"]).toBeTruthy();
    });

    it('should not emit "close" event when clicked outside a closed popup', async () => {
        const wrapper = await mountPopup();

        await wrapper.get("#outside").trigger("click");

        expect(wrapper.vm.$data["gotCloseEvent"]).toBeFalsy();
    });
});

describe("html-validate", () => {
    it("should require is-open attribute", () => {
        expect("<i-popup></i-popup>").not.toHTMLValidate({
            ruleId: "element-required-attributes",
            message: '<i-popup> is missing required "is-open" attribute',
        });
    });

    it("should require anchor attribute", () => {
        expect("<i-popup></i-popup>").not.toHTMLValidate({
            ruleId: "element-required-attributes",
            message: '<i-popup> is missing required "anchor" attribute',
        });
    });

    it("should only allow setting valid `inline` values", () => {
        expect(/* HTML */ `
            <i-popup anchor="anchorref" is-open inline="always"></i-popup>
        `).toHTMLValidate();
        expect(/* HTML */ `
            <i-popup anchor="anchorref" is-open inline="never"></i-popup>
        `).toHTMLValidate();
        expect(/* HTML */ `
            <i-popup anchor="anchorref" is-open inline="auto"></i-popup>
        `).toHTMLValidate();
        expect(/* HTML */ `
            <i-popup anchor="anchorref" is-open inline="foo"></i-popup>
        `).not.toHTMLValidate({
            ruleId: "attribute-allowed-values",
            message: 'Attribute "inline" has invalid value "foo"',
        });
    });

    it("should allow setting viewport value", () => {
        const markup = /* HTML */ `
            <i-popup
                anchor="anchorref"
                is-open
                viewport="viewportref"
            ></i-popup>
        `;
        expect(markup).toHTMLValidate();
    });

    it("should allow setting focus-element value", () => {
        const markup = /* HTML */ `
            <i-popup
                anchor="anchorref"
                is-open
                focus-element="focuselementref"
            ></i-popup>
        `;
        expect(markup).toHTMLValidate();
    });
});
