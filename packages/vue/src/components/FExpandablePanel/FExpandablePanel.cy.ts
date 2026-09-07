import { type DefineComponent, defineComponent } from "vue";
import {
    DensityWrapper,
    densityWrapperHeight,
    densityWrapperWidth,
} from "@fkui/test-utils/vue";
import { FExpandablePanelPageObject } from "../../cypress";
import FExpandablePanel from "./FExpandablePanel.vue";

const epsilon = 0.1;

function createComponent(template: string): DefineComponent {
    return defineComponent({
        template,
        components: { FExpandablePanel },
        data() {
            return {
                expanded: false,
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
    const defaultPanel = new FExpandablePanelPageObject(".expandable-panel");

    const defaultTemplate = /* HTML */ `
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

    beforeEach(() => {
        cy.clearLocalStorage();
    });

    it("Should access necessary elements for default expandable panel", () => {
        const panel = new FExpandablePanelPageObject(
            "[data-test=expandable-panel]",
        );
        cy.mount(createComponent(defaultTemplate));
        panel.el().should("be.visible");
        panel.isOpen().should("be.false");
        panel.expandCollapseIcon().click();
        panel.isOpen().should("be.true");
        panel.header().should("have.trimmedText", "Titel");
        panel.notificationIcon().should("not.exist");
    });

    // eslint-disable-next-line mocha/no-pending-tests -- ticket exists to correct this behaviour
    it.skip("Should have a page object that can access any necessary elements for default expandable panel with `id` selector ", () => {
        const template = /* HTML */ `
            <f-expandable-panel
                :expanded="false"
                @toggle="onToggle"
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

        cy.mount(createComponent(template));

        const panel = new FExpandablePanelPageObject("#expandable-panel-id");
        panel.el().should("be.visible");
        panel.header().should("have.trimmedText", "Titel");
    });

    // eslint-disable-next-line mocha/no-pending-tests -- ticket exists to correct this behaviour
    it.skip("Should have a page object that can access any necessary elements for default expandable panel with `data-*` selector ", () => {
        const template = /* HTML */ `
            <f-expandable-panel
                :expanded="false"
                @toggle="onToggle"
                data-test="expandable-panel"
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
        const panel = new FExpandablePanelPageObject(
            "[data-test=expandable-panel]",
        );
        panel.el().should("be.visible");
        panel.header().should("have.trimmedText", "Titel");
    });

    it("Should access any necessary elements for expandable panel with notification icon", () => {
        const template = /* HTML */ `
            <f-expandable-panel
                :expanded="expanded"
                :notifications="1"
                @toggle="onToggle"
                v-test="'notification-example'"
            >
                <template #title> Titel med en notifiering </template>
                <template #default> Innehåll </template>
                <template #outside>
                    Relaterat innehåll som visas när panelen är expanderad men
                    utanför body
                </template>
            </f-expandable-panel>
        `;

        const panelWithNotification = new FExpandablePanelPageObject(
            ".expandable-panel",
        );

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

    it("should handle initial collapsed", () => {
        const TestComponent = defineComponent({
            components: { FExpandablePanel },
            data() {
                return { expanded: false };
            },
            methods: {
                onToggle() {
                    this.expanded = !this.expanded;
                },
            },
            template: /* HTML */ `
                <f-expandable-panel :expanded @toggle="onToggle">
                    <template #title> Rubrik </template>
                    <template #default>
                        <div style="min-height: 500px">Innehåll</div>
                    </template>
                </f-expandable-panel>
            `,
        });
        cy.mount(TestComponent);

        /* initially collapsed -> should not occupy height */
        defaultPanel.body().should((el) => expect(el.height()).lte(0));

        /* expanded -> should occupy height */
        defaultPanel.expandCollapseIcon().click();
        defaultPanel
            .body()
            .should((el) => expect(el.height()).gte(500 - epsilon));

        /* collapsed -> should not occupy height again */
        defaultPanel.expandCollapseIcon().click();
        defaultPanel.body().should((el) => expect(el.height()).lte(0));
    });

    it("should handle initial expanded", () => {
        const TestComponent = defineComponent({
            components: { FExpandablePanel },
            data() {
                return { expanded: true };
            },
            methods: {
                onToggle() {
                    this.expanded = !this.expanded;
                },
            },
            template: /* HTML */ `
                <f-expandable-panel :expanded @toggle="onToggle">
                    <template #title> Rubrik </template>
                    <template #default>
                        <div style="min-height: 500px">Innehåll</div>
                    </template>
                </f-expandable-panel>
            `,
        });
        cy.mount(TestComponent);

        /* initially expanded -> should occupy height */
        defaultPanel
            .body()
            .should((el) => expect(el.height()).gte(500 - epsilon));

        /* collapsed -> should not occupy height */
        defaultPanel.expandCollapseIcon().click();
        defaultPanel.body().should((el) => expect(el.height()).lte(0));

        /* expanded -> should occupy height again */
        defaultPanel.expandCollapseIcon().click();
        defaultPanel
            .body()
            .should((el) => expect(el.height()).gte(500 - epsilon));
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
