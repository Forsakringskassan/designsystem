import { VueWrapper, mount } from "@vue/test-utils";
import FExpandableTextareaField from "./FExpandableTextareaField.vue";

function createWrapper({ props = {}, attrs = {} } = {}): VueWrapper<
    InstanceType<typeof FExpandableTextareaField>
> {
    return mount(FExpandableTextareaField, {
        attrs: { ...attrs, id: "expandable-textarea-field" },
        props: { ...props },
        slots: { default: "Label" },
    });
}

function setScrollHeight(
    textarea: HTMLTextAreaElement,
    scrollHeight: number,
): void {
    Object.defineProperty(textarea, "scrollHeight", {
        value: scrollHeight,
        configurable: true,
    });
}

function setElementWidth(element: HTMLElement, width: number): void {
    element.getBoundingClientRect = jest.fn(() => {
        return {
            bottom: 0,
            height: 0,
            left: 0,
            right: width,
            top: 0,
            width,
            x: 0,
            y: 0,
            toJSON: () => ({}),
        };
    });
}

async function flushAnimationFrame(): Promise<void> {
    await new Promise((resolve) => {
        window.requestAnimationFrame(resolve);
    });
}

describe("FExpandableTextareaField", () => {
    const OriginalResizeObserver = global.ResizeObserver;

    afterEach(() => {
        global.ResizeObserver = OriginalResizeObserver;
    });

    it("should start as a single-row textarea", () => {
        const wrapper = createWrapper();
        const textarea = wrapper.get("textarea");

        expect(textarea.attributes("rows")).toBe("1");
        expect(textarea.classes()).toContain(
            "expandable-textarea-field__textarea",
        );
    });

    it("should allow rows to be overridden", () => {
        const wrapper = createWrapper({
            attrs: { rows: 3 },
        });
        const textarea = wrapper.get("textarea");

        expect(textarea.attributes("rows")).toBe("3");
    });

    it("should support v-model by emitting input event with value", async () => {
        const wrapper = createWrapper({
            props: { modelValue: "Bana" },
        });
        const textarea = wrapper.get("textarea");
        const element = textarea.element as HTMLTextAreaElement;

        expect(element.value).toBe("Bana");
        await textarea.setValue("Banana");

        expect(element.value).toBe("Banana");
        expect(wrapper.emitted("input")![0][0]).toBe("Banana");
        expect(wrapper.emitted("update:modelValue")![0][0]).toBe("Banana");
    });

    it("should resize to fit the textarea scroll height on input", async () => {
        const wrapper = createWrapper();
        const textarea = wrapper.get("textarea");
        const element = textarea.element as HTMLTextAreaElement;

        setScrollHeight(element, 72);
        await textarea.setValue("A text long enough to wrap to a new row");
        await flushAnimationFrame();

        expect(element.style.height).toBe("74px");
    });

    it("should shrink when the textarea scroll height decreases", async () => {
        const wrapper = createWrapper();
        const textarea = wrapper.get("textarea");
        const element = textarea.element as HTMLTextAreaElement;

        setScrollHeight(element, 96);
        await textarea.setValue("A text long enough to wrap to several rows");
        await flushAnimationFrame();
        expect(element.style.height).toBe("98px");

        setScrollHeight(element, 40);
        await textarea.setValue("Short");
        await flushAnimationFrame();
        expect(element.style.height).toBe("42px");
    });

    it("should resize when model value is changed programmatically", async () => {
        const wrapper = createWrapper();
        const textarea = wrapper.get("textarea");
        const element = textarea.element as HTMLTextAreaElement;

        setScrollHeight(element, 88);
        await wrapper.setProps({
            modelValue: "Updated from outside",
        });
        await flushAnimationFrame();

        expect(element.style.height).toBe("90px");
    });

    it("should cap height at maxRows and enable internal scrolling", async () => {
        const wrapper = createWrapper({
            props: { maxRows: 6 },
            attrs: { rows: 3 },
        });
        const textarea = wrapper.get("textarea");
        const element = textarea.element as HTMLTextAreaElement;

        element.style.fontSize = "16px";
        element.style.lineHeight = "1.5";
        element.style.paddingTop = "4px";
        element.style.paddingBottom = "4px";
        element.style.borderTopWidth = "1px";
        element.style.borderBottomWidth = "1px";

        setScrollHeight(element, 180);
        await textarea.setValue("A text long enough to exceed max rows");
        await flushAnimationFrame();

        expect(element.style.height).toBe("154px");
        expect(element.style.overflowY).toBe("auto");
    });

    it("should not schedule resize from resize observer when only height changes", () => {
        let observerCallback: ResizeObserverCallback | undefined;
        global.ResizeObserver = jest.fn((callback: ResizeObserverCallback) => {
            observerCallback = callback;
            return {
                disconnect: jest.fn(),
                observe: jest.fn(),
                unobserve: jest.fn(),
            };
        }) as unknown as typeof ResizeObserver;

        const wrapper = createWrapper();
        const textarea = wrapper.get("textarea");
        const element = textarea.element as HTMLTextAreaElement;
        const scheduleResize = jest.spyOn(wrapper.vm, "scheduleResize");

        setElementWidth(element, 240);
        wrapper.vm.observeTextareaResize();
        scheduleResize.mockClear();

        observerCallback?.([], {} as ResizeObserver);

        expect(scheduleResize).not.toHaveBeenCalled();
    });
});
