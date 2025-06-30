import { type ValidatorConfigMapping } from "./types";

/**
 * Internal state for validation service.
 *
 * @internal
 * @typeParam TValue - Type of the unparsed value (the raw value from the component).
 * @typeParam TModel - Type of the parsed value (the result of the parser function).
 * */
export interface ValidationState<TValue, TModel> {
    /** Get raw unparsed value from the component or `undefined` if no value could be retrieved at the moment. */
    getViewValue(): TValue | undefined;
    /** Get current model value from a component (mostly useful when referencing other components) */
    getModelValue(): TModel;
    /** Get current validator configuration */
    getConfiguration(): ValidatorConfigMapping;
    /** Function to parse view value to model value */
    parser(value: TValue): TModel;
    /** Function to format model value to view value */
    formatter(value: TModel): TValue;
}
