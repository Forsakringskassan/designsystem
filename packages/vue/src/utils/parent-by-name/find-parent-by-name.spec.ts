import { mount, VueWrapper } from "@vue/test-utils";
import { type ComponentPublicInstance, defineComponent } from "vue";
import { findParentByName } from "./find-parent-by-name";

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

describe("findParentByName()", () => {
    let wrapper: VueWrapper;
    let child: ComponentPublicInstance;
    let grandchild: ComponentPublicInstance;

    beforeEach(() => {
        wrapper = createWrapper(TEMPLATE_WITH_GRANDCHILD);
        child = wrapper.vm.$refs["child"] as ComponentPublicInstance;
        grandchild = child.$refs["grandchild"] as ComponentPublicInstance;
    });

    it("should return given component if it has the given name", () => {
        const result = findParentByName(child, "ChildComponent");
        expect(result).toBeDefined();
        expect(result?.$options.name).toBe("ChildComponent");
    });

    it("should return undefined when given parent is missing", () => {
        const result = findParentByName(
            grandchild,
            "NowhereToBeFoundComponent",
        );
        expect(result).toBeUndefined();
    });

    it("should return undefined when given component is a root component", () => {
        const result = findParentByName(wrapper.vm, "Grandparent");
        expect(result).toBeUndefined();
    });

    it("should return parent when found at last", () => {
        const result = findParentByName(grandchild, "ParentComponent");
        expect(result).toBeDefined();
        expect(result?.$options.name).toBe("ParentComponent");
    });
});
