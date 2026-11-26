import { expect } from "@jest/globals";
import "./matchers/jest-augmentations";
import { toHaveFocus } from "./matchers";

export * from "./lib";

expect.extend({
    toHaveFocus,
});
