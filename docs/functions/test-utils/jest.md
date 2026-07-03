---
name: Jest
layout: content-with-menu
search:
    terms:
        - testverktyg
        - jest
---

Matchers för Jest.

## `toHaveFocus`

Testar om en komponent har fokus eller ej.

Motsvarar `expect(document.activeElement).toBe(element)` fast med bättre felmeddelande.

```ts nocompile nolint
function toHaveFocus(element: HTMLElement): void;
```

### Användning

```ts
import { defineComponent } from "vue";
import { expect, it } from "@jest/globals";
import { mount } from "@vue/test-utils";

const AwesomeComponent = defineComponent({});

/* --- cut above --- */

import "@fkui/test-utils/jest";

it("should have focus", () => {
    const wrapper = mount(AwesomeComponent);
    const element = wrapper.get("#something");
    expect(element).toHaveFocus();
});
```
