import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { FLabelSelectors } from "../../selectors";
import FStaticField from "./FStaticField.vue";

const { description, formatDescription } = FLabelSelectors();

describe("FStaticField", () => {
    it("should render label and output content from slots", () => {
        expect.assertions(2);
        const wrapper = mount(FStaticField, {
            slots: { label: "Heading", default: "En liten text" },
        });

        expect(wrapper.text()).toContain("Heading");
        expect(wrapper.get(".output-field__output").text()).toBe(
            "En liten text",
        );
    });

    it("should render tooltip content when provided", () => {
        expect.assertions(1);
        const wrapper = mount(FStaticField, {
            slots: {
                label: "Heading",
                tooltip: "TOOLTIP",
                default: "En liten text",
            },
        });

        expect(wrapper.text()).toContain("TOOLTIP");
    });

    it("should render description slot content when provided", () => {
        expect.assertions(2);
        const wrapper = mount(FStaticField, {
            slots: {
                label: "Heading",
                default: "En liten text",
                description: /* HTML */ `
                    <template
                        #description="{ descriptionClass, formatDescriptionClass }"
                    >
                        <span :class="descriptionClass">Description</span>
                        <span :class="formatDescriptionClass">Format</span>
                    </template>
                `,
            },
        });

        expect(wrapper.get(description()).text()).toBe("Description");
        expect(wrapper.get(formatDescription()).text()).toBe("Format");
    });
});
