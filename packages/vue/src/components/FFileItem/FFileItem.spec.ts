import { shallowMount, VueWrapper } from "@vue/test-utils";
import { TranslationPlugin } from "../../plugins";
import FFileItem from "./FFileItem.vue";

function createWrapper({ slots = {}, attrs = {}, props = {} }): VueWrapper {
    return shallowMount(FFileItem, {
        slots: slots,
        attrs: { ...attrs },
        props: {
            id: "123",
            fileName: "foo.bar",
            mimeType: "application/pdf",
            originalMimeType: "application/pdf",
            ...props,
        },
        global: {
            plugins: [TranslationPlugin],
        },
    });
}

describe("FileItem", () => {
    it("should match snapshot with slots", () => {
        const wrapper = createWrapper({
            slots: {
                row: "file item goes here",
                default: "progress is 80%",
            },
        });
        expect(wrapper.element).toMatchSnapshot();
    });

    it("should pass attributes", () => {
        const wrapper = createWrapper({
            attrs: {
                disabled: "disabled",
            },
        });
        const aTag = wrapper.get(".file-item__file-open");
        expect(aTag.attributes("disabled")).toBeDefined();
        expect(wrapper.element).toMatchSnapshot();
    });

    it("should pass listeners", async () => {
        const foobar = jest.fn();
        const wrapper = createWrapper({
            attrs: { onFoobar: foobar },
        });
        const element = wrapper.get(".file-item__file-open");
        await element.trigger("foobar");
        expect(foobar).toHaveBeenCalled();
    });

    it("should show info when server changed type", async () => {
        expect.assertions(1);
        const wrapper = createWrapper({
            props: { originalMimeType: "image/png" },
        });
        const element = wrapper.get(".file-item__change-info");
        expect(element.text()).toContain("(png ändrad till pdf)");
    });

    it("should show custom info when server changed type", async () => {
        expect.assertions(1);
        const wrapper = createWrapper({
            props: {
                originalMimeType: "image/png",
                changedMimeTypeText: "(%before% changed to %after%)",
            },
        });
        const element = wrapper.get(".file-item__change-info");
        expect(element.text()).toContain("(png changed to pdf)");
    });

    it("should match snapshots without slots", () => {
        const wrapper = createWrapper({});
        expect(wrapper.element).toMatchSnapshot();
    });
});

it.each`
    mimeType                                                                     | expected
    ${"application/msword"}                                                      | ${"doc"}
    ${"application/octet-stream"}                                                | ${"file"}
    ${"application/pdf"}                                                         | ${"pdf"}
    ${"application/vnd.openxmlformats-officedocument.wordprocessingml.document"} | ${"doc"}
    ${"application/vnd.openxmlformats-officedocument.wordprocessingml.template"} | ${"doc"}
    ${"image/bmp"}                                                               | ${"pic"}
    ${"image/gif"}                                                               | ${"pic"}
    ${"image/jpeg"}                                                              | ${"pic"}
    ${"image/png"}                                                               | ${"pic"}
    ${"image/tiff"}                                                              | ${"pic"}
    ${"text/plain"}                                                              | ${"file"}
    ${"malformed-mimetype"}                                                      | ${"file"}
    ${"malformed/mime/type"}                                                     | ${"file"}
    ${""}                                                                        | ${"file"}
    ${undefined}                                                                 | ${"file"}
    ${null}                                                                      | ${"file"}
`("should have correct icon for $mimeType", ({ mimeType, expected }) => {
    const wrapper = createWrapper({
        props: {
            mimeType,
        },
    });
    const icon = wrapper.get("f-icon-stub:nth-child(2)").element;
    expect(icon.getAttribute("name")).toEqual(expected);
});
