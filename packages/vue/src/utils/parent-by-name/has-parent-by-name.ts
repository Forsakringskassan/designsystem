import { type ComponentPublicInstance } from "vue";
import { findParentByName } from "./find-parent-by-name";

/**
 * Checks if a given Vue component has a parent component with given name.
 *
 * @public
 * @param vm - Component instance.
 * @param name - The name of the parent to be found.
 * @returns `true` if parent component is found, otherwise `false`.
 */
export function hasParentByName(
    vm: ComponentPublicInstance | undefined | null,
    name: string,
): boolean {
    return findParentByName(vm, name) !== undefined;
}
