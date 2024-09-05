import "html-validate/jest";
import { mount, VueWrapper } from "@vue/test-utils";
import FFileSelector from "./FFileSelector.vue";

function createWrapper({
    props = {},
    slots = {},
    attrs = {},
} = {}): VueWrapper {
    return mount(FFileSelector, {
        attrs: { ...attrs },
        props: { ...props },
        slots: { default: "Select file", ...slots },
        global: {
            stubs: ["FIcon"],
        },
    });
}

describe("FFileselector", () => {
    it("should pass attributes", () => {
        const filetypesAccepted =
            "application/pdf, image/jpeg, image/tiff, image/png";
        const wrapper = createWrapper({
            attrs: {
                accept: filetypesAccepted,
            },
        });
        const input = wrapper.get("input");
        expect(input.attributes("accept")).toBe(filetypesAccepted);
    });

    it("should set text in slot", () => {
        const wrapper = createWrapper();
        const label = wrapper.get("label");
        expect(label.text()).toBe("Select file");
        expect(wrapper.element).toMatchSnapshot();
    });

    it("should pass listeners", async () => {
        const foobar = jest.fn();
        const wrapper = createWrapper({
            attrs: { onFoobar: foobar },
        });
        const element = wrapper.get("input");
        await element.trigger("foobar");
        expect(foobar).toHaveBeenCalled();
    });

    it("should emit on change", async () => {
        const wrapper = createWrapper();
        const input = wrapper.get("input");
        await input.trigger("change");
        // emits Event and FileList on change
        expect(wrapper.emitted("change")).toHaveLength(1);
    });

    it("should disable component when disabled", () => {
        const wrapper = createWrapper({
            props: { disabled: true },
        });
        const input = wrapper.get("input");
        const label = wrapper.get("label");
        expect(input.attributes("aria-disabled")).toBe("true");
        expect(label.classes()).toContain("disabled");
    });

    it("should not disable component when not disabled", () => {
        const wrapper = createWrapper();
        const input = wrapper.get("input");
        const label = wrapper.get("label");
        expect(input.attributes("aria-disabled")).toBeUndefined();
        expect(label.classes()).not.toContain("disabled");
    });

    /*
     * Fixes bug related to WCAG 2.5.3 (label in name).
     * The file selector's visible text did not match the text that was read aloud by screen reader.
     * Instead, the screen reader read the content of the browser's default input[file]
     * (e.g. "Välj fil: Ingen fil vald" in Edge).
     */
    it("should have input with aria-labelledby attribute", () => {
        const wrapper = createWrapper({
            props: { id: "foo" },
        });
        const input = wrapper.get("input");
        const label = wrapper.get("label");
        expect(label.attributes("id")).toBe("foo_label");
        expect(input.attributes("aria-labelledby")).toBe("foo_label");
    });

    /*
     * Fixes SFKUI-683. By using the keyboard's arrow keys to navigate past the file selector, the file selector
     * was read out twice by screen reader.
     */
    it("should have label with aria-hidden attribute", () => {
        const wrapper = createWrapper();
        const label = wrapper.get("label");
        expect(label.attributes("aria-hidden")).toBe("true");
    });
});

describe("html-validate", () => {
    describe("attributes", () => {
        it("disabled", () => {
            expect.assertions(2);
            const valid = /* HTML */ `
                <f-file-selector>text</f-file-selector>
                <f-file-selector disabled>text</f-file-selector>
                <f-file-selector :disabled="false">text</f-file-selector>
                <f-file-selector :disabled="true">text</f-file-selector>
            `;
            const invalid = /* HTML */ `
                <f-file-selector disabled="foobar">text</f-file-selector>
            `;
            expect(valid).toMatchInlineCodeframe(`""`);
            expect(invalid).toMatchInlineCodeframe(`
                "error: Attribute "disabled" should omit value (attribute-boolean-style) at inline:2:34:
                  1 |
                > 2 |                 <f-file-selector disabled="foobar">text</f-file-selector>
                    |                                  ^^^^^^^^
                  3 |
                Selector: f-file-selector
                error: Attribute "disabled" has invalid value "foobar" (attribute-allowed-values) at inline:2:44:
                  1 |
                > 2 |                 <f-file-selector disabled="foobar">text</f-file-selector>
                    |                                            ^^^^^^
                  3 |
                Selector: f-file-selector"
            `);
        });
    });
});
