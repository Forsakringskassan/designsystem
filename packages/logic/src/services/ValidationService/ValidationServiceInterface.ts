import { type Validator, type ValidatorName } from "./Validator";

/**
 * @public
 */
export type ValidatableHTMLElement =
    | HTMLDivElement
    | HTMLInputElement
    | HTMLTextAreaElement
    | HTMLSelectElement
    | HTMLFieldSetElement;

/**
 * Describes the configuration of a validator.
 *
 * @public
 */
export type ValidatorConfig = Record<
    string,
    string | number | boolean | string[] | unknown[]
> &
    ValidatorOptions;

/**
 * @public
 */
export interface ValidatorOptions {
    /**
     * Custom error message.
     */
    errorMessage?: string;
    /**
     * If the validator should validate on each change.
     */
    instant?: boolean;
    /**
     * If the validator should validate/run.
     */
    enabled?: boolean;
}

/**
 * Describes the configuration of several validators,
 * e.g `{ 'maxLength': { 'length: 13 }, 'minLength' { 'length: 12 }}`
 *
 * @public
 */
export type ValidatorConfigs = Record<
    ValidatorName | string,
    ValidatorConfig | undefined
>;

/**
 * @public
 */
export type ValidityMode = "INITIAL" | "ERROR" | "VALID";

/**
 * @public
 */
export type ValidityNativeEvent = "input" | "change" | "blur" | "validate";

/**
 * Describes the event that is dispatched by the validator.
 *
 * @public
 */
export interface ValidityEvent {
    target: ValidatableHTMLElement;
    elementId: string;
    isValid: boolean;
    validationMessage: string;
    validityMode: ValidityMode;
    nativeEvent: ValidityNativeEvent;
}

/**
 * Result of {@link ValidationServiceInterface.validateElement}.
 *
 * @public
 */
export interface ValidationResult {
    /**
     * `true` if the element is valid and have no validation errors.
     */
    isValid: boolean;

    /**
     * `true` if the field has been touched, i.e. the user has interacted with
     * it.
     */
    isTouched: boolean;

    /**
     * `true` if the field has been submitted (or attempted to be submitted)
     */
    isSubmitted: boolean;

    /**
     * Validation error message.
     *
     * `null` if no validation error is present.
     */
    error: string | null;
}

/**
 *  Emitted when the validation configuration is updated and includes the current configuration.
 *
 * @public
 */
export interface ValidationConfigUpdateDetail {
    /** Current configuration */
    config: ValidatorConfigs;
}

/**
 * Describes the event that is dispatched during input if no instant validation.
 *
 * @public
 */
/* eslint-disable-next-line @typescript-eslint/no-empty-object-type -- technical debt */
export interface PendingValidityEvent {}

/**
 * Event used to trigger validation.
 *
 * @public
 */
/* eslint-disable-next-line @typescript-eslint/no-empty-object-type -- technical debt */
export interface ValidateEvent {}

/**
 * Describes the initial state of the validator.
 * @see {@link ValidationServiceInterface} setState
 *
 * @public
 */
export interface ValidationState {
    touched?: boolean;
    submitted?: boolean;
    serverError?: string;
}

/**
 * @public
 */
export interface ElementValidatorsReference {
    validators: Validator[];
    validatorConfigs: ValidatorConfigs;
    baseValidatorConfigs?: ValidatorConfigs;
    element: ValidatableHTMLElement;
    instant: boolean;
}

declare global {
    interface HTMLElementEventMap {
        validate: CustomEvent<ValidateEvent>;
        validity: CustomEvent<ValidityEvent>;
    }
}

/**
 * @public
 */
export interface ValidationServiceInterface {
    /**
     * @internal
     * @deprecated Never meant for public consumption.
     */
    getElementsAndValidators(): Record<string, ElementValidatorsReference>;

    /**
     * Whether any of the fields are touched
     */
    readonly isAnyTouched: boolean;

    /**
     * Translations for validators.
     *
     * @internal
     */
    validationErrorMessages: Record<ValidatorName, string | undefined>;

    /**
     * Resolves validity mode when error
     *
     * @internal
     */
    resolveValidityModeWhenError(
        element: ValidatableHTMLElement,
        touched?: boolean,
        submitted?: boolean,
    ): ValidityMode;

    /**
     * Check if given element(s) are valid.
     *
     * When passing multiple elements all of them must be valid. For non-input
     * elements (fieldsets, divs, etc) it checks whenever all descendants are
     * valid. Returns `true` if array is empty.
     *
     * Note: this function does not update the validity state (i.e. run
     * validators) but only checks the current state! Use
     * {@link ValidationServiceInterface.validateElement} to update state.
     *
     * @public
     * @deprecated Use {@link ValidationServiceInterface.validateElement} instead.
     * @param src - Element instance or id.
     * @param root - Element (or document) to query when looking up elements by id.
     * @returns Resolves to `true` if all given elements (or descendants) are valid. Empty array resolves to `true`.
     */
    isValid(
        src: string | string[] | Element | Element[] | null,
        root?: Document | Element,
    ): Promise<boolean>;

    /**
     * Add translations for validators.
     * New translations will be merged with existing
     * translations and overwritten if they already exists.
     * @see {@link ValidationErrorMessageBuilder}
     *
     * @public
     * @param validationErrorMessageMap - the map with translation for validators
     */
    addValidationErrorMessages(
        validationErrorMessageMap: Record<ValidatorName | string, string>,
    ): void;

    /**
     * Register a validator.
     * To be used when a customer validator is needed.
     *
     * @param validator - the validator to register
     */
    registerValidator<TConfig = ValidatorConfig>(
        validator: Validator<TConfig>,
    ): void;

    /**
     * Remove element from ValidationService.
     *
     * @param element - Element to remove validators from.
     */
    removeValidatorsFromElement(element: ValidatableHTMLElement): void;

    /**
     * Add validators to an element.
     *
     * @param element - the element to add validator to
     * @param validatorConfigs - the defintion of validators to be addede.
     * @param isBaseConfigs - is a boolean which indicates if this configuration
     * should always lay as a base configuration even if overlaying code is
     * changing its validators.
     *
     * As an example there is FEmailTextField which sets its own EmailValidator
     * in the constructor. Then the app-code can add its own validatorsConfig on
     * top of that (example: `required: { enabled: $someValue } }`). Setting
     * isBaseConfigs to true preserves the validatorConfig set by
     * FEmailTextField as the app code changes the required validatorConfig
     * (which triggers `addValidatorsToElement()` again)
     *
     * @see {@link ValidityEvent} dispatched during blur and change
     * @see {@link PendingValidityEvent} dispatched during input
     */
    addValidatorsToElement(
        element: ValidatableHTMLElement,
        validatorConfigs: ValidatorConfigs,
        isBaseConfigs?: boolean,
    ): void;

    /**
     * Set or update validation state on element(s).
     *
     * Can be used to restore state after page reload, or to set all elements in
     * a subform to submitted.
     *
     * If passed element is a not a validatable element, the state of all
     * validatable children is updated instead.
     *
     * @see {@link ValidityEvent} validityMode
     *
     * @public
     * @deprecated Use {@link ValidationServiceInterface.setSubmitted},
     * {@link ValidationServiceInterface.setTouched},
     * {@link ValidationServiceInterface.setError},
     * {@link ValidationServiceInterface.resetState} or request a specific
     * function is added if you have another use-case.
     * @param element - Element instance or id
     * @param validationState - The state to be set
     */
    setState(
        element: string | Element | null,
        validationState: ValidationState,
    ): void;

    /**
     * Set `submitted` flag on the given Element.
     *
     * If passed element is not a validatable element the state of all
     * validatable children is updated instead.
     *
     * @public
     * @param element - Element instance or id.
     */
    setSubmitted(element: string | Element | null): void;

    /**
     * Set `touched` flag on the given Element.
     *
     * If passed element is not a validatable element the state of all
     * validatable children is updated instead.
     *
     * @public
     * @param element - Element instance or id.
     */
    setTouched(element: string | Element | null): void;

    /**
     * Set element as invalid with the given strnig as error message.
     *
     * @public
     * @param element - Element instance or id.
     * @param message - Error message to present.
     */
    setError(element: string | Element | null, message: string): void;

    /**
     * Reset validation status for given element
     * If passed element is a not a validatable element, the state of all validatable
     * children is updated instead.
     *
     * @param element - Element instance or id
     */
    resetState(element: string | Element | null): void;

    /**
     * Update validation status of given element.
     *
     * @public
     * @param element - Element instance or id. Element must be attached to `document`.
     */
    validateElement(
        element: string | Element | null,
    ): Promise<ValidationResult>;

    /**
     * Validate all validatable descendants of given element.
     *
     * @public
     * @param root - The top element to validate.
     */
    validateAllElements(root: string | Element): Promise<void>;

    /**
     * Clears all validation states.
     */
    clearAllStates(): void;

    /**
     * Gets a registered validator by its name, i.e., {@link Validator.name}.
     *
     * @public
     * @param name - The name of the validator to retrieve.
     * @returns The registered validator with the given name.
     * @throws Error if no validator has been registered by the provided name.
     */
    getValidatorByName<TConfig = ValidatorConfig>(
        name: ValidatorName,
    ): Validator<TConfig>;
}
