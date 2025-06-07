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
        readonly element: HTMLElement;
        readonly message: string;
    }>;
}
