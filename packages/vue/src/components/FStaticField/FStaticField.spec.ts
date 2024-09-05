import { VueWrapper, mount } from "@vue/test-utils";
import FStaticField from "./FStaticField.vue";

function createWrapper({ slots = {} } = {}): VueWrapper {
    return mount(FStaticField, {
        slots: { ...slots },
    });
}

describe("snapshots", () => {
    it("should match snapshot with span and p", () => {
        const wrapper = createWrapper({
            slots: { label: "Heading", default: "En liten text" },
        });

        expect(wrapper.element).toMatchSnapshot();
    });

    it("should match snapshot with span, p and tooltip", () => {
        const wrapper = createWrapper({
            slots: {
                label: "Heading",
                tooltip: "TOOLTIP",
                default: "En liten text",
            },
        });

        expect(wrapper.element).toMatchSnapshot();
    });
});
