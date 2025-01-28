import { type ComponentValidityEvent, type FormErrorList } from "../../types";

type ComponentReferences =
    | Record<string, ComponentValidityEvent>
    | Record<string, FormErrorList>;

/**
 * Clean inputs which doesn't exist in the DOM
 *
 * @internal
 */
export function cleanUpElements(vm: {
    $el: Element;
    components: ComponentReferences;
}): Promise<void> {
    return new Promise((resolve) => {
        /**
         * To be able to clean up validation errors after elements that have been v-if:ed away (removed from DOM)
         * the clean up needs to be runned after DOM has been updated, thus setTimeout. $nextTick can't be
         * used due to only virtual DOM in Vue has been updated and not actual browse DOM.
         */
        window.setTimeout(() => {
            Object.keys(vm.components).forEach((id) => {
                const domElement = vm.$el.querySelector(`#${id}`);
                if (!domElement) {
                    /* eslint-disable-next-line @typescript-eslint/no-dynamic-delete -- technical debt, this is potentially dangerous, should probably use a safer structure such as Map */
                    delete vm.components[id];
                }
            });
            resolve();
        }, 0);
    });
}
