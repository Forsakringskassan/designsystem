import { type ComponentPublicInstance } from "vue";

/**
 * Finds and returns the parent component of given Vue component that matches given name.
 *
 * @public
 * @param vm - Component instance.
 * @param name - The name of the parent to be found.
 * @returns The found Vue component, otherwise undefined.
 */
export function findParentByName(
    vm: ComponentPublicInstance | undefined | null,
    name: string,
): ComponentPublicInstance | undefined {
    let current = vm;
    while (current) {
        if (current.$options.name === name) {
            return current;
        }
        current = current.$parent;
    }
    return undefined;
}
