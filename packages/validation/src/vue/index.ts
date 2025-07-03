export { type ValidationDirective, ValidationPlugin } from "./ValidationPlugin";
export { getConfigFromElement, setConfigToElement } from "./config";

import { type ValidatorConfigMapping } from "../types";
import { validationConfigSymbol } from "./config";

declare global {
    interface HTMLElement {
        [validationConfigSymbol]?: ValidatorConfigMapping
    }
}
