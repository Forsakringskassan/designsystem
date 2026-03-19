import { type DefineComponent, defineComponent } from "vue";
import {
    DensityWrapper,
    densityWrapperHeight,
    densityWrapperWidth,
} from "@fkui/test-utils/vue";
import { FExpandablePanelPageObject } from "../../cypress";
import FExpandablePanel from "./FExpandablePanel.vue";

function createComponent(template: string): DefineComponent {
    return defineComponent({
        template,
        components: { FExpandablePanel },
        data() {
            return {
                expanded: false,
                type: Boolean,
            };
        },
        methods: {
            onToggle() {
                this.expanded = !this.expanded;
            },
        },
    });
}

describe("FExpandablePanel", () => {
    const panelWithNotification = new FExpandablePanelPageObject(
        "[data-test=notification-example]",
    );

    const defaultTemplate = /* HTML */ `
        <f-expandable-panel
            :expanded="expanded"
            @toggle="onToggle"
            data-test="expandable-panel"
            id="expandable-panel-id"
        >
            <template #title> Titel </template>
            <template #default>
                Innehåll
                <p>
                    <a class="anchor" href="" target="_blank">
                        Länk till annan sida
                    </a>
                </p>
            </template>
        </f-expandable-panel>
    `;

    beforeEach(() => {
        cy.clearLocalStorage();
    });

    it("Should have a page object that can access any necessary elements for default expandable panel with `id` selector ", () => {
        cy.mount(createComponent(defaultTemplate));
        const panel = new FExpandablePanelPageObject("#expandable-panel-id");
        panel.header().should("have.trimmedText", "Titel");
    });

    it("Should have a page object that can access any necessary elements for default expandable panel with `data-*` selector ", () => {
        cy.mount(createComponent(defaultTemplate));
        const panel = new FExpandablePanelPageObject(
            "[data-test=expandable-panel]",
        );
        panel.el().should("be.visible");
        panel.isOpen().should("be.false");
        panel.expandCollapseIcon().click();
        panel.isOpen().should("be.true");
        panel.header().should("have.trimmedText", "Titel");
        panel.notificationIcon().should("not.exist");
    });

    it("Should have a page object that can access any necessary elements for expandable panel with notification icon", () => {
        const template = /* HTML */ `
            <f-expandable-panel
                :expanded="expanded1"
                :notifications="1"
                @toggle="onToggle1"
                data-test="notification-example"
            >
                <template #title> Titel med en notifiering </template>
                <template #default> Innehåll </template>
                <template #outside>
                    Relaterat innehåll som visas när panelen är expanderad men
                    utanför body
                </template>
            </f-expandable-panel>
        `;
        cy.mount(createComponent(template));
        panelWithNotification.notificationIcon().should("be.visible");
        panelWithNotification
            .notificationIcon()
            .should("have.trimmedText", "Du har 1 notifieringar.");
        panelWithNotification.header().click();
        panelWithNotification.body().should("have.trimmedText", "Innehåll");
        panelWithNotification
            .relatedInfo()
            .should(
                "have.trimmedText",
                "Relaterat innehåll som visas när panelen är expanderad men utanför body",
            );

        panelWithNotification.numberOfNotifications().should("be.equal", 1);
    });

    describe("density", () => {
        const DensityComponent = defineComponent({
            template: /* HTML */ `
                <density-wrapper>
                    <f-expandable-panel :expanded="true">
                        <template #title> Rubrik </template>
                        <template #default> Innehåll </template>
                    </f-expandable-panel>
                </density-wrapper>
            `,
            components: {
                DensityWrapper,
                FExpandablePanel,
            },
        });

        it(`should be densified`, () => {
            cy.viewport(densityWrapperWidth, densityWrapperHeight);
            cy.mount(DensityComponent);
            cy.toMatchScreenshot();
        });
    });
});
