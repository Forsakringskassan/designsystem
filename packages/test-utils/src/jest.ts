import { expect } from "@jest/globals";
import "./matchers/jest-augmentations";
import { toHaveFocus } from "./matchers";

export * from "./lib";

/* eslint-disable-next-line unicorn/no-top-level-side-effects -- expected to have side-effects */
expect.extend({
    toHaveFocus,
});
