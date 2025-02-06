import { defineComponent } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { FPageHeaderPageobject } from "../../cypress";
import FPageHeader from "./FPageHeader.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{ path: "/", component: defineComponent({}) }],
});
const hiRes = { w: 1024, h: 768 };
const lowRes = { w: 240, h: 180 };

const TestComponent = defineComponent({
    template: /* HTML */ `
        <div>
            <f-page-header
                skip-link="main-content"
                logo-size="responsive"
                routerLinkPath="logo-link"
            >
                Exempelapplikation
                <template #right> Namn Namnsson </template>
            </f-page-header>
            <a href="#" id="main-content"> Huvudinnehåll </a>
        </div>
    `,
    components: {
        FPageHeader,
    },
});

function mountAndGetPageObject(): FPageHeaderPageobject {
    cy.mount(TestComponent, {
        global: {
            plugins: [router],
        },
    });
    return new FPageHeaderPageobject("div.page-header__root");
}

describe("FPageHeader", () => {
    it("skiplink should focus in main content", () => {
        const pageHeader = mountAndGetPageObject();

        const skipLink = pageHeader.skipLink();
        skipLink.should("contain.text", "Gå direkt till innehåll");

        skipLink.focus().click();

        cy.location("hash").should("eq", "#/main-content");
        cy.focused().should("have.attr", "id", "main-content");
    });

    it("should get application name", () => {
        const pageHeader = mountAndGetPageObject();
        pageHeader
            .applicationName()
            .should("contain.text", "Exempelapplikation");
    });

    it("overflow should truncate application name with ellipsis", () => {
        const pageHeader = mountAndGetPageObject();
        cy.viewport(hiRes.w, hiRes.h);
        pageHeader.applicationName().then(($el) => {
            const offsetWidth = $el[0].offsetWidth;
            const scrollWidth = $el[0].scrollWidth;
            expect(offsetWidth).to.be.eq(scrollWidth);
        });
        cy.viewport(lowRes.w, lowRes.h);
        pageHeader.applicationName().then(($el) => {
            const offsetWidth = $el[0].offsetWidth;
            const scrollWidth = $el[0].scrollWidth;
            expect(offsetWidth).to.be.lt(scrollWidth);
        });
    });

    it("should get right slot content", () => {
        const pageHeader = mountAndGetPageObject();
        pageHeader.rightSlot().should("contain.text", "Namn Namnsson");
    });

    it("should get logo slot content", () => {
        const pageHeader = mountAndGetPageObject();
        pageHeader
            .logoSlot()
            .get("span.page-header__logo--responsive")
            .should("exist");
    });

    it("viewport change should affect logotype size in responsive mode.", () => {
        const pageHeader = mountAndGetPageObject();
        cy.viewport(hiRes.w, hiRes.h);
        const logoBefore = pageHeader.logoSlot();
        logoBefore.then(($el1) => {
            const widthBefore = $el1.width();
            cy.viewport(lowRes.w, lowRes.h);
            const logoAfter = pageHeader.logoSlot();
            logoAfter.should(($el2) => {
                expect($el2.width()).to.be.lt(widthBefore as number);
            });
        });
    });

    it("should get logo router link", () => {
        const pageHeader = mountAndGetPageObject();
        pageHeader.logoRouterLink().click();
        cy.location("hash").should("eq", "#/logo-link");
    });
});
