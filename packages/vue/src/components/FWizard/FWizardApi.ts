import { inject } from "vue";
import { documentOrderComparator } from "@fkui/logic";
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
    register(
        this: void,
        key: FWizardKey,
        element: Element,
    ): FWizardStepDefinition;
    unregister(this: void, key: FWizardKey): void;
    getStepCount(this: void): number;
    openStep(this: void, step: FWizardStepDefinition): void;
    openNext(this: void, self: FWizardStepDefinition): void;
    cancel(this: void, isFinalStep: boolean): void;
    inheritedProps: {
        readonly headerTag: string;
        readonly disableInitialFocus: boolean;
    };
}

export function FWizardApiInjected(): FWizardApi {
    return {
        /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- technical debt */
        register: inject("register")!,
        /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- technical debt */
        unregister: inject("unregister")!,
        /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- technical debt */
        getStepCount: inject("getStepCount")!,
        /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- technical debt */
        openStep: inject("openStep")!,
        /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- technical debt */
        openNext: inject("openNext")!,
        /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- technical debt */
        cancel: inject("cancel")!,
        /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- technical debt */
        inheritedProps: inject("inheritedProps")!,
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
