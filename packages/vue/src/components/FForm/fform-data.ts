import { Reference } from "@fkui/logic";
import { FormErrorList } from "../../types";

/**
 * @public
 */
export interface FFormData {
    errorMessageSlotClass: string[];
    components: Record<string, Reference<FormErrorList>>;
}
