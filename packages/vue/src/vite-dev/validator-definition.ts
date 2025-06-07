/* eslint-disable-next-line @typescript-eslint/no-empty-object-type -- asdf */
export interface ValidatorTypeMapping {
/* intentionally empty */
}

export type ValidatorName = keyof ValidatorTypeMapping;
export type ValidatorConfig<K extends ValidatorName> =
    ValidatorTypeMapping[K]["config"];
export type ValidatorCode<K extends ValidatorName> =
    ValidatorTypeMapping[K]["codes"];

export type ValidatorContext<K> = K extends ValidatorName
    ? {
          readonly config: ValidatorConfig<K>;
          readonly element: HTMLElement;
      }
    : {
          readonly config: unknown;
          readonly element: HTMLElement;
      };

type ValidatorResult<K> = K extends ValidatorName
    ? ValidatorCode<K> extends never
        ? { valid: boolean }
        : { valid: boolean; code: ValidatorCode<K> }
    : { valid: boolean; code?: string };

export type UntypedValidatorCallback = (
    this: ValidatorContext<unknown>,
    value: unknown,
) => ValidatorResult<unknown>;

type ViewValueValidatorCallback<K extends ValidatorName, T> = (
    this: ValidatorContext<K>,
    value: T | null | undefined,
) => ValidatorResult<K>;

type ModelValueValidatorCallback<K extends ValidatorName, T> = (
    this: ValidatorContext<K>,
    value: T | null | undefined,
) => ValidatorResult<K>;

export interface Validator<K extends ValidatorName, TValue, TModel> {
    readonly name: K;
    validateViewValue?: ViewValueValidatorCallback<K, TValue>;
    validateModelValue?: ModelValueValidatorCallback<K, TModel>;
}

export interface UntypedValidator {
    readonly name: string;
    validateViewValue?: UntypedValidatorCallback;
    validateModelValue?: UntypedValidatorCallback;
}

export type UntypedViewValueValidator = UntypedValidator & {
    validateViewValue: UntypedValidatorCallback;
};

export type UntypedModelValueValidator = UntypedValidator & {
    validateModelValue: UntypedValidatorCallback;
};

export function defineValidator<K extends ValidatorName, TValue, TModel>(
    name: K,
    definition: Omit<Validator<K, TValue, TModel>, "name">,
): Validator<K, TValue, TModel> {
    const validator = { name, ...definition };
    availableValidators[name] = validator as UntypedValidator;
    return validator;
}

const availableValidators: Partial<Record<string, UntypedValidator>> = {};

export function getValidatorByname(name: string): UntypedValidator {
    const validator = availableValidators[name];
    if (!validator) {
        throw new Error(`no validator named "${name}"`);
    }
    return validator as UntypedValidator;
}
