---
title: hasSlot
name: hasSlot
layout: content-with-menu
---

Check if slot is implemented by the user.

```ts
export function hasSlot(
    vm: { $slots: Record<string, NormalizedScopedSlot | undefined> },
    name: string,
    props: Record<string, unknown> = {},
): boolean;
```

## Usage

Given the following markup:

```html static
<my-awesome-component>
    <template #foo>Lorem ipsum dolor sit amet</template>
    <template #bar></template>
</my-awesome-component>
```

```ts
hasSlot(this, "foo"); // --> true
hasSlot(this, "bar"); // --> false
hasSlot(this, "baz"); // --> false
```

If you use scoped slots you need to pass in the scope:

```html static
<my-awesome-component>
    <template #foo="{ name }"> Hello {{ name }}! </template>
</my-awesome-component>
```

```ts
hasSlot(this, "foo", { name: "World" }); // --> true
```
