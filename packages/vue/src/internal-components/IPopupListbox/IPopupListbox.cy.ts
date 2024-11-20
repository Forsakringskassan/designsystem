import { defineComponent } from "vue";
import IPopupListbox from "./IPopupListbox.vue";

function setViewport(viewPort: { height: number; width: number }): void {
    cy.viewport(viewPort.width, viewPort.height);
}

describe("IPopupListbox below anchor", () => {
    beforeEach(() => {
        setViewport({ height: 300, width: 480 });
    });

    it("should position 2 items below input without scroll", () => {
        const component = defineComponent({
            template: /* HTML */ `
                <div>
                    <label for="input">Items</label>
                    <input
                        id="input"
                        ref="input"
                        type="text"
                        style="height: 50px"
                    />
                    <i-popup-listbox
                        :is-open
                        :anchor="$refs.input"
                        :num-of-items="2"
                    >
                        <ul
                            style="list-style-type: none; padding: 0; margin: 0"
                        >
                            <li v-for="index in 2" :key="index">
                                Item {{ index }}
                            </li>
                        </ul>
                    </i-popup-listbox>
                    <button type="button" @click="isOpen = !isOpen">
                        Open listbox
                    </button>
                </div>
            `,
            components: {
                IPopupListbox,
            },
            data() {
                return {
                    isOpen: false,
                };
            },
        });
        cy.mount(component);
        cy.get("button").click();
        cy.get("ul").should("be.visible");

        /**
         * cy.toMatchScreenshot();
         * replace cy.get().should() ↓ with toMatchScreenshot ↑ when it works again
         */

        // top = body margin 8px + input height 50px
        cy.get(".popup__wrapper").should("have.css", "top", "58px");
        cy.get(".popup__wrapper").should("have.css", "left", "43px");
    });

    it("should position 6 items below input without scroll", () => {
        const component = defineComponent({
            template: /* HTML */ `
                <div>
                    <label for="input">Items</label>
                    <input
                        id="input"
                        ref="input"
                        type="text"
                        style="height: 50px"
                    />
                    <i-popup-listbox
                        :is-open
                        :anchor="$refs.input"
                        :num-of-items="6"
                    >
                        <ul
                            style="list-style-type: none; padding: 0; margin: 0"
                        >
                            <li v-for="index in 6" :key="index">
                                Item {{ index }}
                            </li>
                        </ul>
                    </i-popup-listbox>
                    <button type="button" @click="isOpen = !isOpen">
                        Open listbox
                    </button>
                </div>
            `,
            components: {
                IPopupListbox,
            },
            data() {
                return {
                    isOpen: false,
                };
            },
        });
        cy.mount(component);
        cy.get("button").click();
        cy.get("ul").should("be.visible");

        /**
         * cy.toMatchScreenshot();
         * replace cy.get().should() ↓ with toMatchScreenshot ↑ when it works again
         */

        // top = body margin 8px + input height 50px
        cy.get(".popup__wrapper").should("have.css", "top", "58px");
        cy.get(".popup__wrapper").should("have.css", "left", "43px");
    });

    it("should position 15 items below input with scroll", () => {
        const component = defineComponent({
            template: /* HTML */ `
                <div>
                    <label for="input">Items</label>
                    <input
                        id="input"
                        ref="input"
                        type="text"
                        style="height: 50px"
                    />
                    <i-popup-listbox
                        :is-open
                        :anchor="$refs.input"
                        :num-of-items="15"
                    >
                        <ul
                            style="list-style-type: none; padding: 0; margin: 0"
                            tabindex="0"
                        >
                            <li v-for="index in 15" :key="index">
                                Item {{ index }}
                            </li>
                        </ul>
                    </i-popup-listbox>
                    <button type="button" @click="isOpen = !isOpen">
                        Open listbox
                    </button>
                </div>
            `,
            components: {
                IPopupListbox,
            },
            data() {
                return {
                    isOpen: false,
                };
            },
        });
        cy.mount(component);
        cy.get("button").click();
        cy.get("ul").should("be.visible");

        /**
         * cy.toMatchScreenshot();
         * replace cy.get().should() ↓ with toMatchScreenshot ↑ when it works again
         */

        // top = body margin 8px + input height 50px
        cy.get(".popup__wrapper").should("have.css", "top", "58px");
        cy.get(".popup__wrapper").should("have.css", "left", "43px");
    });
});

describe("IPopupListbox above anchor", () => {
    beforeEach(() => {
        setViewport({ height: 300, width: 480 });
    });
    it("should position 2 items above input without scroll", () => {
        const component = defineComponent({
            template: /* HTML */ `
                <div>
                    <label for="input">Items</label>
                    <input
                        id="input"
                        ref="input"
                        type="text"
                        style="height: 50px; margin-top: 200px"
                    />
                    <i-popup-listbox
                        :is-open
                        :anchor="$refs.input"
                        :num-of-items="2"
                    >
                        <ul
                            style="list-style-type: none; padding: 0; margin: 0"
                        >
                            <li v-for="index in 2" :key="index">
                                Item {{ index }}
                            </li>
                        </ul>
                    </i-popup-listbox>
                    <button type="button" @click="isOpen = !isOpen">
                        Open listbox
                    </button>
                </div>
            `,
            components: {
                IPopupListbox,
            },
            data() {
                return {
                    isOpen: false,
                };
            },
        });
        cy.mount(component);
        cy.get("button").click();
        cy.get("ul").should("be.visible");

        /**
         * cy.toMatchScreenshot();
         * replace cy.get().should() ↓ with toMatchScreenshot ↑ when it works again
         */

        // top = body margin-top + input margin-top + 2 * itemHeight = 8 + 200 - 2 * 24 = 160
        cy.get(".popup__wrapper").should("have.css", "top", "160px");
        cy.get(".popup__wrapper").should("have.css", "left", "43px");
    });

    it("should position 6 items above input without scroll", () => {
        const component = defineComponent({
            template: /* HTML */ `
                <div>
                    <label for="input">Items</label>
                    <input
                        id="input"
                        ref="input"
                        type="text"
                        style="height: 50px; margin-top: 200px"
                    />
                    <i-popup-listbox
                        :is-open
                        :anchor="$refs.input"
                        :num-of-items="6"
                    >
                        <ul
                            style="list-style-type: none; padding: 0; margin: 0"
                        >
                            <li v-for="index in 6" :key="index">
                                Item {{ index }}
                            </li>
                        </ul>
                    </i-popup-listbox>
                    <button type="button" @click="isOpen = !isOpen">
                        Open listbox
                    </button>
                </div>
            `,
            components: {
                IPopupListbox,
            },
            data() {
                return {
                    isOpen: false,
                };
            },
        });
        cy.mount(component);
        cy.get("button").click();
        cy.get("ul").should("be.visible");

        /**
         * cy.toMatchScreenshot();
         * replace cy.get().should() ↓ with toMatchScreenshot ↑ when it works again
         */

        // top = body margin-top + input margin-top + 6 * itemHeight = 8 + 200 - 6 * 24
        cy.get(".popup__wrapper").should("have.css", "top", "64px");
        cy.get(".popup__wrapper").should("have.css", "left", "43px");
    });

    it("should position 15 items above input with scroll", () => {
        const component = defineComponent({
            template: /* HTML */ `
                <div>
                    <label for="input">Items</label>
                    <input
                        id="input"
                        ref="input"
                        type="text"
                        style="height: 50px; margin-top: 200px"
                    />
                    <i-popup-listbox
                        :is-open
                        :anchor="$refs.input"
                        :num-of-items="15"
                    >
                        <ul
                            style="list-style-type: none; padding: 0; margin: 0"
                            tabindex="0"
                        >
                            <li v-for="index in 15" :key="index">
                                Item {{ index }}
                            </li>
                        </ul>
                    </i-popup-listbox>
                    <button type="button" @click="isOpen = !isOpen">
                        Open listbox
                    </button>
                </div>
            `,
            components: {
                IPopupListbox,
            },
            data() {
                return {
                    isOpen: false,
                };
            },
        });
        cy.mount(component);
        cy.get("button").click();
        cy.get("ul").should("be.visible");

        /**
         * cy.toMatchScreenshot();
         * replace cy.get().should() ↓ with toMatchScreenshot ↑ when it works again
         */

        // top = body margin-top + input margin-top + 6 * itemHeight = 8 + 200 - 6 * 24
        cy.get(".popup__wrapper").should("have.css", "top", "64px");
        cy.get(".popup__wrapper").should("have.css", "left", "43px");
    });
});
