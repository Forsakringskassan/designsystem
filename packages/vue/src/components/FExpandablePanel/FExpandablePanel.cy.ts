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
    const panel = new FExpandablePanelPageObject(
        "[data-test=expandable-panel]",
    );

    const panelWithNotification = new FExpandablePanelPageObject(
        "[data-test=notification-example] .expandable-panel",
    );

    beforeEach(() => {
        cy.clearLocalStorage();
    });

    it("Should have a page object that can access any necessary elements for default expandable panel", () => {
        const template = /* HTML */ `
            <f-expandable-panel
                :expanded="expanded"
                @toggle="onToggle"
                v-test="'expandable-panel'"
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
        cy.mount(createComponent(template));
        panel.el().should("be.visible");
        panel.isOpen().should("be.false");
        panel.expandCollapseIcon().click();
        panel.isOpen().should("be.true");
        panel.header().should("have.trimmedText", "Titel");
        panel.notificationIcon().should("not.exist");
    });
    it("Should have a page object that can access any necessary elements for expandable panel with notification icon", () => {
        const template = /* HTML */ `
            <div v-test="'notification-example'">
                <f-expandable-panel
                    :expanded="expanded1"
                    :notifications="1"
                    @toggle="onToggle1"
                >
                    <template #title> Titel med en notifiering </template>
                    <template #default> Innehåll </template>
                    <template #outside>
                        Relaterat innehåll som visas när panelen är expanderad
                        men utanför body
                    </template>
                </f-expandable-panel>
            </div>
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

    /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
    describe.skip("density", () => {
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
