---
title: renderSlotText
name: renderSlotText
layout: content-with-menu
---

Pragmatically render slot content and return result as a string.
Leading and trailing whitespace is trimmed and internal whitespace is collapsed.
Any elements with the `sr-only` class will be ignored.

```ts
interface RenderSlotOptions {
    /**
     * List of classes to exclude when extracting slot text.
     *
     * Default: `["sr-only"]`
     */
    stripClasses: string[];
}
```

```ts nocompile
function renderSlotText(
    render: Slot | undefined,
    props?: Record<string, unknown>,
    options?: Partial<RenderSlotOptions>,
): string | undefined;
```

## Usage

Given the following markup:

```html static
<my-awesome-component>
    <template #foo> Lorem ipsum dolor sit amet </template>
</my-awesome-component>
```

```ts
import { useSlots } from "vue";
import { renderSlotText } from "@fkui/vue";

/* --- cut above --- */

const slots = useSlots();
renderSlotText(slots.foo);
// --> "Lorem ipsum dolor sit amet"
```

If you use scoped slots you need to pass in the scope:

```html static
<my-awesome-component>
    <template #foo="{ name }"> Hello {{ name }}! </template>
</my-awesome-component>
```

```ts
import { useSlots } from "vue";
import { renderSlotText } from "@fkui/vue";

/* --- cut above --- */

const slots = useSlots();
renderSlotText(slots.foo, { name: "World" });
// --> "Hello World!"
```

The slots may contain deeply nested markup, comments and Vue templating such as `v-if`, `v-for` etc.
