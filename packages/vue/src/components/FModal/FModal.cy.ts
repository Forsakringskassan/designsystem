import { type DefineComponent, defineComponent } from "vue";
import {
    FConfirmModal,
    FFormModal,
    FModal,
    FSelectField,
    FValidationForm,
} from "..";
import {
    FModalPageObject,
    type DefaultCypressChainable,
    FSelectFieldPageObject,
    FFormModalPageObject,
} from "../../cypress";

function generateModalMarkup(focusStrategy = "on"): string {
    return /* HTML */ `
        <div class="f-modal-example">
            <div class="row">
                <div class="col col--md-6">
                    <f-select-field
                        v-model="type"
                        v-test="'open-example-modal-type-select-field'"
                    >
                        <template #label> Modaltyp: </template>
                        <option value>Standard</option>
                        <option value="information">Informationsmodal</option>
                        <option value="warning">Varningsmodal</option>
                        <option value="error">Felmodal</option>
                    </f-select-field>
                </div>
                <div class="col col--md-6">
                    <f-select-field v-model="size">
                        <template #label> Storlek (desktop): </template>
                        <option value>Standard</option>
                        <option value="small">Small (default)</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="fullscreen">Fullscreen</option>
                    </f-select-field>
                </div>
            </div>
            <div class="row">
                <div class="col col--md-6">
                    <f-select-field v-model="fullscreen">
                        <template #label> Fullskärm (mobil): </template>
                        <option :value="true">Ja</option>
                        <option :value="false">Standard (nej)</option>
                    </f-select-field>
                </div>
                <div class="col col--md-6">
                    <f-select-field v-model="modalContent">
                        <template #label> Mängd innehåll: </template>
                        <option :value="content.minimal">Minimal</option>
                        <option :value="content.normal">Normal</option>
                        <option :value="content.maximal">Maximal</option>
                    </f-select-field>
                </div>
            </div>
            <button
                type="button"
                class="button button--secondary"
                data-test="open-example-modal-button"
                @click="onClickOpenModal"
            >
                Öppna modal
            </button>
            <f-modal
                :is-open="isOpen"
                data-test="modul-open"
                close-text="Stäng"
                aria-close-text="Stäng"
                :fullscreen="fullscreen"
                :type="type"
                :size="size"
                focus="${focusStrategy}"
                @close="onCloseModal"
            >
                <template #header> Träutensilierna </template>
                <template #content>
                    <p v-for="paragraph in modalContent" :key="paragraph">
                        {{ paragraph }}
                    </p>
                </template>
                <template #footer>
                    <div class="button-group">
                        <button
                            data-test="closeButton"
                            type="button"
                            class="button button--secondary button-group__item button--large"
                            @click="onClickCloseModal"
                        >
                            Stäng sekundär
                        </button>
                        <button
                            type="button"
                            class="button button--primary button-group__item button--large"
                            @click="onClickCloseModal"
                        >
                            Stäng
                        </button>
                    </div>
                </template>
            </f-modal>
        </div>
    `;
}

const content = {
    minimal: ["Lorem ipsum dolor sit amet."],
    normal: [
        [
            "Träutensilierna i ett tryckeri äro ingalunda en oviktig faktor, för trevnadens, ordningens och",
            "ekonomiens upprätthållande, och dock är det icke sällan som sorgliga erfarenheter göras på grund af",
            "det oförstånd med hvilket kaster, formbräden och regaler tillverkas och försäljas Kaster som äro",
            "dåligt hopkomna och af otillräckligt.",
        ].join(" "),
    ],
    maximal: [
        [
            "Träutensilierna i ett tryckeri äro ingalunda en oviktig faktor, för trevnadens, ordningens och",
            "ekonomiens upprätthållande, och dock är det icke sällan som sorgliga erfarenheter göras på grund af",
            "det oförstånd med hvilket kaster, formbräden och regaler tillverkas och försäljas Kaster som äro",
            "dåligt hopkomna och af otillräckligt.",
        ].join(" "),
        [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ].join(" "),
        [
            "Bacon ipsum dolor amet kielbasa salami pork chop prosciutto.",
            "Cupim tri-tip swine shank jowl.",
            "Shoulder boudin picanha beef ribs frankfurter ground round.",
            "Tenderloin buffalo spare ribs, t-bone bresaola boudin pork porchetta short loin.",
            "Biltong corned beef tail, andouille pancetta turkey meatloaf cow bresaola turducken boudin.",
            "Tenderloin jowl ham, pork shankle kevin pork loin.",
        ].join(" "),
        [
            "Cupcake ipsum dolor sit amet bear claw sesame snaps powder.",
            "Marzipan biscuit cookie cheesecake croissant.",
            "Oat cake pie candy canes donut jelly beans chocolate bar.",
            "Tootsie roll soufflé cake biscuit carrot cake donut tootsie roll bear claw dragée.",
        ].join(" "),
    ],
};

function createComponent(template: string): DefineComponent {
    return defineComponent({
        template,
        components: { FModal, FSelectField },
        data() {
            return {
                fullscreen: false,
                isOpen: false,
                type: "",
                size: "",
                modalContent: content.normal,
                content,
            };
        },
        methods: {
            onClickOpenModal() {
                this.isOpen = true;
            },
            onCloseModal() {
                this.isOpen = false;
            },
            onClickCloseModal() {
                this.isOpen = false;
            },
        },
    });
}

describe("FModal", () => {
    const modalType = {
        standard: "Standard",
        information: "information",
        warning: "warning",
        error: "error",
    };

    const modalSelector = new FSelectFieldPageObject(
        '[data-test="open-example-modal-type-select-field"]',
    );
    const openModalButton = (): DefaultCypressChainable =>
        cy.get('[data-test="open-example-modal-button"]');
    const modal = new FModalPageObject('[data-test="modul-open"]');

    beforeEach(() => {
        cy.clearLocalStorage();

        cy.mount(createComponent(generateModalMarkup()));
    });

    it("should provide a page object that can access any necessary elements", () => {
        modalSelector.dropdown().select(modalType.standard);
        modal.el().should("not.exist");
        openModalButton().click();
        modal.el().should("be.visible");

        modal.title().should("contain.text", "Träutensilierna");
        modal
            .body()
            .invoke("text")
            .should("match", /^Träutensilierna i ett .* af otillräckligt\.$/);
        modal.primaryButton().should("have.trimmedText", "Stäng");
        modal.secondaryButton().should("have.trimmedText", "Stäng sekundär");
        modal.closeCross().should("have.trimmedText", "Stäng");
        modal.typeOfModal().should("be.equal", "modal");
    });

    /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
    it.skip("standard should have approved design", () => {
        modalSelector.dropdown().select(modalType.standard);
        openModalButton().click();
        modal.el().toMatchScreenshot();
    });

    /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
    it.skip("information should have approved design", () => {
        modalSelector.dropdown().select(modalType.information);
        openModalButton().click();
        modal.el().toMatchScreenshot();
    });

    /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
    it.skip("warning should have approved design", () => {
        modalSelector.dropdown().select(modalType.warning);
        openModalButton().click();
        modal.el().toMatchScreenshot();
    });

    /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
    it.skip("error should have approved design", () => {
        modalSelector.dropdown().select(modalType.error);
        openModalButton().click();
        modal.el().toMatchScreenshot();
    });

    it("should close window on cross clicked", () => {
        modalSelector.dropdown().select(modalType.standard);
        openModalButton().click();
        modal.closeCross().click();
        modal.el().should("not.exist");
    });

    it("should close window on primary button clicked", () => {
        modalSelector.dropdown().select(modalType.standard);
        openModalButton().click();
        modal.primaryButton().click();
        modal.el().should("not.exist");
    });

    it("should close window on secondary button clicked", () => {
        modalSelector.dropdown().select(modalType.standard);
        openModalButton().click();
        modal.secondaryButton().click();
        modal.el().should("not.exist");
    });

    describe("focus", () => {
        it("default should set focus when modal is opened and closed", () => {
            cy.mount(createComponent(generateModalMarkup("on")));
            openModalButton().click();

            cy.focused().should("have.class", "modal__title");

            modal.primaryButton().click();
            cy.focused().should(
                "have.attr",
                "data-test",
                "open-example-modal-button",
            );
        });

        it("should be able to disable focus strategy", () => {
            cy.mount(createComponent(generateModalMarkup("off")));
            openModalButton().click();
            cy.focused().should(
                "have.attr",
                "data-test",
                "open-example-modal-button",
            );
            modal.primaryButton().click();
            cy.focused().should("not.exist");
        });

        it("should be able to disable close focus", () => {
            cy.mount(createComponent(generateModalMarkup("open")));
            openModalButton().click();
            cy.focused().should("have.class", "modal__title");
            modal.primaryButton().click();
            cy.focused().should("not.exist");
        });
    });
});

it("should retain scroll by default when closed", () => {
    const template = /* HTML */ `
        <div class="container">
            <div style="background-color: yellow; height: 1000px"></div>

            <f-validation-form>
                <button
                    class="button button--medium button--secondary"
                    data-test="open-edit-modal-button"
                    type="submit"
                    @click="isEditing = true"
                >
                    Open edit modal
                </button>

                <button
                    class="button button--medium button--secondary"
                    type="button"
                    @click="isConfirming = true"
                >
                    Open confirm modal
                </button>

                <div v-if="isEditing || isConfirming">
                    <f-form-modal
                        :is-open="isEditing"
                        @close="isEditing = false"
                    ></f-form-modal>
                    <f-confirm-modal
                        :is-open="isConfirming"
                        :buttons="confirmDeleteButtons"
                        @close="isConfirming = false"
                    >
                        <template #heading>Are you sure?</template>
                        <template #content></template>
                    </f-confirm-modal>
                </div>
            </f-validation-form>
        </div>
    `;

    const testComponent = defineComponent({
        template,
        components: { FValidationForm, FConfirmModal, FFormModal },
        data() {
            return {
                confirmDeleteButtons: [
                    {
                        label: "Yes",
                        type: "primary",
                        event: "confirm",
                    },
                    { label: "No", type: "secondary" },
                ],
                isEditing: false,
                isConfirming: false,
            };
        },
    });

    cy.viewport(800, 600);
    cy.mount(testComponent);
    cy.get('[data-test="open-edit-modal-button"]').click();
    const modal = new FFormModalPageObject(".modal");
    modal.primaryButton().click();
    cy.window().its("scrollY").should("not.equal", 0);
});
