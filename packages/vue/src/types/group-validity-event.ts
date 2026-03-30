import { type ComponentValidityEvent } from "./component-validity-event";

/**
 * @public
 */
export interface GroupValidityEvent {
    isValid: boolean;
    componentsWithError: ComponentValidityEvent[];
    componentCount: number;
}
