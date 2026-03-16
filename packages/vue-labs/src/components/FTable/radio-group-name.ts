import { type InjectionKey } from "vue";

let nextRadioGroupName = 0;

/**
 * @internal
 */
export const radioGroupNameKey = Symbol() as InjectionKey<string>;

/**
 * @internal
 */
export function getNextRadioGroupName(): string {
    return `ftable-radio-${nextRadioGroupName++}`;
}
