---
title: hasSlot() function
short-title: hasSlot()
name: hasSlot
layout: article
---

Check if slot is implemented by the user.

## Syntax

```ts nocompile
function hasSlot(vm, name, props, options);
```

## Parametrar

`vm: { $slots: Record<string, NormalizedScopedSlot | undefined> }`
: Component instance.

`name: string`
: Name of the slot to check for.

`props: Record<string, unknown>` {@optional}
: Props required by a scoped slot.

`options: Partial<RenderSlotOptions>` {@optional}
: Render options.

    `stripClasses: string[]`
    : List of classes to exclude when extracting slot text.

        Default: `["sr-only"]`

## Returvärde

`true` if the slot is implemented and have non-empty content, otherwise `false`.

## Usage

Given the following markup:

```html static
<my-awesome-component>
    <template #foo>Lorem ipsum dolor sit amet</template>
    <template #bar></template>
</my-awesome-component>
```

```ts
import { defineComponent } from "vue";
import { hasSlot } from "@fkui/vue";

defineComponent({
    methods: {
        dummy() {
            /* --- cut above --- */

            hasSlot(this, "foo"); // --> true
            hasSlot(this, "bar"); // --> false
            hasSlot(this, "baz"); // --> false

            /* --- cut below --- */
        },
    },
});
```

If you use scoped slots you need to pass in the scope:

```html static
<my-awesome-component>
    <template #foo="{ name }"> Hello {{ name }}! </template>
</my-awesome-component>
```

```ts
import { defineComponent } from "vue";
import { hasSlot } from "@fkui/vue";

defineComponent({
    methods: {
        dummy() {
            /* --- cut above --- */

            hasSlot(this, "foo", { name: "World" }); // --> true

            /* --- cut below --- */
        },
    },
});
```

By default text wrapped by the `sr-only` class is ignored.
This can be changed by setting the `stripClasses` option to `[]`

```html static
<my-awesome-component>
    <template #foo>
        <span class="sr-only"> Lorem ipsum dolor sit amet </span>
    </template>
</my-awesome-component>
```

```ts
import { defineComponent } from "vue";
import { hasSlot } from "@fkui/vue";

defineComponent({
    methods: {
        dummy() {
            /* --- cut above --- */

            hasSlot(this, "foo"); // --> false
            hasSlot(this, "foo", {}, { stripClasses: [] }); // --> true

            /* --- cut below --- */
        },
    },
});
```
