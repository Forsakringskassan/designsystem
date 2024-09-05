import { EventBus } from "./event-bus";

declare module "./event-bus" {
    interface EventBusMap {
        "my-event": [foo: string, bar: number];
    }
}

it("should listen to events", () => {
    expect.assertions(1);
    const spy = jest.fn();
    EventBus.$on("my-event", spy);
    EventBus.$emit("my-event", "foo", 42);
    expect(spy).toHaveBeenCalledWith("foo", 42);
});

it("should remove listeners", () => {
    expect.assertions(1);
    const spy = jest.fn();
    EventBus.$on("my-event", spy);
    EventBus.$off("my-event", spy);
    EventBus.$emit("my-event", "foo", 42);
    expect(spy).not.toHaveBeenCalled();
});

it("should be type safe", () => {
    expect.assertions(2);
    let foo: string = "";
    let bar: number = 0;
    EventBus.$on("my-event", (a, b) => {
        foo = a;
        bar = b;
    });
    EventBus.$emit("my-event", "foo", 42);
    expect(foo).toBe("foo");
    expect(bar).toBe(42);
});
