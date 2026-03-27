import "html-validate/jest";
import { VueWrapper, mount } from "@vue/test-utils";
import FLabel from "./FLabel.vue";

function createWrapper({ slots = {} } = {}): VueWrapper {
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
        const wrapper = createWrapper({
            slots: {
                default: "LABEL_TEXT",
            },
        });

        expect(wrapper.element).toMatchSnapshot();
    });

    it("should match snapshot with one label element containing the default, description and error-message slots", () => {
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
        const wrapper = createWrapper({
            slots: {
                default: "LABEL_TEXT",
                tooltip: "TOOLTIP",
            },
        });

        expect(wrapper.element).toMatchSnapshot();
    });

    it("should match snapshot with a second label element containing the error-message slot", () => {
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
    it.each`
        html
        ${"<f-label>Label</f-label>"}
        ${'<f-label><template #tooltip><f-tooltip screen-reader-text="Read more about FLabel"></f-tooltip></template></f-label>'}
        ${"<f-label><template #tooltip><slot></slot></template></f-label>"}
        ${'<f-label for="number-input"></f-label>'}
    `("$html should be valid", ({ html }) => {
        expect.assertions(1);

        expect(html).toHTMLValidate();
    });

    it.each`
        html
        ${"<f-label><template #tooltip><div /></template></f-label>"}
        ${'<f-label for="00-number-input"></f-label>'}
        ${'<f-label for="number input"></f-label>'}
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
