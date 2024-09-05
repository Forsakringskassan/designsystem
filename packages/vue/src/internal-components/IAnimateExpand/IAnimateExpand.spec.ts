import "html-validate/jest";
import { VueWrapper, mount } from "@vue/test-utils";
import flushPromises from "flush-promises";
import IAnimateExpand from "./IAnimateExpand.vue";

// Mock slot content height
Object.assign(Element.prototype, {
    getBoundingClientRect: jest.fn(() => ({
        height: 200,
    })),
});

const ANIMATION_DURATION = 501;

function createWrapper({ props = {} } = {}): VueWrapper {
    return mount(IAnimateExpand, {
        props,
        slots: {
            default: "EXPANDED_CONTENT",
        },
    });
}

beforeEach(() => {
    jest.useFakeTimers();
});

afterEach(() => {
    jest.clearAllTimers();
});

describe("props", () => {
    describe("expanded", () => {
        it("should match snapshot being collapsed when expanded prop set to false", async () => {
            const wrapper = createWrapper({
                props: {
                    expanded: false,
                },
            });

            jest.runAllTimers();
            await wrapper.vm.$nextTick();

            expect(wrapper.element).toMatchInlineSnapshot(`
                <div
                  class="animate-expand animate-expand--opacity"
                  style="height: 0px;"
                >
                  <!--v-if-->
                </div>
            `);
        });

        it("should match snapshot containing the default slot and be expanded (no css or style) when expanded prop defaults to true", async () => {
            const wrapper = createWrapper({});
            jest.runAllTimers();
            await wrapper.vm.$nextTick();

            /* eslint-disable-next-line jest/no-large-snapshots -- technical debt */
            expect(wrapper.element).toMatchInlineSnapshot(`
                <div
                  class=""
                  style=""
                >
                  <div
                    data-test="animation-content"
                  >
                    
                    EXPANDED_CONTENT
                    
                  </div>
                </div>
            `);
        });
    });

    describe("animate", () => {
        it("should set class animate-expand--expanded and set height to the content height during the opening animation phase and ending with clearing height and css-classes", async () => {
            const wrapper = createWrapper({
                props: {
                    expanded: false,
                },
            });

            const wrapperElement = wrapper.element as HTMLElement;

            await wrapper.setProps({ expanded: true });
            await flushPromises();

            expect(wrapperElement.classList).toContain(
                "animate-expand--expanded",
            );
            expect(wrapperElement.style.height).toMatch("200px");

            jest.advanceTimersByTime(ANIMATION_DURATION);
            await wrapper.vm.$nextTick();

            expect(wrapperElement.classList).not.toContain("animate-expand");
            expect(wrapperElement.classList).not.toContain(
                "animate-expand--expanded",
            );
            expect(wrapperElement.style.height).toMatch("");
        });

        it("should not set class animate-expand--expanded when prop animate is set to false", async () => {
            const wrapper = createWrapper({
                props: {
                    expanded: false,
                    animate: false,
                },
            });

            const wrapperElement = wrapper.element as HTMLElement;

            await wrapper.setProps({ expanded: true });
            await flushPromises();

            expect(wrapper.element.classList).not.toContain(
                "animate-expand--expanded",
            );
            expect(wrapperElement.style.height).toMatch("200px");

            jest.advanceTimersByTime(ANIMATION_DURATION);
            await wrapper.vm.$nextTick();

            expect(wrapper.element.classList).not.toContain(
                "animate-expand--expanded",
            );
            expect(wrapperElement.style.height).toMatch("");
            expect(wrapper.element.classList).not.toContain("animate-expand");
        });
    });

    describe("opacity", () => {
        it("should have opacity class as default", async () => {
            const wrapper = createWrapper({
                props: {
                    expanded: false,
                },
            });

            jest.advanceTimersByTime(ANIMATION_DURATION);
            jest.runAllTimers();
            await wrapper.vm.$nextTick();

            expect(wrapper.element.classList).toContain(
                "animate-expand--opacity",
            );
        });

        it("should not have opacity class when opacity is set to false", async () => {
            const wrapper = createWrapper({
                props: {
                    expanded: false,
                    opacity: false,
                },
            });

            jest.runAllTimers();
            await wrapper.vm.$nextTick();

            expect(wrapper.element.classList).not.toContain(
                "animate-expand--opacity",
            );
        });
    });

    describe("useVshow", () => {
        it("should use v-if as default, i.e. not containing content in DOM", async () => {
            const wrapper = createWrapper({
                props: {
                    expanded: false,
                },
            });

            jest.runAllTimers();
            await wrapper.vm.$nextTick();
            expect(wrapper.element.innerHTML).not.toContain("EXPANDED_CONTENT");
        });

        it("should use v-show when prop useVShow is true, i.e. containing content in DOM", async () => {
            const wrapper = createWrapper({
                props: {
                    expanded: false,
                    useVShow: true,
                },
            });

            jest.runAllTimers();
            await wrapper.vm.$nextTick();
            expect(wrapper.element.innerHTML).toContain("EXPANDED_CONTENT");
        });
    });
});

describe("callbacks", () => {
    it.each`
        open     | animation | expected | description
        ${true}  | ${false}  | ${true}  | ${"mmediately when animation prop is set to false when expanding"}
        ${false} | ${false}  | ${false} | ${"immediately when animation prop is set to false when collapsing"}
        ${true}  | ${true}   | ${true}  | ${"after 500 ms when animation prop is set to true when expanding"}
        ${false} | ${true}   | ${false} | ${"after 500 ms when animation prop is set to true when collapsing"}
    `(
        "should call beforeAnimate($open) immeditately and afterAnimate($open) $description",
        async ({ open, animation, expected }) => {
            const beforeAnimateCallback = jest.fn();
            const afterAnimateCallback = jest.fn();

            const wrapper = createWrapper({
                props: {
                    expanded: !open,
                    animate: false,
                    beforeAnimation: beforeAnimateCallback,
                    afterAnimation: afterAnimateCallback,
                },
            });

            expect(beforeAnimateCallback).not.toHaveBeenCalled();
            expect(afterAnimateCallback).not.toHaveBeenCalled();

            await wrapper.setProps({
                expanded: open,
                animate: false,
                beforeAnimation: beforeAnimateCallback,
                afterAnimation: afterAnimateCallback,
            });

            expect(beforeAnimateCallback).toHaveBeenCalledWith(expected);

            expect(afterAnimateCallback).not.toHaveBeenCalled();
            // Wait for component to be expanded in DOM
            await wrapper.vm.$nextTick();
            if (animation) {
                jest.advanceTimersByTime(500);
            }
            expect(afterAnimateCallback).toHaveBeenCalledWith(expected);
        },
    );
});

describe("html-validate", () => {
    it.each`
        html
        ${"<i-animate-expand></i-animate-expand>"}
        ${"<i-animate-expand>DEFAULT CONTENT</i-animate-expand>"}
        ${"<i-animate-expand><i-animate-expand></i-animate-expand></i-animate-expand>"}
    `("$html should be valid", ({ html }) => {
        expect.assertions(1);

        expect(html).toHTMLValidate();
    });

    it.each(["animate", "opacity", "use-v-show"])(
        "attribute %s should be allowed without value (boolean)",
        (attr) => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <i-animate-expand ${attr}></i-animate-expand>
            `;
            expect(markup).toHTMLValidate();
        },
    );

    it.each(["animate", "opacity", "use-v-show"])(
        "attribute %s should not allow value",
        (attr) => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <i-animate-expand ${attr}="true"></i-animate-expand>
            `;

            expect(markup).not.toHTMLValidate({
                ruleId: "attribute-boolean-style",
                message: `Attribute "${attr}" should omit value`,
            });
        },
    );

    it.each`
        value           | description
        ${""}           | ${"empty string"}
        ${true}         | ${"booelan"}
        ${false}        | ${"boolean"}
        ${0}            | ${"number"}
        ${1}            | ${"number"}
        ${"somestring"} | ${"any string"}
    `("attribute expand should allow $description ($value)", (value) => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <i-animate-expand expanded="${value}"></i-animate-expand>
        `;

        expect(markup).toHTMLValidate();
    });
});

it("should only call afterAnimation once when cancel animation", async () => {
    const beforeAnimateCallback = jest.fn();
    const afterAnimateCallback = jest.fn();

    const wrapper = createWrapper({
        props: {
            expanded: false,
            animate: false,
            beforeAnimation: beforeAnimateCallback,
            afterAnimation: afterAnimateCallback,
        },
    });

    expect(beforeAnimateCallback).not.toHaveBeenCalled();
    expect(afterAnimateCallback).not.toHaveBeenCalled();

    await wrapper.setProps({
        expanded: true,
        animate: true,
        beforeAnimation: beforeAnimateCallback,
        afterAnimation: afterAnimateCallback,
    });

    expect(beforeAnimateCallback).toHaveBeenCalledTimes(1);

    await wrapper.setProps({
        expanded: false,
        animate: true,
        beforeAnimation: beforeAnimateCallback,
        afterAnimation: afterAnimateCallback,
    });

    expect(beforeAnimateCallback).toHaveBeenCalledTimes(2);
    // Wait for component to complete animation
    await wrapper.vm.$nextTick();
    jest.advanceTimersByTime(500);
    expect(afterAnimateCallback).toHaveBeenCalledTimes(1);
});
