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

            .display-contents {
                display: contents;
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
                <template #default="{ header, content, footer }">
                    <div :slot="header" class="header"></div>
                    <div :slot="content" class="main flex-grow"></div>
                    <div :slot="footer" class="footer"></div>
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
                <template #default="{ header, left, content, footer }">
                    <div :slot="header" class="header"></div>
                    <div :slot="left" class="panel flex-grow"></div>
                    <div :slot="content" class="main flex-grow"></div>
                    <div :slot="footer" class="footer"></div>
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
            <template #default="{ header, right, content, footer }">
                <div :slot="header" class="header"></div>
                <div :slot="right" class="panel flex-grow"></div>
                <div :slot="content" class="main flex-grow"></div>
                <div :slot="footer" class="footer"></div>
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
            <template #default="{ header, left, right, content, footer }">
                <div :slot="header" class="header"></div>
                <div :slot="left" class="panel flex-grow"></div>
                <div :slot="right" class="panel flex-grow"></div>
                <div :slot="content" class="main flex-grow"></div>
                <div :slot="footer" class="footer"></div>
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
            <template #default="{ header, left, right, content, footer}">
                <div :slot="header">
                    <div class="item-1"></div>
                    <div class="item-2"></div>
                    <div class="item-3"></div>
                </div>
                <div :slot="left" class="display-contents">
                    <div class="item-1"></div>
                    <div class="item-2 flex-grow"></div>
                    <div class="item-3"></div>
                </div>
                <div :slot="right" class="display-contents">
                    <div class="item-1"></div>
                    <div class="item-2 flex-grow"></div>
                    <div class="item-3"></div>
                </div>
                <div :slot="content" class="main flex-grow"></div>
                <div :slot="footer">
                    <div class="item-1"></div>
                    <div class="item-2"></div>
                    <div class="item-3"></div>
                </div>
            </f-page-layout>
        `,
        components: { FPageLayout },
    });
    cy.toMatchScreenshot();
});
