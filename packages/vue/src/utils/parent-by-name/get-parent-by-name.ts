import { type ComponentPublicInstance } from "vue";
import { findParentByName } from "./find-parent-by-name";

/**
 * Gets and returns the parent component of given Vue component that matches given name.
 *
 * @public
 * @param vm - Component instance.
 * @param name - The name of the parent to be found.
 * @returns The found Vue component.
 * @throws An error if parent by given name could not be found.
 */
export function getParentByName(
    vm: ComponentPublicInstance | undefined | null,
    name: string,
): ComponentPublicInstance | never {
    const parentVm = findParentByName(vm, name);
    if (parentVm === undefined) {
        throw new Error(
            `Unable to find parent component by given name '${name}'.`,
        );
    }
    return parentVm;
}
