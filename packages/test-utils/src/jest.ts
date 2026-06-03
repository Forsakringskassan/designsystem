import { toHaveFocus } from "./matchers";

export * from "./lib";

expect.extend({
    toHaveFocus,
});
