---
title: hasParentByName
name: hasParentByName
layout: content-with-menu
---

Check if given component has a parent with given name.

## API

```ts nocompile
function hasParentByName(
    vm: ComponentPublicInstance | undefined | null,
    name: string,
): boolean;
```

- `vm` - Component instance.
- `name` - The name of the parent to be found.

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
import { hasParentByName } from "@fkui/vue";

defineComponent({
    methods: {
        dummy() {
            /* --- cut above --- */

            hasParentByName(this, "MyChildComponent"); // --> true
            hasParentByName(this, "MyParentComponent"); // --> true
            hasParentByName(this, "NowhereToBeFound"); // --> false

            /* --- cut below --- */
        },
    },
});
```
