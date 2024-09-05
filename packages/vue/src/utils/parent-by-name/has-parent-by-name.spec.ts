import { mount, VueWrapper } from "@vue/test-utils";
import { type ComponentPublicInstance, defineComponent } from "vue";
import { hasParentByName } from "./has-parent-by-name";

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

describe("hasParentByName()", () => {
    let wrapper: VueWrapper;
    let child: ComponentPublicInstance;
    let grandchild: ComponentPublicInstance;

    beforeEach(() => {
        wrapper = createWrapper(TEMPLATE_WITH_GRANDCHILD);
        child = wrapper.vm.$refs["child"] as ComponentPublicInstance;
        grandchild = child.$refs["grandchild"] as ComponentPublicInstance;
    });

    it("should return true if given component has the given name", () => {
        const result = hasParentByName(child, "ChildComponent");
        expect(result).toBe(true);
    });

    it("should return false when given parent is missing", () => {
        const result = hasParentByName(grandchild, "NowhereToBeFoundComponent");
        expect(result).toBe(false);
    });

    it("should return false when given component is a root component", () => {
        const result = hasParentByName(wrapper.vm, "Grandparent");
        expect(result).toBe(false);
    });

    it("should return true when parent is found at last", () => {
        const result = hasParentByName(grandchild, "ParentComponent");
        expect(result).toBe(true);
    });
});
