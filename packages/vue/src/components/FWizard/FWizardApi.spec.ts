import { FWizardStepDefinition, addStep, removeStep } from "./FWizardApi";

let steps: FWizardStepDefinition[];

beforeEach(() => {
    steps = [];
    document.body.innerHTML = /* HTML */ `
        <p id="a">first</p>
        <p id="b">second</p>
        <p id="c">third</p>
    `;
});

describe("addStep()", () => {
    it("should add new steps", () => {
        expect.assertions(1);
        const key = "my-key";
        const element = document.createElement("div");
        addStep(steps, key, element);
        expect(steps).toEqual([
            { currentOpen: -1, key, element, stepNumber: 1, isOpen: false },
        ]);
    });

    it("should not replace instances", () => {
        expect.assertions(3);
        const [a, b] = Array.from(document.querySelectorAll("p"));
        const stepA = addStep(steps, "a", a);
        const stepB = addStep(steps, "b", b);
        expect(steps).toHaveLength(2);
        expect(steps[0]).toBe(stepA);
        expect(steps[1]).toBe(stepB);
    });

    it("should sort steps by order in DOM tree", () => {
        expect.assertions(1);
        const [a, b, c] = Array.from(document.querySelectorAll("p"));
        addStep(steps, "b", b);
        addStep(steps, "a", a);
        addStep(steps, "c", c);
        expect(steps).toEqual([
            expect.objectContaining({ key: "a", element: a }),
            expect.objectContaining({ key: "b", element: b }),
            expect.objectContaining({ key: "c", element: c }),
        ]);
    });

    it("should update stepNumber to match position in list", () => {
        expect.assertions(1);
        const [a, b, c] = Array.from(document.querySelectorAll("p"));
        addStep(steps, "b", b);
        addStep(steps, "a", a);
        addStep(steps, "c", c);
        expect(steps).toEqual([
            expect.objectContaining({ key: "a", stepNumber: 1 }),
            expect.objectContaining({ key: "b", stepNumber: 2 }),
            expect.objectContaining({ key: "c", stepNumber: 3 }),
        ]);
    });

    it("should throw error if the same key is registered multiple times", () => {
        expect.assertions(1);
        const element = document.createElement("div");
        expect(() => {
            addStep(steps, "dup", element);
            addStep(steps, "dup", element);
        }).toThrow(
            'An FWizardStep with key "dup" is already registered, refusing to register multiple steps with same key.',
        );
    });
});

describe("removeStep()", () => {
    let stepA: FWizardStepDefinition;
    let stepB: FWizardStepDefinition; // eslint-disable-line @typescript-eslint/no-unused-vars -- for consistency
    let stepC: FWizardStepDefinition;

    beforeEach(() => {
        const [a, b, c] = Array.from(document.querySelectorAll("p"));
        stepB = addStep(steps, "b", b);
        stepA = addStep(steps, "a", a);
        stepC = addStep(steps, "c", c);
    });

    it("should remove step", () => {
        expect.assertions(1);
        removeStep(steps, "b");
        expect(steps).toEqual([
            expect.objectContaining({ key: "a" }),
            expect.objectContaining({ key: "c" }),
        ]);
    });

    it("should not replace instances", () => {
        expect.assertions(3);
        removeStep(steps, "b");
        expect(steps).toHaveLength(2);
        expect(steps[0]).toBe(stepA);
        expect(steps[1]).toBe(stepC);
    });

    it("should update stepNumber to match position in list", () => {
        expect.assertions(1);
        removeStep(steps, "b");
        expect(steps).toEqual([
            expect.objectContaining({ key: "a", stepNumber: 1 }),
            expect.objectContaining({ key: "c", stepNumber: 2 }),
        ]);
    });

    it("should fail silently if key doesn't exist", () => {
        expect.assertions(1);
        expect(() => {
            removeStep(steps, "b");
            removeStep(steps, "b");
        }).not.toThrow();
    });
});
