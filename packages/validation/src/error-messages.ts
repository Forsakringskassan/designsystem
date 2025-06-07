import { getCandidates } from "./get-candidates";
import { type ValidationState } from "./validation-state";

let errorMessages: Record<string, string> = {};

/**
 * @internal
 */
export function getErrorMessage(
    target: Pick<ValidationState<unknown, unknown>, "validators">,
    name: string,
    code: string,
): string {
    const validators = Object.values(target.validators).map((it) => it[0]);
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
