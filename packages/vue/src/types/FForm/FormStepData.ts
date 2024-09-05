import { FormErrorList } from "./FormErrorList";

/**
 * @public
 */
export interface FormStepFields {
    isOpen: boolean;
    isAnyFieldTouched: boolean;
}

/**
 * @public
 */
export class FormStep implements FormErrorList, FormStepFields {
    public isOpen = false;
    public isAnyFieldTouched = false;

    public focusElementId? = "";
    public id = "";
    public isValid = false;
    public numberOfTimesSubmitted = 0;
    public title = "";

    public constructor(fields: FormStepFields) {
        Object.assign(this, fields);
    }
}
