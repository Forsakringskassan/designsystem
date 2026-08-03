import { type VueWrapper, mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import FDefinitionList from "./FDefinitionList.vue";
import { type FDefinitionListItem } from "./f-definition-list-item";

const definitions = [
    { term: "Term 1", definition: "Description 1" },
    { term: "Term 2", definition: "Description 2" },
];

function createWrapper(definitions: FDefinitionListItem[]): VueWrapper {
    /* eslint-disable-next-line @typescript-eslint/no-unsafe-return -- technical debt */
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
        }: {
            numberOfDefinitions: number;
            expectedDlElements: number;
            expectedDtElements: number;
            expectedDdElements: number;
        }) => {
            expect.hasAssertions();
            // Create wrapper
            const wrapper = createWrapper(
                definitions.slice(0, numberOfDefinitions),
            );

            // Expections - `dl`
            expect(wrapper.findAll("dl")).toHaveLength(expectedDlElements);

            // Exceptions - `dt`
            const dtElements = wrapper.findAll("dt");
            expect(dtElements).toHaveLength(expectedDtElements);
            for (const [index, dtElement] of dtElements.entries()) {
                expect(dtElement.text()).toBe(definitions[index].term);
            }

            // Exceptions - `dd`
            const ddElements = wrapper.findAll("dd");
            expect(ddElements).toHaveLength(expectedDdElements);
            for (const [index, ddElement] of ddElements.entries()) {
                expect(ddElement.text()).toBe(definitions[index].definition);
            }
        },
    );
});
