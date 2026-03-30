import { type ErrorItem } from "../../types";

/**
 * @public
 */
export type BeforeNavigate = (item: ErrorItem) => void | Promise<void>;
