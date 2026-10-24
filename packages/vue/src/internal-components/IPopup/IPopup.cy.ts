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

function createAnchorOverlapComponent(): DefineComponent {
    return defineComponent({
        template: /* HTML */ `
            <div
                ref="container"
                class="popup__container"
                style="height: 140px; position: relative; width: 200px;"
            >
                <button
                    type="button"
                    id="anchor-overlap-anchor"
                    ref="anchor"
                    aria-label="Open popup"
                    style="box-sizing: border-box; height: 10px; left: 95px; padding: 0; position: absolute; top: 65px; width: 10px;"
                    @click="isOpen = true"
                ></button>
                <button
                    type="button"
                    id="disable-anchor-overlap"
                    style="left: 220px; position: absolute; top: 0;"
                    @click.stop="anchorOverlap = 'never'"
                >
                    Disable anchor overlap
                </button>
                <i-popup
                    :isOpen="isOpen"
                    :anchor="$refs.anchor"
                    :container="$refs.container"
                    :viewport="$refs.container"
                    :anchor-overlap="anchorOverlap"
                >
                    <div style="height: 120px; width: 180px;">
                        POPUP CONTENT
                    </div>
                </i-popup>
            </div>
        `,
        components: {
            IPopup,
        },
        data() {
            return {
                anchorOverlap: "allow",
                isOpen: false,
            };
        },
    });
}

function createAnchorOverlapScrollComponent(): DefineComponent {
    return defineComponent({
        template: /* HTML */ `
            <div
                id="anchor-overlap-scroll-container"
                ref="container"
                style="height: 600px; overflow: auto; position: relative; width: 1000px;"
            >
                <div style="height: 1100px; position: relative; width: 1000px;">
                    <button
                        type="button"
                        id="anchor-overlap-scroll-anchor"
                        ref="anchor"
                        style="box-sizing: border-box; height: 50px; left: 200px; padding: 0; position: absolute; top: 450px; width: 600px;"
                        @click="isOpen = !isOpen"
                    >
                        Open popup
                    </button>
                    <i-popup
                        :isOpen="isOpen"
                        :anchor="$refs.anchor"
                        :container="$refs.container"
                        :viewport="$refs.container"
                        anchor-overlap="never"
                        :set-focus="false"
                        v-slot="{ placement }"
                    >
                        <div
                            id="anchor-overlap-scroll-popup"
                            style="height: 250px; width: 250px;"
                            :data-placement="placement"
                        >
                            POPUP CONTENT
                        </div>
                    </i-popup>
                </div>
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
    });
}

function isOverlapping(a: DOMRect, b: DOMRect): boolean {
    return (
        a.left < b.right &&
        a.right > b.left &&
        a.top < b.bottom &&
        a.bottom > b.top
    );
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

describe("change `anchorOverlap` with open popup", () => {
    it("should recalculate from overlapping overlay to fallback", () => {
        setViewport(VIEWPORT.DESKTOP);
        cy.mount(createAnchorOverlapComponent());

        cy.get("#anchor-overlap-anchor").click();
        popup.el().should("have.class", "popup--overlay");

        cy.get("#disable-anchor-overlap").click();
        popup.el().should("have.class", "popup--inline");
    });
});

describe("scroll container with `anchorOverlap` set to `never`", () => {
    beforeEach(() => {
        cy.viewport(1000, 600);
        cy.mount(createAnchorOverlapScrollComponent());
        cy.get("#anchor-overlap-scroll-anchor").click({
            scrollBehavior: false,
        });
        popup.el().should("have.class", "popup--overlay");
    });

    it("should follow the anchor with the same placement and spacing", () => {
        let initialAnchorTop: number;
        let initialPopupTop: number;
        cy.get("#anchor-overlap-scroll-anchor").then(($anchor) => {
            initialAnchorTop = $anchor[0].getBoundingClientRect().top;
        });
        cy.get(".popup__wrapper").then(($wrapper) => {
            initialPopupTop = $wrapper[0].getBoundingClientRect().top;
        });

        cy.get("#anchor-overlap-scroll-container").scrollTo(0, 10);

        cy.get("#anchor-overlap-scroll-anchor").then(($anchor) => {
            const anchorRect = $anchor[0].getBoundingClientRect();
            cy.get("#anchor-overlap-scroll-popup").should(
                "have.attr",
                "data-placement",
                "C",
            );
            cy.get(".popup__wrapper").should(($wrapper) => {
                const popupRect = $wrapper[0].getBoundingClientRect();
                expect(isOverlapping(popupRect, anchorRect)).to.equal(false);
                expect(popupRect.top - initialPopupTop).to.equal(
                    anchorRect.top - initialAnchorTop,
                );
                expect(anchorRect.top - popupRect.bottom).to.equal(20);
            });
        });
    });

    it("should follow the anchor during continuous scrolling", () => {
        cy.get("#anchor-overlap-scroll-anchor").then(($anchor) => {
            cy.get(".popup__wrapper").then(($wrapper) => {
                for (const scrollTop of [10, 50, 100, 150]) {
                    cy.get("#anchor-overlap-scroll-container").then(
                        ($container) => {
                            const container = $container[0];
                            container.scrollTop = scrollTop;
                            container.dispatchEvent(new Event("scroll"));

                            // Check immediately so retries cannot hide a delayed update.
                            const anchorRect =
                                $anchor[0].getBoundingClientRect();
                            const popupRect =
                                $wrapper[0].getBoundingClientRect();
                            expect(anchorRect.top - popupRect.bottom).to.equal(
                                20,
                            );
                        },
                    );
                }
            });
        });
    });

    it("should retain the placement outside the viewport until reopened", () => {
        let initialAnchorTop: number;
        let initialPopupTop: number;
        cy.get("#anchor-overlap-scroll-anchor").then(($anchor) => {
            initialAnchorTop = $anchor[0].getBoundingClientRect().top;
        });
        cy.get(".popup__wrapper").then(($wrapper) => {
            initialPopupTop = $wrapper[0].getBoundingClientRect().top;
        });

        cy.get("#anchor-overlap-scroll-container").scrollTo(0, 200);

        cy.get("#anchor-overlap-scroll-anchor").then(($anchor) => {
            const anchorRect = $anchor[0].getBoundingClientRect();
            cy.get("#anchor-overlap-scroll-popup").should(
                "have.attr",
                "data-placement",
                "C",
            );
            cy.get(".popup__wrapper").should(($wrapper) => {
                const popupRect = $wrapper[0].getBoundingClientRect();
                expect(isOverlapping(popupRect, anchorRect)).to.equal(false);
                expect(popupRect.top - initialPopupTop).to.equal(
                    anchorRect.top - initialAnchorTop,
                );
                expect(anchorRect.top - popupRect.bottom).to.equal(20);
                expect(popupRect.top).to.be.lessThan(0);
            });
        });

        cy.get("#anchor-overlap-scroll-anchor").click({
            scrollBehavior: false,
        });
        popup.el().should("not.exist");

        cy.get("#anchor-overlap-scroll-anchor").click({
            scrollBehavior: false,
        });
        cy.get("#anchor-overlap-scroll-popup").should(
            "have.attr",
            "data-placement",
            "A",
        );
        cy.get("#anchor-overlap-scroll-anchor").then(($anchor) => {
            const anchorRect = $anchor[0].getBoundingClientRect();
            cy.get(".popup__wrapper").should(($wrapper) => {
                const popupRect = $wrapper[0].getBoundingClientRect();
                expect(popupRect.top - anchorRect.bottom).to.equal(20);
            });
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
