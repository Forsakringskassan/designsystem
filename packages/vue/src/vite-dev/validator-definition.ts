export interface ValidatorTypeMapping {
    number: {
        config: never;
        codes: never;
    };
    min: {
        config: {
            readonly value?: number;
        };
        codes: never;
    };
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

//interface ValidatorResult<K extends ValidatorName> {
//    readonly valid: boolean;
//    code: ValidatorCode<K>;
//}
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
    return { name, ...definition };
}
