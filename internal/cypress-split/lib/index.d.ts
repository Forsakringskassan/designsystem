import type Cypress from "cypress";

/**
 * Initializes the cypress-split plugin using Cypress config values.
 * @see https://github.com/bahmutov/cypress-split
 */
declare function cypressSplit(
    on: Cypress.PluginEvents,
    config: Cypress.PluginConfigOptions,
): void;

export default cypressSplit;
