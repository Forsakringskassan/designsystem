import "html-validate/vitest";
import { type VueWrapper, mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import FLabel from "./FLabel.vue";

function createWrapper({ slots = {} } = {}): VueWrapper {
    /* eslint-disable-next-line @typescript-eslint/no-unsafe-return -- technical debt */
    return mount(FLabel, {
        props: { for: "FOR_ID" },
        slots: { ...slots },
        global: {
            stubs: ["f-icon"],
        },
    });
}

describe("snapshots", () => {
    it("should match snapshot with one label element containing the default slot", () => {
        expect.assertions(1);
        const wrapper = createWrapper({
            slots: {
                default: "LABEL_TEXT",
            },
        });

        expect(wrapper.element).toMatchSnapshot();
    });

    it("should match snapshot with one label element containing the default, description and error-message slots", () => {
        expect.assertions(1);
        const wrapper = createWrapper({
            slots: {
                default: "LABEL_TEXT",
                description: "DESCRIPTION",
                "error-message": "ERRROR_MESSAGE",
            },
        });

        expect(wrapper.element).toMatchSnapshot();
    });

    it("should match snapshot with the tooltip slot rendered outside the label element", () => {
        expect.assertions(1);
        const wrapper = createWrapper({
            slots: {
                default: "LABEL_TEXT",
                tooltip: "TOOLTIP",
            },
        });

        expect(wrapper.element).toMatchSnapshot();
    });

    it("should match snapshot with a second label element containing the error-message slot", () => {
        expect.assertions(1);
        const wrapper = createWrapper({
            slots: {
                default: "LABEL_TEXT",
                tooltip: "TOOLTIP",
                "error-message": "ERROR_MESSAGE",
            },
        });

        expect(wrapper.element).toMatchSnapshot();
    });

    it("should match snapshot with a second label element containing the description and error-message slots", () => {
        expect.assertions(1);
        const wrapper = createWrapper({
            slots: {
                default: "LABEL_TEXT",
                tooltip: "TOOLTIP",
                description: "DESCRIPTION",
                "error-message": "ERROR_MESSAGE",
            },
        });

        expect(wrapper.element).toMatchSnapshot();
    });
});

describe("html-validate", () => {
    it("should be valid", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-label>Label</f-label>
            <f-label>
                <template #tooltip>
                    <f-tooltip
                        screen-reader-text="Read more about FLabel"
                    ></f-tooltip>
                </template>
            </f-label>
            <f-label>
                <template #tooltip> <slot></slot> </template>
            </f-label>
            <f-label for="number-input"></f-label>
        `;
        await expect(markup).toBeValid();
    });

    it("should be invalid", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-label>
                <template #tooltip> <div></div> </template>
            </f-label>
            <f-label for="00-number-input"></f-label>
            <f-label for="number input"></f-label>
        `;
        await expect(markup).toMatchInlineCodeframe(`
          "error: <div> element is not permitted as content under slot "tooltip" (<f-label>) (element-permitted-content)
            1 |
            2 |             <f-label>
          > 3 |                 <template #tooltip> <div></div> </template>
              |                                      ^^^
            4 |             </f-label>
            5 |             <f-label for="00-number-input"></f-label>
            6 |             <f-label for="number input"></f-label>
          Selector: f-label:nth-child(1) > template > div
          error: Attribute "for" has invalid value "00-number-input" (attribute-allowed-values)
            3 |                 <template #tooltip> <div></div> </template>
            4 |             </f-label>
          > 5 |             <f-label for="00-number-input"></f-label>
              |                           ^^^^^^^^^^^^^^^
            6 |             <f-label for="number input"></f-label>
            7 |
          Selector: f-label:nth-child(2)
          error: Attribute "for" has invalid value "number input" (attribute-allowed-values)
            4 |             </f-label>
            5 |             <f-label for="00-number-input"></f-label>
          > 6 |             <f-label for="number input"></f-label>
              |                           ^^^^^^^^^^^^
            7 |
          Selector: f-label:nth-child(3)"
        `);
    });
});
