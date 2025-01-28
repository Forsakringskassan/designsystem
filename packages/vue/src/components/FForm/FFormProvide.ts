import { Reference } from "@fkui/logic";
import { FormErrorList } from "../../types";

/**
 * @public
 */
export const setRef = Symbol("setRef");

/**
 * @public
 */
export const getRef = Symbol("getRef");

/**
 * @public
 */
export const setIsOpen = Symbol("setIsOpen");

/**
 * Methods provided by FForm.
 *
 * @public
 */
export interface FFormProvider {
    [setRef](id: string, data: FormErrorList): void;
    [getRef](id: string): Reference<FormErrorList>;
}

/**
 * @public
 */
export function createFFormProvideOptions(vm: {
    components: Record<string, Reference<FormErrorList>>;
}): FFormProvider {
    const { components } = vm;
    return {
        [setRef](id: string, data: FormErrorList): void {
            components[id] = new Reference(data);
        },
        [getRef](id: string): Reference<FormErrorList> {
            return components[id];
        },
    };
}
