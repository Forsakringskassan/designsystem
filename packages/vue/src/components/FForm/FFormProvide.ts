import { Reference } from "@fkui/logic";
import { FormErrorList, FormStep } from "../../types";
import { isFormStepReference } from "./FormUtils";

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
    [setRef](id: string, data: FormErrorList | FormStep): void;
    [getRef](id: string): Reference<FormErrorList | FormStep>;
    [setIsOpen](id: string, isOpen: boolean): void;
}

/**
 * @public
 */
export function createFFormProvideOptions(vm: {
    components: Record<string, Reference<FormErrorList | FormStep>>;
}): FFormProvider {
    const { components } = vm;
    return {
        [setRef](id: string, data: FormErrorList | FormStep): void {
            components[id] = new Reference(data);
        },
        [getRef](id: string): Reference<FormErrorList | FormStep> {
            return components[id];
        },
        [setIsOpen](id: string, isOpen: boolean): void {
            const steps = Object.values(components).filter(isFormStepReference);
            for (const step of steps) {
                step.ref.isOpen = false;
            }

            const step = components[id];
            if (isFormStepReference(step)) {
                step.ref.isOpen = isOpen;
            }
        },
    };
}
