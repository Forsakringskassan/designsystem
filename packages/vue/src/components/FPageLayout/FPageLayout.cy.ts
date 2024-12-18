import FPageLayout from "./FPageLayout.vue";

function css(p: TemplateStringsArray): string {
    return p.join("");
}

before(() => {
    cy.document().then((document) => {
        const style = document.createElement("style");
        style.textContent = css`
            body {
                margin: 0;
                padding: 0;
            }

            [slot="header"] {
                --color: darkred;
            }

            [slot="left"] {
                --color: greenyellow;
            }

            [slot="right"] {
                --color: hotpink;
            }

            [slot="content"] {
                --color: #ccc;
            }

            [slot="footer"] {
                --color: cyan;
            }

            .flex-grow {
                flex-grow: 1;
            }

            .header,
            .footer {
                background: var(--color);
                height: 2lh;
            }

            .panel {
                background: var(--color);
                width: 10ch;
            }

            .main {
                background: var(--color);
                flex-grow: 1;
            }

            .item-1 {
                background: hsl(from var(--color) h 33% l);
                min-width: 10ch;
                min-height: 1lh;
            }

            .item-2 {
                background: hsl(from var(--color) h 66% l);
                min-width: 10ch;
                min-height: 1lh;
            }

            .item-3 {
                background: hsl(from var(--color) h 100% l);
                min-width: 10ch;
                min-height: 1lh;
            }
        `;
        document.head.append(style);
    });
});

beforeEach(() => {
    cy.viewport(320, 400);
});

it("should position simple layout correctly", () => {
    cy.mount({
        template: /* HTML */ `
            <f-page-layout layout="simple">
                <template #header>
                    <div class="header"></div>
                </template>
                <template #content>
                    <div class="main flex-grow"></div>
                </template>
                <template #footer>
                    <div class="footer"></div>
                </template>
            </f-page-layout>
        `,
        components: { FPageLayout },
    });
    cy.toMatchScreenshot();
});

it("should position left-panel layout correctly", () => {
    cy.mount({
        template: /* HTML */ `
            <f-page-layout layout="left-panel">
                <template #header>
                    <div class="header"></div>
                </template>
                <template #left>
                    <div class="panel flex-grow"></div>
                </template>
                <template #content>
                    <div class="main flex-grow"></div>
                </template>
                <template #footer>
                    <div class="footer"></div>
                </template>
            </f-page-layout>
        `,
        components: { FPageLayout },
    });
    cy.toMatchScreenshot();
});

it("should position right-panel layout correctly", () => {
    cy.mount({
        template: /* HTML */ `
            <f-page-layout layout="right-panel">
                <template #header>
                    <div class="header"></div>
                </template>
                <template #right>
                    <div class="panel flex-grow"></div>
                </template>
                <template #content>
                    <div class="main flex-grow"></div>
                </template>
                <template #footer>
                    <div class="footer"></div>
                </template>
            </f-page-layout>
        `,
        components: { FPageLayout },
    });
    cy.toMatchScreenshot();
});

it("should position three-column layout correctly", () => {
    cy.mount({
        template: /* HTML */ `
            <f-page-layout layout="three-column">
                <template #header>
                    <div class="header"></div>
                </template>
                <template #left>
                    <div class="panel flex-grow"></div>
                </template>
                <template #right>
                    <div class="panel flex-grow"></div>
                </template>
                <template #content>
                    <div class="main flex-grow"></div>
                </template>
                <template #footer>
                    <div class="footer"></div>
                </template>
            </f-page-layout>
        `,
        components: { FPageLayout },
    });
    cy.toMatchScreenshot();
});

it("should stack flex items vertically by default", () => {
    cy.mount({
        template: /* HTML */ `
            <f-page-layout layout="three-column">
                <template #header>
                    <div class="item-1"></div>
                    <div class="item-2"></div>
                    <div class="item-3"></div>
                </template>
                <template #left>
                    <div class="item-1"></div>
                    <div class="item-2 flex-grow"></div>
                    <div class="item-3"></div>
                </template>
                <template #right>
                    <div class="item-1"></div>
                    <div class="item-2 flex-grow"></div>
                    <div class="item-3"></div>
                </template>
                <template #content>
                    <div class="main flex-grow"></div>
                </template>
                <template #footer>
                    <div class="item-1"></div>
                    <div class="item-2"></div>
                    <div class="item-3"></div>
                </template>
            </f-page-layout>
        `,
        components: { FPageLayout },
    });
    cy.toMatchScreenshot();
});
