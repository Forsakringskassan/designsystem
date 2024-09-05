import { defineComponent, h } from "vue";
import { MaybeWithFKUIContext } from "../../config";
import { mountComponent } from "./mount-component";

const callingInstance = { $fkui: {} } as MaybeWithFKUIContext;

const MockComponent = defineComponent({
    render() {
        return h("em", "My fancy component");
    },
});

function p(text: string): HTMLElement {
    const element = document.createElement("p");
    element.textContent = text;
    return element;
}

beforeEach(() => {
    document.body.innerHTML = "";
});

it("should mount component to container element", () => {
    expect.assertions(1);
    const container = document.createElement("div");
    container.id = "foo";
    const app = mountComponent(callingInstance, MockComponent, {
        attachTo: container,
    });
    expect(container.outerHTML).toMatchInlineSnapshot(`
        <div id="foo">
          <div data-v-app=""><em>My fancy component</em></div>
        </div>
    `);
    app.unmount();
});

it("should mount component to container selector", () => {
    expect.assertions(1);
    const container = document.createElement("div");
    container.id = "foo";
    document.body.appendChild(container);
    const app = mountComponent(callingInstance, MockComponent, {
        attachTo: "#foo",
    });
    expect(document.body.outerHTML).toMatchInlineSnapshot(`
        <body>
          <div id="foo">
            <div data-v-app=""><em>My fancy component</em></div>
          </div>
        </body>
    `);
    app.unmount();
    document.body.removeChild(container);
});

it("should throw error if no component is given", () => {
    expect.assertions(1);
    const container = document.createElement("div");
    expect(() =>
        mountComponent(callingInstance, undefined, { attachTo: container }),
    ).toThrow("mountComponent(..) called without a component");
});

it("should throw error if attachTo selector does not yield any results", () => {
    expect.assertions(1);
    expect(() =>
        mountComponent(callingInstance, MockComponent, {
            attachTo: "foobar > baz",
        }),
    ).toThrow(
        'mountComponent(..) requires a target element (selector "foobar > baz" returned no element)',
    );
});

it("should attach last when attachFirst is false", () => {
    expect.assertions(1);
    document.body.appendChild(p("lorem ipsum"));
    document.body.appendChild(p("dolor sit amet"));
    const app = mountComponent(callingInstance, MockComponent, {
        attachFirst: false,
    });
    expect(document.body.innerHTML).toMatchInlineSnapshot(`
        <p>lorem ipsum</p>
        <p>dolor sit amet</p>
        <div data-v-app=""><em>My fancy component</em></div>
    `);
    app.unmount();
});

it("should attach first when attachFirst is true", () => {
    expect.assertions(1);
    document.body.appendChild(p("lorem ipsum"));
    document.body.appendChild(p("dolor sit amet"));
    const app = mountComponent(callingInstance, MockComponent, {
        attachFirst: true,
    });
    expect(document.body.innerHTML).toMatchInlineSnapshot(`
        <div data-v-app=""><em>My fancy component</em></div>
        <p>lorem ipsum</p>
        <p>dolor sit amet</p>
    `);
    app.unmount();
});
