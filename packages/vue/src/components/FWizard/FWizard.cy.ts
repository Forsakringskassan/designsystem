import { defineComponent } from "vue";
import { FWizardPageobject, FWizardStepPageobject } from "../../cypress";
import { FValidationFormAction } from "../FValidationForm";
import FWizardTestComponent from "./examples/FWizardTestComponent.vue";
import FWizard from "./FWizard.vue";
import FWizardStep from "./FWizardStep.vue";

const TestComponent = defineComponent({
    template: /* HTML */ `
        <div>
            <div>Current step: <span id="current-step"> {{ step }} </span></div>
            <div>Event: <span id="event"> {{ event }} </span></div>
            <button type="button" id="toggle-step-2b" @click="step2B=!step2B">
                Toggle Step 2B
            </button>
            <button type="button" id="open-step-3" @click="step = 'STEP3'">
                Open Step 3
            </button>

            <f-wizard
                id="wizard"
                v-model="step"
                header-tag="h2"
                @cancel="onCancel"
                @completed="onCompleted"
            >
                <f-wizard-step title="TITLE_1" key="STEP1">
                    STEP_1_CONTENT
                </f-wizard-step>
                <f-wizard-step title="TITLE_2" key="STEP2">
                    STEP_2_CONTENT
                </f-wizard-step>
                <f-wizard-step v-if="step2B" title="TITLE_2B" key="STEP2B">
                    STEP_2B_CONTENT
                </f-wizard-step>
                <f-wizard-step title="TITLE_3" key="STEP3">
                    STEP_3_CONTENT
                </f-wizard-step>
            </f-wizard>
        </div>
    `,
    components: {
        FWizard,
        FWizardStep,
    },
    props: {
        openStep: {
            type: String,
            required: false,
        },
    },
    methods: {
        onCancel() {
            this.event = "CANCEL";
        },
        onCompleted() {
            this.event = "COMPLETED";
        },
    },
    data() {
        return {
            step: this.openStep,
            step2B: false,
            event: "",
        };
    },
});

interface PageObjects {
    wizard: FWizardPageobject;
    step1: FWizardStepPageobject;
    step2: FWizardStepPageobject;
    step3: FWizardStepPageobject;
}

function mountAndGetPageObjects(props: {
    openStep: string | undefined;
    disableInitialFocus?: boolean;
}): PageObjects {
    cy.mount(TestComponent, {
        props,
    });
    const wizard = new FWizardPageobject("#wizard");
    const step1 = wizard.getStep(0);
    const step2 = wizard.getStep(1);
    const step3 = wizard.getStep(2);

    return { wizard, step1, step2, step3 };
}

describe("validation", () => {
    it("should be not able to go to next step when Action = CANCEL", () => {
        cy.mount(FWizardTestComponent, {
            props: {
                beforeNext: () => {
                    return FValidationFormAction.CANCEL;
                },
            },
        });
        const wizard = new FWizardPageobject("#wizard");
        const step1 = wizard.getStep(0);
        const step2 = wizard.getStep(1);

        step1.waitOnOpen();
        cy.get('[type="checkbox"]').check({ force: true });
        step1.continue().click();

        /**
         * Behöver vänta in animering ifall det skulle gå igenom.
         * Pga att man inte borde gå vidare til nästa steg finns det inget element att kolla mot.
         */
        // eslint-disable-next-line cypress/no-unnecessary-waiting -- technical debt
        cy.wait(30);
        step2.status().should("not.eq", "open");
    });

    it("should be able to go to next step when Action = CONTINUE", () => {
        cy.mount(FWizardTestComponent, {
            props: {
                beforeNext: () => {
                    return FValidationFormAction.CONTINUE;
                },
            },
        });
        const wizard = new FWizardPageobject("#wizard");
        const step1 = wizard.getStep(0);
        const step2 = wizard.getStep(1);

        step1.waitOnOpen();
        cy.get('[type="checkbox"]').check({ force: true });
        step1.continue().click();

        step2.waitOnOpen();
        step2.status().should("eq", "open");
    });

    it("should be able to go to next step when function not used", () => {
        cy.mount(FWizardTestComponent);
        const wizard = new FWizardPageobject("#wizard");
        const step1 = wizard.getStep(0);
        const step2 = wizard.getStep(1);

        step1.waitOnOpen();
        cy.get('[type="checkbox"]').check({ force: true });
        step1.continue().click();

        step2.waitOnOpen();
        step2.status().should("eq", "open");
    });
});

it("should disable buttons when performing animation", () => {
    const { step1, step2 } = mountAndGetPageObjects({
        openStep: undefined,
    });
    step1.waitOnOpen();
    step1.continue().click();

    step2.continue().invoke("attr", "data-disabled").should("eq", "true");
    step2.continue().invoke("attr", "data-disabled").should("eq", "false");
});

describe("v-model", () => {
    it("should open step1 when no step is provided in v-model", () => {
        const { step1 } = mountAndGetPageObjects({
            openStep: undefined,
        });
        step1.waitOnOpen();
        step1.header.title().should("trimmedText", "Steg 1 av 3 TITLE_1");
        step1.body().should("contain.text", "STEP_1_CONTENT");

        cy.get("#current-step").should("have.text", "STEP1");
    });

    it("should open step2 when step2 is provided in v-model", () => {
        const { step2 } = mountAndGetPageObjects({
            openStep: "STEP2",
        });
        step2.waitOnOpen();
        step2.header.title().should("trimmedText", "Steg 2 av 3 TITLE_2");
        step2.body().should("contain.text", "STEP_2_CONTENT");

        cy.get("#current-step").should("have.text", "STEP2");
    });

    it("should change v-model when going through steps", () => {
        const { step1, step2, step3 } = mountAndGetPageObjects({
            openStep: undefined,
        });

        step1.waitOnOpen();
        cy.get("#current-step").should("have.text", "STEP1");

        step1.continue().click();

        step2.waitOnOpen();
        cy.get("#current-step").should("have.text", "STEP2");

        step2.continue().click();
        step3.waitOnOpen();
        cy.get("#current-step").should("have.text", "STEP3");

        step3.continue().click();
        step3.waitOnClose();
        cy.get("#current-step").should("have.text", "");
    });

    it("should open step on change", () => {
        const { step3 } = mountAndGetPageObjects({
            openStep: undefined,
        });
        cy.get("#current-step").should("have.text", "STEP1");
        cy.get("#open-step-3").click();
        step3.waitOnOpen();
        step3.header.title().should("trimmedText", "Steg 3 av 3 TITLE_3");
        step3.body().should("contain.text", "STEP_3_CONTENT");
        cy.get("#current-step").should("have.text", "STEP3");
    });
});

describe("focus", () => {
    it("should focus initially on first step by default", () => {
        const { step1 } = mountAndGetPageObjects({
            openStep: undefined,
        });
        step1.waitOnOpen();
        step1.header.el().should("have.focus");
    });

    it("should not focus initially on first step when `disableInitialFocus` is set", () => {
        const { step1 } = mountAndGetPageObjects({
            openStep: undefined,
            disableInitialFocus: true,
        });
        step1.waitOnOpen();
        step1.header.el().should("not.have.focus");
    });

    it("should be able to continue to next step", () => {
        const { step1, step2 } = mountAndGetPageObjects({
            openStep: undefined,
            disableInitialFocus: true,
        });
        step1.waitOnOpen();
        step1.continue().click();
        step2.waitOnOpen();
        step2.header.el().should("exist").and("have.focus");
    });

    it("should focus when first step is opened for the second time", () => {
        const { step1, step2 } = mountAndGetPageObjects({
            openStep: undefined,
            disableInitialFocus: true,
        });
        step1.waitOnOpen();
        step1.continue().click();
        step2.waitOnOpen();
        step1.header.title().click();
        step1.waitOnOpen();
        step1.header.el().should("have.focus");
    });
});

describe("events", () => {
    it("should emit 'cancel' event when pressing 'Avbryt' button", () => {
        const { step1 } = mountAndGetPageObjects({
            openStep: undefined,
        });

        step1.waitOnOpen();
        cy.get("#current-step").should("have.text", "STEP1");
        cy.get("#event").should("have.text", "");
        step1.cancel().click();
        cy.get("#event").should("have.text", "CANCEL");
    });

    it("should emit 'completed' event when pressing 'Fortsätt' button in last step", () => {
        const { step1, step2, step3 } = mountAndGetPageObjects({
            openStep: undefined,
        });

        cy.get("#current-step").should("have.text", "STEP1");
        step1.waitOnOpen();
        step1.continue().click();
        step2.waitOnOpen();

        step2.continue().click();
        step3.waitOnOpen();

        cy.get("#event").should("have.text", "");

        step3.continue().click();
        step3.waitOnClose();
        cy.get("#event").should("have.text", "COMPLETED");
    });
});

describe("dynamic steps", () => {
    it("should add and remove step 2B dynamically", () => {
        const { wizard } = mountAndGetPageObjects({
            openStep: undefined,
        });

        wizard.steps().should("have.length", 3);
        wizard.getStep(0).header.stepOf().should("have.text", "Steg 1 av 3");

        cy.get("#toggle-step-2b").click();

        wizard.steps().should("have.length", 4);
        wizard.getStep(0).header.stepOf().should("have.text", "Steg 1 av 4");
        wizard
            .getStep(2)
            .header.title()
            .should("trimmedText", "Steg 3 av 4 TITLE_2B Inaktivt");

        cy.get("#toggle-step-2b").click();

        wizard.steps().should("have.length", 3);
        wizard.getStep(0).header.stepOf().should("have.text", "Steg 1 av 3");
        wizard
            .getStep(2)
            .header.title()
            .should("trimmedText", "Steg 3 av 3 TITLE_3 Inaktivt");
    });
});
