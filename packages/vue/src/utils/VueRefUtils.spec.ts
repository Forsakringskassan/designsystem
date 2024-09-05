import { defineComponent } from "vue";
import { VueWrapper, mount } from "@vue/test-utils";
import {
    refIsElement,
    refIsElementArray,
    refIsHTMLElementArray,
    refIsVue,
    refIsVueArray,
    getElementsFromVueRef,
    findElementFromVueRef,
    getElementFromVueRef,
    getHTMLElementFromVueRef,
    getHTMLElementsFromVueRef,
    getSortedHTMLElementsFromVueRef,
} from "./VueRefUtils";

const REF_NAME = "myReference";
const TEMPLATE_WITHOUT_A_REF = /* HTML */ `
    <div><p>Lonely in the abyss.</p></div>
`;
const TEMPLATE_WITH_AN_ELEMENT_REF = /* HTML */ `
    <div><svg ref="${REF_NAME}">Find me!</svg></div>
`;
const TEMPLATE_WITH_AN_HTMLELEMENT_REF = /* HTML */ `
    <div><p ref="${REF_NAME}">Find me!</p></div>
`;
const TEMPLATE_WITH_AN_ELEMENT_ARRAY_REF = /* HTML */ `
    <ul>
        <li v-for="item in ['1', '2', '3', '4']" ref="${REF_NAME}">
            {{ item }}
        </li>
    </ul>
`;
const TEMPLATE_WITH_AN_INDEXED_ELEMENT_ARRAY_REF = /* HTML */ `
    <ul>
        <li
            v-for="(item, index) in ['1', '2', '3', '4']"
            ref="${REF_NAME}"
            :data-ref-index="index"
        >
            {{ item }}
        </li>
    </ul>
`;
const TEMPLATE_WITH_A_COMPONENT_REF = /* HTML */ `
    <div><child-component ref="${REF_NAME}" message="Find me!" /></div>
`;
const TEMPLATE_WITH_A_COMPONENT_ARRAY_REF = /* HTML */ `
    <ul>
        <li v-for="item in ['1', '2', '3', '4']">
            <child-component :message="item" ref="${REF_NAME}" />
        </li>
    </ul>
`;

const ChildComponent = defineComponent({
    name: "ChildComponent",
    template: /* HTML */ ` <span>{{ message }}</span> `,
    props: {
        message: {
            type: String,
            default: "I have nothing to say.",
        },
    },
});

function createWrapper(template: string): VueWrapper {
    const TestComponent = defineComponent({
        name: "TestComponent",
        components: { ChildComponent },
        template,
    });

    return mount(TestComponent);
}

describe("refIsElement", () => {
    it.each`
        template                               | expected | description
        ${TEMPLATE_WITHOUT_A_REF}              | ${false} | ${"ref does not exist"}
        ${TEMPLATE_WITH_AN_ELEMENT_REF}        | ${true}  | ${"ref is an Element"}
        ${TEMPLATE_WITH_AN_ELEMENT_ARRAY_REF}  | ${false} | ${"ref is an Element array"}
        ${TEMPLATE_WITH_A_COMPONENT_REF}       | ${false} | ${"ref is a Vue component"}
        ${TEMPLATE_WITH_A_COMPONENT_ARRAY_REF} | ${false} | ${"ref is an array of Vue components"}
    `("should return $expected if $description", ({ template, expected }) => {
        const wrapper = createWrapper(template);

        const ref = wrapper.vm.$refs[REF_NAME];
        const result = refIsElement(ref);

        expect(result).toEqual(expected);
    });
});

describe("refIsElementArray", () => {
    it.each`
        template                               | expected | description
        ${TEMPLATE_WITHOUT_A_REF}              | ${false} | ${"ref does not exist"}
        ${TEMPLATE_WITH_AN_ELEMENT_REF}        | ${false} | ${"ref is an Element"}
        ${TEMPLATE_WITH_AN_ELEMENT_ARRAY_REF}  | ${true}  | ${"ref is an Element array"}
        ${TEMPLATE_WITH_A_COMPONENT_REF}       | ${false} | ${"ref is a Vue component"}
        ${TEMPLATE_WITH_A_COMPONENT_ARRAY_REF} | ${false} | ${"ref is an array of Vue components"}
    `("should return $expected if $description", ({ template, expected }) => {
        const wrapper = createWrapper(template);

        const ref = wrapper.vm.$refs[REF_NAME];
        const result = refIsElementArray(ref);

        expect(result).toEqual(expected);
    });
});

describe("refIsHTMLElementArray", () => {
    it.each`
        template                               | expected | description
        ${TEMPLATE_WITHOUT_A_REF}              | ${false} | ${"ref does not exist"}
        ${TEMPLATE_WITH_AN_ELEMENT_ARRAY_REF}  | ${true}  | ${"ref is an HTMLElement array"}
        ${TEMPLATE_WITH_A_COMPONENT_REF}       | ${false} | ${"ref is a Vue component"}
        ${TEMPLATE_WITH_A_COMPONENT_ARRAY_REF} | ${false} | ${"ref is an array of Vue components"}
    `("should return $expected if $description", ({ template, expected }) => {
        const wrapper = createWrapper(template);

        const ref = wrapper.vm.$refs[REF_NAME];
        const result = refIsHTMLElementArray(ref);

        expect(result).toEqual(expected);
    });
});

describe("refIsVue", () => {
    it.each`
        template                               | expected | description
        ${TEMPLATE_WITHOUT_A_REF}              | ${false} | ${"ref does not exist"}
        ${TEMPLATE_WITH_AN_ELEMENT_REF}        | ${false} | ${"ref is an Element"}
        ${TEMPLATE_WITH_AN_ELEMENT_ARRAY_REF}  | ${false} | ${"ref is an Element array"}
        ${TEMPLATE_WITH_A_COMPONENT_REF}       | ${true}  | ${"ref is a Vue component"}
        ${TEMPLATE_WITH_A_COMPONENT_ARRAY_REF} | ${false} | ${"ref is an array of Vue components"}
    `("should return $expected if $description", ({ template, expected }) => {
        const wrapper = createWrapper(template);

        const ref = wrapper.vm.$refs[REF_NAME];
        const result = refIsVue(ref);

        expect(result).toEqual(expected);
    });
});

describe("refIsVueArray", () => {
    it.each`
        template                               | expected | description
        ${TEMPLATE_WITHOUT_A_REF}              | ${false} | ${"ref does not exist"}
        ${TEMPLATE_WITH_AN_ELEMENT_REF}        | ${false} | ${"ref is an Element"}
        ${TEMPLATE_WITH_AN_ELEMENT_ARRAY_REF}  | ${false} | ${"ref is an Element array"}
        ${TEMPLATE_WITH_A_COMPONENT_REF}       | ${false} | ${"ref is a Vue component"}
        ${TEMPLATE_WITH_A_COMPONENT_ARRAY_REF} | ${true}  | ${"ref is an array of Vue components"}
    `("should return $expected if $description", ({ template, expected }) => {
        const wrapper = createWrapper(template);

        const ref = wrapper.vm.$refs[REF_NAME];
        const result = refIsVueArray(ref);

        expect(result).toEqual(expected);
    });
});

describe("getElementsFromVueRef", () => {
    it.each`
        template                               | description
        ${TEMPLATE_WITHOUT_A_REF}              | ${"ref does not exist"}
        ${TEMPLATE_WITH_AN_ELEMENT_REF}        | ${"ref is an Element"}
        ${TEMPLATE_WITH_AN_ELEMENT_ARRAY_REF}  | ${"ref is an Element array"}
        ${TEMPLATE_WITH_A_COMPONENT_REF}       | ${"ref is a Vue component"}
        ${TEMPLATE_WITH_A_COMPONENT_ARRAY_REF} | ${"ref is an array of Vue components"}
    `("should match snapshot if $description", ({ template }) => {
        const wrapper = createWrapper(template);

        const ref = wrapper.vm.$refs[REF_NAME];
        const result = getElementsFromVueRef(ref);

        expect(result).toMatchSnapshot();
    });
});

describe("getHTMLElementsFromVueRef", () => {
    it.each`
        template                               | description
        ${TEMPLATE_WITHOUT_A_REF}              | ${"ref does not exist"}
        ${TEMPLATE_WITH_AN_ELEMENT_ARRAY_REF}  | ${"ref is an HTMLElement array"}
        ${TEMPLATE_WITH_A_COMPONENT_REF}       | ${"ref is a Vue component"}
        ${TEMPLATE_WITH_A_COMPONENT_ARRAY_REF} | ${"ref is an array of Vue components"}
    `("should match snapshot if $description", ({ template }) => {
        const wrapper = createWrapper(template);

        const ref = wrapper.vm.$refs[REF_NAME];
        const result = getHTMLElementsFromVueRef(ref);

        expect(result).toMatchSnapshot();
    });
});

describe("getSortedHTMLElementsFromVueRef", () => {
    it("should return array with original order if ref is an unindexed HTMLElement array", () => {
        const wrapper = createWrapper(TEMPLATE_WITH_AN_ELEMENT_ARRAY_REF);
        const ref = [...(wrapper.vm.$refs[REF_NAME] as unknown[])];
        const unorderedRef = [...ref].reverse();
        expect(unorderedRef).not.toEqual(ref);

        const result = getSortedHTMLElementsFromVueRef(unorderedRef);

        expect(result).toEqual(unorderedRef);
    });
    it("should return sorted array if ref is an indexed HTMLElement array", () => {
        const wrapper = createWrapper(
            TEMPLATE_WITH_AN_INDEXED_ELEMENT_ARRAY_REF,
        );
        const ref = [...(wrapper.vm.$refs[REF_NAME] as unknown[])];
        const unorderedRef = [...ref].reverse();
        expect(unorderedRef).not.toEqual(ref);

        const result = getSortedHTMLElementsFromVueRef(unorderedRef);

        expect(result).toEqual(ref);
    });
});

describe("findElementFromVueRef", () => {
    it.each`
        template                               | description
        ${TEMPLATE_WITHOUT_A_REF}              | ${"ref does not exist"}
        ${TEMPLATE_WITH_AN_ELEMENT_REF}        | ${"ref is an Element"}
        ${TEMPLATE_WITH_AN_ELEMENT_ARRAY_REF}  | ${"ref is an Element array"}
        ${TEMPLATE_WITH_A_COMPONENT_REF}       | ${"ref is a Vue component"}
        ${TEMPLATE_WITH_A_COMPONENT_ARRAY_REF} | ${"ref is an array of Vue components"}
    `("should match snapshot if $description", ({ template }) => {
        const wrapper = createWrapper(template);

        const ref = wrapper.vm.$refs[REF_NAME];
        const result = findElementFromVueRef(ref);

        expect(result).toMatchSnapshot();
    });
});

describe("getElementFromVueRef", () => {
    it.each`
        template                               | description
        ${TEMPLATE_WITHOUT_A_REF}              | ${"ref does not exist"}
        ${TEMPLATE_WITH_AN_ELEMENT_ARRAY_REF}  | ${"ref is an Element array"}
        ${TEMPLATE_WITH_A_COMPONENT_ARRAY_REF} | ${"ref is an array of Vue components"}
    `("should throw error if $description", ({ template }) => {
        const wrapper = createWrapper(template);

        const ref = wrapper.vm.$refs[REF_NAME];

        const call = (): void => {
            getElementFromVueRef(ref);
        };

        expect(call).toThrow();
    });

    it.each`
        template                         | description
        ${TEMPLATE_WITH_AN_ELEMENT_REF}  | ${"ref is an Element"}
        ${TEMPLATE_WITH_A_COMPONENT_REF} | ${"ref is a Vue component"}
    `("should match snapshot if $description", ({ template }) => {
        const wrapper = createWrapper(template);

        const ref = wrapper.vm.$refs[REF_NAME];
        const result = getElementFromVueRef(ref);

        expect(result).toMatchSnapshot();
    });
});

describe("getHTMLElementFromVueRef", () => {
    it.each`
        template                               | description
        ${TEMPLATE_WITHOUT_A_REF}              | ${"ref does not exist"}
        ${TEMPLATE_WITH_AN_ELEMENT_ARRAY_REF}  | ${"ref is an Element array"}
        ${TEMPLATE_WITH_A_COMPONENT_ARRAY_REF} | ${"ref is an array of Vue components"}
        ${TEMPLATE_WITH_AN_ELEMENT_REF}        | ${"ref is an array of Vue components"}
    `("should throw error if $description", ({ template }) => {
        const wrapper = createWrapper(template);

        const ref = wrapper.vm.$refs[REF_NAME];

        const call = (): void => {
            getHTMLElementFromVueRef(ref);
        };

        expect(call).toThrow();
    });

    it.each`
        template                            | description
        ${TEMPLATE_WITH_AN_HTMLELEMENT_REF} | ${"ref is an Element"}
        ${TEMPLATE_WITH_A_COMPONENT_REF}    | ${"ref is a Vue component"}
    `("should match snapshot if $description", ({ template }) => {
        const wrapper = createWrapper(template);

        const ref = wrapper.vm.$refs[REF_NAME];
        const result = getHTMLElementFromVueRef(ref);

        expect(result).toMatchSnapshot();
    });
});
