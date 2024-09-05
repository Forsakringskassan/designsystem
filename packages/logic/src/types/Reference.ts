/**
 * @public
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any -- technical debt
export class Reference<T extends Record<string, any>> {
    public readonly ref: T = {} as T;

    public constructor(ref: T) {
        Object.assign(this.ref, ref);
    }
}
