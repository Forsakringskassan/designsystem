import { formStateSymbol } from "./state-symbol";

/**
 * @public
 */
export function setFormSubmitted(form: HTMLFormElement): void {
    form[formStateSymbol] = { submitted: true };
}

/**
 * @public
 */
export function resetFormSubmitted(form: HTMLFormElement): void {
    form[formStateSymbol] = { submitted: false };
}
