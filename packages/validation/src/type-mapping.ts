/**
 * @public
 */
/* eslint-disable-next-line @typescript-eslint/no-empty-object-type -- intentionally empty, augmented by validator implementations */
export interface ValidatorTypeMapping {
    /* intentionally empty */
}

/**
 * Type union of all known validators.
 *
 * @public
 */
export type ValidatorName = keyof ValidatorTypeMapping & {};

/**
 * Type with mapping between validator name and error codes.
 *
 * @public
 */
export type ValidatorCode<K extends ValidatorName> =
    ValidatorTypeMapping[K]["codes"];
