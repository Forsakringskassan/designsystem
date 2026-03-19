import { config } from "../../config";
import { getContainer } from "./get-container";

beforeEach(() => {
    config.popupContainer = document.body;
});

it("should get element from explicit given prop", () => {
    expect.assertions(1);
    const root = document.createElement("div");
    root.innerHTML = /* HTML */ `
        <div id="container"></div>
        <div id="popup"></div>
    `;
    const container = root.querySelector<HTMLElement>("#container")!;
    const element = root.querySelector<HTMLElement>("#popup")!;
    const result = getContainer(element, container);
    expect(result.id).toBe(container.id);
});

it("should get element from parent", () => {
    expect.assertions(1);
    const root = document.createElement("div");
    root.innerHTML = /* HTML */ `
        <div id="container" class="popup__container">
            <div id="popup"></div>
        </div>
    `;
    const container = root.querySelector<HTMLElement>("#container")!;
    const element = root.querySelector<HTMLElement>("#popup")!;
    const result = getContainer(element, undefined);
    expect(result.id).toBe(container.id);
});

it("should get element from default config", () => {
    expect.assertions(1);
    const root = document.createElement("div");
    root.innerHTML = /* HTML */ `
        <div id="container"></div>
        <div id="popup"></div>
    `;
    const container = root.querySelector<HTMLElement>("#container")!;
    const element = root.querySelector<HTMLElement>("#popup")!;
    config.popupContainer = container;
    const result = getContainer(element, undefined);
    expect(result.id).toBe(container.id);
});

it("should prefer explicit over other variants", () => {
    expect.assertions(1);
    const root = document.createElement("div");
    root.innerHTML = /* HTML */ `
        <div id="container"></div>
        <div id="default"></div>
        <div id="parent" class="popup__container">
            <div id="popup"></div>
        </div>
    `;
    config.popupContainer = root.querySelector<HTMLElement>("#default")!;
    const container = root.querySelector<HTMLElement>("#container")!;
    const element = root.querySelector<HTMLElement>("#popup")!;
    const result = getContainer(element, container);
    expect(result.id).toBe(container.id);
});

it("should prefer parent over default", () => {
    expect.assertions(1);
    const root = document.createElement("div");
    root.innerHTML = /* HTML */ `
        <div id="container"></div>
        <div id="default"></div>
        <div id="parent" class="popup__container">
            <div id="popup"></div>
        </div>
    `;
    config.popupContainer = root.querySelector<HTMLElement>("#default")!;
    const parent = root.querySelector<HTMLElement>("#parent")!;
    const element = root.querySelector<HTMLElement>("#popup")!;
    const result = getContainer(element, undefined);
    expect(result.id).toBe(parent.id);
});
