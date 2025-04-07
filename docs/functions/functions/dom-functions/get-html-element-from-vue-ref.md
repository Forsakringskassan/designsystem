---
title: getHTMLElementFromVueRef
name: getHTMLElementFromVueRef
layout: content-with-menu
---

Gets an `HTMLElement` a ref, provided it is defined and not an array.

## API

```ts nocompile
function getHTMLElementFromVueRef(ref: unknown): HTMLElement | never;
```

- `ref` - The ref to extract the `HTMLElement` from.

Returns an `HTMLElement` if ref is `Vue` or `Element`.

Throws an error if an `HTMLElement` could not be found.

## Usage

Given a Vue SFC such as:

```vue static
<template>
    <div>
        <p ref="myParagraph">lorem ipsum</p>
    </div>
</template>
```

`getHTMLElementFromVueRef` can be called as following:

```ts
import { defineComponent } from "vue";
import { getHTMLElementFromVueRef } from "@fkui/vue";

defineComponent({
    methods: {
        dummy() {
            /* --- cut above --- */

            const element = getHTMLElementFromVueRef(this.$refs.myParagraph);
            //    ^~~~~~~ HTMLElement

            /* --- cut below --- */
        },
    },
});
```

`element` will be a guaranteed instance of `HTMLELement`.

If the ref does not exist or does not reference a single HTML element an error will be thrown.
Don't handle this exception, if you expect this to happen under normal control flow (e.g. the element is hidden by a `v-if`) use {@link findHTMLElementFromVueRef} which returns `undefined` instead .
