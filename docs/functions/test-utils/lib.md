---
name: Generella funktioner
layout: content-with-menu
---

Samling med generella funktioner för automatiska testfall.

## `createPlaceholderInDocument`

Skapar och returnerar ett placeholder element under `<body>`.
Anroparen ansvarar för att städa upp elementet.

Måste köras i en miljö där DOM finns tillgängligt, exempelvis en browser eller JSDOM.

```ts nocompile nolint
function createPlaceholderInDocument(): HTMLElement;
```

### Användning

I Vue.js testfall kan funktionen användas med `attachTo` när komponenten måste finnas i DOM (exempelvis när man testar fokus):

```ts
import { defineComponent } from "vue";

const MyComponent = defineComponent({});

/* --- cut above --- */

import { shallowMount } from "@vue/test-utils";
import { createPlaceholderInDocument } from "@fkui/test-utils";

shallowMount(MyComponent, {
    attachTo: createPlaceholderInDocument(),
});
```

## `generateSelector`

Genererar en CSS selector för givet element.

Måste köras i en miljö där DOM finns tillgängligt, exempelvis en browser eller JSDOM.

```ts nocompile nolint
function generateSelector(element: Element | null): string;
```

- `element` - Elementet att generera selector för.

### Användning

```ts
import { generateSelector } from "@fkui/test-utils";

document.body.innerHTML = /* HTML */ `
    <main id="foo">
        <p class="text">Lorem Ipsum</p>
    </main>
`;

const element = document.querySelector(".text");
const selector = generateSelector(element);

console.log(selector); // --> "#foo .text"
```
