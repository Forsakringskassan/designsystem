import { VueWrapper, mount } from "@vue/test-utils";
import FDefinitionList from "./FDefinitionList.vue";
import { FDefinitionListItem } from "./FDefinitionListItem";

const definitions = [
    { term: "Term 1", description: "Description 1" },
    { term: "Term 2", description: "Description 2" },
];

function createWrapper(definitions: FDefinitionListItem[]): VueWrapper {
    return mount(FDefinitionList, {
        props: {
            definitions,
        },
    });
}

describe("expected DOM structures", () => {
    it.each`
        numberOfDefinitions | expectedDlElements | expectedDtElements | expectedDdElements
        ${0}                | ${1}               | ${0}               | ${0}
        ${1}                | ${1}               | ${1}               | ${1}
        ${2}                | ${1}               | ${2}               | ${2}
    `(
        "should when number of definitions is $numberOfDefinitions create $expectedDlElements `dl` elements, $expectedDtElements `dt` elements and $expectedDdElements `dd` elements",
        ({
            numberOfDefinitions,
            expectedDlElements,
            expectedDtElements,
            expectedDdElements,
        }) => {
            // Create wrapper
            const wrapper = createWrapper(
                definitions.slice(0, numberOfDefinitions),
            );

            // Expections - `dl`
            expect(wrapper.findAll("dl")).toHaveLength(expectedDlElements);

            // Exceptions - `dt`
            const dtElements = wrapper.findAll("dt");
            expect(dtElements).toHaveLength(expectedDtElements);
            dtElements.forEach((dtElement, index) =>
                expect(dtElement.text()).toBe(`${definitions[index].term}`),
            );

            // Exceptions - `dd`
            const ddElements = wrapper.findAll("dd");
            expect(ddElements).toHaveLength(expectedDdElements);
            ddElements.forEach((ddElement, index) =>
                expect(ddElement.text()).toBe(
                    `${definitions[index].description}`,
                ),
            );
        },
    );
});
