/**
 * @public
 */
export interface UpdateEventDetails<TValue = unknown, TModel = unknown> {
    isValid: boolean;

    /* name of the validator with an error (empty string when isValid is false) */
    validator: string;

    /* validation error message (empty string when isValid is false) */
    message: string;

    /* viewValue represents the value provided by the user, e.g. the input value */
    viewValue: TValue;

    /* modelValue represents the parsed viewValue or undefined if the value is invalid or could not be parsed */
    modelValue: TModel | undefined;

    /* formattedValue represents the formatted modelValue or undefined if the value is invalid or could not be formatted */
    formattedValue: TValue | undefined;

    /** true if the form associated with the component has been attempted to be submitted */
    submitted: boolean;
}

/**
 * @public
 */
export type UpdateEvent<TValue = unknown, TModel = unknown> = CustomEvent<
    UpdateEventDetails<TValue, TModel>
>;
