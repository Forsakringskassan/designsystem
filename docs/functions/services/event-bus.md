---
title: EventBus
layout: content-with-menu
component: EventBus
---

`EventBus` is a global eventhandler where one can listen on and emit events.

In general using global events should be avoided and instead communication between components should instead:

-   Use `props` for the parent to pass data down to a child.
-   Use Vue events for children to notify the parent of changes.

Using global events can lead to code that is hard to troubleshoot, diagnose and to write tests for.
Use with caution.

## Usage

```ts
import { EventBus } from "@fkui/vue";

/* optional: type-safe events */
declare module "@fkui/vue" {
    interface EventBusMap {
        "my-event": [name: string, age: number];
    }
}

EventBus.$on("my-event", (name, age) => {
    console.log(name, age);
});

EventBus.$emit("my-event", "Kalle Anka", 42);
```

Type-safety is optional but strongly recommended.
For untyped events any number of parameters may be passed and their type will be `unknown`.

## API

### `EventBus.$emit(type: string, ...args: unknown[])`

Emit event.
All listeners for this event will notified in the same order they where added.
The listeners runs synchronous.

### `EventBus.$on(type: string, callback: (...args: unknown[]) => void)`

Add a new event listener.

### `EventBus.$off(type: string, callback: (...args: unknown[]) => void)`

Remove previously added event listener.
Make sure to pass in the same callback as you used when adding the listener.
