/**
 * Decorates an original error with more information while
 * keeping the original intact.
 *
 * @public
 */
export class DecoratedError extends Error {
    public cause: Error;

    public constructor(message: string, cause: Error) {
        super(message);
        Object.setPrototypeOf(this, DecoratedError.prototype);
        this.stack += `\nCaused by: ${cause.stack}`;
        this.cause = cause;
    }

    /**
     * Get the direct cause of this error, the one that triggered
     * this error.
     */
    public getCause(): Error {
        return this.cause;
    }

    /**
     * Get the root cause of this error, the first error that occured.
     */
    public getRootCause(): Error {
        const cause = this.cause;
        if (cause instanceof DecoratedError) {
            return cause.getRootCause();
        }
        return cause;
    }
}
