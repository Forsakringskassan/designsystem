import { handleTab } from "./handle-tab";

function mountDocument(): void {
    document.body.innerHTML = /* HTML */ `
        <div>
            <input class="test-visible" id="element-outside" />

            <div id="container">
                <button id="element-1" class="test-visible">Focusable</button>
                <input id="element-2" class="test-visible" />
            </div>
        </div>
    `;
}

function getElement(id: string): HTMLElement {
    return document.getElementById(id)!;
}

function getTabKeyboardEvent(target: string, shiftKey: boolean): KeyboardEvent {
    return {
        shiftKey,
        target: getElement(target),
        preventDefault: jest.fn(),
    } as unknown as KeyboardEvent;
}

it.each`
    expectFocus    | havingFocus    | shift
    ${"element-2"} | ${"element-1"} | ${false}
    ${"element-2"} | ${"element-1"} | ${true}
    ${"element-1"} | ${"element-2"} | ${false}
    ${"element-1"} | ${"element-2"} | ${true}
`(
    "should focus $expectFocus when $havingFocus having focus and pressing tab key and shift is $shift",
    ({ expectFocus, havingFocus, shift }) => {
        mountDocument();
        getElement(havingFocus).focus();

        handleTab(
            getTabKeyboardEvent(havingFocus, shift),
            getElement("container"),
        );

        expect(document.activeElement).toEqual(getElement(expectFocus));
    },
);
