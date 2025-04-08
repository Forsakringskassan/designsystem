---
name: Vue.js
layout: content-with-menu
---

Komponenter för testning av Vue.js komponenter.

## `SizeWrapper`

Renderar upp innehållet i default slotten i olika upplösningar:

- 320px (minsta storlek vi stödjer)
- 639px (övre gränsvärde för mobil)
- 640px (lägre gränsvärde för desktop)
- 1024px (desktop)

```ts
import { type DefineComponent } from "vue";

/* --- cut above --- */

declare const sizeWrapperWidth: number;
declare const sizeWrapperHeight: number;
declare const SizeWrapper: DefineComponent;
```

### Användning

Kan användas i Cypress för att montera upp en komponent och direkt jämföra hur den beteer sig i olika storlekar och/eller ta skärmdumpar.

```ts
/// <reference types="cypress"/>

import { defineComponent } from "vue";
import { mount } from "cypress/vue";

declare global {
    /* eslint-disable-next-line @typescript-eslint/no-namespace -- module augmentation */
    namespace Cypress {
        interface Chainable {
            mount: typeof mount;
        }
    }
}

const AwesomeComponent = defineComponent({});

/* --- cut above --- */

import {
    sizeWrapperWidth,
    sizeWrapperHeight,
    SizeWrapper,
} from "@fkui/test-utils/vue";

const SizesButtonsComponent = defineComponent({
    template: /* HTML */ `
        <size-wrapper>
            <awesome-component> Lorem ipsum </awesome-component>
        </size-wrapper>
    `,
    components: {
        AwesomeComponent,
        SizeWrapper,
    },
});

it(`should show how component looks in different sizes`, () => {
    cy.viewport(sizeWrapperWidth, sizeWrapperHeight);
    cy.mount(SizesButtonsComponent);
});
```

## `DensityWrapper`

Renderar upp innehållet i default slotten i olika densiteter:

- Standard (`density-default`)
- Kompakt (`density-dense`)
- Extra kompakt (`density-densest`)

```ts
import { type DefineComponent } from "vue";

/* --- cut above --- */

declare const densityWrapperWidth: number;
declare const densityWrapperHeight: number;
declare const DensityWrapper: DefineComponent;
```

### Användning

Kan användas i Cypress för att montera upp en komponent som använder densitet och direkt jämföra hur den beteer sig i olika densiteter och/eller ta skärmdumpar.

```ts
/// <reference types="cypress">

import { defineComponent } from "vue";
import { mount } from "cypress/vue";

declare global {
    /* eslint-disable-next-line @typescript-eslint/no-namespace -- module augmentation */
    namespace Cypress {
        interface Chainable {
            mount: typeof mount;
        }
    }
}

const AwesomeComponent = defineComponent({});

/* --- cut above --- */

import {
    densityWrapperHeight,
    densityWrapperWidth,
    DensityWrapper,
} from "@fkui/test-utils/vue";

const DensityComponent = defineComponent({
    template: /* HTML */ `
        <density-wrapper>
            <awesome-component> Lorem ipsum </awesome-component>
        </density-wrapper>
    `,
    components: {
        AwesomeComponent,
        DensityWrapper,
    },
});

it(`should show how component looks in different densities`, () => {
    cy.viewport(densityWrapperWidth, densityWrapperHeight);
    cy.mount(DensityComponent);
});
```
