import { type DefaultCypressChainable } from "@fkui/vue/cypress";

export class ErrorPluginPageobject {
    public get generateError(): DefaultCypressChainable {
        return cy.get(`[data-test="generate-error"]`);
    }

    public get generateWarning(): DefaultCypressChainable {
        return cy.get(`[data-test="generate-warning"]`);
    }

    public get errorPage(): DefaultCypressChainable {
        return cy.get(`[data-test="f-error-page"]`);
    }
}
