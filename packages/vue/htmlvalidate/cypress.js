module.exports = [
    /* file-selector uses aria-hidden on label in a "clever" way which works in
     * practice but yields false positives */
    ".file-selector input",

    /* file-selector uses a label with role="button" as a last resort to styling
     * it properly */
    ".file-selector label",

    /* FList uses a ul with role="select" */
    "ul.list",

    /* ICalendar misuses aria-label */
    ".calendar ul[aria-label]",

    /* FWizardStep uses an anchor with role="button" for completed steps */
    ".wizard-step__header__title",
];
