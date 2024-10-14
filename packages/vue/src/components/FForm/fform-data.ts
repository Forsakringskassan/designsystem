import { Reference } from "@fkui/logic";
import { FormErrorList, FormStep } from "../../types";

/**
 * @public
 */
export interface FFormData {
    errorMessageSlotClass: string[];
    components: Record<string, Reference<FormErrorList | FormStep>>;
}
