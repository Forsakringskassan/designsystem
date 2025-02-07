---
title: findParentByName
name: findParentByName
layout: content-with-menu
---

Find and return the parent of given Vue component that matches given name.

## API

```ts nocompile
function findParentByName(
    vm: ComponentPublicInstance | undefined | null,
    name: string,
): ComponentPublicInstance | undefined;
```

- `vm` - Component instance.
- `name` - The name of the parent to be found.

Returns the found Vue component, otherwise `undefined`.

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
import { findParentByName } from "@fkui/vue";

defineComponent({
    methods: {
        dummy() {
            /* --- cut above --- */

            findParentByName(this, "MyChildComponent"); // --> MyChildComponent
            findParentByName(this, "MyParentComponent"); // --> MyParentComponent
            findParentByName(this, "NowhereToBeFound"); // --> undefined

            /* --- cut below --- */
        },
    },
});
```
