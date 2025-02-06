import { type DefineComponent, defineComponent } from "vue";
import { IPopupPageObject } from "../../cypress";
import IPopup from "./IPopup.vue";

const popup = new IPopupPageObject();
const popupButtonId = "#open-popup";

const VIEWPORT = {
    DESKTOP: { width: 1024, height: 600 },
    MOBILE: { width: 639, height: 600 },
    SHORT: { width: 1024, height: 300 }, // low enough height to result in no valid popup candidate
};

function setViewport(viewPort: { height: number; width: number }): void {
    cy.viewport(viewPort.width, viewPort.height);
}

function createComponent(
    popupTemplate: string = defaultPopupTemplate,
): DefineComponent {
    return defineComponent({
        template: /* HTML */ `
            <div style="min-height: 95vh">
                <button
                    type="button"
                    id="open-popup"
                    ref="anchor"
                    @click="isOpen=!isOpen"
                >
                    Toggle popup
                </button>
                ${popupTemplate}
            </div>
        `,
        components: {
            IPopup,
        },
        data() {
            return {
                isOpen: false,
            };
        },
        methods: {
            myFocusElementCallback() {
                return document.querySelector("#focus-callback-target");
            },
        },
    });
}

const defaultPopupTemplate = /* HTML */ `
    <i-popup :isOpen="isOpen" :anchor="$refs.anchor">
        <div style="height: 300px; width: 250px;">
            <span> POPUP CONTENT </span>
        </div>
    </i-popup>
`;

function setInlineTemplate(inline: "always" | "never" | "auto"): string {
    return /* HTML */ `
        <i-popup :isOpen="isOpen" :anchor="$refs.anchor" inline="${inline}">
            <div style="height: 300px; width: 250px;">
                <span> POPUP CONTENT </span>
            </div>
        </i-popup>
    `;
}

describe("open popup", () => {
    describe("classes", () => {
        describe("default", () => {
            it("should add `popup--overlay` class as default at desktop size", () => {
                setViewport(VIEWPORT.DESKTOP);
                const component = createComponent();
                cy.mount(component);
                cy.get(popupButtonId).click();
                popup.el().should("have.class", "popup--overlay");
            });

            it("should add `popup--inline` class as default at mobile size", () => {
                setViewport(VIEWPORT.MOBILE);
                const component = createComponent();
                cy.mount(component);
                cy.get(popupButtonId).click();
                popup.el().should("have.class", "popup--inline");
            });

            it("should add `popup--inline` class as default at short height", () => {
                setViewport(VIEWPORT.SHORT);
                const component = createComponent();
                cy.mount(component);
                cy.get(popupButtonId).click();
                popup.el().should("have.class", "popup--inline");
            });
        });

        describe("`inline` prop", () => {
            it("should add `popup--inline` class when set to `always`", () => {
                setViewport(VIEWPORT.DESKTOP);
                const template = setInlineTemplate("always");
                const component = createComponent(template);
                cy.mount(component);
                cy.get(popupButtonId).click();
                popup.el().should("have.class", "popup--inline");
            });

            it("should add `popup--overlay` class when set to `never`", () => {
                setViewport(VIEWPORT.DESKTOP);
                const template = setInlineTemplate("never");
                const component = createComponent(template);
                cy.mount(component);
                cy.get(popupButtonId).click();
                popup.el().should("have.class", "popup--overlay");
            });

            it("should add `popup--overlay` class when set to `auto` and at desktop size", () => {
                setViewport(VIEWPORT.DESKTOP);
                const template = setInlineTemplate("auto");
                const component = createComponent(template);
                cy.mount(component);
                cy.get(popupButtonId).click();
                popup.el().should("have.class", "popup--overlay");
            });

            it("should add `popup--inline` class when set to `auto` and at mobile size", () => {
                setViewport(VIEWPORT.MOBILE);
                const template = setInlineTemplate("auto");
                const component = createComponent(template);
                cy.mount(component);
                cy.get(popupButtonId).click();
                popup.el().should("have.class", "popup--inline");
            });

            it("should add `popup--inline` class when set to `auto` and at short height", () => {
                setViewport(VIEWPORT.SHORT);
                const template = setInlineTemplate("auto");
                const component = createComponent(template);
                cy.mount(component);
                cy.get(popupButtonId).click();
                popup.el().should("have.class", "popup--inline");
            });
        });
    });

    describe("focus", () => {
        beforeEach(() => {
            setViewport(VIEWPORT.DESKTOP);
        });

        it("should focus on first tabbable element by default", () => {
            const template = /* HTML */ `
                <i-popup :isOpen="isOpen" :anchor="$refs.anchor">
                    <span> POPUP CONTENT </span>
                    <!-- The button that will receive focus -->
                    <button type="button" id="b1">Focus me!</button>
                </i-popup>
            `;
            const component = createComponent(template);
            cy.mount(component);
            cy.get(popupButtonId).click();
            cy.get("#b1").should("have.focus");
        });

        it("should focus on specific tabbable element when callback is used", () => {
            const template = /* HTML */ `
                <i-popup
                    :isOpen="isOpen"
                    :anchor="$refs.anchor"
                    :focusElement="myFocusElementCallback"
                >
                    <span> POPUP CONTENT </span>
                    <button type="button" id="b1">Button 1</button>
                    <!-- The button that will receive focus -->
                    <button type="button" id="focus-callback-target">
                        Button 2
                    </button>
                </i-popup>
            `;
            const component = createComponent(template);
            cy.mount(component);
            cy.get(popupButtonId).click();
            cy.get("#focus-callback-target").should("have.focus");
        });

        it("should skip setting focus if `setFocus` is false", () => {
            const template = /* HTML */ `
                <i-popup
                    :isOpen="isOpen"
                    :anchor="$refs.anchor"
                    :setFocus="false"
                >
                    <span> POPUP CONTENT </span>
                    <button type="button" id="b1">Button 1</button>
                </i-popup>
            `;
            const component = createComponent(template);
            cy.mount(component);
            cy.get(popupButtonId).click();
            cy.get(popupButtonId).should("have.focus");
        });
    });
});

describe("resize viewport with open popup", () => {
    describe("`inline` prop is set to `auto`", () => {
        it("should change to inline when resized from desktop to mobile size", () => {
            setViewport(VIEWPORT.DESKTOP);
            const template = setInlineTemplate("auto");
            const component = createComponent(template);
            cy.mount(component);

            cy.get(popupButtonId).click();
            popup.el().should("have.class", "popup--overlay");

            setViewport(VIEWPORT.MOBILE);
            popup.el().should("have.class", "popup--inline");
        });

        it("should change to overlay when resized from mobile to desktop size.", () => {
            setViewport(VIEWPORT.MOBILE);
            const template = setInlineTemplate("auto");
            const component = createComponent(template);
            cy.mount(component);

            cy.get(popupButtonId).click();
            popup.el().should("have.class", "popup--inline");

            setViewport(VIEWPORT.DESKTOP);
            popup.el().should("have.class", "popup--overlay");
        });
    });

    describe("`inline` prop is set to `always`", () => {
        it("should still be inline when resized from mobile to desktop size", () => {
            setViewport(VIEWPORT.MOBILE);
            const template = setInlineTemplate("always");
            const component = createComponent(template);
            cy.mount(component);

            cy.get(popupButtonId).click();
            popup.el().should("have.class", "popup--inline");

            setViewport(VIEWPORT.DESKTOP);
            popup.el().should("have.class", "popup--inline");
        });
    });

    describe("`inline` prop is set to `never`", () => {
        it("should still be overlay when resized from desktop to mobile size", () => {
            setViewport(VIEWPORT.DESKTOP);
            const template = setInlineTemplate("never");
            const component = createComponent(template);
            cy.mount(component);

            cy.get(popupButtonId).click();
            popup.el().should("have.class", "popup--overlay");

            setViewport(VIEWPORT.MOBILE);
            popup.el().should("have.class", "popup--overlay");
        });
    });
});
