declare global {
    /* eslint-disable-next-line @typescript-eslint/no-namespace -- module augmentation */
    namespace Cypress {
        /* eslint-disable-next-line @typescript-eslint/no-unused-vars -- to match Cypress */
        interface Chainable<Subject> {
            /**
             * Returns the node text with leading and trailing whitespace removed and
             * whitespace condensed to single space.
             *
             * Note: only text from the first element is returned.
             *
             * Note: all newlines are stripped, `foo\nbar` becomes "foobar and not
             * "foo bar" as one would expected.
             *
             * preferable use cy.get('selector').should("have.trimmedText", expectedString) instead of
             * cy.get('selector').trimmedText().should("be.equal", expectedString)
             */
            trimmedText(
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

Cypress.Commands.add("trimmedText", { prevSubject: "element" }, trimmedText);
