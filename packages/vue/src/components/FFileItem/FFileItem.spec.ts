import { config, shallowMount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import { TranslationPlugin } from "../../plugins";
import FFileItem from "./FFileItem.vue";

config.global.plugins = [TranslationPlugin];

describe("FileItem", () => {
    it("should match snapshot with slots", () => {
        expect.assertions(1);
        const wrapper = shallowMount(FFileItem, {
            props: {
                id: "123",
                fileName: "foo.bar",
                mimeType: "application/pdf",
                originalMimeType: "application/pdf",
            },
            slots: {
                row: "file item goes here",
                default: "progress is 80%",
            },
        });
        expect(wrapper.element).toMatchSnapshot();
    });

    it("should pass attributes", () => {
        expect.assertions(2);
        const wrapper = shallowMount(FFileItem, {
            props: {
                id: "123",
                fileName: "foo.bar",
                mimeType: "application/pdf",
                originalMimeType: "application/pdf",
            },
            attrs: {
                disabled: "disabled",
            },
        });
        const aTag = wrapper.get(".file-item__file-open");
        expect(aTag.attributes("disabled")).toBeDefined();
        expect(wrapper.element).toMatchSnapshot();
    });

    it("should pass listeners", async () => {
        expect.assertions(1);
        const foobar = vi.fn();
        const wrapper = shallowMount(FFileItem, {
            props: { fileName: "foo.bar" },
            attrs: { onFoobar: foobar },
        });
        const element = wrapper.get(".file-item__file-open");
        await element.trigger("foobar");
        expect(foobar).toHaveBeenCalled();
    });

    it("should show info when server changed type", () => {
        expect.assertions(1);
        const wrapper = shallowMount(FFileItem, {
            props: {
                fileName: "foo.bar",
                mimeType: "application/pdf",
                originalMimeType: "image/png",
            },
        });
        const element = wrapper.get(".file-item__change-info");
        expect(element.text()).toContain("(png ändrad till pdf)");
    });

    it("should show custom info when server changed type", () => {
        expect.assertions(1);
        const wrapper = shallowMount(FFileItem, {
            props: {
                fileName: "foo.bar",
                mimeType: "application/pdf",
                originalMimeType: "image/png",
                changedMimeTypeText: "(%before% changed to %after%)",
            },
        });
        const element = wrapper.get(".file-item__change-info");
        expect(element.text()).toContain("(png changed to pdf)");
    });

    it("should match snapshots without slots", () => {
        expect.assertions(1);
        const wrapper = shallowMount(FFileItem, {
            props: {
                id: "123",
                fileName: "foo.bar",
                mimeType: "application/pdf",
            },
        });
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
    expect.assertions(1);
    const wrapper = shallowMount(FFileItem, {
        props: {
            fileName: "foo.bar",
            mimeType,
        },
    });
    const icon = wrapper.get("f-icon-stub").element;
    expect(icon.getAttribute("name")).toEqual(expected);
});
