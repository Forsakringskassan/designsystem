/**
 * @public
 */
export interface UpdateEventDetails<TValue = unknown, TModel = unknown> {
    isValid: boolean;

    validator: string;
    message: string;

    viewValue: TValue;
    modelValue?: TModel;
    formattedValue?: TValue;

    /** true if the form associated with the component has been attempted to be submitted */
    submitted: boolean;
}

/**
 * @public
 */
export type UpdateEvent<TValue = unknown, TModel = unknown> = CustomEvent<
    UpdateEventDetails<TValue, TModel>
>;
