import { type ValidatorTypeMapping } from "../type-mapping";
import { type ValidationConfig } from "../validation-config";

/**
 * @public
 */
export type ConfigEventDetails = {
    [K in keyof ValidatorTypeMapping]?: ValidationConfig<K>;
};

/**
 * @public
 */
export type ConfigEvent = CustomEvent<ConfigEventDetails>;
