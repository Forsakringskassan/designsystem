import { nextTick } from "vue";
import { type ComponentValidityEvent, type FormErrorList } from "../../types";

type ComponentReferences =
    Record<string, ComponentValidityEvent> | Record<string, FormErrorList>;

/**
 * Clean inputs which doesn't exist in the DOM
 *
 * @internal
 */
export async function cleanUpElements(vm: {
    $el: Element;
    components: ComponentReferences;
}): Promise<void> {
    /* To be able to clean up validation errors after elements that have been
     * v-if:ed away (removed from DOM) the clean up needs to run after pending
     * DOM updates have been flushed, which they have once `nextTick()` resolves */
    await nextTick();
    for (const id of Object.keys(vm.components)) {
        const domElement = vm.$el.querySelector(`#${id}`);
        if (!domElement) {
            /* eslint-disable-next-line @typescript-eslint/no-dynamic-delete -- technical debt, this is potentially dangerous, should probably use a safer structure such as Map */
            delete vm.components[id];
        }
    }
}
