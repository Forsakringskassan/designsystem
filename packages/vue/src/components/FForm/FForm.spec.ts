import "html-validate/jest";
import "@fkui/test-utils/jest";
import flushPromises from "flush-promises";
import { defineComponent } from "vue";
import { VueWrapper, mount } from "@vue/test-utils";
import { ValidationService, Reference } from "@fkui/logic";
import { createPlaceholderInDocument } from "@fkui/test-utils/vue";
import { FTextField } from "../FTextField";
import { FormStep, FormErrorList } from "../../types";
import { ValidationPlugin } from "../../plugins";
import FForm from "./FForm.vue";

jest.useFakeTimers();

const TestComponent = defineComponent({
    components: { FForm, FTextField },
    template: /* HTML */ `
        <f-form v-bind="$attrs">
            <template #error-message>
                <div>error-message slot content</div>
            </template>
            <template #default>
                <f-text-field id="element1" v-validation.required>
                    Element 1
                </f-text-field>
                <f-text-field id="element2" v-validation.required>
                    Element 2
                </f-text-field>
            </template>
        </f-form>
    `,
});

function createWrapper({
    props = {},
    slots = {},
    attrs = {},
    stubs = {},
} = {}): VueWrapper {
    return mount(TestComponent, {
        attrs: { ...attrs },
        props: { id: "test-id", ...props },
        slots: { ...slots },
        attachTo: createPlaceholderInDocument(),
        global: {
            plugins: [ValidationPlugin],
            stubs: {
                FLabel: true,
                FIcon: true,
                FErrorList: {
                    props: ["items"],
                    template: /* HTML */ `
                        <div>
                            <pre v-for="item of items" v-text="item"></pre>
                        </div>
                    `,
                },
                ...stubs,
            },
        },
    });
}

async function submitForm(wrapper: VueWrapper): Promise<void> {
    await wrapper.get("form").trigger("submit");
    jest.runAllTimers();
    await flushPromises();
}

async function fillForm(wrapper: VueWrapper): Promise<void> {
    const inputs = wrapper.findAll("input");
    for (const input of inputs) {
        await input.trigger("focus");
    }
    await wrapper.vm.$nextTick();
    for (const input of inputs) {
        await input.setValue("foobar");
    }
    await wrapper.vm.$nextTick();
    for (const input of inputs) {
        await input.trigger("blur");
    }
    await wrapper.vm.$nextTick();
    await flushPromises();
}

function getErrors(wrapper: VueWrapper): unknown[] {
    return wrapper
        .findAll("div pre")
        .map((it) => JSON.parse(it.element.textContent ?? "{}"));
}

afterEach(() => {
    jest.restoreAllMocks();
});

describe("error list", () => {
    it.todo("should not display error list when there are no errors");
    it.todo("should not display error list when disabled");
    it.todo("should display error list when enabled");
});

describe("snapshots", () => {
    it("should match snapshot when pristine", async () => {
        expect.assertions(1);
        const wrapper = createWrapper();
        await flushPromises();
        expect(wrapper.element).toMatchSnapshot();
    });

    it("should match snapshot with errors", async () => {
        expect.assertions(1);
        const wrapper = createWrapper({ stubs: { FMessageBox: true } });
        await flushPromises();
        await submitForm(wrapper);
        expect(wrapper.element).toMatchSnapshot();
    });
});

describe("submit", () => {
    it("should increment numberOfTimesSubmitted when submitting", async () => {
        expect.assertions(1);

        /* given: form with input fields */
        const wrapper = createWrapper();
        await flushPromises();

        /* when: form is submitted */
        await submitForm(wrapper);

        const fForm = wrapper.getComponent(FForm);
        const components = fForm.vm.$data.components;
        const numberOfTimesSubmitted = Object.entries(components).map(
            ([name, component]) => {
                const { ref } = component as Reference<
                    FormErrorList | FormStep
                >;
                return [name, ref.numberOfTimesSubmitted];
            },
        );

        expect(numberOfTimesSubmitted).toEqual([
            ["element1", 1],
            ["element2", 1],
        ]);
    });

    it("should emit submit event when valid form is submitted", async () => {
        expect.assertions(1);

        /* given: form with submit listener */
        const submit = jest.fn();
        const wrapper = createWrapper({
            attrs: { onSubmit: submit },
        });
        await flushPromises();

        /* when: valid form is submitted */
        await fillForm(wrapper);
        await submitForm(wrapper);

        expect(submit).toHaveBeenCalled();
    });

    it("should not emit submit event when invalid form is submitted", async () => {
        expect.assertions(1);

        /* given: form with submit listener */
        const submit = jest.fn();
        const wrapper = createWrapper({
            attrs: { onSubmit: submit },
        });
        await flushPromises();

        /* when: invalid form is submitted */
        await submitForm(wrapper);

        expect(submit).not.toHaveBeenCalled();
    });

    it("should set all components to submitted before validation", async () => {
        const setSubmitted = jest.spyOn(ValidationService, "setSubmitted");
        const validateAllElements = jest.spyOn(
            ValidationService,
            "validateAllElements",
        );

        const wrapper = createWrapper();
        await flushPromises();

        await submitForm(wrapper);

        const setSubmittedCallOrder = setSubmitted.mock.invocationCallOrder[0];
        const validateAllElementsCallOrder =
            validateAllElements.mock.invocationCallOrder[0];

        expect(setSubmittedCallOrder).toBeLessThan(
            validateAllElementsCallOrder,
        );
        expect(setSubmitted).toHaveBeenCalledWith("element1");
        expect(setSubmitted).toHaveBeenCalledWith("element2");
    });

    it("should show error when component validity events from new element are dispatched after first submit", async () => {
        expect.assertions(2);

        const wrapper = createWrapper({});
        await flushPromises();

        const element1 = wrapper.get("#element1");
        const element2 = wrapper.get("#element2");

        element1.setValue("");
        element2.setValue("foo");
        await submitForm(wrapper);

        expect(getErrors(wrapper)).toEqual([
            {
                focusElementId: "element1",
                id: "element1",
                isValid: false,
                numberOfTimesSubmitted: 1,
                title: "Element 1",
            },
        ]);

        element2.setValue("");
        await submitForm(wrapper);

        expect(getErrors(wrapper)).toEqual([
            {
                focusElementId: "element1",
                id: "element1",
                isValid: false,
                numberOfTimesSubmitted: 2,
                title: "Element 1",
            },
            {
                focusElementId: "element2",
                id: "element2",
                isValid: false,
                numberOfTimesSubmitted: 2,
                title: "Element 2",
            },
        ]);
    });

    describe("focus", () => {
        it("should focus .message-box--error element if form is invalid", async () => {
            const wrapper = createWrapper();
            await flushPromises();

            await submitForm(wrapper);

            const expectedFocus = wrapper.get(".message-box--error");
            expect(expectedFocus.element).toHaveFocus();
        });

        it("should focus first invalid element if form is invalid with no .form-step__header element and prop displayError = false", async () => {
            const wrapper = createWrapper({
                props: {
                    displayError: false,
                },
            });
            await flushPromises();

            await submitForm(wrapper);

            const expectedFocus = wrapper.get(":invalid");
            expect(expectedFocus.element).toHaveFocus();
        });
    });
});

describe("html-validate", () => {
    it.each`
        html
        ${'<f-form><button type="submit">Submit</button></f-form>'}
        ${'<f-form display-error><button type="submit">Submit</button></f-form>'}
        ${'<f-form display-error="true"><button type="submit">Submit</button></f-form>'}
        ${'<f-form display-error="false"><button type="submit">Submit</button></f-form>'}
        ${'<f-form><template #error-message>Error</template><button type="submit">Submit</button></f-form>'}
    `("$html should be valid", ({ html }) => {
        expect.assertions(1);

        expect(html).toHTMLValidate();
    });

    it.each`
        html
        ${"<f-form></f-form>"}
        ${"<f-form><template #error-message>Error</template></f-form>"}
        ${'<f-form display-error="maybe"><button type="submit">Submit</button></f-form>'}
        ${'<f-form><template #tooltip>Tooltip</template><button type="submit">Submit</button></f-form>'}
    `("$html should be invalid", ({ html }) => {
        expect.assertions(3);
        let catchedError;

        try {
            expect(html).toHTMLValidate();
        } catch (error) {
            catchedError = error;
        } finally {
            expect(catchedError).toBeDefined();
            expect(catchedError).toMatchSnapshot();
        }
    });
});
