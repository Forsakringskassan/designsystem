import "./default-layout";
import { defineLayout, type LayoutDefinition } from "./define-layout";
import { getLayout } from "./layout-register";

type ObservedAttributes = (typeof PageLayout.observedAttributes)[number];

const stubLayout = defineLayout({
    name: "",
    areas: {},
});

const styleContent = css`
    .page-layout {
        display: grid;
        min-height: 100cqh;
        width: 100cqw;
    }

    .page-layout__area {
        display: flex;
        position: relative;

        &[data-direction="column"] {
            flex-direction: column;
        }

        &[data-direction="row"] {
            flex-direction: row;
        }

        &:empty {
            display: none;
        }
    }
`;

function css(parts: TemplateStringsArray): string {
    return parts.join("");
}

function getSlotNames(element: HTMLElement): string[] {
    return Array.from(
        element.querySelectorAll(":scope > [slot]"),
        (it) => it.slot,
    );
}

export class PageLayout extends HTMLElement {
    #wrapper: HTMLDivElement;
    #elements: Record<string, HTMLDivElement> = {};
    #layout: LayoutDefinition = stubLayout;
    #observer: MutationObserver;
    #slotNames: string[] = [];

    public constructor() {
        super();
        this.#wrapper = document.createElement("div");
        this.#observer = new MutationObserver(() => {
            this.slotNames = getSlotNames(this);
        });
    }

    /* eslint-disable-next-line @typescript-eslint/explicit-function-return-type -- this one is better to infer or each attribute would have to be duplicated */
    public static get observedAttributes() {
        return ["layout"] as const;
    }

    public connectedCallback(): void {
        this.slotNames = getSlotNames(this);
        this.#observer.observe(this, { childList: true });

        const shadow = this.attachShadow({ mode: "open" });

        const style = document.createElement("style");
        style.textContent = styleContent;

        shadow.append(style);
        shadow.append(this.#wrapper);
    }

    public disconnectedCallback(): void {
        this.#observer.disconnect();
    }

    public attributeChangedCallback(
        name: ObservedAttributes,
        _oldValue: string,
        value: string,
    ): void {
        /* eslint-disable-next-line sonarjs/no-small-switch -- opiniated rule, in this case switch seem justified in my opinion */
        switch (name) {
            case "layout": {
                const part = ["grid", value].filter(Boolean).join(" ");
                this.#wrapper.className = "page-layout";
                this.#wrapper.setAttribute("part", part);
                this.#layout = getLayout(value) ?? stubLayout;
                this.updateSlotElements();
                break;
            }
        }
    }

    private get slotNames(): string[] {
        return this.#slotNames;
    }

    private set slotNames(slots: string[]) {
        this.#slotNames = slots;
        this.updateSlotElements();
    }

    private updateSlotElements(): void {
        const wrapper = this.#wrapper;
        const layout = this.#layout;

        for (const slot of this.#slotNames) {
            const existing = this.#elements[slot];
            const element = existing ?? document.createElement("div");
            const { attach, direction } = layout.areas[slot];
            element.className = "";
            element.classList.add("page-layout__area");
            element.setAttribute("part", ["area", slot].join(" "));
            element.setAttribute("data-direction", direction);
            element.style.setProperty("grid-area", slot);
            element.style.setProperty("--f-layout-area", `"${slot}"`);
            element.style.setProperty("--f-layout-attach", `"${attach}"`);
            element.style.setProperty("--f-layout-direction", `"${direction}"`);
            if (!existing) {
                const slotElement = document.createElement("slot");
                slotElement.name = slot;
                element.append(slotElement);
                wrapper.append(element);
                this.#elements[slot] = element;
            }
        }
    }
}
