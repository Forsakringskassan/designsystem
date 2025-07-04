import { componentStateSymbol } from "./state-symbol";
import { type ValidatorConfigMapping } from "./types";
import { internalValidate } from "./validate-element";

/** @public */
export interface EnableValidationOptionsSimple {
    getViewValue(): string | null | undefined;
    getModelValue(): string;
    getConfiguration(): ValidatorConfigMapping;
    parser?(value: string): string | undefined;
    formatter?(value: string): string | undefined;
    event: string[];
}

/** @public */
export interface EnableValidationOptionsParsed<TValue, TModel> {
    getViewValue(): TValue | undefined;
    getModelValue(): TModel | undefined;
    getConfiguration(): ValidatorConfigMapping;
    parser(value: TValue): TModel | undefined;
    formatter(value: TModel): TValue | undefined;
    event: string[];
}

/** @public */
export type EnableValidationOptions<TValue, TModel> =
    | EnableValidationOptionsSimple
    | EnableValidationOptionsParsed<TValue, TModel>;

/**
 * @public
 */
export function enableValidation<TValue, TModel>(
    element: HTMLElement | null,
    target: EnableValidationOptions<TValue, TModel>,
): void {
    if (!element) {
        return;
    }

    const existing = element[componentStateSymbol];
    if (existing) {
        throw new Error("validation already enabled on element");
    }

    element[componentStateSymbol] = {
        getViewValue: target.getViewValue,
        getModelValue: target.getModelValue,
        getConfiguration: target.getConfiguration,
        parser: target.parser ?? ((value) => value),
        formatter: target.formatter ?? ((value) => value),
    };

    for (const event of target.event) {
        element.addEventListener(event, () => {
            internalValidate(element);
        });
    }

    element.setAttribute("data-validation", "");
}
