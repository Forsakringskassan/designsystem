import { mount, VueWrapper } from "@vue/test-utils";
import { type ComponentPublicInstance, defineComponent } from "vue";
import { getParentByName } from "./get-parent-by-name";

const TEMPLATE_WITH_GRANDCHILD = /* HTML */ `
    <child-component ref="child"></child-component>
`;

const GrandchildComponent = defineComponent({
    name: "GrandchildComponent",
    template: /* HTML */ ` <span>Grandchild!</span> `,
});

const ChildComponent = defineComponent({
    name: "ChildComponent",
    components: { GrandchildComponent },
    template: /* HTML */ `
        <grandchild-component ref="grandchild"></grandchild-component>
    `,
});

function createWrapper(template: string): VueWrapper {
    const ParentComponent = defineComponent({
        name: "ParentComponent",
        components: { ChildComponent },
        template,
    });
    return mount(ParentComponent);
}

describe("getParentByName()", () => {
    let wrapper: VueWrapper;
    let child: ComponentPublicInstance;
    let grandchild: ComponentPublicInstance;

    beforeEach(() => {
        wrapper = createWrapper(TEMPLATE_WITH_GRANDCHILD);
        child = wrapper.vm.$refs["child"] as ComponentPublicInstance;
        grandchild = child.$refs["grandchild"] as ComponentPublicInstance;
    });

    it("should return given component if it has the given name", () => {
        const result = getParentByName(child, "ChildComponent");
        expect(result.$options.name).toBe("ChildComponent");
    });

    it("should throw error when given parent is missing", () => {
        expect(() =>
            getParentByName(grandchild, "NowhereToBeFoundComponent"),
        ).toThrow();
    });

    it("should throw error when given component is a root component", () => {
        expect(() => getParentByName(wrapper.vm, "Grandparent")).toThrow();
    });

    it("should return parent when found at last", () => {
        const result = getParentByName(grandchild, "ParentComponent");
        expect(result.$options.name).toBe("ParentComponent");
    });
});
