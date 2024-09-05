declare global {
    /* eslint-disable-next-line @typescript-eslint/no-namespace -- module augmentation */
    namespace Cypress {
        /* eslint-disable-next-line @typescript-eslint/no-unused-vars -- to match Cypress */
        interface Chainable<Subject> {
            /**
             * @internal
             * @deprecated internal copy only for backwards compatibility
             */
            __fkui_internal_trimmedText(
                /* eslint-disable-next-line @typescript-eslint/no-explicit-any -- technical debt */
                options?: Record<string, any>,
            ): Chainable<string>;
        }
    }
}

/**
 * @internal
 */
export function getText(subject: Cypress.JQueryWithSelector): string {
    if (subject !== undefined) {
        return subject
            .get(0)
            .innerText.replace(/[\n]/gm, "")
            .replace(/\s+/g, " ")
            .replace(/(^\s|\s$)*/g, "");
    } else {
        return "";
    }
}

/**
 * @internal
 */
export function trimmedText(
    subject: Cypress.JQueryWithSelector,
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any -- technical debt */
    options: Record<string, any> | undefined = {},
): Cypress.Chainable<string> {
    const resolveText = (): Cypress.Chainable<string> => {
        /* @ts-expect-error technical debt */
        return Cypress.Promise.try(getText, subject).then((value) => {
            /* @ts-expect-error undocumented internal function */
            return cy.verifyUpcomingAssertions(value, options, {
                onRetry: resolveText,
            });
        });
    };

    return resolveText();
}

Cypress.Commands.add(
    "__fkui_internal_trimmedText",
    { prevSubject: "element" },
    trimmedText,
);
