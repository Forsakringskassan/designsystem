import { defineComponent } from "vue";
import { FPageHeaderPageobject } from "../../cypress";
import FPageHeader from "./FPageHeader.vue";

const hiRes = { w: 1024, h: 768 };
const lowRes = { w: 240, h: 180 };

const TestComponent = defineComponent({
    template: /* HTML */ `
        <div>
            <f-page-header skip-link="main-content">
                Exempelapplikation
                <template #logo> <div>logo</div> </template>
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
    cy.mount(TestComponent);
    return new FPageHeaderPageobject("div.page-header__root");
}

describe("FPageHeader", () => {
    it("skiplink should focus in main content", () => {
        const pageHeader = mountAndGetPageObject();

        const skipLink = pageHeader.skipLink();
        skipLink.should("contain.text", "Gå direkt till innehåll");

        skipLink.focus().click();

        cy.location("hash").should("eq", "#main-content");
        cy.focused().should("have.attr", "id", "main-content");
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
});
