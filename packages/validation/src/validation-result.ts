/**
 * The result of {@link validateElement}.
 *
 * @public
 */
export interface ValidationResult {
    /** True if there is no errors */
    readonly isValid: boolean;
    /** List of errors present */
    readonly errors: Array<{
        /** element the error belongs to */
        readonly element: HTMLElement;
        /** name of validator yielding the error */
        readonly validator: string;
        /** error message */
        readonly message: string;
    }>;
}
