/* eslint-disable-next-line @typescript-eslint/no-empty-object-type -- intentionally empty */
export interface ValidationCodeMapping {
    /* intentionally empty */
}

interface ValidationValid {
    valid: true;
}

type ValidationInvalid<K extends string> = K extends keyof ValidationCodeMapping
    ? { valid: false; code: ValidationCodeMapping[K] }
    : { valid: false; code: unknown };

export type ValidatorResult<K extends string> =
    | ValidationValid
    | ValidationInvalid<K>;
