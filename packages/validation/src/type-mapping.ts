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
 * @internal
 */
export type ValidatorName = keyof ValidatorTypeMapping;

/**
 * Type with mapping between validator name and configuration.
 *
 * @internal
 */
export type ValidatorConfig<K extends ValidatorName> =
    ValidatorTypeMapping[K]["config"];

/**
 * Type with mapping between validator name and error codes.
 *
 * @internal
 */
export type ValidatorCode<K extends ValidatorName> =
    ValidatorTypeMapping[K]["codes"];
