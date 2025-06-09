import { componentStateSymbol } from "./state-symbol";
import { internalValidate } from "./validate-element";

/** @public */
export interface EnableValidationOptionsSimple {
    getViewValue(): string | null | undefined;
    getModelValue(): string;
    parser?(value: string): string;
    formatter?(value: string): string;
    event: string[];
}

/** @public */
export interface EnableValidationOptionsParsed<TValue, TModel> {
    getViewValue(): TValue | undefined;
    getModelValue(): TModel | undefined;
    parser(value: TValue): TModel;
    formatter(value: TModel): TValue;
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
    element: HTMLElement,
    target: EnableValidationOptions<TValue, TModel>,
): void {
    const existing = element[componentStateSymbol];
    if (existing && existing.placeholder === false) {
        throw new Error("validation already enabled on element");
    }

    element[componentStateSymbol] = {
        placeholder: false,
        getViewValue: target.getViewValue,
        getModelValue: target.getModelValue,
        parser: target.parser ?? ((value) => value),
        formatter: target.formatter ?? ((value) => value),
        validators: existing?.validators ?? [],
    };

    for (const event of target.event) {
        element.addEventListener(event, () => {
            internalValidate(element);
        });
    }

    element.setAttribute("data-validation", "");
}
