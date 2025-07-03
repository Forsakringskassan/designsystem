import { type ValidatorTypeMapping, type ValidatorName } from "./type-mapping";

/**
 * @public
 */
export interface TypedValidatorContext<K extends ValidatorName> {
    readonly config: ValidatorTypeMapping[K]["config"];
    readonly element: HTMLElement;
}

/**
 * @public
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
