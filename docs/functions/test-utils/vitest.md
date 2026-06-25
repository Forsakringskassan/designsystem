---
name: Vitest
layout: content-with-menu
search:
    terms:
        - testverktyg
        - vitest
---

Matchers för Vitest.

Nya projekt bör använda Vitest som standardval.

## `toHaveFocus`

Testar om en komponent har fokus eller ej.

Motsvarar `expect(document.activeElement).toBe(element)` fast med bättre felmeddelande.

```ts nocompile nolint
function toHaveFocus(element: HTMLElement): void;
```

### Användning

```ts
import { defineComponent } from "vue";
import { mount } from "@vue/test-utils";
import { expect, it } from "vitest";

const AwesomeComponent = defineComponent({});

/* --- cut above --- */

import "@fkui/test-utils/vitest";

it("should have focus", () => {
    const wrapper = mount(AwesomeComponent);
    const element = wrapper.get("#something");
    expect(element).toHaveFocus();
});
```
