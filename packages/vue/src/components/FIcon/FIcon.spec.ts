import { VueWrapper, mount } from "@vue/test-utils";
import {
    cjsResolver,
    FileSystemConfigLoader,
    HtmlValidate,
} from "html-validate/node";
import FIcon from "./FIcon.vue";
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
    slots = {},
    attrs = {},
} = {}): VueWrapper {
    return mount(FIcon, {
        attrs: { ...attrs },
        props: { name: "my-icon", ...props },
        slots: { ...slots },
    });
}

describe("snapshots", () => {
    it("should match snapshot and use prop name to set icon", () => {
        const wrapper = createWrapper();

        expect(wrapper.element).toMatchSnapshot();
    });

    it("should match snapshot when passing content to default slot", () => {
        const wrapper = createWrapper({
            slots: {
                default: /* HTML */ ` <title>FIcon test information</title> `,
            },
        });

        expect(wrapper.element).toMatchSnapshot();
    });
});

it("should set css classes", () => {
    expect.assertions(1);
    const wrapper = createWrapper();
    const classes = Array.from(wrapper.element.classList);
    expect(classes).toEqual(["icon", "f-icon-my-icon"]);
});

describe("props", () => {
    describe("flip", () => {
        describe("should set correct css class", () => {
            it.each`
                value           | expected
                ${"horizontal"} | ${"icon--flip-horizontal"}
                ${"vertical"}   | ${"icon--flip-vertical"}
            `("$value", ({ value, expected }) => {
                const wrapper = createWrapper({
                    props: {
                        flip: value,
                    },
                });
                const classes = wrapper.element.classList;
                expect(classes).toContain(expected);
            });
        });

        describe("html-validate", () => {
            it("should allow valid values", () => {
                expect.assertions(1);
                const markup = /* HTML */ `
                    <f-icon name="my-icon" flip="horizontal"></f-icon>
                    <f-icon name="my-icon" flip="vertical"></f-icon>
                `;
                const report = htmlvalidate.validateString(markup, "foo.html");
                expect(report).toBeValid();
            });

            it("should not allow invalid values", () => {
                expect.assertions(2);
                const markup = /* HTML */ `
                    <f-icon name="my-icon" flip="foo"></f-icon>
                `;
                const report = htmlvalidate.validateString(markup, "file.html");
                expect(report).toBeInvalid();
                expect(report).toHaveError(
                    "attribute-allowed-values",
                    'Attribute "flip" has invalid value "foo"',
                );
            });
        });
    });

    describe("rotate", () => {
        describe("should set correct css class", () => {
            it.each`
                value    | expected
                ${"90"}  | ${"icon--rotate-90"}
                ${"180"} | ${"icon--rotate-180"}
                ${"270"} | ${"icon--rotate-270"}
            `("$value", ({ value, expected }) => {
                const wrapper = createWrapper({
                    props: {
                        rotate: value,
                    },
                });
                const classes = wrapper.element.classList;
                expect(classes).toContain(expected);
            });
        });

        describe("html-validate", () => {
            it("should allow valid values", async () => {
                expect.assertions(1);
                const markup = /* HTML */ `
                    <f-icon name="my-icon" rotate="90"></f-icon>
                    <f-icon name="my-icon" rotate="180"></f-icon>
                    <f-icon name="my-icon" rotate="270"></f-icon>
                `;
                const report = await htmlvalidate.validateString(markup);
                expect(report).toBeValid();
            });

            it("should not allow arbitrary degrees", async () => {
                expect.assertions(2);
                const markup = /* HTML */ `
                    <f-icon name="my-icon" rotate="42"></f-icon>
                `;
                const report = await htmlvalidate.validateString(markup);
                expect(report).toBeInvalid();
                expect(report).toMatchInlineCodeframe(`
                    "error: Attribute "rotate" has invalid value "42" (attribute-allowed-values) at inline:2:52:
                      1 |
                    > 2 |                     <f-icon name="my-icon" rotate="42"></f-icon>
                        |                                                    ^^
                      3 |
                    Selector: f-icon"
                `);
            });

            it("should not allow invalid values", async () => {
                expect.assertions(2);
                const markup = /* HTML */ `
                    <f-icon name="my-icon" rotate="foo"></f-icon>
                `;
                const report = await htmlvalidate.validateString(markup);
                expect(report).toBeInvalid();
                expect(report).toMatchInlineCodeframe(`
                    "error: Attribute "rotate" has invalid value "foo" (attribute-allowed-values) at inline:2:52:
                      1 |
                    > 2 |                     <f-icon name="my-icon" rotate="foo"></f-icon>
                        |                                                    ^^^
                      3 |
                    Selector: f-icon"
                `);
            });
        });
    });
});

describe("aria-hidden", () => {
    it("should be true by default", () => {
        expect.assertions(1);
        const wrapper = createWrapper();
        const icon = wrapper.get(".icon");
        expect(icon.attributes("aria-hidden")).toBe("true");
    });

    it("should be undefined if slot is used", () => {
        expect.assertions(1);
        const wrapper = createWrapper({
            slots: {
                default: /* HTML */ ` <title>FIcon description</title> `,
            },
        });
        const icon = wrapper.get(".icon");
        expect(icon.attributes("aria-hidden")).toBeUndefined();
    });

    it("should be undefined if aria-label is set", () => {
        expect.assertions(1);
        const TestComponent = {
            components: { FIcon },
            template: /* HTML */ `
                <f-icon name="my-icon" aria-label="My awesome label"></f-icon>
            `,
        };
        const wrapper = mount(TestComponent);
        const icon = wrapper.get(".icon");
        expect(icon.attributes("aria-hidden")).toBeUndefined();
    });

    it("should be undefined if aria-labelledby is set", () => {
        expect.assertions(1);
        const TestComponent = {
            components: { FIcon },
            template: /* HTML */ `
                <div>
                    <f-icon name="my-icon" aria-labelledby="my-label"></f-icon>
                    <span id="my-label"> My awesome label </span>
                </div>
            `,
        };
        const wrapper = mount(TestComponent);
        const icon = wrapper.get(".icon");
        expect(icon.attributes("aria-hidden")).toBeUndefined();
    });

    it("should be undefined if aria-description is set", () => {
        expect.assertions(1);
        const TestComponent = {
            components: { FIcon },
            template: /* HTML */ `
                <div>
                    <f-icon
                        name="my-icon"
                        aria-description="My awesome description"
                    ></f-icon>
                </div>
            `,
        };
        const wrapper = mount(TestComponent);
        const icon = wrapper.get(".icon");
        expect(icon.attributes("aria-hidden")).toBeUndefined();
    });

    it("should be undefined if aria-describedby is set", () => {
        expect.assertions(1);
        const TestComponent = {
            components: { FIcon },
            template: /* HTML */ `
                <div>
                    <f-icon
                        name="my-icon"
                        aria-describedby="my-description"
                    ></f-icon>
                    <span id="my-description"> My awesome description </span>
                </div>
            `,
        };
        const wrapper = mount(TestComponent);
        const icon = wrapper.get(".icon");
        expect(icon.attributes("aria-hidden")).toBeUndefined();
    });
});
