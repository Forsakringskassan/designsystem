import { defineComponent } from "vue";
import { mount, VueWrapper } from "@vue/test-utils";
import { ComponentValidityEvent, FormErrorList } from "../../types";
import { cleanUpElements } from "./FormUtils";

type ComponentReference = Record<string, FormErrorList>;
type ComponentReferences =
    | Record<string, ComponentValidityEvent>
    | Record<string, FormErrorList>;
interface Special {
    $el: Element;
    components: ComponentReferences;
}

const components = { myId: {} } as unknown as ComponentReference;
const componentsNotInDOM = { anotherId: {} } as unknown as ComponentReference;

jest.useFakeTimers();

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
        const wrapper = createWrapper(components);

        cleanUpElements(wrapper.vm as unknown as Special);

        // Execute all setTimeout functions
        jest.runAllTimers();
        // Let vue update everything
        await wrapper.vm.$nextTick();

        expect(wrapper.vm.$data.components).toMatchInlineSnapshot(`
            {
              "myId": {},
            }
        `);
    });

    it("should remove element from 'components' when not in DOM", async () => {
        const wrapper = createWrapper(componentsNotInDOM);

        cleanUpElements(wrapper.vm as unknown as Special);

        // Execute all setTimeout functions
        jest.runAllTimers();
        // Let vue update everything
        await wrapper.vm.$nextTick();

        expect(wrapper.vm.$data.components).toMatchInlineSnapshot(`{}`);
    });
});
