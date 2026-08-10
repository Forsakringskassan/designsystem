import type Cypress from "cypress";

/**
 * Initializes the cypress-split plugin using Cypress config values.
 * @see https://github.com/bahmutov/cypress-split
 */
declare function cypressSplit<T extends Cypress.PluginConfigOptions>(
    on: Cypress.PluginEvents,
    config: T,
): T;

export default cypressSplit;
