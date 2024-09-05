import { documentOrderComparator } from "./document-order-comparator";

declare global {
    /* eslint-disable-next-line @typescript-eslint/no-namespace -- module augmentation */
    namespace jest {
        interface Matchers<R> {
            toBeSameElement(node: Element): R;
        }
    }
}

beforeEach(() => {
    document.body.innerHTML = "";
});

it("should sort by position in DOM tree", () => {
    expect.assertions(3);
    const root = document.createElement("div");
    root.innerHTML = /* HTML */ `
        <p>first</p>
        <p>second</p>
        <p>third</p>
    `;
    const [a, b, c] = Array.from(root.querySelectorAll("p"));
    const result = [b, a, c].sort(documentOrderComparator);
    expect(result[0]).toBeSameElement(a);
    expect(result[1]).toBeSameElement(b);
    expect(result[2]).toBeSameElement(c);
});

it("should handle when elements have different nesting", () => {
    expect.assertions(3);
    const root = document.createElement("div");
    root.innerHTML = /* HTML */ `
        <p>first</p>
        <div>
            <p>second</p>
        </div>
        <p>third</p>
    `;
    const [a, b, c] = Array.from(root.querySelectorAll("p"));
    const result = [b, a, c].sort(documentOrderComparator);
    expect(result[0]).toBeSameElement(a);
    expect(result[1]).toBeSameElement(b);
    expect(result[2]).toBeSameElement(c);
});

it("should retain order when passing disconnected elements", () => {
    expect.assertions(3);
    const c = document.createElement("div");
    const b = document.createElement("div");
    const a = document.createElement("div");
    const result = [b, a, c].sort(documentOrderComparator);
    expect(result[0]).toBeSameElement(b);
    expect(result[1]).toBeSameElement(a);
    expect(result[2]).toBeSameElement(c);
});

it("should handle null by sorting them last", () => {
    expect.assertions(3);
    const root = document.createElement("div");
    root.innerHTML = /* HTML */ `
        <p>first</p>
        <p>second</p>
    `;
    const [a, b] = Array.from(root.querySelectorAll("p"));
    const result = [b, null, a].sort(documentOrderComparator);
    expect(result[0]).toBeSameElement(a);
    expect(result[1]).toBeSameElement(b);
    expect(result[2]).toBeNull();
});

expect.extend({
    toBeSameElement(
        this: jest.MatcherUtils,
        received: Element | null | undefined,
        actual: Element,
    ): jest.CustomMatcherResult {
        const pass = received ? received.isSameNode(actual) : false;
        const message = (): string => {
            const hint = this.utils.matcherHint(".toBeSameElement");
            const prettyExpected = this.utils.printExpected(actual.outerHTML);
            const prettyReceived = this.utils.printReceived(
                received?.outerHTML,
            );
            const reason = pass
                ? "Expected node to be different from"
                : "Expected node to be same as";
            return `${hint}\n\n${reason}:\n  ${prettyExpected}\nReceived:\n  ${prettyReceived}\n`;
        };
        return {
            pass,
            message,
        };
    },
});
