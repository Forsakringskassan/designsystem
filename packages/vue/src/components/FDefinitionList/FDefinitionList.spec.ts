import { mount, VueWrapper } from "@vue/test-utils";
import FDefinitionList from "./FDefinitionList.vue";

const definitions = [
    { term: "Skulle ha jobbat", description: "8 timmar" },
    { term: "Vabbade", description: "8 timmar" },
    { term: "Omfattning", description: "100 procent" },
];

function createWrapper({ props = {} }): VueWrapper {
    return mount(FDefinitionList, {
        props: {
            definitions: definitions,
            ...props,
        },
    });
}

describe("snapshots", () => {
    it("should match snapshot with default settings", () => {
        const wrapper = createWrapper({});
        expect(wrapper.element).toMatchSnapshot();
    });

    it("should match snapshot with grid layout", () => {
        const wrapper = createWrapper({
            props: {
                aligned: true,
            },
        });
        expect(wrapper.element).toMatchSnapshot();
    });
});
