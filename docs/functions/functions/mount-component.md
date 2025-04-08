---
title: mountComponent
layout: content-with-menu
---

::: warning

This function is not yet available for usage with Vue Composition API!

:::

```ts
interface MountOptions {
    /**
     * Element to mount component under. Default `<body>`.
     */
    attachTo?: string | Element;

    /**
     * Attach as first child. Default `false`.
     */
    attachFirst?: boolean;
}
```

```ts nocompile
function mountComponent(
    callingInstance: MaybeWithFKUIContext,
    Component: MaybeComponent,
    options?: Record<string, unknown> & MountOptions,
): App<Element>;
```

Mount a VUE component using API.
The component will be mounted as a child of the target element and not onto the element itself.

## Usage

```ts
import { defineComponent } from "vue";
import { mountComponent } from "@fkui/vue";

const MyComponent = defineComponent({});

defineComponent({
    methods: {
        dummy() {
            /* --- cut above --- */

            /* mount component */
            const targetElement = document.querySelector("body")!; // eslint-disable-line @typescript-eslint/no-non-null-assertion
            const app = mountComponent(this, MyComponent, {
                attachTo: targetElement,
            });

            /* do fancy stuff */

            /* cleanup */
            app.unmount();

            /* --- cut below --- */
        },
    },
});
```

```import
MountOptionsExample.vue
```

## Passing props and listeners

Props and listeners can be passed in the options object:

```ts
import { defineComponent } from "vue";
import { mountComponent } from "@fkui/vue";

const MyComponent = defineComponent({});
const targetElement = document.createElement("div");

defineComponent({
    methods: {
        dummy() {
            /* --- cut above --- */

            mountComponent(this, MyComponent, {
                attachTo: targetElement,

                /* props */
                foo: "bar",

                /* listeners */
                onSubmit(): void {
                    /* do something */
                },
            });

            /* --- cut below --- */
        },
    },
});
```
