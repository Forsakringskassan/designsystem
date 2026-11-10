import "./matchers/vitest-augmentations";
import { expect } from "vitest";
import { toHaveFocus } from "./matchers";

export * from "./lib";

expect.extend({
    toHaveFocus,
});
