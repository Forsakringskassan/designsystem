import { defineComponent } from "vue";
import { type VueWrapper, mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { type FormErrorList } from "../../types";
import { cleanUpElements } from "./form-utils";

type ComponentReference = Record<string, FormErrorList>;

const components = { myId: {} } as unknown as ComponentReference;
const componentsNotInDOM = { anotherId: {} } as unknown as ComponentReference;

function createWrapper(
    components: ComponentReference,
): VueWrapper<InstanceType<typeof TestComponent>> {
    const TestComponent = defineComponent({
        data() {
            return {
                components,
            };
        },
        template: "<div><input id='myId'></div>",
    });

    return mount(TestComponent);
}

describe("cleanUp", () => {
    it("should keep element in 'components' when in DOM", async () => {
        expect.assertions(1);
        const wrapper = createWrapper(components);

        await cleanUpElements(wrapper.vm);

        expect(wrapper.vm.$data.components).toMatchInlineSnapshot(`
            {
              "myId": {},
            }
        `);
    });

    it("should remove element from 'components' when not in DOM", async () => {
        expect.assertions(1);
        const wrapper = createWrapper(componentsNotInDOM);

        await cleanUpElements(wrapper.vm);

        expect(wrapper.vm.$data.components).toMatchInlineSnapshot(`{}`);
    });
});
