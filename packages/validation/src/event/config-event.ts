import { type ValidatorConfigMapping } from "../types";

/**
 * @public
 */
export type ConfigEventDetails = ValidatorConfigMapping;

/**
 * @public
 */
export type ConfigEvent = CustomEvent<ConfigEventDetails>;
