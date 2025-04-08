---
name: Jest
layout: content-with-menu
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
import { it, expect } from "@jest/globals";
import { mount } from "@vue/test-utils";

const AwesomeComponent = defineComponent({});

/* --- cut above --- */

import "@fkui/test-utils/jest";

it("should have focus", () => {
    const wrapper = mount(AwesomeComponent);
    const element = wrapper.get("#something");
    /* @ts-expect-error -- bug in @fkui/test-utils, the type declaration is not properly exposed */
    expect(element).toHaveFocus();
});
```
