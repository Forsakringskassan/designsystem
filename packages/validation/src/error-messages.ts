import { getCandidates } from "./get-candidates";
import { ValidatorName } from "./type-mapping";
import { type ValidationState } from "./validation-state";

let errorMessages: Record<string, string> = {};

/**
 * @internal
 */
export function getErrorMessage(
    validators: ValidatorName[],
    name: string,
    code: string,
): string {
    const candidates = getCandidates({ name, code }, validators, undefined);
    const key = candidates.find((it) => errorMessages[it]);
    return key ? errorMessages[key] : name;
}

/**
 * @public
 * @param texts - Updated error messages
 */
export function addErrorMessages(
    texts: Record<string, string>,
    { clear }: { clear?: boolean } = {},
): void {
    if (clear) {
        errorMessages = {};
    }
    errorMessages = { ...errorMessages, ...texts };
}
