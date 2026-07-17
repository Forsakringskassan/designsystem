import "./matchers/vitest-augmentations";
import { expect } from "vitest";
import { toHaveFocus } from "./matchers";

export * from "./lib";

/* eslint-disable-next-line unicorn/no-top-level-side-effects -- expected to have side-effects */
expect.extend({
    toHaveFocus,
});
