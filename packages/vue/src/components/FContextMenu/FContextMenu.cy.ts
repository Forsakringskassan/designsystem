import { defineComponent } from "vue";
import { FContextMenuPageObject } from "../../cypress";
import FContextMenu from "./FContextMenu.vue";

const VIEWPORT = {
    DESKTOP: { width: 1024, height: 600 }, // enough height to avoid scroll
    MOBILE: { width: 639, height: 600 },
};

const TestComponentTemplate = /* HTML */ `
    <div>
        <button
            ref="popupAnchor"
            data-test="open-button"
            type="button"
            class="button button--primary"
            @click="isOpen=true"
        >
            Öppna
        </button>
        <f-context-menu
            id="fcontextmenu"
            :is-open="isOpen"
            :items="items"
            :anchor="getAnchor()"
        ></f-context-menu>
    </div>
`;

const exampleItems = [
    { label: "label1", key: "MENU_1" },
    { label: "label2", key: "MENU_2", icon: "bell" },
    { label: "label3", key: "MENU_3", icon: "pen" },
    { separator: true },
    { label: "label4", key: "MENU_4", icon: "trashcan" },
    { label: "label5", key: "MENU_5" },
    { separator: true },
    { label: "label6", key: "MENU_6", icon: "calendar" },
];

const nbOfTextItems = exampleItems.filter((it) => it.separator !== true).length;

const TestComponentLongText = defineComponent({
    template: TestComponentTemplate,
    components: {
        FContextMenu,
    },
    data() {
        return {
            items: [
                {
                    label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam odio eu aliquet pharetra. Pellentesque ultrices.",
                    key: "MENU_1",
                    icon: "bell",
                },
            ],
            selectedItem: "",
            isOpen: false,
            hasBeenClosed: false,
        };
    },
    methods: {
        getAnchor() {
            return this.$refs.popupAnchor;
        },
    },
});

const TestComponent1 = defineComponent({
    template: TestComponentTemplate,
    components: {
        FContextMenu,
    },
    data() {
        return {
            items: exampleItems,
            selectedItem: "",
            isOpen: false,
            hasBeenClosed: false,
        };
    },
    methods: {
        getAnchor() {
            return this.$refs.popupAnchor;
        },
    },
});

function mountAndGetPageObject(
    viewportSize: { height: number; width: number } = VIEWPORT.DESKTOP,
): FContextMenuPageObject {
    cy.viewport(viewportSize.width, viewportSize.height);
    cy.mount(TestComponent1);
    // click on open button to show component
    cy.get("[data-test=open-button]").click();
    return new FContextMenuPageObject("#fcontextmenu");
}

describe("tests", () => {
    it("shoud contain 6 items", () => {
        const contextMenu = mountAndGetPageObject();
        contextMenu.items().should("have.length", `${nbOfTextItems}`);
    });
});

describe("pageobject", () => {
    it("should return the list of items from the menu", () => {
        const imenuPageObj = mountAndGetPageObject();
        imenuPageObj.el().should("to.exist");
        imenuPageObj.items().should("have.length", 6);
        imenuPageObj.item(0).should("contain.text", "label1");
        imenuPageObj.item(5).should("contain.text", "label6");
    });
});

function shouldMatchScreenshot(): void {
    cy.get(".contextmenu__list").toMatchScreenshot();
}

/* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
describe.skip("visual regression", () => {
    it("should have approved design with desktop viewport", () => {
        // desktop
        mountAndGetPageObject();
        cy.toMatchScreenshot();
    });

    it("should not remove icon with long texts with desktop viewport", () => {
        // desktop

        cy.viewport(VIEWPORT.DESKTOP.width, VIEWPORT.DESKTOP.height);
        cy.mount(TestComponentLongText);
        cy.get("[data-test=open-button]").click();
        shouldMatchScreenshot();
    });

    it("should wrap text when long label in mobile", () => {
        // mobile

        cy.viewport(VIEWPORT.MOBILE.width, VIEWPORT.MOBILE.height);
        cy.mount(TestComponentLongText);
        cy.get("[data-test=open-button]").click();
        shouldMatchScreenshot();
    });

    it("should not wrap text when long label in desktop", () => {
        // desktop

        cy.viewport(VIEWPORT.DESKTOP.width, VIEWPORT.DESKTOP.height);
        cy.mount(TestComponentLongText);
        cy.get("[data-test=open-button]").click();
        shouldMatchScreenshot();
    });

    it("should not remove icon with long texts with mobile viewport", () => {
        // mobile

        cy.viewport(VIEWPORT.MOBILE.width, VIEWPORT.MOBILE.height);
        cy.mount(TestComponentLongText);
        cy.get("[data-test=open-button]").click();
        shouldMatchScreenshot();
    });

    it("should have approved design with mobile viewport", () => {
        // mobile
        mountAndGetPageObject(VIEWPORT.MOBILE);
        cy.toMatchScreenshot();
    });
});
