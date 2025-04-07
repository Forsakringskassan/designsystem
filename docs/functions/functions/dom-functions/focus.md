---
title: focus
name: focus
layout: content-with-menu
---

Programatically set focus on an element in the DOM.
There is also support for focusing Vue components and `$refs` in Vue components.

## API

```ts nocompile
// @fkui/logic
function focus(
    element: Element | null | undefined,
    options: boolean | FocusOptions = {},
): void;
```

- `element` - Element to focus.
- `options` - Focus options. If you pass boolean `true` or `false` it sets the `force` option.

```ts
interface FocusOptions {
    force?: boolean;
    preventScroll?: boolean;
    scrollToTop?: boolean;
}
```

- `force` - If set to `true` `tabindex="-1"` will be added as needed so any element can be focused.
- `preventScroll` - By default the element is scrolled into view. Set this to `true` to prevent this behavior. See full description of [`preventScroll` at MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#parameters)
- `scrollToTop` - By default the element is scrolled into view centered vertically. Set this to `true` to scroll such that the elements top is at the top of the viewport. It will utilize the `scrollIntoView` function, see full description of [`scrollIntoView` at MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)

```ts nocompile
// @fkui/vue
function focus(element: unknown, options: boolean | FocusOptions = {}): boolean;
```

- `element` - Element to focus.
- `options` - Focus options. If you pass boolean `true` or `false` it sets the `force` option.

Returns `true` if successfully found an HTMLElement to focus. Otherwise, `false`.

## Usage

If not in a Vue context, use the variant from `@fkui/logic`.

```html static
<h1 id="header">Important Section</h1>
<p>Some interesting content.</p>
```

```ts
import { focus } from "@fkui/logic";

focus(document.getElementById("header"), true);
```

### When in Vue Context

When using Vue, it is better to import the variant from `@fkui/vue`.

```vue static
<template>
    <h1 ref="header" tabindex="-1">Important Section</h1>
    <p>Some interesting content.</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { focus } from "@fkui/vue";

export default defineComponent({
    mounted(): void {
        focus(this.$refs.header);
    },
});
</script>
```

If `$refs` returns an array, the first element will get focused.

#### Using `focusTarget`

The example below will recursively search for a focus target and eventually focus the button inside the `MyButton` component.

```vue static
<template>
    <h1>Important Section</h1>
    <p>Some interesting content.</p>
    <my-button ref="myButton" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { focus } from "@fkui/vue";

const MyButton = defineComponent({
    template: /* HTML */ `
        <p>I have a button</p>
        <button ref="foo" type="button">My button</button>
    `,
    computed: {
        focusTarget() {
            return this.$refs.foo;
        },
    },
});

export default defineComponent({
    components: { MyButton },
    computed: {
        focusTarget() {
            return this.$refs.myButton;
        },
    },
    mounted(): void {
        // Recursively follows the focusTarget attribute
        focus(this);
    },
});
</script>
```
