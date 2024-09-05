import { Reference, documentOrderComparator } from "@fkui/logic";
import { ComponentValidityEvent, FormErrorList, FormStep } from "../../types";

/**
 * @public
 */
export type ComponentReferences =
    | Record<string, ComponentValidityEvent>
    | Record<string, Reference<FormErrorList>>;

/**
 * @public
 */
export type ComponentValueTypes =
    | ComponentValidityEvent
    | Reference<FormErrorList>;

/**
 * Clean inputs which doesn't exist in the DOM
 *
 * @public
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

/**
 * Sorts errorlist based on the order of the elements in the DOM
 *
 * @public
 */
export function sortComponentsWithErrorsOnDOMOrder(
    componentList: ComponentReferences,
): ComponentValueTypes[] {
    const errorList = Object.values(componentList).filter((component) => {
        const validity =
            component instanceof Reference
                ? component.ref.isValid
                : component.validityMode;
        return typeof validity === "boolean"
            ? validity === false
            : validity === "ERROR";
    }) as ComponentValueTypes[];

    errorList.sort((a: ComponentValueTypes, b: ComponentValueTypes) => {
        const elementToCompareA =
            a instanceof Reference
                ? document.querySelector(`#${a.ref.id}`)
                : a.target;
        const elementToCompareB =
            b instanceof Reference
                ? document.querySelector(`#${b.ref.id}`)
                : b.target;
        return documentOrderComparator(elementToCompareA, elementToCompareB);
    });
    return errorList;
}

/**
 * Checks if reference is FormStep
 *
 * @public
 */
export function isFormStepReference(
    reference: Reference<FormErrorList | FormStep>,
): reference is Reference<FormStep> {
    return "isOpen" in reference.ref;
}
