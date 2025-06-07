import { type ValidatorConfig, type ValidatorName } from "./type-mapping";

/**
 * @internal
 */
export interface TypedValidatorContext<K extends ValidatorName> {
    readonly config: ValidatorConfig<K>;
    readonly element: HTMLElement;
}

/**
 * @internal
 */
export interface UntypedValidatorContext {
    readonly config: unknown;
    readonly element: HTMLElement;
}

/**
 * @public
 */
export type ValidatorContext<K> = K extends ValidatorName
    ? TypedValidatorContext<K>
    : UntypedValidatorContext;
