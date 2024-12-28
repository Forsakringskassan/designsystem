import path from "node:path";
import "html-validate/jest";
import {
    cjsResolver,
    FileSystemConfigLoader,
    HtmlValidate,
} from "html-validate/node";
import { VueWrapper, mount } from "@vue/test-utils";
import { createPlaceholderInDocument } from "@fkui/test-utils/vue";
import { FTextField } from "../FTextField";
import { ValidationPlugin } from "../../plugins";
import FValidationForm from "./FValidationForm.vue";
import { FValidationFormAction } from "./types";

const WrapperComp = {
    template: /* HTML */ `
        <f-validation-form
            :beforeSubmit="beforeSubmit"
            @submit="$emit('submit')"
        >
            <template #default>
                <f-text-field
                    id="field1"
                    v-model="field1"
                    v-validation.required
                >
                    Field1
                </f-text-field>
                <f-text-field
                    id="field2"
                    v-model="field2"
                    v-validation.required
                >
                    Field2
                </f-text-field>

                <button type="submit"></button>
            </template>
        </f-validation-form>
    `,
    inheritAttrs: true,
    components: {
        FValidationForm,
        FTextField,
    },
    props: ["beforeSubmit"],
    data() {
        return {
            field1: "",
            field2: "",
        };
    },
};

const defaultMountingOptions = {
    global: {
        plugins: [ValidationPlugin],
        stubs: ["FLabel"],
    },
    attachTo: createPlaceholderInDocument(),
};

describe("events", () => {
    it("should emit submit event when valid form submit", async () => {
        const wrapper = await new Promise<VueWrapper>((resolve) => {
            const wrapper = mount(WrapperComp, {
                ...defaultMountingOptions,
                attrs: {
                    onSubmit() {
                        resolve(wrapper);
                    },
                },
            });
            wrapper.find("#field1").setValue("foo");
            wrapper.find("#field2").setValue("bar");
            wrapper.find("button").trigger("click");
        });
        const component = wrapper.findComponent(FValidationForm);
        const emitted = component.emitted("submit");
        expect(emitted).toHaveLength(1);
    });

    it("should emit submit event when continued by beforeSubmit callback", async () => {
        expect.assertions(1);
        const wrapper = await new Promise<VueWrapper>((resolve) => {
            const wrapper = mount(WrapperComp, {
                ...defaultMountingOptions,
                attrs: {
                    onSubmit() {
                        resolve(wrapper);
                    },
                },
                props: {
                    beforeSubmit() {
                        return Promise.resolve(FValidationFormAction.CONTINUE);
                    },
                },
            });
            wrapper.find("#field1").setValue("foo");
            wrapper.find("#field2").setValue("bar");
            wrapper.find("button").trigger("click");
        });
        const component = wrapper.findComponent(FValidationForm);
        const emitted = component.emitted("submit");
        expect(emitted).toHaveLength(1);
    });

    it("should not emit submit event when invalid form submit", async () => {
        const wrapper = mount(WrapperComp, defaultMountingOptions);
        await wrapper.find("button").trigger("click");
        const component = wrapper.findComponent(FValidationForm);
        const emitted = component.emitted("submit");
        expect(emitted).toBeUndefined();
    });

    it("should not emit submit event when cancelled by beforeSubmit callback", async () => {
        expect.assertions(1);
        const wrapper = mount(WrapperComp, {
            ...defaultMountingOptions,
            props: {
                beforeSubmit() {
                    return Promise.resolve(FValidationFormAction.CANCEL);
                },
            },
        });
        await wrapper.find("#field1").setValue("foo");
        await wrapper.find("#field2").setValue("bar");
        await wrapper.find("button").trigger("click");
        const component = wrapper.findComponent(FValidationForm);
        const emitted = component.emitted("submit");
        expect(emitted).toBeUndefined();
    });
});

describe("html-validate", () => {
    const loader = new FileSystemConfigLoader([cjsResolver()], {
        extends: [
            "html-validate:recommended",
            "html-validate-vue:recommended",
            "@fkui/vue:recommended",
        ],
        plugins: ["<rootDir>/htmlvalidate", "html-validate-vue"],
        transform: {
            ".*": "html-validate-vue:html",
        },
    });
    const htmlvalidate = new HtmlValidate(loader);
    const filename = path.basename(__filename);

    it("should allow flow content", async () => {
        expect.assertions(2);
        const markup = /* HTML */ `
            <f-validation-form>
                <div></div>
                <button type="submit">submit</button>
            </f-validation-form>
        `;
        const report = await htmlvalidate.validateString(markup, filename);
        expect(report).toMatchInlineCodeframe(`""`);
        expect(report).toBeValid();
    });

    it("should allow buttons in default slot", async () => {
        expect.assertions(2);
        const markup = /* HTML */ `
            <f-validation-form>
                <template #default>
                    <button type="submit">submit</button>
                    <button type="button">cancel</button>
                </template>
            </f-validation-form>
        `;
        const report = await htmlvalidate.validateString(markup, filename);
        expect(report).toMatchInlineCodeframe(`""`);
        expect(report).toBeValid();
    });

    it("should not allow flow content in error-message slot", async () => {
        expect.assertions(2);
        const markup = /* HTML */ `
            <f-validation-form>
                <template #error-message>
                    <div></div>
                </template>
                <template #default>
                    <button type="submit">submit</button>
                </template>
            </f-validation-form>
        `;
        const report = await htmlvalidate.validateString(markup, filename);
        expect(report).toMatchInlineCodeframe(`
            "error: <div> element is not permitted as content under slot "error-message" (<f-validation-form>) (element-permitted-content) at FValidationForm.spec.ts:4:22:
              2 |             <f-validation-form>
              3 |                 <template #error-message>
            > 4 |                     <div></div>
                |                      ^^^
              5 |                 </template>
              6 |                 <template #default>
              7 |                     <button type="submit">submit</button>
            Selector: f-validation-form > template:nth-child(1) > div"
        `);
        expect(report).toBeInvalid();
    });

    it("should allow heading and phrasing content in error-message slot", async () => {
        expect.assertions(2);
        const markup = /* HTML */ `
            <f-validation-form>
                <template #error-message>
                    <h1>heading</h1>
                    <span> lorem ipsum </span>
                </template>
                <template #default>
                    <button type="submit">submit</button>
                </template>
            </f-validation-form>
        `;
        const report = await htmlvalidate.validateString(markup, filename);
        expect(report).toMatchInlineCodeframe(`""`);
        expect(report).toBeValid();
    });

    it("should allow use-error-list setting via attribute", async () => {
        expect.assertions(2);
        const markup = /* HTML */ `
            <f-validation-form use-error-list>
                <template #default>
                    <button type="submit">submit</button>
                </template>
            </f-validation-form>
        `;
        const report = await htmlvalidate.validateString(markup, filename);
        expect(report).toMatchInlineCodeframe(`""`);
        expect(report).toBeValid();
    });

    it("should require submit button", async () => {
        expect.assertions(2);
        const markup = /* HTML */ ` <f-validation-form> </f-validation-form> `;
        const report = await htmlvalidate.validateString(markup, filename);
        expect(report).toMatchInlineCodeframe(`
            "error: <f-validation-form> element must have a submit button (wcag/h32) at FValidationForm.spec.ts:1:3:
            > 1 |  <f-validation-form> </f-validation-form>
                |   ^^^^^^^^^^^^^^^^^
            Selector: f-validation-form"
        `);
        expect(report).toBeInvalid();
    });
});
