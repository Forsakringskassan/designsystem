/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging -- technical
 * debt, the class and the interface should not have the same name */

import { ErrorItem } from "./FErrorList";

/**
 * @public
 */
export interface FormErrorList extends ErrorItem {
    // ? These fields are used in error list
    focusElementId?: string;
    id: string;
    isValid: boolean;
    numberOfTimesSubmitted: number;
    title: string;
}

/**
 * @public
 */
export class FormErrorList implements FormErrorList {
    public focusElementId? = "";
    public id = "";
    public isValid = false;
    public numberOfTimesSubmitted = 0;
    public title = "";

    public constructor(fields: FormErrorList) {
        Object.assign(this, fields);
    }
}
