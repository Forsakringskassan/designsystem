import { VueWrapper, mount } from "@vue/test-utils";
import {
    cjsResolver,
    FileSystemConfigLoader,
    HtmlValidate,
} from "html-validate/node";
import FCard from "./FCard.vue";
import "html-validate/jest";

const loader = new FileSystemConfigLoader([cjsResolver()], {
    extends: [
        "html-validate:recommended",
        "html-validate-vue:recommended",
        "@fkui/vue:recommended",
    ],
    plugins: ["<rootDir>/htmlvalidate", "html-validate-vue"],
});
const htmlvalidate = new HtmlValidate(loader);

function createWrapper({
    props = {},
    listeners = {},
    attrs = {},
} = {}): VueWrapper {
    return mount(FCard, {
        attrs: { ...attrs },
        props: { ...props },
        slots: {
            header: "Header slot",
            default: "Content slot",
            footer: "Footer slot",
        },
        listeners: { ...listeners },
    });
}

describe("snapshots", () => {
    it("should match snapshot", () => {
        const wrapper = createWrapper();
        expect(wrapper.element).toMatchSnapshot();

        expect(wrapper.get(".card__header")).toBeTruthy();
        expect(wrapper.get(".card__footer")).toBeTruthy();
    });

    it("should not render header class when heading slot is omitted", () => {
        const wrapper = mount(FCard);
        expect(wrapper.find(".card__header").exists()).toBeFalsy();
    });

    it("should not render footer class when footer slot is omitted", () => {
        const wrapper = mount(FCard);
        expect(wrapper.find(".card__footer").exists()).toBeFalsy();
    });
});

describe("html-validate", () => {
    it("should allow valid values", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-card>
                <template #default> Content </template>
            </f-card>
            <f-card>
                <template #header></template>
                <template #default> Content </template>
                <template #footer></template>
            </f-card>
        `;
        const report = await htmlvalidate.validateString(markup);
        expect(report).toBeValid();
    });

    it("should not allow invalid values", async () => {
        expect.assertions(1);
        const markup = /* HTML */ ` <f-card></f-card> `;
        const report = await htmlvalidate.validateString(markup);
        expect(report).toMatchInlineCodeframe(`
            "error: <f-card> component requires slot "default" to be implemented (vue/required-slots) at inline:1:3:
            > 1 |  <f-card></f-card>
                |   ^^^^^^
            Selector: f-card"
        `);
    });
});
