---
title: Version 5 migreringsguide
name: migrating-to-v5
layout: pattern
---

## Vue 3

`@fkui/vue` is migrated to Vue 3 and requires your app to be migrated as well.

:::alt migrating-to-v5-pr

:::

### Prerequisites

Before you begin make sure to read:

- Official [Vue 3 migration guide][vue3-migration]
- Official [vue-router migration guide][vue-router-migration] (if your application uses routing)

[vue3-migration]: https://v3-migration.vuejs.org/
[vue-router-migration]: https://router.vuejs.org/guide/migration/

Additionally some changes has to be made to your build toolchain:

- `@forsakringskassan/jest-config` must be updated to 29.3.0 or later.
- Toolchain migrated to Vite
- Optional: If your application uses vue-styleguidist to generate documentation it must be migrated to `@forsakringskassan/docs-generator`

:::alt migrating-to-v5-other

:::

If you are using `vue-stylegudist`:

`vue-stylegudist` does not support Vue 3 and must be replaced.
Suggested replacement is [`@forsakringskassan/docs-generator`](https://github.com/Forsakringskassan/docs-generator).

### Broad instructions

1. Replace `new Vue(..)` with `createApp(..)`.

```diff
-import Vue from "vue";
+import { createApp } from "vue";

-const vm = new Vue(MyAwesomeApp);
+const app = createApp(MyAwesomeApp);
```

2. Plugins are applied per instance and not global:

```diff
-Vue.use(MyAwesomePlugin);

 const app = createApp(MyAwesomeApp);
+app.use(MyAwesomePlugin);
```

3. Replace `Vue.extend(..)` with `defineComponent(..)` in Single File Components (SFCs):

```diff
-import Vue from "vue";
+import { defineComponent } from "vue";

-export default Vue.extend({
+export default defineComponent({
   /* ... */
 });
```

### Set running app context

FKUI requires knowledge about the running app instance.

```diff
+import { setRunningContext } from "@fkui/vue";

const app = createApp(App);
+setRunningContext(app);
```

Note: you can still create multiple Vue applications, just make sure to call `setRunningContext` for each `app` you create.

### `mountComponent` cleanup

`mountComponent(..)` returns an `App` instance instead of Vue 2 `Vue` instance and thus uses the `unmount()` method instead of `$destroy()`.

```diff
-const vm = mountComponent(..);
-vm.$destroy();
+const app = mountComponent(..);
+app.unmount();
```

Additionally you no longer need to manually remove the target element:

```diff
 const targetElement = document.createElement();
 const app = mountComponent(MyAwesomeComponent, { attachTo: targetElement });
-targetElement.removeChild(vm.$el);
 app.unmount();
```

### `mountComponent` requires calling instance

`mountComponent` and related functions needs the calling instance to be passed as a parameter.

This change affects the following functions:

- `mountComponent`
- `openModal`
- `confirmModal`
- `formModal`
- `mountFOffline`

For instance, when using `mountComponent(..)`:

```diff
-mountComponent(MyAwesomeComponent, { ... });
+mountComponent(this, MyAwesomeComponent, { ... });
```

### `mountComponent` options now follow Vue3 `$attrs` structure

Passing props:

For instance, when using `mountComponent(..)`:

```diff
mountComponent(this, MyComponent, {
    attachTo: targetElement,
-   props: {
-       foo: "bar",
-   },
+   foo: "bar",
});
```

Listening to events:

```diff
mountComponent(this, MyComponent, {
    attachTo: targetElement,
-   on: {
-       submit(): void {
-           /* do something */
-       },
+   onSubmit: void {
+       /* do something */
+   },
});
```

### `<i-popup-target>` removed

If your application includes the `<i-popup-target>` component you must remove it.
By default any `IPopup` will be mounted as a child of `<body>` but this can be customized by the `Config.popupTarget` selector.

### `mountOffline(...)` removed

`mountOffline(...)` is no longer available. For EXP-applications it´s not needed, as the feature is now included in Sitevision.
If you are creating a GHS-application with the need for the `FOffline` component, just add `<f-offline> Custom Message </f-offline>` to your application template.

### `#tooltip` slot in custom components

If you have an application specific input field wrapping the `#tooltip` slot from `FLabel` you must now add `v-if="$slots.tooltip"` to the component:

```diff
-<template #tooltip>
+<template v-if="$slots.tooltip" #tooltip>
     <!-- @slot Slot for tooltip. -->
     <slot name="tooltip"></slot>
 </template>
```

### Class on components

```html static
<f-text-field class="foo"></f-text-field>
```

Classes used to be set on the root element of the component.
It is now transparently set on the `<input>` element instead.

## Vue Runtime

The `@fkui/vue-runtime` package has been removed.

Instead each package has to be manually installed:

```bash
npm install @fkui/{css-variables,logic,date,vue}
npm rm @fkui/vue-runtime
```

If you use additional packages such as `@fkui/vue-labs` you need to install it as well.

Replace imports from `@fkui/vue-runtime` to respective package directly:

```diff
-import { foo } from "@fkui/vue-runtime/logic";
-import { bar } from "@fkui/vue-runtime/vue";
+import { foo } from "@fkui/logic";
+import { bar } from "@fkui/vue";
```

## Personnummer displays 10 digits instead of 12

Personnummer is extended to understand both 12- and 10-digit strings.

Personnummer is still saved with 12-digits but displayed with 10 digits.
Textkeys have been replaced in order to not interfer with already-deployed applications
using former 12-digit display.

Read more about personnummer format at
[Skatteverket](https://www.skatteverket.se/privat/folkbokforing/personnummer.4.3810a01c150939e893f18c29.html).
