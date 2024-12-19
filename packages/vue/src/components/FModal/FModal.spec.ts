import "@fkui/test-utils/jest";
import { defineComponent } from "vue";
import flushPromises from "flush-promises";
import { createPlaceholderInDocument } from "@fkui/test-utils/vue";
import { mount, shallowMount } from "@vue/test-utils";
import FModal from "./FModal.vue";

const offsetFn = {
    get: function () {
        return 1;
    },
};

// default to visible elements
Object.defineProperties(window.HTMLElement.prototype, {
    offsetLeft: offsetFn,
    offsetTop: offsetFn,
    offsetHeight: offsetFn,
    offsetWidth: offsetFn,
});

describe("events", () => {
    it('should send "close" event on close button clicked', async () => {
        const wrapper = shallowMount(FModal, {
            props: {
                isOpen: true,
            },
        });
        const closeElement = wrapper.get(".close-button");

        await closeElement.trigger("click");
        expect(wrapper.emitted().close).toBeTruthy();
    });

    it('should send "close" event on escape key pressed"', async () => {
        const wrapper = shallowMount(FModal, {
            props: {
                isOpen: true,
            },
        });
        const closeElement = wrapper.get(".modal__content");

        await closeElement.trigger("keyup.esc");
        expect(wrapper.emitted().close).toBeTruthy();
    });
});

describe("props", () => {
    it('should be visible if "isOpen" prop is true', async () => {
        const wrapper = shallowMount(FModal, {
            props: {
                isOpen: true,
            },
        });

        const modal = wrapper.get(".modal");
        expect(modal.isVisible()).toBeTruthy();
    });

    it('should be invisible if "isOpen" prop is false', async () => {
        const wrapper = shallowMount(FModal, {
            props: {
                isOpen: false,
            },
        });

        expect(wrapper.find(".modal").exists()).toBeFalsy();
    });

    describe("fullscreen", () => {
        const className = "modal__dialog-container--fullscreen";

        it("[ID 1.1] should not have fullscreen class by default", async () => {
            expect.assertions(1);
            const wrapper = shallowMount(FModal, {
                props: {
                    isOpen: true,
                },
            });
            await wrapper.vm.$nextTick();
            const element = wrapper.get(".modal__dialog-container");
            expect(element.classes()).not.toContain(className);
        });

        it("[ID 1.3] should have fullscreen class when fullscreen is enabled", async () => {
            expect.assertions(1);
            const wrapper = shallowMount(FModal, {
                props: {
                    fullscreen: true,
                    isOpen: true,
                },
            });
            await wrapper.vm.$nextTick();
            const element = wrapper.get(".modal__dialog-container");
            expect(element.classes()).toContain(className);
        });

        it("[ID 1.3] should not have fullscreen class when fullscreen is disabled", async () => {
            expect.assertions(1);
            const wrapper = shallowMount(FModal, {
                props: {
                    fullscreen: false,
                    isOpen: true,
                },
            });
            await wrapper.vm.$nextTick();
            const element = wrapper.get(".modal__dialog-container");
            expect(element.classes()).not.toContain(className);
        });
    });

    describe('should have correct class when using "size" prop is', () => {
        it.each`
            size            | classname
            ${"small"}      | ${"modal__dialog-container--small"}
            ${"medium"}     | ${"modal__dialog-container--medium"}
            ${"large"}      | ${"modal__dialog-container--large"}
            ${"fullscreen"} | ${"modal__dialog-container--fullwidth"}
            ${"fullwidth"}  | ${"modal__dialog-container--fullwidth"}
        `("$size", async ({ size, classname }) => {
            const wrapper = shallowMount(FModal, {
                props: {
                    isOpen: true,
                    size,
                },
            });
            await wrapper.vm.$nextTick();
            const element = wrapper.get(".modal__dialog-container").element;
            expect(element.classList).toContain(classname);
        });
    });
});

describe("accessibility", () => {
    const interactiveContent = /* HTML */ `
        <div>
            <label>
                my interactive
                <input type="text" id="interactive" />
            </label>
            <div></div>
        </div>
    `;

    it("should focus initially on header when header", async () => {
        expect.assertions(1);
        const wrapper = mount(FModal, {
            attachTo: createPlaceholderInDocument(),
            props: {
                isOpen: true,
            },
            slots: {
                header: "my header",
                content: { template: interactiveContent },
            },
        });
        await flushPromises();
        const headerElement = wrapper.get(".modal__title").element;
        expect(headerElement).toHaveFocus();
    });

    it("should focus initially on first interactive element inside content when no header", async () => {
        expect.assertions(1);
        const wrapper = mount(FModal, {
            attachTo: createPlaceholderInDocument(),
            props: {
                isOpen: true,
            },
            slots: { content: { template: interactiveContent } },
        });
        await flushPromises();
        const interactiveElement = wrapper.get("#interactive").element;
        expect(interactiveElement).toHaveFocus();
    });

    it("should focus initially on content element when no header or interactive elements inside content", async () => {
        expect.assertions(1);
        const wrapper = mount(FModal, {
            attachTo: createPlaceholderInDocument(),
            props: {
                isOpen: true,
            },
            slots: { content: "my content" },
        });
        await flushPromises();
        const contentElement = wrapper.get(".modal__content").element;
        expect(contentElement).toHaveFocus();
    });

    it("should restore focus when the modal is closed", async () => {
        expect.assertions(3);

        const TestComponent = defineComponent({
            name: "TestComponent",
            components: {
                FModal,
            },
            data() {
                return { isOpen: false };
            },
            template: /* HTML */ `
                <div>
                    <button
                        id="toggle-button"
                        type="button"
                        @click="isOpen = true"
                    >
                        Open
                    </button>
                    <f-modal :isOpen="isOpen" @close="isOpen = false">
                        <template #header>My header</template>
                    </f-modal>
                </div>
            `,
        });
        const wrapper = mount(TestComponent, {
            attachTo: createPlaceholderInDocument(),
        });

        const toggleButton =
            wrapper.get<HTMLButtonElement>("#toggle-button").element;
        toggleButton.focus();
        expect(toggleButton).toHaveFocus();

        toggleButton.click();
        await flushPromises();
        const modalTitle = wrapper.get(".modal__title").element;
        expect(modalTitle).toHaveFocus();

        const closeButton =
            wrapper.get<HTMLButtonElement>(".close-button").element;
        closeButton.click();
        await flushPromises();
        expect(toggleButton).toHaveFocus();
    });
});

describe("scrollbars", () => {
    it('should remove scrollbars from document if "isOpen" prop is true', async () => {
        const wrapper = shallowMount(FModal, {
            props: {
                isOpen: true,
            },
            attachTo: createPlaceholderInDocument(),
        });
        await wrapper.vm.$nextTick();
        const documentElement = document.documentElement;
        expect(documentElement.style.overflow).toBe("hidden");
    });

    it('should restore scrollbars in document if "isOpen" prop is false', async () => {
        const wrapper = shallowMount(FModal, {
            props: {
                isOpen: false,
            },
            attachTo: createPlaceholderInDocument(),
        });
        await wrapper.vm.$nextTick();
        const documentElement = document.documentElement;
        expect(documentElement.style.overflow).not.toBe("hidden");
    });

    it("should restore scrollbars in document when component is unmounted", async () => {
        const wrapper = shallowMount(FModal, {
            props: {
                isOpen: true,
            },
            attachTo: createPlaceholderInDocument(),
        });
        await wrapper.vm.$nextTick();

        const documentElement = document.documentElement;

        expect(documentElement.style.overflow).toBe("hidden");

        await wrapper.setProps({ isOpen: false });
        await wrapper.vm.$nextTick();

        expect(documentElement.style.overflow).not.toBe("hidden");
    });
});
