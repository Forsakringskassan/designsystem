---
name: Jest
layout: content-with-menu
---

Matchers för Jest.

## `toHaveFocus`

Testar om en komponent har fokus eller ej.

Motsvarar `expect(document.activeElement).toBe(element)` fast med bättre felmeddelande.

```ts
function toHaveFocus(element: HTMLElement): void;
```

### Användning

```ts
import "@fkui/test-utils/jest";

it("should have focus", () => {
    const wrapper = mount(AwesomeComponent);
    const element = wrapper.get("#something");
    expect(element).toHaveFocus();
});
```
