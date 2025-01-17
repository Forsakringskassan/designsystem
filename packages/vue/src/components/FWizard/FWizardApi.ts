import { documentOrderComparator } from "@fkui/logic";
import { inject } from "vue";
import { type FValidationFormResult } from "../FValidationForm";

/**
 * @public
 */
export type FWizardKey = string | number | symbol | boolean;

/**
 * @public
 */
export type StepNumber = number;

/**
 * @public
 */
export interface FWizardStepDefinition {
    key: FWizardKey;
    element: Element;
    isOpen: boolean;
    stepNumber: number;

    /** Current open step or -1 if no step is open */
    currentOpen: StepNumber | -1;
}

/**
 * @public
 */
export interface FWizardValidationData {
    key: FWizardKey;
    totalSteps: number;
    stepNumber: number;
}

/**
 * @public
 */
export type FWizardValidationCallback = (
    wizardData?: FWizardValidationData,
) => FValidationFormResult;

/**
 * @public
 */
export interface FWizardApi {
    register(key: FWizardKey, element: Element): FWizardStepDefinition;
    unregister(key: FWizardKey): void;
    getStepCount(): number;
    openStep(step: FWizardStepDefinition): void;
    openNext(self: FWizardStepDefinition): void;
    cancel(isFinalStep: boolean): void;
    inheritedProps: {
        readonly headerTag: string;
        readonly disableInitialFocus: boolean;
    };
}

export function FWizardApiInjected(): FWizardApi {
    return {
        register: inject("register") as (
            key: FWizardKey,
            element: Element,
        ) => FWizardStepDefinition,
        unregister: inject("unregister") as (key: FWizardKey) => void,
        getStepCount: inject("getStepCount") as () => number,
        openStep: inject("openStep") as (step: FWizardStepDefinition) => void,
        openNext: inject("openNext") as (self: FWizardStepDefinition) => void,
        cancel: inject("cancel") as (isFinalStep: boolean) => void,
        inheritedProps: inject("inheritedProps") as {
            readonly headerTag: string;
            readonly disableInitialFocus: boolean;
        },
    };
}

function reindex(dst: FWizardStepDefinition[]): void {
    dst.sort((a, b) => documentOrderComparator(a.element, b.element));
    for (let i = 0; i < dst.length; i++) {
        dst[i].stepNumber = i + 1;
    }
}

/**
 * Add a step to step list.
 *
 * @internal
 */
export function addStep(
    dst: FWizardStepDefinition[],
    key: FWizardKey,
    element: Element,
): FWizardStepDefinition {
    const index = dst.findIndex((it) => it.key === key);
    if (index >= 0) {
        throw new Error(
            `An FWizardStep with key "${key.toString()}" is already registered, refusing to register multiple steps with same key.`,
        );
    }
    const step: FWizardStepDefinition = {
        key,
        element,
        stepNumber: -1 /* updated by reindex() later */,
        isOpen: false,
        currentOpen: -1,
    };
    dst.push(step);
    reindex(dst);
    return step;
}

/**
 * Remove a step from step list.
 *
 * @internal
 */
export function removeStep(
    dst: FWizardStepDefinition[],
    key: FWizardKey,
): void {
    const index = dst.findIndex((it) => it.key === key);
    if (index >= 0) {
        dst.splice(index, 1);
        reindex(dst);
    }
}
