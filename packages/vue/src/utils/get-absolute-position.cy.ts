import { defineComponent } from "vue";
import { getAbsolutePosition } from "./get-absolute-position";

const elementId = "#test-el";

const CYPRESS_MARGIN = 8;
const LEFT = 10;
const TOP = 20;
const WIDTH = 150;
const HEIGHT = 200;

const TestComponent = defineComponent({
    template: /* HTML */ `
        <div style="position: relative">
            <div id="test-el" :style></div>
        </div>
    `,
    data() {
        return {
            style: `
                position: absolute;
                background-color: hotpink;
                left: ${LEFT}px;
                top: ${TOP}px;
                width: ${WIDTH}px;
                height: ${HEIGHT}px;
            `,
        };
    },
});

it("should return accurate values for element", () => {
    cy.mount(TestComponent);
    cy.get(elementId).then((el) => {
        const testElement = el.get(0);
        const result = getAbsolutePosition(testElement);

        expect(result.x).to.equal(LEFT + CYPRESS_MARGIN);
        expect(result.y).to.equal(TOP + CYPRESS_MARGIN);
        expect(result.width).to.equal(WIDTH);
        expect(result.height).to.equal(HEIGHT);
    });
});

it("should return undefined if pass undefined", () => {
    const result = getAbsolutePosition(undefined);
    expect(result).to.equal(undefined);
});
