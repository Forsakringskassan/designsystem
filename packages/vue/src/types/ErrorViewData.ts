import { ErrorData } from "./ErrorData";

/**
 * @public
 */
export class ErrorViewData {
    public hasError: boolean;
    public payload?: ErrorData;

    public constructor(hasError = false, payload?: ErrorData) {
        this.hasError = hasError;
        this.payload = payload;
    }
}
