---
title: getParentByName
name: getParentByName
layout: content-with-menu
---

Get and return the parent of given Vue component that matches given name.

## API

```ts nocompile
function getParentByName(
    vm: ComponentPublicInstance | undefined | null,
    name: string,
): ComponentPublicInstance | never;
```

- `vm` - Component instance.
- `name` - The name of the parent to be found.

Returns the found Vue component.
Throws an error if unable to find parent component by given name.

## Usage

Given the following markup:

```html static
<my-root-component>
    ...
    <my-parent-component>
        ...
        <my-child-component></my-child-component>
    </my-parent-component>
</my-root-component>
```

And given `this` is the `MyChildComponent` instance:

```ts
import { defineComponent } from "vue";
import { getParentByName } from "@fkui/vue";

const MyComponent = defineComponent({});
const targetElement = document.createElement("div");

defineComponent({
    methods: {
        dummy() {
            /* --- cut above --- */

            getParentByName(this, "MyChildComponent"); // --> MyChildComponent
            getParentByName(this, "MyParentComponent"); // --> MyParentComponent
            getParentByName(this, "NowhereToBeFound"); // --> throws Error

            /* --- cut below --- */
        },
    },
});
```
