import { defineComponent, h, markRaw } from "vue";
import { mount } from "@vue/test-utils";
import flushPromises from "flush-promises";
import { createRouter, createWebHashHistory } from "vue-router";
import { EventBus } from "../../utils";
import { UNHANDLED_ERROR_EVENT } from "./ErrorPlugin";
import FErrorHandlingApp from "./FErrorHandlingApp.vue";

const defaultComponent = defineComponent({
    name: "DefaultComponent",
    render() {
        return h("p", "Regular page");
    },
});

const errorComponent = defineComponent({
    name: "ErrorComponent",
    render() {
        return h("p", "Something went wrong page");
    },
});

describe("FErrorHandlingApp", () => {
    it("should show default page when using component prop", () => {
        // When
        const component = mount(FErrorHandlingApp, {
            props: {
                defaultComponent: markRaw(defaultComponent),
                errorComponent: markRaw(errorComponent),
            },
        });

        // Then
        expect(component.element).toMatchInlineSnapshot(`
            <div>
              <p>
                Regular page
              </p>
            </div>
        `);
    });

    it("should show default page when using default slot", () => {
        // When
        const component = mount(FErrorHandlingApp, {
            props: {
                errorComponent: markRaw(errorComponent),
            },
            slots: {
                default: "<p>Slotted content</p>",
            },
        });

        // Then
        expect(component.element).toMatchInlineSnapshot(`
            <div>
              
              <p>
                Slotted content
              </p>
              
            </div>
        `);
    });

    it(`should show error page on ${UNHANDLED_ERROR_EVENT} event`, async () => {
        // Given
        const component = mount(FErrorHandlingApp, {
            props: {
                defaultComponent: markRaw(defaultComponent),
                errorComponent: markRaw(errorComponent),
            },
        });

        // When
        EventBus.$emit(UNHANDLED_ERROR_EVENT);
        await flushPromises();

        // Then
        expect(component.element).toMatchInlineSnapshot(`
            <div>
              <p>
                Something went wrong page
              </p>
            </div>
        `);
    });

    it("should show default page after route", async () => {
        // Given
        const router = createRouter({
            history: createWebHashHistory(),
            routes: [
                {
                    path: "/",
                    component: defineComponent({
                        name: "default",
                    }),
                },
                {
                    path: "/another-url",
                    component: defineComponent({
                        name: "another-url",
                    }),
                },
            ],
        });
        const component = mount(FErrorHandlingApp, {
            props: {
                defaultComponent: markRaw(defaultComponent),
                errorComponent: markRaw(errorComponent),
            },
            global: {
                plugins: [router],
            },
        });
        EventBus.$emit(UNHANDLED_ERROR_EVENT);
        await flushPromises();

        // When
        router.push("/another-url");
        await flushPromises();

        // Then
        expect(component.element).toMatchInlineSnapshot(`
            <div>
              <p>
                Regular page
              </p>
            </div>
        `);
    });
});
